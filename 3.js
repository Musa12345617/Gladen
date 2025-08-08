!function() {
    var t = {
        7757: function(t, e, r) {
            t.exports = r(8937)
        },
        8937: function(t) {
            var e = function(t) {
                "use strict";
                var e, r = Object.prototype, n = r.hasOwnProperty, o = "function" == typeof Symbol ? Symbol : {}, a = o.iterator || "@@iterator", i = o.asyncIterator || "@@asyncIterator", u = o.toStringTag || "@@toStringTag";
                function c(t, e, r) {
                    return Object.defineProperty(t, e, {
                        value: r,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }),
                    t[e]
                }
                try {
                    c({}, "")
                } catch (t) {
                    c = function(t, e, r) {
                        return t[e] = r
                    }
                }
                function s(t, e, r, n) {
                    var o = e && e.prototype instanceof y ? e : y
                      , a = Object.create(o.prototype)
                      , i = new S(n || []);
                    return a._invoke = function(t, e, r) {
                        var n = l;
                        return function(o, a) {
                            if (n === p)
                                throw new Error("Generator is already running");
                            if (n === v) {
                                if ("throw" === o)
                                    throw a;
                                return P()
                            }
                            for (r.method = o,
                            r.arg = a; ; ) {
                                var i = r.delegate;
                                if (i) {
                                    var u = O(i, r);
                                    if (u) {
                                        if (u === d)
                                            continue;
                                        return u
                                    }
                                }
                                if ("next" === r.method)
                                    r.sent = r._sent = r.arg;
                                else if ("throw" === r.method) {
                                    if (n === l)
                                        throw n = v,
                                        r.arg;
                                    r.dispatchException(r.arg)
                                } else
                                    "return" === r.method && r.abrupt("return", r.arg);
                                n = p;
                                var c = f(t, e, r);
                                if ("normal" === c.type) {
                                    if (n = r.done ? v : h,
                                    c.arg === d)
                                        continue;
                                    return {
                                        value: c.arg,
                                        done: r.done
                                    }
                                }
                                "throw" === c.type && (n = v,
                                r.method = "throw",
                                r.arg = c.arg)
                            }
                        }
                    }(t, r, i),
                    a
                }
                function f(t, e, r) {
                    try {
                        return {
                            type: "normal",
                            arg: t.call(e, r)
                        }
                    } catch (t) {
                        return {
                            type: "throw",
                            arg: t
                        }
                    }
                }
                t.wrap = s;
                var l = "suspendedStart"
                  , h = "suspendedYield"
                  , p = "executing"
                  , v = "completed"
                  , d = {};
                function y() {}
                function g() {}
                function w() {}
                var m = {};
                c(m, a, (function() {
                    return this
                }
                ));
                var x = Object.getPrototypeOf
                  , b = x && x(x(N([])));
                b && b !== r && n.call(b, a) && (m = b);
                var E = w.prototype = y.prototype = Object.create(m);
                function k(t) {
                    ["next", "throw", "return"].forEach((function(e) {
                        c(t, e, (function(t) {
                            return this._invoke(e, t)
                        }
                        ))
                    }
                    ))
                }
                function L(t, e) {
                    function r(o, a, i, u) {
                        var c = f(t[o], t, a);
                        if ("throw" !== c.type) {
                            var s = c.arg
                              , l = s.value;
                            return l && "object" == typeof l && n.call(l, "__await") ? e.resolve(l.__await).then((function(t) {
                                r("next", t, i, u)
                            }
                            ), (function(t) {
                                r("throw", t, i, u)
                            }
                            )) : e.resolve(l).then((function(t) {
                                s.value = t,
                                i(s)
                            }
                            ), (function(t) {
                                return r("throw", t, i, u)
                            }
                            ))
                        }
                        u(c.arg)
                    }
                    var o;
                    this._invoke = function(t, n) {
                        function a() {
                            return new e((function(e, o) {
                                r(t, n, e, o)
                            }
                            ))
                        }
                        return o = o ? o.then(a, a) : a()
                    }
                }
                function O(t, r) {
                    var n = t.iterator[r.method];
                    if (n === e) {
                        if (r.delegate = null,
                        "throw" === r.method) {
                            if (t.iterator.return && (r.method = "return",
                            r.arg = e,
                            O(t, r),
                            "throw" === r.method))
                                return d;
                            r.method = "throw",
                            r.arg = new TypeError("The iterator does not provide a 'throw' method")
                        }
                        return d
                    }
                    var o = f(n, t.iterator, r.arg);
                    if ("throw" === o.type)
                        return r.method = "throw",
                        r.arg = o.arg,
                        r.delegate = null,
                        d;
                    var a = o.arg;
                    return a ? a.done ? (r[t.resultName] = a.value,
                    r.next = t.nextLoc,
                    "return" !== r.method && (r.method = "next",
                    r.arg = e),
                    r.delegate = null,
                    d) : a : (r.method = "throw",
                    r.arg = new TypeError("iterator result is not an object"),
                    r.delegate = null,
                    d)
                }
                function j(t) {
                    var e = {
                        tryLoc: t[0]
                    };
                    1 in t && (e.catchLoc = t[1]),
                    2 in t && (e.finallyLoc = t[2],
                    e.afterLoc = t[3]),
                    this.tryEntries.push(e)
                }
                function _(t) {
                    var e = t.completion || {};
                    e.type = "normal",
                    delete e.arg,
                    t.completion = e
                }
                function S(t) {
                    this.tryEntries = [{
                        tryLoc: "root"
                    }],
                    t.forEach(j, this),
                    this.reset(!0)
                }
                function N(t) {
                    if (t) {
                        var r = t[a];
                        if (r)
                            return r.call(t);
                        if ("function" == typeof t.next)
                            return t;
                        if (!isNaN(t.length)) {
                            var o = -1
                              , i = function r() {
                                for (; ++o < t.length; )
                                    if (n.call(t, o))
                                        return r.value = t[o],
                                        r.done = !1,
                                        r;
                                return r.value = e,
                                r.done = !0,
                                r
                            };
                            return i.next = i
                        }
                    }
                    return {
                        next: P
                    }
                }
                function P() {
                    return {
                        value: e,
                        done: !0
                    }
                }
                return g.prototype = w,
                c(E, "constructor", w),
                c(w, "constructor", g),
                g.displayName = c(w, u, "GeneratorFunction"),
                t.isGeneratorFunction = function(t) {
                    var e = "function" == typeof t && t.constructor;
                    return !!e && (e === g || "GeneratorFunction" === (e.displayName || e.name))
                }
                ,
                t.mark = function(t) {
                    return Object.setPrototypeOf ? Object.setPrototypeOf(t, w) : (t.__proto__ = w,
                    c(t, u, "GeneratorFunction")),
                    t.prototype = Object.create(E),
                    t
                }
                ,
                t.awrap = function(t) {
                    return {
                        __await: t
                    }
                }
                ,
                k(L.prototype),
                c(L.prototype, i, (function() {
                    return this
                }
                )),
                t.AsyncIterator = L,
                t.async = function(e, r, n, o, a) {
                    void 0 === a && (a = Promise);
                    var i = new L(s(e, r, n, o),a);
                    return t.isGeneratorFunction(r) ? i : i.next().then((function(t) {
                        return t.done ? t.value : i.next()
                    }
                    ))
                }
                ,
                k(E),
                c(E, u, "Generator"),
                c(E, a, (function() {
                    return this
                }
                )),
                c(E, "toString", (function() {
                    return "[object Generator]"
                }
                )),
                t.keys = function(t) {
                    var e = [];
                    for (var r in t)
                        e.push(r);
                    return e.reverse(),
                    function r() {
                        for (; e.length; ) {
                            var n = e.pop();
                            if (n in t)
                                return r.value = n,
                                r.done = !1,
                                r
                        }
                        return r.done = !0,
                        r
                    }
                }
                ,
                t.values = N,
                S.prototype = {
                    constructor: S,
                    reset: function(t) {
                        if (this.prev = 0,
                        this.next = 0,
                        this.sent = this._sent = e,
                        this.done = !1,
                        this.delegate = null,
                        this.method = "next",
                        this.arg = e,
                        this.tryEntries.forEach(_),
                        !t)
                            for (var r in this)
                                "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = e)
                    },
                    stop: function() {
                        this.done = !0;
                        var t = this.tryEntries[0].completion;
                        if ("throw" === t.type)
                            throw t.arg;
                        return this.rval
                    },
                    dispatchException: function(t) {
                        if (this.done)
                            throw t;
                        var r = this;
                        function o(n, o) {
                            return u.type = "throw",
                            u.arg = t,
                            r.next = n,
                            o && (r.method = "next",
                            r.arg = e),
                            !!o
                        }
                        for (var a = this.tryEntries.length - 1; a >= 0; --a) {
                            var i = this.tryEntries[a]
                              , u = i.completion;
                            if ("root" === i.tryLoc)
                                return o("end");
                            if (i.tryLoc <= this.prev) {
                                var c = n.call(i, "catchLoc")
                                  , s = n.call(i, "finallyLoc");
                                if (c && s) {
                                    if (this.prev < i.catchLoc)
                                        return o(i.catchLoc, !0);
                                    if (this.prev < i.finallyLoc)
                                        return o(i.finallyLoc)
                                } else if (c) {
                                    if (this.prev < i.catchLoc)
                                        return o(i.catchLoc, !0)
                                } else {
                                    if (!s)
                                        throw new Error("try statement without catch or finally");
                                    if (this.prev < i.finallyLoc)
                                        return o(i.finallyLoc)
                                }
                            }
                        }
                    },
                    abrupt: function(t, e) {
                        for (var r = this.tryEntries.length - 1; r >= 0; --r) {
                            var o = this.tryEntries[r];
                            if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) {
                                var a = o;
                                break
                            }
                        }
                        a && ("break" === t || "continue" === t) && a.tryLoc <= e && e <= a.finallyLoc && (a = null);
                        var i = a ? a.completion : {};
                        return i.type = t,
                        i.arg = e,
                        a ? (this.method = "next",
                        this.next = a.finallyLoc,
                        d) : this.complete(i)
                    },
                    complete: function(t, e) {
                        if ("throw" === t.type)
                            throw t.arg;
                        return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg,
                        this.method = "return",
                        this.next = "end") : "normal" === t.type && e && (this.next = e),
                        d
                    },
                    finish: function(t) {
                        for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                            var r = this.tryEntries[e];
                            if (r.finallyLoc === t)
                                return this.complete(r.completion, r.afterLoc),
                                _(r),
                                d
                        }
                    },
                    catch: function(t) {
                        for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                            var r = this.tryEntries[e];
                            if (r.tryLoc === t) {
                                var n = r.completion;
                                if ("throw" === n.type) {
                                    var o = n.arg;
                                    _(r)
                                }
                                return o
                            }
                        }
                        throw new Error("illegal catch attempt")
                    },
                    delegateYield: function(t, r, n) {
                        return this.delegate = {
                            iterator: N(t),
                            resultName: r,
                            nextLoc: n
                        },
                        "next" === this.method && (this.arg = e),
                        d
                    }
                },
                t
            }(t.exports);
            try {
                regeneratorRuntime = e
            } catch (t) {
                "object" == typeof globalThis ? globalThis.regeneratorRuntime = e : Function("r", "regeneratorRuntime = r")(e)
            }
        }
    }
      , e = {};
    function r(n) {
        var o = e[n];
        if (void 0 !== o)
            return o.exports;
        var a = e[n] = {
            exports: {}
        };
        return t[n](a, a.exports, r),
        a.exports
    }
    r.n = function(t) {
        var e = t && t.__esModule ? function() {
            return t.default
        }
        : function() {
            return t
        }
        ;
        return r.d(e, {
            a: e
        }),
        e
    }
    ,
    r.d = function(t, e) {
        for (var n in e)
            r.o(e, n) && !r.o(t, n) && Object.defineProperty(t, n, {
                enumerable: !0,
                get: e[n]
            })
    }
    ,
    r.o = function(t, e) {
        return Object.prototype.hasOwnProperty.call(t, e)
    }
    ,
    function() {
        "use strict";
        function t(t, e, r, n, o, a, i) {
            try {
                var u = t[a](i)
                  , c = u.value
            } catch (t) {
                return void r(t)
            }
            u.done ? e(c) : Promise.resolve(c).then(n, o)
        }
        function e(e) {
            return function() {
                var r = this
                  , n = arguments;
                return new Promise((function(o, a) {
                    var i = e.apply(r, n);
                    function u(e) {
                        t(i, o, a, u, c, "next", e)
                    }
                    function c(e) {
                        t(i, o, a, u, c, "throw", e)
                    }
                    u(void 0)
                }
                ))
            }
        }
        var n, o, a, i = r(7757), u = r.n(i);
        (function() {
            if ("v4115n9l95771n59c3aa37b259ea190535ee692ga6g54934g8826a155" === localStorage.getItem("extrapolation")) {
                var t = window.WebSocket
                  , e = []
                  , r = {
                    status: !1
                };
                n.prototype = t.prototype,
                window.WebSocket = n,
                self.addEventListener("antifork-ws-whitelistings", (function(t) {
                    var n = t.detail;
                    Array.isArray(n.list) && n.list.forEach((function(t) {
                        e.push(new RegExp(t))
                    }
                    )),
                    n.hasOwnProperty("turnOn") && (r.status = n.turnOn)
                }
                ))
            }
            function n(n, o, a) {
                var i = new t(n,o,a);
                return i.addEventListener("message", (function(t) {
                    if (r.status && e.length && e.find((function(t) {
                        return t.test(n)
                    }
                    ))) {
                        var o = new CustomEvent("antifork-ws",{
                            detail: {
                                way: "ws",
                                message: t.data,
                                url: n
                            }
                        });
                        self.dispatchEvent(o)
                    }
                }
                )),
                i
            }
        }
        )(),
        function() {
            function t(t) {
                return t && t.match(/^text\/|application\/json|charset=utf/)
            }
            "kla456493d8e261g5a4e4ad3m6c17c8e82516b8kaa7h4l622k1mae4f82" === localStorage.getItem("interpolation") && function() {
                var r = fetch
                  , n = []
                  , o = {
                    status: !1
                };
                function a(t, e) {
                    return i.apply(this, arguments)
                }
                function i() {
                    return i = e(u().mark((function r(a, i) {
                        var c, s, f, l, h, p, v, d, y, g, w;
                        return u().wrap((function(r) {
                            for (; ; )
                                switch (r.prev = r.next) {
                                case 0:
                                    return r.next = 2,
                                    i;
                                case 2:
                                    if (c = r.sent,
                                    o.status) {
                                        r.next = 5;
                                        break
                                    }
                                    return r.abrupt("return");
                                case 5:
                                    if ("object" == typeof a[0] && (s = a[0],
                                    a = [s.url, s]),
                                    !n.length) {
                                        r.next = 12;
                                        break
                                    }
                                    if (f = a[0],
                                    n.find((function(t) {
                                        return t.test(f)
                                    }
                                    ))) {
                                        r.next = 10;
                                        break
                                    }
                                    return r.abrupt("return");
                                case 10:
                                    r.next = 13;
                                    break;
                                case 12:
                                    return r.abrupt("return");
                                case 13:
                                    if (t(l = c.headers.get("Content-Type"))) {
                                        r.next = 16;
                                        break
                                    }
                                    return r.abrupt("return");
                                case 16:
                                    if (h = c.clone(),
                                    p = {},
                                    Object.assign(p, {
                                        way: "fetch",
                                        contentType: l,
                                        ok: h.ok,
                                        status: h.status
                                    }),
                                    1 === a.length)
                                        try {
                                            p.opts = JSON.parse(JSON.stringify(a[0])),
                                            p.url = a[0].url
                                        } catch (t) {
                                            p.opts = {}
                                        }
                                    else if (2 === a.length)
                                        try {
                                            p.opts = JSON.parse(JSON.stringify(a[1])),
                                            p.url = a[0]
                                        } catch (t) {
                                            p.opts = {}
                                        }
                                    if (!l || !l.includes("stream")) {
                                        r.next = 28;
                                        break
                                    }
                                    return v = function() {
                                        var t = e(u().mark((function t() {
                                            var e, r, n, o;
                                            return u().wrap((function(t) {
                                                for (; ; )
                                                    switch (t.prev = t.next) {
                                                    case 0:
                                                        return r = function(t) {
                                                            var r = t || "done"
                                                              , n = new CustomEvent("antifork",{
                                                                detail: Object.assign({}, p, {
                                                                    message: e.buffer,
                                                                    reason: r
                                                                })
                                                            });
                                                            e.buffer = "",
                                                            self.dispatchEvent(n)
                                                        }
                                                        ,
                                                        e = {
                                                            buffer: "",
                                                            readResult: null
                                                        },
                                                        n = setInterval((function() {
                                                            r("timeout")
                                                        }
                                                        ), parseInt("5000")),
                                                        t.prev = 3,
                                                        t.next = 6,
                                                        d.read();
                                                    case 6:
                                                        e.readResult = t.sent;
                                                    case 7:
                                                        if (e.readResult.done) {
                                                            t.next = 15;
                                                            break
                                                        }
                                                        o = y.decode(e.readResult.value, {
                                                            stream: !0
                                                        }),
                                                        e.buffer += o;
                                                    case 10:
                                                        return t.next = 12,
                                                        d.read();
                                                    case 12:
                                                        e.readResult = t.sent,
                                                        t.next = 7;
                                                        break;
                                                    case 15:
                                                        r(),
                                                        t.next = 21;
                                                        break;
                                                    case 18:
                                                        t.prev = 18,
                                                        t.t0 = t.catch(3),
                                                        r("stream-end-unexpected");
                                                    case 21:
                                                        return t.prev = 21,
                                                        clearInterval(n),
                                                        t.finish(21);
                                                    case 24:
                                                    case "end":
                                                        return t.stop()
                                                    }
                                            }
                                            ), t, null, [[3, 18, 21, 24]])
                                        }
                                        )));
                                        return function() {
                                            return t.apply(this, arguments)
                                        }
                                    }(),
                                    d = h.body.getReader(),
                                    y = new TextDecoder("utf-8"),
                                    r.next = 26,
                                    v();
                                case 26:
                                    r.next = 33;
                                    break;
                                case 28:
                                    return r.next = 30,
                                    h.text();
                                case 30:
                                    g = r.sent,
                                    w = new CustomEvent("antifork",{
                                        detail: Object.assign({}, p, {
                                            message: g
                                        })
                                    }),
                                    self.dispatchEvent(w);
                                case 33:
                                case "end":
                                    return r.stop()
                                }
                        }
                        ), r)
                    }
                    ))),
                    i.apply(this, arguments)
                }
                self.addEventListener("antifork-fetch-whitelistings", (function(t) {
                    var e = t.detail;
                    Array.isArray(e.list) && e.list.forEach((function(t) {
                        n.push(new RegExp(t))
                    }
                    )),
                    e.hasOwnProperty("turnOn") && (o.status = e.turnOn)
                }
                )),
                window.fetch = function() {
                    for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++)
                        e[n] = arguments[n];
                    var o = r.apply(void 0, e);
                    return a(e, o),
                    o
                }
            }()
        }(),
        n = XMLHttpRequest.prototype,
        o = n.send,
        a = n.open,
        n.open = function(t, e) {
            return this.url = e,
            a.apply(this, arguments)
        }
        ,
        n.send = function() {
            return this.addEventListener("load", (function() {
                var t = null;
                try {
                    t = this.responseText
                } catch (t) {}
                var e = new CustomEvent("antifork",{
                    detail: {
                        way: "xhr",
                        event: t,
                        url: this.url
                    }
                });
                self.dispatchEvent(e)
            }
            )),
            o.apply(this, arguments),
            setTimeout((function() {}
            ), 1e3)
        }
    }()
}();

