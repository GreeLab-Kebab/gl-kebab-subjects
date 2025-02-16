/* @build.message@ */
define("mp/modules/policies", [], function() {
    var e = {
        iplayer: {
            guidanceCleared: !1,
            siteID: "iPlayer",
            defaultUiClass: "iplayer",
            ui: {
                cta: {
                    iplayer: !0
                },
                guidance: {
                    displayContinuousGuidanceInQueuePlaylist: !1
                }
            }
        },
        news: {
            ui: {
                colour: "#bb1919",
                alternateColour: "#bb1919",
                cta: {
                    mode: "default"
                }
            },
            preferPlainOverDash: !0,
            guidanceCleared: !0,
            siteID: "News",
            defaultUiClass: "news",
            preferHtmlOnMobile: !0
        },
        sport: {
            ui: {
                colour: "#eed71c",
                foreColour: "#000000",
                alternateColour: "#0087ff",
                alternateForeColour: "#ffffff",
                accessibility: {
                    enhanceBrightColoursContrast: !0
                }
            },
            siteID: "Sport",
            defaultUiClass: "sport",
            guidanceCleared: !0
        },
        generic: {
            ui: {
                colour: "#ebebeb",
                foreColour: "#101010"
            },
            guidanceCleared: !0
        },
        background: {
            noTracking: !0,
            backgroundPlayer: !0,
            responsive: !0,
            loop: !0,
            muted: !0,
            autoplay: !0,
            includeAppClickHandler: !1,
            ui: {
                controls: {
                    enabled: !1
                },
                errorDialog: {
                    enabled: !1
                },
                buffer: {
                    enabled: !1
                },
                cta: {
                    enabled: !1
                },
                fullscreen: {
                    enabled: !1,
                    dblclick: !1
                },
                poster: {
                    availableWhenPaused: !0,
                    availableWhenSettingUp: !0
                },
                displayCover: !0,
                hideDefaultErrors: !0
            }
        }
    };
    return e
});
define("mp/modules/device", [], function() {
    function e(e, t) {
        var i = e.exec(t);
        if (i) {
            i.shift();
            return +i[0]
        }
    }

    function t() {
        var t = window.embeddedMedia.demi,
            r = t.ua,
            o = / edge\//.test(r),
            s = /chrome/.test(r) && !o,
            l = 0,
            d = /trident/.test(r),
            c = 0,
            p = /firefox/.test(r),
            u = 0,
            m = /windows phone/.test(r),
            f = "PlayStation 4" == navigator.platform;
        s && (l = e(/chrome\/(\d+)(?:\.(\d*))?(?:\.(\d*))?(?:\.(\d*))?/, r));
        p && (u = e(/firefox\/(\d+)(?:\.(\d*))?/, r));
        o && (c = e(/edge\/(\d+)(?:\.(\d*))?/, r));
        var h = function() {
                var e = /mac/.test(r) && !/like mac os x/.test(r),
                    t = {
                        win: /windows/.test(r) && !m,
                        mac: e,
                        macsafari: /safari/.test(r) && e && !s && !o && !m,
                        ios: /like mac os x/.test(r),
                        android: /android/.test(r) && !o,
                        playbook: /playbook/.test(r),
                        blackberry: /blackberry/.test(r) || /bb10/.test(r),
                        winphone: m,
                        kindleSilk: /silk/.test(r),
                        winwebview: /windows nt 10/.test(r) && /webview/.test(r),
                        win10arm: /windows nt 10\.[0-9]; arm/.test(r),
                        kaios: /kaios/.test(r)
                    };
                for (var i in t) t[i] && (t.name = i);
                if (t.macsafari) {
                    r.match(/version\/[^\d]*([\d|\.]+\d)/);
                    t.safariVersion = parseFloat(RegExp.$1);
                    r.match(/mac os x 10_([\[0-9)][\[0-9)])/);
                    t.macosVersion = parseInt(RegExp.$1, 10)
                }
                if (t.ios) {
                    r.match(/os (\d+)/g);
                    t.ios = parseInt(RegExp.$1, 10) || t.ios
                }
                if (t.android) {
                    var n = r.match(/android (\d+(?:[\.\d]*)+)/i);
                    t.androidVersion = n ? parseFloat(n[1]) : 99
                }
                return t
            }(),
            g = {
                connection: {
                    mobile: t.isMobileNetwork
                },
                os: h,
                hasHlsVodSupport: h.ios || h.winwebview || h.win10arm || f,
                hasMseSupport: !!window.MediaSource
            };
        g.isMobileDevice = h.ios || h.android || h.blackberry || h.playbook || h.winphone || h.kaios;
        g.isTabletDevice = h.kindleSilk || h.winwebview || h.win10arm || r.match(/ipad/) || r.match(/sm-t/) || r.match(/tablet/);
        if (!g.hasMseSupport && g.os.macsafari && g.os.safariVersion >= 10) {
            g.isMobileDevice = !0;
            g.hasHlsVodSupport = !0
        }
        if (d && !h.winphone) {
            g.isMobileDevice = !1;
            g.isTabletDevice = !1
        }
        g.isMobileOrTablet = g.isMobileDevice || g.isTabletDevice;
        if (g.os.blackberry && !n) {
            n = !0;
            r.match(/version\/\d+.(\d+.\d+)/);
            var y = parseFloat(RegExp.$1);
            y > 3 && i.push("blackberry")
        }
        if (g.os.winphone && 0 === a) {
            r.match(/windows phone (\d+.\d+)/);
            a = parseFloat(RegExp.$1);
            a >= 10 && i.push("winphone")
        }
        for (var b = 0; i.length > b; b++) g.os[i[b]] && (g.hasHlsVodSupport = !0);
        g.allowHlsVod = function() {
            if (!g.hasHlsVodSupport && (g.os.androidVersion >= 4.1 || !g.os.android && !g.os.win)) {
                i.push(g.os.name);
                g.hasHlsVodSupport = !0
            }
        };
        g.htmlAudio = g.os.androidVersion >= 4.1 || g.os.kindleSilk;
        g.preferHtmlAudio = t.isUK === !1 && g.os.androidVersion >= 5;
        g.useOpaque = s || d && !g.isMobileOrTablet;
        g.waitForLoad = 8 === document.documentMode || 9 === document.documentMode;
        var v = /smart.+tv/.test(r) || /linux; netcast/.test(r);
        g.supportsFlash = !g.isMobileOrTablet && !f && !v;
        g.smpj2Compatible = g.hasMseSupport && !g.os.playbook;
        g.IE11 = r.indexOf("trident/7.0") > 0;
        g.supportsSvg = g.smpj2Compatible || g.os.ios >= 8 || g.os.androidVersion >= 4.4 && s || g.IE11;
        g.supportChromecast = s && window.chrome;
        g.requiresWindowOpenSMPAirLaunch = /fb_iab/.test(r) || /twitterandroid/.test(r) || /bbc_app/.test(r);
        g.hybrid = g.hasMseSupport || g.IE11 && (!document.documentMode || document.documentMode >= 11);
        g.winXP = r.indexOf("nt 5") > 0;
        var w = !g.isMobileOrTablet && (l >= 44 && !(g.winXP && r.indexOf("opr/") > 0) || u >= 52 && !g.winXP || g.os.macsafari && g.os.safariVersion >= 10 && g.os.macosVersion >= 12 || v || c >= 14 || g.smpj2Compatible && g.IE11 && r.indexOf("nt 6") == -1 && !g.winXP),
            P = /samsungbrowser/.test(r);
        g.preferHtmlPlayer = w || g.os.androidVersion >= 6 && !P && g.smpj2Compatible || h.kindleSilk && g.os.androidVersion >= 5 && l > 60 && g.smpj2Compatible || /focus\//.test(r) && g.smpj2Compatible || v && g.isMobileOrTablet;
        g.webgl = function() {
            try {
                var e = document.createElement("canvas"),
                    t = "probablySupportsContext" in e ? "probablySupportsContext" : "supportsContext";
                return t in e ? e[t]("webgl") || e[t]("experimental-webgl") : "WebGLRenderingContext" in window
            } catch (i) {
                return !1
            }
        }();
        g.support360 = !(!g.webgl || h.ios && 11 > h.ios || /(trident\/)|(MSIE\s)/i.test(r) && !o || h.macsafari && 12 > h.macosVersion);
        g.mediasetDesktop = !g.isMobileOrTablet && (d || /windows nt/.test(r) || /x11/.test(r) || g.os.mac);
        return g
    }
    var i = [],
        n = !1,
        a = 0;
    return {
        get: t
    }
});
define("mp/modules/demi", [], function() {
    var e, t = !1;
    window.bumpDemiNetwork = function(e) {
        var t = window.embeddedMedia,
            i = t.demi;
        i.isMobileNetwork = e && e.is_mobile_network;
        for (var n = 0; window.embeddedMedia.players.length > n; n++) {
            var a = window.embeddedMedia.players[n];
            a.updateMediaset()
        }
    };
    var i = function() {
        var e = this;
        return e
    };
    i.prototype = {
        determineConnectionType: function(i) {
            if (!e) {
                e = !0;
                var n = window.embeddedMedia,
                    a = "unknown",
                    r = window.navigator.connection;
                if (r) {
                    var o = r.effectiveType;
                    a = o ? "4g" != o ? "cellular" : "" : r.type;
                    i && i.saveData !== !1 && (i.saveData = r.saveData ? !0 : !1)
                }
                if ("unknown" == a && !t) {
                    t = !0;
                    var s = "https:" == location.protocol ? "https" : "http",
                        l = s + "://" + (i && i.mediator && i.mediator.host ? i.mediator.host : "open.live.bbc.co.uk") + "/wurfldemi/",
                        d = document.createElement("script");
                    d.type = "text/javascript";
                    d.charset = "utf-8";
                    d.async = !0;
                    d.src = l + "network.jsonp?callback=bumpDemiNetwork";
                    document.getElementsByTagName("head")[0].appendChild(d)
                }
                n.demi.isMobileNetwork = "cellular" === a
            }
        }
    };
    return i
});
define("mp/classes/language", ["jquery-1.9"], function(e) {
    function t(e) {
        if (a[e])
            for (; a[e].length > 0;) a[e].pop()()
    }

    function i(e) {
        if (2 > d.length) return !0;
        for (var t = 0; d.length > t; t++)
            if (d[t] == e) return !0;
        return !1
    }
    var n = {
            en: {
                pgHeader: "Parental Guidance Lock",
                pgAgeConfirmation: "I am aged 16 or over",
                pgClose: "Close pop up",
                pgContinue: "Continue",
                pgPasswordValidationError: "Please confirm your age before continuing",
                pgAriaAgeConfirmCheckBox: "Age confirmation check box. Checked.",
                pgAriaAgeConfirmCheckBoxUnchecked: "Age confirmation check box. Check to confirm you are sixteen or over.",
                pgTurnOnParentalGuidance: "Turn on the Parental Guidance Lock?",
                pgInfoPlusDownload: "lets you set up a PIN to control access to Guidance-labelled BBC content on your chosen browser.<p>To set up your PIN choose ‘Turn On’. To continue without Parental Guidance choose ‘Download’.</p>",
                pgInfoPlusPlay: "lets you set up a PIN to control access to Guidance-labelled BBC content on your chosen browser.<p>To set up your PIN choose ‘Turn On’. To continue without Parental Guidance choose ‘Play’.</p>",
                pgInfo: "lets you set up a PIN to control access to Guidance-labelled BBC content on your chosen browser.",
                pgTurnOn: "Turn On",
                toolTipPlay: "Play",
                pgEnterPIN: "Please enter a four-digit PIN",
                pgActivateInfo: "You will need your PIN to play Guidance-labelled content",
                pgPINValidationError: "Your PIN must be four digits",
                pgAriaPINEntryDescription: "PIN entry text field",
                pgAriaPINPrompt: "Please enter a valid four-digit PIN",
                pgEnterPINPrompt: "Please enter your four-digit PIN to continue",
                pgManageYourPIN: "Manage your PIN",
                pgUnlock: "Unlock",
                pgIncorrectPIN: "Incorrect PIN. Please try again",
                newPgTurnOnParentalGuidance: "Turn on Parental Guidance Lock?",
                newPgTurnOnParentalGuidancePINsection: "Turn on Parental Guidance Lock",
                newPgTurnOnParentalGuidanceInsertPIN: "Parental Guidance Lock",
                newPgTurnOn: "Turn on PG Lock",
                newToolTipPlay: "Play without PG Lock",
                findOutMore: "Find out more",
                notSuitableForChildMessage: "This programme may not be suitable for children. Turn on PG Lock and we'll ask you to set up a PIN to control who can watch BBC content with a Guidance label on this browser.",
                newPgAgeConfirmationUnder16: "I've got permission.",
                newUnder16WithPermission: "You're signed in as someone who’s under 16. So you need permission from a parent or guardian to play this.",
                newPgPlay: "Play",
                newPgEnterPIN: "Please choose a four-digit PIN.",
                newPgPINvalidationError: "Your PIN must be four digits long.",
                newPgIncorrectPIN: "Wrong PIN. Please try again.",
                newPgManageYourPIN: "Manage your lock",
                newPgEnterPINprompt: "Please enter your four-digit PIN.",
                newPgActivateInfo: "You'll need this to play any content with a Guidance label.",
                newPgEnterPINinfo: "This programme has a Guidance label.",
                newAgeConfirmationTitle: "Guidance",
                pgUnder16PermissionValidationError: "Please confirm you have permission before continuing",
                pgDownload: "Download",
                pgActivate: "Activate",
                6000: "Unable to embed player",
                errorUnsupported: "Your device is not currently supported",
                6004: "Player failed to initialise",
                embedTitle: "Embed This Media",
                embedDescription: "Copy the code below to share this content on your own site. Press escape to close",
                embedTerms: "Terms and conditions",
                embedClose: "Close",
                aaampTitle: "BBC Media Player",
                aaampMsg: "To play BBC Programmes you need to install the BBC Media Player application from your app store",
                aaampInstall: "Install",
                aaampCancel: "cancel",
                aaampPlay: "click to play",
                jumpMediaPlayer: "Jump media player",
                mediaPlayerHelp: "Media player help",
                outOfMediaPlayer: "Out of media player. Press enter to return or tab to continue.",
                errorFlashIsNeeded: "Sorry, you need Flash to play this.",
                enableFlash: "Enable it in your browser or {link}.",
                downloadFlashLink: "download Flash Player here",
                errorCantPlayInBrowser: "Sorry, this won't play in your web browser.",
                useMediaPlayerApp: "Use BBC Media Player app",
                screenreaderDefaultIframeTitle: "Media Player"
            }
        },
        a = {},
        r = {},
        o = {},
        s = 5e3,
        l = {
            "en-GB": "en",
            "en-gb": "en",
            "cy-GB": "cy",
            "cy-gb": "cy",
            "gd-GB": "gd",
            "gd-gb": "gd",
            "ga-GB": "ga",
            "ga-gb": "ga",
            "ru-uk": "ru",
            zh: "zh-hans",
            "sr-latn": "sr"
        },
        d = "cy,gd,ga,fr,ar,az,ha,hi,id,ky,es,so,sw,tr,ur,fa,ru,uk,vi,si,rw,ps,ne,my,zh-hans,zh-hant,uz,tg,pt,ta,bn,jp,pi,am,gu,ko,mr,om,pa,pcm,te,th,ti,yo,ig,sr-cyrl".split(","),
        c = {
            add: function(e, i) {
                clearTimeout(o[e]);
                n[e] = i;
                t(e)
            },
            load: function(e, d) {
                l[e] && (e = l[e]);
                if (e && /^[\-a-zA-Z]{1,8}$/.test(e) && !n[e] && i(e)) {
                    if (d) {
                        a[e] || (a[e] = []);
                        a[e].push(d)
                    }
                    if (!r[e]) {
                        r[e] = !0;
                        var c = document.createElement("script");
                        c.type = "text/javascript";
                        c.charset = "utf-8";
                        c.async = !0;
                        c.src = "//emp.bbci.co.uk/emp/translations/1.0.37/language." + e + ".js";
                        document.getElementsByTagName("head")[0].appendChild(c);
                        clearTimeout(o[e]);
                        o[e] = setTimeout(function() {
                            t(e)
                        }, s)
                    }
                } else d && d()
            },
            t: function(e, t) {
                l[t] && (t = l[t]);
                return n[t] && n[t][e] ? n[t][e] : n.en[e] || e
            },
            screenreaderAlert: function(t) {
                var i = e("<div role='alert' style='width: 1px; position: absolute; left: -2500px; overflow: hidden;'><p>" + t + "</p></div>").appendTo(e("body"));
                i.hide();
                i.show();
                setTimeout(function() {
                    i.remove()
                }, 2500)
            }
        };
    return c
});
define("mp/modules/helpers", ["mp/modules/demi", "mp/classes/language"], function(e, t) {
    function i(e) {
        for (var t in e)
            if (e.hasOwnProperty(t)) return !1;
        return !0
    }
    return {
        isObjectEmpty: i,
        addEmbeddedMedia: function() {
            if (window.embeddedMedia) {
                window.embeddedMedia.playerInstances || (window.embeddedMedia.playerInstances = {});
                window.embeddedMedia.players || (window.embeddedMedia.players = []);
                isNaN(window.embeddedMedia.playerInits) && (window.embeddedMedia.playerInits = 0)
            } else window.embeddedMedia = {
                players: [],
                playerInstances: {},
                playerInits: 0
            };
            var i = window.embeddedMedia;
            if (!i.openCallbacks) {
                i.openCallbacks = [];
                i.closedCallbacks = [];
                i.opened = function(e) {
                    for (var t = 0; i.openCallbacks.length > t; t++) i.openCallbacks[t](e)
                };
                i.closed = function(e) {
                    for (var t = 0; i.closedCallbacks.length > t; t++) i.closedCallbacks[t](e)
                }
            }
            i.addPlayer || (i.addPlayer = function(e, t) {
                i.playerInstances[e] = t;
                i.players.push(t)
            });
            i.distributeConfigToPlayers || (i.distributeConfigToPlayers = function(e, t, n) {
                var a = i.api.players();
                for (var r in a) r != n && a.hasOwnProperty(r) && a[r].distributedConfig(e, t)
            });
            i.processConfigFromPlayer || (i.processConfigFromPlayer = function(e, t, n) {
                var a = i.api.players()[n];
                a._settings.set("ui" == t ? {
                    ui: e
                } : e);
                i.distributeConfigToPlayers(e, t, n)
            });
            i.language || (i.language = t);
            if (!i.demi) {
                i.demi = {
                    callbacks: [],
                    ua: window.navigator.userAgent.toLowerCase()
                };
                if (window.orb && window.orb.fig) {
                    var n = window.orb.fig,
                        a = n.geo;
                    a && a.isUK && (i.demi.isUK = 1 === a.isUK())
                }
                i.demiHelper = new e
            }
            return i
        }
    }
});
define("mp/classes/settingsbuilder", ["jquery-1.9", "mp/modules/device", "mp/modules/helpers"], function(e, t, i) {
    function n(e, t) {
        if (e)
            for (var i = 0; e.length > i; i++) {
                var n = e[i];
                if (n) {
                    var a = n.kind;
                    if ("radioProgramme" == a || "audio" == a || !t && (void 0 === a || null === a || "" === a || "programme" == n.kind)) return n
                }
            }
        return null
    }
    var a = {
        mediasets: {
            desktop: "pc",
            cellular: "mobile-cellular-baseline",
            mobile: "mobile-phone-baseline",
            tablet: "mobile-tablet-baseline"
        },
        findProgramme: n,
        firstProgramme: function(e, t) {
            return n(e && e.items, t)
        },
        mediationUrls: function(e, t, i) {
            "medium" == t.quality && t.statsObject && t.statsObject.parentPID && (t.hdVpids + "").indexOf(t.statsObject.parentPID + "") !== -1 && (t.quality = "hd");
            var n = i ? "ediatorHref" : "ediationUrl",
                r = a.mediaSet(t);
            i && (r = r.replace("baseline", "main"));
            e["samlM" + n] = e["m" + n] = a.mediatorHref(t, r, i);
            return r
        },
        mediaSet: function(e) {
            if (e.mediator.overrideMediaSet) return e.mediator.overrideMediaSet;
            if (e.backgroundPlayer) return "mobile-tablet-main";
            var n = i.addEmbeddedMedia(),
                a = e.mediasets = this.mediasets,
                r = t.get();
            return r.mediasetDesktop ? a.desktop : n.demi.isMobileNetwork ? a.cellular : r.isTabletDevice ? a.tablet : a.mobile
        },
        mediatorHref: function(t, i, n) {
            var a = "https://{host}/mediaselector/6/select/version/2.0/mediaset/{mediaset}/vpid/{id}",
                r = location.host + "";
            r.match(/preview\..*api/gim) && (a = a.replace("/mediaselector/6/", "/mediaselector/5/"));
            a += n ? "/format/json/jsfunc/{callback}" : "/format/xml";
            var o = {
                href: a,
                host: "open.live.bbc.co.uk",
                mediaset: i
            };
            e.extend(!0, o, t.mediator);
            var s = o.href;
            e.each(o, function(e, t) {
                s = s.replace("{" + e + "}", t)
            });
            return s
        }
    };
    return a
});
define("mp/classes/errors/error", [], function() {
    function e(e, t, n) {
        var a = "en";
        e && (a = e.locale());
        t = i[t] || t;
        if (window.embeddedMedia.language) {
            var r = window.embeddedMedia.language.t(t, a);
            if (r != t) return r
        }
        return n || "Unknown Error"
    }

    function t(t, i, n) {
        n || (n = {});
        this._c = t;
        this._s = n.severity || "critical";
        this._d = e(i, t + "", n.description || n.detail);
        return this
    }
    var i = {
        6003: "errorUnsupported",
        6005: "6004",
        6010: "errorFlashIsNeeded",
        6012: "errorUnsupported"
    };
    t.prototype = {
        code: function() {
            return this._c
        },
        description: function() {
            return this._d
        },
        detail: function() {
            return ""
        },
        severity: function() {
            return this._s
        },
        responsibility: function() {
            return "client"
        }
    };
    return t
});
define("mp/classes/settings", ["jquery-1.9", "mp/modules/policies", "mp/classes/settingsbuilder", "mp/classes/errors/error"], function(e, t, i, n) {
    function a(e) {
        e && e.getFullYear || (e = new Date);
        var t = Math.floor(1.25 * e.getFullYear()),
            i = e.valueOf(),
            n = new Date(i);
        n.setMonth(2);
        n.setDate(31 - (t + 4) % 7);
        n.setUTCHours(1);
        n.setUTCMinutes(0);
        n.setUTCSeconds(0);
        var a = new Date(i);
        a.setMonth(9);
        a.setDate(31 - (t + 1) % 7);
        a.setUTCHours(1);
        a.setUTCMinutes(0);
        a.setUTCSeconds(0);
        return e > n && a > e
    }

    function r(t, i, n) {
        if ("set" != i && "locale" != i && "playingAudio" != i && "posterUrl" != i)
            if ("playlistObject" == i || "today" == i) t[i] = n;
            else {
                var a = "object" == typeof n;
                a ? "object" == typeof d[i] && e.extend(!0, t[i], n) : "object" != typeof t[i] && (t[i] = n)
            }
    }

    function o(e, t, i) {
        var n, a = i && i.availableWidths && "string" == typeof i.availableWidths ? i.availableWidths : !1,
            r = a ? a.split(",") : c;
        if (e && u.test(e)) {
            var o = 0;
            t && t.width && (o = t.width());
            (0 === o || isNaN(o)) && (o = 768);
            i && i.densityMultiplier && (o *= i.densityMultiplier);
            for (var s = r.length - 1; s > 0 && !(o / r[s] > .98); s--);
            var l = c[s] + "x" + p[s];
            n = a ? r[s] : 1024 >= r[s] ? r[s] : 1536;
            return e.replace(/[\${]recipe}?/, l).replace(/[\${]width}?/, n)
        }
    }
    var s = "true" == "true",
        l = {
            locale: {
                lang: "en",
                path: "//emp.bbci.co.uk/emp/translations/1.0.37/{lang}.xml"
            },
            subtitles: {
                supportLiveSubtitles: !0
            },
            thumbnail: {
                enabled: !0
            },
            colour: "#f54997",
            foreColour: "#ffffff",
            alternateColour: "#f54997",
            alternateForeColour: "#ffffff",
            guidance: {
                pgColour: "#f54997",
                pgSeparatorColour: "#252833",
                pgBackgroundColour: "#0c101c"
            },
            cta: {
                direction: null
            }
        },
        d = {
            swfUrl: "//emp.bbci.co.uk/emp/SMPf/1.22.0/StandardMediaPlayerChromelessFlash.swf",
            container: {},
            playlist: "",
            startTime: 0,
            volume: .7,
            overrideHoldingImage: "",
            product: "iplayer",
            today: new Date,
            guidance: {},
            mediator: {},
            experimentalDashPercentage: parseFloat("0.5"),
            preferHttpsPercentage: parseFloat("0.5"),
            includeAppClickHandler: !0,
            plugins: {
                player: {
                    width: "640px",
                    height: "360px",
                    poster: ""
                },
                toLoad: []
            },
            configVars: {},
            quality: "hd",
            uiClass: "",
            enableStatsReporting: !0,
            customRdotBaseURL: "//r.bbci.co.uk/e",
            autoplay: !1,
            enableRdotReporting: !0,
            enableSonarReporting: !0,
            enableBarbReporting: !0,
            enableAtiReporting: !0,
            statsObject: {},
            embedPageURL: location.href,
            forceGuidance: "",
            aaampGuidance: "",
            appName: "",
            appType: "",
            counterName: "smp.player.page",
            siteID: "",
            significantTime: 10,
            playerType: "",
            blacklistedPlugins: ["eavis", "endSlate"],
            namedPlugins: {
                "dfpAds.swf": "//emp.bbci.co.uk/plugins/dfpAds/2.22.0/dfpAds.swf",
                "dfpAds.js": "//emp.bbci.co.uk/plugins/dfpAdsHTML/3.25.0/js/dfpAds.js",
                "continuousPlay.swf": "//emp.bbci.co.uk/plugins/continuousPlay/2.16.0/continuousPlay.swf",
                "continuousPlay.js": "//emp.bbci.co.uk/plugins/onwardJourneyHTML/2.5.5/js/onwardJourney.js",
                "endSlate.swf": "//emp.bbci.co.uk/plugins/endSlate/1.6.0/endSlate.swf",
                "endSlate.js": "//emp.bbci.co.uk/plugins/endSlateHTML/1.8.0/js/endSlate.js",
                "preview.js": "//emp.bbci.co.uk/plugins/preview/1.1.0/js/preview.js",
                "onwardJourney.js": "//emp.bbci.co.uk/plugins/onwardJourneyHTML/2.5.5/js/onwardJourney.js"
            },
            supportLiveRewindOnMobile: !0,
            suppressType: [],
            suppressItemKind: [],
            ui: {},
            webcastData: {},
            allowMainlineProfiles: !0,
            liveEnvironment: s,
            preferHtmlControls: !0,
            hdVpids: "b07v802s",
            optinPids: "p03cchwf",
            httpsVpids: "",
            over16: !1,
            under16: !1,
            backgroundSettings: {},
            threeSixty: !1,
            disablePreload: !1,
            continuousPlay: !0,
            skipInterval: 20,
            embeddedOffsite: !1
        },
        c = [320, 384, 432, 480, 512, 608, 640, 688, 720, 768, 800, 832, 976, 1024, 1376, 1920],
        p = [180, 216, 243, 270, 288, 342, 360, 387, 405, 432, 450, 468, 549, 576, 774, 1080],
        u = new RegExp("^//|^http[s]{0,1}://", "i"),
        m = function(e) {
            return this.init(e)
        };
    m.prototype = {
        set: function() {
            var t = this;
            if (2 === arguments.length) {
                var i = arguments[0],
                    n = arguments[1];
                r(t, i, n)
            } else "object" == typeof arguments[0] && e.each(arguments[0], function(e, i) {
                r(t, e, i)
            });
            for (i in t.webcastData)
                if (t.webcastData.hasOwnProperty(i)) {
                    var o = t.webcastData[i];
                    "[object Date]" === Object.prototype.toString.call(o) && (t.webcastData[i] = o.getTime() / 1e3)
                }
            t.isBSTime = a(t.today);
            return t
        },
        init: function(i) {
            var n = this;
            n.reset();
            "object" != typeof i && (i = {});
            var a = i.product || d.product,
                o = t[a] || t.generic;
            e.each(o, function(e, t) {
                r(n, e, t)
            });
            n.ui = e.extend(!0, {}, l, o.ui);
            var s = "";
            try {
                s = document.cookie + ""
            } catch (c) {}
            if (!n.allowTracking) {
                for (var p = !1, u = ["bbc.co.uk", "bbc.com", "britbox.com", "bbcconnectedstudio.co.uk"], m = 0; u.length > m; m++) location.host.indexOf(u[m]) !== -1 && (p = !0);
                p || (n.noTracking = !0)
            }
            s.match(/NO-SA=1/) && (n.noTracking = !0);
            s.match(/html5Debug=true/) && (n.html5Debug = !0);
            s.indexOf("ckps_smpj2OptIn=true") > -1 && (n.smpj2OptIn = !0);
            s.indexOf("ckps_smpj2nohybrid=true") > -1 && (n.smpj2NoHybrid = !0);
            s.indexOf("_smpj2Beta=true") > -1 && (n.smpj2Beta = !0);
            return n.set(i)
        },
        reset: function() {
            var t = this,
                i = e.extend(!0, {}, d);
            e.each(i, function(e, i) {
                t[e] = i
            });
            return t
        },
        validate: function() {
            var e = this;
            if (!e.container || void 0 === e.container.get(0) || 0 === e.container.length) throw "Error 6009 DOM element not found"
        },
        dispatch: function(t) {
            var i = this,
                a = e.Event("error");
            a.errorData = new n(t, i);
            i.trigger(a)
        },
        trigger: function(e) {
            var t = this;
            t.container && "function" == typeof t.container.trigger && t.container.trigger(e)
        },
        locale: function() {
            return this.ui.locale.lang
        },
        playingAudio: function() {
            var e = this;
            if (e.willPlayAudio) return !0;
            var t = i.firstProgramme(e.playlistObject);
            return t ? "radioProgramme" == t.kind || "audio" == t.kind : !0
        },
        posterUrl: function(e) {
            var t = this._poster || this.playlistObject && this.playlistObject.holdingImageURL || this.plugins.player.poster || this.overrideHoldingImage;
            return o(t, e, this.ui.poster)
        },
        doHdVersionCheck: function() {
            var e = this;
            "medium" == e.quality && e.statsObject && e.statsObject.parentPID && (e.hdVpids + "").indexOf(e.statsObject.parentPID + "") !== -1 && (e.quality = "hd")
        }
    };
    return m
});
define("mp/classes/embedPopup", ["jquery-1.9"], function(e) {
    var t = {
        show: function(i) {
            t._embedBox && t.close(!0);
            var n = i._settings,
                a = !n.ui.disableReithFonts;
            window.embeddedMedia.opened();
            var r = {
                width: "100%",
                height: "100%",
                margin: "0px",
                position: "fixed",
                "z-index": 1e3,
                top: "0px",
                left: "0px",
                "background-color": "#000000",
                zoom: 1,
                filter: "alpha(opacity=50)",
                opacity: .5
            };
            t._background = e('<div id="embedBackground"></div>').css(r).appendTo(document.body);
            var o = {
                "-webkit-box-orient": "horizontal",
                "-webkit-box-pack": "center",
                "-webkit-box-align": "center",
                "-moz-box-orient": "horizontal",
                "-moz-box-pack": "center",
                "-moz-box-align": "center",
                display: "box",
                "box-orient": "horizontal",
                "box-pack": "center",
                "box-align": "center",
                position: "fixed",
                width: "400px",
                "max-width": "90%",
                height: "160px",
                bottom: "0",
                left: "0",
                top: "0",
                right: "0",
                margin: "auto",
                "vertical-align": "middle",
                "text-align": "center",
                color: "white",
                "font-size": "22px",
                "z-index": 1001,
                "background-color": "#262626"
            };
            document.documentElement.className.indexOf("b-reith-sans-font") >= 0 && a ? t.className += "font-family-sans" : o["font-family"] = "helvetica, Arial, sans-serif";
            t._embedBox = e('<div id="embedBox" role="alertdialog" aria-labelledby="embedMediaTitle" aria-describedby="embedMediaDescription"></div>').css(o).appendTo(document.body);
            var s = n.locale(),
                l = window.embeddedMedia.language,
                d = l.t("embedTitle", s),
                c = l.t("embedDescription", s),
                p = l.t("embedTerms", s),
                u = l.t("embedClose", s),
                m = e('<span id="embedMediaTitle" style="position:absolute;left:0px;margin-left:10%;margin-top:6%">' + d + '</span><span id="embedMediaDescription" style="display:none" aria-hidden="true">' + c + "</span>");
            m.appendTo(t._embedBox);
            var f = {
                    position: "absolute",
                    width: "80%",
                    height: "30px",
                    top: "50%",
                    left: 0,
                    "margin-top": "-15px",
                    "margin-left": "10%",
                    "font-size": "14px",
                    color: "#848484"
                },
                h = encodeURIComponent(n.product),
                g = encodeURIComponent(i.playlist.title),
                y = n.externalEmbedUrl;
            if (y) {
                for (var b = i.playlist.items, v = 0; b.length > v; v++) {
                    var w = b[v].kind;
                    if ("programme" == w || "radioProgramme" == w) {
                        y = y.replace("{vpid}", b[v].identifier);
                        break
                    }
                }
                y = y.replace("{lang}", s)
            } else {
                if (i.playlist.url) var P = i.playlist.url;
                else n.playlistObject && (P = n.playlistObject.legacyPlaylist);
                if (P) {
                    y = "https://emp.bbc.co.uk/emp/embed/smpEmbed.html?playlist=" + encodeURIComponent(P) + "&title=" + g + "&product=" + h;
                    "en" != s && (y += "&lang=" + s)
                }
            }
            if (y) {
                var k = '<iframe width="400" height="500" frameborder="0" src="' + y + '"></iframe>';
                n.externalEmbedCode && (k = (n.externalEmbedCode + "").replace("{url}", y));
                var x = e('<input type="text" id="embedText" />').css(f).appendTo(t._embedBox);
                e("#embedText")[0].value = k;
                var C = {
                        position: "absolute",
                        bottom: 0,
                        left: 0,
                        "margin-bottom": "6%",
                        "margin-left": "10%",
                        "font-size": "0.6em",
                        color: "#ffffff",
                        "text-decoration": "none"
                    },
                    _ = e('<a target="_blank" href="https://www.bbc.co.uk/usingthebbc/terms-of-use/">' + p + "</a> ");
                _.css(C).appendTo(t._embedBox);
                x.click(function() {
                    e(this).select()
                });
                setTimeout(function() {
                    x.focus()
                }, 100);
                var T = {
                        position: "absolute",
                        right: "0px",
                        "font-size": "0.8em",
                        top: "0px",
                        "margin-top": "10px",
                        "margin-right": "10px",
                        color: "#ffffff",
                        "text-decoration": "none",
                        cursor: "pointer"
                    },
                    I = e('<a aria-label="' + u + '" href="#">x</a> ');
                I.css(T).appendTo(t._embedBox);
                I.click(function(e) {
                    e.preventDefault && e.preventDefault();
                    e.returnValue = !1;
                    t.close()
                });
                t._tabList = [x, _, I];
                t._currentTab = 0;
                var S = function(e) {
                    e = e || window.event;
                    var i = e.keyCode || e.which;
                    27 === i && t.close();
                    if (9 == i || 13 == i) {
                        e.preventDefault && e.preventDefault();
                        e.returnValue = !1;
                        if (9 == i) {
                            var n = t._tabList.length - 1;
                            t._currentTab = e.shiftKey ? 0 === t._currentTab ? n : t._currentTab - 1 : t._currentTab === n ? 0 : t._currentTab + 1;
                            setTimeout(function() {
                                t._tabList[t._currentTab].focus()
                            }, 200)
                        } else this.click()
                    }
                };
                for (v = 0; t._tabList.length > v; v++) t._tabList[v].keydown(S)
            } else t.close()
        },
        close: function(e) {
            var t = this;
            e || window.embeddedMedia.closed();
            if (t._background) {
                t._background.remove();
                t._background = void 0
            }
            if (t._embedBox) {
                t._embedBox.remove();
                t._embedBox = void 0
            }
        }
    };
    return t
});
define("mp/classes/chromecastprovider", ["mp/classes/settingsbuilder"], function(e) {
    function t() {}

    function i(e) {
        this.errorState(e)
    }

    function n(e) {
        this.currentSession = null;
        this.mediaSession = null;
        this.smp = e;
        this.smp.sonar = e.sonar || {
            action: function() {}
        };
        this.isCasting = !1;
        this.isAvailable = !1;
        this.ccId = "";
        this.cancelRequest = !1;
        this.interrupted = !1;
        this.ccAvailableSent = !1;
        var t = document.createElement("script");
        t.type = "text/javascript";
        t.charset = "utf-8";
        t.async = !0;
        t.src = "https://www.gstatic.com/cv/js/sender/v1/cast_sender.js";
        document.getElementsByTagName("head")[0].appendChild(t);
        a.call(this)
    }

    function a() {
        function n(t) {
            s.currentSession = t;
            s.isAvailable = !0;
            s.dispatchToPlayer({
                detail: "Receivers available"
            });
            if (s.smp.playlist && (s.smp._playing || !s.smp._paused)) {
                var i = e.findProgramme(s.smp.playlist.items);
                l = i ? i.identifier : "";
                s.dispatchToPlayer({
                    state: "ATTEMPTING_CAST",
                    id: s.ccId
                });
                s.requestCast(l)
            }
        }

        function r(e) {
            if ("available" == e) {
                if (!s.ccAvailableSent) {
                    s.ccAvailableSent = !0;
                    s.smp.sonar.action(e, "ccAvailable", {
                        is_background: !0
                    })
                }
                s.isAvailable = !0;
                s.dispatchToPlayer({
                    detail: "Receivers available"
                })
            } else {
                s.isAvailable = !1;
                s.isCasting = !1;
                s.dispatchToPlayer({
                    detail: "Receivers not available"
                })
            }
        }

        function o() {
            s.smp._playing && s.smp.pause()
        }
        var s = this,
            l = "";
        if (chrome.cast && chrome.cast.isAvailable) {
            var d = "";
            if (s.smp._settings.forceCastReceiver) d = s.smp._settings.forceCastReceiver;
            else {
                d = "5E81F6DB";
                var c = s.smp._settings;
                "sport" == c.product ? d = "F4ABD101" : e.firstProgramme(c.playlistObject, !0) && (d = "03977A48")
            }
            var p = new chrome.cast.SessionRequest(d),
                u = new chrome.cast.ApiConfig(p, n.bind(s), r.bind(s));
            chrome.cast.initialize(u, t, i.bind(s));
            chrome.cast.addReceiverActionListener(o)
        } else setTimeout(a.bind(s), 1e3)
    }
    n.prototype = {
        requestCast: function(e) {
            var t = this;
            if (t.currentSession) t.launchProg(e);
            else {
                var n = function(i) {
                    t.currentSession = i;
                    t.launchProg(e)
                };
                chrome.cast.requestSession(n.bind(t), i.bind(t))
            }
        },
        requestStop: function() {
            chrome.cast.requestSession(t, t)
        },
        launchProg: function(e) {
            var t = this;
            t.currentSession.addUpdateListener(t.onSessionUpdate.bind(t));
            t.ccId = t.currentSession.receiver.friendlyName;
            t.dispatchToPlayer({
                state: "CONNECTING",
                id: t.ccId
            });
            for (var i = t.smp.playlist.holdingImageURL || t.smp.playlist.posterImg, n = t.smp.playlist.links || [], a = 0; n.length > a; a++) "holdingrecipe" === n[a].rel && (i = n[a].href);
            t.loadMedia(e, t.smp.playlist.title, t.smp.playlist.summary, i, t.smp.playlist.hasLive)
        },
        loadMedia: function(t, n, a, r, o) {
            var s = this;
            if (null == s.currentSession) s.errorState("There is no active media playback");
            else {
                var l = function(e) {
                        s.interrupted = !1;
                        s.mediaSession = e;
                        s.mediaSession.addUpdateListener(s.onMediaStatusUpdate.bind(s))
                    },
                    d = new chrome.cast.media.GenericMediaMetadata;
                d.title = n;
                var c, p = "";
                if (r) {
                    c = new chrome.cast.Image(r.indexOf("{recipe}") === -1 && r.indexOf("$recipe") === -1 && s.smp._settings.castPlaceholderImage ? s.smp._settings.castPlaceholderImage : r.replace("{recipe}", "1280x720").replace("$recipe", "1280x720"));
                    c.height = 720;
                    c.width = 1280;
                    d.images = [c];
                    var u = r.split("/");
                    p = u[u.length - 1].split(".")[0]
                }
                var m = e.findProgramme(s.smp.playlist.items),
                    f = m ? m.group : "",
                    h = new chrome.cast.media.MediaInfo(t, "video/mp4");
                h.metadata = d;
                h.customData = {
                    base_image_url: "http://ichef.bbci.co.uk/programmeimages/" + p + "/",
                    secondary_title: a,
                    original_pid: f,
                    sender: "smp",
                    image_identifier: p
                };
                o && (h.streamType = "LIVE");
                var g = new chrome.cast.media.LoadRequest(h);
                g.currentTime = s.smp.currentTime();
                g.currentTime >= s.smp.duration() - 5 && (g.currentTime = 0);
                s.currentSession.loadMedia(g, l.bind(s), i.bind(s))
            }
        },
        stopCast: function() {
            function e() {
                t.dispatchToPlayer({
                    state: "STOPPED"
                })
            }
            var t = this;
            t.cancelRequest = !0;
            t.isCasting = !1;
            t.currentSession && "stopped" != t.currentSession.status ? t.currentSession.stop(e.bind(t), i.bind(t)) : e()
        },
        stopMedia: function() {
            function e() {
                t.isCasting = !1;
                t.dispatchToPlayer({
                    state: "STOPPED"
                })
            }
            var t = this;
            t.mediaSession.stop(new chrome.cast.media.StopRequest, e.bind(t), i.bind(t))
        },
        interrupt: function() {
            var e = this;
            e.isCasting = !1;
            e.interrupted = !0;
            e.dispatchToPlayer({
                state: "INTERRUPT"
            });
            e.stopMedia()
        },
        pause: function() {
            var e = this;
            null == e.mediaSession ? e.errorState("There is no active media playback") : e.mediaSession.pause(new chrome.cast.media.PauseRequest, t, i.bind(e))
        },
        seekTo: function(e) {
            var n = this;
            if (null == n.mediaSession) n.errorState("There is no active media playback");
            else {
                var a = new chrome.cast.media.SeekRequest;
                a.currentTime = e;
                n.mediaSession.seek(a, t, i.bind(n))
            }
        },
        play: function() {
            var e = this;
            null == e.mediaSession ? e.errorState("There is no active media playback") : e.mediaSession.play(new chrome.cast.media.PlayRequest, t, i.bind(e))
        },
        setVolume: function(e) {
            var n = this;
            if (null == n.mediaSession) n.errorState("There is no active media playback");
            else if (0 === e) n.currentSession.setReceiverMuted(!0, t, i.bind(n));
            else {
                n.currentSession.setReceiverVolumeLevel(e, t, i.bind(n));
                n.currentSession.setReceiverMuted(!1, t, i.bind(n))
            }
        },
        subtitlesOn: function() {
            var e = this;
            e.currentSession.sendMessage("urn:x-cast:uk.co.bbc.cast", "subtitlesOn", t, i.bind(e))
        },
        subtitlesOff: function() {
            var e = this;
            e.currentSession.sendMessage("urn:x-cast:uk.co.bbc.cast", "subtitlesOff", t, i.bind(e))
        },
        onMediaStatusUpdate: function(e) {
            var t = this;
            if (e) {
                if (t.mediaSession && !t.interrupted) {
                    t.isCasting = !0;
                    t.dispatchToPlayer({
                        state: t.mediaSession.playerState,
                        currentTime: t.mediaSession.currentTime,
                        id: t.ccId,
                        subtitlesEnabled: t.mediaSession.customData.subtitlesEnabled,
                        floatVolume: t.currentSession.receiver.volume.level,
                        castDuration: t.mediaSession.media && t.mediaSession.media.duration
                    })
                }
            } else if ("IDLE" == t.mediaSession.playerState && !t.interrupted) {
                t.isCasting = !1;
                var i = "IDLE";
                "FINISHED" == t.mediaSession.idleReason && (i = "FINISHED");
                t.dispatchToPlayer({
                    state: i
                })
            }
        },
        onSessionUpdate: function(e) {
            var t = this;
            if (e) {
                if (t.currentSession && !t.cancelRequest) {
                    var i = t.currentSession.receiver.volume.level;
                    t.currentSession.receiver.volume.muted && (i = 0);
                    t.dispatchToPlayer(t.mediaSession ? {
                        state: t.mediaSession.playerState,
                        currentTime: t.mediaSession.getEstimatedTime(),
                        id: t.ccId,
                        subtitlesEnabled: t.mediaSession.customData.subtitlesEnabled,
                        floatVolume: i
                    } : {
                        floatVolume: i
                    })
                }
            } else {
                t.stopCast();
                t.currentSession = null
            }
        },
        errorState: function(e) {
            var t = this;
            t.smp.sonar.action("error", "ccError", {
                is_background: !0,
                detail: e.description || e
            });
            t.dispatchToPlayer({
                state: "ERROR",
                detail: e
            })
        },
        dispatchToPlayer: function(e) {
            var t = this;
            e.available = t.isAvailable;
            e.casting = t.isCasting;
            e.activeSession = t.currentSession ? !0 : !1;
            t.smp.call("ccInfo", e)
        }
    };
    return n
});
define("mp/classes/players/player", ["mp/classes/embedPopup", "mp/classes/chromecastprovider"], function(e, t) {
    function i(e, t, i) {
        var n = new Date;
        n.setTime(i);
        n.setHours(23);
        n.setMinutes(59);
        n.setSeconds(59);
        var a = "; expires=" + n.toGMTString(),
            r = location.hostname;
        r.indexOf(".bbc.co.uk") !== -1 && (r = ".bbc.co.uk");
        r.indexOf(".bbc.com") !== -1 && (r = ".bbc.com");
        try {
            document.cookie = e + "=" + escape(t) + a + "; Domain=" + r + "; Path=/"
        } catch (o) {}
    }

    function n() {
        this.includePoster = !0;
        this._volume = 1;
        return this
    }
    var a = 1e3 * 60 * 60 * 24 * 28;
    n.prototype = {
        name: function() {
            return this._name
        },
        uiDefaults: function(e) {
            var t = this._settings,
                n = t.ui;
            n.guidance || (n.guidance = {});
            n.guidance.useFlashGuidance = n.guidance.useFlashGuidance || !1;
            t.guidanceCleared || n.guidance.pinRequired !== !1 && (n.guidance.pinRequired = !0);
            if (e.isMobileOrTablet) {
                n.controls || (n.controls = {
                    volumeSlider: !1
                });
                n.controls.popout = !1;
                n.controls.volumeSlider || (n.controls.volumeSlider = !1);
                t.volume = 1
            }
            if (1 != window.devicePixelRatio && !e.connection.mobile && !t.lowBandwidth) {
                n.poster || (n.poster = {});
                n.poster.densityMultiplier || (n.poster.densityMultiplier = t.saveData ? .8 : window.devicePixelRatio)
            }
            e.supportsSvg && n.useHighResIcons !== !1 && (n.useHighResIcons = !0);
            var r = "";
            r = window.getComputedStyle && this._settings.container[0] ? window.getComputedStyle(this._settings.container[0]).direction : this._settings.container[0].currentStyle.direction;
            null === n.cta.direction && (n.cta.direction = "rtl" == r ? "rtl" : "ltr");
            var o = !1,
                s = !0;
            try {
                var l = /[; ]ck[pn]s_smpSettings=([^\s;]*)/gim;
                l.test(" " + document.cookie);
                if (RegExp.$1) {
                    var d = JSON.parse(decodeURIComponent(RegExp.$1));
                    if (this._deprecated && d.FDd && !isNaN(d.FDd)) {
                        var c = new Date(d.FDd);
                        (new Date).valueOf() <= c.valueOf() + a && (s = !1)
                    }
                    n.allowAudioControlsToHide |= d.allowAudioControlsToHide;
                    if (d.controls) {
                        n.controls || (n.controls = {});
                        n.controls.timeout = d.controls.timeout;
                        n.controls.sizeAdjust = d.controls.sizeAdjust;
                        n.controls.spaceControlsPlayback |= d.controls.spaceControlsPlayback;
                        n.controls.experimentalShortcuts |= d.controls.experimentalShortcuts;
                        n.controls.activeStartsAt = d.controls.activeStartsAt;
                        n.controls.chromecastMode = d.controls.chromecastMode
                    }
                    if (d.subtitles) {
                        n.subtitles || (n.subtitles = {});
                        n.subtitles.contrast = d.subtitles.contrast;
                        n.subtitles.sizeAdjustment = d.subtitles.sizeAdjustment;
                        n.subtitles.supportLiveSubtitles |= d.subtitles.supportLiveSubtitles
                    }
                    d.quality && (t.quality = d.quality)
                }
                o = !0
            } catch (p) {}
            this._deprecated && !n.deprecationWarning && (s ? this.recordDeprecationCookie = function() {
                try {
                    n.deprecationWarning = {
                        enabled: !1
                    };
                    var e = (new Date).valueOf(),
                        t = e + a;
                    if (!o) {
                        d = {};
                        var r = new Date;
                        r.setTime(r.getTime() + 15552e6);
                        t = r.valueOf()
                    }
                    d.FDd = e;
                    i("ckps_smpSettings", JSON.stringify(d), t)
                } catch (s) {}
            } : n.deprecationWarning = {
                enabled: !1
            })
        },
        destroy: function() {
            this._container && this._container.empty()
        },
        call: function() {},
        play: function(e) {
            this.call("play", e)
        },
        stop: function() {
            this.call("stop")
        },
        suspend: function() {
            this.call("suspend")
        },
        pause: function() {
            this.call("pause")
        },
        next: function() {
            this.call("next")
        },
        previous: function() {
            this.call("previous")
        },
        pauseAt: function(e) {
            if (e) {
                e = e instanceof Array ? e : [e];
                this.call("pauseAt", e)
            }
        },
        muted: function(e) {
            if ("undefined" != typeof e) {
                this._muted = e;
                this.call("muted", e)
            }
            return this._muted
        },
        volume: function(e) {
            if ("number" == typeof e) {
                this._volume = e;
                this.call("volume", e)
            }
            return this._volume
        },
        duration: function() {
            return this._duration
        },
        ended: function() {
            return this._ended
        },
        seeking: function() {
            return this._seeking
        },
        paused: function() {
            return this._paused
        },
        kind: function() {
            return this._kind
        },
        mediaItem: function() {
            return this._mediaItem
        },
        loadedPlaylist: function() {
            return this.playlist
        },
        currentTime: function(e) {
            "number" == typeof e && this.call("currentTime", e);
            return this._currentTime
        },
        showSubtitles: function(e) {
            this.call("showSubtitles", e)
        },
        setData: function(e) {
            if (e)
                if (e instanceof Array)
                    for (var t = 0; e.length > t; t++) this.call("setData", e[t]);
                else this.call("setData", e)
        },
        updateQuality: function(e) {
            this.call("updateQuality", e)
        },
        onAdsProcessed: function(e) {
            this.call("onAdsProcessed", e)
        },
        webcastData: function(e) {
            for (var t in e)
                if (e.hasOwnProperty(t)) {
                    var i = e[t];
                    "[object Date]" === Object.prototype.toString.call(i) && (e[t] = i.getTime() / 1e3)
                }
        },
        loadPluginWithCheck: function(e, t, i) {
            for (var n = this._settings.blacklistedPlugins, a = 0; n.length > a; a++)
                if ((e + "").indexOf(n[a]) > -1) return;
            if (0 === (e + "").indexOf("name:")) {
                var r = this._settings.namedPlugins,
                    o = !1,
                    s = e.split("name:");
                if (2 == s.length)
                    for (var l in r)
                        if (s[1] === l) {
                            "object" == typeof t ? t.url = r[l] : t = r[l];
                            o = !0;
                            break
                        }
                if (!o) return
            }
            this.call(i || "loadPlugin", t)
        },
        before: function() {
            var e = this,
                t = e._settings;
            e.ready = !0;
            e.volume(t.volume);
            e.muted(t.muted);
            e._lastSignificant = t.startTime
        },
        started: function(e) {
            var i = this,
                n = i._settings;
            e.supportChromecast && n.allowCasting && (i.castProvider = new t(i));
            window.addEventListener ? window.addEventListener("beforeunload", function() {
                i.call("stop", {
                    destroy: !0
                })
            }) : window.attachEvent && window.attachEvent("onbeforeunload", function() {
                i.call("stop", {
                    destroy: !0
                })
            });
            var a = window.embeddedMedia.parentalGuidance;
            a.updateCallbacks.push(function(e) {
                n.guidance = e;
                e.noPin = n.guidanceCleared;
                i.call("updateGuidance", e)
            });
            a.closedCallbacks.push(function(e) {
                i.call("guidanceClosed", [e]);
                if (i.resizePlayer) {
                    i.resizePlayer();
                    setTimeout(function() {
                        i.resizePlayer && i.resizePlayer()
                    }, 500)
                }
                "html" == i.type && i._gCalled && e && !i._lockClicked && i.play(!0);
                i._gCalled = !1
            })
        },
        processEvent: function(t, i, n, a) {
            var r = t.type;
            i = i || {};
            var o = this;
            for (var s in i)
                if ("type" != s) {
                    t[s] = i[s];
                    "currentDuration" == s && (t.duration = i[s])
                }
            switch (r) {
                case "ccRequest":
                    o.castProvider.requestCast(n.mediatorIdentifer);
                    break;
                case "ccCancel":
                    o.castProvider.requestStop();
                    break;
                case "ccPlay":
                    o.castProvider.play();
                    break;
                case "ccPause":
                    o.castProvider.pause();
                    break;
                case "ccStopMedia":
                    o.castProvider.stopMedia();
                    break;
                case "ccSubsOn":
                    o.castProvider.subtitlesOn();
                    break;
                case "ccSubsOff":
                    o.castProvider.subtitlesOff();
                    break;
                case "ccSeek":
                    o.castProvider.seekTo(n.seekTime);
                    break;
                case "ccVolume":
                    o.castProvider.setVolume(n.floatVolume);
                    break;
                case "ccInterrupt":
                    o.castProvider.interrupt();
                    break;
                case "timeupdate":
                    o._currentTime = i.currentTime;
                    o._duration = i.duration;
                    if (Math.abs(o._currentTime - o._lastSignificant) > o._settings.significantTime) {
                        var l = a.Event("significanttimeupdate");
                        for (s in i) "type" != s && (l[s] = i[s]);
                        o._lastSignificant = o._currentTime;
                        o._settings.trigger(l)
                    }
                    break;
                case "seeked":
                    o._seeking = !1;
                    "number" == typeof i.currentTime && (o._currentTime = i.currentTime);
                    break;
                case "seeking":
                    o._seeking = !0;
                    "number" == typeof i.currentTime && (o._currentTime = i.currentTime);
                    break;
                case "playlistEnded":
                case "ended":
                    o._playing = !1;
                    o._ended = !0;
                    break;
                case "pause":
                    o._paused = !0;
                    break;
                case "playing":
                    o._playing = !0;
                    o._paused = !1;
                    o._ended = !1;
                    o._kind = t.kind;
                    break;
                case "playlistLoaded":
                    o._seeking = !1;
                    o._paused = !0;
                    o._ended = !1;
                    o.playlist = i.playlist;
                    break;
                case "mediaItemChanged":
                    o._currentTime = 0;
                    o._lastSignificant = 0;
                    o._mediaItem = t.mediaItem;
                    break;
                case "linkRequest":
                    ("managePIN" === i.type || "PGinfo" === i.type) && window.open("//www.bbc.co.uk/iplayer/guidance", "pg");
                    break;
                case "embed":
                    if (o.playlist) {
                        o._restoreFocus = !0;
                        e.show(o)
                    }
                    break;
                case "setPIN":
                    window.embeddedMedia.parentalGuidance.setPIN(i.PIN);
                    break;
                case "setGuidanceSkipped":
                    window.embeddedMedia.parentalGuidance.setAgeConfirmation(i.skipped);
                    break;
                case "guidanceLocked":
                    window.embeddedMedia.parentalGuidance.setLocked(i.locked, !0);
                    break;
                case "guidanceClosed":
                    window.embeddedMedia.parentalGuidance.close(void 0, !0);
                    break;
                case "setUnder16Permission":
                    window.embeddedMedia.parentalGuidance.setUnder16Permission(i.hasPermission);
                    break;
                case "configFromPlayer":
                    window.embeddedMedia.processConfigFromPlayer(t.config, "", o._settings.domid);
                    break;
                case "uiConfigFromPlayer":
                    window.embeddedMedia.processConfigFromPlayer(t.config, "ui", o._settings.domid)
            }
        },
        setPoster: function(e, t) {
            this.ready && e && this.call("setPoster", {
                url: e,
                effect: t
            })
        },
        updateMediaset: function() {},
        queuePlaylist: function() {},
        setPreviousPlaylist: function() {},
        loadPlaylist: function() {},
        captureIntent: function() {},
        updateUiConfig: function() {},
        updateConfig: function() {},
        distributeConfig: function() {}
    };
    return n
});
define("mp/classes/players/flash/smp-flash", ["jquery-1.9", "mp/modules/device", "mp/classes/settingsbuilder", "mp/classes/players/player", "mp/classes/errors/error"], function(e, t, i, n, a) {
    function r(e) {
        return e.getUTCFullYear() + "/" + o(e.getUTCMonth() + 1) + "/" + o(e.getUTCDate()) + " 00:00:00 UTC"
    }

    function o(e) {
        return 10 > e ? "0" + e : e
    }

    function s(e, t) {
        return function() {
            window.embeddedMedia.handle(e, t)
        }
    }

    function l() {
        var t = window.embeddedMedia,
            i = 0;
        return function(n, r) {
            var o = t.playerInstances[n],
                l = r.type;
            if (o && n == o._container.attr("id"))
                if (o._swf) {
                    var d = r.data;
                    if ("screenReaderAlert" != l) {
                        var c = e.Event(l);
                        d && d.callType && (d = d.data);
                        o.processEvent(c, d, d, e);
                        switch (l) {
                            case "initialised":
                                o._settings.trigger(e.Event("smpFlashLoaded"));
                                if (20 > o._initAttempts) {
                                    o._initAttempts++;
                                    try {
                                        o.initialised()
                                    } catch (p) {
                                        setTimeout(s(n, r), 100);
                                        return
                                    }
                                } else {
                                    o.call("showError", window.embeddedMedia.language.t("6004", o._settings.locale()));
                                    o._settings.dispatch(6005);
                                    o._initAttempts = 0
                                }
                                break;
                            case "loadedmetadata":
                                o._duration = d.duration;
                                break;
                            case "canplay":
                                o._currentTime = d.resumeTime;
                                break;
                            case "volumechange":
                                c.volume = d;
                                o._volume = d;
                                c.muted = o._muted = 0 === d;
                                break;
                            case "info":
                                o._currentTime = d.playheadTime;
                                break;
                            case "playing":
                                o.recordDeprecationCookie && setTimeout(function() {
                                    o.recordDeprecationCookie && o.recordDeprecationCookie()
                                }, 10);
                                break;
                            case "playlistLoaded":
                                c.url = d.url;
                                break;
                            case "mediaItemChanged":
                                o._kind = c.kind;
                                o._mediaItem = r.data;
                                break;
                            case "guidanceshow":
                                if (o._settings.guidanceCleared) o.call("updateGuidance", o._settings.guidance);
                                else {
                                    o._restoreFocus = !0;
                                    o._gCalled = !0;
                                    o._lockClicked = r.data.lockClicked;
                                    t.parentalGuidance.show(r.data, o._settings.ui.colour, o._settings.locale())
                                }
                                break;
                            case "verify":
                                t.parentalGuidance.verify(d, function(e) {
                                    o.call("verified", e)
                                });
                                break;
                            case "error":
                                r.data && (c.errorData = new a(r.data.code, o._settings, r.data));
                                break;
                            case "focusOnFlash":
                            case "focusAfterFlash":
                            case "focusBeforeFlash":
                                o[l]()
                        }
                        o._settings.trigger(c)
                    } else {
                        if ("string" != typeof d) return;
                        window.embeddedMedia.language.screenreaderAlert(d)
                    }
                } else i++ < 20 ? setTimeout(s(n, r), 100) : o._settings.dispatch(6e3)
        }
    }

    function d() {
        this.type = "flash";
        this._name = "smp-flash";
        this._deprecated = !0;
        this._volume = 0;
        this._currentTime = 0;
        this._lastSignificant = 0;
        this._duration = 0;
        this._kind = "";
        this.includePoster = !1;
        this._pluginsToLoad = [];
        this._initAttempts = 0;
        return this
    }

    function c(e, t, i, n, a, r) {
        for (var o in i)
            if (i.hasOwnProperty(o)) {
                var s = encodeURIComponent(o),
                    l = encodeURIComponent(i[o]);
                n.flashvars ? n.flashvars += "&" + s + "=" + l : n.flashvars = s + "=" + l
            }
        var d = document.createElement(u ? "div" : "object");
        for (var c in n) n.hasOwnProperty(c) && "movie" !== c.toLowerCase() && d.appendChild(p(c, n[c]));
        if (u) {
            var m = document.createElement("div");
            m.innerHTML = "<object classid='clsid:D27CDB6E-AE6D-11cf-96B8-444553540000'><param name='movie' value='" + a + "'>" + d.innerHTML + "</object>";
            d = m.firstChild
        } else {
            d.setAttribute("type", "application/x-shockwave-flash");
            d.setAttribute("data", a)
        }
        d.setAttribute("id", e);
        d.setAttribute("height", "100%");
        d.setAttribute("width", "100%");
        t.parentNode && t.parentNode.replaceChild(d, t);
        r && r({
            ref: d,
            id: t.id
        })
    }

    function p(e, t) {
        var i = document.createElement("param");
        i.setAttribute("name", e);
        i.setAttribute("value", t);
        return i
    }
    var u = !1,
        m = d.prototype = new n;
    m.compatibility = function(e) {
        var i = t.get(),
            n = !1;
        if (window.navigator && navigator.plugins) {
            for (var a = 0; navigator.plugins.length > a; a++) "Shockwave Flash" == navigator.plugins[a].name && (n = !0);
            if (!n && (!document.documentMode || 11 > document.documentMode) && window.ActiveXObject) try {
                n = !!new ActiveXObject("ShockwaveFlash.ShockwaveFlash");
                u = !0
            } catch (r) {}
        }
        return !(e.dashPlaybackOnly || e.backgroundPlayer && !i.useOpaque || i.os.kindleSilk || i.os.android || !n)
    };
    m.embed = function(i, n) {
        var a = t.get(),
            o = this;
        o._settings = i;
        o._container = i.container;
        for (var s = 0; i.plugins.toLoad.length > s; s++) {
            var l = i.plugins.toLoad[s];
            o.loadPlugin(l, l.data)
        }
        o.onLoad = n;
        var d = o._container.attr("id"),
            c = o.name() + "SWF" + d,
            p = {
                domId: d,
                jsCallbackMethod: "window.embeddedMedia.handle",
                forceGuidance: i.forceGuidance,
                today: r(i.today),
                isBSTime: i.isBSTime,
                waitOnPluginLoad: i.waitOnPluginLoad,
                uxHighlightColour: i.ui.colour,
                uxHighlightForeColour: i.ui.foreColour,
                customRdotBaseURL: i.customRdotBaseURL,
                enableRdotReporting: i.enableRdotReporting,
                noTracking: i.noTracking,
                embedReferer: document.referrer || "",
                embedPageUrl: i.embedPageURL,
                enableSonarReporting: !1,
                bumpVersion: window.embeddedMedia.version,
                appName: i.appName,
                appVersion: i.appVersion,
                appType: i.appType
            };
        if (i.ui.locale) {
            i.ui.locale.lang && (p.lang = i.ui.locale.lang);
            i.ui.locale.path && (p.localePath = i.ui.locale.path)
        }
        var u = {
            quality: "high",
            bgcolor: "000000",
            allowFullScreen: !0,
            allowScriptAccess: "always"
        };
        a.useOpaque && (u.wmode = "opaque");
        var f = {
            position: "relative",
            "z-index": "1",
            height: "100%",
            width: "100%",
            "padding-bottom": 0
        };
        i.superResponsive && (f["padding-bottom"] = "56.25%");
        "background" == i.product && (f.visibility = "hidden");
        var h, g, y, b, v;
        h = e("<div />").css(f);
        if (!i.backgroundPlayer) {
            var w = {
                    "z-index": 1e6,
                    position: "fixed",
                    top: "-9999px",
                    left: "100px",
                    "max-width": "600px",
                    "background-color": "#ffffff",
                    color: "#000000",
                    "border-style": "solid",
                    "border-width": "1px",
                    padding: "8px 8px"
                },
                P = "font-weight:bold; font-size : 0.9em; font-family: arial; color:black",
                k = i.locale();
            v = e('<div id="' + d + 'jumpMediaPlayer"><a style="' + P + '" id="' + d + 'jumpMediaPlayerLink" href="">' + window.embeddedMedia.language.t("jumpMediaPlayer", k) + "</a></div>").css(w).appendTo(h);
            y = e('<div id="' + d + 'beforeFlash"><a style="' + P + '" id="' + d + 'beforeFlashLink" href="//www.bbc.co.uk/faqs/online/mp_accessibility_help">' + window.embeddedMedia.language.t("mediaPlayerHelp", k) + "</a></div>").css(w).appendTo(h);
            var x = function() {
                    e(this).css({
                        top: "100px"
                    })
                },
                C = function() {
                    e(this).css({
                        top: "-9999px"
                    })
                };
            v.focusin(x);
            v.focusout(C);
            y.focusin(x);
            y.focusout(C);
            v.keydown(function(e) {
                var t = e.keyCode || e.which;
                if (13 === t || 32 === t) {
                    e.preventDefault && e.preventDefault();
                    e.returnValue = !1;
                    o.focusAfterFlash();
                    return !1
                }
            });
            y.keydown(function(e) {
                var t = e.keyCode || e.which;
                if (9 === t && !e.shiftKey) {
                    e.preventDefault && e.preventDefault();
                    e.returnValue = !1;
                    setTimeout(function() {
                        if (o._swf) {
                            y.blur();
                            o._swf.focusOnFirst();
                            o._swf.tabIndex = 0;
                            o._swf.focus()
                        }
                    }, 200);
                    return !1
                }
            });
            o.focusBeforeFlash = function() {
                var e = document.getElementById(d + "beforeFlashLink");
                e && setTimeout(function() {
                    e.focus()
                }, 10)
            }
        }
        g = e("<div/>").css({
            position: "absolute",
            left: "0px",
            top: "0px",
            right: "0px",
            bottom: "0px"
        }).appendTo(h);
        e("<div/>").attr({
            id: c
        }).appendTo(g);
        if (!i.backgroundPlayer) {
            b = e('<div id="' + d + 'afterFlash" style="z-index: 1000000;position:fixed;top: 10px;left : -9999px;background-color: #ffffff;color: #000000;border-style:solid;border-width:1px;padding: 8px 8px"><a id="' + d + 'returnToMediaPlayerLink" href="#afterFlash">' + window.embeddedMedia.language.t("outOfMediaPlayer", k) + "</a></div>").appendTo(h);
            b.keydown(function(e) {
                var t = e.keyCode || e.which;
                if (13 === t || 32 === t || 9 === t && e.shiftKey) {
                    e.preventDefault && e.preventDefault();
                    e.returnValue = !1;
                    setTimeout(function() {
                        if (o._swf) {
                            9 === t ? o._swf.focusOnLast() : o._swf.focusOnFirst();
                            o._swf.tabIndex = 0;
                            o._swf.focus()
                        }
                    }, 200)
                }
            })
        }
        o.focusAfterFlash = function() {
            var e = document.getElementById(d + "returnToMediaPlayerLink");
            e && setTimeout(function() {
                e.focus()
            }, 10)
        };
        o.focusOnFlash = function() {
            setTimeout(function() {
                if (o._swf) {
                    o._swf.tabIndex = 0;
                    o._swf.focus()
                }
            }, 10)
        };
        o.wrapper = h;
        o._container.empty().append(h);
        o.attachListeners();
        o.embeddingProperties = [c, g[0].firstChild, p, u, i.swfUrl, function(e) {
            o._swf = e.ref;
            o.onLoad(o, m.capability());
            window.chrome && h[0].addEventListener("mousedown", function() {
                "Adobe Flash Player" == e.ref.title && o.play()
            })
        }];
        o.embedIt()
    };
    m.embedIt = function() {
        var e = this,
            t = typeof document.readyState;
        "undefined" !== t && ("complete" == document.readyState || "interactive" == document.readyState) || "undefined" == t && document.body ? c.apply(null, e.embeddingProperties) : document.attachEvent ? document.attachEvent("onreadystatechange", function() {
            "complete" == document.readyState && c.apply(null, e.embeddingProperties)
        }) : document.addEventListener && document.addEventListener("DOMContentLoaded", function() {
            c.apply(null, e.embeddingProperties)
        })
    };
    m.attachListeners = function() {
        window.embeddedMedia.handle = l(this._settings.domid, this)
    };
    m.hide = function(e) {
        e ? this._swf.style.visibility = "hidden" : this.wrapper[0].style.left = "-9000px"
    };
    m.show = function(e) {
        this._swf.style.visibility = "visible";
        this.wrapper[0].style.left = "0px";
        e && this.play()
    };
    m.initialised = function() {
        var i = this,
            n = t.get();
        i.uiDefaults(n);
        i.call("setUIOptions", i._settings.ui);
        i.before();
        for (var a = 0; i._pluginsToLoad.length > a; a++) {
            var r = i._pluginsToLoad[a];
            i.setData(r.data);
            r.swf && i.loadPluginWithCheck(r.swf, r.swf)
        }
        i.ready = !0;
        i.call("updateGuidance", i._settings.guidance);
        i.loadPlaylist();
        var o = window.embeddedMedia,
            s = !1;
        o.openCallbacks.push(function(t) {
            i.hide();
            if (i._playing && !i.paused()) {
                s = !0;
                i.pause()
            }
            t && t.type && setTimeout(function() {
                var n = e.Event(t.type, t);
                i._settings.trigger(n)
            }, 0)
        });
        o.closedCallbacks.push(function(t) {
            t && t.type && setTimeout(function() {
                var n = e.Event(t.type, t);
                i._settings.trigger(n)
            }, 0);
            i.show(s);
            s = !1;
            if (i._restoreFocus) {
                i._restoreFocus = !1;
                i.focusOnFlash();
                i._swf.focusOnFirst()
            }
        });
        "background" == i._settings.product && (i.wrapper.visibility = "");
        i.started(n)
    };
    m.updateMediaset = function() {
        var e = this,
            t = {};
        i.mediationUrls(t, e._settings);
        "http:" == location.protocol && (t.mediationUrl = t.mediationUrl.replace("https:", "http:"));
        e.call("updateMediation", t)
    };
    m.queuePlaylist = function(e, t) {
        var i = this;
        if (i._swf) {
            t.statsInfo = t.statsObject;
            i.call("queuePlaylistObject", {
                playlist: e,
                options: t
            })
        }
    };
    m.loadPlaylist = function() {
        var e = this;
        if (e._swf) {
            var n = {},
                a = e._settings;
            e._volume = a.volume;
            i.mediationUrls(n, a);
            "http:" == location.protocol && (n.mediationUrl = n.mediationUrl.replace("https:", "http:"));
            n.playlistUrl = a.playlist;
            n.embedPageURL = a.embedPageURL;
            n.noTracking = a.noTracking;
            n.counterName = a.counterName;
            n.appName = a.appName;
            n.appType = a.appType;
            n.appVersion = a.appVersion;
            n.quality = a.quality;
            n.loop = a.loop;
            n.enableStatsReporting = a.enableStatsReporting;
            n.siteID = a.siteID;
            n.overrideHoldingImage = a.overrideHoldingImage;
            n.overrideCtaDuration = a.overrideCtaDuration;
            n.enableSonarReporting = !1;
            n.enableBarbReporting = !1;
            n.bumpVersion = window.embeddedMedia.version;
            n.liveEnvironment = a.liveEnvironment;
            n.statsInfo = a.statsObject;
            n.suppressItemKind = a.suppressItemKind;
            n.startTime = a.startTime;
            n.unreliableTimecodes = a.unreliableTimecodes;
            n.maintainTheLock = a.maintainTheLock;
            "number" == typeof a.bitrateFloor && (n.bitrateFloor = a.bitrateFloor);
            "number" == typeof a.bitrateCeiling && (n.bitrateCeiling = a.bitrateCeiling);
            "number" == typeof a.limitQuality ? n.limitQuality = a.limitQuality : a.lowBandwidth && (n.limitQuality = 1);
            n.autoPlay = a.autoplay;
            n.promptGuidanceWhenAutoplay = a.promptGuidanceWhenAutoplay;
            n.noInPlaybackGuidanceMessage = a.noInPlaybackGuidanceMessage;
            n.flashOnlyUseOSMF = a.flashOnlyUseOSMF;
            n.enableStageVideo = !(a.disableStageVideo || t.os && "xp" == t.os.win && a.superResponsive);
            a.mediator.fck && (n.forceConnectionSupplier = a.mediator.fck);
            e.playlist = null;
            e._mediaItem = null;
            if (a.playlistObject) {
                e.call("setPlaylistObject", {
                    playlist: a.playlistObject,
                    options: n
                });
                a.playlistObject.embedRights && !a.externalEmbedUrl && e.updateUiConfig({
                    embed: {
                        enabled: !1
                    }
                })
            } else e.call("setPlaylistOptions", n);
            var r = a.webcastData;
            r && (r.accurateStartTime || r.scheduledStartTime || r.accurateEndTime || r.scheduledEndTime) && e.webcastData(a.webcastData)
        }
    };
    m.call = function(e, t) {
        if (this._swf)
            if (this._swf.call) {
                this.hasCalledSwf = !0;
                this._swf.call(e, t)
            } else !this.hasCalledSwf || "setPlaylistOptions" != e && "setPlaylistObject" != e || this.embedIt()
    };
    m.loadPlugin = function(e, t) {
        if (e && e.swf)
            if (this.ready) {
                this.setData(t);
                this.loadPluginWithCheck(e.swf, e.swf)
            } else this._pluginsToLoad.push({
                swf: e.swf,
                data: t
            })
    };
    m.updateUiConfig = function(e) {
        this.call("setUIOptions", e)
    };
    m.dispatchEvent = function(e, t) {
        e && this.call(e, t)
    };
    m.webcastData = function(e) {
        if (e) {
            n.prototype.webcastData.call(this, e);
            this.call("webcastData", e)
        }
    };
    m.capability = function() {
        var e = t.get();
        return {
            markers: !0,
            queuedPlaylist: !0,
            inPage: !0,
            chromecast: e.supportChromecast,
            overlay: e.useOpaque
        }
    };
    return d
});
define("mp/classes/players/app", ["jquery-1.9", "mp/modules/device", "mp/classes/settingsbuilder", "mp/classes/players/player"], function(e, t, i, n) {
    function a(e) {
        return !!e && ("radioProgramme" === e.kind || "audio" === e.kind)
    }

    function r(e, t) {
        if (!e) return "00:00";
        if (isNaN(e) || 0 > e || e > 36e4) return "";
        var i = Math.floor(e / 60),
            n = Math.floor(i / 60);
        i = Math.floor(i % 60);
        var a = Math.floor(e % 60);
        10 > i && (i = "0" + i);
        10 > a && (a = "0" + a);
        var r = [i, a];
        (n > 0 || t) && r.unshift(n);
        t && r.pop();
        return r.join(":")
    }

    function o() {
        var t = this,
            n = t._settings,
            o = n.ui.miniMode && n.ui.miniMode.enabled;
        t._createdUI = e.extend(!0, {}, n.ui);
        var c = !1,
            p = null;
        if (n.overrideCtaDuration) p = n.overrideCtaDuration;
        else {
            var f = i.firstProgramme(n.playlistObject);
            if (f) {
                c = a(f);
                f.duration && (p = r(f.duration, !1))
            }
        }
        if (!t.hasPlaylist()) return !0;
        var g = (n.ui.colour + "").replace("0x", "#").substring(0, 7),
            y = t.css;
        n.superResponsive && (y["padding-bottom"] = "56.25%");
        t.wrapper || (t.wrapper = e("<div />").css(y));
        o ? t.wrapper.addClass("minimode") : t.wrapper.removeClass("minimode");
        if (!n.backgroundPlayer) {
            var b = window.embeddedMedia.players.length,
                v = e('<a id="cta' + b + '" class="p_cta"/>').attr({
                    title: window.embeddedMedia.language.t("aaampPlay", n.locale())
                }),
                w = t._ctaClassName = n.ui[t.classStr] || n.ui.CTAcss;
            t.incGuidance = !0;
            var P = null;
            if (p && n.ui.cta && "duration" === n.ui.cta.mode) {
                P = document.createElement("span");
                P.className = "p_ctaDuration";
                P.textContent = p;
                v.append(P)
            }
            if (w) {
                t.incGuidance = !1;
                v[0].className = w
            } else {
                m = n.ui.useHighResIcons;
                var k = n.ui.cta || {};
                k.ignoreAudio && (c = !1);
                var x = s(n, m, c),
                    C = n.ui.cta && n.ui.cta.iplayer,
                    _ = l(m, P, o, c, C),
                    T = 'url("' + h + x + '")';
                void 0 !== k.custom && (T = 'url("' + k.custom + '")');
                v.css({
                    backgroundImage: T,
                    backgroundPosition: _.ctaBackgroundPosition,
                    backgroundRepeat: "no-repeat",
                    backgroundColor: "#000000",
                    backgroundSize: _.ctaBackgroundSize,
                    opacity: .8,
                    margin: 0,
                    width: _.ctaSize,
                    height: _.ctaSize,
                    display: "block",
                    position: "absolute",
                    bottom: "-0.5px"
                });
                if (P) {
                    var I = o ? "6px" : "8px",
                        S = o ? "60px" : "80px";
                    e(P).css({
                        "font-size": "0.75rem",
                        "text-align": "center",
                        position: "absolute",
                        bottom: I,
                        left: "0px",
                        width: S,
                        color: "#fff",
                        "background-colour": "transparent"
                    })
                }
                t._container.on("mousedown touchstart mouseover focusin", function() {
                    e(v).css({
                        backgroundColor: g,
                        opacity: 1
                    })
                });
                t._container.on("touchmove mouseup touchend mouseout focusout", function() {
                    e(v).css({
                        backgroundColor: "#000000",
                        opacity: .8
                    })
                })
            }
            if (n.includeAppClickHandler) {
                var E, M = !1,
                    O = function() {
                        M = !1
                    },
                    D = function() {
                        if ("" === t.wrapper[0].style.display && !M) {
                            t.sonar && setTimeout(function() {
                                n.trigger(e.Event("userPlay"));
                                t.sonar.action("click", "play", {
                                    mediaplayer_name: t.daxname,
                                    mediaplayer_type: "video"
                                })
                            }, 50);
                            t.play();
                            M = !0;
                            clearTimeout(E);
                            E = setTimeout(O, 100)
                        }
                    };
                e(v).attr("tabIndex", 0).on("keyup", function(e) {
                    (32 == e.keyCode || 13 == e.keyCode) && D()
                });
                t._container.on("click", D)
            }
            t.wrapper.append(v);
            t._container.empty().append(t.wrapper);
            if (t.incGuidance && (!n.ui.guidance || n.ui.guidance.enabled !== !1)) {
                var A = n.playlistObject && (n.playlistObject.guidance || n.playlistObject.warning) || n.forceGuidance || n[t._guidance];
                if (A) {
                    var L = u(n, A);
                    t.guidanceWrapper = d(L.gMessage, L.isWarning);
                    t.wrapper.append(t.guidanceWrapper.div)
                }
            }
            return !1
        }
        t._container.empty().append(t.wrapper)
    }

    function s(e, t, i) {
        var n = e.ui.cta || {};
        n.ignoreAudio && (i = !1);
        var a = "cta_play.png";
        n.iplayer ? a = t ? i ? "svg/white/play-iplayer-audio.svg" : "svg/white/play-iplayer.svg" : i ? "cta_play_audio_iplayer.png" : "cta_play_iplayer.png" : t ? a = i ? "svg/white/audio.svg" : "svg/white/play.svg" : i && (a = "cta_play_audio.png");
        return a
    }

    function l(e, t, i, n, a) {
        var r = {
            ctaSize: i ? "60px" : "80px",
            ctaBackgroundSize: "52px 52px",
            ctaBackgroundPosition: "50% " + (t ? "38%" : "50%")
        };
        if (e) {
            r.ctaBackgroundSize = "60px 60px";
            t && (r.ctaBackgroundPosition = "10px 5px");
            if (i)
                if (n)
                    if (a) {
                        t && (r.ctaBackgroundPosition = "6px 0px");
                        r.ctaBackgroundSize = "49px 49px"
                    } else {
                        t && (r.ctaBackgroundPosition = "7px 1px");
                        r.ctaBackgroundSize = "45px 45px"
                    }
            else {
                t && (r.ctaBackgroundPosition = "10px 4px");
                r.ctaBackgroundSize = "40px 40px"
            } else if (n) {
                t && (r.ctaBackgroundPosition = "9px 4px");
                r.ctaBackgroundSize = "62px 62px"
            }
        } else if (i)
            if (a) {
                r.ctaBackgroundSize = n ? "23px 23px" : "27px 27px";
                t && (r.ctaBackgroundPosition = "50% 31%")
            } else if (n) {
            r.ctaBackgroundSize = "22px 22px";
            t && (r.ctaBackgroundPosition = "50% 34%")
        } else r.ctaBackgroundSize = "35px 35px";
        else n ? r.ctaBackgroundSize = "28px 28px" : a && (r.ctaBackgroundSize = "36px 36px");
        return r
    }

    function d(e, t, i) {
        var n = document.createElement("div"),
            a = window.embeddedMedia.players.length,
            r = !i,
            o = "",
            s = document.getElementsByClassName("p_cta")[0];
        s && (o = window.getComputedStyle ? window.getComputedStyle(s).direction : s.currentStyle.direction);
        var l = "rtl" == o,
            d = l ? "margin-right: 10px; " : "margin-right: -2px; ",
            p = l ? "margin-right:10px;" : "margin-left:10px;",
            u = l ? "margin-right:80px;" : "margin-left:80px;",
            f = l ? "padding-left:30px;" : "padding-right:30px;";
        n.id = "p_guidance" + a;
        var g = document.createElement("div");
        g.id = "p_guidanceBox" + a;
        g.className = "p_guidanceBox";
        var y = document.createElement("span"),
            b = document.createElement("span"),
            v = t ? "background-color:white; color:black;" : "background-color:red;",
            w = "display:inline-block;margin:auto;border-radius:50%;height:15px;width:15px;" + v + "position: relative; top:-2px;";
        if (m) {
            y.id = "p_guidanceG" + a;
            b.id = "p_guidanceW" + a;
            y.style.backgroundImage = 'url("' + h + 'svg/guidance.svg")';
            b.style.backgroundImage = 'url("' + h + 'svg/warningGuidance.svg")';
            b.style.display = t ? "inline-block" : "none";
            y.style.display = t ? "none" : "inline-block";
            y.setAttribute("aria-labelledby", "p_guidanceText" + a);
            b.setAttribute("aria-labelledby", "p_guidanceText" + a);
            w = "width:15px;height:15px;display:inline-block;position: relative; top: 2px;" + d
        } else {
            y.id = "p_guidanceG" + a;
            var P = document.createElement("span");
            P.id = "p_guidanceGText" + a;
            y.appendChild(P);
            P.textContent = "G";
            P.setAttribute("aria-labelledby", "p_guidanceText" + a)
        }
        g.appendChild(y);
        g.appendChild(b);
        var k = document.createElement("span");
        k.id = "p_guidanceText" + a;
        k.textContent = e;
        g.appendChild(k);
        n.appendChild(g);
        var x = document.createElement("style"),
            C = document.getElementsByTagName("head")[0];
        C.appendChild(x);
        var _ = x.sheet ? x.sheet : x.styleSheet,
            T = "position:absolute;height:80px;bottom:-0.5px;background-color: rgba(0, 0, 0, 0.7);" + u + "margin-top: -40px;display:table;" + f + "line-height:1";
        document.documentElement.className.indexOf("b-reith-sans-font") >= 0 && r ? n.className += "font-family-sans" : T += "; font-family:helvetica, Arial, sans-serif";
        c(_, "#p_guidance" + a, T, 0);
        c(_, ".minimode #p_guidance" + a, "left: 61px;height:60px;", 1);
        c(_, "#p_guidanceBox" + a, "color:#ffffff;font-size:12px;font-weight:bold;padding-left:8px;display:table-cell;vertical-align:middle;", 2);
        c(_, "#p_guidanceG" + a, w, 3);
        c(_, "#p_guidanceW" + a, w, 3);
        c(_, "#p_guidanceGText" + a, "position:relative;left:3px;top:1px;line-height:normal;", 4);
        c(_, "#p_guidanceText" + a, p, 5);
        return {
            text: k,
            div: n,
            id: a
        }
    }

    function c(e, t, i, n) {
        e.insertRule ? e.insertRule(t + "{" + i + "}", n) : e.addRule && e.addRule(t, i, n)
    }

    function p(e) {
        this.immediate = !0;
        this._name = e;
        return this
    }

    function u(e, t) {
        var i = {
            gMessage: t,
            isWarning: !1
        };
        if (e.playlistObject) {
            if (e.playlistObject.warning) {
                i.gMessage = e.playlistObject.warning;
                i.isWarning = !0
            }
            if (e.playlistObject.guidance) {
                i.gMessage = e.playlistObject.guidance;
                i.isWarning = !1
            }
        }
        return i
    }
    var m, f = {
            position: "relative",
            "z-index": 1,
            height: "100%",
            width: "100%",
            cursor: "pointer",
            "padding-bottom": 0
        },
        h = "//emp.bbci.co.uk/emp/assets/2.0.26/",
        g = p.prototype = new n;
    g.createCta = o;
    g.css = f;
    g.embed = function(e, i) {
        var n = this;
        n._settings = e;
        n._container = e.container;
        n._version = window.embeddedMedia.version;
        n.uiDefaults(t.get());
        n.ctaNeedsCreating = n.createCta();
        n.extraEmbed && n.extraEmbed();
        i(n, n.capability);
        n.processPlaylist(null, !0);
        e.trigger("initialised");
        n.processPlaylist()
    };
    g.show = function(e) {
        this.wrapper.children().show();
        e && this.play()
    };
    g.hide = function() {
        this.wrapper.children().hide()
    };
    g.setLocation = function(i) {
        var n = this._settings;
        if (n.insideIframe) {
            var a = e.Event("navigateTo");
            a.href = i;
            n.trigger(a)
        } else {
            try {
                var r = "" === top.location.href && !1
            } catch (o) {
                r = !0
            }
            t.requiresWindowOpenSMPAirLaunch || r ? window.open(i) : top.location = i
        }
    };
    g.hasPlaylist = function() {
        var e = this._settings;
        return e.playlist || e.playlistObject
    };
    g.updateUiConfig = function() {
        var e = this,
            t = e._createdUI || {},
            i = e._settings.ui,
            n = !1,
            a = t.miniMode && t.miniMode.enabled,
            r = i.miniMode && i.miniMode.enabled;
        if (a != r) n = !0;
        else if (t.colour != i.colour) n = !0;
        else {
            var o = i[e.classStr] || i.CTAcss;
            e._ctaClassName != o && (n = !0)
        }
        if (n) {
            this.wrapper && this.wrapper.empty();
            this.createCta()
        }
    };
    g.processPlaylist = function(t, i) {
        var n = this,
            a = n._settings,
            r = t || a.playlistObject;
        if (r) {
            n.playlist = e.extend(!0, {}, r);
            var o = n.playlist.items;
            if (o)
                for (var s = o.length - 1; s >= 0; s--) {
                    var l = o[s];
                    n.filterPlaylist && ("ident" == l.kind || "advert" == l.kind || "360" == l.kind) && o.splice(s, 1);
                    if (l.versionID) l.vpid = l.versionID;
                    else if (l.serviceID) {
                        l.vpid = l.serviceID;
                        l.live = !0;
                        n.playlist.simulcast !== !1 && (n.playlist.simulcast = !0)
                    }
                    l.identifier = l.vpid
                }
            if (!i) {
                var d = e.Event("playlistLoaded");
                d.playlist = n.playlist;
                a.trigger(d)
            }
        } else n.playlist = null
    };
    g.next = function() {
        var t = this,
            i = t.playlist;
        if (i)
            if (i.items && i.items.length > 1) i.items.shift();
            else if (i.queuedPlaylist) {
            t.processPlaylist(i.queuedPlaylist);
            var n = t._settings;
            n.playlist = "";
            n.playlistObject = i.queuedPlaylist;
            n.webcastData = {};
            n.overrideHoldingImage = null;
            n.statsObject.parentPID = void 0;
            n.statsObject.parentPIDType = void 0;
            n.statsObject.episodePID = void 0;
            n.statsObject.clipPID = void 0;
            n.statsObject.brandPID = void 0;
            n.statsObject.seriesPID = void 0;
            n.statsObject.playlistLabels = void 0;
            n.statsObject.playlistName = void 0;
            i.queuedOptions && e.extend(!0, n, i.queuedOptions);
            t._statsObject = e.extend(!0, {}, n.statsObject)
        }
    };
    g.loadPlaylist = function() {
        var e = this,
            t = e._settings,
            i = window.embeddedMedia.parentalGuidance;
        i.setUnder16Permission(!1);
        if (e.ctaNeedsCreating) setTimeout(function() {
            e.ctaNeedsCreating = e.createCta()
        }, 100);
        else if (e.incGuidance && (!t.ui.guidance || t.ui.guidance.enabled !== !1)) {
            var n = t.playlistObject && (t.playlistObject.guidance || t.playlistObject.warning) || t.forceGuidance || t[e._guidance];
            if (n) {
                var a = u(t, n);
                if (e.guidanceWrapper) {
                    if (m) {
                        var r = document.getElementById("p_guidanceG" + e.guidanceWrapper.id),
                            o = document.getElementById("p_guidanceW" + e.guidanceWrapper.id);
                        if (a.isWarning) {
                            o.style.display = "inline-block";
                            r.style.display = "none"
                        } else {
                            o.style.display = "none";
                            r.style.display = "inline-block"
                        }
                    } else {
                        var s = document.getElementById("p_guidanceGText" + e.guidanceWrapper.id),
                            l = document.getElementById("p_guidanceG" + e.guidanceWrapper.id);
                        if (a.isWarning) {
                            s.style.color = "black";
                            l.style.backgroundColor = "white"
                        } else {
                            s.style.color = "white";
                            l.style.backgroundColor = "red"
                        }
                    }
                    e.guidanceWrapper.div.style.display = "";
                    e.guidanceWrapper.text.textContent = a.gMessage
                } else {
                    e.guidanceWrapper = d(a.gMessage, a.isWarning, t.ui.disableReithFonts);
                    e.wrapper.append(e.guidanceWrapper.div)
                }
            } else if (e.guidanceWrapper) {
                e.guidanceWrapper.div.style.display = "none";
                e.guidanceWrapper.text.textContent = ""
            }
        }
        e.processPlaylist();
        t.autoplay && e.play();
        e.resetContainer && e.resetContainer();
        e.setPoster()
    };
    return p
});
define("mp/classes/players/flash/smp-flash-noembed", ["mp/classes/players/app"], function(e) {
    function t() {
        var e = this._settings;
        e.delayEmbed = !1;
        e.autoplay = !0;
        e.promptGuidanceWhenAutoplay = !0;
        e.noInPlaybackGuidanceMessage = !0;
        this._container.unbind("click");
        this._container.empty();
        this.fake = !0;
        this.reloadScope._loadOptions.call(this.reloadScope, !0)
    }

    function i(e) {
        var t = !1;
        if (window.navigator && navigator.plugins)
            for (var i = 0; navigator.plugins.length > i; i++) "Shockwave Flash" == navigator.plugins[i].name && (t = !0);
        return !e.dashPlaybackOnly && !e.autoplay && e.delayEmbed === !0 && t
    }

    function n() {
        this.compatibility = i;
        this.daxname = "SMPFLASHNOEMBED";
        this._name = "smp-flash-noembed";
        return this
    }
    n.prototype = new e("smp-flash-noembed");
    n.prototype.play = t;
    n.prototype.capability = {
        overlay: !0
    };
    return n
});
define("mp/modules/html5", [], function() {
    function e(e) {
        var t = document.createElement(e);
        return !(!t || !t.canPlayType)
    }
    return {
        media: {
            audio: e("audio"),
            video: e("video")
        },
        audio: {},
        video: {}
    }
});
define("mp/classes/xd", [], function() {
    var e = function(e) {
        var t = this,
            i = document.getElementById(e);
        t._receiveKey = e + Math.random();
        i && i.contentWindow && (t._postElement = i.contentWindow);
        t._url = i.src;
        t._listeners = {};
        t.post({
            initXD: {
                receiveKey: t._receiveKey
            }
        });
        t.receive(function(e) {
            if (e.data) {
                var i = e.data.type,
                    n = e.data.data,
                    a = t._listeners[i];
                if (a)
                    for (var r = 0; a.length > r; r++) {
                        var o = a[r];
                        o.call(t, n)
                    }
            }
        })
    };
    e.prototype = {
        _receiveKey: "",
        _postElement: null,
        _listeners: {},
        post: function(e) {
            var t = this;
            e && t._postElement && t._postElement.postMessage && t._postElement.postMessage(JSON.stringify(e), "*");
            return t
        },
        receive: function(e) {
            var t = this,
                i = function(i) {
                    var n = i.origin + "";
                    if ((0 === t._url.indexOf(n) || 0 === t._url.indexOf(n.replace("https://", "http://"))) && i.data && i.data.indexOf && 0 === i.data.indexOf("{")) {
                        var a = {};
                        for (var r in i) a[r] = "data" == r ? JSON.parse(i[r]) : i[r];
                        if (!a.data.receiveKey || a.data.receiveKey !== t._receiveKey) return !1;
                        e(a)
                    }
                };
            window.addEventListener ? window.addEventListener("message", i, !1) : window.attachEvent("onmessage", i);
            return t
        },
        on: function(e, t) {
            var i = this,
                n = function() {
                    setTimeout(function(e) {
                        t.apply(i, e)
                    }, 0, arguments)
                };
            this._listeners[e] || (this._listeners[e] = []);
            this._listeners[e].push(n);
            return i
        },
        fire: function(e, t) {
            this.post({
                receiveKey: this._receiveKey,
                type: e,
                data: t
            })
        }
    };
    return e
});
define("mp/classes/players/apps/smp-air", ["jquery-1.9", "mp/modules/device", "mp/classes/settingsbuilder", "mp/classes/players/app"], function(e, t, i, n) {
    function a(e, t) {
        return null == t || "" === t ? "" : "&" + encodeURIComponent(e) + "=" + encodeURIComponent(t)
    }

    function r(n) {
        var r = n._settings,
            o = "?";
        r.playlist && "" !== r.playlist && (o = "?playlistUrl=" + encodeURIComponent(r.playlist));
        var s = {};
        s.product = r.product;
        s.mediaSet = i.mediaSet(r);
        s.embedPageURL = r.embedPageURL;
        s.counterName = r.counterName;
        s.siteID = r.siteID;
        s.overrideHoldingImage = r.overrideHoldingImage;
        s.appName = r.appName;
        s.appType = r.appType;
        s.noTracking = !0;
        s.quality = "hd" !== r.quality ? r.quality : "high";
        r.startTime > 0 && (s.startTime = r.startTime);
        r.lowBandwidth && (s.limitQuality = 1);
        s.mediatorHost = r.mediator && r.mediator.host ? r.mediator.host : "open.live.bbc.co.uk";
        s.mediasetClass = "default";
        s.mediator = i.mediatorHref(r, s.mediaSet);
        r.mediator.saml && (s.samlMediationUrl = i.mediatorHref(r, s.mediaSet, !1, !0));
        r.mediator.fck && (s.forceConnectionSupplier = r.mediator.fck);
        s.forceGuidance = r.forceGuidance;
        var l = r.ui;
        s.uxHighlightColour = l.colour.toString().replace("#", "0x");
        s.uxFc = l.foreColour.toString().replace("#", "0x");
        s.uxAc = l.alternateColour.toString().replace("#", "0x");
        s.uxAfc = l.alternateForeColour.toString().replace("#", "0x");
        l.locale && l.locale.lang && (s.lang = l.locale.lang);
        t.get().os.kindleSilk && r.kindlePolicy ? s.policy = r.kindlePolicy : r.policy && (s.policy = r.policy);
        if (r.webcastData) {
            r.webcastData.accurateStartTime && (s.AST = r.webcastData.accurateStartTime);
            r.webcastData.scheduledEndTime && (s.SET = r.webcastData.scheduledEndTime);
            r.webcastData.accurateStartTime && (s.AET = r.webcastData.accurateEndTime)
        }
        s.enableBitrateSwitching = !r.disableBitrateSwitching;
        s.allowMainlineProfiles = r.allowMainlineProfiles;
        s.enableLiveRewind = l.controls && "undefined" != typeof l.controls.enableLiveRewind ? r.supportLiveRewindOnMobile && l.controls.enableLiveRewind !== !1 : r.supportLiveRewindOnMobile;
        if (t.get().connection.mobile) {
            s.isCellular = !0;
            s.startingQuality = 10
        } else s.startingQuality = 60;
        var d = r.statsObject;
        if (l.deprecationWarning) {
            d.noWarn = !l.deprecationWarning.enabled;
            l.deprecationWarning.timeout && (d.warnDelay = l.deprecationWarning.timeout)
        }
        s.statsObject = JSON.stringify(d);
        e.each(s, function(e, t) {
            s.hasOwnProperty(e) && (o += a(e, t))
        });
        e.each(r.configVars, function(e, t) {
            r.configVars.hasOwnProperty(e) && (o += a(e, t))
        });
        r.playlistObject && (o += "&pObj=" + encodeURIComponent(JSON.stringify(r.playlistObject)));
        return o
    }

    function o() {
        return t.get().os.kindleSilk ? "http://www.amazon.co.uk/Media-Applications-Technologies-Ltd-Player/dp/B009SQRRCG/ref=sr_1_2?s=mobile-apps&ie=UTF8&qid=1392817067&sr=1-2" : "market://details?id=air.uk.co.bbc.android.mediaplayer"
    }

    function s(t, i) {
        var n = new Date - i;
        if (!(n > 600 || "true" == window.name)) {
            var a = t._settings,
                r = document.createElement("style"),
                s = document.getElementsByTagName("head")[0];
            s.appendChild(r);
            var l = t._container.width(),
                d = r.sheet ? r.sheet : r.styleSheet;
            l > 300 && !t.launched ? d.insertRule("#marketPlacePopup{position:absolute;width:272px;height:93px;padding-top:16px; left:" + Math.floor((l - 272) / 2) + "px}", 0) : d.insertRule("#marketPlacePopup{position:fixed;width:272px;height:93px;left:10px;top:60px;padding:10px;margin-left:16px;z-index:100000;background-color:white;height:234px}", 0);
            d.insertRule("#marketPlacePopupHeader,#marketPlacePopupMessage{padding:8px 8px 0;color:#fff;font-size:1.4em;line-height:1.143;background:rgba(0,0,0,0.75)}", 1);
            d.insertRule("#marketPlacePopupHeader{font-size:1.8em;line-height:1.333}", 2);
            d.insertRule("#marketPlacePopupMessage{padding-bottom:6px}", 3);
            d.insertRule(".buttons{width:100%;display:block;margin-top:2px}", 4);
            d.insertRule("#marketPlacePopupInstallButton:hover,#marketPlacePopupCancelButton:hover,#marketPlacePopupInstallButton:focus,#marketPlacePopupCancelButton:focus{background:" + a.ui.colour + "}", 5);
            d.insertRule("#marketPlacePopupInstallButton,#marketPlacePopupCancelButton{width:49%;height:44px;padding:0 16px;line-height:44px;font-size:1.4em;text-transform:uppercase;color:#1c1c1c;background:#dcdcdc}", 6);
            d.insertRule("#marketPlacePopupCancelButton{float:right}", 7);
            var c = a.locale(),
                p = window.embeddedMedia.language,
                u = p.t("aaampTitle", c),
                m = p.t("aaampMsg", c),
                f = p.t("aaampInstall", c),
                h = p.t("aaampCancel", c);
            a.trigger(e.Event("showingAppInstallPrompt"));
            var g = e('<div id="marketPlacePopup"><div id="marketPlacePopupHeader" class="marketPlacePopupHeader">' + u + '</div><div id="marketPlacePopupMessage" class="marketPlacePopupMessage">' + m + '</div><div id="marketPlacePopupButton" class="buttons"><button id="marketPlacePopupInstallButton" class="install">' + f + '</button><button id="marketPlacePopupCancelButton" class="cancel">' + h + "</button></div></div>");
            t._container.unbind("mousedown touchstart mouseup touchend mousemove touchmove");
            t.wrapper && (t.wrapper[0].style.display = "none");
            if (l > 300 && !t.launched) {
                t.wrapperPopup || (t.wrapperPopup = e("<div />").css(t.css));
                t._container.append(t.wrapperPopup);
                t.wrapperPopup.append(g)
            } else e(document.body).append(g);
            t.resetContainer = function() {
                document.getElementById("marketPlacePopup").parentNode.removeChild(document.getElementById("marketPlacePopup"));
                setTimeout(function() {
                    t._container.trigger(e.Event("hidingAppInstallPrompt"));
                    t.wrapper && (t.wrapper[0].style.display = "")
                }, 250)
            };
            e("#marketPlacePopupInstallButton").bind({
                "mouseup touchend": function() {
                    e("#marketPlacePopupInstallButton").unbind("mouseup touchend");
                    t.sonar.action("install", "smpAirPrompt");
                    t.resetContainer();
                    t.setLocation(o());
                    return !1
                }
            });
            e("#marketPlacePopupCancelButton").bind({
                "mouseup touchend": function() {
                    e("#marketPlacePopupCancelButton").unbind("mouseup touchend");
                    t.sonar.action("cancel", "smpAirPrompt");
                    t.resetContainer();
                    return !1
                }
            })
        }
    }

    function l(t) {
        if (!f) {
            var i = +new Date;
            f = e("<iframe />").css({
                display: "none"
            }).attr({
                id: "BBCMediaPlayer",
                src: "bbcmediaplayer://play/" + r(t)
            });
            t.timer = setTimeout(function() {
                clearTimeout(t.timer);
                f.remove();
                f = null;
                s(t, i)
            }, 500);
            t._container.append(f)
        }
    }

    function d() {
        var e = this,
            t = window.embeddedMedia.parentalGuidance,
            i = this._settings;
        if (i.playlistObject) {
            var n, a = i.playlistObject.guidance,
                o = i.playlistObject.guidance,
                s = {
                    lockClicked: t.guidance.isGuidanceLocked
                };
            s.title = a ? a : "";
            s.guidance = o ? o : "";
            s.intent = "play";
            n = i.playlistObject.guidance && "" !== i.playlistObject.guidance ? !0 : !1;
            if (n && !t.guidance.canPlay && !i.guidanceCleared) {
                e.hasBeenClicked = !0;
                u(e);
                t.show(s, i.ui.colour, i.locale());
                return
            }
        }
        e.recordDeprecationCookie && e.recordDeprecationCookie();
        if (/Chrome/.test(navigator.userAgent)) {
            var d = "intent://play/" + r(e) + "#Intent;scheme=bbcmediaplayer;package=air.uk.co.bbc.android.mediaplayer;end";
            e.setLocation(d)
        } else l(e);
        return !1
    }

    function c(e) {
        var i = t.get().os;
        return !e.dashPlaybackOnly && !i.ios && !i.winphone && (i.android || i.kindleSilk)
    }

    function p() {
        function t() {
            if (void 0 !== document.hidden) window.name = document.hidden;
            else
                for (var e = ["webkit", "moz", "ms", "o"], t = 0; e.length > t; t++) void 0 !== document[e[t] + "Hidden"] && (window.name = document[e[t] + "Hidden"])
        }
        var i = {
            hidden: "visibilitychange",
            mozHidden: "mozvisibilitychange",
            webkitHidden: "webkitvisibilitychange",
            msHidden: "msvisibilitychange",
            oHidden: "ovisibilitychange"
        };
        for (var n in i)
            if (i.hasOwnProperty(n) && n in document) {
                document.addEventListener(i[n], t);
                break
            }
        e(window).blur(function() {
            window.name = "true"
        });
        e(window).focus(function() {
            window.name = "false"
        })
    }

    function u(e) {
        if (!h && window.embeddedMedia && window.embeddedMedia.parentalGuidance && window.embeddedMedia.parentalGuidance.closedCallbacks) {
            h = !0;
            window.embeddedMedia.parentalGuidance.closedCallbacks.push(function(t) {
                t && e.hasBeenClicked && e.play();
                e.hasBeenClicked = !1
            })
        }
    }

    function m() {
        this.daxname = "SMPAIR";
        this._deprecated = !1;
        this.classStr = "aaampCTAcss";
        this._guidance = "aaampGuidance";
        this.compatibility = c;
        return this
    }
    var f, h = !1;
    m.prototype = new n("aaamp", !0);
    m.prototype.play = d;
    m.prototype.launch = function(e) {
        var t = e._settings;
        this._settings = t;
        this._container = t.container;
        this.launched = !0;
        this.sonar = e.sonar;
        this.play()
    };
    m.prototype.destroy = function() {
        clearTimeout(this.timer)
    };
    m.prototype.extraEmbed = p;
    m.prototype.playlistOptions = r;
    m.prototype.getMarketPlaceURL = o;
    m.prototype.hasPlaylist = function() {
        var e = this._settings;
        return e.playlist || e.playlistObject
    };
    m.prototype.capability = {
        markers: !0
    };
    return m
});
define("mp/classes/flashFallback", ["jquery-1.9"], function(e) {
    var t = {
        show: function(i, n, a, r) {
            var o = n.locale,
                s = !n.ui.disableReithFonts;
            t.background && t.close();
            t.background = document.createElement("div");
            var l = t.background;
            l.style.cssText = "width:320px;height:88px;background-color:#333333;position:absolute;right:0%;top:0%";
            var d = document.createElement("table");
            l.appendChild(d);
            var c = document.createElement("tr");
            d.appendChild(c);
            var p = document.createElement("td");
            p.className = "";
            p.style.cssText = "width:44px;height:88px;padding-left:8px;background-position:center;background-repeat:no-repeat";
            p.style.backgroundImage = "url(//emp.bbci.co.uk/emp/assets/2.0.26/alert.png)";
            c.appendChild(p);
            var u = document.createElement("td"),
                m = "height:88px;padding-left:8px;padding-right:8px;font-size:14px;line-height:20px;color:#fff;";
            document.documentElement.className.indexOf("b-reith-sans-font") >= 0 && s ? u.className += "font-family-sans" : m += "font-family: helvetica, Arial, sans-serif";
            u.style.cssText = m;
            var f = window.embeddedMedia.language;
            if (a) {
                u.textContent = f.t("errorCantPlayInBrowser", o) + " ";
                var h = document.createElement("span");
                h.textContent = f.t("useMediaPlayerApp", o);
                h.style.cssText = "color:#fff;text-decoration:underline;cursor:pointer";
                u.appendChild(h);
                e(h).click(function() {
                    i && "function" == typeof i.action && i.action("click", "use_media_player_app");
                    r()
                })
            } else {
                u.textContent = f.t("errorFlashIsNeeded", o) + " " + f.t("enableFlash", o);
                var g = "https://get.adobe.com/flashplayer";
                u.innerHTML = u.innerHTML.replace("{link}", "<a href='" + g + "' >" + f.t("downloadFlashLink", o) + "</a>");
                var y = u.getElementsByTagName("a")[0];
                if (y) {
                    y.style.cssText = "color:#fff;backgroundColor:transparent;";
                    e(y).click(function() {
                        i && "function" == typeof i.action && i.action("click", "download_flash_player")
                    })
                }
            }
            c.appendChild(u);
            var b = document.createElement("td");
            b.style.cssText = "width:34px;height:88px;margin-left:8px";
            var v = document.createElement("div");
            v.style.cssText = "width:34px;height:34px;top:-25px;position:relative;background-position:center;background-repeat:no-repeat;";
            v.style.backgroundImage = "url(//emp.bbci.co.uk/emp/assets/2.0.26/cross.png)";
            e(v).click(function(e) {
                e.preventDefault && e.preventDefault();
                e.returnValue = !1;
                t.close()
            });
            b.appendChild(v);
            c.appendChild(b);
            e(document.body).append(l);
            f.screenreaderAlert(u.textContent)
        },
        close: function() {
            document.body.removeChild(t.background);
            t.background = null
        }
    };
    return t
});
define("mp/classes/rdotreporting", [], function() {
    var e = 0;
    return {
        error: function(t, i, n) {
            if (i.enableRdotReporting) {
                var a = i.customRdotBaseURL;
                if (a && 0 === (a + "").indexOf("//")) {
                    n = "c~" + navigator.platform + (n ? "~" + n : "");
                    var r = encodeURIComponent(i.counterName),
                        o = [a, "av", "0", "-", "bump", "1.0.0", "bump", window.embeddedMedia.version, "-", e++, r, "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", t, n].join("/"),
                        s = new Image;
                    s.src = o;
                    return o
                }
            }
        }
    }
});
define("mp/classes/players/html5/smp-html5", ["jquery-1.9", "mp/modules/device", "mp/modules/html5", "mp/classes/xd", "mp/classes/errors/error", "mp/classes/settingsbuilder", "mp/classes/players/apps/smp-air", "mp/classes/players/player", "mp/classes/flashFallback", "mp/classes/rdotreporting"], function(e, t, i, n, a, r, o, s, l, d) {
    function c() {
        this._name = "smphtml5";
        this.type = "html";
        this.includePoster = !1;
        this.requireSonarJS = !0;
        this._currentTime = 0;
        this._duration = 0;
        this._fullScreen = !1;
        this._lastSignificant = 0;
        this._kind = "";
        this.pluginsToLoad = [];
        this.updateMediasetCallback = null;
        return this
    }

    function p(e) {
        if (!y) {
            y = !0;
            window.addEventListener("devicemotion", function(t) {
                var i = {
                    rotationRate: {
                        alpha: t.rotationRate.alpha,
                        beta: t.rotationRate.beta,
                        gamma: t.rotationRate.gamma
                    },
                    orientation: window.orientation
                };
                e.xd.fire("devicemotion", i)
            })
        }
    }

    function u(i, n) {
        var a, r, o, s, l, d, c, p, u = i,
            m = u.wrapper,
            f = document.body.style,
            h = document.documentElement.style,
            g = t.get(),
            y = g.os.ios && !g.isTabletDevice;
        u._pfse = function() {
            u._fullScreen = !0;
            if (!p) {
                p = document.createElement("style");
                document.createTextNode && p.appendChild(document.createTextNode(""))
            }
            document.head.appendChild(p);
            var t = p.sheet ? p.sheet : p.styleSheet;
            if (t.cssRules && 0 === t.cssRules.length) {
                t.insertRule("#" + n + "wrp{z-index:2147483600!important}", 0);
                t.insertRule("div{z-index:auto!important}", 1);
                t.insertRule(".smpPG {z-index:2147483600!important}", 2)
            }
            o = window.pageXOffset || document.documentElement.scrollLeft;
            s = window.pageYOffset || document.documentElement.scrollTop;
            a = f.overflow;
            f.overflow = "hidden";
            r = h.overflow;
            h.overflow = "hidden";
            e(document.body).bind("touchmove.playerFullscreen", function(e) {
                e.preventDefault()
            });
            var i = u.resizePlayer = function() {
                    var e = window.innerWidth,
                        t = window.innerHeight;
                    m.css(y ? {
                        position: "fixed",
                        top: 0,
                        left: 0,
                        height: t + "px",
                        width: e + .5 + "px",
                        "padding-bottom": 0
                    } : {
                        position: "fixed",
                        top: 0,
                        left: 0,
                        height: t + "px",
                        width: e + "px",
                        "padding-bottom": 0
                    });
                    m[0].style.setProperty && m[0].style.setProperty("position", "fixed", "important");
                    m[0].style.WebkitTransform = "translate3d(0,0,10em)"
                },
                g = function() {
                    i();
                    clearTimeout(c);
                    c = setTimeout(i, 200)
                };
            e(window).bind("resize.playerFullscreen orientationchange.playerFullscreen", g);
            if (!l) {
                for (var b = "width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0, viewport-fit=cover", v = document.getElementsByTagName("meta"), w = 0; v.length > w; w++)
                    if ("viewport" === v[w].name) {
                        d = v[w].content;
                        v[w].content = b;
                        l = v[w];
                        break
                    }
                if (!d) {
                    l = document.createElement("meta");
                    l.name = "viewport";
                    l.content = b;
                    document.getElementsByTagName("head")[0].appendChild(l)
                }
            }
            setTimeout(i, 250)
        };
        u._pfsx = function() {
            u._fullScreen = !1;
            u.resizePlayer = null;
            clearTimeout(c);
            p && document.head.removeChild(p);
            e(window).unbind("resize.playerFullscreen orientationchange.playerFullscreen");
            m[0].style.setProperty && m[0].style.removeProperty("position", "fixed", "important");
            m.css(u.css);
            m[0].style.WebkitTransform = "";
            f.overflow = a;
            h.overflow = r;
            e(document.body).unbind("touchmove.playerFullscreen");
            if (d) {
                l.content = d;
                d = null;
                l = null
            } else if (l && l.parentNode) {
                l.content = "";
                l.parentNode.removeChild(l);
                l = null
            }
            window.scroll(o, s)
        }
    }

    function m(e) {
        var t = [];
        e.uiClass && t.push(e.uiClass);
        e.defaultUiClass && t.push(e.defaultUiClass);
        return t.join(" ")
    }

    function f(t) {
        return function(i) {
            var n, a = i.type,
                r = e.Event(a);
            for (var o in i) "type" != o && (r[o] = i[o]);
            t.processEvent(r, i, i.data, e);
            switch (a) {
                case "durationchange":
                    t._duration = i.duration;
                    break;
                case "initialised":
                    t._version = (i.version + "").replace(/\.smphtml5/i, "").replace(/[^\d\.]/gim, "");
                    t.initialised();
                    break;
                case "playInBump":
                    h(t);
                    break;
                case "flashFallbackGoToBump":
                    l.show(t.sonar, t._settings, !1, function() {
                        h(t)
                    });
                    break;
                case "volumechange":
                    t._muted = i.muted;
                    t._volume = i.volume;
                    break;
                case "guidanceShow":
                    t._gCalled = !0;
                    t._lockClicked = i.lockClicked;
                    window.embeddedMedia.parentalGuidance.show(i, t._settings.ui.colour, t._settings.locale());
                    t._fullScreen && (t.wrapper[0].style.WebkitTransform = "");
                    break;
                case "pause":
                    t._ended = r.ended;
                    break;
                case "mediaItemChanged":
                    t._mediaItem = r.mediaItem;
                    break;
                case "playing":
                    t._mediaItem = r.mediaItem;
                    break;
                case "playlistLoaded":
                    var s = document.getElementById(t.getId());
                    if (s)
                        if (t.playlist.title) s.title = t.playlist.title;
                        else {
                            var d = window.embeddedMedia.language;
                            s.title = d.t("screenreaderDefaultIframeTitle", t._settings.locale())
                        }
                    break;
                case "playlistLoading":
                    i.statsObject && (n = function() {
                        i.statsObject.playlistURL || (i.statsObject.playlistURL = i.url);
                        t._statsObject = i.statsObject
                    });
                    break;
                case "beforeFullscreenEnter":
                    i.applyPageFullScreen && t._pfse();
                    break;
                case "beforeFullscreenExit":
                    if (t._settings.superResponsive) {
                        t.wrapper.css("paddingBottom", "");
                        setTimeout(function() {
                            t.wrapper.css(t.css)
                        }, 10)
                    }
                    i.applyPageFullScreen && t._pfsx();
                    break;
                case "loadingThreeSixty":
                    p(t);
                    break;
                case "verify":
                    window.embeddedMedia.parentalGuidance.verify(i, function(e) {
                        t.call("PINverified", {
                            isCorrect: e
                        })
                    })
            }
            try {
                t._settings.trigger(r);
                n && n()
            } catch (c) {
                n && n();
                throw c
            }
        }
    }

    function h(e) {
        var t = new o;
        t.launch(e)
    }

    function g(i) {
        var n = e.extend(!0, {}, i);
        n._container = null;
        n.container = null;
        n.dispatch = null;
        n.init = null;
        n.trigger = null;
        var a = t.get();
        n.embedReferer = document.referrer || "";
        n.uiClass = m(n);
        r.mediationUrls(n, n, !0);
        n.mobileNetwork = t.get().connection.mobile;
        n.playVideoExternally = !n.preferHtmlOnMobile && n.preferInlineAudioPlayback && a.htmlAudio && n.playingAudio() && !n.playerWasForced;
        n.enableStatsReporting = n.enableStatsReporting;
        n._demiIsUK = window.embeddedMedia.demi.isUK;
        return n
    }
    var y = !1,
        b = c.prototype = new s;
    b.compatibility = function(e) {
        var n = t.get(),
            a = !1;
        if (n.os.playbook || e.disableHtml || !e.smpj2OptIn && e.requestWMP && n.os.winphone && window.external && "notify" in window.external) return !1;
        a = e.dashPlaybackOnly ? n.hasMseSupport : i.media.video && (n.hasHlsVodSupport || e.preferHtmlOnMobile && n.isMobileOrTablet || e.preferInlineAudioPlayback && n.htmlAudio && e.playingAudio() || n.preferHtmlPlayer || n.hasMseSupport && (e.preferHtmlOnDesktop && !n.isMobileOrTablet || e.smpj2OptIn || n.os.winphone && e.playingAudio()));
        a && (e.preferPlainOverDash = e.preferPlainOverDash && !e.smpj2OptIn);
        if (!a && e.preferHtmlControls !== !1 && n.hybrid && !e.smpj2NoHybrid && !n.isMobileOrTablet) {
            a = !0;
            e.preferVideoInFlash = !0
        }
        return a
    };
    b.embedUrl = function(e) {
        var t = e.smpj2Beta,
            i = t ? "//emp.bbc.co.uk/emp/SMPj/2.28.2/iframe.html" : "//emp.bbc.co.uk/emp/SMPj/2.28.2/iframe.html";
        e.html5Debug && (i = t ? "//emp.bbc.co.uk/emp/SMPj/2.28.2/debug.html" : "//emp.bbc.co.uk/emp/SMPj/2.28.2/debug.html");
        return i
    };
    b.embed = function(i, r) {
        clearTimeout(i.initialisationListenerTimeout);
        var o = this;
        o.css = {
            "border-bottom": 0,
            "z-index": 999,
            position: "relative",
            height: "100%",
            width: "100%",
            "padding-bottom": 0
        };
        o._settings = i;
        o._container = i.container;
        o._container.empty();
        var s = t.get();
        s.supportsFlash || window.embeddedMedia.demiHelper && window.embeddedMedia.demiHelper.determineConnectionType(i);
        if (i.saveData) {
            o._settings.delayEmbed = !0;
            o._settings.ui.thumbnail.enabled = !1;
            o._settings.ui.disableReithFonts = !0
        }
        o.uiDefaults(s);
        i.supportHls = s.hasHlsVodSupport;
        i.deviceSupports360 = s.support360;
        for (var l = 0; i.plugins.toLoad.length > l; l++) {
            var c = i.plugins.toLoad[l];
            o.loadPlugin(c, c.data)
        }
        var p = o.embedUrl(i),
            m = !1,
            h = ["bbc.co.uk", "bbc.com", "britbox.com", "bbcrewind.co.uk", "bbcconnectedstudio.co.uk"];
        for (l = 0; h.length > l; l++)
            if (location.host.indexOf(h[l]) !== -1) {
                p = p.replace("bbc.co.uk", h[l]);
                try {
                    document.domain = h[l];
                    m = !0
                } catch (g) {}
            }
        m || (p = p.replace(/^\/\//, "https://"));
        o.uniqueId = "X" + Math.random();
        var y = o._container;
        i.superResponsive && (o.css["padding-bottom"] = "56.25%");
        var b = o.getId(),
            v = o.wrapper = e("<div />").css(o.css).attr({
                id: b + "wrp"
            }).appendTo(y),
            w = e("<iframe />").attr({
                id: b,
                name: b,
                frameborder: 0,
                scrolling: "no",
                src: p,
                allowfullscreen: "",
                allowtransparency: ""
            }).css({
                position: "absolute",
                left: 0,
                top: 0,
                width: "100%",
                height: "100%"
            }).appendTo(v).load(function() {
                var t = setTimeout(function() {
                    d.error(6007, i, "smphtml5");
                    var t = e.Event("error");
                    t.errorData = new a(6007, i);
                    o._container.trigger(t)
                }, 5e3);
                y.bind("initialised", function() {
                    clearTimeout(t)
                });
                var r = e(this).attr("id");
                u(o, r);
                o.xd && (o.xd._listeners = {});
                o.xd = new n(r);
                o.xd.on("jsapi", f(o));
                if ("object" != typeof window.JSON) {
                    var s = document.createElement("script");
                    s.async = !0;
                    s.src = "https://emp.bbci.co.uk/emp/assets/bump-3/json.js";
                    var l, c = !1;
                    s.onload = function() {
                        clearTimeout(l);
                        c = !0;
                        o.fireBootstrap()
                    };
                    document.head.appendChild(s);
                    var p = function() {
                        window.JSON ? o.fireBootstrap() : l = setTimeout(p, 1e3)
                    };
                    l = setTimeout(p, 1e3)
                } else o.fireBootstrap()
            });
        o._settings.delayEmbed && w.attr("loading", "lazy");
        w.attr("gesture", "media");
        w.attr("allow", "autoplay");
        window.addEventListener && window.addEventListener("pageshow", function(e) {
            if (e.persisted) {
                w.attr("src", function(e, t) {
                    return t
                });
                o._fullScreen && o._pfsx()
            }
        });
        r(o, {
            markers: !0,
            queuedPlaylist: !0,
            previousPlaylist: !0,
            threeSixty: s.support360,
            inPage: !0,
            overlay: !0
        })
    };
    b.fireBootstrap = function() {
        var e = this;
        window.embeddedMedia.playerInstances[e.uniqueId] = e;
        var t = {
            player: {
                vars: g(e._settings)
            },
            id: e.uniqueId,
            requireMap: window.bbcRequireMap
        };
        try {
            var i = document.getElementById(e.getId());
            i.contentWindow.bootstrap(t)
        } catch (n) {
            e.xd.fire("bootstrap", t)
        }
    };
    b.updateUiConfig = function(e) {
        this.call("uiConfigFromBump", e)
    };
    b.updateConfig = function(e) {
        this.call("configFromBump", e)
    };
    b.captureIntent = function(e) {
        this.call("captureIntent", e)
    };
    b.updateMediaset = function() {
        var e = this,
            t = function() {
                var t = e._settings,
                    i = {
                        mediator: t.mediator,
                        mobileNetwork: window.embeddedMedia.demi.isMobileNetwork
                    };
                r.mediationUrls(i, t, !0);
                e.call("configFromBump", i)
            };
        e.ready ? t() : e.updateMediasetCallback = t
    };
    b.loadPlaylist = function(e) {
        var t = this;
        if (t.ready) {
            var i = g(t._settings);
            i.nonUserBypass = i.nonUserBypass || e === !0;
            t.playlist = null;
            t._mediaItem = null;
            t.call("loadPlaylist2", i);
            i.playlistObject && i.playlistObject.embedRights && !i.externalEmbedUrl && t.updateUiConfig({
                embed: {
                    enabled: !1
                }
            });
            var n = i.webcastData;
            n && (n.accurateStartTime || n.scheduledStartTime || n.accurateEndTime || n.scheduledEndTime) && t.webcastData(n);
            i.nonUserBypass = !1
        }
    };
    b.getId = function() {
        return this._name + "iframe" + this._settings.domid
    };
    b.call = function(e, t) {
        try {
            var i = document.getElementById(this.getId()),
                n = i.contentWindow.publicApi.api[e];
            n || (n = i.contentWindow.publicApi[e]);
            n(t)
        } catch (a) {
            this.xd && this.xd.fire("jsapi", {
                call: e,
                params: t
            })
        }
    };
    b.queuePlaylist = function(e, t) {
        var i = this;
        i.call("queuePlaylist", {
            playlist: e,
            options: t
        })
    };
    b.setPreviousPlaylist = function(e, t) {
        var i = this;
        i.call("setPreviousPlaylist", {
            playlist: e,
            options: t
        })
    };
    b.loadPlugin = function(e, t) {
        if (e)
            if (e.j2) {
                var i = {
                    url: e.j2,
                    data: t
                };
                if (this.ready) {
                    this.setData(i.data);
                    this.loadPluginWithCheck(e.j2, i, "loadPlugin2")
                } else this.pluginsToLoad.push(i)
            } else if (e.html) {
            i = {
                url: e.html,
                data: t
            };
            if (this.ready) {
                this.setData(i.data);
                this.loadPluginWithCheck(e.html, i, "loadPlugin2")
            } else this.pluginsToLoad.push(i)
        }
    };
    b.webcastData = function(e) {
        if (e) {
            s.prototype.webcastData.call(this, e);
            this.setData({
                name: "SMP.webcastData",
                data: e
            })
        }
    };
    b.dispatchEvent = function(e, t) {
        e && this.call("dispatch", {
            type: e,
            data: t
        }, !0)
    };
    b.show = function(e) {
        this.wrapper[0].firstChild.style.width = "100%";
        this._settings.tryPlayAfterInHtml && e && this.play(!0)
    };
    b.hide = function() {
        this.wrapper[0].firstChild.style.width = "0%"
    };
    b.getHandleJSAPI = function() {
        return f(this)
    };
    b.initialised = function() {
        var e = this,
            i = e._settings;
        e.before();
        e.updateMediasetCallback && e.updateMediasetCallback();
        for (var n = 0; e.pluginsToLoad.length > n; n++) {
            var a = e.pluginsToLoad[n];
            a.waitOnPluginLoad = i.waitOnPluginLoad;
            e.setData(a.data);
            this.loadPluginWithCheck(a.url, a, "loadPlugin2")
        }(i.playlistObject || i.playlist) && e.loadPlaylist(!0);
        e.started(t.get())
    };
    return c
});
define("mp/classes/players/apps/wmp", ["mp/modules/device", "mp/classes/players/app"], function(e, t) {
    function i() {
        this.daxname = "SMPWMP";
        this.classStr = "wmpCTAcss";
        this._guidance = "wmpGuidance";
        this.compatibility = a;
        this.filterPlaylist = !0;
        return this
    }

    function n() {
        var e = this._settings;
        if (this.playlist)
            if (e.requestWMP2) window.location = "#playIt";
            else {
                window.external.notify("echo:" + e.countername);
                window.external.notify(JSON.stringify(this.playlist))
            }
    }

    function a(t) {
        return !t.dashPlaybackOnly && t.requestWMP && e.get().os.winphone && (t.requestWMP2 || window.external && "notify" in window.external)
    }
    i.prototype = new t("wmp", !0);
    i.prototype.play = n;
    i.prototype.hasPlaylist = function() {
        return !!this._settings.playlistObject
    };
    return i
});
define("mp/classes/players/apps/smp-phantom", ["mp/classes/players/app", "mp/modules/device"], function(e, t) {
    function i(e) {
        return e.phantomPlayer === !0 || e.backgroundPlayer && !t.get().useOpaque
    }

    function n() {
        this.compatibility = i;
        this.daxname = "SMPPHANTOM";
        this._name = "smp-phantom";
        return this
    }
    n.prototype = new e("smp-phantom");
    n.prototype.play = function() {};
    return n
});
define("mp/modules/players", ["mp/classes/players/flash/smp-flash", "mp/classes/players/flash/smp-flash-noembed", "mp/classes/players/html5/smp-html5", "mp/classes/players/apps/smp-air", "mp/classes/players/apps/wmp", "mp/classes/players/apps/smp-phantom"], function(e, t, i, n, a, r) {
    return [r, t, e, i, n, a]
});
define("mp/classes/players/html5/smp-html-background", ["jquery-1.9", "mp/modules/device", "mp/modules/html5", "mp/classes/settingsbuilder"], function(e, t, i, n) {
    function a() {
        this._name = "smp-html-background";
        this.type = "html";
        this.includePoster = !1;
        this.backgroundPlayer = null;
        return this
    }
    var r = a.prototype;
    r.compatibility = function(e) {
        return e.backgroundPlayer && i.media.video && !e.disableHtml ? !0 : !1
    };
    r.updateMediaset = function() {
        this.backgroundPlayer && this.backgroundPlayer.determinedConnectionCallback()
    };
    r.embed = function(e, t) {
        var i = this;
        n.mediationUrls(e, e, !0);
        i._settings = e;
        i._container = e.container;
        i._container.empty();
        var a = e.html5Debug ? "//emp.bbci.co.uk/emp/htmlbackground/1.0.3/backgroundplayer.js" : "//emp.bbci.co.uk/emp/htmlbackground/1.0.3/backgroundplayer.min.js";
        require([a], function(n) {
            i.backgroundPlayer = new n(i._container[0], e, i);
            t(i, {
                markers: !1,
                queuedPlaylist: !1,
                inPage: !0,
                chromecast: !1,
                overlay: !1
            })
        })
    };
    r.loadPlaylist = function() {
        this.backgroundPlayer && this.backgroundPlayer.loadPlaylist(this._settings)
    };
    r.play = function() {
        this.backgroundPlayer && this.backgroundPlayer.play()
    };
    r.pause = function() {
        this.backgroundPlayer && this.backgroundPlayer.pause()
    };
    r.muted = function(e) {
        return this.backgroundPlayer ? this.backgroundPlayer.muted(e) : void 0
    };
    r.volume = function(e) {
        return this.backgroundPlayer ? this.backgroundPlayer.volume(e) : void 0
    };
    r.trigger = function(t) {
        if (t.type) {
            var i = t.type;
            delete t.type;
            var n = e.Event(i, t);
            this._container.trigger(n)
        }
    };
    return a
});
define("mp/classes/decisionengine", ["mp/modules/device", "mp/modules/players", "mp/classes/players/html5/smp-html-background", "mp/classes/players/html5/smp-html5"], function(e, t, i, n) {
    function a(e) {
        this._settings = e;
        return this
    }
    a.prototype = {
        decide: function() {
            var a = this,
                r = e.get(),
                o = this._settings,
                s = "";
            try {
                s = document.cookie + ""
            } catch (l) {}
            if (o.backgroundPlayer) {
                a.player = new i;
                a.name = a.player._name;
                return a.player
            }
            if (o.threeSixty) {
                if (r.support360 || /force360Support=true/i.test(s)) {
                    a.player = new n;
                    a.name = a.player._name
                }
                return a.player
            }
            var d = s.match(/bbcBumpForcePlayer=(.*?)(?:;|$)/),
                c = d && d.length ? d[1] : "",
                p = /ckps_smpPreferFlash=true/i.test(s);
            a.name = null;
            o.attemptHlsPlaybackOnAndroid && r.allowHlsVod();
            if (!o.showUnsupportedMessage || "" !== c) {
                var u = [];
                if (o.preferHtmlControls || o.preferHtmlOnDesktop || o.preferHtmlOnMobile && r.isMobileOrTablet || (o.smpj2OptIn || r.preferHtmlPlayer) && !p) {
                    var m = [];
                    u.push(t[0]);
                    for (var f = 1; t.length > f; f++) "html" == t[f]().type ? u.push(t[f]) : m.push(t[f]);
                    u = u.concat(m)
                } else u = t.concat();
                for (f = 0; u.length > f; f++) {
                    var h = new u[f];
                    if (c == h._name || "" === c && h.compatibility(o)) {
                        "" !== c && (o.playerWasForced = !0);
                        a.player = h;
                        a.name = h._name;
                        break
                    }
                }
                return a.player
            }
        }
    };
    return a
});
define("mp/libs/securehash", ["mp/libs/securehash"], function() {
    function e(e) {
        return a(r(n(e), 8 * e.length))
    }

    function t(e) {
        for (var t, i = "0123456789abcdef", n = "", a = 0; e.length > a; a++) {
            t = e.charCodeAt(a);
            n += i.charAt(t >>> 4 & 15) + i.charAt(15 & t)
        }
        return n
    }

    function i(e) {
        for (var t, i, n = "", a = -1; ++a < e.length;) {
            t = e.charCodeAt(a);
            i = e.length > a + 1 ? e.charCodeAt(a + 1) : 0;
            if (t >= 55296 && 56319 >= t && i >= 56320 && 57343 >= i) {
                t = 65536 + ((1023 & t) << 10) + (1023 & i);
                a++
            }
            127 >= t ? n += String.fromCharCode(t) : 2047 >= t ? n += String.fromCharCode(192 | t >>> 6 & 31, 128 | 63 & t) : 65535 >= t ? n += String.fromCharCode(224 | t >>> 12 & 15, 128 | t >>> 6 & 63, 128 | 63 & t) : 2097151 >= t && (n += String.fromCharCode(240 | t >>> 18 & 7, 128 | t >>> 12 & 63, 128 | t >>> 6 & 63, 128 | 63 & t))
        }
        return n
    }

    function n(e) {
        for (var t = Array(e.length >> 2), i = 0; t.length > i; i++) t[i] = 0;
        for (i = 0; 8 * e.length > i; i += 8) t[i >> 5] |= (255 & e.charCodeAt(i / 8)) << 24 - i % 32;
        return t
    }

    function a(e) {
        for (var t = "", i = 0; 32 * e.length > i; i += 8) t += String.fromCharCode(e[i >> 5] >>> 24 - i % 32 & 255);
        return t
    }

    function r(e, t) {
        e[t >> 5] |= 128 << 24 - t % 32;
        e[(t + 64 >> 9 << 4) + 15] = t;
        for (var i = Array(80), n = 1732584193, a = -271733879, r = -1732584194, c = 271733878, p = -1009589776, u = 0; e.length > u; u += 16) {
            for (var m = n, f = a, h = r, g = c, y = p, b = 0; 80 > b; b++) {
                i[b] = 16 > b ? e[u + b] : d(i[b - 3] ^ i[b - 8] ^ i[b - 14] ^ i[b - 16], 1);
                var v = l(l(d(n, 5), o(b, a, r, c)), l(l(p, i[b]), s(b)));
                p = c;
                c = r;
                r = d(a, 30);
                a = n;
                n = v
            }
            n = l(n, m);
            a = l(a, f);
            r = l(r, h);
            c = l(c, g);
            p = l(p, y)
        }
        return Array(n, a, r, c, p)
    }

    function o(e, t, i, n) {
        return 20 > e ? t & i | ~t & n : 40 > e ? t ^ i ^ n : 60 > e ? t & i | t & n | i & n : t ^ i ^ n
    }

    function s(e) {
        return 20 > e ? 1518500249 : 40 > e ? 1859775393 : 60 > e ? -1894007588 : -899497514
    }

    function l(e, t) {
        var i = (65535 & e) + (65535 & t),
            n = (e >> 16) + (t >> 16) + (i >> 16);
        return n << 16 | 65535 & i
    }

    function d(e, t) {
        return e << t | e >>> 32 - t
    }
    return {
        generateHash: function(n) {
            return t(e(i(n)))
        }
    }
});
define("mp/classes/parentalguidance", ["mp/libs/securehash"], function(e) {
    function t(e) {
        e.preventDefault ? e.preventDefault() : e.returnValue = !1
    }

    function i(e) {
        if (e.addEventListener) {
            Y.push(e);
            e.addEventListener("keydown", a)
        }
    }

    function n() {
        for (var e = 0; Y.length > e; e++) Y[e].removeEventListener("keydown", a);
        Y = []
    }

    function a(e) {
        32 == e.keyCode && e.preventDefault()
    }

    function r() {
        return !!q
    }

    function o() {
        G = "true" == d(Q, "pgAgeConfirm");
        q = d(Q, "pgPIN");
        V = "true" == d(Q, "pgUnlocked")
    }

    function s(e, t) {
        F = [];
        G = !1;
        this.closedCallbacks = [];
        this.updateCallbacks = [];
        this.openedCallbacks = [];
        $ = e || {
            noPlayerAction: function() {}
        };
        this.guidance = {};
        this.isOver16 = t.over16;
        this.isUnder16 = t.under16;
        t.over16 && t.under16 && (this.isOver16 = !1);
        K = t;
        this.usingReith = !1;
        this.reithEnabled = !K.ui.disableReithFonts;
        o();
        this._isLocked = r() && !V;
        U = window.embeddedMedia.language;
        this.updateGuidanceState();
        return this
    }

    function l(e, t) {
        var i = document.getElementById(e),
            n = function() {
                i.style.transition = "0.3s";
                t ? i.style.backgroundColor = K.ui.guidance.pgColour : i.style.color = K.ui.guidance.pgColour
            },
            a = function() {
                i.style.transition = "0.3s";
                t ? i.style.backgroundColor = K.ui.guidance.pgBackgroundColour : i.style.color = "#ffffff"
            };
        i.onmouseover = i.onfocus = n;
        i.onmouseout = i.onblur = a
    }

    function d(e, t) {
        try {
            var i = document.cookie
        } catch (n) {
            i = ""
        }
        var a = i.indexOf(e + t + "=");
        if (a == -1) return null;
        a = i.indexOf("=", a) + 1;
        var r = i.indexOf(";", a);
        r == -1 && (r = i.length);
        return unescape(i.substring(a, r))
    }

    function c(e, t, i, n) {
        var a = new Date;
        a.setTime(a.getTime() + 15552e6 * (n ? -1 : 1));
        if (!n) {
            a.setDate(15);
            a.setHours(12);
            a.setMinutes(0);
            a.setSeconds(0)
        }
        var r = "; expires=" + a.toGMTString(),
            o = location.hostname;
        o.indexOf(".bbc.co.uk") !== -1 && (o = ".bbc.co.uk");
        o.indexOf(".bbc.com") !== -1 && (o = ".bbc.com");
        try {
            document.cookie = e + t + "=" + escape(i) + r + "; Domain=" + o + "; Path=/"
        } catch (s) {}
    }

    function p(e) {
        for (; e.lastChild;) e.removeChild(e.lastChild)
    }

    function u(e, i) {
        F.push(e);
        e.setAttribute("tabindex", "0");
        e.onkeydown = function(i) {
            i = i || window.event;
            var n = i.keyCode || i.which;
            if (9 == n || 13 == n) {
                t(i);
                if (9 == n) {
                    var a = F.length - 1;
                    H = i.shiftKey ? 0 === H ? a : H - 1 : H === a ? 0 : H + 1;
                    setTimeout(function() {
                        F[H].focus()
                    }, 200)
                } else setTimeout(function() {
                    z = !0;
                    e.click()
                }, 200)
            }
        };
        if (i) {
            H = F.length - 1;
            e.focus()
        }
    }

    function m() {
        H = 0;
        F = [];
        u(R)
    }

    function f(e, t, i) {
        t && i && i.isUnder16 && (G = !1);
        var n = "";
        if (G) {
            e.style.backgroundPosition = "center";
            n = U.t("pgAriaAgeConfirmCheckBox", j)
        } else {
            e.style.backgroundPosition = "-30px";
            n = U.t("pgAriaAgeConfirmCheckBoxUnchecked", j)
        }
        e.setAttribute("aria-label", n);
        e.textContent = e.innerText = n
    }

    function h(e, t, i) {
        var n = document.getElementById("pgErrorMessage");
        if (n) p(n);
        else {
            n = document.createElement("div");
            n.id = "pgErrorMessage";
            var a = n.style;
            a.width = L.style.width;
            a.backgroundColor = K.ui.guidance.pgSeparatorColour;
            a.marginTop = "15px";
            a.marginBottom = "5px";
            a.left = "-26px";
            a.position = "relative"
        }
        i ? e.insertBefore(n, e.firstChild) : e.appendChild(n);
        var r = document.createElement("div"),
            o = r.style;
        o.fontSize = "14px";
        o.position = "relative";
        o.width = "100%";
        o.color = "#ffffff";
        o.fontSize = "11px";
        o.textAlign = "center";
        o.paddingTop = o.paddingBottom = "10px";
        r.innerHTML = '<span style="display:inline-block;  background-image: url(//emp.bbci.co.uk/emp/assets/2.0.26/alert-color.png); background-repeat: no-repeat; background-size: 100% 100%; margin-right:5px; width:15px; height:13px;"></span>' + t;
        n.appendChild(r)
    }

    function g(e) {
        if (A) return !1;
        A = document.createElement("div");
        A.setAttribute("tabindex", "0");
        A.id = "parentalGuidanceBackground";
        A.className = "smpPG";
        var n = A.style;
        n.width = n.height = "5000px";
        n.left = n.top = "-500px";
        n.zIndex = "2147483600";
        n.backgroundColor = "#333333";
        n.filter = "alpha(opacity=85)";
        n.opacity = .85;
        L = document.createElement("div");
        L.id = "guidancePopup";
        L.setAttribute("role", "alertdialog");
        L.setAttribute("aria-labelledby", "pgHeaderTitle");
        L.className = "smpPG";
        var a = L.style;
        a.position = n.position = "fixed";
        if (400 > window.innerWidth) {
            a.width = window.innerWidth - 20 + "px";
            a.left = "10px"
        } else {
            a.width = "390px";
            a.left = (window.innerWidth - 390) / 2 + "px"
        }
        if (window.innerHeight > 350) {
            a.top = "50%";
            a.marginTop = "-175px"
        } else {
            a.top = "5px";
            a.marginTop = "0px"
        }
        a.lineHeight = "normal";
        a.verticalAlign = "middle";
        a.color = "white";
        a.zIndex = "2147483600";
        a.backgroundColor = K.ui.guidance.pgBackgroundColour;
        a.textAlign = "left";
        if (document.documentElement.className.indexOf("b-reith-sans-font") >= 0 && e.reithEnabled) {
            L.className += " font-family-sans";
            e.usingReith = !0
        } else a.fontFamily = "helvetica, Arial, sans-serif";
        document.body.appendChild(A);
        document.body.appendChild(L);
        L.onkeydown = function(t) {
            t = t || window.event;
            var i = t.keyCode || t.which;
            27 === i && e.close(!1)
        };
        var r = document.createElement("div");
        r.id = "guidanceContainer";
        r.style.paddingRight = r.style.paddingLeft = "26px";
        r.style.textAlign = "center";
        L.appendChild(r);
        var o = document.createElement("div");
        o.id = "pgHeaderTitle";
        o.style.height = "42px";
        o.style.position = "relative";
        o.style.marginTop = "35px";
        r.appendChild(o);
        var s = document.createElement("span");
        s.innerHTML = U.t("pgHeader", j);
        s.id = "pgHeader";
        s.style.fontSize = "24px";
        s.style.color = K.ui.guidance.pgColour;
        o.appendChild(s);
        N = document.createElement("div");
        N.id = "guidanceBody";
        N.style.position = "relative";
        N.style.width = "100%";
        r.appendChild(N);
        B = document.createElement("div");
        B.id = "guidanceFooter";
        var l = B.style;
        l.width = "100%";
        l.height = "42px";
        l.bottom = "0px";
        l.display = "table";
        l.textAlign = "center";
        L.appendChild(B);
        R = document.createElement("a");
        R.setAttribute("aria-label", U.t("pgClose", j));
        R.id = "pgExit";
        var d = R.style;
        R.title = U.t("pgClose", j);
        d.position = "absolute";
        d.right = d.top = "12px";
        d.cursor = "pointer";
        d.width = d.height = "18px";
        d.backgroundImage = "url(//emp.bbci.co.uk/emp/assets/2.0.26/GEL_Remove_icon.png)";
        d.backgroundRepeat = "no-repeat";
        L.appendChild(R);
        i(R);
        var c = !1;
        setTimeout(function() {
            c = !0
        }, 500);
        R.onclick = function(i) {
            if (c) {
                i = i || window.event;
                t(i);
                C(!1, this.id);
                e.close(!1)
            }
        };
        return !0
    }

    function y(e) {
        var t = document.createElement("div"),
            i = t.style;
        i.marginTop = "-1px";
        i.position = "absolute";
        i.width = "100%";
        i.height = "1px";
        i.backgroundColor = K.ui.guidance.pgSeparatorColour;
        e.appendChild(t)
    }

    function b(e, t) {
        function n() {
            if (s) {
                C(!1, a.id);
                d()
            }
        }
        var a = document.createElement("a");
        a.id = t.id;
        a.textContent = a.innerText = t.text;
        a.setAttribute("aria-label", t.text + " button");
        var r = a.style;
        r.cursor = "pointer";
        try {
            r.display = "table"
        } catch (o) {
            r.display = "block"
        }
        r.verticalAlign = "middle";
        r.width = "100%";
        r.lineHeight = "3.5";
        r.fontSize = "14px";
        r.color = "#ffffff";
        r.backgroundColor = K.ui.guidance.pgBackgroundColour;
        B.appendChild(a);
        l(t.id, !0);
        i(a);
        var s = !1;
        setTimeout(function() {
            s = !0
        }, 500);
        var d = t.clickFunction;
        a.onclick = n;
        u(a, t.focus);
        return a
    }

    function v(e, t, i) {
        p(B);
        y(B);
        var n = b(e, t);
        if (i) {
            n.style.borderBottom = "1px solid " + K.ui.guidance.pgSeparatorColour;
            b(e, i)
        }
    }

    function w(e, t) {
        p(N);
        m();
        var i = document.createElement("div");
        i.id = "guidanceMessage";
        var n = i.style;
        n.marginTop = "15px";
        n.marginBottom = "5px";
        n.width = "100%";
        n.position = "relative";
        n.fontSize = "13px";
        N.appendChild(i);
        P("newAgeConfirmationTitle");
        var a = document.createElement("div");
        a.id = "guidanceG";
        var r = a.style;
        r.display = "inline-block";
        r.margin = "auto";
        r.borderRadius = "50%";
        r.width = r.height = "15px";
        r.backgroundColor = "red";
        r.position = "relative";
        r.top = "-2px";
        r.fontSize = "12px";
        e.usingReith && (r.lineHeight = "1px");
        i.appendChild(a);
        var o = document.createElement("span");
        o.innerHTML = "G";
        var s = o.style;
        s.lineHeight = "normal";
        s.position = "relative";
        s.left = "-0.5px";
        s.top = "1px";
        s.color = "#ffffff";
        s.fontFamily = "Arial, Helvetica, freesans, sans-serif";
        e.usingReith && (s.left = "0");
        a.appendChild(o);
        var l = document.createElement("span");
        l.id = "guidanceText";
        l.textContent = l.innerText = t;
        if (e.isUnder16) {
            l.appendChild(document.createElement("br"));
            l.appendChild(document.createElement("br"));
            var d = document.createElement("span");
            d.textContent = d.innerText = U.t("newUnder16WithPermission", j);
            l.appendChild(d)
        }
        s = l.style;
        s.left = "0px";
        s.top = "16px";
        s.marginLeft = "5px";
        s.lineHeight = "16px";
        s.color = "#b2b7c4";
        i.appendChild(l);
        var c = document.createElement("div");
        c.id = "ageConfirm";
        var g = c.style;
        g.width = "100%";
        g.height = "57px";
        g.position = "relative";
        g.fontSize = "14px";
        g.color = "#ffffff";
        g.display = "-ms-inline-flexbox";
        g.justifyContent = "center";
        N.appendChild(c);
        var y = document.createElement("button");
        y.id = "ageConfirmCheck";
        var b = y.style;
        b.background = "url(//emp.bbci.co.uk/emp/assets/2.0.26/tick.png) no-repeat center";
        b.backgroundPosition = "-30px";
        b.position = "absolute";
        b.top = "16px";
        b.height = b.width = "25px";
        b.verticalAlign = "middle";
        b.cursor = "pointer";
        b.backgroundColor = "#ffffff";
        b.borderWidth = "0";
        b.textIndent = "-9999px";
        b.whiteSpace = "nowrap";
        b.overflow = "hidden";
        c.appendChild(y);
        u(y, !0);
        f(y, !0, e);
        var w = document.createElement("span");
        w.innerHTML = e.isUnder16 ? U.t("newPgAgeConfirmationUnder16", j) : U.t("pgAgeConfirmation", j);
        w.style.position = "relative";
        w.style.top = "20px";
        w.style.marginLeft = "35px";
        c.appendChild(w);
        var x = !1;
        setTimeout(function() {
            x = !0
        }, 500);
        y.onclick = function() {
            if (x) {
                G = !G;
                f(y)
            }
        };
        var C = function() {
                if (e.isUnder16 && G) {
                    e.storeAgeConfirmation();
                    e.setUnder16Permission(!0);
                    e.updateGuidanceState();
                    e.close(!0)
                } else if (G) k(e);
                else {
                    var t = e.isUnder16 ? U.t("pgUnder16PermissionValidationError", j) : U.t("pgPasswordValidationError", j);
                    h(i, t, !1)
                }
            },
            _ = e.isUnder16 ? U.t("newPgPlay", j) : U.t("pgContinue", j);
        v(e, {
            id: "pgAgeContinue",
            text: _,
            clickFunction: C
        })
    }

    function P(e) {
        var t = document.getElementById("pgHeader");
        t.textContent = t.innerText = U.t(e, j)
    }

    function k(e) {
        p(N);
        m();
        var t = document.createElement("div");
        t.setAttribute("role", "alertdialog");
        t.setAttribute("aria-labelledby", "pgInfoHeader");
        t.setAttribute("aria-describedby", "pgInfo");
        t.style.marginBottom = "24px";
        N.appendChild(t);
        P("newPgTurnOnParentalGuidance");
        if (W) var n = "pgInfo",
            a = "pgUnlock";
        else {
            var r = e._intent;
            if ("download" == r) {
                n = "pgInfoPlusDownload";
                a = "pgDownload"
            } else if ("play" == r) {
                n = "pgInfoPlusPlay";
                a = "newToolTipPlay"
            } else {
                n = "pgInfo";
                a = r
            }
        }
        var o = document.createElement("div");
        o.id = "infoLinkContainer";
        var s = document.createElement("div");
        s.style.color = "#b2b7c4";
        var d = U.t("notSuitableForChildMessage", j) + '</br> </br>  <a id="pgLink" target="_blank" style="color:#ffffff; text-decoration:none; font-size:0.9em;" href="//www.bbc.co.uk/iplayer/guidance">' + ' <div style="display:inline-block; margin-right: 5px; color:black; font-weight:bold; width:13px; height:13px; background-color:white; border-radius:50px;font-family: Arial, Helvetica, freesans, sans-serif;">i</div>' + U.t("findOutMore", j) + "</a> ",
            c = document.createElement("div");
        c.id = "pgInfo";
        c.style.fontSize = "13px";
        c.style.color = "#868686";
        c.style.marginTop = "35px";
        t.appendChild(c);
        c.appendChild(o);
        o.style.margin = " 0 auto";
        o.appendChild(s);
        s.innerHTML = d;
        var f = document.getElementById("pgLink");
        f.setAttribute("aria-label", U.t("findOutMore", j));
        f.style.outline = "none";
        i(f);
        s.style.display = "inline-block";
        o.style.textAlign = "center";
        var h = c.getElementsByTagName("p");
        if (h)
            for (var g = 0; h.length > g; g++) {
                h[g].style.color = "#868686";
                h[g].style.fontSize = "13px"
            }
        var y = document.getElementById("pgLink"),
            b = !1;
        setTimeout(function() {
            b = !0
        }, 500);
        y.onclick = function() {
            return b
        };
        u(y, !0);
        var w = function() {
                if (b) {
                    e.storeAgeConfirmation();
                    T(e)
                }
            },
            k = function() {
                if (b) {
                    e.storeAgeConfirmation();
                    e.close(!0)
                }
            },
            x = {
                id: "pgTurnOn",
                text: U.t("newPgTurnOn", j),
                clickFunction: w
            },
            C = {
                id: "toolTipPlay",
                text: U.t(a, j),
                clickFunction: k
            };
        v(e, x, W ? null : C);
        l("pgLink")
    }

    function x(e) {
        var t = document.createElement("div");
        t.id = "pinEntry";
        t.style.width = "100%";
        t.style.height = "40px";
        t.style.marginBottom = "20px";
        e.appendChild(t);
        var i = document.createElement("input");
        i.id = "pinEntryInputBox";
        var n = i.style;
        i.setAttribute("maxlength", 4);
        n.letterSpacing = "5px";
        n.display = "block";
        n.margin = "0 auto";
        n.height = "100%";
        n.width = "60%";
        n.padding = "0px";
        n.resize = "none";
        n.color = "#868686";
        n.fontSize = "30px";
        n.textAlign = "center";
        i.setAttribute("type", "password");
        i.pattern = "[0-9]*";
        t.appendChild(i);
        return i
    }

    function C(e, t) {
        $.noPlayerAction(z || e ? "key_press" : "click", t, null, K);
        z = !1
    }

    function _(e, t) {
        var i = !1,
            n = function(n) {
                n = n || window.event;
                var a = n.keyCode || n.which;
                if (13 === a && i) {
                    C(!0, e.id);
                    setTimeout(t, 300)
                }
            };
        setTimeout(function() {
            i = !0
        }, 400);
        e.addEventListener ? e.addEventListener("keyup", n) : e.onkeyup = n
    }

    function T(e) {
        p(N);
        m();
        P("newPgTurnOnParentalGuidancePINsection");
        var t = document.createElement("div");
        t.id = "activatePIN";
        t.style.marginTop = "35px";
        t.style.fontSize = "14px";
        t.style.color = "#ffffff";
        N.appendChild(t);
        var i = document.createElement("span");
        i.innerHTML = U.t("newPgEnterPIN", j);
        i.style.fontSize = "14px";
        i.style.color = "#ffffff";
        t.appendChild(i);
        var n = document.createElement("div");
        n.innerHTML = '<span style="color:#b2b7c4;">' + U.t("newPgActivateInfo", j) + "</span>";
        n.id = "activatePINInfo";
        n.style.marginTop = "10px";
        n.style.marginBottom = "24px";
        n.style.fontSize = "14px";
        n.style.color = "#868686";
        N.appendChild(n);
        var a = x(N);
        a.setAttribute("aria-label", U.t("pgAriaPINEntryDescription", j) + "." + U.t("pgAriaPINPrompt", j));
        u(a, !0);
        var r = function() {
                if (/^\d{4}$/.test(a.value)) {
                    e.setPIN(a.value);
                    e.setLocked(W);
                    e.close(!W)
                } else {
                    a.value = "";
                    h(n, U.t("newPgPINvalidationError", j), !1);
                    a.focus()
                }
            },
            o = M(e._intent, "pgActivate");
        _(a, r);
        v(e, {
            id: "pgActivate",
            text: U.t(o, j),
            clickFunction: r
        })
    }

    function I(e, t) {
        var n = document.createElement("div");
        n.style.marginBottom = "20px";
        n.style.width = "100%";
        n.style.height = "15px";
        e.appendChild(n);
        var a = document.createElement("a");
        a.setAttribute("target", "_blank");
        a.setAttribute("href", "//www.bbc.co.uk/iplayer/guidance");
        a.id = "manageLock";
        a.innerHTML = t;
        a.style.color = "#ffffff";
        a.style.textDecoration = "none";
        a.style.width = "100%";
        a.style.fontSize = "12px";
        a.style.bottom = "0px";
        a.style.textAlign = "center";
        n.appendChild(a);
        l("manageLock");
        i(a);
        return a
    }

    function S(e) {
        p(N);
        m();
        P("newPgTurnOnParentalGuidanceInsertPIN");
        var t = document.createElement("div"),
            i = document.createElement("div"),
            n = document.createElement("span"),
            a = document.createElement("div");
        a.id = "needPINinfo";
        t.id = "enterPIN";
        n.innerHTML = U.t("newPgEnterPINprompt", j);
        t.style.marginTop = t.style.paddingBottom = "16px";
        t.style.width = "100%";
        t.style.position = "relative";
        t.style.fontSize = n.style.fontSize = "14px";
        n.style.color = "#ffffff";
        t.style.marginTop = 330 > L.offsetWidth ? "25px" : "5px";
        N.appendChild(t);
        t.appendChild(i);
        i.appendChild(n);
        t.appendChild(a);
        a.innerHTML = U.t("newPgEnterPINinfo", j);
        a.style.color = "rgb(134, 134, 134)";
        a.style.marginTop = "15px";
        var r = x(N);
        r.setAttribute("aria-label", U.t("pgAriaPINEntryDescription", j) + "." + U.t("newPgEnterPINprompt", j));
        u(r, !0);
        var o = I(N, U.t("newPgManageYourPIN", j));
        u(o);
        o.onclick = function() {
            return s
        };
        var s = !1;
        setTimeout(function() {
            s = !0
        }, 500);
        var l = function() {
            if (s)
                if (e.verifyPIN(r.value)) {
                    W && c(Q, "pgUnlocked", "true");
                    e.isUnder16 && e.setUnder16Permission(!0);
                    e.setLocked(!1);
                    e.close(!0)
                } else {
                    r.value = "";
                    h(a, U.t("newPgIncorrectPIN", j), !1);
                    r.focus()
                }
        };
        _(r, l);
        var d = M(e._intent, "pgUnlock");
        v(e, {
            id: "pgTurnOff",
            text: U.t(d, j),
            clickFunction: l
        })
    }

    function E() {
        Z++;
        clearTimeout(J);
        J = setTimeout(O, 100);
        setTimeout(D, 300)
    }

    function M(e, t) {
        return W ? t : "download" == e ? "pgDownload" : "play" == e ? "toolTipPlay" : e
    }

    function O() {
        if (A) {
            var e = A.style;
            e.left = e.top = "-500px";
            e.height = e.width = "5000px"
        }
        if (L) {
            var t = Math.floor(window.innerWidth / 2 - L.offsetWidth / 2);
            (0 > t || Z > 0) && (t = 0);
            window.innerWidth >= 400 && (L.style.left = t + "px");
            var i = window.innerHeight - L.offsetHeight;
            if (window.innerHeight >= L.offsetHeight) {
                var n = Math.floor(i / 2);
                (Z > 0 || 5 > n) && (n = 5)
            } else n = 2;
            L.style.marginTop = "0px";
            L.style.top = n + "px"
        }
    }

    function D() {
        var e = document.getElementById("pgHeader"),
            t = document.getElementById("pgInfo"),
            i = document.getElementById("pgHeaderTitle"),
            n = document.getElementById("enterPIN"),
            a = document.getElementById("pinEntry"),
            r = document.getElementById("pgErrorMessage"),
            o = document.getElementById("needPINinfo"),
            s = document.getElementById("activatePIN"),
            l = document.getElementById("activatePINInfo"),
            d = document.getElementById("pinEntryInputBox");
        if (L.offsetHeight > window.innerHeight) {
            t && (t.style.marginTop = "10px");
            L.style.width = window.innerWidth - 20 + "px";
            e.style.fontSize = "22px";
            L.style.left = "10px";
            if (i) {
                i.style.marginTop = "10px";
                i.style.height = "35px"
            }
            s && (s.style.marginTop = "0");
            if (n) {
                n.style.marginTop = 330 > L.offsetWidth ? "25px" : "5px";
                n.style.marginBottom = "5px";
                n.style.paddingBottom = "0"
            }
            a && (a.style.marginBottom = "10px");
            d && (d.style.width = "30%");
            if (r) {
                r.style.marginTop = "5px";
                r.style.width = window.innerWidth - 20 + "px";
                r.style.marginLeft = "0px";
                r.style.left = "-26px";
                l && (l.style.marginBottom = "5px")
            }
            if (o) {
                o.style.marginTop = "5px";
                o.style.marginBottom = "5px"
            }
        } else {
            L.style.left = (window.innerWidth - L.offsetWidth) / 2 + "px";
            if (i) {
                i.style.marginTop = "35px";
                i.style.height = "42px"
            }
            s && (s.style.marginTop = "35px");
            a && (a.style.marginBottom = "15px");
            d && (d.style.width = "60%");
            if (420 > window.innerWidth) {
                L.style.width = window.innerWidth - 20 + "px";
                L.style.left = "10px";
                t && (t.style.marginTop = "35px");
                if (r) {
                    r.style.marginTop = "15px";
                    r.style.width = window.innerWidth - 20 + "px";
                    r.style.marginLeft = "0px";
                    r.style.left = "-26px";
                    l && (l.style.marginBottom = "24px")
                }
            }
            o && (o.style.marginTop = "15px");
            if (n) {
                n.style.marginTop = 330 > L.offsetWidth ? "25px" : "5px";
                n.style.paddingBottom = "16px"
            }
        }
    }
    var A, L, N, B, R, j, U, H, F, G, W, z, q, V, $, K, J, Q = "ckns_",
        Y = [],
        X = !1,
        Z = 0;
    s.prototype = {
        show: function(e, i, n, a) {
            var s = this;
            j = n;
            o();
            e || (e = {});
            W = e.lockClicked;
            s._intent = e.intent || "play";
            window.embeddedMedia.opened({
                type: "guidanceShown",
                intent: s._intent
            });
            if (a)
                for (var l = 0; s.openedCallbacks.length > l; l++) s.openedCallbacks[l]();
            var d = G && (!r() || !s._isLocked);
            s.isOver16 && (G = !0);
            if (!d || W || s.isUnder16) {
                if (g(s)) {
                    r() && !V && !this.guidance.under16permissionConfirmed && this._isLocked ? S(s) : W && d || s.isOver16 ? k(s) : w(s, e.guidance);
                    document.body.addEventListener && document.body.addEventListener("touchmove", t);
                    Z = 0;
                    if (window.addEventListener) {
                        window.addEventListener("resize", O);
                        window.addEventListener("orientationchange", E)
                    }
                }
            } else s.close(!0)
        },
        close: function(e, i) {
            var a = this;
            document.body.removeEventListener && document.body.removeEventListener("touchmove", t);
            if (window.removeEventListener) {
                window.removeEventListener("resize", O);
                window.removeEventListener("orientationchange", E)
            }
            n();
            if (A) {
                A.parentNode.removeChild(A);
                A = void 0
            }
            if (L) {
                L.parentNode.removeChild(L);
                L = void 0
            }
            if (!i) {
                var r = {
                    type: "guidanceClosed"
                };
                r.success = e;
                window.embeddedMedia.closed(r);
                for (var o = 0; a.closedCallbacks.length > o; o++) a.closedCallbacks[o](e)
            }
        },
        setPIN: function(t) {
            q = e.generateHash("smpembed" + t);
            c(Q, "pgPIN", q)
        },
        setLocked: function(e, t) {
            if (t) {
                c(Q, "pgUnlocked", e ? "" : "true");
                V = !e
            }
            this._isLocked = e;
            this.updateGuidanceState()
        },
        verify: function(e, t) {
            var i = this.verifyPIN(e.verifyPIN);
            if (i) {
                this.setLocked(!1);
                e.lockClicked && c(Q, "pgUnlocked", "true")
            }
            t(i)
        },
        verifyPIN: function(t) {
            return e.generateHash("smpembed" + t) === q
        },
        setAgeConfirmation: function(e) {
            G = e;
            this.storeAgeConfirmation()
        },
        storeAgeConfirmation: function() {
            if (!this.isUnder16) {
                c(Q, "pgAgeConfirm", G);
                this.setLocked(!0)
            }
        },
        setUnder16Permission: function(e) {
            X = e;
            this.updateGuidanceState()
        },
        updateGuidanceState: function() {
            var e = this.guidance;
            e.isGuidanceLocked = this._isLocked && r() && !V;
            e.hasGuidancePIN = r();
            e.guidanceSkipped = G && !r();
            e.guidancePINPassed = !this._isLocked && r();
            e.under16permissionConfirmed = X;
            e.canPlay = e.guidanceSkipped || e.hasGuidancePIN && e.guidancePINPassed || V;
            !this.isUnder16 || e.isGuidanceLocked && !e.guidancePINPassed || e.under16permissionConfirmed || (e.canPlay = !1);
            for (var t = 0; this.updateCallbacks.length > t; t++) this.updateCallbacks[t](e)
        }
    };
    return s
});
define("mp/classes/sonarreporter", [], function() {
    function e(e, t) {
        t = t || {};
        try {
            var i = [];
            if (e.media) {
                var n = e.media.getVersionId() || e.media.getServiceId() || e.media.getVpId() || e.media.getNonPipsContentId();
                n && i.push("PID=" + n)
            }
            if (e.player) {
                var a = e.player;
                t.includeVolume && i.push("VOL=" + (11 * a.volume()).toFixed(0));
                t.time !== !1 && i.push("TME=" + a.currentTime().toFixed(1));
                "number" == typeof t.before_seek_time && i.push("BST=" + t.before_seek_time.toFixed(1));
                if (t.playState !== !1) {
                    var r = "unknown",
                        o = a.player;
                    o._seeking ? r = "seeking" : o._ended && (r = "ended");
                    "unknown" == r && (o._paused ? r = "paused" : o._playing && (r = "playing"));
                    i.push("PST=" + r)
                }
            }
        } catch (s) {}
        t.metadata || (t.metadata = i.join("~").substr(0, 250));
        return t
    }

    function t() {
        var e = this;
        this.duration = 0;
        this.isLive = !1;
        this.hasPlayed = !1;
        this.hasSetMediaItem = !1;
        return e
    }

    function i(e, t) {
        for (var i in e) e.hasOwnProperty(i) && "undefined" != typeof e[i] && (t[i] = e[i]);
        return t
    }

    function n(e) {
        var t = "",
            i = !1;
        try {
            t = document.cookie + ""
        } catch (n) {}
        var a = t.indexOf("ckns_policy="),
            r = t.indexOf("ckns_explicit=1");
        if (a >= 0 && r >= 0) {
            var o = t.substr(a + 14, 1);
            "1" === o && (i = !0)
        }
        var s = !1,
            l = e.counterName + "";
        l.indexOf("iplayer.tv") >= 0 && (s = !0);
        return i && e.enableBarbReporting && s
    }

    function a(e, t) {
        t || (t = {
            connections: []
        });
        e.end();
        e.durationSet = !1;
        e.isLive = t.isLive;
        var i = e.isLive ? s.MediaConsumptionMode.LIVE : s.MediaConsumptionMode.ON_DEMAND,
            n = "audio" == t.type ? s.AvType.AUDIO : s.AvType.VIDEO,
            a = e.player.player._statsObject || {};
        a.overrideConsumptionMode && (i = a.overrideConsumptionMode);
        var o = e.media = new r(n, i),
            l = t.identifier,
            d = t.versionID,
            c = t.serviceID;
        a.overrideVersionPID && (d = a.overrideVersionPID);
        if (l) {
            if (!d && !c) {
                o.setVpId(l);
                e.isLive ? o.setServiceId(l) : o.setVersionId(l)
            }
        } else if (a.playlistURL) {
            var p = (a.playlistURL + "").replace(/\W+/gim, "-");
            o.setNonPipsContentId(p)
        }
        d && o.setVersionId(d);
        if (c) {
            o.setServiceId(c);
            e.playlistName || o.setPlaylist(c)
        }
        e.playlistName && o.setPlaylist(e.playlistName);
        e.title && o.setName(e.title);
        if (e.parentPID) {
            e.parentPIDType == s.PIPsType.EPISODE && o.setEpisodeId(e.parentPID);
            e.parentPIDType == s.PIPsType.CLIP && o.setClipId(e.parentPID)
        }
        if (e.episodePID) {
            o.setType(s.PIPsType.EPISODE);
            o.setEpisodeId(e.episodePID)
        }
        if (e.clipPID) {
            o.setType(s.PIPsType.CLIP);
            o.setClipId(e.clipPID)
        }
        e.brandPID && o.setBrand(e.brandPID);
        e.seriesPID && o.setSeries(e.seriesPID);
        var u = e.player.player.playlist;
        u && u.masterbrand && u.masterbrand.id && o.setProducerByMasterbrand(u.masterbrand.id);
        a.producer && o.setProducer(a.producer);
        a.wsPartnerId && o.setWsPartnerId(a.wsPartnerId);
        a.castingDeviceReferrer && o.setCastingDeviceReferrer(a.castingDeviceReferrer);
        u && u.hasAds && o.setAdsEnabled(!0);
        e.player._settings.embeddedOffsite && o.setIsEmbedded(!0);
        try {
            e.echo.setMedia(o);
            e.hasSetMediaItem = !0
        } catch (m) {
            e.hasSetMediaItem = !1
        }
    }
    var r, o, s, l, d;
    t.prototype = {
        initComplete: function(e) {
            var t = this;
            if (o && !t.echo) {
                var i = e._settings,
                    a = e.name().replace(/-/gm, ""),
                    r = i.appName && "" !== i.appName ? i.appName : a,
                    d = i.appType && "" !== i.appType ? i.appType : s.ApplicationType.WEB,
                    c = {},
                    p = e.player._statsObject || {};
                c[l.COMSCORE_ENABLED] = !1;
                c[l.BARB_ENABLED] = n(i);
                c[l.BARB_DEBUG] = !1;
                c[l.BARB_SITE_CODE] = i.liveEnvironment ? "bbcdotcom" : "bbcdotcomtest";
                var u = p.echoProfile || "public_service";
                c[l.REPORTING_PROFILE] = u;
                if ("public_service" !== (u + "").toLowerCase()) {
                    t.ssc = c[l.USE_SSC] = !0;
                    c[l.SSC_HOSTNAME] = ".com"
                }
                c[l.USE_ESS] = !0;
                i.liveEnvironment || (c[l.ESS_HOSTNAME] = "ess.test.api.bbci.co.uk");
                c[l.ATI_ENABLED] = i.enableAtiReporting;
                c[l.ATI_FORCE_HTTPS] = !0;
                p.deviceId && (c[l.ECHO_DEVICE_ID] = p.deviceId);
                p.destination && (c[l.DESTINATION] = p.destination);
                var m = function() {
                    i.appVersion && f.setAppVersion(i.appVersion);
                    t.player.player._version && t.echo.setPlayerVersion(t.player.player._version);
                    t.processNewSettings();
                    f.setPlayerName(a);
                    f.setPlayerDelegate({
                        getPosition: function() {
                            return t.currentTime()
                        },
                        getTimestamp: function() {
                            return t.currentTime(!0)
                        }
                    })
                };
                try {
                    var f = t.echo = new o(r, d, c, null, m)
                } catch (h) {}
            }
        },
        report: function(e) {
            var t = this;
            if (t.hasSetMediaItem) {
                var i = t.currentTime();
                t.echo["av" + e + "Event"](i)
            }
        },
        end: function() {
            this.hasPlayed && this.report("End")
        },
        noPlayerAction: function(e, t, n, a) {
            var r = this;
            if (r.echo) r.action(e, t, n);
            else {
                if (!r.nonPlayerEcho && o) {
                    a || (a = {});
                    var d = {};
                    d[l.REPORTING_PROFILE] = "public_service";
                    r.nonPlayerEcho = new o("iplayer", s.ApplicationType.WEB, d);
                    r.nonPlayerEcho.setCounterName(a.counterName || "smp.no-player.page")
                }
                r.nonPlayerEcho && r.nonPlayerEcho.userActionEvent(e, t, i(n, {}))
            }
        },
        action: function(e, t, n) {
            var a = this;
            a.echo && a.echo.userActionEvent(e, t, i(n, {}))
        },
        newPlayer: function(e, t) {
            var i = this;
            i.player = e;
            if (t || i.boundEvents) {
                i.boundEvents = !0;
                var n = t ? "bind" : "unbind";
                e[n]("durationchange info initialised mediaItemChanged playing playlistLoaded playlistLoading seeking SonarEndEvent SonarPauseEvent SonarPlayEvent SonarBufferEvent SonarErrorEvent SonarResumeEvent SonarSeekEvent SonarUserActionEvent volumechange uiinfo fullscreenEnter fullscreenExit picInPicStarted picInPicStopped statsConfigChanged", {
                    sonarReporter: i
                }, i.eventHandler);
                i.initComplete(e)
            }
        },
        init: function(e) {
            var t = this,
                i = {},
                n = "12.5.0";
            i["echo-" + n] = "//mybbc-analytics.files.bbci.co.uk/echo-client-js/echo-" + n + (e ? "" : ".min");
            if (require.config) {
                require.config({
                    paths: i
                });
                require(["echo-" + n], function(e) {
                    if (e) {
                        r = e.Media;
                        o = e.EchoClient;
                        s = e.Enums;
                        l = e.ConfigKeys;
                        d = e.Environment;
                        if (r && o && s && l && d) {
                            var i = t.player;
                            if (i) {
                                i._settings.liveEnvironment || e.Debug.enable();
                                t.initComplete(i)
                            }
                        }
                    }
                })
            }
        },
        eventHandler: function(t) {
            var i = t.data.sonarReporter;
            if (i.echo) switch (t.type) {
                case "durationchange":
                    if (i.media && !i.isLive && t.duration > 0 && !i.durationSet) {
                        i.echo.setMediaLength(1e3 * t.duration);
                        i.durationSet = !0
                    }
                    break;
                case "initialised":
                    i.player.player._version && i.echo.setPlayerVersion(i.player.player._version);
                    break;
                case "mediaItemChanged":
                    i.hasPlayed = !1;
                    a(i, t.mediaItem);
                    break;
                case "playing":
                    i.hasPlayed = !0;
                    break;
                case "playlistLoaded":
                    i.processNewSettings();
                    break;
                case "playlistLoading":
                    i.end();
                    break;
                case "seeking":
                    i.report("Seek");
                    break;
                case "SonarErrorEvent":
                    t.errorItem && "critical" == t.errorItem.severity && i.end();
                    break;
                case "SonarEndEvent":
                case "SonarPauseEvent":
                    i.report("Pause");
                    break;
                case "SonarPlayEvent":
                case "SonarResumeEvent":
                    i.report("Play");
                    break;
                case "SonarBufferEvent":
                    i.report("Buffer");
                    break;
                case "SonarSeekEvent":
                    i.player.paused() || i.report("Play");
                    break;
                case "SonarUserActionEvent":
                    i.action(t.actionType, t.controlId, e(i, t.labels));
                    break;
                case "volumechange":
                    i.echo.setPlayerVolume(t.muted ? 0 : t.volume);
                    break;
                case "uiinfo":
                    i.echo.setPlayerIsSubtitled(!!t.subtitles);
                    break;
                case "fullscreenEnter":
                    i.echo.setPlayerWindowState(s.WindowState.FULL);
                    break;
                case "fullscreenExit":
                case "picInPicStopped":
                    i.echo.setPlayerWindowState(s.WindowState.NORMAL);
                    break;
                case "picInPicStarted":
                    i.echo.setPlayerWindowState(s.WindowState.PICTUREINPICTURE);
                    break;
                case "statsConfigChanged":
                    t.counterName && (i.player._settings.counterName = t.counterName)
            }
        },
        volume: function(e) {
            var t = this;
            e >= 0 && 1 > e && t.echo.setPlayerVolume(Math.floor(100 * e))
        },
        processNewSettings: function() {
            var e = this,
                t = e.player._settings,
                i = e.player.player._statsObject || {},
                n = e.player.player.playlist;
            e.echo.setCounterName(t.counterName);
            n && n.masterbrand && n.masterbrand.id && e.echo.setProducerByMasterbrand(n.masterbrand.id);
            i.producer && e.echo.setProducer(i.producer);
            e.parentPID = i.parentPID;
            e.parentPIDType = s.PIPsType.EPISODE;
            e.episodePID = i.episodePID;
            e.clipPID = i.clipPID;
            e.brandPID = i.brandPID;
            e.seriesPID = i.seriesPID;
            e.playlistName = i.playlistName;
            n && n.title && (e.title = n.title.substr(0, 60));
            (i.parentPIDType + "").indexOf("clip") != -1 && (e.parentPIDType = s.PIPsType.CLIP)
        },
        currentTime: function(e) {
            var t = this,
                i = Math.round(1e3 * t.player.currentTime());
            return e ? 1e3 * 60 * 60 * 24 * 365 > i ? 0 : i : t.isLive ? 0 : i
        }
    };
    return t
});
define("mp/classes/player", ["jquery-1.9", "mp/classes/settings", "mp/classes/decisionengine", "mp/classes/errors/error", "mp/modules/device", "mp/classes/rdotreporting", "mp/classes/parentalguidance", "mp/classes/players/player", "mp/classes/sonarreporter", "mp/modules/helpers", "mp/modules/html5"], function(e, t, i, n, a, r, o, s, l, d, c) {
    function p(e, t) {
        if ("string" == typeof e) {
            if (e.match(v)) return t ? e : e.replace("px", "");
            if (e.match(b)) return e
        }
        return null == e || isNaN(Number(e)) ? void 0 : Number(e) + (t ? "px" : "")
    }

    function u(e, t, i) {
        t = t && "width" === t ? "width" : "height";
        var n, a = e._settings,
            r = a.container,
            o = "width" === t ? "height" : "width",
            s = p(e["_" + o] || a.plugins.player[o]);
        void 0 !== s && (n = s.match(b) ? s : String(isNaN(s) ? r[t]() : Math.ceil("height" === o ? s * w : s / w)));
        return n + (i ? "px" : "")
    }

    function m(e, t, i, n, a) {
        i = i && "width" === i ? "width" : "height";
        if ("undefined" != typeof t) {
            t += "";
            var r = "width" === i ? "height" : "width",
                o = e._settings,
                s = o.container,
                l = t,
                d = l.match(v),
                c = p(l);
            if (void 0 !== c) {
                e["_" + i] = l;
                o.plugins.player[i] = c
            } else {
                c = u(e, i);
                if (void 0 !== c) {
                    e["_" + i] = "0";
                    o.plugins.player[i] = c
                }
            }
            if (void 0 !== c) {
                n = n || null !== l.match(b);
                n || s.css(i, c + "px");
                if (!a && void 0 === e["_" + r]) {
                    var f = u(e, r, d);
                    m(e, f, r, n, !0)
                }
                h(e)
            }
        }
        return e["_" + i]
    }

    function f(t) {
        var i = {
            position: "relative",
            "z-index": "1",
            height: "100%",
            width: "100%",
            "padding-bottom": 0
        };
        t.superResponsive && (i["padding-bottom"] = "56.25%");
        if (!t.responsive && !t.superResponsive) {
            t.container.css("width", p(t.plugins.player.width, !0));
            t.container.css("height", p(t.plugins.player.height, !0))
        }
        return e("<div />").css(i)
    }

    function h(e) {
        var t = e._settings,
            i = t.container,
            n = t.posterUrl(i);
        if (!n || e.player && !e.player.includePoster) i.css("background-image", "");
        else {
            var a = "contain";
            (t.ui.displayCover || Math.abs(16 / 9 - i.width() / i.height()) < .2) && (a = "cover");
            i.css({
                "background-image": "url(" + n + ")",
                "background-repeat": "no-repeat",
                "background-position": "center center",
                "background-size": a,
                "background-color": "black",
                overflow: "hidden"
            })
        }
        "html" == e.type && i.css("overflow", "")
    }

    function g(n, r) {
        var c = d.addEmbeddedMedia();
        c.version = this.bumpVersion = "3.42.4";
        y = a.get();
        this.bumpRevision = "-1";
        this.player = new s;
        this.player.fake = !0;
        this.supportsMarkers = !1;
        this.capability = {
            markers: !1,
            queuedPlaylist: !1,
            inPage: !1,
            chromecast: !1,
            overlay: !1
        };
        r.container = n;
        r.domid = n.attr("id");
        var p = this._settings = new t(r);
        if (p.enableSonarReporting && !p.noTracking) {
            this._sonarReporter = new l;
            this._sonarReporter.init(p.html5Debug)
        }
        c.parentalGuidance || (c.parentalGuidance = new o(this._sonarReporter, p));
        p.guidance = c.parentalGuidance.guidance;
        y.preferHtmlAudio && "undefined" == typeof r.preferInlineAudioPlayback && (p.preferInlineAudioPlayback = !0);
        var u = c.parentalGuidance;
        u.closedCallbacks.push(function() {
            var t = e.Event("guidanceClosed");
            t.guidance = p.guidance;
            p.trigger(t)
        });
        u.openedCallbacks.push(function() {
            var t = e.Event("guidanceShown");
            p.trigger(t)
        });
        u.updateCallbacks.push(function(t) {
            var i = e.Event("guidanceUpdated");
            t.noPin = p.guidanceCleared;
            p.guidance = t;
            i.guidance = p.guidance;
            p.trigger(i)
        });
        this._decisionEngine = new i(p);
        return this
    }
    var y, b = new RegExp("^([0-9\\.]+)%$", "gi"),
        v = new RegExp("^([0-9\\.]+)px$", "gi"),
        w = 16 / 9;
    g.prototype = {
        showGuidance: function(e, t, i, n) {
            var a = {
                lockClicked: i
            };
            a.title = e ? e : "";
            a.guidance = t ? t : "";
            a.intent = n ? n : "play";
            var r = window.embeddedMedia.parentalGuidance,
                o = this._settings;
            o.guidanceCleared || r.show(a, o.ui.colour, o.locale(), !0)
        },
        lockGuidance: function() {
            this._settings.guidance.hasGuidancePIN === !0 ? window.embeddedMedia.parentalGuidance.setLocked(!0, !0) : this.unlockGuidance()
        },
        unlockGuidance: function() {
            this.showGuidance("", "", !0)
        },
        name: function() {
            return this._decisionEngine.name || "no-player"
        },
        decide: function() {
            (!this.player || this.player.fake || "smp-phantom" == this.name() && !this._settings.phantomPlayer) && (this.player = this._decisionEngine.decide());
            return this.name()
        },
        settings: function() {
            return this._settings.set.apply(this._settings, e.makeArray(arguments))
        },
        distributedConfig: function(e, t) {
            if (!d.isObjectEmpty(e)) {
                "ui" == t && (e = {
                    ui: e
                });
                this._settings.set(e);
                "ui" == t ? this.player.updateUiConfig(e.ui) : this.player.updateConfig(e)
            }
        },
        deviceData: function() {
            return {
                device: y,
                html5: c,
                flash: {
                    flashPlayerVersion: 23
                }
            }
        },
        poster: function(e) {
            if ("string" == typeof e) {
                this._settings._poster = e;
                h(this)
            }
        },
        play: function(e) {
            this.player.play(e !== !1)
        },
        autoplay: function(e) {
            "boolean" == typeof e && (this._settings.autoplay = e);
            return this._settings.autoplay
        },
        pause: function() {
            this.player.pause()
        },
        suspend: function() {
            this.player.suspend()
        },
        next: function() {
            this.player.next()
        },
        previous: function() {
            this.player.next()
        },
        currentTime: function(e) {
            return this.player.currentTime(e)
        },
        showSubtitles: function(e) {
            return this.player.showSubtitles(e)
        },
        duration: function() {
            return this.player.duration()
        },
        muted: function(e) {
            return this.player.muted(e)
        },
        queuePlaylist: function(e, t) {
            var i = this,
                n = i.player;
            n.queuePlaylist(e, t)
        },
        setPreviousPlaylist: function(e, t) {
            var i = this,
                n = i.player;
            n.setPreviousPlaylist(e, t)
        },
        loadPlaylist: function(t, i, n, a) {
            var r = this,
                o = r.player,
                s = r._settings;
            s.autoplay = !1;
            s.playlist = "";
            s._poster = null;
            s.playlistObject = null;
            s.overrideHoldingImage = null;
            s.overrideCtaDuration = null;
            s.webcastData = {};
            s.statsObject.parentPID = void 0;
            s.statsObject.parentPIDType = void 0;
            s.statsObject.episodePID = void 0;
            s.statsObject.clipPID = void 0;
            s.statsObject.brandPID = void 0;
            s.statsObject.seriesPID = void 0;
            s.statsObject.playlistLabels = void 0;
            s.statsObject.playlistName = void 0;
            t && ("string" != typeof t ? s.playlistObject = t : s.playlist = t);
            s.statsObject.playlistURL || (s.statsObject.playlistURL = s.playlist || void 0);
            s.startTime = 0;
            if ("object" == typeof i) r.settings(i);
            else {
                r.autoplay(i);
                s.overrideHoldingImage = n || s.overrideHoldingImage
            }
            o._settings = s;
            o._statsObject = e.extend(!0, {}, s.statsObject);
            o.includePoster && (s.autoplay ? setTimeout(function() {
                h(r)
            }, 100) : h(r));
            if (a) {
                a.startTime && (o._lastSignificant = s.startTime = a.startTime);
                "boolean" == typeof a.promptGuidanceWhenAutoplay && (s.promptGuidanceWhenAutoplay = a.promptGuidanceWhenAutoplay)
            }
            s.phantomPlayer || "smp-phantom" != o._name ? o.loadPlaylist(r) : this.load()
        },
        kind: function() {
            return this.player.kind()
        },
        captureIntent: function(e) {
            return this.player.captureIntent(e)
        },
        stop: function() {
            this._settings.autoplay = !1;
            return this.player.stop()
        },
        loadPlugin: function(e, t) {
            if (this.player.loadPlugin) this.player.loadPlugin(e, t);
            else if (e) {
                e.data = t;
                this._settings.plugins.toLoad.push(e)
            }
        },
        updateUiConfig: function(t) {
            var i = this._settings,
                n = i.locale();
            e.extend(!0, i.ui, t);
            n != i.locale() && window.embeddedMedia.language.load(i.locale());
            this.player.updateUiConfig(t)
        },
        updateQuality: function(e) {
            var t = this._settings;
            t.set(e);
            this.player.updateQuality(e)
        },
        setData: function(e) {
            this._settings.plugins.smpAirPluginData = e;
            this.player.setData(e)
        },
        setPoster: function(e, t) {
            this.player.setPoster(e, t)
        },
        dispatchEvent: function(e, t) {
            this.player.dispatchEvent(e, t)
        },
        pauseAt: function(e) {
            this.player.pauseAt(e)
        },
        webcastData: function(e) {
            this._settings.webcastData = e;
            this.player.webcastData(e)
        },
        onAdProcessed: function(e) {
            this.player.onAdProcessed(e)
        },
        volume: function(e) {
            var t = this.player.volume(e);
            return t
        },
        paused: function() {
            return this.player.paused()
        },
        ended: function() {
            return this.player.ended()
        },
        seeking: function() {
            return this.player.seeking()
        },
        mediaItem: function() {
            return this.player.mediaItem()
        },
        playlist: function() {
            return this.player.loadedPlaylist()
        },
        width: function(e) {
            return m(this, e, "width")
        },
        height: function(e) {
            return m(this, e, "height")
        },
        bind: function() {
            var t = this._settings.container;
            t.bind.apply(t, e.makeArray(arguments));
            return this
        },
        unbind: function() {
            var t = this._settings.container;
            t.unbind.apply(t, e.makeArray(arguments));
            return this
        },
        _loadOptions: function(t) {
            var i = this,
                a = i._decisionEngine._settings = i._settings;
            a.validate();
            a.statsObject && a.statsObject.parentPID && (a.optinPids + "").indexOf(a.statsObject.parentPID + "") !== -1 && (a.smpj2OptIn = !0);
            i.player && i.player.immediate && (t = !0);
            i.decide();
            var o = i._decisionEngine.name;
            if (o) {
                var l = function(t, n) {
                    window.embeddedMedia.addPlayer(a.domid, t);
                    i.player = t;
                    t.showErrorDialog = i.showErrorDialog;
                    if (t.includePoster) {
                        t.setPoster = function(e) {
                            i.poster(e)
                        };
                        h(i)
                    }
                    a.statsObject.playlistURL || (a.statsObject.playlistURL = a.playlist || void 0);
                    t._statsObject = e.extend(!0, {}, a.statsObject);
                    if (i._sonarReporter) {
                        i._sonarReporter.newPlayer(i, t.requireSonarJS);
                        t.sonar = i._sonarReporter
                    }
                    if (n) {
                        e.extend(i.capability, n);
                        i.supportsMarkers = i.capability.markers
                    }
                    t.reloadScope = i
                };
                if ("html" == i.player.type) {
                    var d = window.innerHeight;
                    isNaN(d) && (d = 1e3);
                    if (a.container[0] && a.container[0].getClientRects) {
                        var c = a.container[0].getClientRects();
                        (!c[0] || d > c[0].y) && (t = !0)
                    }
                }
                window.embeddedMedia.playerInits++;
                i.create = function() {
                    i.addInitialisationListener(i);
                    i.player.embed(a, l);
                    if (!a.responsive && !a.superResponsive) {
                        a.container.css("width", p(a.plugins.player.width, !0));
                        a.container.css("height", p(a.plugins.player.height, !0))
                    }
                };
                if (t || i.player.immediate) i.create();
                else if (0 === window.embeddedMedia.players.length) i.create();
                else if (window.embeddedMedia.players[0].ready) i.create();
                else {
                    var u = 500 * (window.embeddedMedia.playerInits + 2);
                    setTimeout(function() {
                        i.create()
                    }, u)
                }
            } else {
                var m = e.Event("error");
                h(i);
                var f = 6003;
                a.dashPlaybackOnly && !a.threeSixty ? f = 6012 : !y.supportsFlash || a.showUnsupportedMessage || a.threeSixty || (f = 6010);
                m.errorData = new n(f, a);
                a.ui.hideDefaultErrors || this.showErrorDialog(m.errorData);
                i.player = new s;
                i.player.fake = !0;
                a.trigger(m);
                r.error(f, a)
            }
            return this
        },
        load: function(t) {
            var i = this;
            "string" == typeof t ? i._settings.playlist = t : "object" == typeof t && i._settings.set(t);
            var n = function() {
                window.embeddedMedia.language.load(i._settings.locale(), function() {
                    i._loadOptions()
                });
                return i
            };
            if (y.waitForLoad) {
                if ("complete" === document.readyState || "interactive" === document.readyState) return n();
                e(document).ready(n);
                return i
            }
            return n()
        },
        reset: function() {
            return this
        },
        addInitialisationListener: function(t) {
            var i = this._settings,
                a = i.container;
            clearTimeout(i.initialisationListenerTimeout);
            i.initialisationListenerTimeout = setTimeout(function() {
                if ("flash" == t.player.type) {
                    i.dashPlaybackOnly = !0;
                    t.player.fake = !0;
                    if ("no-player" != t.decide()) {
                        t.create();
                        return
                    }
                }
                r.error(6004, i, t.player._name);
                var o = e.Event("error");
                o.errorData = new n(6004, i);
                if (a) {
                    this.player = new s;
                    this.player.fake = !0;
                    a.trigger(o)
                }
            }, 1e4);
            a.bind("initialised smpFlashLoaded", function() {
                clearTimeout(i.initialisationListenerTimeout)
            })
        },
        showErrorDialog: function(t) {
            var i = this._settings,
                n = i.container,
                a = i.ui.miniMode && i.ui.miniMode.enabled || !1;
            n.empty();
            var r = e("<div />").css({
                    width: "100%",
                    height: "100%",
                    background: "rgba(51,51,51,0.85)",
                    position: "absolute"
                }),
                o = document.createElement("div"),
                s = o.style;
            s.position = "absolute";
            if (a) {
                s.width = "150px";
                s.height = "80px";
                s.fontSize = "16px"
            } else {
                s.width = "320px";
                s.height = "160px";
                s.fontSize = "18px";
                if (y.os.winphone) s.top = s.left = s.marginLeft = s.marginTop = 0;
                else {
                    s.top = s.left = "50%";
                    s.marginLeft = "-160px";
                    s.marginTop = "-80px"
                }
            }
            s.verticalAlign = "middle";
            s.textAlign = "center";
            s.color = "white";
            s.fontFamily = "arial, helvetica, sans-serif";
            var l = document.createElement("div");
            l.style.backgroundImage = "url(//emp.bbci.co.uk/emp/assets/2.0.26/alert.png)";
            l.style.backgroundRepeat = "no-repeat";
            l.style.backgroundPosition = "50% 0";
            l.style.height = "22px";
            l.style.backgroundSize = "22px";
            var d = document.createElement("div"),
                c = d.style;
            c.position = "absolute";
            c.display = "block";
            if (a) c.top = c.left = c.right = "8px";
            else {
                c.top = "38px";
                c.left = c.right = "20px"
            }
            d.innerHTML = t.description();
            if (6010 == t.code() && !a) {
                var p = document.createElement("div"),
                    u = p.style;
                u.position = "absolute";
                u.bottom = "20px";
                u.right = u.left = "10px";
                var m = '<a href="https://get.adobe.com/flashplayer" target="_blank" style="color:white;background-color : transparent;">' + window.embeddedMedia.language.t("downloadFlashLink", i.locale()) + "</a>";
                p.innerHTML = window.embeddedMedia.language.t("enableFlash").replace("{link}", m);
                o.appendChild(p)
            }
            r[0].appendChild(o);
            a || o.appendChild(l);
            if (n.width() < 320) {
                s.width = "100%";
                s.fontSize = "14px";
                a || (s.left = "160px")
            }
            o.appendChild(d);
            n.append(f(i).append(r))
        }
    };
    return g
});
define("bump-3", ["jquery-1.9", "mp/classes/player", "mp/modules/helpers"], function(e, t, i) {
    var n = {},
        a = i.addEmbeddedMedia();
    if ("function" != typeof e.fn.player) {
        var r = {
            getPlayer: function() {
                var t = e(e(this).get(0)),
                    i = t.attr("id");
                return n[i]
            },
            player: function(i) {
                var a = e(e(this).get(0)),
                    r = a.attr("id");
                if ("undefined" == typeof n[r] || n[r].settings().container[0] != a[0]) {
                    if (!r) {
                        var o = "bbcMediaPlayer",
                            s = 0;
                        do r = o + s++; while (document.getElementById(r));
                        a.attr("id", r)
                    }
                    if (!i) throw "No player settings. If you're trying to get a reference, it's probably not created yet.";
                    n[r] = new t(a, i)
                } else n[r].settings(i);
                return n[r]
            }
        };
        e.fn.extend(r)
    }
    if ("function" != typeof e.players) {
        var o = {
            players: function() {
                return n
            }
        };
        e.extend(o)
    }
    a.api || (a.api = {
        players: function() {
            return n
        }
    });
    return e
});