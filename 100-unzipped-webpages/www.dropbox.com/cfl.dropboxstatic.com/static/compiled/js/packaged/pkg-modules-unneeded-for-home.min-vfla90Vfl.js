define("modules/clean/ajax_as_promised", ["require", "exports", "tslib", "modules/clean/ajax"], function(e, t, o, n) {
    "use strict";

    function r(e) {
        return function(t) {
            return new Promise(function(o, n) {
                return e(t).then(o, function(e, t, o) {
                    return n({
                        jqXHR: e,
                        textStatus: t,
                        errorThrown: o
                    })
                })
            })
        }
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), n = o.__importStar(n), t.Request = r(n.Request), t.BackgroundRequest = r(n.BackgroundRequest), t.SilentBackgroundRequest = r(n.SilentBackgroundRequest), t.SilentBackgroundRequestOref = r(n.SilentBackgroundRequestOref), t.WebRequest = r(n.WebRequest), t.WebRequestOref = r(n.WebRequestOref), t.FormWebRequest = r(n.FormWebRequest), t.WebProgressRequest = r(n.WebProgressRequest), t.ValidationSchemaRequest = r(n.ValidationSchemaRequest)
}), define("modules/clean/avatar/viewer_avatar", ["require", "exports", "tslib", "react", "external/prop-types", "modules/clean/avatar/photo_avatar", "modules/clean/avatar/size", "modules/clean/css", "modules/core/uri", "modules/clean/event_handler"], function(e, t, o, n, r, i, s, a, l, u) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), n = o.__importDefault(n), r = o.__importStar(r), a = o.__importStar(a);
    var p = (function(e) {
        function t(t) {
            var o = e.call(this, t) || this;
            return o.state = {
                photoUrl: o.props.photoUrl
            }, o
        }
        return o.__extends(t, e), t.prototype.componentDidMount = function() {
            var e = this;
            a.require_css("/static/css/scooter/scooter-scoped-vflFpCY2P.css"), this.events.on(document, "db:account_photo:photo_set", function(t, o) {
                var n = 2 * e.props.dimension,
                    r = n + "x" + n,
                    i = l.URI.parse(o.saved_photo_url).updateQuery({
                        size: r
                    }).toString();
                e.setState({
                    photoUrl: i
                })
            }), this.events.on(document, "db:account_photo:photo_deleted", function() {
                e.setState({
                    photoUrl: null
                })
            }), !this.hasPhotoAvatar() && this.props.onLoad && this.props.onLoad()
        }, t.prototype.hasPhotoAvatar = function() {
            return null != this.state.photoUrl
        }, t.prototype.render = function() {
            return this.hasPhotoAvatar() ? n.default.createElement(i.PhotoAvatar, {
                alt: this.props.alt,
                dimension: this.props.dimension,
                onClick: this.props.onPhotoClick,
                photoUrl: this.state.photoUrl,
                optionalClass: this.props.optionalClass,
                onLoad: this.props.onLoad,
                onError: this.props.onError
            }) : this.props.defaultAvatar
        }, t.displayName = "ViewerAvatar", t.propTypes = {
            dimension: r.oneOf(s.VALID_AVATAR_DIMENSIONS).isRequired
        }, t = o.__decorate([u.eventHandler], t)
    })(n.default.Component);
    t.default = p
}), define("modules/clean/bolt", ["require", "exports", "tslib", "external/lodash", "jquery", "modules/clean/bolt_nodeps", "modules/core/exception"], function(e, t, o, n, r, i, s) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), n = o.__importStar(n), r = o.__importDefault(r), s = o.__importStar(s), t.ChannelId = i.ChannelId, t.ChannelPayloads = i.ChannelPayloads, t.Payload = i.Payload, t.SignedChannelState = i.SignedChannelState;
    var a = (function(e) {
        function t(t, o, i) {
            return e.call(this, t, o, i, "bolt.dropbox.com", r.default.ajax, n, s) || this
        }
        return o.__extends(t, e), t
    })(i.BoltClient);
    t.BoltClient = a;
    var l = (function(e) {
        function t(t, o, i) {
            return e.call(this, t, o, i, "thunder.dropbox.com", r.default.ajax, n, s) || this
        }
        return o.__extends(t, e), t
    })(i.ThunderClient);
    t.ThunderClient = l
}), define("modules/clean/bolt_nodeps", ["require", "exports", "tslib"], function(e, t, o) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var n = (function() {
        function e(e, t) {
            this.app_id = e, this.unique_id = t
        }
        return e
    })();
    t.ChannelId = n;
    var r = (function() {
        function e(e, t, o, n) {
            this.app_id = e, this.unique_id = t, this.revision = o, this.token = n
        }
        return e
    })();
    t.SignedChannelState = r;
    var i = (function() {
        function e(e, t) {
            this.revision = e, this.payload = t
        }
        return e
    })();
    t.Payload = i;
    var s = (function() {
        function e(e, t) {
            this.channel_state = e, this.payloads = t
        }
        return e
    })();
    t.ChannelPayloads = s;
    var a = (function() {
            function e(e, t, o, n, r, i, s) {
                void 0 === s && (s = null), this._find_state = this._find_state.bind(this), this._long_poll = this._long_poll.bind(this), this._must_find_state = this._must_find_state.bind(this), this._handle_poll_success = this._handle_poll_success.bind(this), this._handle_poll_error = this._handle_poll_error.bind(this), this._update_callback = t, this._refresh_callback = o, this._hostname = n, this._ajax = r, this._lodash = i, this._exclog = s, this._signed_channel_states = [], this._started = !1, this._sequence_num = 0, this._backoff_window = 1e3, this._additional_headers = {}, this._timeout_id = null, this.update_states(e)
            }
            return e.prototype._encode_channel_state = function(e) {
                return {
                    channel_id: {
                        app_id: e.app_id,
                        unique_id: e.unique_id
                    },
                    revision: e.revision,
                    token: e.token
                }
            }, e.prototype._decode_channel_state = function(e) {
                return new r(e.channel_id.app_id, e.channel_id.unique_id, e.revision, e.token)
            }, e.prototype._decode_channel_id = function(e) {
                return new n(e.app_id, e.unique_id)
            }, e.prototype._compare_revisions = function(e, t) {
                var o = Math.max(e.length, t.length),
                    n = Array(o - e.length + 1).join("0") + e,
                    r = Array(o - t.length + 1).join("0") + t;
                return n < r ? -1 : n > r ? 1 : 0
            }, e.prototype._find_state = function(e) {
                var t = this;
                return this._lodash.find(this._signed_channel_states, function(o) {
                    return t._lodash.isEqual(e, o.channel_id)
                })
            }, e.prototype.update_states = function(e) {
                for (var t = 0, o = Array.from(e); t < o.length; t++) {
                    var n = o[t],
                        r = this._encode_channel_state(n),
                        i = this._find_state(r.channel_id);
                    null == i ? this._signed_channel_states.push(r) : this._compare_revisions(r.revision, i.revision) >= 0 && (i.revision = r.revision, i.token = r.token)
                }
            }, e.prototype.start = function() {
                if (!this._started) return this._started = !0, this._long_poll()
            }, e.prototype.unsubscribe = function() {
                this._started = !1, null != this._long_poll_xhr && this._long_poll_xhr.abort(), this._long_poll_xhr = null, window.clearTimeout(this._timeout_id), this._timeout_id = null
            }, e.prototype._long_poll = function() {
                var e = this;
                this._sequence_num++;
                var t = this._sequence_num;
                return this._long_poll_xhr = this._ajax({
                    url: this._subscribe_url(),
                    type: "POST",
                    data: JSON.stringify({
                        channel_states: this._signed_channel_states
                    }),
                    contentType: "application/json; charset=utf-8",
                    headers: this._additional_headers,
                    dataType: "json",
                    timeout: 12e4,
                    success: function(o, n, r) {
                        return e._handle_poll_success(t, o, n, r)
                    },
                    error: function(o, n) {
                        return e._handle_poll_error(t, o, n)
                    },
                    xhrFields: {
                        withCredentials: !0
                    }
                })
            }, e.prototype._must_find_state = function(e) {
                var t = this._find_state(e);
                if (null == t) {
                    var o = "Bolt returned unknown channel id " + e;
                    null != this._exclog && this._exclog.reportStack(o)
                }
                return t
            }, e.prototype._handle_poll_data = function(e, t, o) {
                return null != this._exclog ? this._exclog.reportStack("Method must be implemented.") : void 0
            }, e.prototype._subscribe_url = function() {
                return "https://" + this._hostname + this._subscribe_endpoint()
            }, e.prototype._subscribe_endpoint = function() {
                return null != this._exclog ? this._exclog.reportStack("Method must be implemented.") : void 0
            }, e.prototype._handle_poll_success = function(e, t, o, n) {
                var r = this;
                if (e === this._sequence_num && (this._long_poll_xhr = null, this._started)) {
                    var i = this._handle_poll_data(t, o, n);
                    return i.length > 0 && this._lodash.defer(this._update_callback, i), (null != t.invalid_channels ? t.invalid_channels.length : void 0) > 0 ? void this._lodash.defer(this._refresh_callback, Array.from(t.invalid_channels).map(function(e) {
                        return r._decode_channel_id(e)
                    })) : (this._backoff_window = 1e3, this._timeout_id = window.setTimeout(this._long_poll, 0))
                }
            }, e.prototype._handle_poll_error = function(e, t, o) {
                if (e === this._sequence_num && (this._long_poll_xhr = null, this._started)) {
                    var n = Math.random() * this._backoff_window;
                    return this._backoff_window = Math.min(2 * this._backoff_window, 3e5), this._timeout_id = window.setTimeout(this._long_poll, n)
                }
            }, e
        })(),
        l = (function(e) {
            function t(t, o, n, r, i, s, a) {
                void 0 === a && (a = null);
                var l = e.call(this, t, o, n, r, i, s, a) || this;
                return l._handle_poll_data = l._handle_poll_data.bind(l), l
            }
            return o.__extends(t, e), t.prototype._subscribe_endpoint = function() {
                return "/2/notify/subscribe"
            }, t.prototype._handle_poll_data = function(e, t, o) {
                var n = [];
                if (null != e.channel_states)
                    for (var r = 0, i = Array.from(e.channel_states); r < i.length; r++) {
                        var s = i[r],
                            a = this._must_find_state(s.channel_id);
                        this._compare_revisions(s.revision, a.revision) > 0 && (a.revision = s.revision, a.token = s.token, n.push(this._decode_channel_state(s)))
                    }
                return n
            }, t
        })(a);
    t.BoltClient = l;
    var u = (function(e) {
        function t(t, o, n, r, i, s, a) {
            void 0 === a && (a = null);
            var l = e.call(this, t, o, n, r, i, s, a) || this;
            return l._handle_poll_data = l._handle_poll_data.bind(l), l
        }
        return o.__extends(t, e), t.prototype.unsubscribe = function() {
            return delete this._additional_headers["X-Bolt-Session"], e.prototype.unsubscribe.call(this)
        }, t.prototype._subscribe_endpoint = function() {
            return "/2/payloads/subscribe"
        }, t.prototype._handle_poll_data = function(e, t, o) {
            var n = [];
            if (this._additional_headers = {}, this._additional_headers["X-Bolt-Session"] = o.getResponseHeader("X-Bolt-Session"), null != e.channel_payloads)
                for (var r = 0, a = Array.from(e.channel_payloads); r < a.length; r++) {
                    for (var l = a[r], u = l.channel_state, p = this._must_find_state(u.channel_id), d = this._decode_channel_state(l.channel_state), c = [], _ = 0, h = Array.from(l.payloads); _ < h.length; _++) {
                        var f = h[_];
                        this._compare_revisions(f.revision, p.revision) > 0 && c.push(new i(f.revision, f.payload))
                    }
                    c.length > 0 && n.push(new s(d, c)), this._compare_revisions(u.revision, p.revision) > 0 && (p.revision = u.revision, p.token = u.token)
                }
            return n
        }, t
    })(a);
    t.ThunderClient = u
}), define("modules/clean/browse_interface", ["require", "exports", "tslib", "modules/clean/viewer", "modules/core/i18n", "modules/core/uri", "modules/clean/browse_uri_interface", "modules/clean/browse_uri_interface"], function(e, t, o, n, r, i, s, a) {
    "use strict";

    function l(e) {
        return n.Viewer.get_viewer().is_paired ? n.Viewer.get_root_name(e) : r._("Files")
    }

    function u() {
        return n.Viewer.get_viewer().get_users().map(function(e) {
            return {
                name: l(e),
                path: a.get_browse_root(e)
            }
        })
    }

    function p(e, t) {
        var n, r = e.fqPath,
            s = e.userId,
            a = o.__assign({}, null == t ? {} : t, (n = {
                undelete: "1"
            }, n._subject_uid = String(s), n));
        r = r.replace(/^[\/]/, "");
        return new i.URI({
            path: "/history/" + r
        }).updateQuery(a).toString()
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.get_browse_root = s.get_browse_root, t.href_for_file = s.href_for_file, t.preview_uri_for_fq_path = s.preview_uri_for_fq_path, t.browse_uri_for_fq_path = s.browse_uri_for_fq_path, t.get_browse_root_name = l, t.get_all_browse_roots = u, t.getFileHistoryUrl = p
}), define("modules/clean/downloads", ["require", "exports", "tslib", "jquery", "modules/clean/api_v2/user_client", "modules/clean/filepath", "modules/clean/react/snackbar", "modules/core/browser", "modules/core/browser_detection", "modules/core/exception", "modules/core/html", "modules/core/i18n", "modules/core/notify", "modules/core/uri"], function(e, t, o, n, r, i, s, a, l, u, p, d, c, _) {
    "use strict";

    function h(e) {
        var o = e.url,
            n = e.ns_id,
            r = e.ns_path,
            i = e.inside_admin_console,
            s = e.error,
            a = _.URI.parse(o);
        return a.setScheme("https"), i ? a.updateQuery({
            dl: "1",
            inside_admin_console: "true"
        }) : a.updateQuery({
            dl: "1"
        }), null != n && (u.assert("string" == typeof r, "Namespace ID was passed with invalid path, got: " + r), a.updateQuery({
            nsid: String(n),
            path: r
        })), u.assert("dl-web.dropbox.com" === a.getAuthority(), "download_blockserver_url expects a blockserver resource, got: " + o), t.get({
            url: a.toString(),
            error: s
        })
    }

    function f(e) {
        for (var t, o = e.parent_ns_id, r = e.parent_ns_path, s = e.files, a = e.subject_uid, l = e.block_hash, u = new _.URI({
                scheme: "https",
                authority: "dl-web.dropbox.com",
                path: "/zip_batch_by_ns_id",
                query: (t = {}, t._subject_uid = String(a), t.parent_ns_id = String(o), t.parent_ns_path = r || "/", t)
            }).toString(), p = n.default("<form>", {
                action: u,
                method: "post"
            }), d = 0, c = s; d < c.length; d++) {
            var h = c[d],
                f = i.filename(h.fq_path),
                m = r + "/" + f;
            n.default("<input>", {
                name: "ns_paths",
                value: m
            }).appendTo(p)
        }
        n.default("<input>", {
            name: "w",
            value: l
        }).appendTo(p), n.default(document.body).append(p), p.submit(), p.remove()
    }

    function m(e) {
        var t = e.fq_paths,
            n = e.subject_uid,
            r = e.block_hash,
            i = e.parent_path,
            s = e.flat_zip_mode;
        return o.__awaiter(this, void 0, Promise, function() {
            var e, a;
            return o.__generator(this, function(o) {
                switch (o.label) {
                    case 0:
                        return "" === i && (i = "/"), [4, D({
                            block_hash: r,
                            fq_paths: t.slice(),
                            parent_path: i,
                            flat_mode: !!s,
                            subjectUserId: n
                        })];
                    case 1:
                        return e = o.sent(), e.isError ? P(e.error) : (a = e.result.token, x(a)), [2]
                }
            })
        })
    }

    function b() {
        S = !0, C = {}, n.default(window).on("message", v)
    }

    function v(e) {
        var t = _.URI.parse(e.originalEvent.origin);
        if ("https" === t.getScheme() && (y.includes(t.getAuthority()) || t.getAuthority().endsWith("dl.dropboxusercontent.com"))) {
            var o;
            try {
                o = JSON.parse(e.originalEvent.data)
            } catch (e) {
                return
            }
            if (o && o.download_id) {
                var n = C[o.download_id];
                if (null != n && t.getAuthority() === n.origin && e.originalEvent.source === n.iframe[0].contentWindow) {
                    if ("failed" === o.status) {
                        var r = (o.message || T) + '<a target="_blank" rel="noreferrer" href="/help/desktop-web/download-entire-folders">' + d._("More info") + "</a>";
                        c.Notify.error(new p.HTML(r)), n.error && n.error()
                    }
                    g(o.download_id)
                }
            }
        }
    }

    function g(e) {
        var t = C[e];
        null != t && (t.iframe.remove(), delete C[e])
    }

    function w() {
        for (var e = "", t = 1; t <= 4; t++) e += String(Math.random()).split(".")[1];
        return e
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), n = o.__importDefault(n), i = o.__importStar(i), a = o.__importStar(a), l = o.__importStar(l);
    var y = ["dl-web.dropbox.com", "dl.dropboxusercontent.com"],
        T = d._("There was an error downloading your file."),
        S = !1,
        C = {};
    t.get = function(e) {
        var t, o = e.url,
            n = e.error,
            r = e.__do_not_use_expected_domain,
            i = _.URI.parse(o),
            s = r || i.getAuthority();
        if (u.assert(y.includes(s) || s.endsWith("dl.dropboxusercontent.com") || "www.dropbox.com" === s, "attempt to download from a non-blockserver domain"), l.iOS) return u.assert(["", window.location.host].concat(y).includes(i.getAuthority()) || i.getAuthority().endsWith("dl.dropboxusercontent.com"), "blocked attempted download from non-block domain that differs from current domain"), a.unsafeRedirect(o), !1;
        S || b();
        var p = w();
        return i.updateQuery((t = {}, t._download_id = p, t._notify_domain = window.location.host, t)), O({
            downloadUri: i,
            downloadId: p,
            error: n,
            downloadDomain: s,
            onLoad: function() {
                setTimeout(function() {
                    var e = C[p];
                    null != e && (l.chrome && (c.Notify.error(T), e.error && e.error()), g(p))
                }, 100)
            }
        }), !1
    };
    var O = function(e) {
        var t = e.downloadUri,
            o = e.downloadId,
            r = e.error,
            i = e.downloadDomain,
            s = e.onLoad,
            a = n.default("<iframe />", {
                src: String(t)
            }).css("display", "none");
        s && a.on("load", s), C[o] = {
            origin: i,
            error: r,
            iframe: a
        }, n.default("body").append(a), window.setTimeout(function() {
            return g(o)
        }, 9e4)
    };
    t.get_blockserver_link = h, t.zip_batch_by_ns_id = f;
    var P = function(e) {
            var t;
            t = "too_many_files" === e[".tag"] ? d._("Attempted to zip too many files.") : "too_much_data" === e[".tag"] ? d._("Attempted to zip too much data.") : "file_not_found" === e[".tag"] ? d._("File not found.") : "unauthorized_user" === e[".tag"] ? d._("Unauthorized user.") : "unauthorized_namespace" === e[".tag"] ? d._("Unauthorized namespace.") : d._("Zip download failed."), s.Snackbar.fail(t, "zip-download-status")
        },
        D = function(e) {
            var t = e.block_hash,
                n = e.fq_paths,
                i = e.parent_path,
                s = e.flat_mode,
                a = e.subjectUserId;
            return o.__awaiter(this, void 0, Promise, function() {
                var e, l, u;
                return o.__generator(this, function(o) {
                    switch (o.label) {
                        case 0:
                            return o.trys.push([0, 2, , 3]), e = new r.UserApiV2Client, [4, e.ns("browse_zip_downloads").rpc("create_zip_token", {
                                block_hash: t,
                                unnormalized_files: n.slice(),
                                parent_path: i,
                                flat_mode: s
                            }, {
                                subjectUserId: a
                            })];
                        case 1:
                            return l = o.sent(), [2, {
                                result: l,
                                isError: !1
                            }];
                        case 2:
                            return u = o.sent(), [2, {
                                isError: !0,
                                error: {
                                    ".tag": "undefined_error"
                                }
                            }];
                        case 3:
                            return [2]
                    }
                })
            })
        };
    t.get_zip = m;
    var x = function(e) {
        var o = new _.URI({
            scheme: "https",
            authority: "dl-web.dropbox.com",
            path: "/zip_download_get/" + e
        }).toString();
        t.get({
            url: o
        })
    };
    t.init = b
}), define("modules/clean/event_handler", ["require", "exports", "tslib", "jquery"], function(e, t, o, n) {
    "use strict";

    function r(e) {
        var o = e.prototype.componentWillMount,
            n = e.prototype.componentWillUnmount;
        e.prototype.componentWillMount = function() {
            t.EventHandlerMixin.componentWillMount.apply(this), o && "function" == typeof o && o.apply(this)
        }, e.prototype.componentWillUnmount = function() {
            n && "function" == typeof n && n.apply(this), t.EventHandlerMixin.componentWillUnmount.apply(this)
        }
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), n = o.__importDefault(n), t.eventHandler = r, t.EventHandlerMixin = {
        componentWillMount: function() {
            this.events = new i
        },
        componentWillUnmount: function() {
            this.events.removeAll()
        }
    };
    var i = (function() {
        function e() {}
        return e.prototype.on = function(e, t, o, r, i) {
            "string" != typeof o && (i = r, r = o, o = void 0), i && (r = n.default.proxy(r, i)), this.handlers || (this.handlers = []), e = n.default(e), o ? e.on(t, o, r) : e.on(t, r), this.handlers.push({
                element: e,
                event: t,
                selector: o,
                callback: r
            })
        }, e.prototype.removeAll = function() {
            this.handlers && (this.handlers.forEach(function(e) {
                e.selector ? e.element.off(e.event, e.selector, e.callback) : e.element.off(e.event, e.callback)
            }), this.handlers = null)
        }, e
    })();
    t.EventHandler = i
}), define("modules/clean/flux/base_store", ["require", "exports", "modules/clean/flux/dispatcher", "modules/core/exception"], function(e, t, o, n) {
    "use strict";

    function r(e, t) {
        return void 0 !== e && null !== e ? t(e) : void 0
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var i = (function() {
            var e = !1,
                t = [];
            return o.Dispatcher.dispatch_begin = function() {
                    return e = !0
                }, o.Dispatcher.dispatch_end = function() {
                    e = !1;
                    try {
                        return Array.from(t).map(function(e) {
                            return e()
                        })
                    } finally {
                        t.length = 0
                    }
                },
                function(o) {
                    return e ? Array.from(t).includes(o) ? void 0 : t.push(o) : o()
                }
        })(),
        s = (function() {
            function e(e) {
                "function" == typeof this._init && this._init(), this._change_listeners = [], this._dispatcher = e || o.Dispatcher, this.dispatchToken = this._dispatcher.register(this._new_payload_wrapper.bind(this))
            }
            return e.prototype.destructor = function() {
                this._dispatcher.unregister(this.dispatchToken), this.remove_all_change_listeners()
            }, e.prototype.emit_change = function() {
                for (var e = 0, t = this._change_listeners; e < t.length; e++) {
                    i(t[e])
                }
            }, e.prototype.add_change_listener = function(e) {
                n.assert(!this._change_listeners.includes(e), "adding duplicate change listener not allowed"), this._change_listeners.push(e)
            }, e.prototype.remove_change_listener = function(e) {
                this._change_listeners = this._change_listeners.filter(function(t) {
                    return t !== e
                })
            }, e.prototype.remove_all_change_listeners = function() {
                this._change_listeners.length = 0
            }, e.prototype._new_payload_wrapper = function(e) {
                r(null != e ? e.action : void 0, function(e) {
                    return e.type
                }) === this.constructor.WIPE_TYPE && "function" == typeof this._init && this._init(), this._new_payload(e)
            }, e.prototype._new_payload = function(e) {
                throw new Error("Abstract method - must be implemented")
            }, e.WIPE_TYPE = "WIPE_ALL", e
        })();
    t.Store = s
}), define("modules/clean/fuzzy", ["require", "exports"], function(e, t) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var o = {
        simpleFilter: function(e, t) {
            return t.filter(function(t) {
                return o.test(e, t)
            })
        },
        test: function(e, t) {
            return null !== o.match(e, t)
        },
        match: function(e, t, o) {
            o = o || {};
            var n = 0,
                r = [],
                i = t.length,
                s = 0,
                a = 0,
                l = o.pre || "",
                u = o.post || "",
                p = o.caseSensitive && t || t.toLowerCase(),
                d = void 0;
            e = o.caseSensitive && e || e.toLowerCase();
            for (var c = 0, _ = [], h = 0, f = 0; c < i;) d = t[c], p[c] === e[n] ? (d = l + d + u, f ? f += 1 : (h = c, f = 1), n += 1, a += 1 + a) : (a = 0, f && (_.push([h, f]), f = 0)), s += a, r[r.length] = d, c++;
            return f && _.push([h, f]), n === e.length ? {
                highlighted: _,
                rendered: r.join(""),
                score: s
            } : null
        },
        filter: function(e, t, o) {
            void 0 === o && (o = {});
            var n = [],
                r = this._reduce.bind(this, e, o);
            return t.reduce(r, n).sort(this._sort)
        },
        _reduce: function(e, t, n, r, i) {
            var s = r;
            t.extract && (s = t.extract(r));
            var a = o.match(e, s, t);
            return null != a && n.push({
                string: a.rendered,
                score: a.score,
                index: i,
                original: r
            }), n
        },
        _sort: function(e, t) {
            var o = t.score - e.score;
            return o ? o : e.index - t.index
        }
    };
    t.default = o
}), define("modules/clean/pagelet_logger", ["require", "exports", "tslib", "modules/core/browser", "modules/clean/js_client_stopwatch", "modules/clean/web_timing_logger"], function(e, t, o, n, r, i) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), i = o.__importStar(i);
    var s = (function() {
        function e(e, t, o, i) {
            var s = this;
            if (void 0 === t && (t = []), void 0 === o && (o = !1), void 0 === i && (i = {}), this.pageletName = e, o) {
                var a = n.performance();
                a && a.now && (this.performance = a, this.stopwatchName = this.pageletName + "_client_logging", r.JSStopwatch.create_stopwatch_if_not_exist(this.stopwatchName))
            } else this.stopwatchName = void 0;
            this.ttiComponents = [], t.map(function(e) {
                s.ttiComponents.push({
                    name: e,
                    isReady: !1
                })
            }), this.ttiMarked = !1, this.extraColumns = i
        }
        return e.prototype.componentReady = function(e) {
            if (!this.ttiMarked) {
                for (var t = !1, o = 0; o < this.ttiComponents.length; ++o) this.ttiComponents[o].name !== e || this.ttiComponents[o].isReady ? this.ttiComponents[o].isReady || (t = !0) : (this.ttiComponents[o].isReady = !0, r.JSStopwatch.recordTrace(e + "_since_start", {
                    stopwatchName: this.stopwatchName
                }), console.timeStamp && console.timeStamp(e + " TTI"));
                t || (i.mark_time_to_interactive(this.extraColumns), this.ttiMarked = !0)
            }
        }, Object.defineProperty(e.prototype, "ttiLogged", {
            get: function() {
                return this.ttiMarked
            },
            enumerable: !0,
            configurable: !0
        }), e
    })();
    t.PageletLogger = s
}), define("modules/clean/react/bubble_dropdown_v2", ["require", "exports", "tslib", "external/classnames", "react", "external/react-dom", "external/prop-types", "external/lodash", "jquery", "modules/clean/react/css", "modules/clean/react/overlay"], function(e, t, o, n, r, i, s, a, l, u, p) {
    "use strict";
    var d;
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), n = o.__importDefault(n), r = o.__importDefault(r), i = o.__importStar(i), s = o.__importStar(s), a = o.__importStar(a), l = o.__importDefault(l), t.BubbleDropdownPositions = p.PositionedOverlay.POSITIONS, t.POSITION_TO_CSS_CLASS_MAP = (d = {}, d[t.BubbleDropdownPositions.TOP_LEFT] = "top-left", d[t.BubbleDropdownPositions.TOP] = "top", d[t.BubbleDropdownPositions.TOP_RIGHT] = "top-right", d[t.BubbleDropdownPositions.LEFT_TOP] = "left-top", d[t.BubbleDropdownPositions.LEFT] = "left", d[t.BubbleDropdownPositions.LEFT_BOTTOM] = "left-bottom", d[t.BubbleDropdownPositions.RIGHT_TOP] = "right-top", d[t.BubbleDropdownPositions.RIGHT] = "right", d[t.BubbleDropdownPositions.RIGHT_BOTTOM] = "right-bottom", d[t.BubbleDropdownPositions.BOTTOM_LEFT] = "bottom-left", d[t.BubbleDropdownPositions.BOTTOM] = "bottom", d[t.BubbleDropdownPositions.BOTTOM_RIGHT] = "bottom-right", d[t.BubbleDropdownPositions.TOP_ALIGN_LEFT] = "top-align-left", d[t.BubbleDropdownPositions.TOP_ALIGN_RIGHT] = "top-align-right", d[t.BubbleDropdownPositions.LEFT_ALIGN_TOP] = "left-align-top", d[t.BubbleDropdownPositions.LEFT_ALIGN_BOTTOM] = "left-align-bottom", d[t.BubbleDropdownPositions.RIGHT_ALIGN_TOP] = "right-align-top", d[t.BubbleDropdownPositions.RIGHT_ALIGN_BOTTOM] = "right-align-bottom", d[t.BubbleDropdownPositions.BOTTOM_ALIGN_LEFT] = "bottom-align-left", d[t.BubbleDropdownPositions.BOTTOM_ALIGN_RIGHT] = "bottom-align-right", d);
    var c = (function(e) {
        function u() {
            var o = null !== e && e.apply(this, arguments) || this;
            return o._getArrowStyleFromPosition = function() {
                return t.POSITION_TO_CSS_CLASS_MAP[o.props.position]
            }, o._adjustArrowPosition = function(e) {
                if (void 0 === e && (e = !1), o.props.shouldShowArrow) {
                    var n = l.default(i.findDOMNode(o.refs.bubbleArrowContainer));
                    switch (o.props.position) {
                        case t.BubbleDropdownPositions.TOP_ALIGN_LEFT:
                        case t.BubbleDropdownPositions.BOTTOM_ALIGN_LEFT:
                            n.css("left", o.props.targetNode.offsetWidth / 2);
                            break;
                        case t.BubbleDropdownPositions.TOP_ALIGN_RIGHT:
                        case t.BubbleDropdownPositions.BOTTOM_ALIGN_RIGHT:
                            n.css("right", o.props.targetNode.offsetWidth / 2);
                            break;
                        case t.BubbleDropdownPositions.LEFT_ALIGN_TOP:
                        case t.BubbleDropdownPositions.RIGHT_ALIGN_TOP:
                            n.css("top", o.props.targetNode.offsetHeight / 2);
                            break;
                        case t.BubbleDropdownPositions.LEFT_ALIGN_BOTTOM:
                        case t.BubbleDropdownPositions.RIGHT_ALIGN_BOTTOM:
                            n.css("bottom", o.props.targetNode.offsetHeight / 2)
                    }
                    return (!e || e && o.props.shouldArrowDecrement) && (o.props.verticalArrowOffset || o.props.horizontalArrowOffset) && (o._getArrowStyleFromPosition().match(/^(top|bottom)/) && n.css("left", "-=" + o.props.horizontalArrowOffset), o._getArrowStyleFromPosition().match(/^(left|right)/)) ? n.css("top", "-=" + o.props.verticalArrowOffset) : void 0
                }
            }, o
        }
        return o.__extends(u, e), u.prototype.componentDidMount = function() {
            return this._adjustArrowPosition()
        }, u.prototype.componentDidUpdate = function() {
            return this._adjustArrowPosition(!0)
        }, u.prototype.render = function() {
            return r.default.createElement("div", {
                className: this.props.isMaestroDesign ? "maestro" : ""
            }, r.default.createElement("div", {
                ref: "dropdown",
                className: n.default("bubble-dropdown-v2", "bubble-dropdown-v2--" + this._getArrowStyleFromPosition(), this.props.className),
                "aria-labelledby": this.props.targetNode.id
            }, this.props.children, this.props.shouldShowArrow ? r.default.createElement("div", {
                ref: "bubbleArrowContainer",
                className: "bubble-arrow-container"
            }, r.default.createElement("div", {
                className: "bubble-arrow-border"
            }), r.default.createElement("div", {
                className: "bubble-arrow"
            })) : null))
        }, u.displayName = "BubbleDropdownContents", u.propTypes = {
            targetNode: s.instanceOf(HTMLElement).isRequired,
            position: s.oneOf(a.values(t.BubbleDropdownPositions)).isRequired,
            verticalArrowOffset: s.number,
            horizontalArrowOffset: s.number,
            shouldShowArrow: s.bool,
            shouldArrowDecrement: s.bool,
            className: s.string,
            isMaestroDesign: s.bool
        }, u.defaultProps = {
            verticalArrowOffset: 0,
            horizontalArrowOffset: 0,
            shouldShowArrow: !0,
            shouldArrowDecrement: !0,
            className: null,
            isMaestroDesign: !1
        }, u
    })(r.default.Component);
    t.BubbleDropdownContents = c;
    var _ = (function(e) {
        function n() {
            var t = null !== e && e.apply(this, arguments) || this;
            return t.state = {
                isVisible: !1,
                targetNode: null,
                shouldAutoFocusDropdownContent: !1
            }, t.updateTargetNode = function() {
                var e = i.findDOMNode(t.refs.bubbleDropdownContainer).childNodes[0];
                return e && (e.setAttribute("aria-expanded", t.state.isVisible), e.hasAttribute("id") || e.setAttribute("id", "bubbleDropdownTarget-" + a.uniqueId())), t.setState({
                    targetNode: e
                })
            }, t.showDropdown = function() {
                if (!t.props.disabled) return t.setState({
                    isVisible: !0
                })
            }, t.hideDropdown = function() {
                if (!t.props.disabled) return t.setState({
                    isVisible: !1
                })
            }, t._handleClick = function(e) {
                var o = !(e.clientX > 0 && e.clientY > 0);
                return t.setState({
                    shouldAutoFocusDropdownContent: o
                }, t._toggle)
            }, t._toggle = function() {
                if (!t.props.disabled) return t.setState({
                    isVisible: !t.state.isVisible
                })
            }, t._hasShown = function() {
                if (t.hasOnShowNotBeenCalledSinceLastOpened) return t.state.targetNode.setAttribute("aria-expanded", !0), t.props.onShowDropdown(), t.hasOnShowNotBeenCalledSinceLastOpened = !1
            }, t._hasHidden = function() {
                return t.state.targetNode.setAttribute("aria-expanded", !1), t.props.onHideDropdown()
            }, t
        }
        return o.__extends(n, e), n.prototype.componentWillMount = function() {
            return this.hasOnShowNotBeenCalledSinceLastOpened = !1
        }, n.prototype.componentDidMount = function() {
            return this.updateTargetNode()
        }, n.prototype.componentWillUpdate = function(e, t) {
            if ((!this.state.isVisible || this.props.disabled) && t.isVisible && !e.disabled) return this.hasOnShowNotBeenCalledSinceLastOpened = !0
        }, n.prototype.componentDidUpdate = function(e, t) {
            if (t.isVisible !== this.state.isVisible && (this.state.isVisible || this._hasHidden()), i.findDOMNode(this.refs.bubbleDropdownContainer).childNodes[0] !== this.state.targetNode) return this.updateTargetNode()
        }, n.prototype.render = function() {
            var e = this,
                t = this.state.targetNode;
            return r.default.createElement("div", {
                className: "bubble-dropdown-v2-container",
                onClick: this._handleClick,
                ref: "bubbleDropdownContainer"
            }, this.props.targetButton, this.state.isVisible && !this.props.disabled && t ? r.default.createElement(p.PositionedOverlay, {
                targetNode: t,
                isTargetPositionFixed: this.props.targetFixed,
                shouldTrapKeyboardFocus: this.props.shouldTrapKeyboardFocus,
                shouldAutoFocusOverlayContent: this.state.shouldAutoFocusDropdownContent,
                position: this.props.position,
                positionOffset: {
                    horizontal: this.props.horizontalDisplacement,
                    vertical: this.props.verticalDisplacement
                },
                onRendered: function() {
                    return e._hasShown()
                },
                onBlur: function() {
                    return e.hideDropdown()
                }
            }, r.default.createElement(c, {
                ref: "bubbleDropdownContents",
                targetNode: t,
                position: this.props.position,
                verticalArrowOffset: this.props.verticalDisplacement,
                horizontalArrowOffset: this.props.horizontalDisplacement,
                shouldShowArrow: this.props.shouldShowArrow,
                className: this.props.className,
                shouldArrowDecrement: this.props.shouldArrowDecrement,
                isMaestroDesign: this.props.isMaestroDesign
            }, this.props.children)) : void 0)
        }, n.displayName = "BubbleDropdown", n.propTypes = {
            targetButton: function(e, t, o) {
                if (null == e.targetButton || "button" !== e.targetButton.type) return new Error("BubbleDropdown's targetButton must be a `<button>`")
            },
            position: s.oneOf(a.values(t.BubbleDropdownPositions)).isRequired,
            targetFixed: s.bool,
            verticalDisplacement: s.number,
            horizontalDisplacement: s.number,
            className: s.string,
            disabled: s.bool,
            shouldShowArrow: s.bool,
            shouldTrapKeyboardFocus: s.bool,
            onShowDropdown: s.func,
            onHideDropdown: s.func,
            shouldArrowDecrement: s.bool,
            isMaestroDesign: s.bool
        }, n.defaultProps = {
            targetFixed: !1,
            verticalDisplacement: 0,
            horizontalDisplacement: 0,
            className: null,
            disabled: !1,
            shouldShowArrow: !0,
            shouldTrapKeyboardFocus: !1,
            onShowDropdown: a.noop,
            onHideDropdown: a.noop,
            shouldArrowDecrement: !0,
            isMaestroDesign: !1
        }, n.POSITIONS = t.BubbleDropdownPositions, n
    })(r.default.Component);
    t.BubbleDropdown = u.requireCssWithComponent(_, ["/static/css/components/bubble_dropdown_v2-vflhhYVBe.css"])
}), define("modules/clean/react/bubble_menu", ["require", "exports", "tslib", "external/classnames", "external/create-react-class", "react", "external/react-dom", "external/react-dom-factories", "external/prop-types", "external/lodash", "jquery", "modules/clean/keycode", "modules/clean/react/bubble_dropdown_v2"], function(e, t, o, n, r, i, s, a, l, u, p, d, c) {
    "use strict";

    function _(e, t) {
        return void 0 !== e && null !== e ? t(e) : void 0
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), n = o.__importDefault(n), r = o.__importDefault(r), i = o.__importDefault(i), s = o.__importStar(s), a = o.__importStar(a), l = o.__importStar(l), u = o.__importStar(u), p = o.__importDefault(p);
    var h = i.default.createElement,
        f = function(e, t, o) {
            var n = e[t].type;
            if (![b, v, g].includes(n)) {
                var r = (null != n ? n.displayName : void 0) || e[t];
                return new Error("Expected menu items to be instances of BubbleMenuItem, not " + r + ".")
            }
            return null
        },
        m = {
            DEFAULT: 1,
            CHECKBOX: 2,
            RADIO: 3
        },
        b = (function(e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t._handleMouseEnter = function(e) {
                    if (null != t.refs.item) return p.default(s.findDOMNode(t.refs.item)).closest(".bubble-menu").removeClass("bubble-menu--keyboard"), t.props.onMouseEnter(e)
                }, t._handleClick = function(e) {
                    return t.props.disabled ? (e.preventDefault(), e.stopPropagation()) : "#" === t.props.href && (e.preventDefault(), t.props.onClick(e), t.props.closeOnClick) ? t.props.closeFunc() : void 0
                }, t._getRole = function() {
                    switch (t.props.itemType) {
                        case m.CHECKBOX:
                            return "menuitemcheckbox";
                        case m.RADIO:
                            return "menuitemradio";
                        default:
                            return "menuitem"
                    }
                }, t._getAriaChecked = function() {
                    switch (t.props.itemType) {
                        case m.CHECKBOX:
                        case m.RADIO:
                            return t.props.checked || !1;
                        default:
                            return null
                    }
                }, t.renderContents = function() {
                    var e = {
                        "bubble-menu-item": !0,
                        "bubble-menu-item--disabled": t.props.disabled,
                        "bubble-menu-item--checked": t.props.checked
                    };
                    return a.a({
                        ref: "item",
                        role: t._getRole(),
                        className: n.default(e),
                        href: t.props.href,
                        target: t.props.target,
                        onClick: t._handleClick,
                        onMouseEnter: t._handleMouseEnter,
                        onMouseLeave: t.props.onMouseLeave,
                        "aria-disabled": t.props.disabled,
                        "aria-checked": t._getAriaChecked()
                    }, t.props.children)
                }, t
            }
            return o.__extends(t, e), t.prototype.render = function() {
                return a.li({
                    role: "presentation",
                    className: n.default("bubble-menu-item-wrapper", this.props.className)
                }, this.renderContents())
            }, t.displayName = "BubbleMenuItem", t.propTypes = {
                onClick: l.func,
                href: l.string,
                target: l.string,
                disabled: l.bool,
                closeOnClick: l.bool,
                closeFunc: l.func,
                className: l.string,
                onMouseEnter: l.func,
                onMouseLeave: l.func,
                itemType: l.oneOf(u.values(m)),
                checked: l.bool
            }, t.defaultProps = {
                onClick: u.noop,
                href: "#",
                target: null,
                disabled: !1,
                closeOnClick: !0,
                closeFunc: u.noop,
                className: null,
                onMouseEnter: u.noop,
                onMouseLeave: u.noop,
                itemType: m.DEFAULT,
                checked: null
            }, t.TYPES = m, t
        })(i.default.Component);
    t.BubbleMenuItem = b;
    var v = (function(e) {
        function t() {
            return null !== e && e.apply(this, arguments) || this
        }
        return o.__extends(t, e), t.prototype.render = function() {
            return a.li({
                role: "separator",
                className: this.props.className
            }, this.props.children)
        }, t.displayName = "BubbleMenuSeparator", t.propTypes = {
            className: l.string
        }, t.defaultProps = {
            className: "bubble-menu-item-separator"
        }, t
    })(i.default.Component);
    t.BubbleMenuSeparator = v;
    var g = r.default({
        displayName: "BubbleMenuItemGroup",
        props: {
            items: l.arrayOf(f).isRequired,
            closeFunc: l.func
        },
        render: function() {
            var e = this;
            return 0 === this.props.items.length ? null : a.li({
                className: "bubble-menu-item-group",
                role: "presentation"
            }, a.ul({
                className: "bubble-menu-item-group u-unlist u-trim-padding",
                role: "group"
            }, Array.from(this.props.items).map(function(t, o) {
                return i.default.cloneElement(t, {
                    closeFunc: e.props.closeFunc,
                    key: null != t.key ? t.key : o
                })
            })))
        }
    });
    t.BubbleMenuItemGroup = g;
    var w = (function(e) {
        function t() {
            var t = null !== e && e.apply(this, arguments) || this;
            return t.showMenu = function() {
                return _(null != t.refs.bubble ? t.refs.bubble.getWrappedComponent() : void 0, function(e) {
                    return e.showDropdown()
                })
            }, t.hideMenu = function() {
                return _(null != t.refs.bubble ? t.refs.bubble.getWrappedComponent() : void 0, function(e) {
                    return e.hideDropdown()
                })
            }, t._onShowBubbleMenu = function() {
                if (null != t.refs.menu && null != t.refs.bubble) return t.$menu = p.default(s.findDOMNode(t.refs.menu)), t.$menuitems = t.$menu.find('*[role="menuitem"],*[role="menuitemcheckbox"],*[role="menuitemradio"]'), t.$menu.addClass("bubble-menu--keyboard"), "function" == typeof t.props.onShowDropdown ? t.props.onShowDropdown() : void 0
            }, t._onKeyDown = function(e) {
                return t.$menu.addClass("bubble-menu--keyboard"), e.keyCode === d.KeyCode.DOWN ? (t._focusNext(e.target), e.preventDefault(), e.stopPropagation()) : e.keyCode === d.KeyCode.UP ? (t._focusPrevious(e.target), e.preventDefault(), e.stopPropagation()) : void 0
            }, t._onKeyPress = function(e) {
                t.$menu.addClass("bubble-menu--keyboard");
                var o = null != e.which ? e.which : e.keyCode,
                    n = String.fromCharCode(o).toLowerCase();
                return (function() {
                    for (var o = [], r = 0; r < t.$menuitems.length; r++) {
                        var i = t.$menuitems[r];
                        if (_(null != i.textContent ? i.textContent[0] : void 0, function(e) {
                                return e.toLowerCase()
                            }) === n && r > t.$menuitems.index(e.target)) {
                            i.focus(), e.stopPropagation();
                            break
                        }
                        o.push(void 0)
                    }
                    return o
                })()
            }, t._focusPrevious = function(e) {
                var o = t.$menuitems.index(e);
                return o = [-1, 0].includes(o) ? t.$menuitems.length - 1 : o - 1, t.$menuitems.get(o).focus()
            }, t._focusNext = function(e) {
                var o = t.$menuitems.index(e);
                return o = [-1, t.$menuitems.length - 1].includes(o) ? 0 : o + 1, t.$menuitems.get(o).focus()
            }, t
        }
        return o.__extends(t, e), t.prototype.render = function() {
            var e, t = this;
            return this.props.targetButton && (e = h(y, {
                ref: "targetButton",
                childProps: {
                    "aria-haspopup": !0
                }
            }, this.props.targetButton)), h(c.BubbleDropdown, u.assignIn({}, this.props, {
                ref: "bubble",
                shouldTrapKeyboardFocus: !0,
                onShowDropdown: this._onShowBubbleMenu,
                targetButton: e
            }), a.div({}, this.props.headerContent), a.ul({
                role: "menu",
                ref: "menu",
                className: "bubble-menu",
                onKeyDown: this._onKeyDown,
                onKeyPress: this._onKeyPress
            }, Array.from(this.props.items).map(function(e, o) {
                return i.default.cloneElement(e, {
                    closeFunc: t.hideMenu,
                    key: null != e.key ? e.key : o
                })
            })))
        }, t.displayName = "BubbleMenu", t.POSITIONS = c.BubbleDropdown.POSITIONS, t.propTypes = u.assignIn({}, c.BubbleDropdown.propTypes, {
            headerContent: l.element,
            items: l.arrayOf(f).isRequired,
            onShowDropdown: l.func,
            targetButton: function(e, t, o) {
                if ("button" !== (null != e.targetButton ? e.targetButton.type : void 0)) return new Error("BubbleDropdown's targetButton must be a `<button>`, found: " + e[t].type)
            }
        }), t
    })(i.default.Component);
    t.BubbleMenu = w;
    var y = (function(e) {
        function t() {
            return null !== e && e.apply(this, arguments) || this
        }
        return o.__extends(t, e), t.prototype.render = function() {
            return i.default.cloneElement(this.props.children, this.props.childProps)
        }, t.displayName = "BubbleMenuTargetButtonWrapper", t.propTypes = {
            childProps: l.object
        }, t
    })(i.default.Component)
}), define("modules/clean/react/hidden", ["require", "exports", "tslib", "react", "external/react-dom-factories", "external/prop-types", "external/lodash"], function(e, t, o, n, r, i, s) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), n = o.__importDefault(n), r = o.__importStar(r), i = o.__importStar(i), s = o.__importStar(s);
    var a = n.default.createElement,
        l = (function(e) {
            function t() {
                return null !== e && e.apply(this, arguments) || this
            }
            return o.__extends(t, e), t.prototype.render = function() {
                return r.div({
                    className: "hidden-option"
                }, this.props.children)
            }, t.displayName = "Hidden", t
        })(n.default.Component);
    t.Hidden = l;
    var u = (function(e) {
        function t() {
            return null !== e && e.apply(this, arguments) || this
        }
        return o.__extends(t, e), t.prototype.render = function() {
            return a(l, {}, r.select(s.omit(this.props, "options"), Array.from(this.props.options).map(function(e) {
                return r.option({
                    key: e,
                    label: e,
                    value: e
                })
            })))
        }, t.displayName = "HiddenSelect", t.propTypes = {
            options: i.arrayOf(i.any).isRequired,
            value: i.any
        }, t
    })(n.default.Component);
    t.HiddenSelect = u
}), define("modules/clean/react/rebrand/elements/rebrand_buttons", ["require", "exports", "tslib", "react", "external/classnames", "modules/clean/react/css"], function(e, t, o, n, r, i) {
    "use strict";

    function s(e, t, o, n, i, s) {
        var a;
        void 0 === e && (e = "primary"), void 0 === t && (t = !1), void 0 === o && (o = "small"), void 0 === n && (n = null), void 0 === i && (i = null), void 0 === s && (s = !1);
        var l = "button--" + o,
            u = "";
        n && (u = l + "--" + n);
        var p = "button--" + e,
            d = "";
        return t && (d = p + "--disabled"), r.default((a = {}, a["button--with-border"] = "secondary" === e && s, a), "button", p, l, u, i, d)
    }

    function a(e) {
        e.preventDefault()
    }

    function l() {}
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), n = o.__importDefault(n), r = o.__importDefault(r);
    var u = (function(e) {
        function t() {
            return null !== e && e.apply(this, arguments) || this
        }
        return o.__extends(t, e), t.prototype.render = function() {
            var e = this.props,
                t = e.importance,
                o = e.disabled,
                r = e.size,
                i = e.width,
                u = e.className,
                p = e.withBorder,
                d = e.trackingId,
                c = s(t, o, r, i, u, p);
            return n.default.createElement("a", {
                href: this.props.href,
                className: c,
                onClick: o ? a : l,
                "aria-disabled": o,
                "data-trackingid": d
            }, this.props.children)
        }, t
    })(n.default.Component);
    t.RebrandButtonAnchorElement = u, t.RebrandButtonAnchor = i.requireCssWithComponent(u, ["/static/css/rebrand/elements/button-vflfhcO4p.css"]);
    var p = (function(e) {
        function t() {
            return null !== e && e.apply(this, arguments) || this
        }
        return o.__extends(t, e), t.prototype.render = function() {
            var e = this.props,
                t = e.importance,
                o = e.disabled,
                r = e.size,
                i = e.width,
                a = e.className,
                l = e.onClick,
                u = e.type,
                p = s(t, o, r, i, a);
            return n.default.createElement("button", {
                className: p,
                onClick: l,
                disabled: o,
                type: u || "button",
                "aria-label": this.props.ariaLabel
            }, this.props.children)
        }, t
    })(n.default.Component);
    t.RebrandButtonElement = p, t.RebrandButton = i.requireCssWithComponent(p, ["/static/css/rebrand/elements/button-vflfhcO4p.css"])
}), define("modules/clean/react/snackbar", ["require", "exports", "tslib", "external/react-dom", "react", "spectrum/snackbar", "modules/clean/analytics", "modules/clean/react/async/loadable", "modules/clean/react/css", "modules/clean/web_timing_logger", "modules/core/i18n"], function(e, t, o, n, r, i, s, a, l, u, p) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), n = o.__importStar(n), r = o.__importDefault(r);
    var d = a.Loadable({
            loading: i.Snackbar,
            loader: function() {
                return u.waitForTTI().then(function() {
                    return new Promise(function(t, o) {
                        e(["premium-growth/rich-confirmation"], t, o)
                    }).then(o.__importStar)
                }).then(function(e) {
                    return e.RichSnackBar
                })
            }
        }),
        c = l.requireCssWithComponent(d, ["/static/js/premium-growth/index.web-vflb9JTu1.css"]),
        _ = function(e) {
            var t = e.richSnackBarProps,
                n = o.__rest(e, ["richSnackBarProps"]);
            return t ? r.default.createElement(c, o.__assign({}, n, t)) : r.default.createElement(i.Snackbar, o.__assign({}, n))
        },
        h = (function(e) {
            function t(o) {
                var n = e.call(this, o) || this;
                return n.handleTimeout = function() {
                    n.props.onTimeout && n.props.onTimeout()
                }, n.handleTimeoutForCompleteVariant = function() {
                    var e = n.props,
                        t = e.variant,
                        o = e.onTimeout;
                    o && "complete" === t && o()
                }, n.handleProgressLoop = function() {
                    n.setState(function(e) {
                        return {
                            progress: (e.progress + t.LOOP_UPDATE_STEP) % (t.MAX_PROGRESS + 1)
                        }
                    })
                }, n.state = {
                    progress: 0,
                    useRichSnackbar: !!o.richSnackBarProps
                }, n
            }
            return o.__extends(t, e), t.prototype.componentDidUpdate = function(e) {
                var o = e.path,
                    n = e.variant,
                    r = e.syncProgressLoop;
                this.props.richSnackBarProps && void 0 !== o && o !== this.props.path && this.setState({
                    useRichSnackbar: !1
                }), this.props.richSnackBarProps && this.props.variant !== n && "sync" === this.props.variant && this.setState({
                    useRichSnackbar: !0
                }), f.manager && (clearTimeout(this.timer), this.props.timeoutDelayMs && (this.timer = setTimeout(this.handleTimeout, this.props.timeoutDelayMs)), r ? this.progressLoop || (this.progressLoop = setInterval(this.handleProgressLoop, t.LOOP_UPDATE_RATE)) : clearInterval(this.progressLoop))
            }, t.prototype.componentDidMount = function() {
                var e = this.props,
                    o = e.syncProgressLoop,
                    n = e.timeoutDelayMs,
                    r = e.timeoutDelayMsForCompleteVariant;
                r && (this.timer = setTimeout(this.handleTimeoutForCompleteVariant, r)), n && (this.timer = setTimeout(this.handleTimeout, n)), o && (this.progressLoop = setInterval(this.handleProgressLoop, t.LOOP_UPDATE_RATE)), this.props.onShown && this.props.onShown()
            }, t.prototype.componentWillUnmount = function() {
                this.timer && clearTimeout(this.timer), this.progressLoop && clearInterval(this.progressLoop), this.props.onClosed && this.props.onClosed()
            }, t.prototype.render = function() {
                var e = this.props,
                    o = e.title,
                    n = e.variant,
                    s = e.actionButtonText,
                    a = e.closeButtonText,
                    l = e.externalProgress,
                    u = e.richSnackBarProps,
                    p = Math.min(l || this.state.progress, t.MAX_PROGRESS);
                return r.default.createElement(_, {
                    progress: p,
                    variant: n,
                    title: o,
                    richSnackBarProps: this.state.useRichSnackbar ? u : void 0
                }, this.props.children, s && r.default.createElement(i.SnackbarAction, {
                    onClick: this.props.onActionClick
                }, s), a && r.default.createElement(i.SnackbarAction, {
                    onClick: this.props.onCloseClick
                }, a))
            }, t.displayName = "ControlledSnackbar", t.LOOP_UPDATE_RATE = 16, t.LOOP_UPDATE_STEP = .2, t.MAX_PROGRESS = 100, t.defaultProps = {
                syncProgressLoop: !1
            }, t
        })(r.default.Component);
    t.ControlledSnackbarComponent = h, t.ControlledSnackbar = l.requireCssWithComponent(h, ["/static/css/snackbar-vflDXRizz.css", "/static/css/spectrum/index.web-vflagwTbb.css"]);
    var f = (function(e) {
        function i() {
            var t = null !== e && e.apply(this, arguments) || this;
            return t.handleActionClick = function() {
                var e = t.props.onActionClick;
                e && e()
            }, t.handleCloseClick = function() {
                var e = t.props,
                    o = e.onCloseClick,
                    n = e.id;
                t.props.richSnackBarProps && s.TeamsWebActionsLogger.log("edu_rich_confirmation_clk_close", t.props.richSnackBarProps.extraLogInfo), i.close(n), o && o()
            }, t.handleTimeout = function() {
                var e = t.props,
                    o = e.onTimeout,
                    n = e.id;
                i.close(n), o && o()
            }, t
        }
        return o.__extends(i, e), i.show = function(e) {
            if (i.manager) return void i.manager.show(e.props);
            var t = i.getOrCreateContainer();
            i.close(), n.render(e, t)
        }, i.update = function(e) {
            if (i.manager) return void i.manager.update(e.props);
            var t = i.getOrCreateContainer();
            n.render(e, t)
        }, i.close = function(e) {
            if (i.manager) return void i.manager.close(e);
            var t = i.getOrCreateContainer();
            n.unmountComponentAtNode(t)
        }, i.generic = function(e, t) {
            return i.show(r.default.createElement(i, {
                closeButtonText: p._("Close"),
                timeoutDelayMs: 5e3,
                title: e,
                variant: "generic",
                id: t
            }))
        }, i.sync = function(e, t, o) {
            return i.show(r.default.createElement(i, {
                syncProgressLoop: t,
                timeoutDelayMs: void 0,
                title: e,
                variant: "sync",
                id: o
            }))
        }, i.complete = function(e, t) {
            return i.show(r.default.createElement(i, {
                closeButtonText: p._("Close"),
                timeoutDelayMs: 5e3,
                title: e,
                variant: "complete",
                id: t
            }))
        }, i.completeSticky = function(e, t) {
            return i.show(r.default.createElement(i, {
                closeButtonText: p._("Close"),
                timeoutDelayMs: void 0,
                title: e,
                variant: "complete",
                id: t
            }))
        }, i.completeWithUndo = function(e, t, o) {
            return i.show(r.default.createElement(i, {
                title: e,
                variant: "complete",
                actionButtonText: p._("Undo"),
                onActionClick: t,
                closeButtonText: p._("Close"),
                timeoutDelayMs: 5e3,
                id: o
            }))
        }, i.warn = function(e, t) {
            return i.show(r.default.createElement(i, {
                closeButtonText: p._("Close"),
                timeoutDelayMs: 5e3,
                title: e,
                variant: "warn",
                id: t
            }))
        }, i.fail = function(e, t) {
            return i.show(r.default.createElement(i, {
                closeButtonText: p._("Close"),
                timeoutDelayMs: 5e3,
                title: e,
                variant: "fail",
                id: t
            }))
        }, i.getOrCreateContainer = function() {
            var e = document.getElementById(i.SNACKBAR_ROOT_ID);
            return e || (e = document.createElement("div"), e.id = i.SNACKBAR_ROOT_ID, e.className = i.SNACKBAR_CONTAINER_CLASSNAME, document.body.insertBefore(e, document.body.firstChild)), e
        }, i.prototype.render = function() {
            return r.default.createElement(t.ControlledSnackbar, o.__assign({}, this.props, {
                onActionClick: this.handleActionClick,
                onCloseClick: this.handleCloseClick,
                onTimeout: this.handleTimeout
            }))
        }, i.SNACKBAR_ROOT_ID = "react-snackbar-root", i.SNACKBAR_CONTAINER_CLASSNAME = "snackbar-container", i.snackbarTypes = ["generic", "sync", "complete", "warn", "fail"], i
    })(r.default.Component);
    t.Snackbar = f
}), define("modules/clean/react/tooltip", ["require", "exports", "tslib", "react", "external/react-dom", "external/react-dom-factories", "external/prop-types", "external/lodash", "jquery"], function(e, t, o, n, r, i, s, a, l) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), n = o.__importDefault(n), r = o.__importStar(r), i = o.__importStar(i), s = o.__importStar(s), a = o.__importStar(a), l = o.__importDefault(l);
    var u, p = {
        TOP: 0,
        BOTTOM: 1,
        LEFT: 2,
        RIGHT: 3,
        BOTTOM_RIGHT: 4
    };
    t.TooltipPosition = p;
    var d = function() {
            var e = "tooltip-holder",
                t = l.default("#" + e);
            return t.length || (t = l.default("<div />").attr({
                id: e,
                style: "z-index: " + 1e4
            }).prependTo("body")), t[0]
        },
        c = function() {
            var e = d();
            r.unmountComponentAtNode(e), e.parentNode.removeChild(e)
        },
        _ = function(e) {
            var t = e.offset(),
                o = e.outerWidth(),
                n = e.outerHeight();
            return {
                left_x: t.left,
                right_x: t.left + o,
                top_y: t.top,
                bottom_y: t.top + n,
                width: o,
                height: n
            }
        },
        h = (function(e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t._centerAndShow = function() {
                    var e = l.default(r.findDOMNode(t.refs.tooltip)),
                        o = t.props.targetElementDimensions,
                        n = _(e),
                        i = l.default(window).scrollTop(),
                        s = l.default(window).scrollLeft();
                    if ([p.TOP, p.BOTTOM].includes(t.props.position)) {
                        var a = l.default(window).width(),
                            u = o.left_x + o.width / 2 - n.width / 2 - s;
                        u < 0 ? u = 0 : u + n.width > a && (u = a - n.width - 7), e.css("left", u + "px")
                    } else if ([p.LEFT, p.RIGHT].includes(t.props.position)) {
                        var d = l.default(window).height(),
                            c = o.top_y + o.height / 2 - n.height / 2 - i;
                        c < 0 ? c = 0 : c + n.height > d && (c = d - n.height - 7), e.css("top", c + "px")
                    }
                    return e.show()
                }, t
            }
            return o.__extends(t, e), t.prototype.render = function() {
                var e = this,
                    t = this.props.targetElementDimensions,
                    o = l.default(window),
                    n = l.default(window).scrollTop(),
                    r = l.default(window).scrollLeft(),
                    s = (function() {
                        switch (e.props.position) {
                            case p.TOP:
                                return {
                                    bottom: o.height() - t.top_y + 7 + n
                                };
                            case p.BOTTOM:
                                return {
                                    top: t.bottom_y + 7 - n
                                };
                            case p.LEFT:
                                return {
                                    right: o.width() - t.left_x + 7 + r
                                };
                            case p.RIGHT:
                                return {
                                    left: t.right_x + 7 - r
                                };
                            case p.BOTTOM_RIGHT:
                                return {
                                    left: t.right_x - 7 - r,
                                    top: t.bottom_y + 7 - n
                                }
                        }
                    })();
                return i.div({
                    className: "tooltip-bubble " + (this.props.className || ""),
                    ref: "tooltip",
                    style: s,
                    onMouseMove: this.props.mouse_move_cb ? this.props.mouse_move_cb : void 0,
                    onMouseLeave: this.props.mouse_out_cb ? this.props.mouse_out_cb : void 0,
                    onMouseEnter: this.props.mouse_enter_cb ? this.props.mouse_enter_cb : void 0
                }, i.div({
                    className: "tooltip-inner"
                }, this.props.contents))
            }, t.prototype.componentDidMount = function() {
                return this._centerAndShow()
            }, t.prototype.componentDidUpdate = function() {
                return this._centerAndShow()
            }, t.displayName = "TooltipBubble", t.propTypes = {
                position: s.oneOf((function() {
                    var e = [];
                    for (u in p) e.push(p[u]);
                    return e
                })()),
                contents: s.oneOfType([s.element, s.string]),
                className: s.string,
                mouse_move_cb: s.func,
                mouse_out_cb: s.func,
                mouse_enter_cb: s.func,
                targetElementDimensions: s.shape({
                    left_x: s.number,
                    right_x: s.number,
                    top_y: s.number,
                    bottom_y: s.number,
                    width: s.number,
                    height: s.number
                })
            }, t
        })(n.default.Component),
        f = (function(e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t.state = {
                    visible: !1,
                    event_id: a.uniqueId()
                }, t._on_mouse_enter = function() {
                    t.props.show_delay > 0 ? t._scheduleShow() : t._show()
                }, t._on_mouse_leave = function(e) {
                    return function(e) {
                        return t.props.hide_delay > 0 ? t._scheduleHide(t.props.hide_delay) : t._hide(e)
                    }
                }, t._render_tooltip = function() {
                    c();
                    var e = d();
                    l.default("#tooltip-holder").css("position", "fixed"), l.default("#tooltip-holder").css("left", "0"), l.default("#tooltip-holder").css("right", "0"), t.props.hide_delay > 0 && l.default("#tooltip-holder").attr("data-event-id", t.state.event_id), t.props.position === p.TOP ? (l.default("#tooltip-holder").css("top", "auto"), l.default("#tooltip-holder").css("bottom", "0")) : (l.default("#tooltip-holder").css("top", "0"), l.default("#tooltip-holder").css("bottom", "auto"));
                    var o = n.default.createElement(h, {
                        position: t.props.position,
                        contents: t.props.tooltip_contents,
                        className: t.props.tooltip_classname,
                        mouse_move_cb: t.props.interaction_enabled ? t._clear_timeout : void 0,
                        mouse_out_cb: t.props.interaction_enabled ? t._on_mouse_leave : void 0,
                        mouse_enter_cb: t.props.interaction_enabled ? t._on_mouse_enter : void 0,
                        targetElementDimensions: _(l.default(r.findDOMNode(t.refs.tooltipTarget)))
                    });
                    return r.render(o, e)
                }, t._show = function() {
                    if (!t.state.visible || t._last_timeout) return t._render_tooltip(), t.setState({
                        visible: !0
                    }), t.props.on_show && t.props.on_show(), t._clear_timeout()
                }, t._hide = function() {
                    if (t.state.visible) {
                        var e = d();
                        if (t._last_timeout) {
                            l.default(e).attr("data-event-id") === t.state.event_id && (c(), t._clear_timeout())
                        } else c();
                        return t.setState({
                            visible: !1
                        })
                    }
                }, t._scheduleHide = function(e) {
                    if (t.state.visible) return t._last_timeout = setTimeout(t._hide, e)
                }, t._clear_timeout = function() {
                    if (t._last_timeout) return clearTimeout(t._last_timeout), t._last_timeout = null
                }, t._scheduleShow = function() {
                    return t._clear_timeout(), t._last_timeout = setTimeout(t._show, t.props.show_delay)
                }, t
            }
            return o.__extends(t, e), t.prototype.render = function() {
                var e = this;
                return i.div({
                    className: "tooltip-target",
                    onMouseEnter: function(t) {
                        return e._on_mouse_enter(t)
                    },
                    onFocus: function(t) {
                        return e._show(t)
                    },
                    onMouseLeave: this._on_mouse_leave(),
                    onBlur: this._on_mouse_leave(),
                    id: this.state.tooltip_id,
                    ref: "tooltipTarget",
                    tabIndex: this.props.is_focusable ? 0 : void 0
                }, this.props.children)
            }, t.prototype.componentDidMount = function() {
                var e = this;
                return l.default(document).bind("scroll." + this.state.event_id, function(t) {
                    return e._hide(t)
                })
            }, t.prototype.componentDidUpdate = function() {
                if (this.state.visible) return this._render_tooltip()
            }, t.prototype.componentWillUnmount = function() {
                l.default(document).unbind("scroll." + this.state.event_id), c()
            }, t.displayName = "Tooltip", t.propTypes = {
                position: s.oneOf((function() {
                    var e = [];
                    for (u in p) e.push(p[u]);
                    return e
                })()),
                tooltip_contents: s.oneOfType([s.oneOfType([s.element, s.string]), s.arrayOf(s.oneOfType([s.element, s.string]))]),
                tooltip_classname: s.string,
                hide_delay: s.number,
                show_delay: s.number,
                interaction_enabled: s.bool,
                is_focusable: s.bool,
                on_show: s.func
            }, t.defaultProps = {
                interaction_enabled: !1,
                hide_delay: 0,
                show_delay: 0
            }, t
        })(n.default.Component);
    t.Tooltip = f
}), define("modules/clean/react/util", ["require", "exports", "tslib", "react"], function(e, t, o, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), n = o.__importDefault(n);
    var r = function(e) {
        if ("string" == typeof e) return e;
        if ("string" == typeof e.props) return e.props;
        if (e.props.text) return e.props.text;
        var t = [];
        return n.default.Children.forEach(e.props.children, function(e) {
            return t.push(r(e))
        }), t.join("")
    };
    t.getText = r;
    var i = function(e, t, o) {
        if (t(e)) return o(e);
        var r = !1,
            s = [];
        return n.default.Children.forEach(e.props.children, function(e) {
            var n = i(e, t, o);
            if (s.push(n), n !== e) return r = !0
        }), r ? n.default.cloneElement(e, {}, s) : e
    };
    t.replaceSubtree = i;
    var s = function() {
        for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
        for (var o = {}, n = [], r = 0, i = Array.from(e); r < i.length; r++)
            for (var s = i[r], a = 0, l = Object.keys(s || {}); a < l.length; a++) {
                var u = l[a],
                    p = s[u];
                "className" === u ? n.push(p) : o[u] = p
            }
        return null != n.length && (o.className = n.join(" ")), o
    };
    t.mergeProps = s;
    var a = function(e, t) {
        return new Promise(function(o, n) {
            return e.setState(t, o)
        })
    };
    t.setStatePromise = a
}), define("modules/clean/referrer_cleansing_redirect", ["require", "exports", "tslib", "external/sjcl", "modules/core/browser", "modules/core/cookies", "modules/core/uri"], function(e, t, o, n, r, i, s) {
    "use strict";

    function a(e) {
        var t = s.URI.parse(e).getScheme();
        if (t && !["http", "https"].includes(t)) return "#";
        var o = new s.URI({
            scheme: "https",
            authority: "www.dropbox.com",
            path: "/referrer_cleansing_redirect"
        });
        return o.setQuery({
            url: e,
            hmac: p(e)
        }), o
    }

    function l(e, t, o) {
        void 0 === t && (t = window), void 0 === o && (o = !1), o && (t.opener = null), r.redirect(a(e), t)
    }

    function u(e) {
        l(e, r.unsafe_open_tab(""), !0)
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), n = o.__importStar(n), r = o.__importStar(r);
    var p = function(e) {
        var t = n.codec.utf8String.toBits(i.Cookies.read("__Host-js_csrf")),
            o = new n.misc.hmac(t),
            r = o.encrypt(e);
        return n.codec.base64.fromBits(r)
    };
    t.get_redirect_uri = a, t.redirect = l, t.safe_open_tab_and_redirect = u
}), define("modules/core/user_i18n", ["require", "exports", "tslib", "modules/constants/page_load"], function(e, t, o, n) {
    "use strict";

    function r(e) {
        if (!e) return "";
        e = e.toUpperCase();
        var t = e.trim().split(" "),
            o = t[0],
            n = l(o),
            r = t[t.length - 1],
            i = l(r);
        if (t.length >= 2) return a() ? i[0] + n[0] : n[0] + i[0];
        var u = l(e);
        return a() && !s(e) && u.length > 1 ? u[0] + u[1] : u[0]
    }

    function i(e) {
        if (!e) return "";
        var t = e.trim().split(" ");
        return t.length < 2 ? e : a() ? t[t.length - 1][0] + " " + t[0] : t[0] + " " + t[t.length - 1][0]
    }

    function s(e) {
        for (var t = 0; t < e.length; t++)
            if (e.charCodeAt(t) >= 128) return !1;
        return !0
    }

    function a() {
        return ["zh", "ja", "ko"].indexOf(n.USER_LOCALE) !== -1
    }

    function l(e) {
        for (var t = [], o = e.length, n = 0; n < o;) {
            var r = e[n];
            if (r >= "�" && r <= "�") {
                if (!(n < o - 1)) break;
                var i = e[n + 1],
                    s = r + i;
                t.push(s), n += 2
            } else t.push(r), n += 1
        }
        return t
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), n = o.__importStar(n), t.getInitials = r, t.getShortName = i, t.isCjkLocale = a
});
//# sourceMappingURL=pkg-modules-unneeded-for-home.min.js-vflNyOEYS.map