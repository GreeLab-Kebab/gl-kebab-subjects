(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
    ["chunk-03b287bb"], {
        "8eec": function(t, e, i) {
            "use strict";
            i.r(e);
            var s = function() {
                    var t = this,
                        e = t.$createElement,
                        i = t._self._c || e;
                    return t.showVideo ? i("div", {
                        ref: "video",
                        staticClass: "card-video"
                    }, [i("div", {
                        staticClass: "mwb-video mwbv-layer",
                        class: {
                            huawei: t.huaWei, safari: t.safariStyle, qq: t.androidQQ, "mwbv-play": t.showPlay, "mwbv-control-pause": !t.showPlay, "mwbv-control-play": t.showPlay, "mwbv-control-mute": t.vMute, "mwbv-control": !t.endPlay && t.dragPro, "mwbv-replay": t.endPlay, "mwbv-loading": t.loading
                        }
                    }, [t.iosQQ ? i("video", {
                        ref: "media",
                        staticClass: "mwbv-video",
                        attrs: {
                            src: t.src,
                            "webkit-playsinline": "",
                            playsinline: "true",
                            "x-webkit-airplay": "true"
                        },
                        on: {
                            click: t.pushBtn,
                            timeupdate: t.getVideoTime,
                            touchmove: function(t) {
                                t.preventDefault(), t.stopPropagation()
                            }
                        }
                    }) : i("video", {
                        ref: "media",
                        staticClass: "mwbv-video",
                        attrs: {
                            src: t.src,
                            "webkit-playsinline": "",
                            playsinline: "true",
                            "x-webkit-airplay": "true",
                            "raw-controls": "",
                            "x5-video-player-type": "h5",
                            "x5-video-player-fullscreen": "true",
                            "x5-video-orientation": "portrait"
                        },
                        on: {
                            click: t.pushBtn,
                            timeupdate: t.getVideoTime,
                            touchmove: function(t) {
                                t.preventDefault(), t.stopPropagation()
                            }
                        }
                    }), t._m(0), i("button", {
                        staticClass: "mwbv-play-button",
                        on: {
                            click: t.pushBtn
                        }
                    }, [i("span", {
                        staticClass: "mwbv-icon"
                    })]), i("button", {
                        staticClass: "mwbv-replay-button",
                        on: {
                            click: t.pushBtn
                        }
                    }, [i("span", {
                        staticClass: "mwbv-icon"
                    }), i("span", {
                        staticClass: "mwbv-text"
                    }, [t._v("重播")])]), i("div", {
                        staticClass: "mwbv-control-bar"
                    }, [i("div", {
                        staticClass: "m-box"
                    }, [i("button", {
                        staticClass: "mwbv-play-control",
                        on: {
                            click: t.pushBtn
                        }
                    }, [i("span", {
                        staticClass: "mwbv-icon"
                    })]), i("div", {
                        staticClass: "mwbv-current-time"
                    }, [t._v(t._s(t._f("timer")(t.vCTime)))]), i("div", {
                        ref: "outBar",
                        staticClass: "mwbv-progress-control m-box-col"
                    }, [t.pc ? i("div", {
                        ref: "bar",
                        staticClass: "progress-bar"
                    }, [i("div", {
                        staticClass: "progress-bar-cache",
                        style: {
                            width: 100 * t.vCacheW + "%"
                        }
                    }), i("div", {
                        staticClass: "progress-bar-inner",
                        style: {
                            width: 100 * t.vw + "%"
                        }
                    }, [i("span", {
                        staticClass: "progress-handle"
                    })])]) : i("div", {
                        ref: "bar",
                        staticClass: "progress-bar",
                        on: {
                            touchstart: function(e) {
                                return e.preventDefault(), t.downProgress(e)
                            },
                            touchmove: t.moveProgress,
                            touchend: function(e) {
                                return e.preventDefault(), t.upProgress(e)
                            }
                        }
                    }, [i("div", {
                        staticClass: "progress-bar-cache",
                        style: {
                            width: 100 * t.vCacheW + "%"
                        }
                    }), i("div", {
                        staticClass: "progress-bar-inner",
                        style: {
                            width: 100 * t.vw + "%"
                        }
                    }, [i("span", {
                        staticClass: "progress-handle"
                    })])])]), i("div", {
                        staticClass: "mwbv-remaining-time"
                    }, [t._v("-" + t._s(t._f("timer")(t.vDTime)))]), i("button", {
                        staticClass: "mwbv-volume-control",
                        class: {
                            ios9Style: t.ios9Flag
                        },
                        on: {
                            click: t.pushVolume
                        }
                    }, [i("span", {
                        staticClass: "mwbv-icon"
                    })])])]), i("div", {
                        staticClass: "mwbv-close-content",
                        on: {
                            click: t.vClose
                        }
                    }, [t._m(1)])])]) : t._e()
                },
                a = [function() {
                    var t = this,
                        e = t.$createElement,
                        i = t._self._c || e;
                    return i("div", {
                        staticClass: "mwbv-loading-spinner"
                    }, [i("div", {
                        staticClass: "m-loading m-loading-light"
                    }, [i("span"), i("span"), i("span"), i("span"), i("span"), i("span"), i("span"), i("span"), i("span"), i("span"), i("span"), i("span")])])
                }, function() {
                    var t = this,
                        e = t.$createElement,
                        i = t._self._c || e;
                    return i("button", {
                        staticClass: "mwbv-close-control"
                    }, [i("span", {
                        staticClass: "mwbv-icon"
                    })])
                }],
                r = i("cebc"),
                o = i("0a0d"),
                n = i.n(o),
                d = (i("6b54"), i("e814")),
                c = i.n(d),
                l = (i("a481"), i("685a")),
                h = i("383a"),
                u = i("2f62"),
                m = 50,
                g = null;

            function v(t) {
                return t < 10 ? "0".concat(t) : t
            }
            var p = {
                    data: function() {
                        return {
                            video: "",
                            showVideo: !1,
                            vw: 0,
                            vCacheW: 0,
                            vMute: !1,
                            vCTime: 0,
                            vDTime: 0,
                            showPlay: !1,
                            endPlay: !1,
                            loading: !1,
                            flagLoading: !0,
                            dragProgress: !1,
                            bar: "",
                            outBar: "",
                            media: "",
                            src: "",
                            safariStyle: !1,
                            ios9Flag: !1,
                            huaWei: !1,
                            iosQQ: !1,
                            androidQQ: !1,
                            ios11Flag: !0,
                            pc: !1,
                            dragPro: !1,
                            logRecord: {},
                            startTimeFlag: !0,
                            startTime: 0,
                            lastDrag: 0,
                            logFlag: !0,
                            oid: "",
                            sid: "",
                            firstSendFlag: !1,
                            laterSendFlag: !1,
                            laterSendTime: ""
                        }
                    },
                    created: function() {
                        var t = this;
                        h["a"].$on("playVideo", function(e) {
                            e && e.src && (t.oid = encodeURIComponent(e.oid), t.uid = t.$store.getters.config.uid ? t.$store.getters.config.uid : t.getCookie("_T_WM"), t.sid = t.randomSid().replace(/-/gi, ""), t.src = e.src, t.showVideo = !0, t.$nextTick(function() {
                                var t;
                                if (this.video = this.$refs.video, this.bar = this.$refs.bar, this.outBar = this.$refs.outBar, this.media = this.$refs.media, g || (g = setInterval(this.changeStatus, m)), document.addEventListener("keyup", this.exitEsc), this.vMute = !1, this.media) switch (this.media.muted = !1, this.media.play(), "Safari" === l["a"].browser && "iOS" === l["a"].os ? t = "Safari" : "Android" !== l["a"].os || "Safari" !== l["a"].browser && "XiaoMi" !== l["a"].browser || -1 === l["a"].osVersion.indexOf("6") ? "Android" === l["a"].os && "Safari" === l["a"].browser && -1 !== l["a"].osVersion.indexOf("4") ? t = "Android4" : "iOS" === l["a"].os && "QQBrowser" === l["a"].browser ? t = "iosQQ" : "Android" === l["a"].os && "QQBrowser" === l["a"].browser ? t = "androidQQ" : "Android" !== l["a"].os && "iOS" !== l["a"].os && (this.pc = !0, this.bar.addEventListener("mousedown", this.downProgress), this.video.addEventListener("mousemove", this.moveProgress), document.addEventListener("mouseup", this.upProgress), this.bar.addEventListener("click", this.pushProgress)) : t = "huaWei", t) {
                                    case "Safari":
                                        this.safariStyle = !0, -1 !== l["a"].osVersion.indexOf("9") && (this.ios9Flag = !0, this.showPlay = this.media.paused);
                                        break;
                                    case "huaWei":
                                        this.showPlay = !0, this.huaWei = !0;
                                        break;
                                    case "Android4":
                                        this.ios9Flag = !0, this.showPlay = this.media.paused, this.huaWei = this.media.paused;
                                        break;
                                    case "iosQQ":
                                        this.iosQQ = !0;
                                        break;
                                    case "androidQQ":
                                        this.androidQQ = !0;
                                        break;
                                    default:
                                        this.showPlay = this.media.paused
                                }
                            }))
                        })
                    },
                    filters: {
                        timer: function(t) {
                            var e, i, s, a;
                            return t ? (t <= 60 ? a = "00:".concat(v(c()(t, 10))) : t > 60 && t < 3600 ? (i = v((c()(t, 10) - c()(t, 10) % 60) / 60), s = v(c()(t, 10) % 60), a = "".concat(i, ":").concat(s)) : (e = (c()(t, 10) - c()(t, 10) % 3600) / 3600, i = c()(t, 10) - 3600 * e > 60 ? (c()(t, 10) - 3600 * e - (c()(t, 10) - 3600 * e) % 60) / 60 : 0, i = v(i), s = v(c()(t, 10) - 3600 * e - 60 * i), a = "".concat(e, ":").concat(i, ":").concat(s)), a) : "00:00"
                        }
                    },
                    methods: {
                        getCookie: function(t) {
                            var e, i;
                            return document.cookie.length > 0 && (e = document.cookie.indexOf("".concat(t, "=")), -1 !== e) ? (e = e + t.length + 1, i = document.cookie.indexOf(";", e), -1 === i && (i = document.cookie.length), decodeURIComponent(document.cookie.substring(e, i))) : null
                        },
                        randomSid: function(t) {
                            return t ? (t ^ 16 * Math.random() >> t / 4).toString(16) : ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, this.randomSid)
                        },
                        format: function(t) {
                            var e = t.getFullYear(),
                                i = v(t.getMonth() + 1),
                                s = v(t.getDate()),
                                a = t.getHours(),
                                r = v(t.getMinutes()),
                                o = v(t.getSeconds());
                            return "".concat(e, "-").concat(i, "-").concat(s, " ").concat(a, ":").concat(r, ":").concat(o)
                        },
                        addLog: function(t, e) {
                            var i = "https://m.weibo.cn/h5logs/actionLog?type=pic&".concat(t, "&t=").concat(n()()),
                                s = new Image;
                            s.onerror = function() {
                                e && e(), s = null
                            }, s.onload = s.onerror, s.src = i
                        },
                        transfer: function() {
                            if (this.logRecord.duration = Math.floor(this.media.duration) || 0, this.logRecord.playduration = Math.floor(1e3 * this.media.currentTime) || 0, this.lastDrag > 0 ? this.logRecord.valid_play_duration = Math.floor(1e3 * this.lastDrag) || 0 : this.logRecord.valid_play_duration = this.logRecord.playduration - (Math.floor(1e3 * this.startTime) || 0), this.logRecord.valid_play_duration > 0) {
                                var t = {
                                        startplay_time: this.logRecord.startplay_time,
                                        valid_play_duration: this.logRecord.valid_play_duration,
                                        playduration: this.logRecord.playduration,
                                        duration: this.logRecord.duration,
                                        play_time: this.logRecord.play_time,
                                        oid: this.oid,
                                        sid: this.sid
                                    },
                                    e = [];
                                for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && e.push("".concat(i, ":").concat(t[i]));
                                this.addLog("act_code=2632&ext=".concat(e.join("|")))
                            }
                        },
                        badNetworkState: function() {
                            var t = this.$refs.media;
                            if (t) return t.error && 4 === t.error.code ? (this.vClose(), void h["a"].$emit("mvMsgbox", {
                                title: "该视频无法播放",
                                type: "alert"
                            })) : void(this.online ? 4 !== t.readyState ? (this.loading = !0, this.flagLoading = !0) : this.flagLoading && ("iOS" !== l["a"].os || -1 === l["a"].osVersion.indexOf("11") && -1 === l["a"].osVersion.indexOf("10") || !this.ios11Flag || (t.pause(), this.showPlay = !0, this.ios11Flag = !1), this.dragPro || (this.dragPro = !0), this.logFlag = !0, this.loading = !1, this.flagLoading = !1) : 4 !== t.readyState && (this.loading = !0, this.flagLoading = !0))
                        },
                        changeStatus: function() {
                            this.badNetworkState();
                            var t = this.$refs.media;
                            t && (t.ended ? (this.vw = 1, this.endPlay = !0, window.clearInterval(g), g = null) : this.vw = t.currentTime / t.duration)
                        },
                        getVideoTime: function() {
                            this.badNetworkState();
                            var t = this.$refs.media;
                            t && (this.vCTime = t.currentTime, this.vDTime = t.duration - t.currentTime, t.buffered.length > 0 && 1 !== this.vCacheW && (this.vCacheW = t.buffered.end(0) / t.duration), this.startTimeFlag && (this.startTime = t.currentTime, this.logRecord.startplay_time = Math.floor(1e3 * t.currentTime), this.logRecord.play_time = this.format(new Date), this.startTimeFlag = !1), 3 !== Math.round(t.currentTime) || this.firstSendFlag || (this.transfer(), this.firstSendFlag = !0, this.startTime = t.currentTime, this.laterSendTime = this.startTime + 30, this.laterSendFlag = !0), this.laterSendFlag && t.currentTime >= this.laterSendTime && (this.transfer(), this.startTime = t.currentTime, this.laterSendTime = this.startTime + 30), (t.paused || t.ended) && this.logFlag && (this.lastDrag = 0, this.transfer(), this.logFlag = !1))
                        },
                        pushBtn: function(t) {
                            this.badNetworkState(), this.androidQQ && t.preventDefault();
                            var e = this.$refs.media;
                            e.paused ? (this.logFlag = !0, this.startTime = e.currentTime, this.showPlay = !1, this.endPlay = !1, e.play(), g || (g = setInterval(this.changeStatus, m))) : (this.showPlay = !0, e.pause(), window.clearInterval(g), g = null)
                        },
                        updatePro: function(t) {
                            var e = t - this.bar.getBoundingClientRect().left,
                                i = this.bar.getBoundingClientRect().right - this.bar.getBoundingClientRect().left,
                                s = e / i;
                            s > 1 ? s = 1 : s < 0 && (s = 0), this.vw = s, this.media.currentTime = c()(this.media.duration * s, 10)
                        },
                        dragAllProgressX: function(t) {
                            var e = window.event || t,
                                i = e.clientX;
                            return i
                        },
                        downProgress: function(t) {
                            this.lastDrag = this.media.currentTime - this.startTime, this.dragProgress = !0, this.pc ? this.updatePro(this.dragAllProgressX(t)) : this.updatePro(t.changedTouches[0].clientX)
                        },
                        moveProgress: function(t) {
                            this.dragProgress && (this.pc ? this.updatePro(this.dragAllProgressX(t)) : (t.preventDefault(), this.updatePro(t.changedTouches[0].clientX)))
                        },
                        upProgress: function() {
                            this.dragProgress && (this.transfer(), this.startTime = this.media.currentTime, this.dragProgress = !1)
                        },
                        pushVolume: function() {
                            this.media.muted = !this.media.muted, this.vMute = this.media.muted
                        },
                        exitEsc: function(t) {
                            27 === t.keyCode && this.vClose()
                        },
                        vClose: function() {
                            this.pc && (this.pc = !1, this.bar.removeEventListener("mousedown", this.downProgress), this.video.removeEventListener("mousemove", this.moveProgress), document.removeEventListener("mouseup", this.upProgress), this.bar.removeEventListener("click", this.pushProgress)), document.removeEventListener("keyup", this.exitEsc), this.media && this.media.removeEventListener("timeupdate", this.getVideoTime), window.clearInterval(g), g = null, this.showVideo = !1, this.showPlay = !1, this.endPlay = !1, this.ios11Flag = !0, this.dragPro = !1, this.startTimeFlag = !0, this.media.muted = !1, this.firstSendFlag || this.transfer()
                        }
                    },
                    computed: Object(r["a"])({}, Object(u["c"])(["online"]))
                },
                f = p,
                w = (i("d708"), i("0c7c")),
                b = Object(w["a"])(f, s, a, !1, null, "64780c1e", null);
            e["default"] = b.exports
        },
        bdc5: function(t, e, i) {},
        d708: function(t, e, i) {
            "use strict";
            var s = i("bdc5"),
                a = i.n(s);
            a.a
        }
    }
]);
//# sourceMappingURL=chunk-03b287bb.1d8f08ff.js.map