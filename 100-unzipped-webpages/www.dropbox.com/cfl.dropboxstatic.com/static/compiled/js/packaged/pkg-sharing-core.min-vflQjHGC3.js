define("modules/clean/avatar/contact_avatar", ["require", "exports", "tslib", "react", "external/prop-types", "modules/clean/avatar/avatar_with_default", "modules/clean/avatar/initials_avatar", "modules/clean/avatar/size", "modules/clean/contacts/contact", "modules/clean/contacts/types", "modules/core/i18n", "modules/core/user_i18n"], function(e, t, n, r, o, i, s, a, l, c, u, d) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), r = n.__importDefault(r), o = n.__importStar(o), i = n.__importDefault(i), c = n.__importDefault(c), d = n.__importStar(d);
    var p = r.default.createElement,
        _ = (function(e) {
            function t() {
                return null !== e && e.apply(this, arguments) || this
            }
            return n.__extends(t, e), t.prototype.render = function() {
                var e, t, n = this.props.contact,
                    r = n.name || n.email,
                    o = n.photo_url;
                n.type === c.default.FB && (o = "https://graph.facebook.com/" + n.fb_id + "/picture");
                var l = "";
                this.props.dimension !== a.AVATAR_DIMENSION_BY_SIZE.XSMALL && (l = d.getInitials(r)), n.type === c.default.NEW_STYLE_GROUP ? (e = u._("Group"), t = "SQUARE") : (e = u._("User"), t = "CIRCLE");
                var _ = {
                    alt: e,
                    dimension: this.props.dimension,
                    photoUrl: o,
                    shape: t,
                    optionalClass: this.props.optionalClass,
                    defaultAvatar: p(s.InitialsAvatarWithColorDerivedFromName, {
                        alt: e,
                        dimension: this.props.dimension,
                        name: r,
                        initials: l,
                        shape: t,
                        optionalClass: this.props.optionalClass
                    })
                };
                return p(i.default, _)
            }, t.displayName = "ContactAvatar", t.propTypes = {
                dimension: o.oneOf(a.VALID_AVATAR_DIMENSIONS).isRequired,
                contact: o.instanceOf(l.Contact).isRequired,
                optionalClass: o.string
            }, t
        })(r.default.Component);
    t.default = _
}), define("modules/clean/beacon", ["require", "exports", "tslib", "external/lodash", "jquery", "modules/clean/beacon_nodeps", "modules/clean/bolt_nodeps", "modules/core/exception"], function(e, t, n, r, o, i, s, a) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), r = n.__importStar(r), o = n.__importDefault(o), i = n.__importStar(i), s = n.__importStar(s), a = n.__importStar(a);
    var l = (function(e) {
        function t(t, n, i) {
            var s = e.call(this, t, n, i, "beacon.dropbox.com", o.default.ajax, r, a) || this;
            return s._token = t, s._authn_cb = n, s._authz_cb = i, s
        }
        return n.__extends(t, e), t
    })(i.Transmitter);
    t.Transmitter = l;
    var c = (function(e) {
        function t(t, n, i) {
            return e.call(this, t, n, i, s, "thunder.dropbox.com", o.default.ajax, r, a) || this
        }
        return n.__extends(t, e), t
    })(i.Receiver);
    t.Receiver = c, t.Agent = i.Agent, t.AgentStatus = i.AgentStatus, t.Platforms = i.Platforms, t.PresenceParams = i.PresenceParams, t.PresenceType = i.PresenceType, t.Source = i.Source, t.UserAppPresence = i.UserAppPresence, t.UserContextPresence = i.UserContextPresence
}), define("modules/clean/beacon_nodeps", ["require", "exports"], function(e, t) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var n = {
        WEB: 0,
        IOS: 1,
        ANDROID: 2,
        DESKTOP: 3
    };
    t.Platforms = n;
    var r = (function() {
        function e(e, t, r) {
            void 0 === r && (r = null), this.platform = e, this.surface = t, this.identifier = r;
            var o = !1;
            for (var i in n) {
                var s = n[i];
                if (this.platform === s) {
                    o = !0;
                    break
                }
            }
            if (!o) throw new Error("platform must be from Beacon.Platforms");
            if (this.surface.length > 32 || 0 === this.surface.length) throw new Error("surface must be populated and <= 32 chars.");
            if ((null != this.identifier ? this.identifier.length : void 0) > 128) throw new Error("identifier must be <= 128 chars.");
            null === this.identifier && (this.identifier = "")
        }
        return e.from_json = function(t) {
            return new e(t.platform, t.surface, t.identifier)
        }, e
    })();
    t.Source = r;
    var o = (function() {
        function e(e, t, n, r) {
            if (this.user_id = e, this.app = t, this.context = n, this.source = r, this.user_id.length > 256) throw new Error("user_id must be <= 256 chars.");
            if (this.app.length > 32 || 0 === this.app.length) throw new Error("app must be populated and <= 32 chars.");
            if (this.context.length > 64 || 0 === this.context.length) throw new Error("context must be populated and <= 64 chars.")
        }
        return e.from_json = function(t) {
            var n = r.from_json(t.source);
            return new e(t.user_id, t.app, t.context, n)
        }, e
    })();
    t.Agent = o;
    var i = (function() {
        function e(e, t, n) {
            if (void 0 === n && (n = null), this.agent = e, this.status = t, this.auth_key = n, this.status.length > 32) throw new Error("status must be <= 32 chars")
        }
        return e.from_json = function(t) {
            return new e(o.from_json(t.agent), t.status)
        }, e
    })();
    t.AgentStatus = i;
    var s = {
        UserContext: "UserContext",
        UserApp: "UserApp",
        Context: "Context"
    };
    t.PresenceType = s;
    var a = (function() {
        function e(e, t, n, r, o) {
            if (this.type = e, this.user_id = t, this.app = n, this.context = r, this.token = o, this.type !== s.UserContext && this.type !== s.UserApp && this.type !== s.Context) throw new Error("Unsupported type: " + this.type + ".");
            if ((null != this.user_id ? this.user_id.length : void 0) > 256) throw new Error("user_id must be <= 256 chars.");
            if (this.app.length > 32) throw new Error("app must be <= 32 chars.");
            if ((null != this.context ? this.context.length : void 0) > 64) throw new Error("context must be <= 64 chars.")
        }
        return e
    })();
    t.PresenceParams = a;
    var l = (function() {
        function e(e, t) {
            this.presence_params = e, this.agents = t
        }
        return e
    })();
    t.UserContextPresence = l;
    var c = (function() {
        function e(e, t) {
            this.presence_params = e, this.status = t
        }
        return e.initClass = function() {
            this.Status = {
                Offline: 1,
                Online: 2
            }
        }, e
    })();
    t.UserAppPresence = c, c.initClass();
    var u = (function() {
            function e(e, t, n) {
                this.presence_params = e, this.snapshot = t, this.delta = n
            }
            return e
        })(),
        d = (function() {
            function e(e, t, n, r, o, i, s) {
                void 0 === s && (s = null), this._heartbeat = this._heartbeat.bind(this), this._handle_heartbeat_success = this._handle_heartbeat_success.bind(this), this._handle_heartbeat_error = this._handle_heartbeat_error.bind(this), this._token = e, this._authn_cb = t, this._authz_cb = n, this._beacon_server = r, this._ajax = o, this._lodash = i, this._exclog = s, this._started = !1, this._heartbeat_xhr = null, this._timeout_id = null, this._presence_data = [], this._offline_agents = [], this._has_changes = !1
            }
            return e.prototype.start = function() {
                if (!this._started) return this._backoff_window = 5e3, this._started = !0, this._has_changes = !1, this._heartbeat()
            }, e.prototype.stop = function() {
                return this._started = !1, this._heartbeat_xhr = null, window.clearTimeout(this._timeout_id), this._timeout_id = null
            }, e.prototype.add_or_update_agents = function(e) {
                for (var t = 0, n = Array.from(e); t < n.length; t++) {
                    var r = n[t];
                    this._has_changes = this._add_or_update_agent(r) || this._has_changes
                }
                if (!this._heartbeat_xhr && this._started) return window.clearTimeout(this._timeout_id), this._timeout_id = window.setTimeout(this._heartbeat, 0)
            }, e.prototype.update_token = function(e) {
                this._token = e
            }, e.prototype._add_or_update_agent = function(e) {
                for (var t = 0; t < this._presence_data.length; t++) {
                    var n = this._presence_data[t];
                    if (this._lodash.isEqual(n.agent, e.agent)) return (n.status !== e.status || n.auth_key !== e.auth_key) && (this._presence_data[t] = e, !0)
                }
                return this._presence_data.push(e), !0
            }, e.prototype._heartbeat = function() {
                if (this._started && 0 !== this._presence_data.length) return this._offline_agents = this._presence_data.filter(function(e) {
                    return "" !== e.status
                }).map(function(e) {
                    return e.agent
                }), this._has_changes = !1, this._heartbeat_xhr = this._ajax({
                    url: "https://" + this._beacon_server + "/1/update",
                    type: "POST",
                    data: JSON.stringify({
                        token: this._token,
                        updates: this._presence_data
                    }),
                    contentType: "application/json; charset=utf-8",
                    dataType: "json",
                    timeout: 5e3,
                    success: this._handle_heartbeat_success,
                    error: this._handle_heartbeat_error,
                    xhrFields: {
                        withCredentials: !0
                    }
                })
            }, e.prototype._handle_heartbeat_success = function(e, t, n) {
                var r, i, s = this;
                if (this._heartbeat_xhr = null, this._started) {
                    for (var a = [], l = 0, c = Array.from(e.agent_errors || []); l < c.length; l++) {
                        var u = c[l],
                            d = u.error;
                        r = o.from_json(u.agent), "authorization_error" === d ? a.push(r) : "invalid_agent" === d && null != this._exclog && this._exclog.reportStack("Input error: " + u), this._presence_data = this._presence_data.filter(function(e) {
                            return !s._lodash.isEqual(e.agent, r)
                        })
                    }
                    if (a.length) {
                        var p = this._authz_cb;
                        window.setTimeout(function() {
                            return p(a)
                        }, 0)
                    }
                    for (var _ = 0, h = Array.from(this._offline_agents); _ < h.length; _++)
                        for (var m = h[_], f = 0; f < this._presence_data.length; f++) {
                            var y = this._presence_data[f];
                            if (this._lodash.isEqual(y.agent, m) && "" === y.status) {
                                this._presence_data.splice(f, 1);
                                break
                            }
                        }
                    return i = this._has_changes ? 0 : 6e4, this._backoff_window = 5e3, this._timeout_id = window.setTimeout(this._heartbeat, i)
                }
            }, e.prototype._handle_heartbeat_error = function(e, t, n) {
                if (this._heartbeat_xhr = null, this._started) {
                    if (e.status >= 400 && e.status < 500) {
                        if (401 === e.status) return window.setTimeout(this._authn_cb, 0), void this.stop();
                        400 === e.status && null != this._exclog && this._exclog.reportStack("Bad request: " + e.responseText)
                    }
                    var r = Math.random() * this._backoff_window;
                    return this._backoff_window = Math.min(2 * this._backoff_window, 12e4), this._timeout_id = window.setTimeout(this._heartbeat, r)
                }
            }, e
        })();
    t.Transmitter = d;
    var p = (function() {
        function e(e, t, n, r, o, i, s, a) {
            var l = this;
            void 0 === a && (a = null), this._compact_context_updates = this._compact_context_updates.bind(this), this._on_update = this._on_update.bind(this), this._on_refresh = this._on_refresh.bind(this), this._presence_params = e, this._update_callback = t, this._refresh_callback = n, this._bolt = r, this._thunder_hostname = o, this._ajax = i, this._lodash = s, this._exclog = a;
            var c = Array.from(this._presence_params).map(function(e) {
                return l._presence_params_to_bolt_channel(e)
            });
            this._thunder_client = new this._bolt.ThunderClient(c, this._on_update, this._on_refresh, this._thunder_hostname, this._ajax, this._lodash, this._exclog)
        }
        return e.prototype.start = function() {
            return this._thunder_client.start()
        }, e.prototype.stop = function() {
            return this._thunder_client.unsubscribe()
        }, e.prototype.add_presence_params = function(e) {
            var t = this,
                n = this._presence_params.length;
            if (this._presence_params = this._lodash.union(e, this._presence_params), this._presence_params.length === n) return !1;
            this._thunder_client.unsubscribe();
            var r = Array.from(this._presence_params).map(function(e) {
                return t._presence_params_to_bolt_channel(e)
            });
            return this._thunder_client = new this._bolt.ThunderClient(r, this._on_update, this._on_refresh, this._thunder_hostname, this._ajax, this._lodash, this._exclog), this._thunder_client.start(), !0
        }, e.prototype._presence_params_to_bolt_channel = function(e) {
            switch (e.type) {
                case s.UserContext:
                    return new this._bolt.SignedChannelState("beacon_uc-" + e.app, e.user_id + "|" + e.context, "0", e.token);
                case s.UserApp:
                    return new this._bolt.SignedChannelState("beacon_ua-" + e.app, e.user_id, "0", e.token);
                case s.Context:
                    return new this._bolt.SignedChannelState("beacon_c-" + e.app, e.context, "0", e.token);
                default:
                    throw new Error("Unknown type: " + e.type)
            }
        }, e.prototype._bolt_channel_to_presence_params = function(e) {
            var t, n = e.app_id.split("-"),
                r = e.unique_id.split("|");
            if (2 !== n.length) throw new Error("Unexpected format of Bolt app_id: " + e.app_id + ".");
            var o = n[1],
                i = "",
                l = "";
            switch (n[0]) {
                case "beacon_uc":
                    if (2 !== r.length) throw new Error("Unexpected format of beacon_uc: " + e.unique_id + ".");
                    t = s.UserContext, i = r[0], l = r[1];
                    break;
                case "beacon_ua":
                    if (1 !== r.length) throw new Error("Unexpected format of beacon_ua: " + e.unique_id + ".");
                    t = s.UserApp, i = r[0];
                    break;
                case "beacon_c":
                    if (1 !== r.length) throw new Error("Unexpected format of beacon_c: " + e.unique_id + ".");
                    t = s.Context, l = r[0];
                    break;
                default:
                    throw new Error("Unknown Bolt app_id: " + e.app_id + ".")
            }
            return new a(t, i, o, l, null)
        }, e.prototype._compact_context_updates = function(e, t) {
            for (var n, r, o = !1, i = [], s = 0, a = Array.from(t); s < a.length; s++) {
                var l = a[s];
                if (null != l.snapshot) o = !0, i = l.snapshot;
                else if (null != l.delta)
                    for (var c = 0, d = Array.from(l.delta); c < d.length; c++) {
                        for (var p = d[c], _ = !1, h = 0; h < i.length; h++) {
                            var m = i[h];
                            if (this._lodash.isEqual(m.agent, p.agent)) {
                                _ = !0, i[h] = p;
                                break
                            }
                        }
                        _ || i.push(p)
                    }
            }
            return o ? (r = i, n = null) : (r = null, n = i), new u(e, r, n)
        }, e.prototype._on_update = function(e) {
            for (var t, n, a = this, u = [], d = 0, p = Array.from(e); d < p.length; d++) {
                var _ = p[d],
                    h = _.channel_state,
                    m = new this._bolt.ChannelId(h.app_id, h.unique_id),
                    f = this._bolt_channel_to_presence_params(m);
                u.push((function() {
                    var e;
                    switch (f.type) {
                        case s.UserContext:
                            return n = _.payloads.slice(-1)[0].payload, e = null != n.agents ? (function() {
                                for (var e = [], r = 0, o = Array.from(n.agents); r < o.length; r++) t = o[r], e.push(i.from_json(t));
                                return e
                            })() : [], new l(f, e);
                        case s.UserApp:
                            return n = _.payloads.slice(-1)[0].payload, new c(f, n.status);
                        case s.Context:
                            var u = function(e) {
                                    var n = r.from_json(e.source);
                                    return t = new o(e.user_id, f.app, f.context, n), new i(t, e.status)
                                },
                                d = function(e) {
                                    var t;
                                    return {
                                        snapshot: null != (null != e.snapshot ? e.snapshot.agents : void 0) ? (function() {
                                            for (var n = [], r = 0, o = Array.from(e.snapshot.agents); r < o.length; r++) t = o[r], n.push(u(t));
                                            return n
                                        })() : void 0,
                                        delta: null != (null != e.delta ? e.delta.agents : void 0) ? (function() {
                                            for (var n = [], r = 0, o = Array.from(e.delta.agents); r < o.length; r++) t = o[r], n.push(u(t));
                                            return n
                                        })() : void 0
                                    }
                                },
                                p = (function() {
                                    for (var e = [], t = 0, r = Array.from(_.payloads); t < r.length; t++) n = r[t], e.push(d(n.payload));
                                    return e
                                })();
                            return a._compact_context_updates(f, p)
                    }
                })())
            }
            return this._update_callback(u)
        }, e.prototype._on_refresh = function(e) {
            var t = this;
            return this._refresh_callback(Array.from(e).map(function(e) {
                return t._bolt_channel_to_presence_params(e)
            }))
        }, e
    })();
    t.Receiver = p
}), define("modules/clean/clipboard", ["require", "exports", "tslib", "external/swfobject", "jquery", "modules/clean/static_urls", "modules/core/dom"], function(e, t, n, r, o, i, s) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), r = n.__importStar(r), o = n.__importDefault(o), s = n.__importStar(s);
    var a = function() {
            return "swf_" + (new Date).getTime() + "_" + ("00000" + Math.floor(1e6 * Math.random())).slice(-6)
        },
        l = function(e, t) {
            return e.on("mouseover", function() {
                return t.addClass("hovered")
            }), e.on("mousedown", function() {
                return t.addClass("pressed")
            }), e.on("mouseout", function() {
                return t.removeClass("hovered pressed")
            }), e.on("mouseup", function() {
                return t.removeClass("pressed")
            })
        },
        c = function(e, t) {
            return window.ClipboardSWFRegister = window.ClipboardSWFRegister || {}, window.ClipboardSWFRegister[e] = function() {
                return t()
            }, "ClipboardSWFRegister." + e
        };
    t.clipboard_overlay = function(e, t, n, u) {
        void 0 === n && (n = null), void 0 === u && (u = null), u = u || o.default(document.body);
        var d = a(),
            p = o.default("<div />", {
                id: "flash_copy_container"
            }).append(o.default("<div />", {
                id: d
            })).css({
                position: "absolute",
                zIndex: 1
            });
        l(p, t), u.append(p), s.clone_position(p, t, {});
        var _ = c(d, n);
        return window.copyLoaded = function() {
            var t = o.default("#" + d)[0];
            return t.setCopyText(e), t.setCallbackFunction(_)
        }, r.embedSWF(i.static_url("/static/swf/copy_clipboard-vflvMcZTC.swf"), d, "100%", "100%", "6.0.65", !1, !1, {
            wmode: "transparent",
            scale: "exactfit",
            allowScriptAccess: "always"
        }), p
    }
}), define("modules/clean/components/title_bubble", ["require", "exports", "tslib", "external/classnames", "react", "external/react-dom", "external/react-dom-factories", "external/prop-types", "jquery", "modules/clean/react/css"], function(e, t, n, r, o, i, s, a, l, c) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), r = n.__importDefault(r), o = n.__importDefault(o), i = n.__importStar(i), s = n.__importStar(s), a = n.__importStar(a), l = n.__importDefault(l);
    var u = (function(e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t.state = {
                    isChildFocused: !1
                }, t
            }
            return n.__extends(t, e), t.prototype.componentDidMount = function() {
                var e = this;
                l.default(i.findDOMNode(this)).on("focusin.title-bubble", function(t) {
                    return e.setState({
                        isChildFocused: !0
                    })
                }).on("focusout.title-bubble", function(t) {
                    return e.setState({
                        isChildFocused: !1
                    })
                }).on("mouseenter.title-bubble", function() {
                    return "function" == typeof e.props.onMouseEnter ? e.props.onMouseEnter() : void 0
                })
            }, t.prototype.componentWillUnmount = function() {
                l.default(i.findDOMNode(this)).off("focusin.title-bubble").off("focusout.title-bubble").off("mouseenter.title-bubble")
            }, t.prototype.render = function() {
                var e = this,
                    t = {
                        "c-title-bubble": !0,
                        "is-child-focused": this.state.isChildFocused,
                        "c-title-bubble--respect-line-break": this.props.respectLineBreaks
                    };
                return t["c-title-bubble--" + this.props.direction.slice(0, 1)] = !0, s.div({
                    className: r.default([t, this.props.className]),
                    "data-title": this.props.text,
                    onClick: function(t) {
                        if (t.detail > 0) return e.setState({
                            isChildFocused: !1
                        })
                    },
                    onMouseLeave: function() {
                        return e.setState({
                            isChildFocused: !1
                        })
                    }
                }, this.props.children)
            }, t.displayName = "TitleBubble", t.propTypes = {
                text: a.string.isRequired,
                direction: a.oneOf(["north", "south", "east", "west"]).isRequired,
                onMouseEnter: a.func,
                respectLineBreaks: a.bool,
                className: a.string
            }, t
        })(o.default.Component),
        d = c.requireCssWithComponent(u, ["/static/css/scooter/scooter-scoped-vflFpCY2P.css"]);
    t.default = d
}), define("modules/clean/contacts/bloodhound_contacts_v2", ["require", "exports", "tslib", "external/bloodhound", "modules/clean/contacts/config", "modules/clean/contacts/contact", "modules/clean/profile_services/profile_services_link", "modules/clean/viewer", "modules/core/cookies"], function(e, t, n, r, o, i, s, a, l) {
    "use strict";

    function c(e, t) {
        u(e, t.includeForUser(e.id).contacts)
    }

    function u(e, t) {
        if (e.id in p) {
            var n = p[e.id];
            t = t.filter(i.ContactCommon.is_valid), n.clearRemoteCache(), n.clear(), n.add(t)
        }
    }

    function d(e) {
        var t = document.createElement("a");
        t.href = e;
        var n = t.hostname || window.location.hostname;
        if (n.indexOf(".dropbox.com", n.length - ".dropbox.com".length) === -1) throw new Error("Cannot send the CSRF token to " + n);
        return e
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), r = n.__importDefault(r), o = n.__importStar(o), s = n.__importStar(s);
    var p = {};
    t.BloodhoundContactsV2 = {
        getOrCreateForUser: function(e) {
            if (e.id in p) return p[e.id];
            var t, n = o.getSearchConfigForUser(e);
            if (n.remoteEndpoint) {
                var u = String(e.id);
                t = {
                    url: d(n.remoteEndpoint),
                    prepare: function(e, t) {
                        return t.type = "POST", t.headers = {
                            "X-CSRF-Token": l.Cookies.read("__Host-js_csrf"),
                            "X-Dropbox-Uid": u
                        }, t.data = {
                            query: JSON.stringify(e)
                        }, t.data._subject_uid = u, t
                    },
                    rateLimitBy: "debounce",
                    rateLimitWait: n.remoteDebounceWait
                }
            }
            var _ = new r.default({
                datumTokenizer: i.ContactCommon.get_index_tokens,
                queryTokenizer: r.default.tokenizers.whitespace,
                identify: i.ContactCommon.get_key,
                sufficient: n.sufficientResults,
                sorter: i.ContactCommon.sorter,
                local: [],
                remote: t
            });
            if (p[e.id] = _, a.Viewer.get_viewer().is_user_signed_in(e)) {
                var h = n.localCacheStore.getOrCreateForUser(e);
                h.load_contacts(!1, function(t) {
                    c(e, t), h.register_for_updates("bloodhound_contacts_v2", function(t) {
                        c(e, t)
                    })
                })
            }
            return s.LinkedProfileServices.get_linked_profile_services_for_user(e.id).register_for_service_changes("bloodhound_contacts_v2", function(e) {
                _.clearRemoteCache()
            }), p[e.id]
        },
        search: function(e, n, r, i) {
            var s = t.BloodhoundContactsV2.getOrCreateForUser(e),
                a = o.getSearchConfigForUser(e);
            if (!n) return r([]), void(i && a.remoteEndpoint && i([]));
            var l = a.localCacheStore.getOrCreateForUser(e);
            l.is_loaded() ? s.search(n, r, i) : l.load_contacts(!1, function(e) {
                s.search(n, r, i)
            }), l.refresh_contacts(!1)
        },
        getAll: function(e) {
            return t.BloodhoundContactsV2.getOrCreateForUser(e).all()
        }
    }
}), define("modules/clean/contacts/cache", ["require", "exports", "tslib", "modules/clean/ajax", "modules/clean/bolt", "modules/clean/contacts/cache_type", "modules/clean/contacts/list", "modules/clean/viewer", "modules/core/browser", "modules/core/exception"], function(e, t, n, r, o, i, s, a, l, c) {
    "use strict";

    function u(e, t, n) {
        return void 0 !== e && null !== e && "function" == typeof e[t] ? n(e, t) : void 0
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), r = n.__importStar(r), o = n.__importStar(o), s = n.__importDefault(s), l = n.__importStar(l);
    var d = (function() {
        function e(e) {
            this.callbacks = {}, this.one_time_callbacks = [], this.cached_contacts = null, this._cache_download_name = e, this.should_force_refresh = !1, this.request_perf_records = [], this._config = null
        }
        return e.initClass = function() {
            this.MAX_REQUEST_PERF_RECORDS = 20
        }, e.prototype.register_for_updates = function(e, t) {
            this.callbacks[e] = t
        }, e.prototype.unregister_for_updates = function(e) {
            null != this.callbacks[e] && delete this.callbacks[e]
        }, e.prototype.get_contacts_count = function() {
            return null != this.cached_contacts ? this.cached_contacts.length() : 0
        }, e.prototype.get_downloaded_time = function() {
            var e = this,
                t = u(l.performance(), "getEntriesByName", function(t) {
                    return t.getEntriesByName(e._get_contacts_downloaded_mark_name())
                });
            return t && t.length ? t[0].startTime : null
        }, e.prototype.get_request_perf_records = function() {
            return this.request_perf_records
        }, e.prototype._is_contact_get_or_check_ajax_request = function(e) {
            var t = e.initiatorType,
                n = e.name;
            return "xmlhttprequest" === t && n.endsWith(this._config.getUrl)
        }, e.prototype._find_last_perf_entry = function(e) {
            void 0 === e && (e = 500);
            var t = u(l.performance(), "getEntriesByType", function(e) {
                return e.getEntriesByType("resource")
            });
            if (null != t ? t.length : void 0)
                for (var n = Math.min(t.length - 1, e), r = n; r >= 0; r--)
                    if (this._is_contact_get_or_check_ajax_request(t[r])) return t[r];
            return null
        }, e.prototype._record_perf_stats = function(t) {
            void 0 === t && (t = {});
            var n = this._find_last_perf_entry();
            if (n && (t.ttfb = n.responseStart - n.requestStart, t.downloading_time = n.responseEnd - n.responseStart, t.duration = n.duration, this.request_perf_records.push(t), this.request_perf_records.length > e.MAX_REQUEST_PERF_RECORDS)) return this.request_perf_records = this.request_perf_records.slice(this.request_perf_records.length - 1)
        }, e.prototype._get_request_url = function() {
            throw new Error("method unimplemented")
        }, e.prototype._get_request_params = function() {
            throw new Error("method unimplemented")
        }, e.prototype._contacts_loaded_callback = function(e) {
            throw new Error("method unimplemented")
        }, e.prototype._fetch_contacts = function() {
            var e = this;
            return r.BackgroundRequest({
                url: this._get_request_url(),
                data: this._get_request_params(),
                success: function(t, n, r) {
                    var o = JSON.parse(t);
                    if (e._contacts_loaded_callback(o), e._schedule_fetch) return e._schedule_fetch()
                }
            })
        }, e.prototype._get_versioned_params = function(e, t) {
            void 0 === t && (t = !0);
            var n = {
                version: e
            };
            return t && (n.force_refresh = this.should_force_refresh, this.should_force_refresh = !1), null != this.digest && (n.digest = this.digest), null != this.limit && (n.limit = this.limit), n
        }, e.prototype._get_contacts_downloaded_mark_name = function() {
            return this._cache_download_name + "-" + this.instance
        }, e.prototype._is_page_hidden = function() {
            return null != window.document.visibilityState && window.document.hidden
        }, e.prototype._add_one_time_callback = function(e) {
            if (null != e && !Array.from(this.one_time_callbacks).includes(e)) return this.one_time_callbacks.push(e)
        }, e.prototype._invoke_all_callbacks = function(e) {
            return this._invoke_callbacks(this.one_time_callbacks, e, !0), this._invoke_callbacks(this.callbacks, e, !1)
        }, e.prototype._invoke_one_time_callbacks = function(e) {
            return this._invoke_callbacks(this.one_time_callbacks, e, !0)
        }, e.prototype._invoke_callbacks = function(e, t, n) {
            return (function() {
                for (var r = [], o = 0, i = Array.from(Object.keys(e)); o < i.length; o++) {
                    var s = i[o];
                    e[s](t), n ? r.push(delete e[s]) : r.push(void 0)
                }
                return r
            })()
        }, e
    })();
    t.ContactsCacheProto = d, d.initClass();
    var p = (function(e) {
        function t(n, r, o) {
            void 0 === r && (r = null), void 0 === o && (o = null);
            var s = e.call(this, "BoltContactsCache download") || this;
            return s.bolt_update_callback = s.bolt_update_callback.bind(s), s.bolt_refresh_callback = s.bolt_refresh_callback.bind(s), s.cache_type = n, s.limit = r, s.user_id = o, s.instance = t.INSTANCE++, s.loading_state = t.BOLT_NEED_TO_SEND_REQUEST, s._config = i.CONTACT_CACHE_TYPE_TO_CONFIG[i.ContactCacheType[s.cache_type]], s.current_bolt_states = null, s._notified_states = {}, s._bolt = null, s._last_refresh_ts = null, s
        }
        return n.__extends(t, e), t.initClass = function() {
            this.INSTANCE = 0, this.BOLT_NEED_TO_SEND_REQUEST = 0, this.BOLT_REQUEST_SENT = 1, this.REFRESH_THRESHOLD = 36e5
        }, t.prototype.load_contacts = function(e, n) {
            a.Viewer.get_viewer().is_signed_in && (this._add_one_time_callback(n), (this.loading_state === t.BOLT_NEED_TO_SEND_REQUEST || e) && (this.loading_state = t.BOLT_REQUEST_SENT, e && (this.should_force_refresh = !0), this._fetch_contacts()), !this._should_update_contacts() && this.is_loaded() && this._invoke_one_time_callbacks(this.cached_contacts))
        }, t.prototype.refresh_contacts = function(e) {
            void 0 === e && (e = !1);
            var n = u(l.performance(), "now", function(e) {
                return e.now()
            });
            if (this._last_refresh_ts || (e = !0), !(!e && this._last_refresh_ts && n - this._last_refresh_ts < t.REFRESH_THRESHOLD)) return r.BackgroundRequest({
                url: this._get_refresh_url(),
                data: this._get_refresh_params({
                    force_refresh: e
                })
            }), this._last_refresh_ts = n
        }, t.prototype.is_loaded = function() {
            return null != this.cached_contacts
        }, t.prototype.bolt_update_callback = function(e) {
            for (var n = 0, r = Array.from(e); n < r.length; n++) {
                var o = r[n];
                (!Array.from(this._notified_states).includes(o.unique_id) || +this._notified_states[o.unique_id].revision < +o.revision) && (this._notified_states[o.unique_id] = o)
            }
            return this._should_update_contacts() && (this.loading_state = t.BOLT_NEED_TO_SEND_REQUEST), this.load_contacts()
        }, t.prototype.bolt_refresh_callback = function(e) {
            if (null != this._bolt && this._bolt.unsubscribe(), this._bolt = null, this.loading_state = t.BOLT_NEED_TO_SEND_REQUEST, !this._is_page_hidden()) return this.load_contacts()
        }, t.prototype._contacts_loaded_callback = function(e) {
            var t = this;
            if (!this._is_old_contacts(e.bolt_info)) {
                var n = this._is_new_contacts(e.bolt_info);
                if (this.current_bolt_states = e.bolt_info, null == this._bolt && this._subscribe_to_bolt(), n && (null != e.contacts ? e.contacts.length : void 0)) return this._record_perf_stats({
                    num_contacts: e.contacts.length
                }), this.digest = e.digest, this._create_contacts_list(e.contacts), this._invoke_all_callbacks(this.cached_contacts), u(l.performance(), "mark", function(e) {
                    return e.mark(t._get_contacts_downloaded_mark_name())
                })
            }
        }, t.prototype._create_contacts_list = function(e) {
            return this.cached_contacts = s.default.create_contacts_list(e)
        }, t.prototype._subscribe_to_bolt = function() {
            var e = [];
            for (var t in this.current_bolt_states) {
                var n = this.current_bolt_states[t];
                e.push(new o.SignedChannelState(this._config.boltAppId, t.toString(), n.revision, n.token))
            }
            return this._bolt = new o.BoltClient(e, this.bolt_update_callback, this.bolt_refresh_callback), this._bolt.start()
        }, t.prototype._is_new_contacts = function(e) {
            return this._first_contacts_are_newer(e, this.current_bolt_states)
        }, t.prototype._is_old_contacts = function(e) {
            return this._first_contacts_are_newer(this.current_bolt_states, e)
        }, t.prototype._first_contacts_are_newer = function(e, t) {
            if (!t) return !0;
            for (var n in t) {
                var r = t[n];
                for (var o in e) {
                    var i = e[o];
                    if (o === n && +r.revision < +i.revision) return !0
                }
            }
            return !1
        }, t.prototype._should_update_contacts = function() {
            return this._is_new_contacts(this._notified_states)
        }, t.prototype._get_request_params = function() {
            return this._get_versioned_params(1)
        }, t.prototype._get_request_url = function() {
            return this._config.getUrl
        }, t.prototype._get_refresh_params = function(e) {
            return void 0 === e && (e = {}), e
        }, t.prototype._get_refresh_url = function() {
            return this._config.refreshUrl
        }, t
    })(d);
    t.BoltContactsCache = p, p.initClass();
    var _ = (function(e) {
        function t(t, n) {
            var r = this;
            return c.assert(null != n.id, "user has invalid id"), r = e.call(this, t, null) || this, r.cache_type = t, r.user = n, r
        }
        return n.__extends(t, e), t.prototype._get_request_params = function() {
            var e = this._get_versioned_params(1);
            return e._subject_uid = this.user.id, e
        }, t.prototype._get_refresh_params = function(e) {
            return void 0 === e && (e = {}), e._subject_uid = this.user.id, e
        }, t.prototype._create_contacts_list = function(e) {
            return this.cached_contacts = s.default.create_per_user_contacts_list(e, this.user.id)
        }, t
    })(p);
    t.PerUserBoltContactsCache = _
}), define("modules/clean/contacts/cache_store", ["require", "exports", "tslib", "modules/clean/contacts/cache_type", "modules/clean/contacts/cache", "modules/constants/contacts", "modules/clean/viewer"], function(e, t, n, r, o, i, s) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), i = n.__importStar(i);
    var a = (function() {
        function e(e) {
            this.cacheType = e
        }
        return e
    })();
    t.BoltContactsCacheStore = a;
    var l = (function(e) {
        function t() {
            return null !== e && e.apply(this, arguments) || this
        }
        return n.__extends(t, e), t.prototype.getOrCreateForUser = function(e) {
            if (!s.Viewer.get_viewer().is_uid_associated(e.id)) throw new Error("Requested contacts cache for a user not associated with the current viewer.");
            return this.getOrCreateForViewer()
        }, t.prototype.getOrCreateForViewer = function() {
            return null == this.contactsCache && (this.contactsCache = new o.BoltContactsCache(this.cacheType)), this.contactsCache
        }, t
    })(a);
    t.PerViewerBoltContactsCacheStore = l;
    var c = (function(e) {
        function t() {
            var t = null !== e && e.apply(this, arguments) || this;
            return t.uidToContactsCache = {}, t
        }
        return n.__extends(t, e), t.prototype.getOrCreateForUser = function(e) {
            return e.id in this.uidToContactsCache || (this.uidToContactsCache[e.id] = new o.PerUserBoltContactsCache(this.cacheType, e)), this.uidToContactsCache[e.id]
        }, t
    })(a);
    t.PerUserBoltContactsCacheStore = c, t.DefaultContactsCacheStore = new l(r.ContactCacheType.ALL);
    var u = t.DefaultContactsCacheStore;
    "OFF" !== i.LEGACY_CACHE_LIMIT && (u = new l(r.ContactCacheType.ALL), u.contactsCache = new o.BoltContactsCache(r.ContactCacheType.ALL, +i.LEGACY_CACHE_LIMIT)), t.LegacyContactsCacheStore = u, t.IndividualContactsCacheStore = new c(r.ContactCacheType.INDIVIDUAL)
}), define("modules/clean/contacts/cache_type", ["require", "exports"], function(e, t) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    (function(e) {
        e[e.ALL = 0] = "ALL", e[e.INDIVIDUAL = 1] = "INDIVIDUAL"
    })(t.ContactCacheType || (t.ContactCacheType = {})), t.CONTACT_CACHE_TYPE_TO_CONFIG = {
        ALL: {
            getUrl: "/contacts/get",
            refreshUrl: "/contacts/refresh",
            boltAppId: "contacts_cache_notify"
        },
        INDIVIDUAL: {
            getUrl: "/contacts/get_individual_for_user",
            refreshUrl: "/contacts/refresh_individual_for_user",
            boltAppId: "individual_contacts_cache_notify"
        }
    }
}), define("modules/clean/contacts/config", ["require", "exports", "tslib", "modules/constants/contacts", "modules/clean/contacts/cache_store"], function(e, t, n, r, o) {
    "use strict";

    function i(e) {
        return r.MERGE_SEARCH_ALLOWED[e.id] ? a.INDIVIDUAL_LOCAL_TEAM_REMOTE : a.ALL_LOCAL
    }

    function s(e) {
        return t.CONTACTS_SEARCH_MODE_TO_CONFIG[a[i(e)]]
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), r = n.__importStar(r);
    var a;
    (function(e) {
        e[e.ALL_LOCAL = 0] = "ALL_LOCAL", e[e.INDIVIDUAL_LOCAL_TEAM_REMOTE = 1] = "INDIVIDUAL_LOCAL_TEAM_REMOTE"
    })(a = t.ContactsSearchMode || (t.ContactsSearchMode = {})), t.LOCAL_ONLY_SEARCH_MODES = [a.ALL_LOCAL], t.CONTACTS_SEARCH_PREEMPTED_THRESHOLD = 300, t.CONTACTS_SEARCH_DEBOUNCE_WAIT = 10, t.CONTACTS_SEARCH_MODE_TO_CONFIG = {
        ALL_LOCAL: {
            localCacheStore: o.DefaultContactsCacheStore,
            sufficientResults: 1e3,
            remoteDebounceWait: t.CONTACTS_SEARCH_DEBOUNCE_WAIT
        },
        INDIVIDUAL_LOCAL_TEAM_REMOTE: {
            localCacheStore: o.IndividualContactsCacheStore,
            remoteEndpoint: "/team/search_contacts",
            remoteBatchEndpoint: "/team/search_contacts_batch",
            sufficientResults: 1e3,
            remoteDebounceWait: t.CONTACTS_SEARCH_DEBOUNCE_WAIT
        }
    }, t.getSearchModeForUser = i, t.getSearchConfigForUser = s
}), define("modules/clean/contacts/contact", ["require", "exports", "tslib", "modules/clean/contacts/types", "modules/core/exception", "modules/clean/validators/validators"], function(e, t, n, r, o, i) {
    "use strict";

    function s(e) {
        return e.toLowerCase()
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), r = n.__importDefault(r);
    var a = i.validators.check(i.validators.create(["EmailValidator"])),
        l = (function() {
            function e() {}
            return e.sorter = function(e, t) {
                return t.domain_contact && !e.domain_contact ? -1 : e.domain_contact && !t.domain_contact ? 1 : e.sort_key || t.sort_key ? e.sort_key ? t.sort_key ? e.sort_key > t.sort_key ? -1 : e.sort_key < t.sort_key ? 1 : 0 : -1 : 1 : 0
            }, e.is_valid = function(e) {
                return e.dbx_account_id ? e.type === r.default.DBX_ID || e.type === r.default.EMAIL : e.group_id ? e.type === r.default.NEW_STYLE_GROUP : !!e.email && e.type === r.default.EMAIL
            }, e.get_key = function(t) {
                return o.assert(e.is_valid(t), "invalid contact: type: " + t.type), t.dbx_account_id ? "DBX_USER-" + t.dbx_account_id : t.group_id ? "DBX_GROUP-" + t.group_id : "CONTACT-" + t.type + "-" + t.email
            }, e.get_index_tokens = function(e) {
                var t = [];
                return e.name && t.push(e.name), e.email && t.push(e.email), e.fname && t.push(e.fname), e.lname && t.push(e.lname), e.name_tokens && (t = t.concat(e.name_tokens)), t
            }, e
        })();
    t.ContactCommon = l;
    var c = (function() {
        function e(e) {
            var t = e.dbx_account_id,
                n = e.type,
                r = e.name,
                o = e.email,
                i = e.fb_id,
                s = e.group_id,
                a = e.group_size,
                l = e.photo_url,
                c = e.members,
                u = e.avatar_url,
                d = e.invalid,
                p = e.on_team,
                _ = e.domain_contact,
                h = e.dbx_team_id,
                m = e.nameMatch,
                f = e.emailMatch,
                y = e.pending,
                g = e.join_state,
                v = e.query,
                b = e.is_directory_restricted,
                w = void 0 !== b && b;
            this.dbx_account_id = t, this.type = n, this.name = r, this.email = o, this.fb_id = i, this.group_id = s, this.group_size = a, this.photo_url = l, this.members = c, this.avatar_url = u, this.invalid = d, this.on_team = p, this.domain_contact = _, this.dbx_team_id = h, this.nameMatch = m, this.emailMatch = f, this.pending = y, this.join_state = g, this.query = v, this.is_directory_restricted = !!w, this.team = this.on_team
        }
        return e.buildFromRawEmail = function(t) {
            var n = s(t);
            return new e({
                name: n,
                email: n,
                type: r.default.EMAIL,
                invalid: !a(t),
                on_team: !1,
                pending: !0,
                query: n
            })
        }, e.prototype.getKey = function() {
            return l.get_key(this)
        }, e.prototype.getContactID = function() {
            switch (this.type) {
                case r.default.FB:
                    return this.fb_id;
                case r.default.NEW_STYLE_GROUP:
                    return this.group_id;
                default:
                    return this.email
            }
        }, e
    })();
    t.Contact = c
}), define("modules/clean/contacts/contact_token_state", ["require", "exports"], function(e, t) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.ContactTokenState = {
        invalid: "invalid",
        warn: "warn",
        pending: "pending",
        ok: "ok"
    }
}), define("modules/clean/contacts/data_v2", ["require", "exports", "tslib", "modules/clean/ajax", "modules/clean/contacts/bloodhound_contacts_v2", "modules/clean/contacts/config", "modules/clean/contacts/contact", "modules/clean/contacts/types", "modules/clean/fuzzy"], function(e, t, n, r, o, i, s, a, l) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), r = n.__importStar(r), i = n.__importStar(i), a = n.__importDefault(a), l = n.__importDefault(l);
    var c = (function() {
        function e(e, t, n, r) {
            void 0 === n && (n = !0), void 0 === r && (r = !0), this.query = this.search, this.query_batch = this.searchBatch, this.user = e, this.filterFunc = t, this.excludeDomainContacts = n, this.excludeDirectoryRestrictedContacts = r, this.searchConfig = i.getSearchConfigForUser(e), this.searchMode = i.getSearchModeForUser(e), this.searchModeName = i.ContactsSearchMode[this.searchMode], o.BloodhoundContactsV2.getOrCreateForUser(this.user)
        }
        return e.prototype.search = function(e, t, n) {
            var r = this;
            if (e = this.normalizeQuery(e), "" === e) return t([]), void(n && n([]));
            var i = function(n) {
                    return r.processMatches(n, t, e)
                },
                s = function(t) {
                    return r.processMatches(t, n, e)
                };
            o.BloodhoundContactsV2.search(this.user, e, i, s)
        }, e.prototype.searchBatch = function(e, t, n) {
            var r = this,
                o = this.searchConfig.localCacheStore.getOrCreateForUser(this.user);
            if (o.is_loaded()) return this.searchBatchInternal(e, t, n);
            o.load_contacts(!0, function() {
                return r.searchBatchInternal(e, t, n)
            })
        }, e.prototype.searchBatchInternal = function(e, t, n) {
            for (var r = this, i = e.map(this.normalizeQuery).filter(function(e) {
                    return e.length > 0
                }), a = {}, l = function(e) {
                    var t = function(t) {
                        a[e] = r.processMatches(t, void 0, e)
                    };
                    o.BloodhoundContactsV2.search(c.user, e, t)
                }, c = this, u = 0, d = i; u < d.length; u++) {
                l(d[u])
            }
            if (t(a), this.searchConfig.remoteBatchEndpoint) {
                var p = function(e) {
                    if (n) {
                        var t = {},
                            o = function(n) {
                                if (e.hasOwnProperty(n)) {
                                    var o = a[n].map(s.ContactCommon.get_key),
                                        i = e[n].filter(function(e) {
                                            var t = s.ContactCommon.get_key(e);
                                            return o.every(function(e) {
                                                return e !== t
                                            })
                                        });
                                    t[n] = r.processMatches(i)
                                }
                            };
                        for (var i in e) o(i);
                        n(t)
                    }
                };
                this.searchRemoteBatch(i, p)
            }
        }, e.prototype.normalizeQuery = function(e) {
            return e.trim().toLowerCase()
        }, e.prototype.isSearchLocalOnly = function() {
            return i.LOCAL_ONLY_SEARCH_MODES.indexOf(this.searchMode) !== -1
        }, e.prototype.getStats = function() {
            var e = this.searchConfig.localCacheStore.getOrCreateForUser(this.user);
            return {
                numLocalContacts: e.get_contacts_count(),
                localContactsDownloadedTime: e.get_downloaded_time()
            }
        }, e.prototype.searchRemoteBatch = function(e, t) {
            r.WebRequest({
                url: this.searchConfig.remoteBatchEndpoint,
                type: "post",
                subject_user: this.user.id,
                dataType: "json",
                data: {
                    queries: JSON.stringify(e)
                },
                success: t
            })
        }, e.prototype.isTeamContact = function(e) {
            return this.user.is_team && null != e.team && e.team
        }, e.isDirectoryRestrictedContact = function(e, t) {
            var n = !!e.is_directory_restricted,
                r = t && t === e.email;
            return n && !r
        }, e.prototype.processMatches = function(t, n, r) {
            for (var o = [], i = 0, c = t; i < c.length; i++) {
                var u = c[i];
                r && (u.nameMatch = l.default.match(r, u.name || ""), u.emailMatch = l.default.match(r, u.email || "")), u.on_team = !(u.type === a.default.FB || !this.isTeamContact(u));
                var d = new s.Contact(u);
                d.pending = !1;
                var p = this.excludeDomainContacts && d.domain_contact,
                    _ = this.excludeDirectoryRestrictedContacts && e.isDirectoryRestrictedContact(d, r);
                p || _ || this.filterFunc && !this.filterFunc(d) || o.push(d)
            }
            return n && n(o), o
        }, e.prototype.getAll = function(e) {
            var t = this,
                n = this.searchConfig.localCacheStore.getOrCreateForUser(this.user);
            if (n.is_loaded()) {
                var r = o.BloodhoundContactsV2.getAll(this.user).map(function(e) {
                    return new s.Contact(e)
                });
                e(this.filterFunc ? r.filter(this.filterFunc) : r)
            } else n.load_contacts(!0, function(n) {
                if (n) {
                    var r = n.contacts;
                    e(t.filterFunc ? r.filter(t.filterFunc) : r)
                }
            })
        }, e
    })();
    t.ContactsDataSourceV2 = c
}), define("modules/clean/contacts/list", ["require", "exports", "tslib", "modules/clean/contacts/types"], function(e, t, n, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), r = n.__importDefault(r);
    var o = (function() {
        function e(e, t) {
            var n = this;
            this.filterContacts = this.filterContacts.bind(this), this.length = this.length.bind(this), this.slice = this.slice.bind(this), this.includeForUser = this.includeForUser.bind(this), this.includeForViewer = this.includeForViewer.bind(this), this.excludeByEmail = this.excludeByEmail.bind(this), this.excludeMe = this.excludeMe.bind(this), this.excludeNewStyleGroups = this.excludeNewStyleGroups.bind(this), this.excludeFacebook = this.excludeFacebook.bind(this), this.excludeTeamMembers = this.excludeTeamMembers.bind(this), this.excludePairedUserDuplicates = this.excludePairedUserDuplicates.bind(this), this.excludeNonTeam = this.excludeNonTeam.bind(this), this.excludeNonTeamActive = this.excludeNonTeamActive.bind(this), this.excludeSuspended = this.excludeSuspended.bind(this), this.sortByTeamFirst = this.sortByTeamFirst.bind(this), this._excludeType = this._excludeType.bind(this), this._lowercaseContact = this._lowercaseContact.bind(this), this.contacts = e, this.owningUserId = t, this.lcontacts = Array.from(this.contacts).map(function(e) {
                return n._lowercaseContact(e)
            })
        }
        return e.create_contacts_list = function(t) {
            return new e(t, null)
        }, e.create_per_user_contacts_list = function(t, n) {
            return new e(t, n)
        }, e.prototype.filterContacts = function(t) {
            return new e(this.contacts.filter(t), this.owningUserId)
        }, e.prototype.length = function() {
            return this.contacts.length
        }, e.prototype.slice = function(t, n) {
            return new e(this.contacts.slice(t, n), this.owningUserId)
        }, e.prototype.includeForUser = function(t) {
            return null != this.owningUserId ? this.owningUserId === t ? this : new e([], t) : (this.owningUserId = t, this.filterContacts(function(e) {
                return e.owning_user_id === t
            }))
        }, e.prototype.includeForViewer = function(e) {
            var t = e.get_user_ids();
            return this.filterContacts(function(e) {
                return Array.from(t).includes(e.owning_user_id)
            })
        }, e.prototype.excludeByEmail = function(e) {
            return e = e ? e.toLowerCase() : "", this.filterContacts(function(t) {
                return !(e === t.email.toLowerCase())
            })
        }, e.prototype.excludeMe = function() {
            return this.filterContacts(function(e) {
                return !e.is_owner
            })
        }, e.prototype.excludeNewStyleGroups = function() {
            return this._excludeType(r.default.NEW_STYLE_GROUP)
        }, e.prototype.excludeFacebook = function() {
            return this._excludeType(r.default.FB)
        }, e.prototype.excludeTeamMembers = function() {
            return this.filterContacts(function(e) {
                return !e.team
            })
        }, e.prototype.excludePairedUserDuplicates = function() {
            return this.filterContacts(function(e) {
                return !e.paired_user_duplicate
            })
        }, e.prototype.excludeNonTeam = function() {
            return this.filterContacts(function(e) {
                return e.team
            })
        }, e.prototype.excludeNonTeamActive = function() {
            return this.filterContacts(function(e) {
                return e.team && "active" === e.join_state
            })
        }, e.prototype.excludeSuspended = function() {
            return this.filterContacts(function(e) {
                return "suspended" !== e.join_state
            })
        }, e.prototype.sortByTeamFirst = function() {
            return new e(e.sortContactsByTeamFirst(this.contacts), this.owningUserId)
        }, e.sortContactsByTeamFirst = function(e) {
            for (var t = [], n = [], r = 0, o = Array.from(e); r < o.length; r++) {
                var i = o[r];
                i.team ? t.push(i) : n.push(i)
            }
            return t.concat(n)
        }, e.prototype._excludeType = function(e) {
            return this.filterContacts(function(t) {
                return t.type !== e
            })
        }, e.prototype._lowercaseContact = function(e) {
            var t = {};
            for (var n in e) {
                var r = e[n];
                ("string" == typeof r || r instanceof String) && (r = r.toLowerCase()), t[n] = r
            }
            return t
        }, e
    })();
    t.default = o
}), define("modules/clean/contacts/tokenizer", ["require", "exports", "tslib", "external/classnames", "react", "external/react-dom-factories", "external/prop-types", "jquery", "modules/clean/analytics", "modules/clean/avatar/contact_avatar", "modules/clean/contacts/config", "modules/clean/contacts/contact", "modules/clean/contacts/contact_token_state", "modules/clean/contacts/data_v2", "modules/clean/contacts/typeahead", "modules/clean/contacts/types", "modules/clean/em_string", "modules/clean/tokenizer", "modules/clean/validators/validators", "modules/core/browser", "modules/core/i18n"], function(e, t, n, r, o, i, s, a, l, c, u, d, p, _, h, m, f, y, g, v, b) {
    "use strict";

    function w(e, t, n) {
        return void 0 !== e && null !== e && "function" == typeof e[t] ? n(e, t) : void 0
    }

    function S(e, t) {
        return void 0 !== e && null !== e ? t(e) : void 0
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), r = n.__importDefault(r), o = n.__importDefault(o), i = n.__importStar(i), s = n.__importStar(s), a = n.__importDefault(a), c = n.__importDefault(c), u = n.__importStar(u), m = n.__importDefault(m), v = n.__importStar(v), t.ContactTokenState = p.ContactTokenState;
    var E, C, k = o.default.createElement;
    t.SLOW_CONTACT_SEARCH_THRESHOLD = 100;
    var A = g.validators.check(g.validators.create(["EmailValidator"])),
        T = (function(e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t._getTokenName = function() {
                    switch (t.props.contact.type) {
                        case m.default.FB:
                            return "fb_ids";
                        case m.default.EMAIL:
                            return "emails";
                        case m.default.NEW_STYLE_GROUP:
                            return "new_style_group_ids";
                        default:
                            return "invalids"
                    }
                }, t._getTokenValue = function() {
                    switch (t.props.contact.type) {
                        case m.default.FB:
                            return t.props.contact.fb_id;
                        case m.default.NEW_STYLE_GROUP:
                            return t.props.contact.group_id;
                        default:
                            return t.props.contact.email
                    }
                }, t._renderIcon = function() {
                    return t.props.contact.type === m.default.FB ? i.img({
                        className: "token-icon",
                        src: "/static/images/icons/fb_16-vflbiYTkC.png"
                    }) : t.props.contact.type === m.default.NEW_STYLE_GROUP || t.props.contact.dbx_account_id || t.props.contact.photo_url ? k(c.default, {
                        dimension: 16,
                        contact: t.props.contact,
                        optionalClass: "token-icon"
                    }) : ""
                }, t._renderInput = function() {
                    return i.input({
                        type: "hidden",
                        name: t._getTokenName(),
                        value: t._getTokenValue()
                    })
                }, t._renderText = function() {
                    var e = t.props.contact.name || t.props.contact.email;
                    return f.Emstring.em_snippet(e, 22)
                }, t._makeCloseButton = function() {
                    return t.props.onRemove ? i.span({
                        className: "tokenizer-token-close",
                        onClick: function(e) {
                            return e.preventDefault(), e.stopPropagation(), t.props.onRemove(t.props.contact), !1
                        },
                        dangerouslySetInnerHTML: {
                            __html: "&nbsp;"
                        }
                    }) : ""
                }, t
            }
            return n.__extends(t, e), t.prototype.render = function() {
                var e = {
                    "tokenizer-token": !0,
                    "contact-token": !0,
                    invalid: this.props.tokenState === p.ContactTokenState.invalid,
                    warned: this.props.tokenState === p.ContactTokenState.warn,
                    pending: this.props.tokenState === p.ContactTokenState.pending
                };
                e[this.props.customClass] = null != this.props.customClass, e[this.props.className] = null != this.props.className;
                var t = r.default(e);
                return i.a(a.default.extend({
                    tabIndex: -1
                }, this.props, {
                    className: t
                }), this._renderInput(), this._renderIcon(), this._renderText(), this._makeCloseButton())
            }, t.displayName = "ContactsToken", t.propTypes = {
                customClass: s.string,
                className: s.string,
                contact: s.object.isRequired,
                onRemove: s.func,
                tabIndex: s.number,
                tokenState: s.oneOf((function() {
                    var e = [];
                    for (E in p.ContactTokenState) C = p.ContactTokenState[E], e.push(C);
                    return e
                })()).isRequired
            }, t
        })(o.default.Component),
        I = {
            basic: function(e) {
                var t = e.name && !e.invalid && e.email !== e.name;
                return {
                    state: e.invalid ? p.ContactTokenState.invalid : p.ContactTokenState.ok,
                    msg: t ? e.email : null
                }
            },
            warn: function(e) {
                return {
                    state: e.pending ? p.ContactTokenState.pending : e.on_team ? p.ContactTokenState.ok : e.invalid ? p.ContactTokenState.invalid : p.ContactTokenState.warn,
                    msg: null
                }
            },
            forbid: function(e) {
                return {
                    state: e.pending ? p.ContactTokenState.pending : e.on_team ? p.ContactTokenState.ok : p.ContactTokenState.invalid,
                    msg: null
                }
            }
        };
    t.ContactTokenValidator = I;
    var D = (function(e) {
        function t() {
            var t = null !== e && e.apply(this, arguments) || this;
            return t._initContactsDataSource = function(e) {
                var t = e.user,
                    n = e.customContactFilter,
                    r = e.excludeDomainContacts,
                    o = e.customContactsDataSourceFactory;
                return o ? o(t, n) : new _.ContactsDataSourceV2(t, n, r)
            }, t._validateTokens = function(e, t) {
                if (void 0 === t && (t = !1), (null != e ? e.length : void 0) > 0) return (function() {
                    for (var n = [], r = 0, o = Array.from(e); r < o.length; r++) {
                        var i = o[r];
                        i.type === m.default.EMAIL && (i.invalid = !A(i.email)), t ? (i.query = i.query || i.email || i.name, n.push(i.pending = !0)) : n.push(void 0)
                    }
                    return n
                })()
            }, t.finishLogging = function(e) {
                var n = t.contactsDataSource.getStats().numLocalContacts;
                if (t._flush_unfinished_queries_cache(), t.props.shouldLogContactSearch) return t.contact_search_logger.log_records(t.props.user.id, e, n)
            }, t._logTokenChangeEvent = function(e, n, r) {
                if (void 0 === n && (n = !1), void 0 === r && (r = {}), t.contact_search_logger) {
                    if (n) return t.contact_search_logger.flag_record_as_removed(e.getContactID());
                    var o = {
                        context: t._getLoggingContext(),
                        contact_type: e.type,
                        contact_id: e.getContactID(),
                        contact_name: e.name,
                        sort_variant: null,
                        event_ts: w(v.performance(), "now", function(e) {
                            return e.now()
                        })
                    };
                    for (E in r) C = r[E], o[E] = C;
                    return t.contact_search_logger.add_record(o)
                }
            }, t._logSearchComplete = function(e, n, r) {
                if (void 0 === r && (r = !0), t._shouldLogSearch() && e) {
                    var o = v.performance().now(),
                        i = t.unfinished_contact_search_queries[e];
                    if (i) {
                        var s = i.begin_time;
                        !("ttfr" in i) && n > 0 && (i.ttfr = Math.floor(o - s)), r ? (i.local_duration = Math.floor(o - s), i.num_local_results = n) : (i.remote_duration = Math.floor(o - s), i.num_additional_remote_results = n), i.num_results += n;
                        return (function() {
                            return t.contactsDataSource.isSearchLocalOnly() && r || !r
                        })() ? (i = t._prepareSearchStatsForLogging(i, e, o, !0), t.contact_search_logger.add_timing_record(i), t.contact_search_logger.count_search(i.is_slow), delete t.unfinished_contact_search_queries[e]) : void 0
                    }
                }
            }, t._logSearchBegin = function(e) {
                if (t._shouldLogSearch() && e) {
                    var n = v.performance().now();
                    return t._flush_unfinished_queries_cache(n), t.unfinished_contact_search_queries[e] = {
                        begin_time: n,
                        num_results: 0
                    }
                }
            }, t._shouldLogSearch = function() {
                return t.props.shouldLogContactSearch && null != t.contact_search_logger && null != S(v.performance(), function(e) {
                    return e.now
                })
            }, t._flush_unfinished_queries_cache = function(e) {
                if (t._shouldLogSearch()) {
                    null == e && (e = v.performance().now());
                    for (var n in t.unfinished_contact_search_queries) {
                        var r = t.unfinished_contact_search_queries[n];
                        e - r.begin_time < u.CONTACTS_SEARCH_PREEMPTED_THRESHOLD && (r.is_preempted = !0), r = t._prepareSearchStatsForLogging(r, n, e, !1), t.contact_search_logger.add_timing_record(r), t.contact_search_logger.count_search(r.is_slow)
                    }
                    return t.unfinished_contact_search_queries = {}
                }
            }, t._prepareSearchStatsForLogging = function(e, n, r, o) {
                var i = e.begin_time;
                e.duration = Math.floor(r - i), "ttfr" in e ? e.is_slow = e.ttfr > 100 : o && 0 === e.num_results ? e.is_slow = !1 : e.is_slow = e.duration > 100;
                var s = t.contactsDataSource.getStats().localContactsDownloadedTime;
                return e.started_before_download = null == s || i < s, "is_preempted" in e || (e.is_preempted = !1), e.context = t._getLoggingContext(), e.query_length = n.length, e.is_finished = o, e
            }, t._getLoggingContext = function() {
                var e = "react_tokenizer";
                return null != t.props.context && (e += "_" + t.props.context), e
            }, t.addExternalContacts = function(e) {
                return t.refs.tokenizer.addExternalTokens(e)
            }, t._renderToken = function(e) {
                return k(T, {
                    contact: e,
                    tabIndex: t.props.disableAdditionalInput ? 0 : -1,
                    tokenState: t.props.customContactValidator(e).state
                })
            }, t._renderTokenHover = function(e) {
                return t.props.customContactValidator(e).msg
            }, t._autoSelectMatch = function(e, n) {
                if (!n || !e) return null;
                e = t.contactsDataSource.normalizeQuery(e);
                for (var r = {
                        email: [],
                        name: []
                    }, o = 0, i = Array.from(n); o < i.length; o++) {
                    var s = i[o],
                        a = s.email ? t.contactsDataSource.normalizeQuery(s.email) : null,
                        l = s.name ? t.contactsDataSource.normalizeQuery(s.name) : null;
                    e === a ? r.email.push(s) : e === l && r.name.push(s)
                }
                for (var c = 0, u = ["email", "name"]; c < u.length; c++) {
                    var d = u[c];
                    if (1 === r[d].length) return r[d][0]
                }
                return null
            }, t._queryTokens = function(e, n) {
                var r = e.filter(function(e) {
                    return e.pending && e.query
                });
                if (r.length) {
                    var o = Array.from(r).map(function(e) {
                            return e.query
                        }),
                        i = function(r) {
                            var o = [];
                            e = [];
                            for (var i = t.serializeInputData(n).tokens, s = 0, a = Array.from(i); s < a.length; s++) {
                                var l = a[s],
                                    c = l;
                                if (l.pending && l.query) {
                                    var u = t.contactsDataSource.normalizeQuery(l.query),
                                        d = t._autoSelectMatch(u, r[u]);
                                    d && (c = d)
                                }
                                E = c.getKey(), Array.from(o).includes(E) || (o.push(E), e.push(c))
                            }
                            return n.replaceTokens(e)
                        },
                        s = i,
                        a = i;
                    return t.contactsDataSource.searchBatch(o, s, a)
                }
            }, t.tokenizeEmails = function(e, t) {
                void 0 === t && (t = !1);
                var n, r = e.split(/[,|;\n ]+/);
                2 === r.length && A(r[0] + r[1]) ? (n = [r[0] + r[1]], t = !0) : n = 2 === r.length && A(r[0]) && "" === r[1] ? r : e.split(/[,|;\n]+/);
                var o = "";
                t || (o = n.pop());
                for (var i = [], s = 0, a = Array.from(n); s < a.length; s++) {
                    var l = a[s],
                        c = l.trim();
                    "" !== c && i.push(new d.Contact({
                        name: c,
                        email: c,
                        type: m.default.EMAIL,
                        invalid: !A(c),
                        on_team: !1,
                        pending: !0,
                        query: c
                    }))
                }
                return {
                    tokens: i,
                    value: o
                }
            }, t.serializeInputData = function(e) {
                return e = e || t.refs.tokenizer, e.serializeInputData()
            }, t.getContacts = function() {
                var e = t.serializeInputData(),
                    n = e.tokens,
                    r = e.value,
                    o = t.tokenizeEmails(r, !0);
                return n.concat(o.tokens)
            }, t.tokenizeAll = function() {
                return t.refs.tokenizer.tokenizeAll()
            }, t
        }
        return n.__extends(t, e), t.prototype.componentWillReceiveProps = function(e) {
            e.user === this.props.user && e.customContactFilter.toString() === this.props.customContactFilter.toString() || (this.contactsDataSource = this._initContactsDataSource(e)), this._validateTokens(null != e.populatedInputData ? e.populatedInputData.tokens : void 0)
        }, t.prototype.componentWillMount = function() {
            this.contactsDataSource = this._initContactsDataSource(this.props), this._validateTokens(null != this.props.populatedInputData ? this.props.populatedInputData.tokens : void 0, !0)
        }, t.prototype.componentDidMount = function() {
            var e = this.props,
                t = e.shouldLogContactSearch,
                n = e.populatedInputData,
                r = e.onContentsChange;
            if (t && (this.contact_search_logger = new l.ContactSearchLogger(this._getLoggingContext(), this.contactsDataSource.searchModeName), this.unfinished_contact_search_queries = {}), n.tokens && n.tokens.length || n.value && n.value.length) {
                var o = this.serializeInputData(),
                    i = o.tokens,
                    s = o.value;
                "function" == typeof r && r(i, s)
            }
        }, t.prototype.render = function() {
            var e = this;
            return k(y.Tokenizer, {
                ref: "tokenizer",
                dataSource: this.contactsDataSource,
                customClass: this.props.customClass,
                initialInputText: this.props.populatedInputData.value,
                placeholderText: this.props.placeholder,
                renderSelector: function() {
                    return k(h.ContactsTypeaheadSelector, {
                        showContactImport: e.props.showContactImport,
                        teamGroupInfo: e.props.teamGroupInfo,
                        user: e.props.user
                    })
                },
                renderInput: function() {
                    return i.textarea({
                        className: "contacts-tokenizer-input",
                        id: e.props.id,
                        rows: 1,
                        autoCapitalize: "off"
                    })
                },
                renderToken: this._renderToken,
                renderTokenHover: this._renderTokenHover,
                onContentsChange: this.props.onContentsChange,
                onTokensAdd: this._queryTokens,
                stringTokenizer: this.tokenizeEmails,
                populatedTokenData: this.props.populatedInputData.tokens,
                tabIndex: this.props.tabIndex,
                tokenSpacing: this.props.tokenSpacing,
                focusOnMount: this.props.focusOnMount,
                logSearchBegin: this._logSearchBegin,
                logSearchComplete: this._logSearchComplete,
                logTokenChangeEvent: this._logTokenChangeEvent,
                disableAdditionalInput: this.props.disableAdditionalInput,
                disabled: this.props.disabled,
                resetTokenData: this.props.resetTokenData
            }, this.props.children)
        }, t.displayName = "ContactsTokenizer", t.propTypes = {
            user: s.object.isRequired,
            context: s.string,
            customClass: s.string,
            customContactFilter: s.func,
            excludeDomainContacts: s.bool,
            customContactValidator: s.func,
            focusOnMount: s.bool,
            id: s.string,
            onContentsChange: s.func,
            placeholder: s.string,
            populatedInputData: s.shape({
                tokens: s.array,
                value: s.string
            }),
            tabIndex: s.number,
            showContactImport: s.bool,
            shouldLogContactSearch: s.bool,
            teamGroupInfo: s.shape({
                id: s.string,
                name: s.string
            }),
            tokenSpacing: s.number,
            disableAdditionalInput: s.bool,
            disabled: s.bool,
            resetTokenData: s.bool,
            customContactsDataSourceFactory: s.func
        }, t.defaultProps = {
            customContactFilter: function(e) {
                return !0
            },
            customContactValidator: I.basic,
            excludeDomainContacts: !0,
            focusOnMount: !1,
            id: null,
            placeholder: b._("Invite more people"),
            populatedInputData: {
                tokens: [],
                value: ""
            },
            tokenSpacing: 4,
            showContactImport: !1,
            shouldLogContactSearch: !1,
            teamGroupInfo: null,
            disableAdditionalInput: !1,
            disabled: !1,
            resetTokenData: !1
        }, t
    })(o.default.Component);
    t.ContactsTokenizer = D
}), define("modules/clean/contacts/typeahead", ["require", "exports", "tslib", "external/classnames", "external/create-react-class", "react", "external/react-dom-factories", "external/prop-types", "external/lodash", "modules/clean/avatar/contact_avatar", "modules/clean/contacts/types", "modules/clean/contacts/util", "modules/clean/css", "modules/clean/em_string", "modules/clean/profile_services/popup_handler", "modules/clean/profile_services/profile_services_constants", "modules/clean/profile_services/profile_services_link", "modules/clean/react/flag", "modules/clean/react/image", "modules/clean/react/paging_list", "modules/clean/react/sprite", "modules/clean/react/title_bubble", "modules/clean/static_urls", "modules/clean/typeahead", "modules/core/exception", "modules/core/i18n", "modules/core/notify"], function(e, t, n, r, o, i, s, a, l, c, u, d, p, _, h, m, f, y, g, v, b, w, S, E, C, k, A) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), r = n.__importDefault(r), o = n.__importDefault(o), i = n.__importDefault(i), s = n.__importStar(s), a = n.__importStar(a), l = n.__importStar(l), c = n.__importDefault(c), u = n.__importDefault(u), d = n.__importDefault(d), p = n.__importStar(p), m = n.__importDefault(m), y = n.__importStar(y), v = n.__importDefault(v);
    var T = i.default.createElement,
        I = function(e, t) {
            return l.assignIn({}, e, t)
        },
        D = I(E.TypeaheadSelectorMixin, {
            getOptions: function() {
                var e = this;
                if (null == this.props.queryOptions) return [];
                if (this.state.importsExpanded) return Array.from(m.default.importable_contact_services()).map(function(t) {
                    return new O({
                        provider: t,
                        connected: e.profile_services.service_is_connected(t)
                    })
                });
                var t = this.props.queryOptions.slice();
                return this.props.teamGroupInfo ? t.push(d.default.teamGroupInfoToContact(this.props.teamGroupInfo)) : (null != this.profile_services ? this.profile_services.has_unconnected_services(!0) : void 0) && t.push(new M), t
            },
            renderOption: function(e) {
                return e instanceof M ? T(P) : e instanceof O ? T(L, {
                    import: e
                }) : this.props.renderQueryOption(e)
            },
            onSelect: function(e) {
                if (e instanceof M) return this._changeSelectionIndex(0), this.setState({
                    importsExpanded: !0
                });
                if (e instanceof O) {
                    var t = void 0;
                    if (C.assert((t = e.provider, Array.from(m.default.importable_contact_services()).includes(t)), "invalid party contact provider " + e.provider), this.profile_services.service_is_connected(e.provider)) {
                        var n = k._("You're already connected to %(service_name)s").format({
                            service_name: m.default.to_name(e.provider)
                        });
                        return void A.Notify.success(n)
                    }
                    return this.link_handler.auth_service_with_user(e.provider, this.props.user.id, function(e) {
                        return f.ProfileServicesLinkingHandler.show_import_notifications(e)
                    })
                }
                return this.props.onSelect(e)
            },
            reset: function() {
                return this._changeSelectionIndex(0), this.setState({
                    importsExpanded: !1
                })
            }
        }),
        x = o.default({
            displayName: "ContactsTypeaheadSelector",
            mixins: [D],
            propTypes: {
                customClass: a.string,
                onSelect: a.func.isRequired,
                queryOptions: a.array,
                renderQueryOption: a.func.isRequired,
                showContactImport: a.bool,
                teamGroupInfo: a.shape({
                    id: a.string,
                    name: a.string
                }),
                user: a.object.isRequired
            },
            componentWillMount: function() {
                if (this.link_handler = new f.ProfileServicesLinkingHandler, this.profile_services = null, null === this.props.teamGroupInfo && this.props.showContactImport && null != this.props.user) return this.profile_services = f.LinkedProfileServices.get_linked_profile_services_for_user(this.props.user.id)
            },
            componentWillReceiveProps: function(e) {
                return 0 === (null != e.queryOptions ? e.queryOptions.length : void 0) ? this._changeSelectionIndex(-1) : (null != e.queryOptions ? e.queryOptions.length : void 0) > 0 && this.state.selectionIndex === -1 ? this._changeSelectionIndex(0) : void 0
            },
            shouldComponentUpdate: function(e, t) {
                return !l.isEqual(e, this.props) || !l.isEqual(t, this.state)
            },
            getDefaultProps: function() {
                return {
                    showContactImport: !1,
                    teamGroupInfo: null,
                    onSelect: function(e) {},
                    renderQueryOption: function(e) {
                        return T(R, {
                            contact: e
                        })
                    }
                }
            },
            onSelectionIndexChange: function(e) {
                return null != this.refs.pagingList ? this.refs.pagingList.scrollAround(e) : void 0
            },
            render: function() {
                if (p.require_css("/static/css/react/contacts_typeahead-vflRzfV9H.css"), !this.getOptions().length) return s.div({});
                var e = {
                    "typeahead-selector": !0,
                    "contacts-selector": !0
                };
                return e[this.props.customClass] = null != this.props.customClass, T(v.default, {
                    customClass: r.default(e),
                    pageSize: 4,
                    itemSize: 54,
                    ref: "pagingList"
                }, this.renderOptions())
            }
        });
    t.ContactsTypeaheadSelector = x;
    var R = (function(e) {
        function t() {
            var t = null !== e && e.apply(this, arguments) || this;
            return t._renderPrimary = function() {
                return t._renderMatch(t.props.contact.name, t.props.contact.nameMatch)
            }, t._renderSecondary = function() {
                switch (t.props.contact.type) {
                    case u.default.EMAIL:
                        return t.props.contact.email === t.props.contact.name ? "" : t._renderMatch(t.props.contact.email, t.props.contact.emailMatch);
                    case u.default.FB:
                        return k._("Facebook message");
                    case u.default.NEW_STYLE_GROUP:
                        return t.props.contact.members;
                    default:
                        return ""
                }
            }, t._renderMatch = function(e, t) {
                if (e && (e = _.Emstring.em_snippet(e, 22)), !t) return e;
                for (var n = e.indexOf("…"), r = 0, o = [], i = 0, a = Array.from(t.highlighted); i < a.length; i++) {
                    var l = a[i],
                        c = l[0],
                        u = l[1];
                    c > r && o.push(e.slice(r, c));
                    var d = c + u;
                    d > n && n !== -1 && (d = n);
                    var p = e.slice(c, d);
                    o.push(s.strong({
                        key: "highlight-" + p + "-" + c
                    }, p)), r = d
                }
                return r < e.length && o.push(e.slice(r)), o
            }, t._renderIcon = function() {
                return s.div({
                    className: "u-pad-right-xs"
                }, T(c.default, {
                    dimension: 32,
                    contact: t.props.contact,
                    optionalClass: "contact-icon"
                }))
            }, t._renderDomainTooltip = function() {
                return s.div({
                    className: "u-pad-right-xs"
                }, T(w.TitleBubble, {
                    content: k._("Suggested contact from your domain"),
                    position: w.TitleBubble.POSITIONS.BOTTOM
                }, T(b.Sprite, {
                    group: "web",
                    name: "info",
                    alt: k._("Domain contact")
                })))
            }, t
        }
        return n.__extends(t, e), t.prototype.render = function() {
            var e;
            e = {
                "contacts-typeahead-option": !0
            }, e[this.props.customClass] = null != this.props.customClass, null != this.props.className && (e[this.props.className] = !0);
            var t = {
                primary: this._renderPrimary(),
                secondary: this._renderSecondary()
            };
            return t = l.pickBy(t, function(e) {
                return "" !== e
            }), s.li(I(this.props, {
                className: r.default(e)
            }), T(y.Flag, {
                leftAttachment: this._renderIcon(),
                rightAttachment: this.props.contact.domain_contact ? this._renderDomainTooltip() : void 0
            }, (function() {
                var n = [];
                for (var o in t) {
                    var i = t[o];
                    e = {
                        "option-only": 1 === l.size(t)
                    }, e["option-" + o] = !0, n.push(s.div({
                        className: r.default(e),
                        key: "option-" + o
                    }, i))
                }
                return n
            })()))
        }, t.displayName = "ContactsTypeaheadSelectorOption", t.propTypes = {
            contact: a.object.isRequired,
            customClass: a.string
        }, t
    })(i.default.Component);
    t.ContactsTypeaheadSelectorOption = R;
    var M = (function() {
            function e() {}
            return e.prototype.getKey = function() {
                return "expand-importer"
            }, e
        })(),
        P = (function(e) {
            function t() {
                return null !== e && e.apply(this, arguments) || this
            }
            return n.__extends(t, e), t.prototype.render = function() {
                var e = {
                    "expand-imports-option": !0,
                    "contacts-typeahead-option": !0
                };
                return null != this.props.className && (e[this.props.className] = !0), s.li(I(this.props, {
                    className: r.default(e)
                }), T(y.Flag, {
                    leftAttachment: T(g.Image, {
                        className: "u-pad-right-xs",
                        src: S.static_url("/static/images/icons/icon-import-vflOL9sCs.png"),
                        srcHiRes: S.static_url("/static/images/icons/icon-import@2x-vfluE8TBO.png")
                    })
                }, s.div({
                    className: "option-primary option-only"
                }, k._("Import contacts"))))
            }, t.displayName = "ExpandImportOption", t
        })(i.default.Component);
    t.ExpandImportOption = P;
    var O = (function() {
            function e(e) {
                var t = e.provider,
                    n = e.connected;
                this.provider = t, this.connected = n
            }
            return e.prototype.getKey = function() {
                return "third-party-import" + this.provider
            }, e
        })(),
        L = (function(e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t.state = {
                    showSpinner: !1
                }, t.show_contact_import_spinner = function(e) {
                    if (t.props.import.provider === e.provider) return t.setState({
                        showSpinner: !0
                    })
                }, t
            }
            return n.__extends(t, e), t.prototype.componentDidMount = function() {
                return this.authCompleteListenerToken = h.addAuthCompleteListener(this.show_contact_import_spinner)
            }, t.prototype.componentWillUnmount = function() {
                return h.removeAuthCompleteListener(this.authCompleteListenerToken)
            }, t.prototype.render = function() {
                var e = this.props.import,
                    t = e.provider,
                    n = e.connected,
                    o = m.default.to_name(t);
                !n && this.state.showSpinner && (o = k._("Importing %(service_name)s Contacts").format({
                    service_name: o
                }));
                var i = n ? k._("Connected") : "",
                    a = {
                        "third-party-option": !0,
                        "contacts-typeahead-option": !0
                    };
                return null != this.props.className && (a[this.props.className] = !0), s.li(I(this.props, {
                    className: r.default(a)
                }), !n && this.state.showSpinner ? s.div({
                    className: "option-spinner"
                }, s.img({
                    src: "/static/images/icons/ajax-loading-small-blue-vflVk_QNP.gif"
                })) : void 0, T(y.Flag, {
                    spacing: "xs",
                    leftAttachment: T(g.Image, {
                        alt: "",
                        src: S.static_url(m.default.to_img_legacy(t)[0]),
                        srcHiRes: S.static_url(m.default.to_img_legacy(t)[1])
                    })
                }, s.div({
                    className: r.default({
                        "option-primary": !0,
                        "option-only": !n
                    })
                }, o, n ? s.div({
                    className: "option-secondary u-font-meta"
                }, i) : void 0)))
            }, t.displayName = "ThirdPartyImportOption", t.propTypes = {
                import: a.object.isRequired
            }, t
        })(i.default.Component);
    t.ThirdPartyImportOption = L
}), define("modules/clean/contacts/types", ["require", "exports"], function(e, t) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var n;
    (function(e) {
        e[e.EMAIL = 0] = "EMAIL", e[e.FB = 1] = "FB", e[e.INVALID_ID = 2] = "INVALID_ID", e[e.NEW_STYLE_GROUP = 4] = "NEW_STYLE_GROUP", e[e.DBX_ID = 5] = "DBX_ID"
    })(n || (n = {})), t.default = n
}), define("modules/clean/contacts/util", ["require", "exports", "tslib", "modules/clean/contacts/contact", "modules/clean/contacts/types"], function(e, t, n, r, o) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), o = n.__importDefault(o);
    var i = (function() {
        function e() {}
        return e.activityUserToContact = function(e, t) {
            return void 0 === t && (t = 0), {
                dbx_account_id: e.unique_id,
                fname: e.fname,
                lname: e.lname,
                name: e.display_name,
                name_tokens: [e.fname, e.lname],
                email: e.email,
                type: o.default.DBX_ID,
                priority: t,
                photo_url: e.photo_circle_url
            }
        }, e.teamGroupInfoToContact = function(e) {
            return new r.Contact({
                group_id: e.id,
                group_size: e.group_size,
                type: o.default.NEW_STYLE_GROUP,
                name: e.name,
                on_team: !0,
                pending: !1
            })
        }, e
    })();
    t.default = i
}), define("modules/clean/flux/store_listener", ["require", "exports", "tslib", "external/create-react-class", "react"], function(e, t, n, r, o) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), r = n.__importDefault(r), o = n.__importDefault(o);
    var i = function(e, t, n) {
        return r.default({
            displayName: "StoreListener(" + (null != e.displayName ? e.displayName : "Unknown") + ")",
            getInitialState: function() {
                return {
                    childProps: n(this.props, t)
                }
            },
            componentDidMount: function() {
                for (var e = 0, r = Object.keys(t || {}); e < r.length; e++) {
                    t[r[e]].add_change_listener(this._handleStoreChanged)
                }
                return this.setState({
                    childProps: n(this.props, t)
                })
            },
            componentWillUnmount: function() {
                var e = this;
                return (function() {
                    for (var n = [], r = 0, o = Object.keys(t || {}); r < o.length; r++) {
                        var i = o[r],
                            s = t[i];
                        n.push(s.remove_change_listener(e._handleStoreChanged))
                    }
                    return n
                })()
            },
            render: function() {
                for (var t = {
                        ref: "wrapped"
                    }, n = 0, r = Object.keys(this.state.childProps || {}); n < r.length; n++) {
                    var i = r[n],
                        s = this.state.childProps[i];
                    t[i] = s
                }
                return o.default.createElement(e, t, this.props.children)
            },
            getWrappedComponent: function() {
                return this.refs.wrapped
            },
            getStores: function() {
                return t
            },
            _handleStoreChanged: function() {
                if (this.isMounted()) {
                    var e = n(this.props, t);
                    if (null != e) return this.setState({
                        childProps: e
                    })
                }
            }
        })
    };
    t.listenToStores = i
}), define("modules/clean/growth/experiments/overquota_sharing_helper", ["require", "exports", "modules/core/i18n"], function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.getModalConfigSubgrowthProShmCtaCopy = function(e) {
        void 0 === e && (e = "OFF");
        var t = n._("Upgrade to add folder"),
            r = {
                buttonText: t,
                buttonTextUntranslated: "Upgrade to add folder",
                secondaryCtaText: "",
                showX: !0
            };
        return "OFF" !== e && (["V1", "V4", "V7"].includes(e) && (r.buttonText = n._("Upgrade for more space"), r.buttonTextUntranslated = "Upgrade for more space"), ["V2", "V5", "V8"].includes(e) && (r.buttonText = n._("Upgrade to collaborate"), r.buttonTextUntranslated = "Upgrade to collaborate"), ["V3", "V4", "V5"].includes(e) && (r.secondaryCtaText = n._("Cancel")), ["V6", "V7", "V8"].includes(e) && (r.secondaryCtaText = n._("I understand, but no thanks")), ["V3", "V4", "V5", "V6", "V7", "V8"].includes(e) && (r.showX = !1)), r
    }
}), define("modules/clean/react/calendar", ["require", "exports", "tslib", "external/classnames", "spectrum/dropdown_button", "react", "external/react-dom", "modules/clean/datetime", "modules/clean/react/css", "modules/clean/react/sprite", "modules/core/i18n"], function(e, t, n, r, o, i, s, a, l, c, u) {
    "use strict";

    function d(e, t) {
        return e.getDate() === t.getDate() && e.getMonth() === t.getMonth() && e.getFullYear() === t.getFullYear()
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), r = n.__importDefault(r), i = n.__importDefault(i), s = n.__importStar(s), a = n.__importStar(a);
    var p = function() {},
        _ = 0,
        h = function(e) {
            void 0 === e && (e = new Date);
            var t = new Date(e.getTime());
            t.setFullYear(t.getFullYear() - 1);
            var n = new Date(e.getTime());
            return n.setFullYear(n.getFullYear() + 1), {
                disabled: !1,
                isMaestroDesign: !1,
                firstDay: t,
                lastDay: n,
                alignAtLeft: !0,
                onDateChange: p,
                calendarIsInitiallyVisible: !1
            }
        },
        m = (function(e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t.state = {
                    currentDate: t.props.initDate,
                    calendarIsVisible: t.props.calendarIsInitiallyVisible
                }, t.setCalendarDateViewRef = function(e) {
                    t.refCalendarDateView = s.findDOMNode(e)
                }, t.setCalendarViewRef = function(e) {
                    t.refCalendarView = s.findDOMNode(e)
                }, t._handleDocumentClick = function(e) {
                    if (t.refCalendarView && t.refCalendarDateView) {
                        var n = e.target;
                        !t.state.calendarIsVisible || t.refCalendarView.contains(n) || t.refCalendarDateView.contains(n) || (e.preventDefault(), e.stopPropagation(), t.closeCalendar())
                    }
                }, t.toggleCalendarView = function() {
                    t.setState({
                        calendarIsVisible: !t.state.calendarIsVisible
                    })
                }, t.handleDateSelected = function(e) {
                    t.setState({
                        currentDate: e
                    }), t.props.onDateChange(e), t.closeCalendar()
                }, t.closeCalendar = function() {
                    t.setState({
                        calendarIsVisible: !1
                    }), t.refCalendarDateView && t.refCalendarDateView.focus(), t.props.onCalendarClose && t.props.onCalendarClose()
                }, t._startOfDay = function(e) {
                    var t = new Date(e.getTime());
                    return t.setHours(0), t.setMinutes(0), t.setSeconds(0), t.setMilliseconds(0), t
                }, t._getDateViewText = function() {
                    var e = function(e) {
                        return a.format_date(e, a.localized_date_format)
                    };
                    return t.props.placeholderText && !t.props.initDate ? t.props.placeholderText : e(t.state.currentDate ? t.state.currentDate : new Date)
                }, t
            }
            return n.__extends(t, e), t.prototype.componentDidMount = function() {
                document.addEventListener("click", this._handleDocumentClick)
            }, t.prototype.componentWillUnmount = function() {
                document.removeEventListener("click", this._handleDocumentClick)
            }, t.prototype.render = function() {
                var e, t = {
                    "c-datepicker": !0,
                    "scooter-css u-l-fl clearfix": !this.props.isMaestroDesign
                };
                return this.state.calendarIsVisible && (e = i.default.createElement(y, {
                    ref: this.setCalendarViewRef,
                    alignAtLeft: this.props.alignAtLeft,
                    firstDay: this._startOfDay(this.props.firstDay),
                    lastDay: this._startOfDay(this.props.lastDay),
                    initDate: this.state.currentDate || new Date,
                    onDateChange: this.handleDateSelected,
                    onCalendarClose: this.props.onCalendarClose,
                    onEscapePressed: this.closeCalendar
                })), i.default.createElement("div", {
                    className: r.default(t)
                }, i.default.createElement(f, {
                    buttonText: this._getDateViewText(),
                    ref: this.setCalendarDateViewRef,
                    calendarVisible: this.state.calendarIsVisible,
                    disabled: this.props.disabled,
                    isMaestroDesign: this.props.isMaestroDesign,
                    onClick: this.toggleCalendarView
                }), e)
            }, t.displayName = "Calendar", t.__updateDefaultProps = function(e) {
                t.defaultProps = h(e)
            }, t.defaultProps = h(), t
        })(i.default.Component);
    t.CalendarComponent = m;
    var f = (function(e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t.renderLegacyCaret = function() {
                    return i.default.createElement(c.Sprite, {
                        group: "web",
                        name: "calendar_view_month",
                        className: "u-l-fr",
                        alt: t.props.description
                    })
                }, t
            }
            return n.__extends(t, e), t.prototype.render = function() {
                var e = {
                    "is-active": this.props.calendarVisible,
                    "c-input": !this.props.isMaestroDesign,
                    "filter-item__filter-input": this.props.isMaestroDesign
                };
                if (this.props.isMaestroDesign) return i.default.createElement(o.DropdownButton, {
                    disabled: this.props.disabled,
                    onClick: this.props.onClick,
                    "aria-expanded": this.props.calendarVisible
                }, this.props.buttonText);
                var t = i.default.createElement("span", {
                    className: "c-calendar__date-text"
                }, this.props.buttonText);
                return i.default.createElement("button", {
                    className: r.default(e),
                    disabled: this.props.disabled,
                    onClick: this.props.onClick,
                    "aria-expanded": this.props.calendarVisible
                }, this.renderLegacyCaret(), t)
            }, t.displayName = "CalendarDateView", t.defaultProps = {
                isMaestroDesign: !1,
                calendarVisible: !0,
                onClick: function() {},
                disabled: !1,
                description: u._("Change deadline")
            }, t
        })(i.default.Component),
        y = (function(e) {
            function t(t) {
                var n = e.call(this, t) || this;
                return n.state = {
                    viewDate: n.props.initDate,
                    currentlyActiveDate: n.props.initDate
                }, n.clampToFirstLastDate = function(e) {
                    e < n.props.firstDay ? e.setTime(n.props.firstDay.getTime()) : e > n.props.lastDay && e.setTime(n.props.lastDay.getTime())
                }, n.getDaysInMonth = function(e) {
                    return new Date(e.getFullYear(), e.getMonth() + 1, 0).getDate()
                }, n.setPrevMonthButtonRef = function(e) {
                    n.refPrevButton = e
                }, n.setNextMonthButtonRef = function(e) {
                    n.refNextButton = e
                }, n.setCurrentDayButtonRefAndMaintainFocus = function(e) {
                    var t = document.activeElement && document.activeElement.getAttribute("data-day-in-month");
                    n.refCurrentDayButton = e, n.refCurrentDayButton && t && n.refCurrentDayButton.focus()
                }, n.handleDayClicked = function(e) {
                    var t = e.target,
                        r = parseInt(t.getAttribute("data-day-in-month") || "", 10),
                        o = new Date(n.state.viewDate.getFullYear(), n.state.viewDate.getMonth(), r);
                    n.setState({
                        currentlyActiveDate: o
                    }), n.props.onDateChange(o)
                }, n.handleKeyDownOnDay = function(e) {
                    if (27 === e.which) return n.props.onEscapePressed(), void e.preventDefault();
                    if (9 === e.which) {
                        var t = void 0,
                            r = n.refNextButton.classList.contains("u-l-dn") ? null : n.refNextButton,
                            o = n.refPrevButton.classList.contains("u-l-dn") ? null : n.refPrevButton;
                        return t = e.shiftKey ? r || o : o || r, t && t.focus(), void e.preventDefault()
                    }
                    if ([38, 39, 40, 37].indexOf(e.which) !== -1) {
                        var i = n.getDaysInMonth(n.props.initDate),
                            s = (n.state.currentlyActiveDate || n.props.initDate).getDate(),
                            a = null;
                        switch (e.which) {
                            case 38:
                                a = Math.max(1, s - 7);
                                break;
                            case 39:
                                a = Math.min(i, s + 1);
                                break;
                            case 40:
                                a = Math.min(i, s + 7);
                                break;
                            case 37:
                                a = Math.max(1, s - 1)
                        }
                        if (null != a) {
                            var l = new Date(n.state.viewDate.getTime());
                            l.setDate(a), n.clampToFirstLastDate(l), n.setState({
                                currentlyActiveDate: l
                            })
                        }
                        e.preventDefault()
                    }
                }, n.renderDay = function(e, t) {
                    var o = !t;
                    n.props.lastDay && (t = t || e > n.props.lastDay), n.props.firstDay && (t = t || e < n.props.firstDay);
                    var s = d(n.state.currentlyActiveDate, e),
                        l = d(n.props.initDate, e),
                        c = {
                            "button-as-link": !t,
                            "c-calendar__date": !0,
                            "c-calendar__date--disabled": t,
                            "current-month": o,
                            "c-calendar__date--was-initially-active": l,
                            "c-calendar__date--is-active": s
                        },
                        u = p;
                    d(n.state.currentlyActiveDate, e) && (u = n.setCurrentDayButtonRefAndMaintainFocus);
                    var _ = "day" + e.getDate() + "-" + e.getMonth(),
                        h = a.nice_date_with_month_name(e, !0, !0);
                    return i.default.createElement("td", {
                        key: _
                    }, i.default.createElement("button", {
                        className: r.default(c),
                        disabled: t,
                        onClick: t ? void 0 : n.handleDayClicked,
                        onKeyDown: n.handleKeyDownOnDay,
                        "data-day-in-month": e.getDate(),
                        "aria-label": h,
                        ref: u
                    }, e.getDate()))
                }, n.renderDays = function() {
                    for (var e = [], t = new Date(n.state.viewDate.getFullYear(), n.state.viewDate.getMonth(), 1), r = t.getDay(), o = r; o > 0; o--) {
                        var s = new Date(t.getFullYear(), t.getMonth(), t.getDate());
                        s.setDate(s.getDate() - o), e.push(n.renderDay(s, !0))
                    }
                    for (var a = new Date(n.state.viewDate.getFullYear(), n.state.viewDate.getMonth(), 1); a.getMonth() === n.state.viewDate.getMonth();) e.push(n.renderDay(a)), a = new Date(n.state.viewDate.getFullYear(), n.state.viewDate.getMonth(), a.getDate() + 1);
                    for (var l = new Date(n.state.viewDate.getFullYear(), n.state.viewDate.getMonth() + 1, 0); 6 !== l.getDay();) l = new Date(l.getFullYear(), l.getMonth(), l.getDate() + 1), e.push(n.renderDay(l, !0));
                    var c = [],
                        u = [];
                    return e.forEach(function(e, t) {
                        u.push(e), (t + 1) % 7 === 0 && (c.push(i.default.createElement("tr", {
                            key: "week-" + t
                        }, u)), u = [])
                    }), c
                }, n.offsetViewDateByMonth = function(e) {
                    n.setState({
                        viewDate: new Date(n.state.viewDate.getFullYear(), n.state.viewDate.getMonth() + e, 1)
                    })
                }, n.handleClickNextMonth = function() {
                    n.offsetViewDateByMonth(1)
                }, n.handleClickPrevMonth = function() {
                    n.offsetViewDateByMonth(-1)
                }, n.handleKeyDownMonthButton = function(e) {
                    if (27 === e.which) return n.props.onEscapePressed(), void e.preventDefault();
                    if (9 === e.which) {
                        var t = !e.shiftKey,
                            r = void 0,
                            o = n.refNextButton.classList.contains("u-l-dn") ? void 0 : n.refNextButton,
                            i = n.refPrevButton.classList.contains("u-l-dn") ? void 0 : n.refPrevButton,
                            s = n.refCurrentDayButton;
                        r = e.target === n.refPrevButton ? t ? o || s : s || o : t ? s || i : i || s, r && r.focus(), e.preventDefault()
                    }
                }, n.renderMonthChangers = function() {
                    var e = [],
                        t = new Date(n.state.viewDate.getFullYear(), n.state.viewDate.getMonth(), 1),
                        o = new Date(n.state.viewDate.getFullYear(), n.state.viewDate.getMonth(), n.getDaysInMonth(n.state.viewDate)),
                        s = {
                            "arrow-select": !0,
                            "u-l-dn": t <= n.props.firstDay,
                            "ax-focusable": !0,
                            "u-l-fl": !0
                        };
                    e.push(i.default.createElement("button", {
                        className: r.default(s),
                        onClick: n.handleClickPrevMonth,
                        ref: n.setPrevMonthButtonRef,
                        onKeyDown: n.handleKeyDownMonthButton
                    }, i.default.createElement("span", {
                        className: "c-arrow c-arrow--left u-thide"
                    }, u._("Previous month"))));
                    var a = {
                        "arrow-select": !0,
                        "u-l-dn": o >= n.props.lastDay,
                        "ax-focusable": !0,
                        "u-l-fr": !0
                    };
                    return e.push(i.default.createElement("button", {
                        className: r.default(a),
                        onClick: n.handleClickNextMonth,
                        ref: n.setNextMonthButtonRef,
                        onKeyDown: n.handleKeyDownMonthButton
                    }, i.default.createElement("span", {
                        className: "c-arrow c-arrow--right u-thide"
                    }, u._("Next month")))), e
                }, n.renderWeekdayRows = function() {
                    return [u._("Sunday"), u._("Monday"), u._("Tuesday"), u._("Wednesday"), u._("Thursday"), u._("Friday"), u._("Saturday")].map(function(e) {
                        return i.default.createElement("th", {
                            key: e
                        }, i.default.createElement("abbr", {
                            title: e
                        }, e.slice(0, 3)))
                    })
                }, n.calendarId = ++_, n
            }
            return n.__extends(t, e), t.prototype.componentDidMount = function() {
                this.refCurrentDayButton && this.refCurrentDayButton.focus()
            }, t.prototype.componentWillUpdate = function(e, t) {
                if (t.viewDate && t.viewDate.getMonth() !== this.state.viewDate.getMonth()) {
                    var n = new Date(t.viewDate.getTime()),
                        r = this.getDaysInMonth(t.viewDate);
                    n.setDate(Math.min(r, this.state.currentlyActiveDate.getDate())), this.clampToFirstLastDate(n), this.setState({
                        currentlyActiveDate: n
                    })
                }
            }, t.prototype.render = function() {
                var e = {
                        "c-calendar": !0,
                        "c-card": !0,
                        "u-pad-xs": !0,
                        "u-left": this.props.alignAtLeft,
                        "u-right": !this.props.alignAtLeft
                    },
                    t = "calendar-header-" + ++this.calendarId,
                    n = this.renderMonthChangers(),
                    o = n[0],
                    s = n[1],
                    l = i.default.createElement("strong", {
                        id: t,
                        "aria-live": "assertive",
                        "aria-atomic": "true"
                    }, u._("%(month)s %(year)s", {
                        comment: "For example 'January 2010'. This is used as part of a calendar."
                    }).format({
                        month: a.month_name(this.state.viewDate.getMonth()),
                        year: this.state.viewDate.getFullYear()
                    }));
                return i.default.createElement("div", {
                    className: r.default(e)
                }, i.default.createElement("div", {
                    className: "c-calendar__nav u-mar-bottom-s u-font-center u-cf"
                }, o, s, l), i.default.createElement("table", {
                    className: "c-calendar__picker"
                }, i.default.createElement("thead", {
                    className: "ax-visually-hidden"
                }, i.default.createElement("tr", null, this.renderWeekdayRows())), i.default.createElement("tbody", null, this.renderDays())))
            }, t.displayName = "CalendarView", t.defaultProps = {
                onDateChange: p,
                onEscapePressed: p,
                alignAtLeft: !1
            }, t
        })(i.default.Component);
    t.CalendarView = y, t.Calendar = l.requireCssWithComponent(m, ["/static/css/scooter/scooter-scoped-vflFpCY2P.css", "/static/css/components/calendar-vflO2TC4l.css"])
}), define("modules/clean/react/overquota_modal_helpers", ["require", "exports"], function(e, t) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.constructImageObject = function(e) {
        void 0 === e && (e = "");
        var t = function(e) {
                return "/static/images/pro/overquota/" + e + ".png"
            },
            n = function(e, n, r) {
                return {
                    height: r,
                    width: n,
                    src: t(e),
                    srcHiRes: t(e + "@2x")
                }
            };
        switch (e) {
            case "V1":
                return n("illo-catbox", 138, 98);
            case "V2":
                return n("illo-clown-car", 138, 111);
            default:
                return n("overquota-folder", 130, 90)
        }
    }
}), define("modules/clean/react/pass/constants", ["require", "exports"], function(e, t) {
    "use strict";

    function n(e) {
        return [a.SEEN_STATE_SUCCESS, a.SEEN_STATE_DISALLOWED, a.PASS_SUCCESS, a.PASS_MIXED_SUCCESS, a.CONCLUDED].indexOf(e) !== -1
    }

    function r(e) {
        return e === a.PASS_SUCCESS || e === a.PASS_MIXED_SUCCESS
    }

    function o(e) {
        return [a.PASS_SUCCESS, a.PASS_MIXED_SUCCESS, a.CONCLUDED].indexOf(e) !== -1
    }

    function i(e) {
        return [a.PASS_SUCCESS, a.PASS_MIXED_SUCCESS, a.ERROR, a.CONCLUDED].indexOf(e) !== -1
    }

    function s(e) {
        return e === a.ERROR
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.ActionTypes = {
        PASS_PERMISSION_REQUEST: "PASS_PERMISSION_REQUEST",
        UPDATE_PERMISSIONS: "UPDATE_PERMISSIONS",
        FETCH_PASS_CONCLUDED: "FETCH_PASS_CONCLUDED",
        FETCH_PASS_ERROR: "FETCH_PASS_ERROR",
        RECEIVE_PRESENCE_DELTA: "RECEIVE_PRESENCE_DELTA",
        RECEIVE_PRESENCE_SNAPSHOT: "RECEIVE_PRESENCE_SNAPSHOT",
        RESET_PASS_INFO: "RESET_PASS_INFO",
        UPDATE_SEEN_STATE_INFO: "UPDATE_SEEN_STATE_INFO",
        UPDATE_SEEN_STATE_INFO_CONTINUE: "UPDATE_SEEN_STATE_INFO_CONTINUE",
        DISCONTINUE_SEEN_STATE_INFO: "DISCONTINUE_SEEN_STATE_INFO",
        UPDATE_SEEN_STATE_UNAVAILABLE: "FETCH_SEEN_STATE_UNAVAILABLE"
    }, t.EventTypes = {
        PASS_CLICK: "PASS_CLICK",
        PASS_SHOWN: "PASS_SHOWN",
        PASS_HOVER: "PASS_HOVER"
    }, t.LoggingActions = {
        STATUS_BEGIN: "status_begin",
        STATUS_RECEIVE: "status_receive",
        SEEN_STATE_BEGIN: "seen_state_begin",
        SEEN_STATE_RECEIVE: "seen_state_receive",
        SEEN_STATE_USERS_BEGIN: "seen_state_users_begin",
        SEEN_STATE_USERS_RECEIVE: "seen_state_users_receive",
        TRANSMITTER_TOKEN_BEGIN: "transmitter_token_begin",
        TRANSMITTER_TOKEN_RECEIVE: "transmitter_token_receive",
        RECEIVER_TOKEN_BEGIN: "receiver_token_begin",
        RECEIVER_TOKEN_RECEIVE: "receiver_token_receive",
        PRESENCE_RECEIVE: "presence_receive",
        MEMBER_COUNTS_BEGIN: "member_counts_begin",
        MEMBER_COUNTS_RECEIVE: "member_counts_receive",
        LIST_MEMBERS_BEGIN: "list_members_begin",
        LIST_MEMBERS_RECEIVE: "list_members_receive",
        LIST_MEMBERS_NO_SEEN_STATE: "list_members_no_seen_state"
    };
    var a;
    (function(e) {
        e[e.NOT_YET_KNOWN = 0] = "NOT_YET_KNOWN", e[e.FETCHING = 1] = "FETCHING", e[e.ERROR = 2] = "ERROR", e[e.SEEN_STATE_SUCCESS = 3] = "SEEN_STATE_SUCCESS", e[e.SEEN_STATE_DISALLOWED = 4] = "SEEN_STATE_DISALLOWED", e[e.PRESENCE_SUCCESS = 5] = "PRESENCE_SUCCESS", e[e.PASS_SUCCESS = 6] = "PASS_SUCCESS", e[e.PASS_MIXED_SUCCESS = 7] = "PASS_MIXED_SUCCESS", e[e.CONCLUDED = 8] = "CONCLUDED"
    })(a = t.PassFetchingStatus || (t.PassFetchingStatus = {}));
    (function(e) {
        e[e.UNKNOWN = 0] = "UNKNOWN", e[e.WEB = 1] = "WEB", e[e.MOBILE = 2] = "MOBILE", e[e.DESKTOP = 3] = "DESKTOP"
    })(t.PassPlatform || (t.PassPlatform = {})), t.fetchingStatusSeenStateIsComplete = n, t.fetchingStatusCanLogAsShown = r, t.fetchingStatusIsSuccessful = o, t.fetchingStatusIsComplete = i, t.fetchingStatusIsError = s, t.MAX_FACES_NORMAL = 5, t.MAX_OVERFLOW_BUTTON_INDICATOR = 99, t.FACEPILE_CLASSNAME = "react-pass__facepile", t.FACEPILE_DELAYED_CLASSNAME = "react-pass__facepile--delayed", t.PRESENCE_RECEIVED_CLASSNAME = "facepile-presence-received", t.EMPTY_FACEPILE_CLASSNAME = "react-pass__facepile--empty"
}), define("modules/clean/react/pass/utils", ["require", "exports", "tslib", "external/lodash", "modules/clean/react/pass/constants", "modules/core/i18n", "modules/core/user_i18n"], function(e, t, n, r, o, i, s) {
    "use strict";

    function a(e) {
        switch (e) {
            case "web":
                return o.PassPlatform.WEB;
            case "mobile":
                return o.PassPlatform.MOBILE;
            case "desktop":
                return o.PassPlatform.DESKTOP
        }
        return o.PassPlatform.UNKNOWN
    }

    function l(e) {
        switch (e) {
            case o.PassPlatform.WEB:
                return i._("on web");
            case o.PassPlatform.DESKTOP:
                return i._("on desktop");
            case o.PassPlatform.MOBILE:
                return i._("on mobile")
        }
        return null
    }

    function c(e) {
        if (e) switch (e.type) {
            case "link_only":
                return !0;
            case "view_member_access":
            case "edit_member_access":
                return e.value.group_access_only
        }
        return !1
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), r = n.__importStar(r), s = n.__importStar(s);
    (function(e) {
        function t(e) {
            return e.startsWith("dbafvid:")
        }

        function n(e) {
            return t(e.seen_state_user.user_id)
        }

        function o(e) {
            return r.filter(e, t)
        }

        function i(e) {
            return r.reject(e, t)
        }

        function a(e) {
            return s.isCjkLocale() && 1 === e.split(" ").length ? e.substring(0, 1) : s.getInitials(e)
        }
        e.isAnonymousUserId = t, e.isAnonymousSeenState = n, e.getAnonymousUserIds = o, e.filterAnonymousUserIds = i, e.getAnonymousViewerInitials = a
    })(t.AnonymousViewerUtils || (t.AnonymousViewerUtils = {})), t.parsePlatformString = a, t.getOnPlatformText = l, t.shouldIncrementOverflowBasisForAccessType = c
}), define("modules/clean/react/select", ["require", "exports", "tslib", "external/classnames", "external/create-react-class", "react", "external/react-dom", "external/react-dom-factories", "external/prop-types", "external/lodash", "jquery", "modules/clean/keycode", "modules/clean/react/form_error_mixin", "modules/clean/react/hidden", "modules/clean/react/sprite", "modules/clean/react/util", "modules/core/dom"], function(e, t, n, r, o, i, s, a, l, c, u, d, p, _, h, m, f) {
    "use strict";

    function y(e, t) {
        return void 0 !== e && null !== e ? t(e) : void 0
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), r = n.__importDefault(r), o = n.__importDefault(o), i = n.__importDefault(i), s = n.__importStar(s), a = n.__importStar(a), l = n.__importStar(l), c = n.__importStar(c), u = n.__importDefault(u), p = n.__importDefault(p), m = n.__importStar(m), f = n.__importStar(f);
    var g = i.default.createElement,
        v = function(e, t) {
            var n = e.scrollTop(),
                r = n + e.height(),
                o = t.position().top + n,
                i = o + t.height();
            return o < n ? e.scrollTop(o) : i > r ? e.scrollTop(i - e.height()) : void 0
        },
        b = l.oneOfType([l.string, l.number]),
        w = (function(e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t.state = {
                    id: c.uniqueId("option")
                }, t
            }
            return n.__extends(t, e), t.prototype.componentWillReceiveProps = function(e) {
                if (null != e.id) return this.setState({
                    id: e.id
                })
            }, t.prototype.render = function() {
                var e = {
                    "list-item": !0,
                    "select-option": !0,
                    "select-option-disabled": this.props.disabled
                };
                null != this.props.className && (e[this.props.className] = !0);
                var t = this.props.value,
                    n = u.default.extend(!0, {}, this.props);
                return delete n.value, a.div(u.default.extend({
                    "data-value": t
                }, n, {
                    id: this.state.id,
                    role: "option",
                    className: r.default(e),
                    "aria-disabled": this.props.disabled
                }), this.props.children)
            }, t.displayName = "selectOption", t.propTypes = {
                id: l.string,
                className: l.string,
                disabled: l.bool,
                title: l.string,
                value: b,
                error: l.shape({
                    message_text: l.string,
                    message_html: l.string
                })
            }, t
        })(i.default.Component);
    t.option = w;
    var S = o.default({
        displayName: "selectInput",
        mixins: [p.default],
        mouseInput: !0,
        propTypes: {
            name: l.string,
            onChange: l.func,
            defaultValue: b,
            style: l.object,
            value: b,
            variant: l.string,
            className: l.string,
            ariaLabelId: l.string,
            ariaDescriptionId: l.string,
            valueLink: l.object,
            isDisabled: l.bool,
            headerElement: l.element
        },
        getDefaultProps: function() {
            return {
                errorWrapperClassName: "select-input-error-wrapper",
                ariaLabelId: "",
                ariaDescriptionId: "",
                style: null,
                headerElement: null
            }
        },
        getInitialState: function() {
            return {
                open: !1,
                focused: null,
                keyboarsSelectPrefix: "",
                selectOptionId: c.uniqueId("selected-option"),
                listboxId: c.uniqueId("listbox"),
                value: this.props.defaultValue
            }
        },
        _getFilteredChildren: function() {
            return c.isArray(this.props.children) ? c.filter(this.props.children, function(e) {
                return e
            }) : this.props.children
        },
        render: function() {
            var e = this,
                t = {
                    "select-input": !0,
                    "select-input-dropdown-shown": this.state.open,
                    "select-input-disabled": this.props.isDisabled
                };
            this.props.variant && (t[this.props.variant] = !0), this.props.className && (t[this.props.className] = !0);
            var n = {
                    "list-menu": !0,
                    "select-input-dropdown": !0,
                    "select-input-disable-error": this.props["disable-errors"]
                },
                o = this.renderErrorIfEnabled(),
                s = this.props.ariaDescriptionId;
            ((null != this.props.error ? this.props.error.message_text : void 0) || null != (null != this.props.error ? this.props.error.message_html : void 0)) && (s = o.props.id);
            var l = this.selectedOption();
            return a.div({
                className: r.default(t),
                style: this.props.style,
                ref: "wrapperDiv"
            }, o, a.button({
                className: "select-input-button",
                "aria-expanded": this.state.open,
                "aria-describedby": s,
                "aria-controls": this.state.listboxId,
                "aria-labelledby": this.props.ariaLabelId + " " + l.props.id,
                ref: "selectButton",
                tabIndex: 0,
                onClick: this.handleClickOnInputButton
            }, a.div({
                className: "select-input-input filter-item__filter-input",
                ref: "label"
            }, l, a.div({
                className: "select-input-dropdown-arrow"
            }, g(h.Sprite, {
                group: "web",
                name: "arrow-down-gray",
                alt: ""
            })))), g(_.HiddenSelect, {
                name: this.props.name,
                defaultValue: this.props.defaultValue,
                value: this.getValue(),
                options: (function() {
                    var t = [];
                    return i.default.Children.forEach(e._getFilteredChildren(), function(e) {
                        return t.push(e.props.value)
                    }), t
                })()
            }), a.div({
                className: "hidden-option-container"
            }, a.div({
                id: this.state.listboxId,
                className: r.default(n),
                role: "listbox",
                onKeyDown: this.handleKeydown,
                onMouseMove: this.handleMouseMove,
                tabIndex: -1,
                ref: "dropdown"
            }, this.menuChildren())))
        },
        handleMouseMove: function(e) {
            var t;
            if (!this.props.isDisabled) {
                e.pageX === n && e.pageY === t || (this.mouseInput = !0);
                var n = e.pageX;
                return t = e.pageY
            }
        },
        _commonPrefixLen: function(e, t) {
            e = e.trim().toLowerCase(), t = t.trim().toLowerCase();
            for (var n = 0; n < e.length && n < t.length && e.charAt(n) === t.charAt(n);) n++;
            return n
        },
        _keyboardSelect: function(e) {
            var t = c.sortedIndexBy(this.sortedOptions, {
                    text: e.toLowerCase()
                }, "text"),
                n = this.sortedOptions[Math.max(t - 1, 0)],
                r = this.sortedOptions[Math.min(t, this.sortedOptions.length - 1)];
            return this._commonPrefixLen(e, n.text) >= this._commonPrefixLen(e, r.text) ? this.setState({
                keyboarsSelectPrefix: e,
                focused: n.value
            }) : this.setState({
                keyboarsSelectPrefix: e,
                focused: r.value
            })
        },
        handleKeydown: function(e) {
            var t = this;
            if (!this.props.isDisabled) {
                switch (this.mouseInput = !1, e.keyCode) {
                    case d.KeyCode.TAB:
                        return this.setState({
                            open: !1,
                            focused: null
                        }), !0;
                    case d.KeyCode.ENTER:
                    case d.KeyCode.SPACE:
                        this.state.open && this.state.focused ? (this.setValue(this.state.focused), this.setState({
                            open: !1
                        })) : this.toggle();
                        break;
                    case d.KeyCode.ESC:
                        if (this.state.open) {
                            var n = this.getValue();
                            this.setValue(n), this.setState({
                                open: !1
                            })
                        }
                        break;
                    case d.KeyCode.UP:
                        this.state.open ? this.setState({
                            focused: this.prev(this.state.focused)
                        }) : this.setState({
                            open: !0
                        });
                        break;
                    case d.KeyCode.DOWN:
                        this.state.open ? this.setState({
                            focused: this.next(this.state.focused)
                        }) : this.setState({
                            open: !0
                        });
                        break;
                    default:
                        if (!this.state.open) return !0;
                        if (!c.values(d.KeyCode).includes(e.keyCode)) {
                            var r = String.fromCharCode(e.which),
                                o = this.state.keyboarsSelectPrefix + r;
                            this._keyboardSelect(o), this._keyboardSelect_timeout && clearTimeout(this._keyboardSelect_timeout), this._keyboardSelect_timeout = setTimeout(function() {
                                return t.setState({
                                    keyboarsSelectPrefix: ""
                                }), t._keyboardSelect_timeout = null
                            }, 500)
                        }
                }
                return !1
            }
        },
        prev: function(e) {
            var t = null,
                n = null;
            return i.default.Children.forEach(this._getFilteredChildren(), function(r) {
                if (n || r.props.disabled || (n = r), r.props.value === e && (t = n), !r.props.disabled) return n = r
            }), null != t ? t.props.value : void 0
        },
        next: function(e) {
            var t = null,
                n = null;
            return i.default.Children.forEach(this._getFilteredChildren(), function(r) {
                if (!r.props.disabled) return (null != n ? n.props.value : void 0) === e && (t = r), n = r
            }), y(t || n, function(e) {
                return e.props.value
            })
        },
        menuChildren: function() {
            var e = this,
                t = this.getValue();
            return i.default.Children.map(this._getFilteredChildren(), function(n) {
                return i.default.cloneElement(n, {
                    onMouseEnter: function() {
                        if (f.scroll_lock_document(), e.mouseInput) return e.setState({
                            focused: n.props.value
                        })
                    },
                    onMouseOut: function() {
                        return f.scroll_unlock_document()
                    },
                    onClick: function() {
                        if (!n.props.disabled) return e.setState({
                            open: !1
                        }), e.setValue(n.props.value)
                    },
                    className: r.default({
                        "focused-option": null != e.state.focused && e.state.focused === n.props.value,
                        "selected-option": t === n.props.value
                    }, n.props.className)
                })
            })
        },
        componentWillMount: function() {
            var e = i.default.Children.map(this._getFilteredChildren(), function(e) {
                return {
                    value: e.props.value,
                    text: m.getText(e).trim().toLowerCase()
                }
            });
            return this.sortedOptions = c.sortBy(e, "text")
        },
        componentDidMount: function() {
            var e = this;
            return this.globalMenuCloser = function(t) {
                if (e.state.open) {
                    var n = u.default(t.target).closest(".select-input");
                    if (!n.length || n[0] !== s.findDOMNode(e.refs.wrapperDiv)) return e.setState({
                        open: !1,
                        focused: null
                    })
                }
            }, u.default(document).on("click", this.globalMenuCloser)
        },
        componentWillUnmount: function() {
            return u.default(document).off("click", this.globalMenuCloser)
        },
        componentDidUpdate: function(e, t) {
            var n, r = u.default(s.findDOMNode(this.refs.dropdown)),
                o = u.default(s.findDOMNode(this.refs.selectButton));
            this.state.open && (n = r.find("[data-value='" + this.state.focused + "']"), r.attr("aria-activedescendant", n.attr("id"))), this.state.open && this.state.focused && null == this.props.headerElement && (n = r.find("[data-value='" + this.state.focused + "']"), r.attr("aria-activedescendant", n.attr("id")), v(r, n));
            var i = t.open && !this.state.open;
            if (!t.open && this.state.open && r.focus(), i) return o.focus()
        },
        selectedOption: function() {
            var e = this,
                t = null;
            return null != this.props.headerElement ? this.props.headerElement : (i.default.Children.forEach(this._getFilteredChildren(), function(n) {
                if (t || (t = n), (null != n ? n.props.value : void 0) === e.getValue()) return t = n
            }), t ? i.default.cloneElement(t, {
                id: this.state.selectOptionId
            }) : null)
        },
        handleClickOnInputButton: function(e) {
            return e.preventDefault(), this.toggle()
        },
        toggle: function() {
            if (!this.props.isDisabled) return this.state.open ? this.setState({
                open: !1,
                focused: null
            }) : this.setState({
                open: !0,
                focused: this.getValue()
            })
        },
        getValue: function() {
            var e, t;
            return null != (e = null != (t = null != this.props.value ? this.props.value : null != this.props.valueLink ? this.props.valueLink.value : void 0) ? t : this.state.value) ? e : this.props.defaultValue
        },
        setValue: function(e) {
            var t = this.getValue();
            if (this.props.valueLink ? this.props.valueLink.requestChange(e) : this.setState({
                    value: e
                }), t !== e || null != this.props.headerElement) return "function" == typeof this.props.onChange ? this.props.onChange(t, e) : void 0
        }
    });
    t.input = S
}), define("modules/clean/react/tabs/tab_nav", ["require", "exports", "tslib", "external/classnames", "react", "external/react-dom-factories", "external/prop-types", "external/lodash", "modules/clean/react/css", "modules/clean/react/tabs/tab_bar", "modules/clean/react/tabs/tab_util", "modules/clean/react/tabs/tabs"], function(e, t, n, r, o, i, s, a, l, c, u, d) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), r = n.__importDefault(r), o = n.__importDefault(o), i = n.__importStar(i), s = n.__importStar(s), a = n.__importStar(a), c = n.__importDefault(c), u = n.__importStar(u);
    var p = (function(e) {
        function t() {
            var t = null !== e && e.apply(this, arguments) || this;
            return t.state = {
                selectedIndex: t.props.defaultSelectedIndex
            }, t._onChange = function(e, n) {
                return t.props.onChange(e, n), t.setState({
                    selectedIndex: n
                })
            }, t
        }
        return n.__extends(t, e), t.prototype.componentWillReceiveProps = function(e) {
            if (this.props.defaultSelectedIndex !== e.defaultSelectedIndex) return this.setState({
                selectedIndex: e.defaultSelectedIndex
            })
        }, t.prototype.render = function() {
            var e = this.props.idPrefix ? this.props.idPrefix : "tabset" + a.uniqueId();
            return i.div({
                className: r.default(this.props.variant, this.props.className)
            }, o.default.createElement(c.default, {
                tabs: this.props.tabs,
                onChange: this._onChange,
                idPrefix: e,
                selectedIndex: this.state.selectedIndex
            }), o.default.createElement(d.TabContent, {
                isSelected: !0,
                id: u.getTabContentId(e),
                tabId: u.getTabId(e, this.state.selectedIndex)
            }, this.props.children))
        }, t.displayName = "TabNav", t.propTypes = {
            tabs: s.arrayOf(s.oneOfType([s.string, s.number, s.shape({
                value: s.oneOfType([s.string, s.number]),
                label: s.string,
                rightAlign: s.bool
            })])),
            defaultSelectedIndex: s.number,
            onChange: s.func,
            idPrefix: s.string,
            variant: s.string,
            className: s.string
        }, t.defaultProps = {
            defaultSelectedIndex: 0,
            variant: u.TabVariant.DEFAULT,
            onChange: function() {}
        }, t
    })(o.default.Component);
    t.default = l.requireCssWithComponent(p, ["/static/css/legacy_packages/components-vflWpppwv.css"])
}), define("modules/clean/sharing/api/client", ["require", "exports", "tslib", "external/immutable", "external/lodash", "modules/clean/api_v2/error", "modules/clean/api_v2/types", "modules/clean/api_v2/user_client", "modules/clean/sharing/api/types/metadata", "modules/clean/sharing/api/util/types", "modules/clean/sharing/access_level", "modules/clean/sharing/constants", "modules/clean/viewer", "modules/core/exception", "modules/constants/sharing"], function(e, t, n, r, o, i, s, a, l, c, u, d, p, _, h) {
    "use strict";

    function m(e, t) {
        return void 0 !== e && null !== e ? t(e) : void 0
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), r = n.__importStar(r), o = n.__importStar(o), t.FilePolicy = l.FilePolicy, t.FolderPolicy = l.FolderPolicy, t.TeamSharingPolicies = l.TeamSharingPolicies, t.parseFolderPolicy = c.parseFolderPolicy;
    var f = (function(e) {
        function t(t) {
            var n = e.call(this) || this;
            return n.message = t, n.name = "ShareError", n.stack = (new Error).stack, n
        }
        return n.__extends(t, e), t
    })(Error);
    t.ShareError = f;
    var y = (function(e) {
        function t(t, n) {
            var r = t.userId,
                o = t.isNonUserRelativeContext,
                i = e.call(this, n) || this;
            return null == o && (o = !1), i.userId = r, o && null == i.teamMemberId && (i.teamMemberId = p.Viewer.get_viewer().work_user.team_member_id), i
        }
        return n.__extends(t, e), t.initClass = function() {
            this.prototype._getAccountBatchCache = {}, this.prototype._getCurrentAccountCache = null
        }, t.prototype._headers = function(t) {
            var r;
            return null != this.teamMemberId ? n.__assign((r = {}, r[s.ApiV2HeaderNames.DropboxApiSelectAdmin] = this.teamMemberId, r), e.prototype._headers.call(this, t)) : e.prototype._headers.call(this, t)
        }, t.prototype.addMembers = function(e) {
            e.contentId, e.members, e.accessLevel, e.customMessage, e.quiet, e.addMessageAsComment;
            throw new TypeError("Not implemented")
        }, t.prototype.addMembersWithAccessLevel = function(e) {
            e.contentId, e.members, e.customMessage, e.quiet;
            throw new TypeError("Not implemented")
        }, t.prototype.removeMember = function(e) {
            e.contentId, e.memberId;
            throw new TypeError("Not implemented")
        }, t.prototype.getMetadata = function(e) {
            e.contentId, e.actions;
            throw new TypeError("Not implemented")
        }, t.prototype.getMetadataInternal = function(e) {
            e.contentId, e.actions;
            throw new TypeError("Not implemented")
        }, t.prototype.getMetadataAlpha = function(e) {
            e.contentId, e.actions;
            throw new TypeError("Not implemented")
        }, t.prototype.listMembers = function(e) {
            e.contentId, e.isAlpha;
            throw new TypeError("Not implemented")
        }, t.prototype.listMembersContinue = function(e) {
            e.cursor, e.isAlpha;
            throw new TypeError("Not implemented")
        }, t.prototype.getMemberCounts = function(e) {
            e.contentId;
            throw new TypeError("Not implemented")
        }, t.prototype.getParentFolderAccess = function(e) {
            e.contentId, e.memberId, e.accessLevel;
            throw new TypeError("Not implemented")
        }, t.prototype.updateMember = function(e) {
            e.contentId, e.memberId, e.accessLevel;
            throw new TypeError("Not implemented")
        }, t.prototype.dismissInviteNotification = function(e) {
            var t = e.contentId;
            return this.ns("sharing").rpc("dismiss_invite_notification", {
                content_id: t
            }, {
                subjectUserId: this.userId
            })
        }, t.prototype.getSharingPrefs = function() {
            return this.ns("users").rpc("get_sharing_prefs", void 0, {
                subjectUserId: this.userId
            }).then(c.sharingPrefsApiToRecord)
        }, t.prototype.setSharingPrefs = function(e) {
            return this.ns("users").rpc("set_sharing_prefs", e, {
                subjectUserId: this.userId
            })
        }, t.prototype.claimMembership = function(e) {
            var t = e.contentUrl;
            return this.ns("sharing").rpc("claim_membership", {
                content_url: t
            }, {
                subjectUserId: this.userId
            })
        }, t.prototype.checkJobStatus = function(e) {
            var t = e.jobId;
            return this.ns("sharing").rpc("check_job_status", {
                async_job_id: t
            }, {
                subjectUserId: this.userId
            })
        }, t.prototype.getAccountBatch = function(e) {
            var t = e.accountIds;
            return t.length > 0 ? (h.SHARING_EXPERIMENTS.FIX_MAX_ACCOUNT_BATCH_SIZE && t.length > 300 && (t = t.slice(0, 300)), this.ns("users").rpc("get_account_batch", {
                account_ids: t
            }, {
                subjectUserId: this.userId
            }).then(function(e) {
                return e.map(c.accountInfoApiToRecord)
            })) : Promise.resolve([])
        }, t.prototype.getAccountBatchCached = function(e) {
            var t = this,
                r = e.accountIds,
                i = this._getAccountBatchCache,
                s = Array.from(o.partition(r, function(e) {
                    return e in i
                })),
                a = s[0],
                l = s[1],
                c = o.values(o.pick(i, a));
            return this.getAccountBatch({
                accountIds: l
            }).then(function(e) {
                var r = o.zipObject(e.map(function(e) {
                    return e.account_id
                }), e);
                return t._getAccountBatchCache = n.__assign({}, i, r), e.concat(c)
            })
        }, t.prototype.resetGetAccountBatchCache = function() {
            return this._getAccountBatchCache = {}
        }, t.prototype.getCurrentAccount = function(e) {
            return this.ns("users").rpc("get_current_account", void 0, {
                subjectUserId: this.userId
            }).then(function(e) {
                return c.fullAccountApiToRecord(e)
            })
        }, t.prototype.getCurrentAccountCached = function(e) {
            return null == this._getCurrentAccountCache && (this._getCurrentAccountCache = this.getCurrentAccount()), this._getCurrentAccountCache
        }, t.prototype.resetGetCurrentAccountCache = function() {
            return this._getCurrentAccountCache = {}
        }, t.prototype.requestAccess = function(e) {
            var t = e.contentUrl,
                n = e.customMessage;
            return this.ns("sharing").rpc("request_access", {
                content_url: t,
                custom_message: n
            }, {
                subjectUserId: this.userId
            })
        }, t.prototype.sharedLinkInfo = function(e) {
            var t = e.fileIdOrPath;
            return _.assert(null != t, "an fqPath or fileId must be present to retrieve shared link info"), this.ns("sharing").rpc("alpha/list_shared_links", {
                path: t,
                direct_only: !0
            }, {
                subjectUserId: this.userId
            }).then(function(e) {
                return e.links.map(function(e) {
                    return c.linkMetadataApiToRecord(e)
                })
            })
        }, t.prototype.createSharedLink = function(e) {
            var t = e.fileIdOrPath,
                n = e.settings;
            return _.assert(null != t, "an fqPath or fileId must be present to retrieve shared link info"), this.ns("sharing").rpc("alpha/create_shared_link_with_settings", {
                path: t,
                settings: n
            }, {
                subjectUserId: this.userId
            }).then(c.linkMetadataApiToRecord)
        }, t.prototype.modifySharedLinkSettings = function(e) {
            var t = e.url,
                n = e.settings,
                r = e.remove_expiration;
            return this.ns("sharing").rpc("alpha/modify_shared_link_settings", {
                url: t,
                settings: n,
                remove_expiration: r
            }, {
                subjectUserId: this.userId
            }).then(c.linkMetadataApiToRecord)
        }, t.prototype.revokeSharedLink = function(e) {
            var t = e.url;
            return this.ns("sharing").rpc("revoke_shared_link", {
                url: t
            }, {
                subjectUserId: this.userId
            })
        }, t.prototype._addAccountsToMembership = function(e) {
            return this._addAccountsToMembershipBatch(r.Map([
                [1, e]
            ])).then(function(e) {
                return e.get(1)
            })
        }, t.prototype._addAccountsToMembershipBatch = function(e) {
            var t = e.valueSeq().flatMap(function(e) {
                return e.users.valueSeq()
            }).map(function(e) {
                return e.memberId()
            }).toSet().toArray();
            return t.length > 0 ? this.getAccountBatchCached({
                accountIds: t
            }).then(function(t) {
                var n = r.Map(t.map(function(e) {
                    return [e.account_id, e]
                }));
                return e.map(function(e, t) {
                    return e.set("users", e.users.map(function(e) {
                        var t = n.get(e.account_id);
                        return null != t ? e.set("account", t) : e
                    }))
                })
            }) : Promise.resolve(e)
        }, t
    })(a.UserApiV2Client);
    t.ShareApiClient = y, y.initClass();
    var g = (function(e) {
        function t(t) {
            var n = t.userId,
                r = t.isNonUserRelativeContext,
                o = e.call(this, {
                    userId: n,
                    isNonUserRelativeContext: r
                }) || this;
            return o.getMetadata = o.getMetadata.bind(o), o.getMetadataInternal = o.getMetadataInternal.bind(o), o.getMetadataAlpha = o.getMetadataAlpha.bind(o), o.validateFqPath = o.validateFqPath.bind(o), o._promises = {}, o
        }
        return n.__extends(t, e), t.prototype.addMembers = function(e) {
            e.contentId, e.members, e.accessLevel, e.customMessage, e.quiet, e.addMessageAsComment;
            return this.createPromise("addMembers")
        }, t.prototype.addMembersWithAccessLevel = function(e) {
            e.contentId, e.members, e.customMessage, e.quiet;
            return this.createPromise("addMembersWithAccessLevel")
        }, t.prototype.getMetadata = function(e) {
            e.contentId, e.actions;
            return this.createPromise("getMetadata")
        }, t.prototype.getMetadataInternal = function(e) {
            e.contentId, e.actions;
            return this.createPromise("getMetadataInternal")
        }, t.prototype.getMetadataAlpha = function(e) {
            e.contentId, e.actions;
            return this.createPromise("getMetadataAlpha")
        }, t.prototype.dismissInviteNotification = function(e) {
            e.contentId, e.cursor;
            return this.createPromise("dismissInviteNotification")
        }, t.prototype.getSharingPrefs = function() {
            return this.createPromise("getSharingPrefs")
        }, t.prototype.listMembers = function(e) {
            e.contentId, e.isAlpha;
            return this.createPromise("listMembers")
        }, t.prototype.listMembersContinue = function(e) {
            e.cursor, e.isAlpha;
            return this.createPromise("listMembersContinue")
        }, t.prototype.getMemberCounts = function(e) {
            e.contentId;
            return this.createPromise("getMemberCounts")
        }, t.prototype.getParentFolderAccess = function(e) {
            e.contentId, e.memberId, e.accessLevel;
            return this.createPromise("getParentFolderAccess")
        }, t.prototype.removeMember = function(e) {
            e.contentId, e.memberId;
            return this.createPromise("removeMember")
        }, t.prototype.setLinkSettings = function(e) {
            e.linkSettings, e.url;
            return this.createPromise("setLinkSettings")
        }, t.prototype.share = function(e) {
            e.fqPath, e.memberPolicy, e.aclUpdatePolicy, e.sharedLinkPolicy, e.forceAsync;
            return this.createPromise("share")
        }, t.prototype.shareInternal = function(e) {
            e.fqPath, e.folderPolicy, e.forceAsync, e.confidential;
            return this.createPromise("shareInternal")
        }, t.prototype.requestAccess = function(e) {
            e.contentUrl, e.customMessage;
            return this.createPromise("requestAccess")
        }, t.prototype.sharedLinkInfo = function(e) {
            e.fileIdOrPath;
            return this.createPromise("sharedLinkInfo")
        }, t.prototype.transferContent = function(e) {
            e.contentId, e.memberId;
            return this.createPromise("transferContent")
        }, t.prototype.createSharedLink = function(e) {
            e.fileIdOrPath;
            return this.createPromise("createSharedLink")
        }, t.prototype.updateMember = function() {
            return this.createPromise("updateMember")
        }, t.prototype.updatePolicyAlpha = function() {
            return this.createPromise("updatePolicyAlpha")
        }, t.prototype.validateFqPath = function(e) {
            e.fqPath, e.actions;
            return this.createPromise("validateFqPath")
        }, t.prototype.getCurrentAccountCached = function(e) {
            return this.createPromise("getCurrentAccountCached")
        }, t.prototype.modifySharedLinkSettings = function(e) {
            e.url, e.settings, e.remove_expiration;
            return this.createPromise("modifySharedLinkSettings")
        }, t.prototype.revokeSharedLink = function(e) {
            e.url;
            return this.createPromise("revokeSharedLink")
        }, t.prototype.relinquishMembership = function(e) {
            e.contentId, e.leaveACopy;
            return this.createPromise("relinquishMembership")
        }, t.prototype.setConfidentiality = function(e) {
            e.contentId, e.confidential, e.keep_inherited_members;
            return this.createPromise("setConfidentiality")
        }, t.prototype.validatePathContinue = function(e, t) {
            return this.createPromise("validatePathContinue")
        }, t.prototype.createPromise = function(e) {
            var t = this._promises[e];
            return t && t.calledBeforeCreatePromise ? (this._promises[e] = null, t.promise) : (t = {}, t.promise = new Promise(function(e, n) {
                return t.resolve = e, t.reject = n
            }), this._promises[e] = t, t.promise)
        }, t.prototype.getPromise = function(e) {
            return null != this._promises[e] ? this._promises[e].promise : void 0
        }, t.prototype.resolvePromise = function(e, t, n) {
            void 0 === n && (n = !1), this._promises[e] || this.createPromise(e);
            var r = this._promises[e];
            return r.calledBeforeCreatePromise = n, r.resolve.apply(null, t), r.promise
        }, t.prototype.rejectPromise = function(e, t) {
            this._promises[e] || this.createPromise(e);
            var n = this._promises[e];
            return n.reject.apply(null, t), n.promise
        }, t
    })(y);
    t.MockShareApiClient = g;
    var v = (function(e) {
        function t(t) {
            var n = t.userId,
                r = t.isNonUserRelativeContext,
                o = e.call(this, {
                    userId: n,
                    isNonUserRelativeContext: r
                }) || this;
            return o.getMetadata = o.getMetadata.bind(o), o.getMetadataAlpha = o.getMetadataAlpha.bind(o), o.getMetadataBatchAlpha = o.getMetadataBatchAlpha.bind(o), o
        }
        return n.__extends(t, e), t.prototype.addMembers = function(e) {
            var t = e.contentId,
                n = e.members,
                r = e.customMessage,
                o = void 0 === r ? null : r,
                i = e.quiet,
                s = void 0 !== i && i,
                a = e.accessLevel,
                l = e.addMessageAsComment,
                d = void 0 !== l && l;
            null == a && (a = u.ACCESS_LEVEL.READER);
            var p = c.accessLevelConstToApi(a);
            return 0 === (null != o ? o.length : void 0) && (o = null), this.ns("sharing").rpc("add_file_member", {
                file: t,
                members: n,
                custom_message: o,
                quiet: s,
                access_level: p,
                add_message_as_comment: d
            }, {
                subjectUserId: this.userId
            })
        }, t.prototype.removeMember = function(e) {
            var t = this,
                n = e.contentId,
                r = e.memberId;
            return this.ns("sharing").rpc("remove_file_member_2", {
                file: n,
                member: c.makeMemberSelector(r)
            }, {
                subjectUserId: this.userId
            }).then(function(e) {
                return c.memberAccessLevelApiToRecord(t.userId, e)
            })
        }, t.prototype.getMetadata = function(e) {
            var t = e.contentId,
                n = e.actions,
                r = void 0 === n ? [] : n;
            return this.ns("sharing").rpc("get_file_metadata", {
                file: t,
                actions: r
            }, {
                subjectUserId: this.userId
            }).then(c.fileMetadataApiToRecord)
        }, t.prototype.getMetadataAlpha = function(e) {
            var t = e.contentId,
                n = e.actions,
                r = void 0 === n ? [] : n,
                o = e.sourceURL;
            return this.ns("sharing").rpc("alpha/get_file_metadata", {
                file: t,
                actions: r,
                url: o
            }, {
                subjectUserId: this.userId
            }).then(c.fileMetadataApiToRecord)
        }, t.prototype.getMetadataBatchAlpha = function(e) {
            var t = e.contentIds,
                n = e.actions,
                r = void 0 === n ? [] : n;
            return this.ns("sharing").rpc("alpha/get_file_metadata/batch", {
                files: t,
                actions: r
            }, {
                subjectUserId: this.userId
            }).then(function(e) {
                return e.map(function(e) {
                    return c.fileMetadataApiToRecord(e.result)
                })
            })
        }, t.prototype.listMembers = function(e) {
            var t = e.contentId,
                n = e.url,
                r = void 0 === n ? null : n,
                o = e.limit,
                i = e.isAlpha,
                s = void 0 !== i && i,
                a = e.includeSeenState;
            null == o && (o = 100), null == a && (a = !0);
            var l = {
                    file: t,
                    actions: d.MEMBER_ACTION.ALL,
                    include_inherited: !0,
                    limit: o,
                    url: s ? r : void 0,
                    include_seen_state: a
                },
                u = this.ns("sharing");
            return (s ? u.rpc("alpha/list_file_members", l, {
                subjectUserId: this.userId
            }) : u.rpc("list_file_members", l, {
                subjectUserId: this.userId
            })).then(c.membershipApiToRecord).then(this._addAccountsToMembership.bind(this))
        }, t.prototype.listMembersContinue = function(e) {
            var t = e.cursor,
                n = e.url,
                r = void 0 === n ? null : n,
                o = e.isAlpha,
                i = void 0 !== o && o,
                s = {
                    cursor: t,
                    url: i ? r : void 0
                },
                a = this.ns("sharing");
            return (i ? a.rpc("alpha/list_file_members/continue", s, {
                subjectUserId: this.userId
            }) : a.rpc("list_file_members/continue", s, {
                subjectUserId: this.userId
            })).then(function(e) {
                return c.membershipApiToRecord(e, null)
            }).then(this._addAccountsToMembership.bind(this))
        }, t.prototype.listMembersBatch = function(e) {
            var t = e.contentIds,
                n = e.limit;
            return null == n && (n = 10), this.ns("sharing").rpc("list_file_members/batch", {
                files: t,
                limit: n
            }, {
                subjectUserId: this.userId
            }).then(function(e) {
                for (var t = {}, n = 0, o = Array.from(e); n < o.length; n++) {
                    var i = o[n];
                    "result" === i.result[".tag"] && (t[i.file] = c.membershipApiToRecord(i.result.members, i.result.member_count))
                }
                return r.Map(t)
            }).then(this._addAccountsToMembershipBatch.bind(this))
        }, t.prototype.getMemberCounts = function(e) {
            var t = e.contentId,
                n = e.limit,
                r = e.countGroupsAsMembers,
                o = void 0 !== r && r,
                i = e.url,
                s = void 0 === i ? null : i,
                a = e.runViewerInfoChecks,
                l = void 0 !== a && a;
            return this.ns("sharing").rpc("get_file_member_counts", {
                file: t,
                limit: n,
                count_groups_as_members: o,
                url: s,
                run_viewer_info_checks: l
            }, {
                subjectUserId: this.userId
            })
        }, t.prototype.getParentFolderAccess = function(e) {
            e.contentId, e.memberId, e.accessLevel;
            throw new f("Parent folder access points not implemented for files")
        }, t.prototype.relinquishMembership = function(e) {
            var t = e.contentId;
            return this.ns("sharing").rpc("relinquish_file_membership", {
                file: String(t)
            }, {
                subjectUserId: this.userId
            })
        }, t.prototype.listReceivedFiles = function(e) {
            var t = e.limit,
                n = e.actions,
                r = e.descending;
            return null == t && (t = 100), null == n && (n = []), null == r && (r = !1), this.ns("sharing").rpc("list_received_files", {
                limit: t,
                actions: n,
                descending: r
            }, {
                subjectUserId: this.userId
            }).then(c.listFilesResultApiToRecord)
        }, t.prototype.listReceivedFilesContinue = function(e) {
            var t = e.cursor;
            return this.ns("sharing").rpc("list_received_files/continue", {
                cursor: t
            }, {
                subjectUserId: this.userId
            }).then(c.listFilesResultApiToRecord)
        }, t.prototype.updateMember = function(e) {
            var t = this,
                n = e.contentId,
                r = e.memberId,
                o = e.accessLevel;
            return this.ns("sharing").rpc("update_file_member", {
                file: String(n),
                member: c.makeMemberSelector(r),
                access_level: c.accessLevelConstToApi(o)
            }, {
                subjectUserId: this.userId
            }).then(function(e) {
                return c.memberAccessLevelApiToRecord(t.userId, e)
            })
        }, t.prototype.updatePolicy = function(e) {
            var t = e.contentId,
                n = e.newPolicy,
                r = e.actions,
                o = c.combinedPolicyDiffToApi(n);
            return o.actions = r, o.file = t, this.ns("sharing").rpc("alpha/update_file_policy", o, {
                subjectUserId: this.userId
            }).then(function(e) {
                var t;
                return null != e.metadata && (t = e, e = t.metadata), c.fileMetadataApiToRecord(e)
            })
        }, t.prototype.unshare = function(e) {
            var t = e.contentId;
            return this.ns("sharing").rpc("unshare_file", {
                file: String(t)
            }, {
                subjectUserId: this.userId
            })
        }, t
    })(y);
    t.FileShareApiClient = v;
    var b = (function(e) {
        function t(t) {
            var n = t.userId,
                r = t.isNonUserRelativeContext,
                o = e.call(this, {
                    userId: n,
                    isNonUserRelativeContext: r
                }) || this;
            return o.getMetadata = o.getMetadata.bind(o), o.validateFqPath = o.validateFqPath.bind(o), o.updatePolicy = o.updatePolicy.bind(o), o.updatePolicyAlpha = o.updatePolicyAlpha.bind(o), o
        }
        return n.__extends(t, e), t.prototype.share = function(e) {
            var t = this,
                n = e.fqPath,
                r = e.folderPolicy,
                o = e.confidential,
                i = void 0 !== o && o,
                s = e.checkFSWs,
                a = void 0 !== s && s,
                l = e.syncSetting,
                u = void 0 === l ? null : l,
                d = e.should_be_new_path,
                p = void 0 === d ? null : d,
                _ = c.combinedPolicyDiffToApi(r);
            return _.path = n, _.confidentiality = i ? "confidential" : "not_confidential", a && (_.fsw_request = "check"), null !== u && (_.sync_setting = u), null !== p && (_.should_be_new_path = p), this.ns("sharing").rpc("alpha/share_folder", _, {
                subjectUserId: this.userId
            }).then(function(e) {
                return ("complete" === e[".tag"] ? Promise.resolve(e) : w(t.checkShareJobStatus.bind(t, {
                    jobId: e.async_job_id
                }))).then(c.folderMetadataApiToRecord)
            })
        }, t.prototype.shareWithFsws = function(e) {
            return this.share(n.__assign({}, e, {
                checkFSWs: !0
            })).then(function(e) {
                return {
                    metadata: e
                }
            }).catch(i.catchApiError(function(e) {
                var t = function(e, t) {
                    return e && e[".tag"] && e[".tag"] === t
                };
                if (e && t(e.error, "bad_path") && t(e.error.bad_path, "file_system_warnings")) return {
                    fsws: e.error.bad_path.details
                };
                throw e
            }))
        }, t.prototype.shareWithoutFsws = function(e) {
            return this.share(n.__assign({}, e, {
                checkFSWs: !1
            })).then(function(e) {
                return {
                    metadata: e
                }
            }).catch(i.catchApiError(function(e) {
                throw e
            }))
        }, t.prototype.checkShareJobStatus = function(e) {
            var t = e.jobId;
            return this.ns("sharing").rpc("check_share_internal_job_status", {
                async_job_id: t
            }, {
                subjectUserId: this.userId
            })
        }, t.prototype.checkRemoveMemberJobStatus = function(e) {
            var t = e.jobId;
            return this.ns("sharing").rpc("check_remove_member_job_status", {
                async_job_id: t
            }, {
                subjectUserId: this.userId
            })
        }, t.prototype.addMembers = function(e) {
            var t = e.contentId,
                n = e.members,
                r = e.accessLevel,
                o = e.customMessage,
                i = void 0 === o ? null : o,
                s = e.quiet,
                a = void 0 !== s && s,
                l = (e.addMessageAsComment, c.accessLevelConstToApi(r)),
                u = Array.from(n).map(function(e) {
                    return {
                        member: e,
                        access_level: l
                    }
                });
            return this.addMembersWithAccessLevel({
                contentId: t,
                members: u,
                customMessage: i,
                quiet: a
            })
        }, t.prototype.addMembersWithAccessLevel = function(e) {
            var t = e.contentId,
                n = e.members,
                r = e.customMessage,
                o = void 0 === r ? null : r,
                i = e.quiet,
                s = void 0 !== i && i;
            0 === (null != o ? o.length : void 0) && (o = null);
            var a = {
                shared_folder_id: String(t),
                members: n,
                custom_message: o,
                quiet: s
            };
            return this.ns("sharing").rpc("add_folder_member", a, {
                subjectUserId: this.userId
            })
        }, t.prototype.fetchNsId = function(e) {
            return this.ns("files").rpc("get_metadata", {
                path: e
            }, {
                subjectUserId: this.userId
            }).then(function(e) {
                return null != e.sharing_info ? e.sharing_info.shared_folder_id : void 0
            })
        }, t.prototype.getMetadata = function(e) {
            var t = e.contentId,
                n = e.actions,
                r = void 0 === n ? [] : n;
            return this.ns("sharing").rpc("alpha/get_folder_metadata", {
                shared_folder_id: String(t),
                actions: r
            }, {
                subjectUserId: this.userId
            }).then(c.folderMetadataApiToRecord)
        }, t.prototype._metadataAndInheritMembers = function(e) {
            var t = e.members_cursor;
            return t ? this.listMembersContinue({
                cursor: t
            }).then(function(t) {
                return {
                    metadata: e,
                    inheritedMembers: t
                }
            }) : {
                metadata: e,
                inheritedMembers: new l.SharingMembership
            }
        }, t.prototype.validateFqPath = function(e) {
            var t = e.fqPath,
                n = e.actions,
                r = e.listMembersArg,
                o = e.shouldParseMetadataFromError,
                i = void 0 !== o && o,
                s = e.shareAsConfidential,
                a = void 0 !== s && s;
            null == n && (n = []), null == r && (r = {});
            var l = this.ns("sharing").rpc("validate_folder_path", {
                path: t,
                actions: n,
                list_members_arg: r,
                confidentiality: a ? {
                    ".tag": "confidential"
                } : {
                    ".tag": "not_confidential"
                }
            }, {
                subjectUserId: this.userId
            });
            return this.validatePathContinue(l, i)
        }, t.prototype.validatePathContinue = function(e, t) {
            return e.catch(i.catchApiError(function(e) {
                if ("already_shared" === m(null != e.error ? e.error.bad_path : void 0, function(e) {
                        return e[".tag"]
                    })) return e.error.bad_path;
                if (t && e instanceof i.AppError && e.error && "no_permission" === e.error[".tag"] && c.hasFolderMetadataRecordInMetadata(e.error)) return e.error;
                throw e
            })).then(c.folderMetadataApiToRecord).then(this._metadataAndInheritMembers.bind(this))
        }, t.prototype.validateFolderPathBatch = function(e) {
            var t = e.paths;
            return this.ns("sharing").rpc("validate_folder_path/batch", {
                paths: t
            }, {
                subjectUserId: this.userId
            }).then(function(e) {
                return e.entries.map(function(e) {
                    var t = e.result,
                        n = null;
                    "metadata" === t[".tag"] ? n = t : "no_permission" === (null != t.path_error ? t.path_error[".tag"] : void 0) ? n = t.path_error : "already_shared" === m(null != t.path_error ? t.path_error.bad_path : void 0, function(e) {
                        return e[".tag"]
                    }) && (n = t.path_error.bad_path);
                    var r = null;
                    return n && n.link_metadata && (r = c.folderMetadataApiToRecord(n)), {
                        path: e.path,
                        metadata: r
                    }
                })
            })
        }, t.prototype.updatePolicy = function(e) {
            var t = e.contentId,
                n = e.newPolicy,
                r = n;
            return r.shared_folder_id = String(t), this.ns("sharing").rpc("update_folder_policy", r, {
                subjectUserId: this.userId
            }).then(c.folderMetadataApiToRecord)
        }, t.prototype.updatePolicyAlpha = function(e) {
            var t = e.contentId,
                n = e.newPolicy,
                r = c.combinedPolicyDiffToApi(n);
            return r.shared_folder_id = String(t), this.ns("sharing").rpc("alpha/update_folder_policy", r, {
                subjectUserId: this.userId
            }).then(c.folderMetadataApiToRecord)
        }, t.prototype.unshare = function(e) {
            var t = this,
                n = e.contentId,
                r = e.leaveACopy,
                o = void 0 !== r && r;
            return this.ns("sharing").rpc("unshare_folder", {
                shared_folder_id: String(n),
                leave_a_copy: o
            }, {
                subjectUserId: this.userId
            }).then(function(e) {
                return "complete" === e[".tag"] ? Promise.resolve(e) : w(t.checkJobStatus.bind(t, {
                    jobId: e.async_job_id
                }))
            })
        }, t.prototype.listMembers = function(e) {
            var t = e.contentId,
                n = e.limit;
            e.isAlpha;
            return null == n && (n = 100), this.ns("sharing").rpc("list_folder_members", {
                shared_folder_id: String(t),
                actions: d.MEMBER_ACTION.ALL,
                limit: n
            }, {
                subjectUserId: this.userId
            }).then(c.membershipApiToRecord).then(this._addAccountsToMembership.bind(this))
        }, t.prototype.listMembersContinue = function(e) {
            var t = e.cursor;
            e.isAlpha;
            return this.ns("sharing").rpc("list_folder_members/continue", {
                cursor: t
            }, {
                subjectUserId: this.userId
            }).then(function(e) {
                return c.membershipApiToRecord(e, null)
            }).then(this._addAccountsToMembership.bind(this))
        }, t.prototype.listMountableFolders = function(e) {
            var t = void 0 === e ? {} : e,
                n = t.limit,
                r = t.actions;
            return null == n && (n = 100), null == r && (r = []), this.ns("sharing").rpc("list_mountable_folders", {
                limit: n,
                actions: r
            }, {
                subjectUserId: this.userId
            }).then(c.listFoldersResultApiToRecord)
        }, t.prototype.listMountableFoldersContinue = function(e) {
            var t = e.cursor;
            return this.ns("sharing").rpc("list_mountable_folders/continue", {
                cursor: t
            }, {
                subjectUserId: this.userId
            }).then(c.listFoldersResultApiToRecord)
        }, t.prototype.listMountableFoldersAlpha = function(e) {
            var t = void 0 === e ? {} : e,
                n = t.limit,
                r = t.actions,
                o = t.show_mounted,
                i = t.get_invite_data;
            return null == n && (n = 100), null == r && (r = []), null == i && (i = !1), this.ns("sharing").rpc("alpha/list_mountable_folders", {
                limit: n,
                actions: r,
                show_mounted: o,
                get_invite_data: i
            }, {
                subjectUserId: this.userId
            }).then(c.listFoldersResultApiToRecord)
        }, t.prototype.listMountableFoldersContinueAlpha = function(e) {
            var t = e.cursor;
            return this.ns("sharing").rpc("alpha/list_mountable_folders/continue", {
                cursor: t
            }, {
                subjectUserId: this.userId
            }).then(c.listFoldersResultApiToRecord)
        }, t.prototype.getMemberCounts = function(e) {
            var t = e.contentId;
            return this.ns("sharing").rpc("get_folder_member_counts", {
                shared_folder_id: String(t)
            }, {
                subjectUserId: this.userId
            }).then(c.memberCountsApiToRecord)
        }, t.prototype.getParentFolderAccess = function(e) {
            var t = e.contentId,
                n = e.memberId,
                r = e.accessLevel;
            return this.ns("sharing").rpc("get_parent_folder_access", {
                shared_folder_id: String(t),
                member: c.makeMemberSelector(n),
                access_level: null != r ? c.accessLevelConstToApi(r) : void 0
            }, {
                subjectUserId: this.userId
            }).then(c.memberAccessLevelApiToRecord.bind(null, this.userId))
        }, t.prototype.relinquishMembership = function(e) {
            var t = this,
                n = e.contentId,
                r = e.leaveACopy,
                o = void 0 !== r && r;
            return this.ns("sharing").rpc("relinquish_folder_membership", {
                shared_folder_id: String(n),
                leave_a_copy: o
            }, {
                subjectUserId: this.userId
            }).then(function(e) {
                return "complete" === e[".tag"] ? Promise.resolve() : w(t.checkJobStatus.bind(t, {
                    jobId: e.async_job_id
                }))
            })
        }, t.prototype.removeMember = function(e) {
            var t = this,
                n = e.contentId,
                r = e.memberId,
                o = e.leaveACopy,
                i = void 0 !== o && o;
            return this.ns("sharing").rpc("remove_folder_member", {
                shared_folder_id: String(n),
                member: c.makeMemberSelector(r),
                leave_a_copy: i
            }, {
                subjectUserId: this.userId
            }).then(function(e) {
                return "complete" === e[".tag"] ? Promise.resolve(e) : w(t.checkRemoveMemberJobStatus.bind(t, {
                    jobId: e.async_job_id
                }))
            }).then(function(e) {
                return c.memberAccessLevelApiToRecord(t.userId, e)
            })
        }, t.prototype.transferContent = function(e) {
            var t = e.contentId,
                n = e.memberId;
            return this.ns("sharing").rpc("transfer_folder", {
                shared_folder_id: String(t),
                to_dropbox_id: n
            }, {
                subjectUserId: this.userId
            })
        }, t.prototype.updateMember = function(e) {
            var t = this,
                n = e.contentId,
                r = e.memberId,
                o = e.accessLevel;
            return this.ns("sharing").rpc("update_folder_member", {
                shared_folder_id: String(n),
                member: c.makeMemberSelector(r),
                access_level: c.accessLevelConstToApi(o)
            }, {
                subjectUserId: this.userId
            }).then(function(e) {
                return c.memberAccessLevelApiToRecord(t.userId, e)
            })
        }, t.prototype.mount = function(e) {
            var t = e.contentId;
            return this.ns("sharing").rpc("mount_folder", {
                shared_folder_id: String(t)
            }, {
                subjectUserId: this.userId
            }).then(c.folderMetadataApiToRecord)
        }, t.prototype.unmount = function(e) {
            var t = e.contentId;
            return this.ns("sharing").rpc("unmount_folder", {
                shared_folder_id: String(t)
            }, {
                subjectUserId: this.userId
            })
        }, t.prototype.setConfidentiality = function(e) {
            var t = this,
                n = e.contentId,
                r = e.confidential,
                o = e.keepInheritedMembers,
                i = void 0 !== o && o;
            return this.ns("sharing").rpc("set_access_inheritance", {
                shared_folder_id: String(n),
                access_inheritance: r ? {
                    ".tag": "no_inherit"
                } : {
                    ".tag": "inherit"
                },
                keep_inherited_members: i
            }, {
                subjectUserId: this.userId
            }).then(function(e) {
                return "complete" === e[".tag"] ? Promise.resolve(e) : w(t.checkShareJobStatus.bind(t, {
                    jobId: e.async_job_id
                }))
            }).then(c.folderMetadataApiToRecord)
        }, t
    })(y);
    t.FolderShareApiClient = b;
    var w = function(e, t) {
        var n = 1e3,
            r = null;
        t && t.interval && (n = t.interval), t && t.timeout && (r = t.timeout);
        var o = null != r ? Date.now() + r : null,
            s = function(t, r) {
                return null != o && Date.now() > o ? r() : e().then(function(e) {
                    switch (e[".tag"]) {
                        case "failed":
                            return r(e);
                        case "complete":
                            return t(e);
                        case "in_progress":
                            return window.setTimeout(s, n, t, r)
                    }
                }).catch(i.catchApiError(function(e) {
                    return r(e)
                }))
            };
        return new Promise(s)
    }
}), define("modules/clean/sharing/api/types/metadata", ["require", "exports", "tslib", "external/immutable", "modules/clean/api_v2/types"], function(e, t, n, r, o) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), r = n.__importStar(r), t.MemberPolicy = {
        team: new o.UnionScalar("team"),
        anyone: new o.UnionScalar("anyone")
    }, t.AclUpdatePolicy = {
        owner: new o.UnionScalar("owner"),
        editors: new o.UnionScalar("editors")
    }, t.SharedLinkPolicy = {
        anyone: new o.UnionScalar("anyone"),
        members: new o.UnionScalar("members")
    }, t.SharedFolderMemberMemberPolicy = {
        team: new o.UnionScalar("team"),
        anyone: new o.UnionScalar("anyone")
    }, t.SharedFolderJoinPolicy = {
        from_team_only: new o.UnionScalar("from_team_only"),
        from_anyone: new o.UnionScalar("from_anyone")
    }, t.SharedLinkCreatePolicy = {
        default_public: new o.UnionScalar("default_public"),
        default_team_only: new o.UnionScalar("default_team_only"),
        team_only: new o.UnionScalar("team_only")
    }, t.RequestedVisibilityPolicy = {
        policy_name: "requested_visibility",
        password: "password",
        public: "public",
        team_only: "team_only"
    }, t.ResolvedVisibilityPolicy = {
        policy_name: "resolved_visibility",
        only_you: "only_you",
        password: "password",
        public: "public",
        shared_folder_only: "shared_folder_only",
        team_and_password: "team_and_password",
        team_only: "team_only"
    }, t.VisibilityDisallowedReason = {
        delete_and_recreate: "delete_and_recreate",
        restricted_by_shared_folder: "restricted_by_shared_folder",
        restricted_by_team: "restricted_by_team",
        user_account_type: "user_account_type",
        user_not_on_team: "user_not_on_team",
        permission_denied: "permission_denied"
    }, t.LinkExpiryPolicy = {
        policy_name: "expires"
    }, t.ViewerInfoPolicy = {
        policy_name: "viewer_info_policy",
        enabled: "enabled",
        disabled: "disabled"
    }, t.DownloadPolicy = {
        policy_name: "download_policy",
        allow: "allow",
        disallow: "disallow"
    }, t.LinkAudience = {
        public: "public",
        team: "team",
        members: "members",
        default_on: "default_on"
    }, t.GroupManagementType = {
        user_managed: new o.UnionScalar("user_managed"),
        company_managed: new o.UnionScalar("company_managed"),
        system_managed: new o.UnionScalar("system_managed")
    };
    var i = (function(e) {
        function t() {
            return null !== e && e.apply(this, arguments) || this
        }
        return n.__extends(t, e), t
    })(r.Record({
        id: null,
        name: null
    }, "Team"));
    t.Team = i;
    var s = (function(e) {
        function t() {
            return null !== e && e.apply(this, arguments) || this
        }
        return n.__extends(t, e), t
    })(r.Record({
        display_name: null,
        member_id: null,
        team_info: null
    }, "TeamMemberInfo"));
    t.TeamMemberInfo = s;
    var a = (function(e) {
        function t() {
            return null !== e && e.apply(this, arguments) || this
        }
        return n.__extends(t, e), t
    })(r.Record({
        id: null,
        name: null,
        sharing_policies: null
    }, "FullTeam"));
    t.FullTeam = a;
    var l = (function(e) {
        function t() {
            return null !== e && e.apply(this, arguments) || this
        }
        return n.__extends(t, e), t
    })(r.Record({
        shared_folder_member_policy: null,
        shared_folder_join_policy: null,
        shared_link_create_policy: null
    }, "TeamSharingPolicies"));
    t.TeamSharingPolicies = l;
    var c = (function(e) {
        function t() {
            return null !== e && e.apply(this, arguments) || this
        }
        return n.__extends(t, e), t
    })(r.Record({
        account_id: null,
        display_name: null,
        disabled: !1,
        email: null,
        email_verified: !1,
        familiar_name: null,
        given_name: null,
        is_teammate: !1,
        profile_photo_url: null,
        surname: null,
        team_member_id: null
    }, "BasicAccount"));
    t.BasicAccount = c;
    var u = (function(e) {
        function t() {
            return null !== e && e.apply(this, arguments) || this
        }
        return n.__extends(t, e), t
    })(r.Record({
        account_id: null,
        display_name: null,
        disabled: !1,
        email: null,
        email_verified: !1,
        familiar_name: null,
        given_name: null,
        profile_photo_url: null,
        surname: null,
        team: null,
        team_member_id: null
    }, "FullAccount"));
    t.FullAccount = u;
    var d = (function(e) {
        function t() {
            return null !== e && e.apply(this, arguments) || this
        }
        return n.__extends(t, e), t
    })(r.Record({
        allow: !1,
        reason: null
    }, "PermissionSetting"));
    t.PermissionSetting = d;
    var p = (function(e) {
        function t() {
            return null !== e && e.apply(this, arguments) || this
        }
        return n.__extends(t, e), t.prototype.contentId = function() {
            return this.shared_folder_id || this.path_lower
        }, t.prototype.isSharedFolder = function() {
            return Boolean(this.shared_folder_id)
        }, t.prototype.isNewSharedFolder = function() {
            return !this.shared_folder_id
        }, t
    })(r.Record({
        access_type: null,
        is_confidential: !1,
        is_inside_team_folder: !1,
        is_team_folder: !1,
        link_metadata: null,
        members_cursor: null,
        name: null,
        owner_team: null,
        parent_shared_folder_id: null,
        path_lower: null,
        permissions: null,
        policy: null,
        preview_url: null,
        shared_folder_id: null,
        time_invited: null,
        can_mount: null,
        folder_size: null,
        invite_info: null,
        parent_folder_name: null
    }, "SharedFolderMetadata"));
    t.SharedFolderMetadata = p;
    var _ = (function(e) {
        function t() {
            return null !== e && e.apply(this, arguments) || this
        }
        return n.__extends(t, e), t
    })(r.Record({
        acl_update_policy: null,
        download_policy: null,
        member_policy: null,
        viewer_info_policy: null,
        resolved_member_policy: null,
        shared_link_policy: null
    }, "FolderPolicy"));
    t.FolderPolicy = _;
    var h = (function(e) {
        function t() {
            return null !== e && e.apply(this, arguments) || this
        }
        return n.__extends(t, e), t
    })(r.Record({
        change_options: null,
        disable_viewer_info: null,
        edit_contents: null,
        enable_viewer_info: null,
        invite_editor: null,
        invite_viewer: null,
        invite_viewer_no_comment: null,
        leave_a_copy: null,
        relinquish_membership: null,
        remove_download_policy: null,
        set_download_policy: null,
        update_confidentiality: null,
        unmount: null,
        unshare: null,
        create_link: null
    }, "FolderPermissions"));
    t.FolderPermissions = h;
    var m = (function(e) {
        function t() {
            return null !== e && e.apply(this, arguments) || this
        }
        return n.__extends(t, e), t
    })(r.Record({
        entries: r.Map(),
        cursor: null
    }, "ListFoldersResult"));
    t.ListFoldersResult = m;
    var f = (function(e) {
        function t() {
            return null !== e && e.apply(this, arguments) || this
        }
        return n.__extends(t, e), t.prototype.contentId = function() {
            return this.id
        }, t.prototype.isSharedFolder = function() {
            return !1
        }, t.prototype.isNewSharedFolder = function() {
            return !1
        }, t
    })(r.Record({
        access_type: null,
        id: null,
        file_policy: null,
        link_metadata: null,
        name: null,
        owner_team: null,
        policy: null,
        parent_shared_folder_id: null,
        path_display: null,
        path_lower: null,
        permissions: null,
        preview_url: null,
        time_invited: null,
        is_cloud_doc: null
    }, "SharedFileMetadata"));
    t.SharedFileMetadata = f;
    var y = (function(e) {
        function t() {
            return null !== e && e.apply(this, arguments) || this
        }
        return n.__extends(t, e), t
    })(r.Record({
        change_options: null,
        disable_viewer_info: null,
        edit_contents: null,
        enable_viewer_info: null,
        invite_viewer: null,
        invite_editor: null,
        invite_viewer_no_comment: null,
        relinquish_membership: null,
        remove_download_policy: null,
        set_download_policy: null,
        unshare: null,
        view_members: null,
        create_link: null,
        create_edit_link: null,
        create_view_link: null,
        share_message_as_comment: null
    }, "FilePermissions"));
    t.FilePermissions = y;
    var g = (function(e) {
        function t() {
            return null !== e && e.apply(this, arguments) || this
        }
        return n.__extends(t, e), t
    })(r.Record({
        audience: null,
        download_policy: null,
        viewer_info_policy: null
    }, "FilePolicy"));
    t.FilePolicy = g;
    var v = (function(e) {
        function t() {
            return null !== e && e.apply(this, arguments) || this
        }
        return n.__extends(t, e), t
    })(r.Record({
        entries: r.Map(),
        cursor: null
    }, "ListFilesResult"));
    t.ListFilesResult = v;
    var b = (function(e) {
        function t() {
            return null !== e && e.apply(this, arguments) || this
        }
        return n.__extends(t, e), t.prototype.getMemberCount = function() {
            return this.memberCount || this.invitees.count() + this.groups.count() + this.users.count()
        }, t
    })(r.Record({
        cursor: null,
        invitees: r.Map(),
        groups: r.Map(),
        users: r.Map(),
        memberCount: null
    }, "SharingMembership"));
    t.SharingMembership = b, t.makeMemberKey = function(e, t) {
        return e + ":" + t
    };
    var w;
    (function(e) {
        e.USERS = "users", e.GROUPS = "groups", e.INVITEES = "invitees"
    })(w = t.MembershipType || (t.MembershipType = {}));
    var S = (function(e) {
        function r() {
            return null !== e && e.apply(this, arguments) || this
        }
        return n.__extends(r, e), r.prototype.memberId = function() {
            return this.account_id
        }, r.prototype.memberKey = function() {
            return t.makeMemberKey(this.is_inherited, this.memberId())
        }, r.prototype.displayName = function() {
            return this.account ? this.account.display_name : void 0
        }, r.prototype.contactId = function() {
            return this.account_id
        }, r.prototype.contactType = function() {
            return "dropbox_id"
        }, r.prototype.type = function() {
            return w.USERS
        }, r.prototype.email = function() {
            return this.account ? this.account.email : void 0
        }, r
    })(r.Record({
        access_type: null,
        inherited_access_type: null,
        account: null,
        account_id: null,
        initials: null,
        is_inherited: !1,
        permissions: null,
        platform_type: null,
        same_team: null,
        team_member_id: null,
        time_last_seen: null
    }, "UserMembershipInfo"));
    t.UserMembershipInfo = S;
    var E = (function(e) {
        function r() {
            return null !== e && e.apply(this, arguments) || this
        }
        return n.__extends(r, e), r.prototype.memberId = function() {
            return this.contact_type + ":" + this.contact
        }, r.prototype.memberKey = function() {
            return t.makeMemberKey(this.is_inherited, this.memberId())
        }, r.prototype.displayName = function() {
            return this.contact
        }, r.prototype.contactId = function() {
            return this.contact
        }, r.prototype.contactType = function() {
            return "email"
        }, r.prototype.type = function() {
            return w.INVITEES
        }, r
    })(r.Record({
        access_type: null,
        inherited_access_type: null,
        contact: null,
        contact_type: null,
        initials: !1,
        is_inherited: null,
        permissions: null,
        same_team: null
    }, "InviteeMembershipInfo"));
    t.InviteeMembershipInfo = E;
    var C = (function(e) {
        function r() {
            return null !== e && e.apply(this, arguments) || this
        }
        return n.__extends(r, e), r.prototype.memberId = function() {
            return this.group_id
        }, r.prototype.memberKey = function() {
            return t.makeMemberKey(this.is_inherited, this.memberId())
        }, r.prototype.displayName = function() {
            return this.group_name
        }, r.prototype.contactId = function() {
            return this.group_id
        }, r.prototype.contactType = function() {
            return "dropbox_id"
        }, r.prototype.type = function() {
            return w.GROUPS
        }, r
    })(r.Record({
        access_type: null,
        inherited_access_type: null,
        group_external_id: null,
        group_id: null,
        group_management_type: null,
        group_name: null,
        group_type: null,
        initials: null,
        is_inherited: !1,
        is_member: !1,
        is_owner: !1,
        member_count: null,
        permissions: null,
        same_team: !0
    }, "GroupMembershipInfo"));
    t.GroupMembershipInfo = C;
    var k = (function(e) {
        function t() {
            return null !== e && e.apply(this, arguments) || this
        }
        return n.__extends(t, e), t
    })(r.Record({
        leave_a_copy: null,
        make_editor: null,
        make_owner: null,
        make_viewer: null,
        make_viewer_no_comment: null,
        remove: null
    }, "MemberPermissions"));
    t.MemberPermissions = k;
    var A = (function(e) {
        function t() {
            return null !== e && e.apply(this, arguments) || this
        }
        return n.__extends(t, e), t
    })(r.Record({
        total_unique_users: null,
        total_unique_inherited_members: null,
        users_outside_team: null,
        exceeds_count: !1
    }, "MemberCounts"));
    t.MemberCounts = A;
    var T = (function(e) {
        function t() {
            return null !== e && e.apply(this, arguments) || this
        }
        return n.__extends(t, e), t
    })(r.Record({
        access_level: null,
        warning: null,
        parentFolders: null
    }, "MemberAccessLevelResult"));
    t.MemberAccessLevelResult = T;
    var I = (function(e) {
        function t() {
            return null !== e && e.apply(this, arguments) || this
        }
        return n.__extends(t, e), t
    })(r.Record({
        name: null,
        shared_folder_id: null,
        path: null,
        permissions: null
    }, "ParentFolderInfo"));
    t.ParentFolderInfo = I;
    var D = (function(e) {
        function t() {
            return null !== e && e.apply(this, arguments) || this
        }
        return n.__extends(t, e), t.prototype.isFolder = function() {
            return "folder" === this.file_type
        }, t.prototype.teamInfo = function() {
            return this.content_owner_team_info ? this.content_owner_team_info : this.team_member_info ? this.team_member_info.team_info : void 0
        }, t.prototype.accessLevel = function() {
            return this.link_permissions.link_access_level
        }, t.prototype.isRighteousLink = function() {
            return Boolean(this.link_permissions && this.link_permissions.audience_options && this.link_permissions.effective_audience && this.link_permissions.link_access_level)
        }, t
    })(r.Record({
        url: null,
        client_modified: null,
        content_owner_team_info: null,
        expires: null,
        file_type: null,
        id: null,
        link_permissions: null,
        name: null,
        path_lower: null,
        rev: null,
        server_modified: null,
        size: null,
        team_member_info: null,
        preview_type: null
    }, "LinkMetadata"));
    t.LinkMetadata = D;
    var x = (function(e) {
        function t() {
            return null !== e && e.apply(this, arguments) || this
        }
        return n.__extends(t, e), t
    })(r.Record({
        requested_visibility: null,
        link_password: null,
        expires: null,
        allow_download: null,
        audience: null
    }, "LinkPolicy"));
    t.LinkPolicy = x;
    var R = (function(e) {
        function t() {
            return null !== e && e.apply(this, arguments) || this
        }
        return n.__extends(t, e), t.prototype.canChangeDownload = function() {
            return null != this.can_disallow_download && null != this.can_allow_download && null != this.allow_download
        }, t
    })(r.Record({
        allow_comments: null,
        can_revoke: null,
        allow_download: null,
        can_allow_download: null,
        can_disallow_download: null,
        can_set_expiry: null,
        can_remove_expiry: null,
        effective_audience: null,
        link_access_level: null,
        requested_visibility: null,
        resolved_visibility: null,
        restricting_shared_folder_path: null,
        revoke_failure_reason: null,
        team_restricts_comments: null,
        visibility_policies: null,
        audience_options: null
    }, "LinkPermissions"));
    t.LinkPermissions = R;
    var M = (function(e) {
        function t() {
            return null !== e && e.apply(this, arguments) || this
        }
        return n.__extends(t, e), t
    })(r.Record({
        policy: null,
        resolved_policy: null,
        allowed: null,
        disallowed_reason: null
    }, "LinkVisibilityPolicy"));
    t.LinkVisibilityPolicy = M;
    var P = (function(e) {
        function t() {
            return null !== e && e.apply(this, arguments) || this
        }
        return n.__extends(t, e), t
    })(r.Record({
        audience: null,
        allowed: null
    }, "LinkAudienceOption"));
    t.LinkAudienceOption = P;
    var O = (function(e) {
        function t() {
            return null !== e && e.apply(this, arguments) || this
        }
        return n.__extends(t, e), t
    })(r.Record({
        in_righteous_link_settings: !1
    }, "SharingPrefs"));
    t.SharingPrefs = O;
    var L = (function(e) {
        function t() {
            return null !== e && e.apply(this, arguments) || this
        }
        return n.__extends(t, e), t
    })(r.Record({
        shared_folder_id: null,
        name: null,
        audience: null
    }, "AudienceRestrictingSharedFolder"));
    t.AudienceRestrictingSharedFolder = L
}), define("modules/clean/sharing/api/util/types", ["require", "exports", "tslib", "modules/clean/contacts/types", "external/immutable", "modules/clean/api_v2/types", "modules/clean/react/pass/utils", "modules/clean/sharing/access_level", "modules/clean/sharing/link_info", "modules/clean/sharing/api/types/metadata"], function(e, t, n, r, o, i, s, a, l, c) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), r = n.__importDefault(r), o = n.__importStar(o), t.accessLevelConstToApi = function(e) {
        switch (e) {
            case a.ACCESS_LEVEL.OWNER:
                return new i.UnionScalar("owner");
            case a.ACCESS_LEVEL.WRITER:
                return new i.UnionScalar("editor");
            case a.ACCESS_LEVEL.READER:
                return new i.UnionScalar("viewer");
            case a.ACCESS_LEVEL.READER_NO_COMMENT:
                return new i.UnionScalar("viewer_no_comment");
            default:
                throw new Error("unknown access level: " + e)
        }
    }, t.linkAccessLevelToApi = function(e) {
        return new i.UnionScalar(e)
    }, t.accessLevelApiToConst = function(e) {
        switch (e.type || e) {
            case "owner":
                return a.ACCESS_LEVEL.OWNER;
            case "editor":
                return a.ACCESS_LEVEL.WRITER;
            case "viewer":
                return a.ACCESS_LEVEL.READER;
            case "viewer_no_comment":
                return a.ACCESS_LEVEL.READER_NO_COMMENT
        }
    }, t.groupManagementTypeApiToConst = function(e) {
        if (!e) return null;
        switch (e[".tag"]) {
            case "user_managed":
                return c.GroupManagementType.user_managed;
            case "company_managed":
                return c.GroupManagementType.company_managed;
            case "system_managed":
                return c.GroupManagementType.system_managed;
            default:
                return
        }
    }, t.platformTypeApiToConst = function(e) {
        return s.parsePlatformString(e.type)
    }, t.hasFolderMetadataRecordInMetadata = function(e) {
        return null != e.path_lower && null != e.access_type && null != e.policy
    }, t.folderPolicyApiToRecord = function(e) {
        return null == e ? new c.FolderPolicy : new c.FolderPolicy({
            acl_update_policy: e.acl_update_policy && e.acl_update_policy[".tag"],
            download_policy: e.download_policy && e.download_policy[".tag"],
            member_policy: e.member_policy && e.member_policy[".tag"],
            resolved_member_policy: e.resolved_member_policy && e.resolved_member_policy[".tag"],
            shared_link_policy: e.shared_link_policy && e.shared_link_policy[".tag"],
            viewer_info_policy: e.viewer_info_policy && e.viewer_info_policy[".tag"]
        })
    };
    var u = function(e) {
        for (var t = {}, n = 0, r = e; n < r.length; n++) {
            var o = r[n];
            t[o.action[".tag"]] = new c.PermissionSetting({
                allow: o.allow,
                reason: o.reason ? o.reason[".tag"] : void 0
            })
        }
        return t
    };
    t.audienceRestrictingSharedFolderToRecord = function(e) {
        return new c.AudienceRestrictingSharedFolder({
            shared_folder_id: e.shared_folder_id,
            name: e.name,
            audience: e.audience[".tag"]
        })
    }, t.parseFolderPolicy = t.folderPolicyApiToRecord, t.folderPermissionsApiToRecord = function(e) {
        var t = u(e);
        return new c.FolderPermissions(t)
    }, t.folderMetadataApiToRecord = function(e) {
        return new c.SharedFolderMetadata({
            access_type: t.accessLevelApiToConst(i.Union.parse(e.access_type)),
            is_inside_team_folder: e.is_inside_team_folder,
            is_team_folder: e.is_team_folder,
            members_cursor: e.members_cursor,
            name: e.name,
            owner_team: null != e.owner_team ? new c.Team(e.owner_team) : void 0,
            parent_shared_folder_id: e.parent_shared_folder_id,
            path_lower: e.path_lower,
            permissions: null != e.permissions ? t.folderPermissionsApiToRecord(e.permissions) : void 0,
            policy: t.parseFolderPolicy(e.policy),
            preview_url: e.preview_url,
            shared_folder_id: e.shared_folder_id,
            time_invited: null != e.time_invited ? new Date(e.time_invited) : void 0,
            is_confidential: null != e.is_confidential ? e.is_confidential : void 0,
            folder_size: null != e.folder_size ? e.folder_size : void 0,
            can_mount: null != e.can_mount ? e.can_mount : void 0,
            invite_info: null != e.invite_info ? e.invite_info : void 0,
            parent_folder_name: e.parent_folder_name
        })
    }, t.listFoldersResultApiToRecord = function(e) {
        return new c.ListFoldersResult({
            entries: o.Map(e.entries.map(t.folderMetadataApiToRecord).map(function(e) {
                return [e.shared_folder_id, e]
            })),
            cursor: e.cursor
        })
    }, t.filePermissionsApiToRecord = function(e) {
        var t = {};
        if (e)
            for (var n = 0, r = e; n < r.length; n++) {
                var o = r[n];
                t[o.action[".tag"]] = new c.PermissionSetting({
                    allow: o.allow,
                    reason: o.reason && o.reason[".tag"]
                })
            }
        return new c.FilePermissions(t)
    }, t.getFilePolicy = function(e) {
        var t = {};
        return t[c.ViewerInfoPolicy.policy_name] = e && e.viewer_info_policy && e.viewer_info_policy[".tag"], t[c.DownloadPolicy.policy_name] = e && e.download_policy && e.download_policy[".tag"] || c.DownloadPolicy.allow, new c.FilePolicy(t)
    }, t.fileMetadataApiToRecord = function(e) {
        return new c.SharedFileMetadata({
            access_type: null != e.access_type ? t.accessLevelApiToConst(i.Union.parse(e.access_type)) : a.ACCESS_LEVEL.READER,
            id: e.id,
            file_policy: t.getFilePolicy(e.policy),
            is_cloud_doc: null != e.is_cloud_doc && e.is_cloud_doc,
            name: e.name,
            owner_team: e.owner_team && new c.Team(e.owner_team),
            policy: null != e.policy ? t.parseFolderPolicy(e.policy) : new c.FolderPolicy,
            parent_shared_folder_id: e.parent_shared_folder_id,
            path_display: e.path_display,
            path_lower: e.path_lower,
            permissions: t.filePermissionsApiToRecord(e.permissions),
            preview_url: e.preview_url,
            time_invited: e.time_invited && new Date(e.time_invited)
        })
    }, t.listFilesResultApiToRecord = function(e) {
        return new c.ListFilesResult({
            entries: o.Map(e.entries.map(function(e) {
                return [e.id, t.fileMetadataApiToRecord(e)]
            })),
            cursor: e.cursor
        })
    }, t.memberPermissionsApiToRecord = function(e) {
        var t = {};
        if (null != e)
            for (var n = 0, r = e; n < r.length; n++) {
                var o = r[n];
                t[o.action[".tag"]] = new c.PermissionSetting({
                    allow: o.allow,
                    reason: o.reason && o.reason[".tag"]
                })
            }
        return new c.MemberPermissions(t)
    }, t.inviteeMembershipApiToRecord = function(e) {
        var n = void 0;
        e.inherited_access_type && (n = t.accessLevelApiToConst(i.Union.parse(e.inherited_access_type)));
        var r = e.invitee[".tag"];
        return new c.InviteeMembershipInfo({
            access_type: t.accessLevelApiToConst(i.Union.parse(e.access_type)),
            inherited_access_type: n,
            contact: e.invitee[r],
            contact_type: r,
            initials: e.initials,
            is_inherited: e.is_inherited,
            permissions: t.memberPermissionsApiToRecord(e.permissions),
            same_team: Boolean(e.user && e.user.same_team)
        })
    }, t.groupMembershipApiToRecord = function(e) {
        var n = void 0;
        return e.inherited_access_type && (n = t.accessLevelApiToConst(i.Union.parse(e.inherited_access_type))), new c.GroupMembershipInfo({
            access_type: t.accessLevelApiToConst(i.Union.parse(e.access_type)),
            inherited_access_type: n,
            group_external_id: e.group.group_external_id,
            group_id: e.group.group_id,
            group_management_type: t.groupManagementTypeApiToConst(e.group.group_management_type),
            group_name: e.group.group_name,
            group_type: e.group.group_type[".tag"],
            initials: e.initials,
            is_inherited: e.is_inherited,
            is_member: e.group.is_member,
            is_owner: e.group.is_owner,
            member_count: e.group.member_count,
            permissions: t.memberPermissionsApiToRecord(e.permissions),
            same_team: e.group.same_team
        })
    }, t.userMembershipApiToRecord = function(e) {
        var n = void 0;
        return e.inherited_access_type && (n = t.accessLevelApiToConst(i.Union.parse(e.inherited_access_type))), new c.UserMembershipInfo({
            access_type: t.accessLevelApiToConst(i.Union.parse(e.access_type)),
            inherited_access_type: n,
            account_id: e.user.account_id,
            initials: e.initials,
            is_inherited: e.is_inherited,
            permissions: t.memberPermissionsApiToRecord(e.permissions),
            platform_type: e.platform_type && t.platformTypeApiToConst(i.Union.parse(e.platform_type)),
            same_team: e.user.same_team,
            team_member_id: e.user.team_member_id,
            time_last_seen: e.time_last_seen && new Date(e.time_last_seen)
        })
    }, t.membershipApiToRecord = function(e, n) {
        return void 0 === n && (n = null), new c.SharingMembership({
            cursor: e.cursor,
            invitees: o.Map(e.invitees.map(function(e) {
                var n = t.inviteeMembershipApiToRecord(e);
                return [n.memberKey(), n]
            })),
            groups: o.Map(e.groups.map(function(e) {
                var n = t.groupMembershipApiToRecord(e);
                return [n.memberKey(), n]
            })),
            users: o.Map(e.users.map(function(e) {
                var n = t.userMembershipApiToRecord(e);
                return [n.memberKey(), n]
            })),
            memberCount: n
        })
    }, t.memberCountsApiToRecord = function(e) {
        return new c.MemberCounts(e)
    }, t.parentFolderInfoApiToRecord = function(e) {
        return new c.ParentFolderInfo({
            name: e.folder_name,
            shared_folder_id: e.shared_folder_id,
            path: e.path,
            permissions: t.memberPermissionsApiToRecord(e.permissions)
        })
    }, t.memberAccessLevelApiToRecord = function(e, n) {
        if (null == n) return new c.MemberAccessLevelResult;
        var r;
        return null != n.access_details && (r = n.access_details.map(function(e) {
            return t.parentFolderInfoApiToRecord(e)
        })), new c.MemberAccessLevelResult({
            access_level: n.access_level && t.accessLevelApiToConst(i.Union.parse(n.access_level)),
            warning: n.warning,
            parentFolders: r
        })
    }, t.teamMemberInfoApiToRecord = function(e) {
        return null == e ? null : new c.TeamMemberInfo({
            display_name: e.display_name,
            member_id: e.member_id,
            team_info: e.team_info && new c.Team(e.team_info)
        })
    }, t.visibilityPolicyApiToRecord = function(e) {
        return new c.LinkVisibilityPolicy({
            policy: e.policy && e.policy[".tag"],
            resolved_policy: e.resolved_policy && e.resolved_policy[".tag"],
            allowed: e.allowed,
            disallowed_reason: e.disallowed_reason && e.disallowed_reason[".tag"]
        })
    }, t.audienceOptionApiToRecord = function(e) {
        return new c.LinkAudienceOption({
            audience: e.audience[".tag"],
            allowed: e.allowed
        })
    }, t.linkPermissionsApiToRecord = function(e) {
        return null == e ? new c.LinkPermissions : new c.LinkPermissions({
            allow_download: e.allow_download,
            allow_comments: e.allow_comments,
            can_allow_download: e.can_allow_download,
            can_disallow_download: e.can_disallow_download,
            can_revoke: e.can_revoke,
            can_set_expiry: e.can_set_expiry,
            can_remove_expiry: e.can_remove_expiry,
            requested_visibility: e.requested_visibility && e.requested_visibility[".tag"],
            resolved_visibility: e.resolved_visibility && e.resolved_visibility[".tag"],
            restricting_shared_folder_path: e.restricting_shared_folder_path,
            revoke_failure_reason: e.revoke_failure_reason && e.revoke_failure_reason[".tag"],
            team_restricts_comments: e.team_restricts_comments,
            visibility_policies: e.visibility_policies && e.visibility_policies.map(t.visibilityPolicyApiToRecord),
            audience_options: e.audience_options && e.audience_options.map(t.audienceOptionApiToRecord),
            effective_audience: e.effective_audience && e.effective_audience[".tag"],
            link_access_level: e.link_access_level && e.link_access_level[".tag"]
        })
    }, t.linkMetadataApiToRecord = function(e) {
        return new c.LinkMetadata({
            url: e.url,
            client_modified: e.client_modified && new Date(e.client_modified),
            content_owner_team_info: e.content_owner_team_info && new c.Team(e.content_owner_team_info),
            expires: e.expires && new Date(e.expires),
            file_type: e[".tag"],
            id: e.id,
            link_permissions: t.linkPermissionsApiToRecord(e.link_permissions),
            name: e.name,
            path_lower: e.path_lower,
            rev: e.rev,
            server_modified: e.server_modified && new Date(e.server_modified),
            size: e.size,
            team_member_info: t.teamMemberInfoApiToRecord(e.team_member_info),
            preview_type: e.preview_type
        })
    }, t.accountInfoApiToRecord = function(e) {
        return new c.BasicAccount({
            account_id: e.account_id,
            disabled: e.disabled,
            display_name: e.name.display_name,
            email: e.email,
            email_verified: e.email_verified,
            familiar_name: e.name.familiar_name,
            given_name: e.name.given_name,
            is_teammate: e.is_teammate,
            profile_photo_url: e.profile_photo_url,
            surname: e.name.surname,
            team_member_id: e.team_member_id
        })
    }, t.teamSharingPoliciesApiToRecord = function(e) {
        return e && new c.TeamSharingPolicies({
            shared_folder_member_policy: e.shared_folder_member_policy && e.shared_folder_member_policy[".tag"],
            shared_folder_join_policy: e.shared_folder_join_policy && e.shared_folder_join_policy[".tag"],
            shared_link_create_policy: e.shared_link_create_policy && e.shared_link_create_policy[".tag"]
        })
    }, t.fullAccountApiToRecord = function(e) {
        var n = e.team && new c.FullTeam({
            id: e.team.id,
            name: e.team.name,
            sharing_policies: t.teamSharingPoliciesApiToRecord(e.team.sharing_policies)
        });
        return new c.FullAccount({
            account_id: e.account_id,
            disabled: e.disabled,
            display_name: e.name.display_name,
            email: e.email,
            email_verified: e.email_verified,
            familiar_name: e.name.familiar_name,
            given_name: e.name.given_name,
            profile_photo_url: e.profile_photo_url,
            surname: e.name.surname,
            team_member_id: e.team_member_id,
            team: n
        })
    }, t.sharingPrefsApiToRecord = function(e) {
        return new c.SharingPrefs({
            in_righteous_link_settings: Boolean(e.in_righteous_link_settings)
        })
    }, t.makeMemberSelector = function(e) {
        return e.startsWith("email:") ? new i.UnionScalar("email", e.substr(6)) : new i.UnionScalar("dropbox_id", e)
    }, t.parseSharedLinkMetadata = function(e) {
        if (null == e) return null;
        var t = i.Union.parse(e.link_permissions.resolved_visibility).type,
            r = null != e.team_member_info ? {
                teamId: e.team_member_info.team_info.id,
                teamName: e.team_member_info.team_info.name
            } : {
                teamId: null,
                teamName: null
            },
            o = {
                isFolder: "folder" === e[".tag"],
                url: e.url,
                name: e.name,
                expires: e.expires && new Date(e.expires),
                visibility: t,
                isPackage: e.is_package
            };
        return new l.LinkInfo(n.__assign({}, o, r))
    }, t.contactsToMembers = function(e) {
        return e.map(function(e) {
            if (e.type === r.default.NEW_STYLE_GROUP) return new i.UnionScalar("dropbox_id", e.getContactID());
            if (e.type !== r.default.INVALID_ID) return new i.UnionScalar("email", e.getContactID());
            throw new Error("Unknown contact type")
        })
    }, t.createUnionScalar = function(e, t) {
        return new i.UnionScalar(e, t)
    }, t.combinedPolicyDiffToApi = function(e) {
        var t = {};
        return e ? (null != e.acl_update_policy && (t.acl_update_policy = e.acl_update_policy), null != e.member_policy && (t.member_policy = e.member_policy), null != e.shared_link_policy && (t.shared_link_policy = e.shared_link_policy), null != e.download_policy && (t.download_policy = e.download_policy), null != e.viewer_info_policy && (t.viewer_info_policy = e.viewer_info_policy), t) : t
    }
}), define("modules/clean/sharing/confirmation_modals/confirm_with_option_modal", ["require", "exports", "tslib", "react", "spectrum/modal", "modules/clean/ux_analytics_utils", "modules/clean/ux_analytics_modal_tracking"], function(e, t, n, r, o, i, s) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), r = n.__importDefault(r);
    var a = (function(e) {
        function t(t) {
            var n = e.call(this, t) || this;
            if (n.onCancel = function() {
                    n.props.onCancel && n.props.onCancel(n.state.checked), i.dispatchModalClosed()
                }, null == n.props.children) throw new Error("Must have children prop");
            return n.state = {
                checked: !1
            }, n.handleOptionClick = n.handleOptionClick.bind(n), n.handleAccept = n.handleAccept.bind(n), n.handleDismissCompleted = n.handleDismissCompleted.bind(n), n
        }
        return n.__extends(t, e), t.prototype.render = function() {
            var e = this.props.id || "confirm-with-option-modal";
            return r.default.createElement(o.UtilityModal, {
                ariaLabel: this.props.title,
                title: this.props.title,
                overlayClickClose: !0,
                primaryAction: this.props.confirmText,
                secondaryAction: this.props.cancelText,
                onPrimaryAction: this.handleAccept,
                onSecondaryAction: this.onCancel,
                open: !0,
                onReady: i.dispatchModalOpened,
                onRequestClose: this.onCancel,
                overlayClassName: "file-viewer-modal-overlay",
                link: this.props.link,
                onLink: this.props.onClickLink
            }, r.default.createElement(s.UXAnalyticsModalTracking, {
                id: e
            }), this.renderContent())
        }, t.prototype.renderContent = function() {
            return r.default.createElement("div", {
                className: "simple-modal-content"
            }, r.default.createElement("div", {
                className: "confirm-with-option-modal__body-text"
            }, this.props.children), this.renderOption())
        }, t.prototype.renderOption = function() {
            return this.props.showOption ? r.default.createElement("div", {
                className: "u-mar-vertical-s confirm-with-option-modal__option"
            }, r.default.createElement("input", {
                "aria-checked": this.state.checked,
                checked: this.state.checked,
                className: "confirm-with-option-modal__option-input",
                id: "confirm-with-option-modal__input",
                name: "confirmation_option",
                onClick: this.handleOptionClick,
                role: "checkbox",
                type: "checkbox"
            }), r.default.createElement("label", {
                className: "confirm-with-option-modal__option-label",
                htmlFor: "confirm-with-option-modal__input"
            }, this.props.optionLabel)) : null
        }, t.prototype.handleOptionClick = function() {
            this.setState({
                checked: !this.state.checked
            })
        }, t.prototype.handleAccept = function() {
            this.props.onConfirm && this.props.onConfirm(this.state.checked), i.dispatchModalClosed()
        }, t.prototype.handleDismissCompleted = function() {
            this.props.onCancel && this.props.onCancel(this.state.checked)
        }, t
    })(r.default.Component);
    t.ConfirmWithOptionModal = a
}), define("modules/clean/sharing/confirmation_modals/relinquish_membership_confirmation_modal", ["require", "exports", "tslib", "react", "modules/clean/sharing/confirmation_modals/confirm_with_option_modal", "modules/core/i18n", "modules/clean/react/modal"], function(e, t, n, r, o, i, s) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), r = n.__importDefault(r), i = n.__importStar(i);
    var a = i.i18n_default_project("sharing")._;
    t.showRelinquishMembershipConfirmationModal = function(e, t, n, i, l, c) {
        void 0 === l && (l = !1), void 0 === c && (c = !1);
        var u, d, p = null;
        e ? (d = a("Remove your access to this folder?"), u = a(t && !c ? "You may still have access to this folder through a company group or parent folder." : "If you continue, you won’t be able to access this folder anymore."), l && (p = a("Keep a copy of this folder"))) : (d = a("Remove your access to this file?"), u = a("If you continue, you won’t be able to access this file anymore."));
        var _ = e ? "relinquish-membership-folder-modal" : "relinquish-membership-file-modal";
        return s.Modal.showInstance(r.default.createElement(o.ConfirmWithOptionModal, {
            cancelText: a("Cancel"),
            id: _,
            confirmText: a("Remove my access"),
            onCancel: i,
            onConfirm: n,
            optionLabel: p,
            showOption: null != p,
            title: d
        }, u))
    }
}), define("modules/clean/sharing/confirmation_modals/reset_access_modal", ["require", "exports", "tslib", "react", "modules/clean/em_string", "modules/clean/react/modal", "modules/clean/sharing/confirmation_modals/confirm_with_option_modal", "modules/clean/sharing/constants", "modules/core/i18n"], function(e, t, n, r, o, i, s, a, l) {
    "use strict";

    function c(e) {
        var t;
        t = u(e.isFolder ? "Everyone will be removed from this folder. You’ll       still keep a copy of this folder in your Dropbox." : "Everyone will be removed from this file. You’ll       still keep a copy of this file in your Dropbox.");
        var n = u("Unshare “%(content_name)s”?").format({
            content_name: o.Emstring.em_snippet(e.contentName, a.SNIPPET_SIZES.FILENAME)
        });
        i.Modal.showInstance(r.default.createElement(s.ConfirmWithOptionModal, {
            cancelText: u("Cancel"),
            confirmText: u("Unshare"),
            onCancel: e.onCancel,
            onConfirm: e.onConfirm,
            optionLabel: u("Let removed members keep a copy of this shared folder"),
            showOption: e.allowLeaveACopy && e.isFolder,
            title: n
        }, t))
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), r = n.__importDefault(r), l = n.__importStar(l);
    var u = l.i18n_default_project("sharing")._;
    t.confirmResetAccess = c
}), define("modules/clean/sharing/link_description", ["require", "exports", "tslib", "react", "modules/clean/em_string", "modules/clean/react_format", "modules/clean/sharing/constants", "modules/constants/trademark", "modules/core/i18n", "modules/core/exception", "modules/clean/sharing/link_description_plain_text"], function(e, t, n, r, o, i, s, a, l, c, u) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), r = n.__importDefault(r), l = n.__importStar(l);
    var d = l.i18n_default_project("sharing"),
        p = d._,
        _ = d.ungettext,
        h = function(e) {
            return (function() {
                switch (e) {
                    case "public":
                        return p("Anyone with the link");
                    case "team_only":
                        return p("Only people on your Dropbox team");
                    case "password":
                        return p("Only people with the password");
                    case "team_and_password":
                        return p("Only people on your Dropbox team with the password");
                    default:
                        throw Error("Unknown visibility option " + e)
                }
            })()
        };
    t.formatLinkVisibilityOption = h;
    var m = function(e, t, n) {
        return void 0 === n && (n = null), e ? (function() {
            switch (t) {
                case "public":
                    return p("Anyone with the link can comment.");
                case "team_only":
                    return p("Only people on your Dropbox team can comment.");
                case "password":
                    return p("Only people with the password can comment.");
                case "team_and_password":
                    return p("Only people on your Dropbox team with the password can comment.");
                case "shared_folder_only":
                    return n = n ? n : "", p("Only members of the shared folder “%(shared_folder_name)s” can comment.").format({
                        shared_folder_name: o.Emstring.em_snippet(n, s.SNIPPET_SIZES.FILENAME)
                    });
                case "only_you":
                    return p("Only you can comment.");
                default:
                    throw Error("Unknown visibility setting " + t)
            }
        })() : p("No one can comment.")
    };
    t.formatLinkCommentingVisibility = m;
    var f = function(e) {
            return (function() {
                if (e.isFolder()) switch (e.link_permissions.resolved_visibility) {
                    case "password":
                        return i.reactFormat(p("<strong>Anyone</strong> with the link and password can <strong>view</strong> this folder"), {
                            strong: r.default.createElement("strong", null)
                        });
                    case "public":
                        return i.reactFormat(p("<strong>Anyone</strong> with the link can <strong>view</strong> this folder"), {
                            strong: r.default.createElement("strong", null)
                        });
                    case "shared_folder_only":
                        return i.reactFormat(p("<strong>Members of this folder</strong> with this link can <strong>view</strong> this folder"), {
                            strong: r.default.createElement("strong", null)
                        });
                    case "team_and_password":
                        return i.reactFormat(p("<strong>Anyone on your Dropbox team</strong> with the link and the password can <strong>view</strong> this folder"), {
                            strong: r.default.createElement("strong", null)
                        });
                    case "team_only":
                        return i.reactFormat(p("<strong>Anyone on your Dropbox team</strong> with the link can <strong>view</strong> this folder"), {
                            strong: r.default.createElement("strong", null)
                        });
                    case "only_you":
                        return i.reactFormat(p("<strong>Only you</strong> can <strong>view</strong> via the link."), {
                            strong: r.default.createElement("strong", null)
                        });
                    default:
                        throw Error("Unknown visibility setting")
                } else switch (e.link_permissions.resolved_visibility) {
                    case "password":
                        return i.reactFormat(p("<strong>Anyone</strong> with the link and password can <strong>view</strong> this file"), {
                            strong: r.default.createElement("strong", null)
                        });
                    case "public":
                        return i.reactFormat(p("<strong>Anyone</strong> with the link can <strong>view</strong> this file"), {
                            strong: r.default.createElement("strong", null)
                        });
                    case "shared_folder_only":
                        return i.reactFormat(p("<strong>Members of the containing shared folder</strong> with the link can <strong>view</strong> this file"), {
                            strong: r.default.createElement("strong", null)
                        });
                    case "team_and_password":
                        return i.reactFormat(p("<strong>Anyone on your Dropbox team</strong> with the link and the password can <strong>view</strong> this file"), {
                            strong: r.default.createElement("strong", null)
                        });
                    case "team_only":
                        return i.reactFormat(p("<strong>Anyone on your Dropbox team</strong> with the link can <strong>view</strong> this file"), {
                            strong: r.default.createElement("strong", null)
                        });
                    case "only_you":
                        return i.reactFormat(p("<strong>Only you</strong> can <strong>view</strong> via the link."), {
                            strong: r.default.createElement("strong", null)
                        });
                    default:
                        throw Error("Unknown visibility setting")
                }
            })()
        },
        y = function(e) {
            return (function() {
                if (e.isFolder()) switch (e.link_permissions.resolved_visibility) {
                    case "password":
                        return i.reactFormat(p("<strong>Anyone</strong> with the link and password can <strong>view</strong> this folder. Downloads disabled."), {
                            strong: r.default.createElement("strong", null)
                        });
                    case "public":
                        return i.reactFormat(p("<strong>Anyone</strong> with the link can <strong>view</strong> this folder. Downloads disabled."), {
                            strong: r.default.createElement("strong", null)
                        });
                    case "shared_folder_only":
                        return i.reactFormat(p("<strong>Members of this folder</strong> with this link can <strong>view</strong> this folder. Downloads disabled."), {
                            strong: r.default.createElement("strong", null)
                        });
                    case "team_and_password":
                        return i.reactFormat(p("<strong>Anyone on your Dropbox team</strong> with the link and the password can <strong>view</strong> this folder. Downloads disabled."), {
                            strong: r.default.createElement("strong", null)
                        });
                    case "team_only":
                        return i.reactFormat(p("<strong>Anyone on your Dropbox team</strong> with the link can <strong>view</strong> this folder. Downloads disabled."), {
                            strong: r.default.createElement("strong", null)
                        });
                    case "only_you":
                        return i.reactFormat(p("<strong>Only you</strong> can <strong>view</strong> via the link. Downloads disabled."), {
                            strong: r.default.createElement("strong", null)
                        });
                    default:
                        throw Error("Unknown visibility setting")
                } else switch (e.link_permissions.resolved_visibility) {
                    case "password":
                        return i.reactFormat(p("<strong>Anyone</strong> with the link and password can <strong>view</strong> this file. Downloads disabled."), {
                            strong: r.default.createElement("strong", null)
                        });
                    case "public":
                        return i.reactFormat(p("<strong>Anyone</strong> with the link can <strong>view</strong> this file. Downloads disabled."), {
                            strong: r.default.createElement("strong", null)
                        });
                    case "shared_folder_only":
                        return i.reactFormat(p("<strong>Members of the containing shared folder</strong> with the link can <strong>view</strong> this file. Downloads disabled."), {
                            strong: r.default.createElement("strong", null)
                        });
                    case "team_and_password":
                        return i.reactFormat(p("<strong>Anyone on your Dropbox team</strong> with the link and the password can <strong>view</strong> this file. Downloads disabled."), {
                            strong: r.default.createElement("strong", null)
                        });
                    case "team_only":
                        return i.reactFormat(p("<strong>Anyone on your Dropbox team</strong> with the link can <strong>view</strong> this file. Downloads disabled."), {
                            strong: r.default.createElement("strong", null)
                        });
                    case "only_you":
                        return i.reactFormat(p("<strong>Only you</strong> can <strong>view</strong> via the link. Downloads disabled."), {
                            strong: r.default.createElement("strong", null)
                        });
                    default:
                        throw Error("Unknown visibility setting")
                }
            })()
        },
        g = function(e) {
            c.assert(!!e.expires, "this function should only be used when there is expiry for linkMetadata");
            var t = e.expires ? e.expires.getTime() : 0,
                n = (function() {
                    if (null != e.expires) {
                        var n = t - (new Date).getTime();
                        return n < 0 && (n = 0), Math.floor(n / 864e5)
                    }
                    return -1
                })();
            return (function() {
                if (e.isFolder()) switch (e.link_permissions.resolved_visibility) {
                    case "password":
                        return i.reactFormat(_("<strong>Anyone</strong> with the link and the password can <strong>view</strong> this folder. Expires in <strong>a day</strong>. Downloads disabled.", "<strong>Anyone</strong> with the link and the password can <strong>view</strong> this folder. Expires in <strong>%(expires_days)s days</strong>. Downloads disabled.", n), {
                            expires_days: n,
                            strong: r.default.createElement("strong", null)
                        });
                    case "public":
                        return i.reactFormat(_("<strong>Anyone</strong> with the link can <strong>view</strong> this folder. Expires in <strong>a day</strong>. Downloads disabled.", "<strong>Anyone</strong> with the link can <strong>view</strong> this folder. Expires in <strong>%(expires_days)s days</strong>. Downloads disabled.", n), {
                            expires_days: n,
                            strong: r.default.createElement("strong", null)
                        });
                    case "shared_folder_only":
                        return i.reactFormat(_("<strong>Members of this folder</strong> with the link can <strong>view</strong> this folder. Expires in <strong>a day</strong>. Downloads disabled.", "<strong>Members of this folder</strong> with the link can <strong>view</strong> this folder. Expires in <strong>%(expires_days)s days</strong>. Downloads disabled.", n), {
                            expires_days: n,
                            strong: r.default.createElement("strong", null)
                        });
                    case "team_and_password":
                        return i.reactFormat(_("<strong>Anyone on your Dropbox team</strong> with the link and the password can <strong>view</strong> this folder. Expires in <strong>a day</strong>. Downloads disabled.", "<strong>Anyone on your Dropbox team</strong> with the link and the password can <strong>view</strong> this folder. Expires in <strong>%(expires_days)s days</strong>. Downloads disabled.", n), {
                            expires_days: n,
                            strong: r.default.createElement("strong", null)
                        });
                    case "team_only":
                        return i.reactFormat(_("<strong>Anyone on your Dropbox team</strong> with the link can <strong>view</strong> this folder. Expires in <strong>a day</strong>. Downloads disabled.", "<strong>Anyone on your Dropbox team</strong> with the link can <strong>view</strong> this folder. Expires in <strong>%(expires_days)s days</strong>. Downloads disabled.", n), {
                            expires_days: n,
                            strong: r.default.createElement("strong", null)
                        });
                    case "only_you":
                        return i.reactFormat(_("<strong>Only you</strong> can <strong>view</strong> via the link. Expires in <strong>a day</strong>. Downloads disabled.", "<strong>Only you</strong> can <strong>view</strong> via the link. Expires in <strong>%(expires_days)s days</strong>. Downloads disabled.", n), {
                            expires_days: n,
                            strong: r.default.createElement("strong", null)
                        });
                    default:
                        throw Error("Unknown visibility setting")
                } else switch (e.link_permissions.resolved_visibility) {
                    case "password":
                        return i.reactFormat(_("<strong>Anyone</strong> with the link and the password can <strong>view</strong> this file. Expires in <strong>a day</strong>. Downloads disabled.", "<strong>Anyone</strong> with the link and the password can <strong>view</strong> this file. Expires in <strong>%(expires_days)s days</strong>. Downloads disabled.", n), {
                            expires_days: n,
                            strong: r.default.createElement("strong", null)
                        });
                    case "public":
                        return i.reactFormat(_("<strong>Anyone</strong> with the link can <strong>view</strong> this file.\nExpires in <strong>a day</strong>. Downloads disabled.", "<strong>Anyone</strong> with the link can <strong>view</strong> this file. Expires in <strong>%(expires_days)s days</strong>. Downloads disabled.", n), {
                            expires_days: n,
                            strong: r.default.createElement("strong", null)
                        });
                    case "shared_folder_only":
                        return i.reactFormat(_("<strong>Members of the containing shared folder</strong> with the link can <strong>view</strong> this file.\nExpires in <strong>a day</strong>. Downloads disabled.", "<strong>Members of the containing shared folder</strong> with the link can <strong>view</strong> this file. Expires in <strong>%(expires_days)s days</strong>. Downloads disabled.", n), {
                            expires_days: n,
                            strong: r.default.createElement("strong", null)
                        });
                    case "team_and_password":
                        return i.reactFormat(_("<strong>Anyone on your Dropbox team</strong> with the link and the password can <strong>view</strong> this file. Expires in <strong>a day</strong>. Downloads disabled.", "<strong>Anyone on your Dropbox team</strong> with the link and the password can <strong>view</strong> this file.               Expires in <strong>%(expires_days)s days</strong>. Downloads disabled.", n), {
                            expires_days: n,
                            strong: r.default.createElement("strong", null)
                        });
                    case "team_only":
                        return i.reactFormat(_("<strong>Anyone on your Dropbox team</strong> with the link can <strong>view</strong> this file. Expires in <strong>a day</strong>. Downloads disabled.", "<strong>Anyone on your Dropbox team</strong> with the link can <strong>view</strong> this file. Expires in <strong>%(expires_days)s days</strong>. Downloads disabled.", n), {
                            expires_days: n,
                            strong: r.default.createElement("strong", null)
                        });
                    case "only_you":
                        return i.reactFormat(_("<strong>Only you</strong> can <strong>view</strong> via the link. Expires in <strong>a day</strong>. Downloads disabled.", "<strong>Only you<strong> can <strong>view</strong> via the link. Expires in <strong>%(expires_days)s days</strong>. Downloads disabled.", n), {
                            expires_days: n,
                            strong: r.default.createElement("strong", null)
                        });
                    default:
                        throw Error("Unknown visibility setting")
                }
            })()
        },
        v = function(e) {
            c.assert(!!e.expires, "this function should only be used when there is expiry for linkMetadata");
            var t = (function() {
                if (null != e.expires) {
                    var t = e.expires.getTime() - (new Date).getTime();
                    return t < 0 && (t = 0), Math.floor(t / 864e5)
                }
                return -1
            })();
            return (function() {
                if (e.isFolder()) switch (e.link_permissions.resolved_visibility) {
                    case "password":
                        return i.reactFormat(_("<strong>Anyone</strong> with the link and the password can <strong>view</strong> this folder. Expires in <strong>a day</strong>.", "<strong>Anyone </strong>with the link and the password can <strong>view</strong> this folder. Expires in <strong>%(expires_days)s days</strong>.", t), {
                            expires_days: t,
                            strong: r.default.createElement("strong", null)
                        });
                    case "public":
                        return i.reactFormat(_("<strong>Anyone</strong> with the link can <strong>view</strong> this folder. Expires in <strong>a day</strong>.", "<strong>Anyone</strong> with the link can <strong>view</strong> this folder. Expires in <strong>%(expires_days)s days</strong>.", t), {
                            expires_days: t,
                            strong: r.default.createElement("strong", null)
                        });
                    case "shared_folder_only":
                        return i.reactFormat(_("<strong>Members of this folder</strong> with the link can <strong>view</strong> this folder.               Expires in <strong>a day</strong>.", "<strong>Members of this folder</strong> with the link can <strong>view</strong> this folder.               Expires in <strong>%(expires_days)s days</strong>.", t), {
                            expires_days: t,
                            strong: r.default.createElement("strong", null)
                        });
                    case "team_and_password":
                        return i.reactFormat(_("<strong>Anyone on your Dropbox team</strong> with the link and the password can <strong>view</strong> this folder.               Expires in <strong>a day</strong>.", "<strong>Anyone on your Dropbox team</strong> with the link and the password can <strong>view</strong> this folder.               Expires in <strong>%(expires_days)s days</strong>.", t), {
                            expires_days: t,
                            strong: r.default.createElement("strong", null)
                        });
                    case "team_only":
                        return i.reactFormat(_("<strong>Anyone on your Dropbox team</strong> with the link can <strong>view</strong> this folder. Expires in <strong>a day</strong>.", "<strong>Anyone on your Dropbox team</strong> with the link can <strong>view</strong> this folder. Expires in <strong>%(expires_days)s days</strong>.", t), {
                            expires_days: t,
                            strong: r.default.createElement("strong", null)
                        });
                    case "only_you":
                        return i.reactFormat(_("<strong>Only you</strong> can <strong>view</strong> via the link. Expires in <strong>a day</strong>.", "<strong>Only you</strong> can <strong>view</strong> via the link. Expires in <strong>%(expires_days)s days</strong>.", t), {
                            expires_days: t,
                            strong: r.default.createElement("strong", null)
                        });
                    default:
                        throw Error("Unknown visibility setting")
                } else switch (e.link_permissions.resolved_visibility) {
                    case "password":
                        return i.reactFormat(_("<strong>Anyone</strong> with the link and the password can <strong>view</strong> this file. Expires in <strong>a day</strong>.", "<strong>Anyone</strong> with the link and the password can <strong>view</strong> this file. Expires in <strong>%(expires_days)s days</strong>.", t), {
                            expires_days: t,
                            strong: r.default.createElement("strong", null)
                        });
                    case "public":
                        return i.reactFormat(_("<strong>Anyone</strong> with the link can <strong>view</strong> this file. Expires in <strong>a day</strong>.", "<strong>Anyone</strong> with the link can <strong>view</strong> this file. Expires in <strong>%(expires_days)s days</strong>.", t), {
                            expires_days: t,
                            strong: r.default.createElement("strong", null)
                        });
                    case "shared_folder_only":
                        return i.reactFormat(_("<strong>Members of the containing shared folder</strong> with the link can <strong>view</strong> this file.               Expires in <strong>a day</strong>.", "<strong>Members of the containing shared folder</strong> with the link can <strong>view</strong> this file.               Expires in <strong>%(expires_days)s days</strong>.", t), {
                            expires_days: t,
                            strong: r.default.createElement("strong", null)
                        });
                    case "team_and_password":
                        return i.reactFormat(_("<strong>Anyone on your Dropbox team</strong> with the link and the password can <strong>view</strong> this file.               Expires in <strong>a day</strong>.", "<strong>Anyone on your Dropbox team</strong> with the link and the password can <strong>view</strong> this file.               Expires in <strong>%(expires_days)s days</strong>.", t), {
                            expires_days: t,
                            strong: r.default.createElement("strong", null)
                        });
                    case "team_only":
                        return i.reactFormat(_("<strong>Anyone on your Dropbox team</strong> with the link can <strong>view</strong> this file. Expires in <strong>a day</strong>.", "<strong>Anyone on your Dropbox team</strong> with the link can <strong>view</strong> this file. Expires in <strong>%(expires_days)s days</strong>.", t), {
                            expires_days: t,
                            strong: r.default.createElement("strong", null)
                        });
                    case "only_you":
                        return i.reactFormat(_("<strong>Only you</strong> can <strong>view</strong> via the link. Expires in <strong>a day</strong>.", "<strong>Only you</strong> can <strong>view</strong> via the link. Expires in <strong>%(expires_days)s days</strong>.", t), {
                            expires_days: t,
                            strong: r.default.createElement("strong", null)
                        });
                    default:
                        throw Error("Unknown visibility setting")
                }
            })()
        },
        b = function(e) {
            return null != e.expires ? v(e) : f(e)
        },
        w = function(e) {
            return null != e.expires ? g(e) : y(e)
        },
        S = function(e) {
            return e.link_permissions.allow_download === !1 ? w(e) : b(e)
        };
    t.formatShmodelLinkDescription = S;
    var E = function(e, t) {
        switch (e.link_permissions.link_access_level) {
            case "editor":
                return A(e, t);
            case "viewer":
                return T(e, t);
            default:
                throw Error("Unknown link access level: %s".format(e.link_permissions.link_access_level))
        }
    };
    t.formatRighteousLinkDescription = E;
    var C = function(e, t) {
        return e.isRighteousLink() ? E(e, t) : S(e)
    };
    t.formatLinkDescription = C;
    var k = function(e, t) {
        return e.isRighteousLink() ? E(e, t) : u.formatShmodelLinkDescriptionPlainText(e)
    };
    t.formatLinkDescriptionPlainText = k;
    var A = function(e, t) {
            switch (e.link_permissions.effective_audience) {
                case "public":
                    return p("Anyone with this link can edit the file.");
                case "team":
                    return t ? p("Anyone on your %(trademark_business)s team with this link can edit the file.").format({
                        trademark_business: a.TRADEMARK_BUSINESS
                    }) : p("Anyone on the %(trademark_business)s team with this link can edit the file.").format({
                        trademark_business: a.TRADEMARK_BUSINESS
                    });
                case "no_one":
                    return p("Members of the file with this link can edit.");
                default:
                    throw Error("Unknown link audience: %s".format(e.link_permissions.effective_audience))
            }
        },
        T = function(e, t) {
            switch (e.link_permissions.effective_audience) {
                case "public":
                    return p("Anyone with this link can view the file.");
                case "team":
                    return t ? p("Anyone on your %(trademark_business)s team with this link can view the file.").format({
                        trademark_business: a.TRADEMARK_BUSINESS
                    }) : p("Anyone on the %(trademark_business)s team with this link can view the file.").format({
                        trademark_business: a.TRADEMARK_BUSINESS
                    });
                case "no_one":
                    return p("Members of the file with this link can view.");
                default:
                    throw Error("Unknown link audience: %s".format(e.link_permissions.effective_audience))
            }
        }
}), define("modules/clean/sharing/link_description_plain_text", ["require", "exports", "tslib", "modules/core/i18n", "modules/core/exception"], function(e, t, n, r, o) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), r = n.__importStar(r);
    var i = r.i18n_default_project("sharing"),
        s = i._,
        a = i.ungettext,
        l = function(e) {
            return (function() {
                if (e.isFolder()) switch (e.link_permissions.resolved_visibility) {
                    case "password":
                        return s("Anyone with this link and password can view the folder.");
                    case "public":
                        return s("Anyone with this link can view the folder.");
                    case "shared_folder_only":
                        return s("Members of the folder with this link can view the folder.");
                    case "team_and_password":
                        return s("Anyone on your Dropbox team with this link and the password can view the folder.");
                    case "team_only":
                        return s("Anyone on your Dropbox team with this link can view the folder.");
                    case "only_you":
                        return s("Only you can view via this link.");
                    default:
                        throw Error("Unknown visibility setting")
                } else switch (e.link_permissions.resolved_visibility) {
                    case "password":
                        return s("Anyone with this link and password can view the file.");
                    case "public":
                        return s("Anyone with this link can view the file.");
                    case "shared_folder_only":
                        return s("Members of the containing shared folder with this link can view the file.");
                    case "team_and_password":
                        return s("Anyone on your Dropbox team with this link and the password can view the file.");
                    case "team_only":
                        return s("Anyone on your Dropbox team with this link can view the file.");
                    case "only_you":
                        return s("Only you can view via this link.");
                    default:
                        throw Error("Unknown visibility setting")
                }
            })()
        },
        c = function(e) {
            return (function() {
                if (e.isFolder()) switch (e.link_permissions.resolved_visibility) {
                    case "password":
                        return s("Anyone with this link and password can view the folder. Downloads disabled.");
                    case "public":
                        return s("Anyone with this link can view the folder. Downloads disabled.");
                    case "shared_folder_only":
                        return s("Members of the folder with this link can view the folder. Downloads disabled.");
                    case "team_and_password":
                        return s("Anyone on your Dropbox team with this link and the password can view the folder. Downloads disabled.");
                    case "team_only":
                        return s("Anyone on your Dropbox team with this link can view the folder. Downloads disabled.");
                    case "only_you":
                        return s("Only you can view via this link. Downloads disabled.");
                    default:
                        throw Error("Unknown visibility setting")
                } else switch (e.link_permissions.resolved_visibility) {
                    case "password":
                        return s("Anyone with this link and password can view the file. Downloads disabled.");
                    case "public":
                        return s("Anyone with this link can view the file. Downloads disabled.");
                    case "shared_folder_only":
                        return s("Members of the containing shared folder with this link can view the file. Downloads disabled.");
                    case "team_and_password":
                        return s("Anyone on your Dropbox team with this link and the password can view the file. Downloads disabled.");
                    case "team_only":
                        return s("Anyone on your Dropbox team with this link can view the file. Downloads disabled.");
                    case "only_you":
                        return s("Only you can view via this link. Downloads disabled.");
                    default:
                        throw Error("Unknown visibility setting")
                }
            })()
        },
        u = function(e) {
            var t = e.expires ? e.expires.getTime() : 0;
            if (null != e.expires) {
                var n = t - (new Date).getTime();
                return n < 0 && (n = 0), Math.floor(n / 864e5)
            }
            return -1
        },
        d = function(e) {
            o.assert(!!e.expires, "this function should only be used when there is expiry for linkMetadata");
            var t = u(e);
            return (function() {
                if (e.isFolder()) switch (e.link_permissions.resolved_visibility) {
                    case "password":
                        return a("Anyone with this link and the password can view the folder. Expires in a day. Downloads disabled.", "Anyone with this link and the password can view the folder. Expires in %(num)d days. Downloads disabled.", t).format({
                            num: t
                        });
                    case "public":
                        return a("Anyone with this link can view the folder. Expires in a day. Downloads disabled.", "Anyone with this link can view the folder. Expires in %(num)d days. Downloads disabled.", t).format({
                            num: t
                        });
                    case "shared_folder_only":
                        return a("Members of the folder with this link can view this folder. Expires in a day. Downloads disabled.", "Members of the folder with this link can view this folder. Expires in %(num)d days. Downloads disabled.", t).format({
                            num: t
                        });
                    case "team_and_password":
                        return a("Anyone on your Dropbox team with this link and the password can view the folder. Expires in a day. Downloads disabled.", "Anyone on your Dropbox team with this link and the password can view the folder. Expires in %(num)d days. Downloads disabled.", t).format({
                            num: t
                        });
                    case "team_only":
                        return a("Anyone on your Dropbox team with this link can view the folder. Expires in a day. Downloads disabled.", "Anyone on your Dropbox team with this link can view the folder. Expires in %(num)d days. Downloads disabled.", t).format({
                            num: t
                        });
                    case "only_you":
                        return a("Only you can view via this link. Expires in a day. Downloads disabled.", "Only you can view via this link. Expires in %(num)d days. Downloads disabled.", t).format({
                            num: t
                        });
                    default:
                        throw Error("Unknown visibility setting")
                } else switch (e.link_permissions.resolved_visibility) {
                    case "password":
                        return a("Anyone with this link and the password can view the file. Expires in a day. Downloads disabled.", "Anyone with this link and the password can view the file. Expires in %(num)d days. Downloads disabled.", t).format({
                            num: t
                        });
                    case "public":
                        return a("Anyone with this link can view the file.\nExpires in a day. Downloads disabled.", "Anyone with this link can view the file. Expires in %(num)d days. Downloads disabled.", t).format({
                            num: t
                        });
                    case "shared_folder_only":
                        return a("Members of the containing shared folder with this link can view the file.\nExpires in a day. Downloads disabled.", "Members of the containing shared folder with this link can view this file. Expires in %(num)d days. Downloads disabled.", t).format({
                            num: t
                        });
                    case "team_and_password":
                        return a("Anyone on your Dropbox team with this link and the password can view the file. Expires in a day. Downloads disabled.", "Anyone on your Dropbox team with this link and the password can view the file.               Expires in %(num)d days. Downloads disabled.", t).format({
                            num: t
                        });
                    case "team_only":
                        return a("Anyone on your Dropbox team with this link can view the file. Expires in a day. Downloads disabled.", "Anyone on your Dropbox team with this link can view the file. Expires in %(num)d days. Downloads disabled.", t).format({
                            num: t
                        });
                    case "only_you":
                        return a("Only you can view via this link. Expires in a day. Downloads disabled.", "Only you can view via this link. Expires in %(num)d days. Downloads disabled.", t).format({
                            num: t
                        });
                    default:
                        throw Error("Unknown visibility setting")
                }
            })()
        },
        p = function(e) {
            o.assert(!!e.expires, "this function should only be used when there is expiry for linkMetadata");
            var t = u(e);
            return (function() {
                if (e.isFolder()) switch (e.link_permissions.resolved_visibility) {
                    case "password":
                        return a("Anyone with this link and the password can view the folder. Expires in a day.", "Anyone with this link and the password can view the folder. Expires in %(num)d days.", t).format({
                            num: t
                        });
                    case "public":
                        return a("Anyone with this link can view the folder. Expires in a day.", "Anyone with this link can view the folder. Expires in %(num)d days.", t).format({
                            num: t
                        });
                    case "shared_folder_only":
                        return a("Members of the folder with this link can view the folder.               Expires in a day.", "Members of the folder with this link can view the folder.               Expires in %(num)d days.", t).format({
                            num: t
                        });
                    case "team_and_password":
                        return a("Anyone on your Dropbox team with this link and the password can view the folder.               Expires in a day.", "Anyone on your Dropbox team with this link and the password can view the folder.               Expires in %(num)d days.", t).format({
                            num: t
                        });
                    case "team_only":
                        return a("Anyone on your Dropbox team with this link can view the folder. Expires in a day.", "Anyone on your Dropbox team with this link can view the folder. Expires in %(num)d days.", t).format({
                            num: t
                        });
                    case "only_you":
                        return a("Only you can view via this link. Expires in a day.", "Only you can view via this link. Expires in %(num)d days.", t).format({
                            num: t
                        });
                    default:
                        throw Error("Unknown visibility setting")
                } else switch (e.link_permissions.resolved_visibility) {
                    case "password":
                        return a("Anyone with this link and the password can view the file. Expires in a day.", "Anyone with this link and the password can view the file. Expires in %(num)d days.", t).format({
                            num: t
                        });
                    case "public":
                        return a("Anyone with this link can view the file. Expires in a day.", "Anyone with this link can view the file. Expires in %(num)d days.", t).format({
                            num: t
                        });
                    case "shared_folder_only":
                        return a("Members of the containing shared folder with this link can view the file.               Expires in a day.", "Members of the containing shared folder with this link can view the file.               Expires in %(num)d days.", t).format({
                            num: t
                        });
                    case "team_and_password":
                        return a("Anyone on your Dropbox team with this link and the password can view the file.               Expires in a day.", "Anyone on your Dropbox team with this link and the password can view the file.               Expires in %(num)d days.", t).format({
                            num: t
                        });
                    case "team_only":
                        return a("Anyone on your Dropbox team with this link can view the file. Expires in a day.", "Anyone on your Dropbox team with this link can view the file. Expires in %(num)d days.", t).format({
                            num: t
                        });
                    case "only_you":
                        return a("Only you can view via this link. Expires in a day.", "Only you can view via this link. Expires in %(num)d days.", t).format({
                            num: t
                        });
                    default:
                        throw Error("Unknown visibility setting")
                }
            })()
        };
    t.formatShmodelLinkDescriptionPlainText = function(e) {
        return e.link_permissions.allow_download === !1 ? null != e.expires ? d(e) : c(e) : null != e.expires ? p(e) : l(e)
    }
}), define("modules/clean/sharing/link_info", ["require", "exports"], function(e, t) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var n = (function() {
        function e(e) {
            var t = e.expires,
                n = e.isFolder,
                r = e.name,
                o = e.teamId,
                i = e.teamName,
                s = e.url,
                a = e.visibility,
                l = e.isPackage;
            this.expires = t, this.isFolder = n, this.name = r, this.teamId = o, this.teamName = i, this.url = s, this.visibility = a, this.isPackage = l
        }
        return e
    })();
    t.LinkInfo = n
}), define("modules/clean/sharing/share_page/action_types", ["require", "exports", "modules/clean/flux/action_type"], function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = n.withActionNamespace("share-page", {
        INITIALIZE: "initialize-store",
        EMAIL_UNVERIFIED: "email-unverified",
        SWITCH_TAB: "switch-tab",
        SWITCH_ROLE: "switch-role",
        SWITCH_USER: "switch-user",
        LOAD_PRE_FOLDER_DATA_REQUEST: "load-pre-folder-data-request",
        LOAD_PRE_FOLDER_DATA_SUCCESS: "load-pre-folder-data-success",
        LOAD_PRE_FOLDER_DATA_ERROR: "load-pre-folder-data-error",
        LOAD_FOLDER_DATA_REQUEST: "load-folder-data-request",
        LOAD_FOLDER_DATA_SUCCESS: "load-folder-data-success",
        LOAD_FOLDER_DATA_ERROR: "load-folder-data-error",
        LOAD_PRE_FILE_DATA_REQUEST: "load-pre-file-data-request",
        LOAD_PRE_FILE_DATA_SUCCESS: "load-pre-file-data-success",
        LOAD_PRE_FILE_DATA_ERROR: "load-pre-file-data-error",
        LOAD_FILE_DATA_REQUEST: "load-file-data-request",
        LOAD_FILE_DATA_SUCCESS: "load-file-data-success",
        LOAD_FILE_DATA_ERROR: "load-file-data-error",
        MOUNT_FOLDER_REQUEST: "mount-folder-request",
        MOUNT_FOLDER_SUCCESS: "mount-folder-success",
        MOUNT_FOLDER_ERROR: "mount-folder-error",
        UNMOUNT_FOLDER_REQUEST: "unmount-folder-request",
        UNMOUNT_FOLDER_SUCCESS: "unmount-folder-success",
        UNMOUNT_FOLDER_ERROR: "unmount-folder-error",
        UNSHARE_FOLDER_REQUEST: "unshare-folder-request",
        UNSHARE_FOLDER_SUCCESS: "unshare-folder-success",
        UNSHARE_FOLDER_ERROR: "unshare-folder-error",
        FETCH_TEAM_POLICY_REQUEST: "fetch-team-policy-request",
        FETCH_TEAM_POLICY_SUCCESS: "fetch-team-policy-success",
        FETCH_TEAM_POLICY_ERROR: "fetch-team-policy-error",
        FETCH_FOLDER_POLICY_SUCCESS: "fetch-folder-policy-success",
        FETCH_METADATA_SUCCESS: "fetch-metadata-success",
        RELINQUISH_FOLDER_MEMBERSHIP_REQUEST: "relinquish-folder-membership-request",
        RELINQUISH_FOLDER_MEMBERSHIP_SUCCESS: "relinquish-folder-membership-success",
        RELINQUISH_FOLDER_MEMBERSHIP_ERROR: "relinquish-folder-membership-error",
        RELINQUISH_FILE_MEMBERSHIP_REQUEST: "relinquish-file-membership-request",
        RELINQUISH_FILE_MEMBERSHIP_SUCCESS: "relinquish-file-membership-success",
        RELINQUISH_FILE_MEMBERSHIP_ERROR: "relinquish-file-membership-error"
    });
    t.SharePageActionTypes = r
}), define("modules/clean/sharing/ui_util", ["require", "exports", "tslib", "react", "external/lodash", "modules/clean/analytics", "modules/clean/api_v2/error", "modules/clean/components/loading_indicator", "modules/clean/contacts/contact_token_state", "modules/clean/filepath", "modules/clean/filetypes", "modules/clean/react/async/loadable", "modules/clean/react/icon/icon_helper", "modules/clean/react_format", "modules/clean/sharing/api/types/metadata", "modules/clean/sharing/gating_util", "modules/constants/trademark", "modules/clean/web_timing_logger", "modules/core/i18n", "modules/core/uri", "modules/core/user_i18n"], function(e, t, n, r, o, i, s, a, l, c, u, d, p, _, h, m, f, y, g, v, b) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), r = n.__importDefault(r), o = n.__importStar(o), g = n.__importStar(g), b = n.__importStar(b), t.GoldenGate = m.GoldenGate;
    var w = g.i18n_default_project("sharing")._,
        S = {};
    t.SharingExperiments = S;
    var E = {
            strong: r.default.createElement("strong", null),
            em: r.default.createElement("em", null)
        },
        C = {
            SHARED_FILE: "shared-file",
            SHARED_FOLDER: "shared-folder",
            SHARED_LINK: "shared-link",
            PUBLIC: "public",
            NO_SHARE: "no-share"
        };
    t.SHARE_UI_TYPE = C;
    var k = {
        SINGLE_INVALID: w("The email address you entered is invalid"),
        SINGLE_OUT_OF_TEAM: w("This person isn’t on your Dropbox team"),
        SINGLE_TOO_MANY_MEMBERS: w("Can’t share with this many people"),
        GENERAL_INVALID: w("One or more names or email addresses you entered are invalid."),
        GENERAL_OUT_OF_TEAM: w("One or more invitees are outside your Dropbox team."),
        GENERAL_TOO_MANY_MEMBERS: _.reactFormat(w("This will put the folder over its %(member_limit)s-member limit. <a>Learn more.</a>", {
            comment: "member_limit will be a number greater than 200"
        }), {
            member_limit: m.GoldenGate.SHARING_TOTAL_LIMIT,
            a: r.default.createElement("a", {
                href: "/help/9292",
                target: "_blank",
                key: "help_center_article"
            })
        }),
        NONGROUP_INVITEE: w("Only groups can be added to team folders.")
    };
    t.CONTACT_ERROR_MESSAGES = k;
    var A;
    (function(e) {
        e.Error = "error", e.Warn = "warn"
    })(A || (A = {})), t.ContactsErrorLevel = A;
    var T = function(e, t) {
            return (t.displayName() || "").toLowerCase()
        },
        I = Math.pow(2, 53) - 1,
        D = function(e) {
            return function(t, n) {
                var r = n.memberId() === t,
                    o = n instanceof h.GroupMembershipInfo ? "0" : "1",
                    i = (n.displayName() || "").toLowerCase(),
                    s = function(e) {
                        var t = String(I - Number(e)),
                            n = String(I).length;
                        return t.length < n && (t = "" + Array(n - t.length + 1).join("0") + t), t
                    },
                    a = null != n.account_id && e.has(n.account_id);
                return o + (a && r ? "a" : a ? "b" : null != n.time_last_seen ? "c" + s(n.time_last_seen) : "d") + i
            }
        },
        x = function(e, t, n) {
            var r = n ? D(t) : T;
            return function(t, n) {
                var o = r(e.account_id, t),
                    i = r(e.account_id, n);
                return o < i ? -1 : o === i ? 0 : 1
            }
        };
    t.makeMemberSortCmp = x;
    var R = d.Loadable({
            loader: function() {
                return y.waitForTTI().then(function() {
                    return new Promise(function(t, n) {
                        e(["modules/clean/teams/membership_suggestion_banner"], t, n)
                    }).then(n.__importStar).then(function(e) {
                        return e.MembershipSuggestionBanner
                    })
                })
            }
        }),
        M = function(e, t, n) {
            return !e.is_cdm_member && (t || n)
        };
    t.shouldEnforceMemberLimits = M;
    var P = function(e, t, n, r, o, i, s) {
        var a = {
            state: l.ContactTokenState.ok,
            msg: null
        };
        if (o && !e.group_id) return {
            state: l.ContactTokenState.invalid,
            msg: k.NONGROUP_INVITEE
        };
        if (M(t, o, i) && s > m.GoldenGate.SHARING_TOTAL_LIMIT) return {
            state: l.ContactTokenState.invalid,
            msg: k.SINGLE_TOO_MANY_MEMBERS
        };
        if (e.invalid) a = {
            state: l.ContactTokenState.invalid,
            msg: k.SINGLE_INVALID
        };
        else {
            if (e.email === t.email) return a;
            if (null != n && t.is_team && e.dbx_team_id !== n.id && !e.group_id) {
                var c = k.SINGLE_OUT_OF_TEAM,
                    u = void 0;
                u = "team" === (null != r ? r.member_policy : void 0) || "team" === (null != r ? r.resolved_member_policy : void 0) ? l.ContactTokenState.invalid : l.ContactTokenState.warn, a = {
                    msg: c,
                    state: u
                }
            }
        }
        return a
    };
    t.validateContact = P;
    var O = function(e, n, o, i, s, a, c, u, d, p) {
        for (var _ = null, h = null, f = 0, y = e; f < y.length; f++) {
            var g = y[f],
                v = P(g, n, o, i, s, a, 0),
                b = v.state,
                w = v.msg;
            if (b === l.ContactTokenState.invalid) {
                if (_ = A.Error, w === k.SINGLE_INVALID) {
                    h = k.GENERAL_INVALID;
                    break
                }
                w === k.SINGLE_OUT_OF_TEAM && (h = k.GENERAL_OUT_OF_TEAM), w === k.NONGROUP_INVITEE && (h = k.NONGROUP_INVITEE)
            }
            b === l.ContactTokenState.warn && w === k.SINGLE_OUT_OF_TEAM && (_ || (_ = A.Warn, h = k.GENERAL_OUT_OF_TEAM))
        }
        if (M(n, s, a) && e.length > 0 && _ !== A.Error && c > m.GoldenGate.SHARING_TOTAL_LIMIT && (_ = A.Error, h = k.GENERAL_TOO_MANY_MEMBERS), h === k.GENERAL_OUT_OF_TEAM && u && d) {
            var S = u.experiments,
                E = u.contacts;
            "V3" === S.expUjMagnet2018.admin && E.length > 0 && (h = [r.default.createElement(R, {
                suggestableUserData: u,
                user: n,
                contentInfo: d,
                prefillContacts: e,
                recipientMessage: p,
                key: "MembershipSuggestionBanner",
                cssPlaceholder: t.loadingIndicator()
            })])
        }
        return {
            level: _,
            message: h
        }
    };
    t.validateContacts = O, t.loadingIndicator = function() {
        return r.default.createElement(a.LoadingIndicator, {
            style: a.LoadingIndicatorStyle.DOTS,
            startMessage: ""
        })
    };
    var L = function(e) {
            switch (e) {
                case "reader":
                    return "viewer";
                case "writer":
                    return "editor";
                case "owner":
                    return "owner";
                default:
                    return "default"
            }
        },
        N = function(e) {
            var t = e.displayName() || "",
                n = e.email() || "";
            return {
                access_type: L(e.access_type),
                display_name: t,
                familiar_name: null != e.account ? e.account.familiar_name : void 0,
                initials: null != e.initials ? e.initials : b.getInitials(t),
                photo_url: null != e.account ? e.account.profile_photo_url : void 0,
                user_id: e.memberId(),
                email: n,
                account_id: e.account_id
            }
        };
    t.apiUserMemberToAvatarInfo = N;
    var F = function(e) {
        return {
            access_type: L(e.access_type),
            gid: e.memberId(),
            is_automatic: "team" === e.group_type,
            name: e.displayName(),
            num_users: e.member_count
        }
    };
    t.apiGroupMemberToAvatarInfo = F;
    var U = function(e) {
        return {
            access_type: L(e.access_type),
            invitation_id: e.memberId(),
            email_or_fbname: e.displayName()
        }
    };
    t.apiInviteeMemberToAvatarInfo = U;
    var q = function(e, t, n, r) {
        void 0 === r && (r = {});
        var s = e.extras.origin;
        i.ShareTibEventLogger.log(t, n, s, o.assignIn(r, {
            file_id: e.extras.fileId,
            fq_path: e.displayPath(),
            ns_id: e.isSharedFolder() ? e.sharedFolderId() : void 0,
            modal_session_id: e.extras.modalSessionId
        }))
    };
    t.logTiburonEvent = q;
    var B = {
            access_error: w("You don’t have access to this content."),
            email_unverified: w("You haven’t verified your email. Check your email and try again."),
            bad_member: w("You entered an invalid name or email address."),
            cant_share_outside_team: w("Your team settings don’t allow sharing outside your team."),
            too_many_members: w("You’re sharing with too many people."),
            too_many_pending_invites: w("You’re sharing with too many people."),
            rate_limit: w("You’ve hit the limit of invites for today. Try again later."),
            insufficient_plan: w("You need a Dropbox %(trademark_plus)s or Business account to do this.").format({
                trademark_plus: f.TRADEMARK_PLUS
            }),
            team_folder: w("You can’t add members to a team folder. Contact your team admin."),
            no_permission: w("You don’t have permission to do this. Contact the owner.")
        },
        j = function(e) {
            return e.message ? e.message : e instanceof s.AppError && e.error && e.error[".tag"] && B[e.error[".tag"]] ? B[e.error[".tag"]] : w("There was a problem completing this request.")
        };
    t.genAddMemberErrorMessage = j;
    var V = function(e) {
        var t = null != e.parent_shared_folder_id,
            n = !1;
        return e.permissions && e.permissions.edit_contents && (n = !e.permissions.edit_contents.allow), p.folder_icon({
            isShared: e.isSharedFolder(),
            isDeleted: null == e.path_lower,
            isInTeamFolderTree: t,
            isTeamFolder: e.is_team_folder,
            isViewOnly: n
        })
    };
    t.folderIconForMetadata = V;
    var H = function(e) {
        var t = null != e.parent_shared_folder_id,
            n = !1;
        e.permissions && e.permissions.edit_contents && (n = !e.permissions.edit_contents.allow);
        var r = u.FileTypes.FOLDER;
        return e.isSharedFolder() ? r = u.FileTypes.SHARED_FOLDER : e.is_team_folder && (r = u.FileTypes.TEAM_SHARED_FOLDER), p.spectrumFolderIcon({
            fileType: r,
            isInTeamFolderTree: t,
            isViewOnly: n
        })
    };
    t.spectrumFolderIconForMetadata = H;
    var G = function(e) {
        return p.file_icon(e.name, {
            size: p.ICON_SIZES.LARGE
        })
    };
    t.fileIconForMetadata = G;
    var W = function(e) {
        var t, n = e.containingFolder,
            r = e.filenameToSelect,
            o = e.isCDM,
            i = o ? "content" : "team_folders";
        return n = c.normalize(n) || "", r && (t = [n, r].join("/")), new v.URI({
            path: "/team/admin/" + i + "/home" + n,
            query: t ? {
                select: t
            } : void 0
        })
    };
    t.genContentManagerBridgeUri = W;
    var z = function(e, t) {
        return [c.normalize(t), e].join("/")
    };
    t.getNewFolderPathFromContentName = z;
    var K = function(e) {
        return null == e ? 0 : e.map(function(e) {
            return e.group_size || 1
        }).reduce(function(e, t) {
            return e + t
        }, 0)
    };
    t.getMemberCountForTokens = K;
    var Y = function(e) {
        return e.toHTML ? _.reactFormat(e.toHTML(), E) : e
    };
    t.convertIfHTML = Y
}), define("modules/clean/teams/admin/api/admin_console_api_client", ["require", "exports", "tslib", "modules/clean/api_v2/types", "modules/clean/cloud_docs/types", "modules/clean/api_v2/default_team_client", "modules/clean/filepath", "modules/clean/sharing/api/util/types", "modules/clean/viewer"], function(e, t, n, r, o, i, s, a, l) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), s = n.__importStar(s);
    var c = (function() {
        function e(e) {
            var t;
            void 0 === e && (e = !1), this.isCMForCDM = e;
            var n = l.Viewer.get_viewer().get_user_by_role("work");
            n && (n.team_member_id && (this.selectAdminParams = {
                headers: (t = {}, t[r.ApiV2HeaderNames.DropboxApiSelectAdmin] = n.team_member_id, t)
            }), this.teamClient = new i.DefaultTeamApiV2Client(n))
        }
        return e.prototype.teamRoutes = function() {
            return this.teamClient.ns("team")
        }, e.prototype.teamMembersInternal = function() {
            return this.teamClient.ns("team_members_internal")
        }, e.prototype.teamInsightsRoutes = function() {
            return this.teamClient.ns("team_insights")
        }, e.prototype.teamLogRoutes = function() {
            return this.teamClient.ns("team_log")
        }, e.prototype.usersRoutes = function() {
            return this.teamClient.ns("users")
        }, e.prototype.filesRoutes = function() {
            return this.teamClient.ns("files")
        }, e.prototype.sharingRoutes = function() {
            return this.teamClient.ns("sharing")
        }, e.prototype.federationRoutes = function() {
            return this.teamClient.ns("federation")
        }, e.prototype.fileTransfersRoutes = function() {
            return this.teamClient.ns("file_transfers")
        }, e.prototype.cloudDocsRoutes = function() {
            return this.teamClient.ns("cloud_docs")
        }, e.prototype.setPermanentDeletePolicy = function(e) {
            return this.teamRoutes().rpc("set_permanent_delete_policy", {
                permanent_delete_enabled: e
            }, {})
        }, e.prototype.setCloudDocsPolicy = function(e, t) {
            var n = o.CloudDocProviderIntegration.GDD_INTEGRATION.toString(),
                r = {};
            if (r[n] = e ? o.IntegrationCreateAndEdit : o.IntegrationViewOnly, "boolean" == typeof t) {
                r[o.CloudDocProviderIntegration.PAPER_INTEGRATION.toString()] = t ? o.IntegrationCreateAndEdit : o.IntegrationViewOnly
            }
            return this.cloudDocsRoutes().rpc("team_settings/set", {
                settings: r
            }, this.selectAdminParams)
        }, e.prototype.setMultipleAccountsPolicy = function(e) {
            return this.teamRoutes().rpc("set_multiple_accounts_policy", {
                multiple_accounts_enabled: e
            }, {})
        }, e.prototype.setSecondaryEmailsPolicy = function(e) {
            var t = e ? {
                ".tag": "enabled"
            } : {
                ".tag": "disabled"
            };
            return this.teamRoutes().rpc("set_secondary_mails_policy", {
                secondary_mails_policy: t
            }, {})
        }, e.prototype.setCameraUploadsPolicy = function(e) {
            var t = e ? {
                ".tag": "enabled"
            } : {
                ".tag": "disabled"
            };
            return this.teamRoutes().rpc("set_camera_uploads_policy", {
                camera_uploads_policy: t
            }, {})
        }, e.prototype.setFileLockingPolicy = function(e) {
            var t = e ? {
                ".tag": "enabled"
            } : {
                ".tag": "disabled"
            };
            return this.teamRoutes().rpc("set_file_locking_policy", {
                file_locking_policy: t
            }, {})
        }, e.prototype.updateAppActionSettings = function(e, t) {
            return this.teamRoutes().rpc("app_actions/update_settings", {
                allow_actions: e,
                action_state_updates: t.map(function(e) {
                    return {
                        id: e.id,
                        is_enabled: !e.isIndividuallyDisabled
                    }
                })
            }, {})
        }, e.prototype.updateCommunicationAppSettings = function(e) {
            return this.teamRoutes().rpc("profile_services/set_service_enabled_states", {
                enabled_state_updates: e.map(function(e) {
                    return {
                        service: {
                            ".tag": e.id
                        },
                        is_enabled: !e.isIndividuallyDisabled
                    }
                })
            }, {})
        }, e.prototype.setFileRequestPolicy = function(e) {
            return this.teamRoutes().rpc("sharing/set_file_request_policy", {
                file_request_enabled: e
            }, {})
        }, e.prototype.setOfficeAddInPolicy = function(e) {
            return this.teamRoutes().rpc("set_office_addin_policy", {
                office_addin_enabled: e
            }, {})
        }, e.prototype.setSharedLinkPolicy = function(e, t) {
            var n = {
                sharing_outside_enabled: e
            };
            return e && (n.default_visibility = t), this.teamRoutes().rpc("sharing/set_shared_link_policy", n, {})
        }, e.prototype.setSharedFolderSharingPolicy = function(e) {
            return this.teamRoutes().rpc("sharing/set_shared_folder_sharing_policy", {
                sharing_outside_enabled: e
            }, {})
        }, e.prototype.setSharedFolderJoiningPolicy = function(e) {
            return this.teamRoutes().rpc("sharing/set_shared_folder_joining_policy", {
                joining_outside_enabled: e
            }, {})
        }, e.prototype.setFileTransfersPolicy = function(e) {
            return this.fileTransfersRoutes().rpc("teams/set_file_transfers_policy", {
                file_transfers_enabled: e
            }, {})
        }, e.prototype.setCommentingPolicy = function(e) {
            return this.teamRoutes().rpc("sharing/set_commenting_policy", {
                commenting_enabled: e
            }, {})
        }, e.prototype.setPasswordStrength = function(e, t) {
            var n = "enabled" === e ? t : "minimal_requirements";
            return this.teamRoutes().rpc("set_password_requirements", {
                password_strength_policy: n
            }, {})
        }, e.prototype.resetAllPasswords = function() {
            return this.teamRoutes().rpc("reset_all_passwords", void 0, {})
        }, e.prototype.setViewerInfoSetting = function(e) {
            return this.teamRoutes().rpc("set_viewer_info_policy", {
                viewer_info_policy: e
            }, {})
        }, e.prototype.setPaperPolicy = function(e, t, n, r) {
            var o = {
                    paper_deployment_type: n,
                    enabled_members_update: {
                        users_to_add: this.make_user_selector_list(r.users_to_add),
                        users_to_remove: this.make_user_selector_list(r.users_to_remove)
                    }
                },
                i = {
                    paper_enabled: e,
                    paper_deployment_mode: o
                };
            return t && (i.dropbox_terms = "agree"), this.teamRoutes().rpc("paper/set_paper_policy", i, {})
        }, e.prototype.setPaperSharingPolicy = function(e, t) {
            void 0 === e && (e = !0);
            var n = {
                external_sharing_allowed: void 0 === e || e,
                default_visibility: t
            };
            return this.teamRoutes().rpc("paper/set_paper_sharing_policy", n, {})
        }, e.prototype.setPaperDefaultFolderPolicy = function(e) {
            return this.teamRoutes().rpc("paper/set_paper_default_folder_policy", {
                default_folder_policy: e
            }, {})
        }, e.prototype.setPaperDesktopPolicy = function(e) {
            return this.teamRoutes().rpc("paper/set_paper_desktop_policy", {
                enabled: e
            }, {})
        }, e.prototype.setShowcasePolicy = function(e, t, n) {
            var r = {
                showcase_enabled: e,
                external_sharing_enabled: t,
                download_enabled: n
            };
            return this.teamRoutes().rpc("showcase/set_showcase_policy", r, {})
        }, e.prototype.setRequestMembershipPolicy = function(e) {
            return this.teamRoutes().rpc("set_request_membership_policy", {
                request_membership: e
            }, {})
        }, e.prototype.setSuggestMembersPolicy = function(e) {
            return this.teamRoutes().rpc("set_suggest_members_policy", {
                suggest_members_enabled: e
            }, {})
        }, e.prototype.setWatermarkingPolicy = function(e) {
            return this.teamRoutes().rpc("workflows/set_watermarking_policy", {
                watermarking_policy: {
                    ".tag": e ? "on" : "off"
                }
            }, {})
        }, e.prototype.deviceManagementGetExcludedUsers = function() {
            return this.teamRoutes().rpc("device_management/get_excluded_users", void 0, {})
        }, e.prototype.deviceManagementConfigureSettings = function(e) {
            return this.teamRoutes().rpc("device_management/configure_settings", e, {})
        }, e.mapValueToRolloutMethod = function(e) {
            return 0 === e ? "unlink_all" : 1 === e ? "unlink_most_inactive" : "add_member_to_exceptions"
        }, e.prototype.deviceManagementConfigureSettingsForAcf = function(t, n, r, o, i) {
            var s = {
                is_enabled: !0,
                can_user_remove_device: n,
                rollout_method: {
                    ".tag": e.mapValueToRolloutMethod(i)
                },
                users_to_add: t.users_to_add,
                users_to_remove: t.users_to_remove,
                desktop_devices_limit: r === -1 ? {
                    ".tag": "unlimited"
                } : {
                    limited: Number(r),
                    ".tag": "limited"
                },
                mobile_devices_limit: o === -1 ? {
                    ".tag": "unlimited"
                } : {
                    limited: Number(o),
                    ".tag": "limited"
                }
            };
            return this.teamRoutes().rpc("device_management/configure_settings", s, {})
        }, e.prototype.deviceManagementConfigureSettingsDisable = function() {
            return this.teamRoutes().rpc("device_management/configure_settings", {
                is_enabled: !1
            }, {})
        }, e.prototype.deviceManagementRemoveDevice = function(e, t, n) {
            return this.teamRoutes().rpc("device_management/remove_device", {
                user_id: e,
                device_id: t,
                delete_data: n
            }, {})
        }, e.prototype.deviceManagementRemoveClient = function(e, t, n, r) {
            return this.teamRoutes().rpc("device_management/remove_client", {
                user_id: e,
                device_id: t,
                client_unique_identifier: n,
                delete_data: r
            }, {})
        }, e.prototype.webSessionManagementConfigureSettings = function(e, t) {
            return this.teamRoutes().rpc("web_session_management/configure_settings", {
                remember_session_expires: e,
                idle_session_timeout: t
            }, {})
        }, e.prototype.teamFolderArchive = function(e, t) {
            return void 0 === t && (t = !1), this.teamRoutes().rpc("team_folder/archive", {
                team_folder_id: String(e),
                force_async_off: !t
            }, {})
        }, e.prototype.teamFolderUnarchive = function(e) {
            return this.teamRoutes().rpc("team_folder/activate", {
                team_folder_id: String(e)
            }, {})
        }, e.prototype.teamFolderCreate = function(e, t) {
            var n = {
                name: e
            };
            return void 0 !== t && (n.sync_setting = t ? {
                ".tag": "default"
            } : {
                ".tag": "not_synced"
            }), this.teamRoutes().rpc("team_folder/create", n, {})
        }, e.prototype.teamFolderUpdateSyncSetting = function(e) {
            var t = e.teamFolderId,
                n = e.syncSetting,
                r = e.fileIds,
                o = {
                    team_folder_id: t
                },
                i = {
                    ".tag": n
                };
            return r ? o.content_sync_settings = r.map(function(e) {
                return {
                    id: e,
                    sync_setting: i
                }
            }) : o.sync_setting = i, this.teamRoutes().rpc("team_folder/update_sync_settings", o, {})
        }, e.prototype.teamFoldersList = function(e) {
            return void 0 === e && (e = 1e3), this.teamRoutes().rpc("team_folder/list", {
                limit: e
            }, {})
        }, e.prototype.teamFoldersListContinue = function(e) {
            return this.teamRoutes().rpc("team_folder/list/continue", {
                cursor: e
            }, {})
        }, e.prototype.teamFolderRename = function(e, t) {
            return this.teamRoutes().rpc("team_folder/rename", {
                team_folder_id: String(e),
                name: t
            }, {})
        }, e.prototype.teamFolderPermanentlyDelete = function(e) {
            return this.teamRoutes().rpc("team_folder/permanently_delete", {
                team_folder_id: String(e)
            }, {})
        }, e.prototype.setGroupsCreationPolicy = function(e) {
            return this.teamRoutes().rpc("groups/set_creation_policy", {
                group_creation: e
            }, {})
        }, e.prototype.setNTSBlockTrafficPolicy = function(e) {
            return this.teamRoutes().rpc("nts/set_block_traffic_policy", {
                block_traffic_enabled: e
            }, {})
        }, e.prototype.setSyncPolicy = function(e, t) {
            return void 0 === t && (t = void 0), this.teamRoutes().rpc("set_infinite_policy", {
                setting: e,
                admin_sync_defaults_enabled: t
            }, {})
        }, e.prototype.configureSsoAndGoogleLoginPolicy = function(e, t, n, r, o, i) {
            return this.teamRoutes().rpc("configure_sso_and_google_login_policy", {
                sso_policy: e,
                sign_in_url: t,
                sign_out_url: n,
                saml_cert: r,
                saml_nameid_format: o,
                google_login_enabled: i
            }, {})
        }, e.prototype.configureSso = function(e, t, n, r, o) {
            return this.teamRoutes().rpc("configure_sso", {
                sso_policy: e,
                saml_cert: t,
                sign_in_url: n,
                sign_out_url: r,
                nameid_format: o
            }, {})
        }, e.prototype.configureDirectoryRestrictions = function(e) {
            var t = {
                users_to_add: e.users_to_add,
                users_to_remove: e.users_to_remove
            };
            return this.teamRoutes().rpc("directory_restrictions/configure_settings", t, {})
        }, e.prototype.configureGoogleLoginPolicy = function(e) {
            return this.teamRoutes().rpc("configure_google_login_policy", {
                google_login_enabled: e
            }, {})
        }, e.prototype.setResellerSupportSetting = function(e) {
            return this.teamRoutes().rpc("change_reseller_support", {
                reseller_support_enabled: e
            }, {})
        }, e.prototype.folderCreate = function(e, t, n) {
            "/" !== t && (t += "/");
            var r = "ns:" + e + t + n;
            return this.filesRoutes().rpc("create_folder", {
                path: r
            }, this.selectAdminParams)
        }, e.prototype.bulkFileDelete = function(e) {
            for (var t = [], n = null, r = 0, o = e.length; r < o; r++) n = e[r], t.push({
                path: "ns:" + n.ns_id + n.ns_path
            });
            return this.filesRoutes().rpc("delete_batch_with_changeset_sync", {
                entries: t
            }, this.selectAdminParams)
        }, e.prototype.fileRename = function(e, t, n) {
            var r = "ns:" + e + t,
                o = t.substring(0, t.lastIndexOf("/")) + "/" + n,
                i = "ns:" + e + o;
            return this.filesRoutes().rpc("move", {
                from_path: r,
                to_path: i,
                autorename: !0
            }, this.selectAdminParams)
        }, e.prototype.userUiInfo = function(e) {
            return this.usersRoutes().rpc("get_user_ui_info", {
                user_id: e
            }, {})
        }, e.prototype.shareFolder = function(e, t, r, o) {
            void 0 === r && (r = null), void 0 === o && (o = !1);
            var i = "ns:" + e + t,
                s = n.__assign({}, a.combinedPolicyDiffToApi(r), {
                    confidentiality: o ? "confidential" : "not_confidential",
                    path: i
                });
            return this.sharingRoutes().rpc("alpha/share_folder", s, this.selectAdminParams)
        }, e.prototype.validateFolderPath = function(e, t, n, r) {
            var o = "ns:" + e + t;
            return this.sharingRoutes().rpc("validate_folder_path", {
                path: o,
                actions: n,
                list_members_arg: r
            }, this.selectAdminParams)
        }, e.prototype.restoreFile = function(e, t, n) {
            var r = "ns:" + e + t;
            return this.filesRoutes().rpc("restore", {
                path: r,
                rev: n
            }, this.selectAdminParams)
        }, e.prototype.restorePaths = function(e) {
            for (var t, n = [], r = 0, o = e; r < o.length; r++) {
                var i = o[r];
                t = "ns:" + i.ns_id + i.ns_path, n.push(t)
            }
            return this.filesRoutes().rpc("restore_path_batch_sync", {
                entries: n
            }, this.selectAdminParams)
        }, e.prototype.permanentDeleteFile = function(e, t) {
            var n = "ns:" + e + t;
            return this.filesRoutes().rpc("permanently_delete", {
                path: n
            }, this.selectAdminParams)
        }, e.prototype.listRevisions = function(e, t) {
            var n = "ns:" + e + t;
            return this.filesRoutes().rpc("list_revisions", {
                path: n
            }, this.selectAdminParams)
        }, e.prototype.setTSDWritePolicy = function(e) {
            return this.teamRoutes().rpc("team_folder/set_tsd_writable_setting", {
                is_writable: e
            }, {})
        }, e.prototype.setInfinitePolicy = function(e) {
            return this.teamRoutes().rpc("set_infinite_policy", {
                setting: e
            }, {})
        }, e.prototype.setSmartSyncDesktopPolicy = function(e) {
            return this.teamRoutes().rpc("set_smart_sync_desktop_policy", {
                setting: e
            }, {})
        }, e.prototype.getTeamFolderNsPathForFile = function(e) {
            return this.isCMForCDM ? e.fq_path : "/" + e.fq_path.split("/").slice(2).join("/")
        }, e.prototype.bulkFileMove = function(e, t, n, r, o) {
            void 0 === o && (o = null);
            for (var i, a, l = [], c = 0, u = n; c < u.length; c++) {
                var d = u[c];
                a = this.getTeamFolderNsPathForFile(d), i = s.filename(d.fq_path), l.push({
                    from_path: "ns:" + e + a,
                    to_path: "ns:" + t + r + "/" + i
                })
            }
            return this.filesRoutes().rpc("move_batch_sync", {
                entries: l,
                autorename: !0,
                fsw_request: o
            }, this.selectAdminParams)
        }, e.prototype.bulkFileCopy = function(e, t, n, r, o) {
            void 0 === o && (o = null);
            for (var i, a, l = [], c = 0, u = n; c < u.length; c++) {
                var d = u[c];
                a = this.getTeamFolderNsPathForFile(d), i = s.filename(d.fq_path), l.push({
                    from_path: "ns:" + e + a,
                    to_path: "ns:" + t + r + "/" + i
                })
            }
            return this.filesRoutes().rpc("copy_batch_sync", {
                entries: l,
                autorename: !0,
                allow_shared_folder: !0,
                fsw_request: o
            }, this.selectAdminParams)
        }, e.prototype.setMemberSpaceLimits = function(e) {
            return this.teamRoutes().rpc("member_space_limits/set_default_limit", {
                limit_level: e
            }, {})
        }, e.prototype.setMslCapsType = function(e) {
            return this.teamRoutes().rpc("member_space_limits/set_caps_type", {
                caps_type: e
            }, {})
        }, e.prototype.setCustomQuota = function(e, t) {
            return this.teamRoutes().rpc("member_space_limits/set_custom_quota", {
                users_and_quotas: [{
                    user: this._create_user_selector_json(e),
                    quota_gb: t
                }]
            }, {})
        }, e.prototype.removeCustomQuota = function(e) {
            return this.teamRoutes().rpc("member_space_limits/remove_custom_quota", {
                users: [this._create_user_selector_json(e)]
            }, {})
        }, e.prototype._create_user_selector_json = function(e) {
            return {
                ".tag": "email",
                email: e
            }
        }, e.prototype.make_user_selector_list = function(e) {
            return void 0 === e && (e = []), e.map(this._create_user_selector_json)
        }, e.prototype.memberSpaceLimitsUpdateExclusionList = function(e) {
            var t = this.make_user_selector_list(e.users_to_add),
                n = this.make_user_selector_list(e.users_to_remove);
            return this.teamRoutes().rpc("member_space_limits/update_excluded_users", {
                users_to_add: t,
                users_to_remove: n
            }, {})
        }, e.prototype.getUserInfos = function(e) {
            return this.usersRoutes().rpc("get_account_batch", {
                account_ids: e
            }, this.selectAdminParams)
        }, e.prototype.emmConfigureSettings = function(e, t) {
            var n = {
                users_to_add: this.make_user_selector_list(t.users_to_add),
                users_to_remove: this.make_user_selector_list(t.users_to_remove)
            };
            return this.teamRoutes().rpc("emm/configure_settings", {
                emm_policy: {
                    ".tag": e
                },
                exclusion_list: n
            }, {})
        }, e.prototype.twofaConfigureSettings = function(e, t) {
            var n = {
                users_to_add: this.make_user_selector_list(t.users_to_add),
                users_to_remove: this.make_user_selector_list(t.users_to_remove)
            };
            return this.teamRoutes().rpc("two_step_verification/configure_settings", {
                tfa_policy: {
                    ".tag": e
                },
                exclusion_list: n
            }, {})
        }, e.prototype.twofaSendReminders = function() {
            return this.teamRoutes().rpc("two_step_verification/send_a_reminder", void 0, {})
        }, e.prototype.emmRefreshToken = function() {
            return this.teamRoutes().rpc("emm/refresh_token", void 0, {})
        }, e.prototype.emmGenerateUsageReport = function() {
            return this.teamRoutes().rpc("emm/generate_report", {
                report_type: {
                    ".tag": "mobile_app_usage"
                }
            }, {})
        }, e.prototype.teamContentGetMetadata = function(e) {
            return this.teamRoutes().rpc("team_content/get_metadata", e, {})
        }, e.prototype.createLegalHoldPolicy = function(e) {
            return this.teamRoutes().rpc("legal_holds/create", e, {})
        }, e.prototype.updateLegalHoldPolicy = function(e) {
            return this.teamRoutes().rpc("legal_holds/update", e, {})
        }, e.prototype.createLegalHoldPolicyReport = function(e) {
            return this.teamRoutes().rpc("legal_holds/create_report", e, {})
        }, e.prototype.exportLegalHoldPolicy = function(e) {
            return this.teamRoutes().rpc("legal_holds/export", e, {})
        }, e.prototype.reportLegalHoldPolicy = function(e) {
            return this.teamRoutes().rpc("legal_holds/create_report", e, {})
        }, e.prototype.releaseLegalHoldPolicy = function(e) {
            return this.teamRoutes().rpc("legal_holds/release", e, {})
        }, e.prototype.getLegalHoldPolicy = function(e) {
            return this.teamRoutes().rpc("legal_holds/get", e, {})
        }, e.prototype.listLegalHoldPolicies = function() {
            return this.teamRoutes().rpc("legal_holds/list", void 0, {})
        }, e.prototype.getLegalHoldInfoz = function(e) {
            return this.teamRoutes().rpc("legal_holds/infoz", e, {})
        }, e.prototype.validateMemberImportCsv = function(e) {
            return this.teamRoutes().rpc("members/validate_import_csv", {
                csv_file_content: e
            }, {})
        }, e.prototype.checkImportMembersCsvValidationJobStatus = function(e) {
            return this.teamRoutes().rpc("members/validate_import_csv/job_status/check", {
                async_job_id: e
            }, {})
        }, e.prototype.checkImportMembersJobStatus = function(e) {
            return this.teamRoutes().rpc("members/import_from_csv/job_status/check", {
                async_job_id: e
            }, {})
        }, e.prototype.importMembersFromCsv = function(e) {
            return this.teamRoutes().rpc("members/import_from_csv", {
                csv_file_content: e
            }, {})
        }, e
    })();
    t.AdminConsoleApiClient = c, t.default = c
}), define("modules/clean/tokenizer", ["require", "exports", "tslib", "external/classnames", "external/create-react-class", "react", "external/react-dom", "external/react-dom-factories", "external/prop-types", "external/lodash", "jquery", "modules/clean/keycode", "modules/clean/typeahead"], function(e, t, n, r, o, i, s, a, l, c, u, d, p) {
    "use strict";

    function _(e, t, n) {
        return void 0 !== e && null !== e && "function" == typeof e[t] ? n(e, t) : void 0
    }

    function h(e, t) {
        return void 0 !== e && null !== e ? t(e) : void 0
    }

    function m(e, t, n) {
        for (var r = [], o = e < t, i = n ? o ? t + 1 : t - 1 : t, s = e; o ? s < i : s > i; o ? s++ : s--) r.push(s);
        return r
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), r = n.__importDefault(r), o = n.__importDefault(o), i = n.__importDefault(i), s = n.__importStar(s), a = n.__importStar(a), l = n.__importStar(l), c = n.__importStar(c), u = n.__importDefault(u);
    var f = (function(e) {
        function t() {
            var t = null !== e && e.apply(this, arguments) || this;
            return t._makeCloseButton = function() {
                return t.props.onRemove ? a.span({
                    className: "tokenizer-token-close",
                    onClick: function() {
                        return t.props.onRemove(), !1
                    },
                    dangerouslySetInnerHTML: {
                        __html: "&nbsp;"
                    }
                }) : ""
            }, t
        }
        return n.__extends(t, e), t.prototype.render = function() {
            var e = {
                "tokenizer-token": !0
            };
            return e[this.props.className] = !0, a.a(u.default.extend({
                tabIndex: -1
            }, this.props, {
                className: r.default(e)
            }), String(this.props.data), this._makeCloseButton())
        }, t.displayName = "Token", t.propTypes = {
            className: l.string,
            data: l.any,
            onRemove: l.func
        }, t
    })(i.default.Component);
    t.Token = f;
    var y = o.default({
        displayName: "Tokenizer",
        propTypes: {
            customClass: l.string,
            dataSource: l.object.isRequired,
            initialInputText: l.string,
            logSearchBegin: l.func,
            logSearchComplete: l.func,
            logTokenChangeEvent: l.func,
            onContentsChange: l.func,
            onTokensAdd: l.func,
            onTokenRemove: l.func,
            placeholderText: l.string,
            populatedTokenData: l.array,
            renderToken: l.func.isRequired,
            renderTokenHover: l.func,
            renderInput: l.func.isRequired,
            renderSelector: l.func.isRequired,
            stringTokenizer: l.func.isRequired,
            tokenSpacing: l.number,
            focusOnMount: l.bool,
            tabIndex: l.number,
            disableAdditionalInput: l.bool,
            disabled: l.bool,
            resetTokenData: l.bool
        },
        getDefaultProps: function() {
            return {
                initialInputText: "",
                renderInput: function() {
                    return a.input()
                },
                renderSelector: function() {
                    return i.default.createElement(p.TypeaheadSelector, null)
                },
                renderToken: function(e) {
                    return i.default.createElement(f, {
                        data: e
                    })
                },
                stringTokenizer: function(e, t) {
                    var n = e.split(",");
                    return {
                        tokens: n,
                        value: t ? "" : n.pop()
                    }
                },
                tokenSpacing: 3,
                focusOnMount: !1,
                logSearchBegin: null,
                logSearchComplete: null,
                disableAdditionalInput: !1,
                disabled: !1,
                resetTokenData: !1
            }
        },
        getInitialState: function() {
            return this.tokenData = [], this.queryResults = null, {
                queryResults: this.queryResults,
                tokenData: this.tokenData,
                selectedTokenIndex: null,
                inputWidth: 150,
                numLines: 1
            }
        },
        componentDidMount: function() {
            if (setTimeout(this._resizeTokenizerInput, 0), s.findDOMNode(this.refs.input).value = this.props.initialInputText, u.default(s.findDOMNode(this.refs.tokenizer_input)).on("keydown", this._proxyKeys), document.addEventListener("click", this._handleDocumentClick, !1), this.props.focusOnMount && s.findDOMNode(this.refs.input).focus(), "function" == typeof this.props.dataSource.registerForUpdates && this.props.dataSource.registerForUpdates(this._dataUpdatedCallback), this.props.populatedTokenData && this.props.populatedTokenData.length) return this._addTokens(this.props.populatedTokenData, !1, null)
        },
        componentWillUnmount: function() {
            return u.default(s.findDOMNode(this.refs.tokenizer_input)).off("keydown", this._proxyKeys), document.removeEventListener("click", this._handleDocumentClick, !1)
        },
        componentDidUpdate: function(e, t) {
            var n = this.props,
                r = n.populatedTokenData;
            return n.resetTokenData && !e.resetTokenData && 0 !== this.tokenData.length && this.removeTokens(this.tokenData), (null != r ? r.length : void 0) !== (null != e.populatedTokenData ? e.populatedTokenData.length : void 0) && (r.length > e.populatedTokenData.length ? this._addTokens(r, !1, null) : r.length < e.populatedTokenData.length && (this.removeTokens(this.tokenData), this._addTokens(r))), this._resizeTokenizerInput()
        },
        render: function() {
            var e = {
                "react-tokenizer": !0
            };
            null != this.props.customClass && (e[this.props.customClass] = null != this.props.customClass);
            var t = {
                    padding: this.props.tokenSpacing,
                    paddingRight: 0,
                    maxHeight: this.props.tokenSpacing + 3 * (this.props.tokenSpacing + 29) + 14 + 2
                },
                n = r.default({
                    "tokenizer-input": !0,
                    "tokenizer-input-disabled": this.props.disabled,
                    "tokenizer-input-additionalInputDisabled": this.props.disableAdditionalInput
                });
            return this.state.numLines > 3 && (t.overflowY = "auto", t.overflowX = "visible"), a.div({
                onClick: this._handleMyClick,
                className: r.default(e)
            }, a.div({
                className: n,
                ref: "tokenizer_input",
                style: t
            }, a.div({
                className: "token-container",
                style: {
                    marginLeft: -this.props.tokenSpacing,
                    marginBottom: -this.props.tokenSpacing
                }
            }, this._renderTokens(), this._renderInput())), this._renderSelector())
        },
        serializeInputData: function() {
            return {
                tokens: this.tokenData,
                value: s.findDOMNode(this.refs.input).value
            }
        },
        tokenizeAll: function() {
            var e = s.findDOMNode(this.refs.input),
                t = this.props.stringTokenizer(e.value, !0).tokens;
            return t.length > 0 && this._addTokens(t, !1), e.value = "", this.refs.selector.close()
        },
        addExternalTokens: function(e) {
            this._addTokens(e, !1, null), this.refs.selector.close()
        },
        _getCurrentValue: function() {
            var e = s.findDOMNode(this.refs.input);
            return this.props.stringTokenizer(e.value).value
        },
        queryDataSource: function(e) {
            var t = this,
                n = function(n) {
                    var r;
                    e || (n = null);
                    var o = function(e) {
                            return ("function" == typeof e.getKey ? e.getKey() : void 0) || String(e)
                        },
                        i = c.map(t.tokenData, o);
                    return n = null != n ? n.filter(function(e) {
                        return r = o(e), !Array.from(i).includes(r)
                    }) : null
                },
                r = function(r) {
                    return r = n(r), t.queryResults = r, t.setState({
                        queryResults: t.queryResults
                    }), "function" == typeof t.props.logSearchComplete ? t.props.logSearchComplete(e, (null != r ? r.length : void 0) || 0, !0) : void 0
                },
                o = function(r) {
                    return e === t._getCurrentValue() && (r = n(r), r && r.length && (t.queryResults = t.queryResults ? t.queryResults.concat(r) : r, t.setState({
                        queryResults: t.queryResults
                    }))), "function" == typeof t.props.logSearchComplete ? t.props.logSearchComplete(e, (null != r ? r.length : void 0) || 0, !1) : void 0
                };
            return this.props.dataSource.query(e, r, o)
        },
        _dataUpdatedCallback: function() {
            if (this.isMounted()) {
                var e = Boolean(this.state.queryResults);
                return _(this.refs.selector, "reset", function(e) {
                    return e.reset()
                }), e && s.findDOMNode(this.refs.input).focus(), this.queryDataSource(s.findDOMNode(this.refs.input).value)
            }
        },
        _addTokens: function(e, t, n) {
            var r = this;
            void 0 === t && (t = !1), void 0 === n && (n = null);
            for (var o = function(e) {
                    return ("function" == typeof e.getKey ? e.getKey() : void 0) || String(e)
                }, i = c.map(this.tokenData, o), a = [], l = 0, u = Array.from(e); l < u.length; l++) {
                var d = u[l],
                    p = o(d);
                Array.from(i).includes(p) || (a.push(d), i.push(p))
            }
            this.tokenData = this.tokenData.concat(a), this.setState({
                tokenData: this.tokenData
            }), "function" == typeof this.props.onTokensAdd && this.props.onTokensAdd(a, this), "function" == typeof this.props.onContentsChange && this.props.onContentsChange(this.tokenData, h(s.findDOMNode(this.refs.input), function(e) {
                return e.value
            }));
            var _ = t ? {
                search_expr: n,
                selected_pos: (null != this.refs.selector ? this.refs.selector.state.selectionIndex : void 0) || 0,
                num_query_results: null != this.state.queryResults ? this.state.queryResults.length : void 0,
                did_select_suggestion: !0
            } : {
                did_select_suggestion: !1
            };
            return (function() {
                for (var e = [], t = 0, n = Array.from(a); t < n.length; t++) {
                    var o = n[t];
                    e.push("function" == typeof r.props.logTokenChangeEvent ? r.props.logTokenChangeEvent(o, !1, _) : void 0)
                }
                return e
            })()
        },
        _addToken: function(e, t, n) {
            return void 0 === t && (t = !1), void 0 === n && (n = null), this._addTokens([e], t, n)
        },
        removeTokens: function(e) {
            for (var t = this.state.selectedTokenIndex, n = [], r = 0, o = Array.from(e); r < o.length; r++) {
                var i = o[r],
                    a = this.tokenData.indexOf(i);
                a !== -1 && (t === a ? t = null : t > a && (t -= 1), this.tokenData.splice(a, 1), n.push(i))
            }
            var l = s.findDOMNode(this.refs.input);
            l.focus(), this._setSelectedToken(t), this.queryResults = null, this.setState({
                tokenData: this.tokenData,
                queryResults: this.queryResults
            });
            for (var c = 0, u = Array.from(n); c < u.length; c++) {
                var i = u[c];
                "function" == typeof this.props.onTokenRemove && this.props.onTokenRemove(i)
            }
            for (var d = 0, p = Array.from(n); d < p.length; d++) {
                var i = p[d];
                "function" == typeof this.props.logTokenChangeEvent && this.props.logTokenChangeEvent(i, !0)
            }
            return "function" == typeof this.props.onContentsChange ? this.props.onContentsChange(this.tokenData, l.value) : void 0
        },
        removeToken: function(e) {
            return this.removeTokens([e])
        },
        replaceTokens: function(e) {
            var t = function(e) {
                    return ("function" == typeof e.getKey ? e.getKey() : void 0) || String(e)
                },
                n = function() {
                    for (var e = [], n = 0; n < arguments.length; n++) e[n] = arguments[n];
                    var r = Array.from(e[0]),
                        o = r[0],
                        i = r[1];
                    return t(o) === t(i)
                };
            if (e.length !== this.tokenData.length || !c.every(c.zip(this.tokenData, e), n)) return this.tokenData = e, this.setState({
                tokenData: e
            }), "function" == typeof this.props.onContentsChange ? this.props.onContentsChange(this.tokenData, h(s.findDOMNode(this.refs.input), function(e) {
                return e.value
            })) : void 0
        },
        _renderTokens: function() {
            for (var e = [], t = function(e) {
                    return ("function" == typeof e.getKey ? e.getKey() : void 0) || String(e)
                }, n = 0; n < this.state.tokenData.length; n++) {
                var o = this.state.tokenData[n],
                    s = this.props.renderToken(o),
                    a = this.state.selectedTokenIndex === n,
                    l = "function" == typeof this.props.renderTokenHover ? this.props.renderTokenHover(o) : void 0,
                    c = [{
                        selected: a,
                        "c-title-bubble": null != l,
                        "c-title-bubble--s": null != l
                    }];
                e.push(i.default.cloneElement(s, {
                    ref: "token" + n,
                    key: "token" + t(o),
                    style: {
                        margin: "0 0 " + this.props.tokenSpacing + "px " + this.props.tokenSpacing + "px"
                    },
                    className: r.default(c, s.props.className),
                    "data-title": l,
                    onClick: this._setSelectedToken.bind(this, n),
                    onRemove: this.removeToken.bind(this, o),
                    tokenSpacing: this.props.tokenSpacing
                }))
            }
            return e
        },
        _renderSelector: function() {
            return i.default.cloneElement(this.props.renderSelector(), {
                ref: "selector",
                queryOptions: this.state.queryResults,
                onSelect: this._onSelect,
                onClose: this._clearResults
            })
        },
        _renderInput: function() {
            var e = this.state.tokenData.length ? "" : this.props.placeholderText;
            return i.default.cloneElement(this.props.renderInput(), {
                ref: "input",
                style: {
                    width: this.state.inputWidth,
                    marginLeft: this.props.tokenSpacing,
                    marginBottom: this.props.tokenSpacing
                },
                onChange: this._textUpdated,
                placeholder: e,
                tabIndex: this.props.tabIndex,
                onClick: this._setSelectedToken.bind(this, null),
                disabled: this.props.disabled || this.props.disableAdditionalInput
            })
        },
        _getTokenizerInput: function() {
            return this.refs.tokenizer_input
        },
        _getTokenComponents: function() {
            var e = this;
            return m(0, this.state.tokenData.length, !1).map(function(t) {
                return e.refs["token" + t]
            }).filter(function(e) {
                return e
            })
        },
        _setSelectedToken: function(e) {
            return null != e ? (s.findDOMNode(this.refs["token" + e]).focus(), this.refs.selector.close()) : s.findDOMNode(this.refs.input).focus(), this.setState({
                selectedTokenIndex: e
            })
        },
        _resizeTokenizerInput: function() {
            var e = function(e) {
                    return h(s.findDOMNode(e), function(e) {
                        return e.clientWidth
                    })
                },
                t = this._getTokenizerInput(),
                n = e(t);
            if (null != n) {
                for (var r = this.props.tokenSpacing + 2, o = this.props.tokenSpacing, i = 0, a = this._getTokenComponents(), l = 1, c = 0, u = Array.from(a); c < u.length; c++) {
                    var d = u[c],
                        p = e(d) + r;
                    i + p + o > n && (l += 1, i = 0), i += p
                }
                var _ = n - i - o - 2;
                return _ < 80 && (l += 1, _ = n - o), _ !== this.state.inputWidth && this.setState({
                    inputWidth: _
                }), l !== this.state.numLines ? this.setState({
                    numLines: l
                }) : void 0
            }
        },
        _onSelect: function(e) {
            var t = s.findDOMNode(this.refs.input);
            return t.focus(), this._addToken(e, !0, t.value), t.value = "", this.queryResults = null, this.setState({
                queryResults: this.queryResults
            })
        },
        _handleMyClick: function(e) {
            return "function" == typeof e.nativeEvent.stopImmediatePropagation ? e.nativeEvent.stopImmediatePropagation() : void 0
        },
        _handleDocumentClick: function(e) {
            return this.refs.selector.close()
        },
        _proxyKeys: function(e) {
            if (e.keyCode === d.KeyCode.BACKSPACE && "" === this._getCurrentValue() && e.preventDefault(), this._shouldListenForTokenNavigation()) {
                var t = this.state.selectedTokenIndex;
                switch (e.keyCode) {
                    case d.KeyCode.BACKSPACE:
                        return void(null === t ? (this._setSelectedToken(this.state.tokenData.length - 1), s.findDOMNode(this.refs.input).focus()) : this.removeToken(this.state.tokenData[t]));
                    case d.KeyCode.LEFT:
                        return void(null === t ? this._setSelectedToken(this.state.tokenData.length - 1) : t > 0 && this._setSelectedToken(t - 1));
                    case d.KeyCode.RIGHT:
                        if (null !== t) return void(t >= this.state.tokenData.length - 1 ? this._setSelectedToken(null) : this._setSelectedToken(t + 1));
                        break;
                    case d.KeyCode.DELETE:
                        if (null !== t) return void this.removeToken(this.state.tokenData[t])
                }
            }
            if (this.refs.selector.onKeyDown(e), !e.isDefaultPrevented()) return e.keyCode === d.KeyCode.TAB && "" !== s.findDOMNode(this.refs.input).value ? (this.tokenizeAll(), e.preventDefault()) : void 0
        },
        _shouldListenForTokenNavigation: function() {
            if (!this.state.tokenData.length) return !1;
            var e = s.findDOMNode(this.refs.input);
            return 0 === e.selectionStart && 0 === e.selectionEnd
        },
        _textUpdated: function() {
            var e = s.findDOMNode(this.refs.input),
                t = e.value,
                n = this.props.stringTokenizer(t),
                r = n.tokens,
                o = n.value;
            return "function" == typeof this.props.logSearchBegin && this.props.logSearchBegin(o), o !== t && (e.value = o, o || this.refs.selector.close()), r.length > 0 ? this._addTokens(r, !1) : "function" == typeof this.props.onContentsChange && this.props.onContentsChange(this.tokenData, o), this.queryDataSource(o)
        },
        _clearResults: function() {
            return this.queryResults = null, this.setState({
                queryResults: this.queryResults
            })
        }
    });
    t.Tokenizer = y
}), define("modules/clean/typeahead", ["require", "exports", "tslib", "external/classnames", "external/create-react-class", "react", "external/react-dom-factories", "external/react-dom", "external/prop-types", "external/lodash", "modules/clean/fuzzy", "modules/clean/keycode"], function(e, t, n, r, o, i, s, a, l, c, u, d) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), r = n.__importDefault(r), o = n.__importDefault(o), i = n.__importDefault(i), s = n.__importStar(s), a = n.__importStar(a), l = n.__importStar(l), c = n.__importStar(c), u = n.__importDefault(u);
    var p = (function() {
        function e(e) {
            var t = (void 0 === e ? {} : e).local;
            this.local = t
        }
        return e.prototype.filterAndSort = function(e) {
            return u.default.filter(e, this.local)
        }, e.prototype.query = function(e, t) {
            return t(c.map(this.filterAndSort(e), function(e) {
                return e.original
            }))
        }, e
    })();
    t.DataSource = p;
    var _ = {
        getInitialState: function() {
            return {
                selectionIndex: 0
            }
        },
        getOptions: function() {
            if (!this.props.queryOptions) return [];
            var e = this.props.maxVisible || this.props.queryOptions.length;
            return this.props.queryOptions.slice(0, e)
        },
        renderOptions: function() {
            for (var e = [], t = this.getOptions(), n = function(e) {
                    return ("function" == typeof e.getKey ? e.getKey() : void 0) || String(e)
                }, o = 0; o < t.length; o++) {
                var s = t[o],
                    a = {
                        selected: this.state.selectionIndex === o,
                        "typeahead-option": !0,
                        "u-pad-xs": !0
                    },
                    l = this.renderOption(s);
                e.push(i.default.cloneElement(l, {
                    className: r.default(a, l.props.className),
                    key: "option" + n(s),
                    onMouseEnter: this._hover.bind(this, o),
                    onClick: this.onSelect.bind(this, s)
                }))
            }
            return e
        },
        onSelect: function(e) {
            return this.props.onSelect(e), this.reset()
        },
        renderOption: function(e) {
            return this.props.renderQueryOption(e)
        },
        onKeyDown: function(e) {
            switch (e.keyCode) {
                case d.KeyCode.UP:
                    return this._navigate(-1), e.preventDefault();
                case d.KeyCode.DOWN:
                    return this._navigate(1), e.preventDefault();
                case d.KeyCode.ENTER:
                    return this._selectSelectionIndex(e);
                case d.KeyCode.ESC:
                    if (Boolean(this.props.queryOptions)) return this.close(), e.preventDefault();
                    break;
                case d.KeyCode.TAB:
                    return this._selectSelectionIndex(e);
                default:
                    return this.reset()
            }
        },
        _selectSelectionIndex: function(e) {
            var t = this.getOptions();
            if (t.length) {
                var n = this.state.selectionIndex;
                if (n !== -1) return this.onSelect(t[n]), e.preventDefault()
            }
        },
        reset: function() {
            return this._changeSelectionIndex(0)
        },
        close: function() {
            return "function" == typeof this.props.onClose && this.props.onClose(), this.reset()
        },
        _hover: function(e) {
            return this._changeSelectionIndex(e)
        },
        _navigate: function(e) {
            var t = this.getOptions().length;
            if (t) {
                var n = this.state.selectionIndex + e,
                    r = t + 1;
                return n < -1 ? n += r : n >= t && (n -= r), this._changeSelectionIndex(n)
            }
        },
        _changeSelectionIndex: function(e) {
            return e !== this.state.selectionIndex && "function" == typeof this.onSelectionIndexChange && this.onSelectionIndexChange(e), this.setState({
                selectionIndex: e
            })
        }
    };
    t.TypeaheadSelectorMixin = _;
    var h = (function(e) {
        function t() {
            var t = null !== e && e.apply(this, arguments) || this;
            return t.state = {
                queryResults: null,
                value: t.props.value,
                focus: !1
            }, t._onMouseOver = function() {
                return t.setState({
                    focus: !0
                })
            }, t._onMouseLeave = function() {
                return t.setState({
                    focus: !1
                })
            }, t._onBlur = function() {
                if (t.props.onBlur(), !t.state.focus) return t._clearResults()
            }, t._onFocus = function() {
                return t._queryDataSource(t.state.value), t.refs.selector.reset()
            }, t._renderInput = function() {
                var e = t.props.renderInput();
                return i.default.cloneElement(e, {
                    ref: "input",
                    onChange: function(n) {
                        return null != e.props.onChange && e.props.onChange(n), t._inputChanged(n)
                    },
                    onKeyDown: function(n) {
                        return null != e.props.onKeyDown && e.props.onKeyDown(n), t._proxyKeys(n)
                    },
                    onBlur: function(n) {
                        return null != e.props.onBlur && e.props.onBlur(n), t._onBlur(n)
                    },
                    onFocus: function(n) {
                        return null != e.props.onFocus && e.props.onFocus(n), t._onFocus(n)
                    },
                    placeholder: t.props.placeholder,
                    value: t.state.value,
                    name: t.props.name,
                    autoComplete: "off",
                    disabled: t.props.disabled
                })
            }, t._renderSelector = function() {
                return i.default.cloneElement(t.props.renderSelector(), {
                    ref: "selector",
                    queryOptions: t.state.queryResults,
                    onSelect: t._autocomplete,
                    onClose: t._clearResults,
                    maxVisible: t.props.maxVisible
                })
            }, t._inputChanged = function(e) {
                var n = e.target.value;
                return t.setState({
                    value: e.target.value
                }), t.props.onChange(n), t._queryDataSource(n), t.refs.selector.reset()
            }, t._getCurrentValue = function() {
                return a.findDOMNode(t.refs.input).value
            }, t._queryDataSource = function(e) {
                var n = function(e) {
                        return t.queryResults = e, t.setState({
                            queryResults: t.queryResults
                        })
                    },
                    r = function(r) {
                        if (e === t._getCurrentValue() && r && r.length) {
                            return n(t.queryResults ? t.queryResults.concat(r) : r)
                        }
                    };
                return t.props.dataSource.query(e, n, r)
            }, t._proxyKeys = function(e) {
                return t.refs.selector.onKeyDown(e)
            }, t._autocomplete = function(e) {
                return a.findDOMNode(t.refs.input).focus(), e = t.props.renderCompletionText(e), t.setState({
                    value: e
                }), t.props.onSelect(e), t._clearResults()
            }, t._clearResults = function() {
                return t.queryResults = null, t.setState({
                    queryResults: t.queryResults
                })
            }, t
        }
        return n.__extends(t, e), t.prototype.render = function() {
            var e = {};
            return e[this.props.customClass] = null != this.props.customClass, s.div({
                className: r.default(e),
                onMouseOver: this._onMouseOver,
                onMouseLeave: this._onMouseLeave
            }, this._renderInput(), this._renderSelector())
        }, t.prototype.componentWillReceiveProps = function(e) {
            return this.setState({
                value: e.value
            })
        }, t.displayName = "Autocomplete", t.propTypes = {
            customClass: l.string,
            maxVisible: l.number,
            dataSource: l.object.isRequired,
            onBlur: l.func,
            onSelect: l.func,
            onChange: l.func,
            placeholder: l.string,
            renderCompletionText: l.func.isRequired,
            renderInput: l.func.isRequired,
            renderSelector: l.func.isRequired,
            value: l.string,
            name: l.string,
            disabled: l.bool
        }, t.defaultProps = {
            value: "",
            maxVisible: 7,
            onBlur: function() {},
            onSelect: function(e) {},
            onChange: function(e) {},
            renderCompletionText: function(e) {
                return String(e)
            },
            renderInput: function() {
                return s.input()
            },
            renderSelector: function() {
                return i.default.createElement(m, null)
            },
            disabled: !1
        }, t
    })(i.default.Component);
    t.Autocomplete = h;
    var m = o.default({
        displayName: "TypeaheadSelector",
        mixins: [_],
        propTypes: {
            customClass: l.string,
            maxVisible: l.number,
            onClose: l.func.isRequired,
            onSelect: l.func.isRequired,
            queryOptions: l.array,
            renderQueryOption: l.func.isRequired
        },
        getDefaultProps: function() {
            return {
                maxVisible: 7,
                onClose: function() {},
                onSelect: function(e) {},
                renderQueryOption: function(e) {
                    return s.li({}, String(e))
                }
            }
        },
        render: function() {
            if (!this.getOptions().length) return s.div({});
            var e = {
                "typeahead-selector": !0
            };
            return e[this.props.customClass] = null != this.props.customClass, s.ul({
                className: r.default(e)
            }, this.renderOptions())
        }
    });
    t.TypeaheadSelector = m
});
//# sourceMappingURL=pkg-sharing-core.min.js-vflID11PK.map