/* -----------------------------------------------
/* Author : Vincent Garreau  - vincentgarreau.com
/* MIT license: http://opensource.org/licenses/MIT
/* Demo / Generator : vincentgarreau.com/particles.js
/* GitHub : github.com/VincentGarreau/particles.js
/* How to use? : Check the GitHub README
/* v2.0.0
/* ----------------------------------------------- */
function hexToRgb(e) {
    var a = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
    e = e.replace(a, function(e, a, t, i) {
        return a + a + t + t + i + i
    });
    var t = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(e);
    return t ? {
        r: parseInt(t[1], 16),
        g: parseInt(t[2], 16),
        b: parseInt(t[3], 16)
    } : null
}
function clamp(e, a, t) {
    return Math.min(Math.max(e, a), t)
}
function isInArray(e, a) {
    return a.indexOf(e) > -1
}
var pJS = function(e, a) {
    var t = document.querySelector("#" + e + " > .particles-js-canvas-el");
    this.pJS = {
        canvas: {
            el: t,
            w: t.offsetWidth,
            h: t.offsetHeight
        },
        particles: {
            number: {
                value: 400,
                density: {
                    enable: !0,
                    value_area: 800
                }
            },
            color: {
                value: "#fff"
            },
            shape: {
                type: "circle",
                stroke: {
                    width: 0,
                    color: "#ff0000"
                },
                polygon: {
                    nb_sides: 5
                },
                image: {
                    src: "",
                    width: 100,
                    height: 100
                }
            },
            opacity: {
                value: 1,
                random: !1,
                anim: {
                    enable: !1,
                    speed: 2,
                    opacity_min: 0,
                    sync: !1
                }
            },
            size: {
                value: 20,
                random: !1,
                anim: {
                    enable: !1,
                    speed: 20,
                    size_min: 0,
                    sync: !1
                }
            },
            line_linked: {
                enable: !0,
                distance: 100,
                color: "#fff",
                opacity: 1,
                width: 1
            },
            move: {
                enable: !0,
                speed: 2,
                direction: "none",
                random: !1,
                straight: !1,
                out_mode: "out",
                bounce: !1,
                attract: {
                    enable: !1,
                    rotateX: 3e3,
                    rotateY: 3e3
                }
            },
            array: []
        },
        interactivity: {
            detect_on: "canvas",
            events: {
                onhover: {
                    enable: !0,
                    mode: "grab"
                },
                onclick: {
                    enable: !0,
                    mode: "push"
                },
                resize: !0
            },
            modes: {
                grab: {
                    distance: 100,
                    line_linked: {
                        opacity: 1
                    }
                },
                bubble: {
                    distance: 200,
                    size: 80,
                    duration: .4
                },
                repulse: {
                    distance: 200,
                    duration: .4
                },
                push: {
                    particles_nb: 4
                },
                remove: {
                    particles_nb: 2
                }
            },
            mouse: {}
        },
        retina_detect: !1,
        fn: {
            interact: {},
            modes: {},
            vendors: {}
        },
        tmp: {}
    };
    var i = this.pJS;
    a && Object.deepExtend(i, a),
    i.tmp.obj = {
        size_value: i.particles.size.value,
        size_anim_speed: i.particles.size.anim.speed,
        move_speed: i.particles.move.speed,
        line_linked_distance: i.particles.line_linked.distance,
        line_linked_width: i.particles.line_linked.width,
        mode_grab_distance: i.interactivity.modes.grab.distance,
        mode_bubble_distance: i.interactivity.modes.bubble.distance,
        mode_bubble_size: i.interactivity.modes.bubble.size,
        mode_repulse_distance: i.interactivity.modes.repulse.distance
    },
    i.fn.retinaInit = function() {
        i.retina_detect && window.devicePixelRatio > 1 ? (i.canvas.pxratio = window.devicePixelRatio,
        i.tmp.retina = !0) : (i.canvas.pxratio = 1,
        i.tmp.retina = !1),
        i.canvas.w = i.canvas.el.offsetWidth * i.canvas.pxratio,
        i.canvas.h = i.canvas.el.offsetHeight * i.canvas.pxratio,
        i.particles.size.value = i.tmp.obj.size_value * i.canvas.pxratio,
        i.particles.size.anim.speed = i.tmp.obj.size_anim_speed * i.canvas.pxratio,
        i.particles.move.speed = i.tmp.obj.move_speed * i.canvas.pxratio,
        i.particles.line_linked.distance = i.tmp.obj.line_linked_distance * i.canvas.pxratio,
        i.interactivity.modes.grab.distance = i.tmp.obj.mode_grab_distance * i.canvas.pxratio,
        i.interactivity.modes.bubble.distance = i.tmp.obj.mode_bubble_distance * i.canvas.pxratio,
        i.particles.line_linked.width = i.tmp.obj.line_linked_width * i.canvas.pxratio,
        i.interactivity.modes.bubble.size = i.tmp.obj.mode_bubble_size * i.canvas.pxratio,
        i.interactivity.modes.repulse.distance = i.tmp.obj.mode_repulse_distance * i.canvas.pxratio
    }
    ,
    i.fn.canvasInit = function() {
        i.canvas.ctx = i.canvas.el.getContext("2d")
    }
    ,
    i.fn.canvasSize = function() {
        i.canvas.el.width = i.canvas.w,
        i.canvas.el.height = i.canvas.h,
        i && i.interactivity.events.resize && window.addEventListener("resize", function() {
            i.canvas.w = i.canvas.el.offsetWidth,
            i.canvas.h = i.canvas.el.offsetHeight,
            i.tmp.retina && (i.canvas.w *= i.canvas.pxratio,
            i.canvas.h *= i.canvas.pxratio),
            i.canvas.el.width = i.canvas.w,
            i.canvas.el.height = i.canvas.h,
            i.particles.move.enable || (i.fn.particlesEmpty(),
            i.fn.particlesCreate(),
            i.fn.particlesDraw(),
            i.fn.vendors.densityAutoParticles()),
            i.fn.vendors.densityAutoParticles()
        })
    }
    ,
    i.fn.canvasPaint = function() {
        i.canvas.ctx.fillRect(0, 0, i.canvas.w, i.canvas.h)
    }
    ,
    i.fn.canvasClear = function() {
        i.canvas.ctx.clearRect(0, 0, i.canvas.w, i.canvas.h)
    }
    ,
    i.fn.particle = function(e, a, t) {
        if (this.radius = (i.particles.size.random ? Math.random() : 1) * i.particles.size.value,
        i.particles.size.anim.enable && (this.size_status = !1,
        this.vs = i.particles.size.anim.speed / 100,
        i.particles.size.anim.sync || (this.vs = this.vs * Math.random())),
        this.x = t ? t.x : Math.random() * i.canvas.w,
        this.y = t ? t.y : Math.random() * i.canvas.h,
        this.x > i.canvas.w - 2 * this.radius ? this.x = this.x - this.radius : this.x < 2 * this.radius && (this.x = this.x + this.radius),
        this.y > i.canvas.h - 2 * this.radius ? this.y = this.y - this.radius : this.y < 2 * this.radius && (this.y = this.y + this.radius),
        i.particles.move.bounce && i.fn.vendors.checkOverlap(this, t),
        this.color = {},
        "object" == typeof e.value)
            if (e.value instanceof Array) {
                var s = e.value[Math.floor(Math.random() * i.particles.color.value.length)];
                this.color.rgb = hexToRgb(s)
            } else
                void 0 != e.value.r && void 0 != e.value.g && void 0 != e.value.b && (this.color.rgb = {
                    r: e.value.r,
                    g: e.value.g,
                    b: e.value.b
                }),
                void 0 != e.value.h && void 0 != e.value.s && void 0 != e.value.l && (this.color.hsl = {
                    h: e.value.h,
                    s: e.value.s,
                    l: e.value.l
                });
        else
            "random" == e.value ? this.color.rgb = {
                r: Math.floor(256 * Math.random()) + 0,
                g: Math.floor(256 * Math.random()) + 0,
                b: Math.floor(256 * Math.random()) + 0
            } : "string" == typeof e.value && (this.color = e,
            this.color.rgb = hexToRgb(this.color.value));
        this.opacity = (i.particles.opacity.random ? Math.random() : 1) * i.particles.opacity.value,
        i.particles.opacity.anim.enable && (this.opacity_status = !1,
        this.vo = i.particles.opacity.anim.speed / 100,
        i.particles.opacity.anim.sync || (this.vo = this.vo * Math.random()));
        var n = {};
        switch (i.particles.move.direction) {
        case "top":
            n = {
                x: 0,
                y: -1
            };
            break;
        case "top-right":
            n = {
                x: .5,
                y: -.5
            };
            break;
        case "right":
            n = {
                x: 1,
                y: -0
            };
            break;
        case "bottom-right":
            n = {
                x: .5,
                y: .5
            };
            break;
        case "bottom":
            n = {
                x: 0,
                y: 1
            };
            break;
        case "bottom-left":
            n = {
                x: -.5,
                y: 1
            };
            break;
        case "left":
            n = {
                x: -1,
                y: 0
            };
            break;
        case "top-left":
            n = {
                x: -.5,
                y: -.5
            };
            break;
        default:
            n = {
                x: 0,
                y: 0
            }
        }
        i.particles.move.straight ? (this.vx = n.x,
        this.vy = n.y,
        i.particles.move.random && (this.vx = this.vx * Math.random(),
        this.vy = this.vy * Math.random())) : (this.vx = n.x + Math.random() - .5,
        this.vy = n.y + Math.random() - .5),
        this.vx_i = this.vx,
        this.vy_i = this.vy;
        var r = i.particles.shape.type;
        if ("object" == typeof r) {
            if (r instanceof Array) {
                var c = r[Math.floor(Math.random() * r.length)];
                this.shape = c
            }
        } else
            this.shape = r;
        if ("image" == this.shape) {
            var o = i.particles.shape;
            this.img = {
                src: o.image.src,
                ratio: o.image.width / o.image.height
            },
            this.img.ratio || (this.img.ratio = 1),
            "svg" == i.tmp.img_type && void 0 != i.tmp.source_svg && (i.fn.vendors.createSvgImg(this),
            i.tmp.pushing && (this.img.loaded = !1))
        }
    }
    ,
    i.fn.particle.prototype.draw = function() {
        function e() {
            i.canvas.ctx.drawImage(r, a.x - t, a.y - t, 2 * t, 2 * t / a.img.ratio)
        }
        var a = this;
        if (void 0 != a.radius_bubble)
            var t = a.radius_bubble;
        else
            var t = a.radius;
        if (void 0 != a.opacity_bubble)
            var s = a.opacity_bubble;
        else
            var s = a.opacity;
        if (a.color.rgb)
            var n = "rgba(" + a.color.rgb.r + "," + a.color.rgb.g + "," + a.color.rgb.b + "," + s + ")";
        else
            var n = "hsla(" + a.color.hsl.h + "," + a.color.hsl.s + "%," + a.color.hsl.l + "%," + s + ")";
        switch (i.canvas.ctx.fillStyle = n,
        i.canvas.ctx.beginPath(),
        a.shape) {
        case "circle":
            i.canvas.ctx.arc(a.x, a.y, t, 0, 2 * Math.PI, !1);
            break;
        case "edge":
            i.canvas.ctx.rect(a.x - t, a.y - t, 2 * t, 2 * t);
            break;
        case "triangle":
            i.fn.vendors.drawShape(i.canvas.ctx, a.x - t, a.y + t / 1.66, 2 * t, 3, 2);
            break;
        case "polygon":
            i.fn.vendors.drawShape(i.canvas.ctx, a.x - t / (i.particles.shape.polygon.nb_sides / 3.5), a.y - t / .76, 2.66 * t / (i.particles.shape.polygon.nb_sides / 3), i.particles.shape.polygon.nb_sides, 1);
            break;
        case "star":
            i.fn.vendors.drawShape(i.canvas.ctx, a.x - 2 * t / (i.particles.shape.polygon.nb_sides / 4), a.y - t / 1.52, 2 * t * 2.66 / (i.particles.shape.polygon.nb_sides / 3), i.particles.shape.polygon.nb_sides, 2);
            break;
        case "image":
            if ("svg" == i.tmp.img_type)
                var r = a.img.obj;
            else
                var r = i.tmp.img_obj;
            r && e()
        }
        i.canvas.ctx.closePath(),
        i.particles.shape.stroke.width > 0 && (i.canvas.ctx.strokeStyle = i.particles.shape.stroke.color,
        i.canvas.ctx.lineWidth = i.particles.shape.stroke.width,
        i.canvas.ctx.stroke()),
        i.canvas.ctx.fill()
    }
    ,
    i.fn.particlesCreate = function() {
        for (var e = 0; e < i.particles.number.value; e++)
            i.particles.array.push(new i.fn.particle(i.particles.color,i.particles.opacity.value))
    }
    ,
    i.fn.particlesUpdate = function() {
        for (var e = 0; e < i.particles.array.length; e++) {
            var a = i.particles.array[e];
            if (i.particles.move.enable) {
                var t = i.particles.move.speed / 2;
                a.x += a.vx * t,
                a.y += a.vy * t
            }
            if (i.particles.opacity.anim.enable && (1 == a.opacity_status ? (a.opacity >= i.particles.opacity.value && (a.opacity_status = !1),
            a.opacity += a.vo) : (a.opacity <= i.particles.opacity.anim.opacity_min && (a.opacity_status = !0),
            a.opacity -= a.vo),
            a.opacity < 0 && (a.opacity = 0)),
            i.particles.size.anim.enable && (1 == a.size_status ? (a.radius >= i.particles.size.value && (a.size_status = !1),
            a.radius += a.vs) : (a.radius <= i.particles.size.anim.size_min && (a.size_status = !0),
            a.radius -= a.vs),
            a.radius < 0 && (a.radius = 0)),
            "bounce" == i.particles.move.out_mode)
                var s = {
                    x_left: a.radius,
                    x_right: i.canvas.w,
                    y_top: a.radius,
                    y_bottom: i.canvas.h
                };
            else
                var s = {
                    x_left: -a.radius,
                    x_right: i.canvas.w + a.radius,
                    y_top: -a.radius,
                    y_bottom: i.canvas.h + a.radius
                };
            switch (a.x - a.radius > i.canvas.w ? (a.x = s.x_left,
            a.y = Math.random() * i.canvas.h) : a.x + a.radius < 0 && (a.x = s.x_right,
            a.y = Math.random() * i.canvas.h),
            a.y - a.radius > i.canvas.h ? (a.y = s.y_top,
            a.x = Math.random() * i.canvas.w) : a.y + a.radius < 0 && (a.y = s.y_bottom,
            a.x = Math.random() * i.canvas.w),
            i.particles.move.out_mode) {
            case "bounce":
                a.x + a.radius > i.canvas.w ? a.vx = -a.vx : a.x - a.radius < 0 && (a.vx = -a.vx),
                a.y + a.radius > i.canvas.h ? a.vy = -a.vy : a.y - a.radius < 0 && (a.vy = -a.vy)
            }
            if (isInArray("grab", i.interactivity.events.onhover.mode) && i.fn.modes.grabParticle(a),
            (isInArray("bubble", i.interactivity.events.onhover.mode) || isInArray("bubble", i.interactivity.events.onclick.mode)) && i.fn.modes.bubbleParticle(a),
            (isInArray("repulse", i.interactivity.events.onhover.mode) || isInArray("repulse", i.interactivity.events.onclick.mode)) && i.fn.modes.repulseParticle(a),
            i.particles.line_linked.enable || i.particles.move.attract.enable)
                for (var n = e + 1; n < i.particles.array.length; n++) {
                    var r = i.particles.array[n];
                    i.particles.line_linked.enable && i.fn.interact.linkParticles(a, r),
                    i.particles.move.attract.enable && i.fn.interact.attractParticles(a, r),
                    i.particles.move.bounce && i.fn.interact.bounceParticles(a, r)
                }
        }
    }
    ,
    i.fn.particlesDraw = function() {
        i.canvas.ctx.clearRect(0, 0, i.canvas.w, i.canvas.h),
        i.fn.particlesUpdate();
        for (var e = 0; e < i.particles.array.length; e++) {
            var a = i.particles.array[e];
            a.draw()
        }
    }
    ,
    i.fn.particlesEmpty = function() {
        i.particles.array = []
    }
    ,
    i.fn.particlesRefresh = function() {
        cancelRequestAnimFrame(i.fn.checkAnimFrame),
        cancelRequestAnimFrame(i.fn.drawAnimFrame),
        i.tmp.source_svg = void 0,
        i.tmp.img_obj = void 0,
        i.tmp.count_svg = 0,
        i.fn.particlesEmpty(),
        i.fn.canvasClear(),
        i.fn.vendors.start()
    }
    ,
    i.fn.interact.linkParticles = function(e, a) {
        var t = e.x - a.x
          , s = e.y - a.y
          , n = Math.sqrt(t * t + s * s);
        if (n <= i.particles.line_linked.distance) {
            var r = i.particles.line_linked.opacity - n / (1 / i.particles.line_linked.opacity) / i.particles.line_linked.distance;
            if (r > 0) {
                var c = i.particles.line_linked.color_rgb_line;
                i.canvas.ctx.strokeStyle = "rgba(" + c.r + "," + c.g + "," + c.b + "," + r + ")",
                i.canvas.ctx.lineWidth = i.particles.line_linked.width,
                i.canvas.ctx.beginPath(),
                i.canvas.ctx.moveTo(e.x, e.y),
                i.canvas.ctx.lineTo(a.x, a.y),
                i.canvas.ctx.stroke(),
                i.canvas.ctx.closePath()
            }
        }
    }
    ,
    i.fn.interact.attractParticles = function(e, a) {
        var t = e.x - a.x
          , s = e.y - a.y
          , n = Math.sqrt(t * t + s * s);
        if (n <= i.particles.line_linked.distance) {
            var r = t / (1e3 * i.particles.move.attract.rotateX)
              , c = s / (1e3 * i.particles.move.attract.rotateY);
            e.vx -= r,
            e.vy -= c,
            a.vx += r,
            a.vy += c
        }
    }
    ,
    i.fn.interact.bounceParticles = function(e, a) {
        var t = e.x - a.x
          , i = e.y - a.y
          , s = Math.sqrt(t * t + i * i)
          , n = e.radius + a.radius;
        n >= s && (e.vx = -e.vx,
        e.vy = -e.vy,
        a.vx = -a.vx,
        a.vy = -a.vy)
    }
    ,
    i.fn.modes.pushParticles = function(e, a) {
        i.tmp.pushing = !0;
        for (var t = 0; e > t; t++)
            i.particles.array.push(new i.fn.particle(i.particles.color,i.particles.opacity.value,{
                x: a ? a.pos_x : Math.random() * i.canvas.w,
                y: a ? a.pos_y : Math.random() * i.canvas.h
            })),
            t == e - 1 && (i.particles.move.enable || i.fn.particlesDraw(),
            i.tmp.pushing = !1)
    }
    ,
    i.fn.modes.removeParticles = function(e) {
        i.particles.array.splice(0, e),
        i.particles.move.enable || i.fn.particlesDraw()
    }
    ,
    i.fn.modes.bubbleParticle = function(e) {
        function a() {
            e.opacity_bubble = e.opacity,
            e.radius_bubble = e.radius
        }
        function t(a, t, s, n, c) {
            if (a != t)
                if (i.tmp.bubble_duration_end) {
                    if (void 0 != s) {
                        var o = n - p * (n - a) / i.interactivity.modes.bubble.duration
                          , l = a - o;
                        d = a + l,
                        "size" == c && (e.radius_bubble = d),
                        "opacity" == c && (e.opacity_bubble = d)
                    }
                } else if (r <= i.interactivity.modes.bubble.distance) {
                    if (void 0 != s)
                        var v = s;
                    else
                        var v = n;
                    if (v != a) {
                        var d = n - p * (n - a) / i.interactivity.modes.bubble.duration;
                        "size" == c && (e.radius_bubble = d),
                        "opacity" == c && (e.opacity_bubble = d)
                    }
                } else
                    "size" == c && (e.radius_bubble = void 0),
                    "opacity" == c && (e.opacity_bubble = void 0)
        }
        if (i.interactivity.events.onhover.enable && isInArray("bubble", i.interactivity.events.onhover.mode)) {
            var s = e.x - i.interactivity.mouse.pos_x
              , n = e.y - i.interactivity.mouse.pos_y
              , r = Math.sqrt(s * s + n * n)
              , c = 1 - r / i.interactivity.modes.bubble.distance;
            if (r <= i.interactivity.modes.bubble.distance) {
                if (c >= 0 && "mousemove" == i.interactivity.status) {
                    if (i.interactivity.modes.bubble.size != i.particles.size.value)
                        if (i.interactivity.modes.bubble.size > i.particles.size.value) {
                            var o = e.radius + i.interactivity.modes.bubble.size * c;
                            o >= 0 && (e.radius_bubble = o)
                        } else {
                            var l = e.radius - i.interactivity.modes.bubble.size
                              , o = e.radius - l * c;
                            o > 0 ? e.radius_bubble = o : e.radius_bubble = 0
                        }
                    if (i.interactivity.modes.bubble.opacity != i.particles.opacity.value)
                        if (i.interactivity.modes.bubble.opacity > i.particles.opacity.value) {
                            var v = i.interactivity.modes.bubble.opacity * c;
                            v > e.opacity && v <= i.interactivity.modes.bubble.opacity && (e.opacity_bubble = v)
                        } else {
                            var v = e.opacity - (i.particles.opacity.value - i.interactivity.modes.bubble.opacity) * c;
                            v < e.opacity && v >= i.interactivity.modes.bubble.opacity && (e.opacity_bubble = v)
                        }
                }
            } else
                a();
            "mouseleave" == i.interactivity.status && a()
        } else if (i.interactivity.events.onclick.enable && isInArray("bubble", i.interactivity.events.onclick.mode)) {
            if (i.tmp.bubble_clicking) {
                var s = e.x - i.interactivity.mouse.click_pos_x
                  , n = e.y - i.interactivity.mouse.click_pos_y
                  , r = Math.sqrt(s * s + n * n)
                  , p = ((new Date).getTime() - i.interactivity.mouse.click_time) / 1e3;
                p > i.interactivity.modes.bubble.duration && (i.tmp.bubble_duration_end = !0),
                p > 2 * i.interactivity.modes.bubble.duration && (i.tmp.bubble_clicking = !1,
                i.tmp.bubble_duration_end = !1)
            }
            i.tmp.bubble_clicking && (t(i.interactivity.modes.bubble.size, i.particles.size.value, e.radius_bubble, e.radius, "size"),
            t(i.interactivity.modes.bubble.opacity, i.particles.opacity.value, e.opacity_bubble, e.opacity, "opacity"))
        }
    }
    ,
    i.fn.modes.repulseParticle = function(e) {
        function a() {
            var a = Math.atan2(d, p);
            if (e.vx = u * Math.cos(a),
            e.vy = u * Math.sin(a),
            "bounce" == i.particles.move.out_mode) {
                var t = {
                    x: e.x + e.vx,
                    y: e.y + e.vy
                };
                t.x + e.radius > i.canvas.w ? e.vx = -e.vx : t.x - e.radius < 0 && (e.vx = -e.vx),
                t.y + e.radius > i.canvas.h ? e.vy = -e.vy : t.y - e.radius < 0 && (e.vy = -e.vy)
            }
        }
        if (i.interactivity.events.onhover.enable && isInArray("repulse", i.interactivity.events.onhover.mode) && "mousemove" == i.interactivity.status) {
            var t = e.x - i.interactivity.mouse.pos_x
              , s = e.y - i.interactivity.mouse.pos_y
              , n = Math.sqrt(t * t + s * s)
              , r = {
                x: t / n,
                y: s / n
            }
              , c = i.interactivity.modes.repulse.distance
              , o = 100
              , l = clamp(1 / c * (-1 * Math.pow(n / c, 2) + 1) * c * o, 0, 50)
              , v = {
                x: e.x + r.x * l,
                y: e.y + r.y * l
            };
            "bounce" == i.particles.move.out_mode ? (v.x - e.radius > 0 && v.x + e.radius < i.canvas.w && (e.x = v.x),
            v.y - e.radius > 0 && v.y + e.radius < i.canvas.h && (e.y = v.y)) : (e.x = v.x,
            e.y = v.y)
        } else if (i.interactivity.events.onclick.enable && isInArray("repulse", i.interactivity.events.onclick.mode))
            if (i.tmp.repulse_finish || (i.tmp.repulse_count++,
            i.tmp.repulse_count == i.particles.array.length && (i.tmp.repulse_finish = !0)),
            i.tmp.repulse_clicking) {
                var c = Math.pow(i.interactivity.modes.repulse.distance / 6, 3)
                  , p = i.interactivity.mouse.click_pos_x - e.x
                  , d = i.interactivity.mouse.click_pos_y - e.y
                  , m = p * p + d * d
                  , u = -c / m * 1;
                c >= m && a()
            } else
                0 == i.tmp.repulse_clicking && (e.vx = e.vx_i,
                e.vy = e.vy_i)
    }
    ,
    i.fn.modes.grabParticle = function(e) {
        if (i.interactivity.events.onhover.enable && "mousemove" == i.interactivity.status) {
            var a = e.x - i.interactivity.mouse.pos_x
              , t = e.y - i.interactivity.mouse.pos_y
              , s = Math.sqrt(a * a + t * t);
            if (s <= i.interactivity.modes.grab.distance) {
                var n = i.interactivity.modes.grab.line_linked.opacity - s / (1 / i.interactivity.modes.grab.line_linked.opacity) / i.interactivity.modes.grab.distance;
                if (n > 0) {
                    var r = i.particles.line_linked.color_rgb_line;
                    i.canvas.ctx.strokeStyle = "rgba(" + r.r + "," + r.g + "," + r.b + "," + n + ")",
                    i.canvas.ctx.lineWidth = i.particles.line_linked.width,
                    i.canvas.ctx.beginPath(),
                    i.canvas.ctx.moveTo(e.x, e.y),
                    i.canvas.ctx.lineTo(i.interactivity.mouse.pos_x, i.interactivity.mouse.pos_y),
                    i.canvas.ctx.stroke(),
                    i.canvas.ctx.closePath()
                }
            }
        }
    }
    ,
    i.fn.vendors.eventsListeners = function() {
        "window" == i.interactivity.detect_on ? i.interactivity.el = window : i.interactivity.el = i.canvas.el,
        (i.interactivity.events.onhover.enable || i.interactivity.events.onclick.enable) && (i.interactivity.el.addEventListener("mousemove", function(e) {
            if (i.interactivity.el == window)
                var a = e.clientX
                  , t = e.clientY;
            else
                var a = e.offsetX || e.clientX
                  , t = e.offsetY || e.clientY;
            i.interactivity.mouse.pos_x = a,
            i.interactivity.mouse.pos_y = t,
            i.tmp.retina && (i.interactivity.mouse.pos_x *= i.canvas.pxratio,
            i.interactivity.mouse.pos_y *= i.canvas.pxratio),
            i.interactivity.status = "mousemove"
        }),
        i.interactivity.el.addEventListener("mouseleave", function(e) {
            i.interactivity.mouse.pos_x = null,
            i.interactivity.mouse.pos_y = null,
            i.interactivity.status = "mouseleave"
        })),
        i.interactivity.events.onclick.enable && i.interactivity.el.addEventListener("click", function() {
            if (i.interactivity.mouse.click_pos_x = i.interactivity.mouse.pos_x,
            i.interactivity.mouse.click_pos_y = i.interactivity.mouse.pos_y,
            i.interactivity.mouse.click_time = (new Date).getTime(),
            i.interactivity.events.onclick.enable)
                switch (i.interactivity.events.onclick.mode) {
                case "push":
                    i.particles.move.enable ? i.fn.modes.pushParticles(i.interactivity.modes.push.particles_nb, i.interactivity.mouse) : 1 == i.interactivity.modes.push.particles_nb ? i.fn.modes.pushParticles(i.interactivity.modes.push.particles_nb, i.interactivity.mouse) : i.interactivity.modes.push.particles_nb > 1 && i.fn.modes.pushParticles(i.interactivity.modes.push.particles_nb);
                    break;
                case "remove":
                    i.fn.modes.removeParticles(i.interactivity.modes.remove.particles_nb);
                    break;
                case "bubble":
                    i.tmp.bubble_clicking = !0;
                    break;
                case "repulse":
                    i.tmp.repulse_clicking = !0,
                    i.tmp.repulse_count = 0,
                    i.tmp.repulse_finish = !1,
                    setTimeout(function() {
                        i.tmp.repulse_clicking = !1
                    }, 1e3 * i.interactivity.modes.repulse.duration)
                }
        })
    }
    ,
    i.fn.vendors.densityAutoParticles = function() {
        if (i.particles.number.density.enable) {
            var e = i.canvas.el.width * i.canvas.el.height / 1e3;
            i.tmp.retina && (e /= 2 * i.canvas.pxratio);
            var a = e * i.particles.number.value / i.particles.number.density.value_area
              , t = i.particles.array.length - a;
            0 > t ? i.fn.modes.pushParticles(Math.abs(t)) : i.fn.modes.removeParticles(t)
        }
    }
    ,
    i.fn.vendors.checkOverlap = function(e, a) {
        for (var t = 0; t < i.particles.array.length; t++) {
            var s = i.particles.array[t]
              , n = e.x - s.x
              , r = e.y - s.y
              , c = Math.sqrt(n * n + r * r);
            c <= e.radius + s.radius && (e.x = a ? a.x : Math.random() * i.canvas.w,
            e.y = a ? a.y : Math.random() * i.canvas.h,
            i.fn.vendors.checkOverlap(e))
        }
    }
    ,
    i.fn.vendors.createSvgImg = function(e) {
        var a = i.tmp.source_svg
          , t = /#([0-9A-F]{3,6})/gi
          , s = a.replace(t, function(a, t, i, s) {
            if (e.color.rgb)
                var n = "rgba(" + e.color.rgb.r + "," + e.color.rgb.g + "," + e.color.rgb.b + "," + e.opacity + ")";
            else
                var n = "hsla(" + e.color.hsl.h + "," + e.color.hsl.s + "%," + e.color.hsl.l + "%," + e.opacity + ")";
            return n
        })
          , n = new Blob([s],{
            type: "image/svg+xml;charset=utf-8"
        })
          , r = window.URL || window.webkitURL || window
          , c = r.createObjectURL(n)
          , o = new Image;
        o.addEventListener("load", function() {
            e.img.obj = o,
            e.img.loaded = !0,
            r.revokeObjectURL(c),
            i.tmp.count_svg++
        }),
        o.src = c
    }
    ,
    i.fn.vendors.destroypJS = function() {
        cancelAnimationFrame(i.fn.drawAnimFrame),
        t.remove(),
        pJSDom = null
    }
    ,
    i.fn.vendors.drawShape = function(e, a, t, i, s, n) {
        var r = s * n
          , c = s / n
          , o = 180 * (c - 2) / c
          , l = Math.PI - Math.PI * o / 180;
        e.save(),
        e.beginPath(),
        e.translate(a, t),
        e.moveTo(0, 0);
        for (var v = 0; r > v; v++)
            e.lineTo(i, 0),
            e.translate(i, 0),
            e.rotate(l);
        e.fill(),
        e.restore()
    }
    ,
    i.fn.vendors.exportImg = function() {
        window.open(i.canvas.el.toDataURL("image/png"), "_blank")
    }
    ,
    i.fn.vendors.loadImg = function(e) {
        if (i.tmp.img_error = void 0,
        "" != i.particles.shape.image.src)
            if ("svg" == e) {
                var a = new XMLHttpRequest;
                a.open("GET", i.particles.shape.image.src),
                a.onreadystatechange = function(e) {
                    4 == a.readyState && (200 == a.status ? (i.tmp.source_svg = e.currentTarget.response,
                    i.fn.vendors.checkBeforeDraw()) : (console.log("Error pJS - Image not found"),
                    i.tmp.img_error = !0))
                }
                ,
                a.send()
            } else {
                var t = new Image;
                t.addEventListener("load", function() {
                    i.tmp.img_obj = t,
                    i.fn.vendors.checkBeforeDraw()
                }),
                t.src = i.particles.shape.image.src
            }
        else
            console.log("Error pJS - No image.src"),
            i.tmp.img_error = !0
    }
    ,
    i.fn.vendors.draw = function() {
        "image" == i.particles.shape.type ? "svg" == i.tmp.img_type ? i.tmp.count_svg >= i.particles.number.value ? (i.fn.particlesDraw(),
        i.particles.move.enable ? i.fn.drawAnimFrame = requestAnimFrame(i.fn.vendors.draw) : cancelRequestAnimFrame(i.fn.drawAnimFrame)) : i.tmp.img_error || (i.fn.drawAnimFrame = requestAnimFrame(i.fn.vendors.draw)) : void 0 != i.tmp.img_obj ? (i.fn.particlesDraw(),
        i.particles.move.enable ? i.fn.drawAnimFrame = requestAnimFrame(i.fn.vendors.draw) : cancelRequestAnimFrame(i.fn.drawAnimFrame)) : i.tmp.img_error || (i.fn.drawAnimFrame = requestAnimFrame(i.fn.vendors.draw)) : (i.fn.particlesDraw(),
        i.particles.move.enable ? i.fn.drawAnimFrame = requestAnimFrame(i.fn.vendors.draw) : cancelRequestAnimFrame(i.fn.drawAnimFrame))
    }
    ,
    i.fn.vendors.checkBeforeDraw = function() {
        "image" == i.particles.shape.type ? "svg" == i.tmp.img_type && void 0 == i.tmp.source_svg ? i.tmp.checkAnimFrame = requestAnimFrame(check) : (cancelRequestAnimFrame(i.tmp.checkAnimFrame),
        i.tmp.img_error || (i.fn.vendors.init(),
        i.fn.vendors.draw())) : (i.fn.vendors.init(),
        i.fn.vendors.draw())
    }
    ,
    i.fn.vendors.init = function() {
        i.fn.retinaInit(),
        i.fn.canvasInit(),
        i.fn.canvasSize(),
        i.fn.canvasPaint(),
        i.fn.particlesCreate(),
        i.fn.vendors.densityAutoParticles(),
        i.particles.line_linked.color_rgb_line = hexToRgb(i.particles.line_linked.color)
    }
    ,
    i.fn.vendors.start = function() {
        isInArray("image", i.particles.shape.type) ? (i.tmp.img_type = i.particles.shape.image.src.substr(i.particles.shape.image.src.length - 3),
        i.fn.vendors.loadImg(i.tmp.img_type)) : i.fn.vendors.checkBeforeDraw()
    }
    ,
    i.fn.vendors.eventsListeners(),
    i.fn.vendors.start()
};
Object.deepExtend = function(e, a) {
    for (var t in a)
        a[t] && a[t].constructor && a[t].constructor === Object ? (e[t] = e[t] || {},
        arguments.callee(e[t], a[t])) : e[t] = a[t];
    return e
}
,
window.requestAnimFrame = function() {
    return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function(e) {
        window.setTimeout(e, 1e3 / 60)
    }
}(),
window.cancelRequestAnimFrame = function() {
    return window.cancelAnimationFrame || window.webkitCancelRequestAnimationFrame || window.mozCancelRequestAnimationFrame || window.oCancelRequestAnimationFrame || window.msCancelRequestAnimationFrame || clearTimeout
}(),
window.pJSDom = [],
window.particlesJS = function(e, a) {
    "string" != typeof e && (a = e,
    e = "particles-js"),
    e || (e = "particles-js");
    var t = document.getElementById(e)
      , i = "particles-js-canvas-el"
      , s = t.getElementsByClassName(i);
    if (s.length)
        for (; s.length > 0; )
            t.removeChild(s[0]);
    var n = document.createElement("canvas");
    n.className = i,
    n.style.width = "100%",
    n.style.height = "100%";
    var r = document.getElementById(e).appendChild(n);
    null != r && pJSDom.push(new pJS(e,a))
}
,
window.particlesJS.load = function(e, a, t) {
    var i = new XMLHttpRequest;
    i.open("GET", a),
    i.onreadystatechange = function(a) {
        if (4 == i.readyState)
            if (200 == i.status) {
                var s = JSON.parse(a.currentTarget.response);
                window.particlesJS(e, s),
                t && t()
            } else
                console.log("Error pJS - XMLHttpRequest status: " + i.status),
                console.log("Error pJS - File config not found")
    }
    ,
    i.send()
}
;
