define("modules/clean/account/change_email_modals", ["require", "exports", "tslib", "external/create-react-class", "react", "external/react-dom", "external/react-dom-factories", "external/prop-types", "jquery", "modules/clean/account/email_verify_reasons", "modules/clean/account/set_password_modal", "modules/clean/form", "modules/clean/react/input", "modules/clean/react/modal", "modules/clean/viewer", "modules/core/i18n", "modules/core/notify"], function(e, t, r, i, o, s, n, a, l, u, m, c, d, p, h, f, _) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), i = r.__importDefault(i), o = r.__importDefault(o), s = r.__importStar(s), n = r.__importStar(n), a = r.__importStar(a), l = r.__importDefault(l), u = r.__importStar(u), c = r.__importStar(c), d = r.__importStar(d);
    var g = o.default.createElement,
        y = o.default.createFactory(d.text),
        v = o.default.createFactory(d.password),
        b = [u.ADD_COMMENT, u.SUBSCRIBE_TO_COMMENTS, u.SHARE_FILEVIEWER],
        w = (function(e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t.getSSOWarning = function() {
                    var e = h.Viewer.get_viewer().is_paired,
                        r = e && "work" === t.props.user.role,
                        i = t.props.user.sso_required;
                    return r && i ? n.div({
                        className: "db-modal-message"
                    }, f._("Your %(team)s Dropbox uses single sign-on. If you change your email address you may not be able to sign in.").format({
                        team: h.Viewer.get_viewer().team_name
                    })) : null
                }, t.getInboxWarning = function() {
                    var e = h.Viewer.get_viewer().is_paired;
                    return 0 === t.props.inboxCount ? null : e && "personal" === t.props.user.role ? n.div({
                        className: "db-modal-message"
                    }, f.ungettext("Your %(num)d existing shared folder invitation in your personal Dropbox will be removed if you change your email address.", "Your %(num)d existing shared folder invitations in your personal Dropbox will be removed if you change your email address.", t.props.inboxCount).format({
                        num: t.props.inboxCount
                    })) : e && "work" === t.props.user.role ? n.div({
                        className: "db-modal-message"
                    }, f.ungettext("Your %(num)d existing shared folder invitation in your %(team)s Dropbox will be removed if you change your email address.", "Your %(num)d existing shared folder invitations in your %(team)s Dropbox will be removed if you change your email address.", t.props.inboxCount).format({
                        num: t.props.inboxCount,
                        team: h.Viewer.get_viewer().team_name
                    })) : n.div({
                        className: "db-modal-message"
                    }, f.ungettext("Your %(num)d existing shared folder invitation will be removed if you change your email address.", "Your %(num)d existing shared folder invitations will be removed if you change your email address.", t.props.inboxCount).format({
                        num: t.props.inboxCount
                    }))
                }, t.showChange = function(e) {
                    return e.preventDefault(), t.refs.modal.close(), "function" == typeof t.props.onContinue ? t.props.onContinue() : void 0
                }, t
            }
            return r.__extends(t, e), t.prototype.render = function() {
                return g(p.Modal, {
                    title: f._("Warning!"),
                    acceptButtonText: f._("Continue anyway"),
                    dismissButtonText: f._("Cancel"),
                    onAccept: this.showChange,
                    ref: "modal",
                    style: "default-maestro"
                }, this.getSSOWarning(), this.getInboxWarning())
            }, t.displayName = "ChangeEmailWarningModal", t.propTypes = {
                user: a.object,
                inboxCount: a.number,
                onContinue: a.func
            }, t
        })(o.default.Component);
    t.ChangeEmailWarningModal = w;
    var E = i.default({
        displayName: "ChangeEmailModal",
        propTypes: {
            user: a.object,
            onChange: a.func,
            onVerificationCheck: a.func,
            fromCheckup: a.bool,
            reason: a.string
        },
        getInitialState: function() {
            return {
                submitting: !1,
                errors: {},
                userConfirmedSetPassword: !1
            }
        },
        render: function() {
            var e = this;
            return this.props.user.has_never_set_password && !this.state.userConfirmedSetPassword ? g(m.SetPasswordModal, {
                email: this.props.user.email,
                reason: f._("For your security, Dropbox requires you to set a password to change your email."),
                onUserConfirm: function() {
                    return e.setState({
                        userConfirmedSetPassword: !0
                    })
                },
                closeOnConfirm: !1
            }) : Array.from(b).includes(this.props.reason) ? g(p.Modal, {
                title: f._("Update ‘%(email)s’").format({
                    email: this.props.user.email
                }),
                className: "change-email-modal--maestro",
                acceptButtonText: f._("Update email"),
                dismissButtonText: f._("Cancel"),
                onAccept: this.handleSubmit,
                submitting: this.state.submitting,
                ref: "modal",
                style: "default-maestro"
            }, n.form({
                action: "/account/change_email",
                className: "change-email-form",
                onSubmit: this.handleSubmit,
                onKeyDown: this.handleKey,
                ref: "form"
            }, n.div({
                className: "change-email-message"
            }, this.getPrompt()), n.div({
                className: "change-email-inputs"
            }, n.div({
                className: "change-email-input"
            }, n.div({
                className: "change-email-input-label"
            }, f._("New email", {
                comment: "'email' refers to the email address"
            })), y({
                name: "email",
                label: f._("you@mail.com"),
                error: this.state.errors.email,
                autoComplete: "off"
            })), n.div({
                className: "change-email-input"
            }, n.div({
                className: "change-email-input-label"
            }, f._("Confirm email", {
                comment: "'email' refers to the email address"
            })), y({
                name: "confirm_email",
                label: f._("you@mail.com"),
                error: this.state.errors.confirm_email,
                autoComplete: "off"
            })), n.div({
                className: "change-email-input"
            }, n.div({
                className: "change-email-input-label"
            }, f._("Dropbox password")), v({
                name: "password",
                label: f._("Minimum 5 characters"),
                error: this.state.errors.password,
                autoComplete: "off"
            })), n.input({
                type: "hidden",
                name: "_subject_uid",
                value: this.props.user.id
            }), n.input({
                type: "hidden",
                name: "from_checkup",
                value: !!this.props.fromCheckup
            })))) : g(p.Modal, {
                title: f._("Update ‘%(email)s’").format({
                    email: this.props.user.email
                }),
                className: "change-email-modal",
                acceptButtonText: f._("Update email"),
                dismissButtonText: f._("Cancel"),
                onAccept: this.handleSubmit,
                submitting: this.state.submitting,
                ref: "modal"
            }, n.form({
                action: "/account/change_email",
                className: "change-email-form",
                onSubmit: this.handleSubmit,
                onKeyDown: this.handleKey,
                ref: "form"
            }, n.div({}, this.getPrompt()), n.div({
                className: "change-email-inputs"
            }, y({
                name: "email",
                label: f._("New email", {
                    comment: "'email' refers to the email address"
                }),
                error: this.state.errors.email,
                autoComplete: "off"
            }), y({
                name: "confirm_email",
                label: f._("Confirm email", {
                    comment: "'email' refers to the email address"
                }),
                error: this.state.errors.confirm_email,
                autoComplete: "off"
            }), v({
                name: "password",
                label: f._("Dropbox password"),
                error: this.state.errors.password,
                autoComplete: "off"
            }), n.input({
                type: "hidden",
                name: "_subject_uid",
                value: this.props.user.id
            }), n.input({
                type: "hidden",
                name: "from_checkup",
                value: !!this.props.fromCheckup
            }))))
        },
        handleKey: function(e) {
            if (13 === e.keyCode && "INPUT" === (null != e.target ? e.target.tagName : void 0)) return this.handleSubmit(e)
        },
        handleSubmit: function(e) {
            if (e.preventDefault(), !this.state.submitting) return this.submit()
        },
        submit: function(e) {
            this.setState({
                submitting: !0,
                errors: {}
            });
            var t = l.default(s.findDOMNode(this.refs.form));
            return c.submit(t, this._success, this._error, this._complete)
        },
        _success: function(e) {
            var t = this.refs.modal,
                r = this.refs.form,
                i = l.default(s.findDOMNode(r)).find('input[name="email"]').val(),
                o = "NEEDS_VERIFICATION" === e;
            return t.close(), o ? "function" == typeof this.props.onVerificationCheck ? this.props.onVerificationCheck(i) : void 0 : "function" == typeof this.props.onChange ? this.props.onChange(i) : void 0
        },
        _error: function(e) {
            return "string" == typeof e ? _.Notify.error(e) : e ? this.setState({
                errors: e
            }) : _.Notify.error(f._("There was a problem completing this request."))
        },
        _complete: function() {
            if (this.isMounted()) return this.setState({
                submitting: !1
            })
        },
        getPrompt: function() {
            var e = h.Viewer.get_viewer().is_paired,
                t = this.props.user.email_verified,
                r = [];
            return e && "personal" === this.props.user.role ? (r.push(f._("Enter a new email address for your personal Dropbox.")), t && r.push(f._("You’ll need to verify your new email address in order to finish updating your personal email."))) : e && "work" === this.props.user.role ? (r.push(f._("Enter a new email address for your %(team)s Dropbox.").format({
                team: h.Viewer.get_viewer().team_name
            })), t && r.push(f._("You’ll need to verify your new email address in order to finish updating your %(team)s email.").format({
                team: h.Viewer.get_viewer().team_name
            }))) : t && r.push(f._("You’ll need to verify your new email address in order to finish updating your email.")), r.length ? f.render_sentences(r) : ""
        }
    });
    t.ChangeEmailModal = E
}), define("modules/clean/account/email", ["require", "exports", "tslib", "react", "jquery", "modules/clean/account/change_email_modals", "modules/clean/account/email_verify", "modules/clean/account/verify_email_modals", "modules/clean/react/modal", "modules/clean/viewer", "modules/core/browser", "modules/core/exception", "modules/core/i18n", "modules/core/notify", "modules/core/uri"], function(e, t, r, i, o, s, n, a, l, u, m, c, d, p, h) {
    "use strict";

    function f(e) {
        g.set_reason(e.reason), y.set_inbox_counts(e.inbox_counts)
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), i = r.__importDefault(i), o = r.__importDefault(o), n = r.__importDefault(n), m = r.__importStar(m), c = r.__importStar(c);
    var _ = i.default.createElement,
        g = (function() {
            function e(e) {
                this.role = e, this.role ? this.user = u.Viewer.get_viewer().get_user_by_role(this.role, !0) : this.user = u.Viewer.get_viewer().deprecated_first_user_in_the_cookie, this.email_to_verify = null != this.user ? this.user.email : void 0, this.verify_for_change = !1
            }
            return e.initClass = function() {
                this.prototype.polling = !1, this.prototype.show_resend = !1, this.shouldUseSimpleUI = !1
            }, e.getForRole = function(t) {
                return this.initalized || (this.legacy = new e(null), this.personal = new e("personal"), this.work = new e("work"), null != this.reason && this.propagate_reason(), this.initalized = !0), "personal" === t ? this.personal : "work" === t ? this.work : this.legacy
            }, e.get_for_user = function(e) {
                return this.getForRole(e.role)
            }, e.set_should_use_simple_ui = function(e) {
                return this.shouldUseSimpleUI = e
            }, e.reset = function() {
                return this.shouldUseSimpleUI = !1, this.initalized = !1
            }, e.set_reason = function(e) {
                if (this.reason = e, this.initalized) return this.propagate_reason()
            }, e.propagate_reason = function() {
                var e = this;
                return [this.legacy, this.personal, this.work].map(function(t) {
                    return t.reason = e.reason
                })
            }, e.prototype.set_email_to_verify = function(e) {
                return this.email_to_verify = e, this.verify_for_change = this.email_to_verify !== this.user.email
            }, e.prototype.send_email = function(e, t) {
                return n.default.send_verification_email(this.user, this.email_to_verify, e, t)
            }, e.prototype.send_email_and_show_resend_modal = function(e, t) {
                var r = this;
                return this.send_email(e, function() {
                    return r.email_sent(t, e, !0)
                })
            }, e.prototype.flash_email_sent_notification = function() {
                return p.Notify.success(d._("Verification email sent to %(email)s").format({
                    email: this.email_to_verify
                }))
            }, e.prototype.ensure_polling = function(e) {
                var t = this;
                return n.default.listen_for_verification(this.user, this.email_to_verify, function() {
                    return null != e ? (t.user.is_email_verified = !0, e()) : m.reload()
                })
            }, e.prototype.email_sent = function(e, t, r) {
                return this.show_resend = !0, this.show(null, t), r && this.flash_email_sent_notification(), this.ensure_polling(e)
            }, e.prototype.show = function(t, r) {
                return null != r && e.set_reason(r), this.show_resend ? this.show_resend_verify_modal(r) : this.show_verify_modal(t, r)
            }, e.prototype.show_verify_modal = function(t, r) {
                var i = this;
                return null == r && (r = this.verify_for_change ? "change_email" : e.reason), null == r && c.reportStack("Email Verification reason should not be null", {
                    severity: c.SEVERITY.NONCRITICAL,
                    tags: ["email_verify:null_reason"]
                }), l.Modal.showInstance(_(a.VerifyEmailModal, {
                    user: this.user,
                    reason: r,
                    email: this.email_to_verify,
                    onShowChange: function() {
                        return y.show(i.user, r)
                    },
                    onEmailSent: function() {
                        return e.get_for_user(i.user).email_sent(t, r, !0)
                    },
                    shouldUseSimpleUI: e.shouldUseSimpleUI
                }))
            }, e.prototype.show_resend_verify_modal = function(t) {
                var r = this;
                return null == t && (t = this.verify_for_change ? "change_email" : e.reason), null == t && c.reportStack("Email Verification reason should not be null", {
                    severity: c.SEVERITY.NONCRITICAL,
                    tags: ["email_verify:null_reason"]
                }), l.Modal.showInstance(_(a.ResendVerifyEmailModal, {
                    user: this.user,
                    email: this.email_to_verify,
                    reason: t,
                    onShowChange: function() {
                        return y.show(r.user, t)
                    },
                    onEmailSent: function() {
                        return e.get_for_user(r.user).email_sent(null, t, !0)
                    },
                    shouldUseSimpleUI: e.shouldUseSimpleUI
                }))
            }, e.prototype.verified_or_send_and_show = function(e, t) {
                var r = this;
                return this.user.is_email_verified ? ("function" == typeof t && t(), !0) : (this.send_email(e, function() {
                    return r.email_sent(function() {
                        return r.close(), "function" == typeof t ? t() : void 0
                    }, e)
                }), !1)
            }, e.prototype.verified_or_show = function(e) {
                return !(!this.user || !this.user.is_email_verified) || (this.show(null, e), !1)
            }, e.prototype.show_sent_modal = function() {
                return l.Modal.showInstance(_(a.VerifyEmailSentModal, {
                    email: this.email_to_verify,
                    shouldUseSimpleUI: e.shouldUseSimpleUI
                }))
            }, e.prototype.show_verified_modal = function() {
                return l.Modal.showInstance(_(a.EmailVerifiedModal, {
                    reason: e.REASON,
                    email: this.email_to_verify,
                    shouldUseSimpleUI: e.shouldUseSimpleUI
                }))
            }, e.prototype.show_verified_and_changed_modal = function() {
                return l.Modal.showInstance(_(a.ChangedEmailVerifiedModal, {
                    user: this.user,
                    email: this.email_to_verify
                }))
            }, e.prototype.close = function() {
                return l.Modal.close()
            }, e
        })();
    t.EmailVerification = g, g.initClass();
    var y = {
        inbox_counts: {},
        set_inbox_counts: function(e) {
            return o.default.extend(this.inbox_counts, e)
        },
        show: function(e, t) {
            var r = u.Viewer.get_viewer().get_user_by_id(e);
            return this._should_show_warning(r) ? this._show_warning_modal(r, t) : this._show_change_modal(r, t)
        },
        _should_show_warning: function(e) {
            var t = u.Viewer.get_viewer().is_paired,
                r = t && "work" === e.role,
                i = r && e.sso_required,
                o = this.inbox_counts[e.id] > 0;
            return i || o
        },
        _show_change_modal: function(e, t) {
            return l.Modal.showInstance(_(s.ChangeEmailModal, {
                user: e,
                reason: t,
                onChange: function(t) {
                    return y.trigger_change(e, t), "/account" !== h.URI.parse(m.get_href()).getPath() ? m.redirect("/home?send_verification_email=1") : t !== e.email ? m.reload() : void 0
                },
                onVerificationCheck: function(r) {
                    y.trigger_change(e, r, e.is_email_verified);
                    var i = g.get_for_user(e);
                    return i.set_email_to_verify(r), i.email_sent(null, t, !0)
                }
            }))
        },
        _show_warning_modal: function(e, t) {
            var r = this;
            return l.Modal.showInstance(_(s.ChangeEmailWarningModal, {
                user: e,
                inboxCount: this.inbox_counts[e.id],
                onContinue: function() {
                    return r._show_change_modal(e, t)
                }
            }))
        },
        listen_for_change: function(e, t) {
            var r = this._email_change_event_for_user(e);
            return o.default(document).on(r, t)
        },
        trigger_change: function(e, t, r) {
            var i = this._email_change_event_for_user(e);
            return o.default(document).trigger(i, [t, r])
        },
        _email_change_event_for_user: function(e) {
            return "db:email_changed:" + e.id
        }
    };
    t.ChangeEmail = y, t.initialize_module = f
}), define("modules/clean/account/email_verify", ["require", "exports", "tslib", "modules/clean/ajax"], function(e, t, r, i) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), i = r.__importStar(i);
    var o = {
        _POLLING: {},
        send_verification_email: function(e, t, r, o) {
            return i.WebRequest({
                url: "/sendverifyemail",
                data: {
                    email: t,
                    reason: r
                },
                success: function() {
                    return o()
                },
                subject_user: e
            })
        },
        check_verification: function(e, t, r, o) {
            return i.SilentBackgroundRequest({
                url: "/isemailverified",
                data: {
                    email: t
                },
                success: function(e) {
                    return "ok" === e ? r() : o()
                },
                subject_user: e
            })
        },
        listen_for_verification: function(e, t, r) {
            var i = e.id + ":" + t;
            if (!this._POLLING[i]) return this._POLLING[i] = !0, this._poll_for_verification(e, t, r)
        },
        _poll_for_verification: function(e, t, r) {
            var i = this;
            return this.check_verification(e, t, r, function() {
                return setTimeout(function() {
                    return i._poll_for_verification(e, t, r)
                }, 4e3)
            })
        }
    };
    t.default = o
}), define("modules/clean/account/set_password_modal", ["require", "exports", "tslib", "react", "modules/clean/ajax", "modules/clean/react/modal", "modules/core/i18n", "modules/core/notify"], function(e, t, r, i, o, s, n, a) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), i = r.__importDefault(i), o = r.__importStar(o);
    var l = (function(e) {
        function t(t) {
            var r = e.call(this, t) || this;
            return r.state = {
                sent: !1,
                submitting: !1
            }, r
        }
        return r.__extends(t, e), t.prototype.resetResponseSuccess = function(e) {
            "OK" === e.status ? (a.Notify.success(n._("Sent an email to %(email)s").format({
                email: this.props.email
            })), this.setState({
                sent: !0,
                submitting: this.state.submitting
            })) : this.resetEmailError()
        }, t.prototype.resetEmailError = function() {
            a.Notify.error(n._("Could not send email. Please try again"))
        }, t.prototype.sendResetEmail = function(e) {
            var t = this;
            e.preventDefault(), this.setState({
                sent: this.state.sent,
                submitting: !0
            }), o.FormWebRequest({
                url: "/ajax_reset_start",
                data: {
                    email: this.props.email
                },
                success: function(e) {
                    return t.resetResponseSuccess(JSON.parse(e))
                },
                error: function() {
                    return t.resetEmailError()
                },
                complete: function() {
                    t.setState({
                        sent: t.state.sent,
                        submitting: !1
                    })
                }
            })
        }, t.prototype.userConfirmSetPassword = function() {
            this.props.onUserConfirm ? this.props.onUserConfirm() : s.Modal.close()
        }, t.showInstance = function(e) {
            s.Modal.showInstance(i.default.createElement(t, r.__assign({}, e)))
        }, t.prototype.render = function() {
            var e = this,
                t = n._("Dropbox will send an email to %(email)s with further instructions.\n    You may need to check your spam folder or unblock no-reply@dropbox.com.").format({
                    email: this.props.email
                }),
                r = this.state.sent ? n._("Resend email") : n._("Send email"),
                o = n._("I’ve set a password"),
                a = this.sendResetEmail.bind(this),
                l = this.userConfirmSetPassword.bind(this),
                u = i.default.createElement(s.ModalButtons, null, i.default.createElement(s.ModalButton, {
                    importance: "primary",
                    disabled: !this.state.sent,
                    onClick: l
                }, o), i.default.createElement(s.ModalButton, {
                    importance: "tertiary",
                    onClick: a
                }, r));
            return i.default.createElement(s.Modal, {
                title: n._("Set Password"),
                onAccept: function() {
                    return e.userConfirmSetPassword()
                },
                buttonComponent: u
            }, i.default.createElement("p", null, this.props.reason), i.default.createElement("p", null, t))
        }, t
    })(i.default.Component);
    t.SetPasswordModal = l
}), define("modules/clean/account/verify_email_modals", ["require", "exports", "tslib", "external/create-react-class", "react", "external/react-dom-factories", "external/prop-types", "modules/clean/account/email_verify", "modules/clean/account/email_verify_reasons", "modules/clean/analytics", "modules/clean/react/button", "modules/clean/react/modal", "modules/clean/react_format", "modules/clean/viewer", "modules/core/i18n"], function(e, t, r, i, o, s, n, a, l, u, m, c, d, p, h) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), i = r.__importDefault(i), o = r.__importDefault(o), s = r.__importStar(s), n = r.__importStar(n), a = r.__importDefault(a), l = r.__importStar(l);
    var f = o.default.createElement,
        _ = [l.ADD_COMMENT, l.SUBSCRIBE_TO_COMMENTS, l.SHARE_FILEVIEWER],
        g = {
            getStyle: function() {
                return this.props.shouldUseSimpleUI ? "simple" : "default"
            },
            renderChangeEmail: function() {
                if (!this.props.shouldUseSimpleUI) return s.a({
                    href: "#",
                    className: "change-email-before-verify",
                    onClick: this.showChangeEmail
                }, h._("Update email address"))
            }
        },
        y = i.default({
            displayName: "VerifyEmailModal",
            mixins: [g],
            propTypes: {
                user: n.object,
                reason: n.string,
                email: n.string,
                onEmailSent: n.func,
                onShowChange: n.func,
                shouldUseSimpleUI: n.bool
            },
            _getStyle: function() {
                return Array.from(_).includes(this.props.reason) ? "default-maestro" : this.getStyle()
            },
            render: function() {
                var e = {
                    reason: this.props.reason
                };
                return u.UserActivityLogger.log("web", "email_verify_shown", e), f(c.Modal, {
                    title: h._("Verify your email address"),
                    className: "verify-email",
                    acceptButtonText: h._("Send email"),
                    dismissButtonText: h._("Cancel"),
                    onAccept: this.sendEmail,
                    ref: "modal",
                    style: this._getStyle()
                }, s.div({
                    className: "db-modal-message"
                }, s.div({}, this.getPrompt()), this.renderChangeEmail()))
            },
            sendEmail: function(e) {
                return e.preventDefault(), a.default.send_verification_email(this.props.user, this.props.email, this.props.reason, this.emailSent)
            },
            close: function() {
                return null != this.refs.modal ? this.refs.modal.close() : void 0
            },
            emailSent: function() {
                return this.close(), "function" == typeof this.props.onEmailSent ? this.props.onEmailSent() : void 0
            },
            showChangeEmail: function(e) {
                var t = {
                    reason: this.props.reason
                };
                return u.UserActivityLogger.log("web", "email_verify_change_first", t), e.preventDefault(), this.close(), "function" == typeof this.props.onShowChange ? this.props.onShowChange() : void 0
            },
            getPrompt: function() {
                switch (this.props.reason) {
                    case l.ADD_COMMENT:
                        return d.reactFormat(h._("Dropbox needs to verify your email address <strong>%(email)s</strong> before you can add comments. It’s as simple as clicking the link in the verification email we send to you."), {
                            strong: s.strong(),
                            email: this.props.email
                        });
                    case l.SUBSCRIBE_TO_COMMENTS:
                        return d.reactFormat(h._("Dropbox needs to verify your email address <strong>%(email)s</strong> before you can subscribe. It’s as simple as clicking the link in the verification email we send to you."), {
                            strong: s.strong(),
                            email: this.props.email
                        });
                    case l.SHARE_FOLDER:
                        return d.reactFormat(h._("Dropbox needs to verify your email address <strong>%(email)s</strong> to share folders. It’s as simple as clicking the link in the verification email we send to you."), {
                            strong: s.strong(),
                            email: this.props.email
                        });
                    case l.NEW_DFB_TEAM_TRY:
                    case l.NEW_DFB_TEAM_BUY:
                        return d.reactFormat(h._("Dropbox needs to verify your email address <strong>%(email)s</strong> to add members to your team. It’s as simple as clicking the link in the verification email we send to you."), {
                            strong: s.strong(),
                            email: this.props.email
                        });
                    case l.SHMODAL:
                    case l.SHARE_FILEVIEWER:
                        return d.reactFormat(h._("Dropbox needs to verify your email address <strong>%(email)s</strong> to share links. It’s as simple as clicking the link in the verification email we send to you."), {
                            strong: s.strong(),
                            email: this.props.email
                        });
                    case l.CREATE_API_APP:
                        return d.reactFormat(h._("Dropbox needs to verify your email address <strong>%(email)s</strong> before you can register an API app. It’s as simple as clicking the link in the verification email we send to you."), {
                            strong: s.strong(),
                            email: this.props.email
                        });
                    case l.PUBLIC_FOLDER:
                        return d.reactFormat(h._("Dropbox needs to verify your email address <strong>%(email)s</strong> to enable your Public folder. It’s as simple as clicking the link in the verification email we send to you."), {
                            strong: s.strong(),
                            email: this.props.email
                        });
                    case l.CHANGE_EMAIL:
                        var e = p.Viewer.get_viewer().is_paired;
                        return e && "personal" === this.props.user.role ? d.reactFormat(h._("Dropbox needs to verify your email address <strong>%(email)s</strong> to finish updating your personal email. It’s as simple as clicking the link in the verification email we send to you."), {
                            strong: s.strong(),
                            email: this.props.email
                        }) : e && "work" === this.props.user.role ? d.reactFormat(h._("Dropbox needs to verify your email address <strong>%(email)s</strong> to finish updating your %(team)s email. It’s as simple as clicking the link in the verification email we send to you."), {
                            strong: s.strong(),
                            email: this.props.email,
                            team: p.Viewer.get_viewer().team_name
                        }) : d.reactFormat(h._("Dropbox needs to verify your email address <strong>%(email)s</strong> to finish updating your email. It’s as simple as clicking the link in the verification email we send to you."), {
                            strong: s.strong(),
                            email: this.props.email
                        });
                    case l.CREATE_FILE_COLLECTOR:
                        return d.reactFormat(h._("Dropbox needs to verify your email address <strong>%(email)s</strong> to create file requests. It’s as simple as clicking the link in the verification email we send to you."), {
                            strong: s.strong(),
                            email: this.props.email
                        });
                    case l.GIFT_BUY:
                        return d.reactFormat(h._("Dropbox needs to verify your email address <strong>%(email)s</strong> before you can send gifts to your friends. It’s as simple as clicking the link in the verification email we send to you."), {
                            strong: s.strong(),
                            email: this.props.email
                        });
                    case l.REFER_FRIENDS:
                        return d.reactFormat(h._("Dropbox needs to verify your email address <strong>%(email)s</strong> before you can invite friends. It’s as simple as clicking the link in the verification email we send to you."), {
                            strong: s.strong(),
                            email: this.props.email
                        });
                    case l.CREATE_TEAM:
                        return d.reactFormat(h._("Dropbox needs to verify your email address <strong>%(email)s</strong> before you can create or join a team. It’s as simple as clicking the link in the verification email we send to you."), {
                            strong: s.strong(),
                            email: this.props.email
                        });
                    case l.CLOUD_DOCS:
                        return d.reactFormat(h._("Dropbox needs to verify your email address <strong>%(email)s</strong> before you can open or create this document type. It’s as simple as clicking the link in the verification email we send to you."), {
                            strong: s.strong(),
                            email: this.props.email
                        });
                    default:
                        return d.reactFormat(h._("Verify your email address at <strong>%(email)s</strong> to share folders and ensure your account can be recovered."), {
                            strong: s.strong(),
                            email: this.props.email
                        })
                }
            }
        });
    t.VerifyEmailModal = y;
    var v = i.default({
        displayName: "ResendVerifyEmailModal",
        mixins: [g],
        propTypes: {
            user: n.object,
            email: n.string,
            reason: n.string,
            onEmailSent: n.func,
            onShowChange: n.func,
            shouldUseSimpleUI: n.bool
        },
        _getStyle: function() {
            return this._isMaestroDesign ? "default-maestro" : this.getStyle()
        },
        _isMaestroDesign: function() {
            return Array.from(_).includes(this.props.reason)
        },
        render: function() {
            var e = {
                reason: this.props.reason
            };
            return u.UserActivityLogger.log("web", "email_verify_resend_shown", e), f(c.Modal, {
                title: h._("Verify your email address"),
                buttonComponent: this.renderButtons(),
                ref: "modal",
                style: this._getStyle()
            }, s.div({
                className: "db-modal-message"
            }, s.div({}, this.getPrompt()), this.renderChangeEmail()))
        },
        renderButtons: function() {
            return s.div({
                className: "db-modal-buttons"
            }, f(m.Button, {
                key: this._isMaestroDesign() ? "tertiary" : "primary",
                className: "dbmodal-button",
                importance: this._isMaestroDesign() ? "tertiary" : "primary",
                disabled: !1,
                onClick: this.close
            }, h._("Done")), f(m.Button, {
                key: this._isMaestroDesign() ? "primary" : "tertiary",
                className: "dbmodal-button",
                importance: this._isMaestroDesign() ? "primary" : "tertiary",
                disabled: !1,
                onClick: this.sendEmail
            }, h._("Resend email")))
        },
        close: function() {
            return null != this.refs.modal ? this.refs.modal.close() : void 0
        },
        showChangeEmail: function(e) {
            var t = {
                reason: this.props.reason
            };
            return u.UserActivityLogger.log("web", "email_verify_resend_change_first", t), e.preventDefault(), this.close(), "function" == typeof this.props.onShowChange ? this.props.onShowChange() : void 0
        },
        sendEmail: function(e) {
            return e.preventDefault(), a.default.send_verification_email(this.props.user, this.props.email, this.props.reason, this.emailSent)
        },
        emailSent: function() {
            return this.close(), "function" == typeof this.props.onEmailSent ? this.props.onEmailSent() : void 0
        },
        getPrompt: function() {
            var e = p.Viewer.get_viewer().is_paired;
            return this.props.reason === l.REFER_FRIENDS ? d.reactFormat(h._("Dropbox needs to verify your email address <strong>%(email)s</strong> before you can invite friends. Check your inbox and click the link in the email to verify your address. If you can’t find it, check your spam folder."), {
                strong: s.strong(),
                email: this.props.email
            }) : this.props.reason !== l.CHANGE_EMAIL ? d.reactFormat(h._("Dropbox has sent a verification email to <strong>%(email)s</strong>. Check your inbox and click on the link in the email to verify your address. If you can't find it, check your spam folder or click the button to resend the email."), {
                strong: s.strong(),
                email: this.props.email
            }) : e && "personal" === this.props.user.role ? d.reactFormat(h._("Dropbox has sent a verification email to <strong>%(email)s</strong>. Check your inbox and click on the link in the email to finish updating your personal email. If you can't find it, check your spam folder or click the button to resend the email."), {
                strong: s.strong(),
                email: this.props.email
            }) : e && "work" === this.props.user.role ? d.reactFormat(h._("Dropbox has sent a verification email to <strong>%(email)s</strong>. Check your inbox and click on the link in the email to finish updating your %(team)s email. If you can't find it, check your spam folder or click the button to resend the email."), {
                strong: s.strong(),
                email: this.props.email,
                team: p.Viewer.get_viewer().team_name
            }) : d.reactFormat(h._("Dropbox has sent a verification email to <strong>%(email)s</strong>. Check your inbox and click on the link in the email to finish updating your email. If you can't find it, check your spam folder or click the button to resend the email."), {
                strong: s.strong(),
                email: this.props.email
            })
        }
    });
    t.ResendVerifyEmailModal = v;
    var b = (function(e) {
        function t() {
            return null !== e && e.apply(this, arguments) || this
        }
        return r.__extends(t, e), t.prototype.render = function() {
            var e = d.reactFormat(h._("Dropbox has sent a verification email to <strong>%(email)s</strong>. Check your inbox and click on the link in the email to verify your address. If you can't find it, check your spam folder or click the button to resend the email."), {
                strong: s.strong(),
                email: this.props.email
            });
            return f(c.Modal, {
                title: h._("Verification email sent!"),
                acceptButtonText: h._("Done")
            }, s.div({}, e))
        }, t.displayName = "VerifyEmailSentModal", t.propTypes = {
            email: n.string
        }, t
    })(o.default.Component);
    t.VerifyEmailSentModal = b;
    var w = (function(e) {
        function t() {
            var t = null !== e && e.apply(this, arguments) || this;
            return t.getPrompt = function() {
                switch (t.props.reason) {
                    case l.CREATE_TEAM:
                        return d.reactFormat(h._("Thanks for verifying your email address: <strong>%(email)s</strong>. Now you can invite members to your team."), {
                            strong: s.strong(),
                            email: t.props.email
                        });
                    case l.SHARE_FOLDER:
                        return d.reactFormat(h._("Thanks for verifying your email address: <strong>%(email)s</strong>. You can now share and receive files on Dropbox."), {
                            strong: s.strong(),
                            email: t.props.email
                        });
                    case l.CREATE_API_APP:
                        return d.reactFormat(h._("Thanks for verifying your email address: <strong>%(email)s</strong>. You can now register API apps."), {
                            strong: s.strong(),
                            email: t.props.email
                        });
                    case l.PUBLIC_FOLDER:
                        return d.reactFormat(h._("Thanks for verifying your email address. You can now enable the Public folder for your <strong>%(email)s</strong> Dropbox."), {
                            strong: s.strong(),
                            email: t.props.email
                        });
                    default:
                        return d.reactFormat(h._("Thanks for verifying your email address: <strong>%(email)s</strong>."), {
                            strong: s.strong(),
                            email: t.props.email
                        })
                }
            }, t
        }
        return r.__extends(t, e), t.prototype.render = function() {
            return f(c.Modal, {
                title: h._("Your email address is now verified"),
                acceptButtonText: h._("Done")
            }, s.div({}, this.getPrompt()))
        }, t.displayName = "EmailVerifiedModal", t.propTypes = {
            reason: n.string,
            email: n.string
        }, t
    })(o.default.Component);
    t.EmailVerifiedModal = w;
    var E = (function(e) {
        function t() {
            var t = null !== e && e.apply(this, arguments) || this;
            return t.getPrompt = function() {
                var e = p.Viewer.get_viewer().is_paired;
                return e && "personal" === t.props.user.role ? d.reactFormat(h._("Thanks for verifying your email address <strong>%(email)s</strong>. Your personal account has successfully been changed."), {
                    strong: s.strong(),
                    email: t.props.email
                }) : e && "work" === t.props.user.role ? d.reactFormat(h._("Thanks for verifying your email address <strong>%(email)s</strong>. Your %(team)s account has successfully been changed."), {
                    strong: s.strong(),
                    email: t.props.email,
                    team: p.Viewer.get_viewer().team_name
                }) : d.reactFormat(h._("Thanks for verifying your email address <strong>%(email)s</strong>. Your account has successfully been changed."), {
                    strong: s.strong(),
                    email: t.props.email
                })
            }, t
        }
        return r.__extends(t, e), t.prototype.render = function() {
            return f(c.Modal, {
                title: h._("Your email address is now verified"),
                acceptButtonText: h._("Done")
            }, s.div({}, this.getPrompt()))
        }, t.displayName = "ChangedEmailVerifiedModal", t.propTypes = {
            email: n.string,
            user: n.object
        }, t
    })(o.default.Component);
    t.ChangedEmailVerifiedModal = E
});
//# sourceMappingURL=pkg-account.min.js-vflOqv61t.map