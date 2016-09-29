/*
    krpano Embedding Script
    krpano 1.19-pr7 (build 2016-09-09)
*/
function createPanoViewer(e) {
    function at(e) {
        return ("" + e).toLowerCase()
    }

    function ft(e, t) {
        return e[d](t) >= 0
    }

    function lt() {
        var t, r, i, s, o, u, a, f, l = n.location;
        l = l.search || l.hash;
        if (l) {
            t = ".html5.flash.wmode.mobilescale.fakedevice.",
                r = l[U](1)[I]("&");
            for (i = 0; i < r[D]; i++)
                s = r[i],
                o = s[d]("="),
                o == -1 && (o = s[D]),
                u = s[U](0, o),
                a = at(u),
                f = s[U](o + 1),
                t[d]("." + a + ".") >= 0 ? e[a] = f : a[C](0, 9) == "initvars." ? (e[_] || (e[_] = {}),
                    e[_][u[C](9)] = f) : e.addVariable(u, f)
        }
    }

    function ct(e) {
        return e[B] = lt,
            e
    }

    function ht() {
        function T() {
            var e, n, i, s, o, u, a;
            if (t.plugins) {
                e = t.plugins["Shockwave Flash"];
                if (typeof e == "object") {
                    n = e.description;
                    if (n) {
                        i = v,
                            t[R] && (s = t[R]["application/x-shockwave-flash"],
                                s && (s.enabledPlugin || (i = p)));
                        if (i) {
                            o = n[I](" ");
                            for (u = 0; u < o[D]; ++u) {
                                a = parseFloat(o[u]);
                                if (isNaN(a))
                                    continue;
                                return a
                            }
                        }
                    }
                }
            }
            if (r[tt])
                try {
                    e = new ActiveXObject("ShockwaveFlash.ShockwaveFlash");
                    if (e) {
                        n = e.GetVariable("$version");
                        if (n)
                            return parseFloat(n[I](" ")[1][I](",").join("."))
                    }
                } catch (f) {}
            return 0
        }

        function N() {
            var e, t, i = p,
                s = n[nt]("div");
            for (e = 0; e < 5; e++)
                if (typeof s.style[["p", "msP", "MozP", "WebkitP", "OP"][e] + "erspective"] != W) {
                    i = v,
                        e == 3 && r.matchMedia && (t = r.matchMedia("(-webkit-transform-3d)"),
                            t && (i = t.matches == v));
                    break
                }
            return i
        }

        function k(e) {
            var t, i, s = {};
            s[y] = e;
            if (r._krpWGL == v)
                return v;
            try {
                t = n[nt]("canvas");
                for (i = 0; i < 4; i++)
                    if (t.getContext([F, "experimental-webgl", "moz-webgl", "webkit-3d"][i], s))
                        return r._krpWGL = v,
                            v
            } catch (o) {}
            return p
        }
        var l, c, h, m, g, b, w, E, S, x;
        if (s > 0)
            return;
        l = p,
            c = p,
            h = p,
            c = k(e[M] && e[M][y] !== undefined ? e[M][y] : p);
        if (e.isDevice("iphone|ipad|ipod") && i[d]("opera mini") < 0)
            a = f = v,
            l = v;
        else {
            o = T(),
                o >= 10.1 && (u = v),
                l = N(),
                m = at(t.platform),
                g = 0,
                b = 0,
                w = 0,
                E = i[d]("firefox/"),
                E < 0 && (E = i[d]("gecko/")),
                E >= 0 && (g = parseInt(i[C](1 + i[d]("/", E)), 10)),
                h = !!r[Y],
                E = i[d](Y),
                E > 0 && (w = parseInt(i[C](E + 7), 10),
                    h = v),
                E = i[d](Z),
                E > 0 && (b = parseInt(i[C](E + 8), 10),
                    g >= 18 && (b = 4)),
                l && (b > 0 && b < 4 && (l = p),
                    g > 3 && g < 18 && b > 1 && (c = l = p),
                    c || (m[d](et) < 0 && g > 3 && b < 1 && (l = p),
                        h && w < 50 && (l = p)));
            if (l || c) {
                a = v,
                    S = i[d]("blackberry") >= 0 || i[d]("rim tablet") >= 0 || i[d]("bb10") >= 0,
                    x = (t.msMaxTouchPoints | 0) > 1;
                if (b >= 4 || S || x)
                    f = v
            }
        }
        s = 1 | l << 1 | c << 2 | h << 3
    }

    function pt(e) {
        function C(e) {
            function a() {
                r[m] ? (r[m]("DOMMouseScroll", c, p),
                    r[m]("mousewheel", c, p),
                    n[m]("mousedown", f, p),
                    n[m]("mouseup", l, p)) : (r.opera ? r.attachEvent(P, c) : r[P] = n[P] = c,
                    n.onmousedown = f,
                    n.onmouseup = l)
            }

            function f(e) {
                e || (e = r.event,
                        e[E] = e[J]),
                    u = e ? e[E] : T
            }

            function l(e) {
                var t, i, s, a, f, l, c, h;
                e || (e = r.event,
                        e[E] = e[J]),
                    t = 0,
                    i = o[D];
                for (t = 0; t < i; t++) {
                    s = o[t];
                    if (s) {
                        a = n[s.id];
                        if (a && s.needfix) {
                            f = a[x](),
                                l = a == e[E],
                                c = a == u,
                                h = e.clientX >= f.left && e.clientX < f.right && e.clientY >= f.top && e.clientY < f.bottom;
                            if ((l || c) && h == p)
                                try {
                                    a[z] && a[z](0, "mouseUp")
                                } catch (d) {}
                        }
                    }
                }
                return v
            }

            function c(t) {
                var i, u, a, f, l, c;
                t || (t = r.event,
                        t[E] = t[J]),
                    i = 0,
                    u = p,
                    t.wheelDelta ? (i = t.wheelDelta / 120,
                        r.opera && s && (i /= 4 / 3)) : t.detail && (i = -t.detail,
                        s == p && (i /= 3));
                if (i) {
                    a = 0,
                        f = o[D];
                    for (a = 0; a < f; a++) {
                        l = o[a];
                        if (l) {
                            c = n[l.id];
                            if (c && c == t[E]) {
                                try {
                                    c.jswheel ? c.jswheel(i) : c[w] ? c[w](i) : c[L] && (c[L](),
                                        c[w] && c[w](i))
                                } catch (h) {}
                                u = v;
                                break
                            }
                        }
                    }
                }
                e[V] == p && (u = p);
                if (u)
                    return t[st] && t[st](),
                        t[ut] && t[ut](),
                        t.cancelBubble = v,
                        t.cancel = v,
                        n[m] || (t.returnValue = p),
                        p
            }
            var i, s = at(t.appVersion)[d](et) >= 0,
                o = r._krpMW,
                u = T;
            o || (o = r._krpMW = new Array,
                    a()),
                i = e[b],
                o.push({
                    id: e.id,
                    needfix: s || !!r[Y] || i == "opaque" || i == "transparent"
                })
        }
        var i, s, o, u, a, f, l = encodeURIComponent,
            c = "",
            h = e.vars,
            y = e[j],
            N = e.id;
        for (;;) {
            s = n[S](N);
            if (!s)
                break;
            N += String.fromCharCode(48 + Math.floor(9 * Math.random())),
                e.id = N
        }
        e[b] && (y[b] = e[b]),
            e[k] && (y[k] = e[k]),
            e[K] !== undefined && (h[K] = e[K]),
            e[b] = at(y[b]),
            y.allowfullscreen = "true",
            y.allowscriptaccess = it,
            i = "browser.",
            c = i + "useragent=" + l(t.userAgent) + "&" + i + "location=" + l(r.location.href);
        for (i in h)
            c += "&" + l(i) + "=" + l(h[i]);
        i = _,
            h = e[i];
        if (h) {
            c += "&" + i + "=";
            for (i in h)
                c += "%26" + l(escape(i)) + "=" + l(escape(h[i]))
        }
        y.flashvars = c,
            e[A] && (y.base = e[A]),
            o = "",
            u = ' id="' + N + '" width="' + e.width + '" height="' + e.height + '" style="outline:none;" ',
            a = "_krpcb_" + N, !e[q] || (r[a] = function() {
                try {
                    delete r[a]
                } catch (t) {
                    r[a] = T
                }
                e[q](n[S](N))
            });
        if (t.plugins && t[R] && !r[tt]) {
            o = '<embed name="' + N + '"' + u + 'type="application/x-shockwave-flash" src="' + e.swf + '" ';
            for (i in y)
                o += i + '="' + y[i] + '" ';
            o += " />"
        } else {
            o = "<object" + u + 'classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"><param name="movie" value="' + e.swf + '" />';
            for (i in y)
                o += '<param name="' + i + '" value="' + y[i] + '" />';
            o += "</object>"
        }
        e[g].innerHTML = o,
            e.focus === v && (f = n[S](N),
                f && f.focus()),
            C(e)
    }

    function dt(e) {
        typeof embedpanoJS !== W ? embedpanoJS(e) : e[N]("krpano HTML5 Viewer not available!")
    }

    function vt(n, r) {
        var u, a, f, l;
        n == 1 ? (o >= 11.4 && (u = v,
                at(t.platform)[d](et) >= 0 && at(t.vendor)[d]("apple") >= 0 && (a = i[d]("webkit/"),
                    a > 0 && (a = parseFloat(i[C](a + 7)), !isNaN(a) && a > 0 && a < 534 && (u = p))),
                u && (e[b] == T && !e[j][b] ? e[b] = s & 8 ? "window" : "direct" : (f = ("" + e[b])[d]("-flash"),
                    f > 0 && (e[b] = e[b][C](0, f))))),
            pt(e)) : n == 2 ? dt(e) : (l = "",
            r < 2 && (l += "Adobe Flashplayer"),
            r == 0 && (l += " or<br/>"),
            r != 1 && (l += "HTML5 Browser with WebGL ",
                ft(at(e[Q]), F) || (l += "or CSS3D "),
                l += "support"),
            l += " required!",
            e[N](l))
    }

    function mt() {
        var t = 'Local usage with <span style="border:1px solid gray;padding:0px 3px;">file://</span> urls is limited due browser security restrictions!<br><br>Use a localhost server (like the <a href="http://krpano.com/tools/ktestingserver/#top" style="color:white;">krpano Testing Server</a>) for local testing!<br>Just start the krpano Testing Server and refresh this page.<br><br><a href="http://krpano.com/docu/localusage/#top" style="color:gray;font-style:italic;text-decoration:none;">More information...</a>';
        e[N](t)
    }

    function gt(e, t, n) {
        var r;
        try {
            r = new XMLHttpRequest,
                r.responseType = "text",
                r.open("GET", e, v),
                r.onreadystatechange = function() {
                    var e;
                    r.readyState === 4 && (e = r.status,
                        e == 0 && r.responseText || e == 200 ? t() : n())
                },
                r.send(T)
        } catch (i) {
            n()
        }
    }
    var t, n, r, i, s, o, u, a, f, l, c, h, p = !1,
        d = "indexOf",
        v = !0,
        m = "addEventListener",
        g = "targetelement",
        y = "failIfMajorPerformanceCaveat",
        b = "wmode",
        w = "externalMouseEvent",
        E = "target",
        S = "getElementById",
        x = "getBoundingClientRect",
        T = null,
        N = "onerror",
        C = "slice",
        k = "bgcolor",
        L = "enable_mousewheel_js_bugfix",
        A = "flashbasepath",
        O = "localfallback",
        M = "webglsettings",
        _ = "initvars",
        D = "length",
        P = "onmousewheel",
        H = "fallback",
        B = "passQueryParameters",
        j = "params",
        F = "webgl",
        I = "split",
        q = "onready",
        R = "mimeTypes",
        U = "substring",
        z = "externalMouseEvent2",
        W = "undefined",
        X = "basepath",
        V = "mwheel",
        $ = "flash",
        J = "srcElement",
        K = "xml",
        Q = "html5",
        G = "consolelog",
        Y = "chrome",
        Z = "android",
        et = "mac",
        tt = "ActiveXObject",
        nt = "createElement",
        rt = "never",
        it = "always",
        st = "stopPropagation",
        ot = "only",
        ut = "preventDefault";
    return t = navigator,
        n = document,
        r = window,
        i = at(t.userAgent),
        s = 0,
        o = 0,
        u = p,
        a = p,
        f = v,
        e || (e = {}),
        l = e[B] === v,
        e.swf || (e.swf = "krpano.swf"),
        e[K] === undefined && (e[K] = e.swf[I](".swf").join(".xml")),
        e.id || (e.id = "krpanoSWFObject"),
        e.width || (e.width = "100%"),
        e.height || (e.height = "100%"),
        e[k] || (e[k] = "#000000"),
        e[b] || (e[b] = T),
        e[E] || (e[E] = T),
        e[Q] || (e[Q] = "auto"),
        e[$] || (e[$] = T),
        e[V] === undefined && (e[V] = v),
        e.vars || (e.vars = {}),
        e[j] || (e[j] = {}),
        e[q] || (e[q] = T),
        e.mobilescale || (e.mobilescale = .5),
        e.fakedevice || (e.fakedevice = T),
        e[O] || (e[O] = "http://localhost:8090"),
        e[X] ? e[A] = e[X] : (c = "./",
            h = e.swf.lastIndexOf("/"),
            h >= 0 && (c = e.swf[C](0, h + 1)),
            e[X] = c),
        e.isDevice = function(e) {
            var t, n, r, s = "all",
                o = ["ipad", "iphone", "ipod", Z];
            for (t = 0; t < 4; t++)
                i[d](o[t]) >= 0 && (s += "|" + o[t]);
            e = at(e)[I]("|");
            if (e == T)
                return v;
            n = e[D];
            for (t = 0; t < n; t++) {
                r = e[t];
                if (s[d](r) >= 0)
                    return v
            }
            return p
        },
        e.addVariable = function(t, n) {
            t = at(t),
                t == "pano" || t == K ? e[K] = n : e.vars[t] = n
        },
        e.addParam = function(t, n) {
            e[j][at(t)] = n
        },
        e.useHTML5 = function(t) {
            e[Q] = t
        },
        e.isHTML5possible = function() {
            return ht(),
                a
        },
        e.isFlashpossible = function() {
            return ht(),
                u
        },
        e[N] || (e[N] = function(t) {
            var n = e[g];
            n ? n.innerHTML = '<table style="width:100%;height:100%;"><tr style="vertical-align:middle;text-align:center;"><td>ERROR:<br><br>' + t + "<br><br></td></tr></table>" : alert("ERROR: " + t)
        }),
        e.embed = function(t) {
            var i, o, f, c, h, m;
            t && (e[E] = t),
                e[g] = n[S](e[E]),
                e[g] ? (l && lt(),
                    e.focus === undefined && e[g][x] && (i = e[g][x](),
                        e.focus = i.top == 0 && i.left == 0 && i.right >= r.innerWidth && i.bottom >= r.innerHeight),
                    e[V] == p && (e.vars["control.disablewheel"] = v),
                    e[G] && (e.vars[G] = e[G]),
                    s == 0 && ht(),
                    o = at(e[Q]),
                    f = e[$],
                    f && (f = at(f),
                        f == "prefer" ? o = H : f == H ? o = "prefer" : f == ot ? o = rt : f == rt && (o = ot)),
                    c = 0,
                    h = 0,
                    m = a,
                    m && ft(o, F) && (m = s & 4),
                    o == rt ? (c = u ? 1 : 0,
                        h = 1) : ft(o, ot) ? (c = m ? 2 : 0,
                        h = 2) : ft(o, it) ? c = h = 2 : o == H ? c = u ? 1 : a ? 2 : 0 : c = m ? 2 : u ? 1 : 0,
                    c == 2 && at(location.href[C](0, 7)) == "file://" ? gt(location.href, function() {
                        vt(c, h)
                    }, function() {
                        var t, n = at(e[O]);
                        n == $ ? u ? vt(1, 0) : mt() : n == "none" ? vt(c, h) : n[d]("://") > 0 ? (t = new Image,
                            t[N] = mt,
                            t.onload = function() {
                                location.href = n + "/krpanotestingserverredirect.html?" + location.href
                            },
                            t.src = n + "/krpanotestingserver.png") : mt()
                    }) : vt(c, h)) : e[N]("No Embedding Target")
        },
        ct(e)
}

function removepano(e) {
    var t, n, r, i, s = document.getElementById(e);
    if (s) {
        t = window._krpMW;
        if (t)
            for (n = 0; n < t.length; n++) {
                r = t[n];
                if (r && r.id === e) {
                    t.splice(n, 1);
                    break
                }
            }
        s.unload && s.unload(),
            i = s.parentNode,
            i && i.removeChild(s)
    }
}

function embedpano(e) {
    createPanoViewer(e).embed()
};
/*
    krpano HTML5 Viewer
    krpano 1.19-pr7 (build 2016-09-09)
*/
var krpanoJS = {
    version: "1.19-pr7",
    build: "2016-09-09"
};

function embedhtml5(Wd, Lc) {
    function sd() {
        function G(a) {
            return ("" + a).toLowerCase()
        }

        function Qa(a, b) {
            if (!a) return a;
            var x = 0,
                d = 0,
                e, k = a.length,
                m;
            for (e = 0; e < k; e++)
                if (m = a.charCodeAt(e), 32 >= m) x++;
                else break;
            for (e = k - 1; 0 < e; e--)
                if (m = a.charCodeAt(e), 32 >= m) d++;
                else break;
            void 0 === b && (e = a.charAt(x), m = a.charAt(k - d - 1), ("'" == e && "'" == m || '"' == e && '"' == m) && 3 == a.split(e).length && (x++, d++));
            return a = a.slice(x, k - d)
        }

        function la(a) {
            return _[53] === typeof a ? a : 0 <= _[407].indexOf(String(a).toLowerCase())
        }

        function ka(a, b) {
            if (typeof a != b) {
                if (_[594] == b) return Number(a);
                if (_[53] == b) return la(a);
                if (_[1] == b) return null == a ? null : String(a)
            }
            return a
        }

        function oa(a) {
            return Number(a).toFixed(6)
        }

        function Ca(a, b, x, d) {
            a.__defineGetter__(b, x);
            void 0 !== d && a.__defineSetter__(b, d)
        }

        function zb(a, b, x) {
            a.__defineGetter__(b, function() {
                return a[x]
            });
            a.__defineSetter__(b, function(b) {
                a[x] = b
            })
        }

        function sa(a, b, x) {
            var d = "_" + b;
            a[d] = x;
            a.__defineGetter__(b, function() {
                return a[d]
            });
            a.__defineSetter__(b, function(b) {
                b = ka(b, typeof x);
                b != a[d] && (a[d] = b, a.haschanged = !0)
            })
        }

        function ta(a) {
            a && a.preventDefault()
        }

        function aa(a, b, x, d) {
            a && a.addEventListener(b, x, d)
        }

        function ia(a, b, x, d) {
            a && a.removeEventListener(b, x, d)
        }

        function xb(a, b, x, d, e) {
            b[a + _[326]](x, d, e)
        }

        function Fa(a) {
            var b = ca.createElement(1 == a ? "img" : 2 == a ? _[582] : "div");
            b && 1 == a && "off" != hd && (b.crossOrigin = hd);
            return b
        }

        function Mb(a) {
            return function() {
                return a.apply(a, arguments)
            }
        }

        function td(a) {
            return a.split("<").join("&lt;").split(">").join("&gt;")
        }

        function ua(a, b) {
            var x = "(" + (a >> 16 & 255) + "," + (a >> 8 & 255) + "," + (a & 255);
            void 0 === b && (b = 1 - (a >> 24 & 255) / 255);
            return (1 > b ? "rgba" + x + "," + b : "rgb" + x) + ")"
        }

        function ue(a) {
            return a.split("[").join("<").split("<<").join("[").split("]").join(">").split(">>").join("]")
        }

        function id(a, b) {
            a = Number(a);
            b = Number(b);
            return a - 360 * Math.round((a - b) / 360)
        }

        function Mc(a) {
            if (a) {
                var b = a.indexOf("?");
                0 <= b && (a = a.slice(0, b));
                b = a.indexOf("#");
                0 <= b && (a = a.slice(0, b))
            }
            return a
        }

        function Wd(a) {
            a = Mc(a);
            var b = a.lastIndexOf("/"),
                x = a.lastIndexOf("\\");
            x > b && (b = x);
            return a.slice(b + 1)
        }

        function ud(a, b) {
            var x = String(a).charCodeAt(0);
            return 48 <= x && 57 >= x ? (va(3, b + _[167]), !1) : !0
        }

        function sd(a, b) {
            for (var x = "", d = 0, e = 1, k = 0, m = 0; 1 == e && 0 == d;) {
                var g, w = a.indexOf("*", k),
                    x = "";
                0 > w ? (w = a.length, d = 1) : (x = a.indexOf("*", w + 1), 0 > x && (x = a.length), g = x - (w + 1), x = a.substr(w + 1, g));
                g = w - k;
                0 < g && b.substr(m, d ? void 0 : g) != a.substr(k, g) && (e = 0);
                k = w + 1;
                "" != x && (m = b.indexOf(x, m), 0 > m && (e = 0))
            }
            return !!e
        }

        function bb(a) {
            var b = Db ? Db.interruptionevents : "";
            if (a)
                if (0 <= a.indexOf(_[63])) {
                    if (0 > b.indexOf(_[581])) return
                } else if (0 <= a.indexOf("key")) {
                if (0 > b.indexOf(_[467])) return
            } else if (0 <= a.indexOf("pano.") && 0 > b.indexOf(_[296])) return;
            kc = Ja()
        }

        function lc(a, b, x, d) {
            for (; 32 >= a.charCodeAt(b);) b++;
            for (; 32 >= a.charCodeAt(x - 1);) x--;
            var e = a.charCodeAt(b);
            if (37 == e) a = S(a.slice(b + 1, x), d);
            else if (103 == e && "get(" == a.slice(b, b + 4)) {
                for (b += 4; 32 >= a.charCodeAt(b);) b++;
                for (x = a.lastIndexOf(")"); 32 >= a.charCodeAt(x - 1);) x--;
                a = S(a.slice(b, x), d)
            } else 99 == e && "calc(" == a.slice(b, b + 5) ? a = S(a.slice(b, x), d) : (d = a.charCodeAt(b), 39 != d && 34 != d || d != a.charCodeAt(x - 1) || (b++, x--), a = a.slice(b, x));
            return a
        }

        function vd(a) {
            var b = [];
            if (null == a || void 0 == a) return b;
            var d, f = 0,
                e, k, m = 0;
            a = G(a);
            e = a.length;
            for (d = 0; d < e; d++) k = a.charCodeAt(d), 40 == k ? m++ : 41 == k ? m-- : 46 == k && 0 == m && (b.push(a.slice(f, d)), f = d + 1);
            b.push(a.slice(f));
            return b
        }

        function ya(a, b) {
            var d = !1;
            a = G(a);
            var f, e, k, m;
            k = jd[a];
            null != k && void 0 !== k && "" != k && (uc(k, null, b), d = !0);
            m = jd.getArray();
            e = m.length;
            for (f = 0; f < e; f++)
                if (k = m[f]) k = k[a], null != k && void 0 !== k && "" != k && (uc(k, null, b), d = !0);
            return d
        }

        function Y(a, b, d, f, e) {
            if (b && _[1] == typeof b) {
                var k = b.slice(0, 4);
                "get:" == k ? b = S(b.slice(4)) : "calc" == k && 58 == b.charCodeAt(4) && (b = Z.calc(null, b.slice(5)))
            }
            var k = null,
                m, g = vd(a);
            m = g.length;
            if (1 == m && f && (k = g[0], void 0 !== f[k])) {
                f[k] = _[53] == typeof f[k] ? la(b) : b;
                return
            }
            var w = l,
                k = null;
            1 < m && (k = g[m - 1]);
            for (a = 0; a < m; a++) {
                var Da = g[a],
                    r = a == m - 1,
                    A = null,
                    p = Da.indexOf("[");
                0 < p && (A = lc(Da, p + 1, Da.length - 1, f), Da = Da.slice(0, p));
                p = !1;
                if (void 0 === w[Da]) {
                    if (d) break;
                    r || (null == A ? w[Da] = new Ib : (w[Da] = new ub(Ib), p = !0))
                } else p = !0;
                if (p && 0 == r && w[Da] && 1 == w[Da].isArray && null != A)
                    if (r = null, w = w[Da], r = d ? w.getItem(A) : w.createItem(A)) {
                        if (a == m - 2 && "name" == k) {
                            b = G(b);
                            A != b && (null == b || "null" == b || "" == b ? w.removeItem(A) : w.renameItem(A, b));
                            break
                        }
                        w = r;
                        continue
                    } else break;
                if (r) w[Da] = 1 == e ? b : ka(b, typeof w[Da]);
                else if (w = w[Da], null == w) break
            }
        }

        function Xd(a) {
            if (a && "null" != a) {
                if (_[1] == typeof a) {
                    var b = a.split("&"),
                        d = b.length,
                        f;
                    a = {};
                    for (f = 0; f < d; f++) {
                        var e = b[f].split("=");
                        a[e[0]] = e[1]
                    }
                }
                for (var k in a) "xml" != k && Y(k, a[k])
            }
        }

        function S(a, b, d) {
            if (a && "calc(" == ("" + a).slice(0, 5)) return Z.calc(null, a.slice(5, a.lastIndexOf(")")));
            var f, e, k = vd(a);
            f = k.length;
            if (1 == f && _[359] == k[0]) return b ? b._type + "[" + b.name + "]" : "";
            if (1 == f && b && (e = k[0], b.hasOwnProperty(e))) return b[e];
            var m = l;
            for (a = 0; a < f; a++) {
                e = k[a];
                var g = a == f - 1,
                    w = null,
                    Da = e.indexOf("[");
                0 < Da && (w = lc(e, Da + 1, e.length - 1, b), e = e.slice(0, Da));
                if (m && void 0 !== m[e]) {
                    if (null != w && (Da = m[e]) && Da.isArray)
                        if (e = Da.getItem(w)) {
                            if (g) return e;
                            m = e;
                            continue
                        } else break;
                    if (g) return m[e];
                    m = m[e]
                } else break
            }
            return !0 === d ? void 0 : null
        }

        function uc(a, b, d) {
            Z.callaction(a, b, d)
        }

        function Qe(a, b, d) {
            uc(a, b ? S(b) : null, d ? la(d) : null)
        }

        function va(a, b) {
            !Jd && (0 < a || l.debugmode) && (b = ["DEBUG", "INFO", _[518], "ERROR", _[395]][a] + ": " + b, V.log(b), 2 < a && l.showerrors && setTimeout(function() {
                try {
                    V.showlog(!0)
                } catch (a) {}
            }, 500))
        }

        function cb(a, b) {
            if (!Jd) {
                a = "" + a;
                var x = 0 < G(a).indexOf("load");
                a = td(a).split("[br]").join("<br/>");
                var f = Ga.createItem(_[473]),
                    e = Ga.createItem(_[505]);
                f.sprite || (f.create(), V.controllayer.appendChild(f.sprite));
                e.sprite || (e.create(), V.controllayer.appendChild(e.sprite));
                f.imagewidth = 1;
                f.imageheight = 1;
                f.loaded = !0;
                f.handcursor = !1;
                f.align = _[84];
                f.width = "100%";
                f.height = "100%";
                f.alpha = .5;
                f.keep = !0;
                f = f.sprite.style;
                f.backgroundColor = _[38];
                f.zIndex = 99999998;
                x && (e.visible = !1);
                e.imagewidth = 1;
                e.imageheight = 1;
                e.loaded = !0;
                e.handcursor = !1;
                e.align = _[85];
                e.y = 0;
                e.width = "105%";
                var k = d.ie || d.android ? -2 : 2;
                e.height = k + 46 / ba;
                e.keep = !0;
                f = e.sprite.style;
                f.backgroundColor = _[38];
                f.color = _[54];
                f.fontFamily = d.realDesktop && !d.ie ? _[30] : _[20];
                f.fontSize = "12px";
                f.margin = "-2px";
                f.border = _[289];
                b || (b = _[309]);
                e.sprite.innerHTML = _[177] + b + "<br/>" + a + _[336];
                f.zIndex = 99999999;
                f[Sb] = _[227];
                e.jsplugin = {
                    onresize: function(a, b) {
                        var d = e.sprite.childNodes[0].clientHeight;
                        e.height = k + Math.max(46, d) / ba;
                        0 >= d && (e.imageheight = 1)
                    }
                };
                da.disablewheel = !0;
                da.touchzoom = !1;
                da.usercontrol = !1;
                setTimeout(function() {
                    try {
                        e.visible = !0
                    } catch (a) {}
                }, x ? 500 : 10)
            }
        }

        function Re() {
            Ya.removeelements(!0);
            Yd.stop();
            eb.unregister();
            fb.unload();
            V.remove()
        }

        function Se() {
            this.caller = this.args = this.cmd = null
        }

        function Ab(a, b, d) {
            var f = null;
            if (null == a || "" == a) return null;
            for (var e = 0, k = 0, m = 0, g = 0, w = 0, l = 0, r = 0, A = 0, p = "", p = 0, p = a.charCodeAt(w); 0 < p && 32 >= p || 59 == p;) w++, p = a.charCodeAt(w);
            for (var v = Te, u = 0, k = a.length, e = w; e < k; e++)
                if (p = a.charCodeAt(e), 0 == A && 0 == r && 40 == p) m++;
                else if (0 == A && 0 == r && 41 == p) {
                if (g++, m == g) {
                    l = e + 1;
                    p = a.slice(w, l);
                    v[u++] = p;
                    w = l;
                    for (p = a.charCodeAt(w); 0 < p && 32 >= p;) w++, p = a.charCodeAt(w);
                    p = a.charCodeAt(w);
                    if (59 != p) {
                        l = k;
                        break
                    }
                    w++;
                    for (p = a.charCodeAt(w); 59 == p || 0 < p && 32 >= p;) w++, p = a.charCodeAt(w);
                    e = w
                }
            } else 34 == p ? 0 == r ? r = 1 : 1 == r && (r = 0) : 39 == p ? 0 == r ? r = 2 : 2 == r && (r = 0) : 91 == p && 0 == r ? A++ : 93 == p && 0 == r && A--;
            l != k && (p = a.slice(w, k), 0 < p.length && (v[u++] = p));
            k = u;
            for (e = 0; e < k; e++)
                if (p = v[e], r = p.indexOf("["), a = p.indexOf("]"), m = p.indexOf("("), 0 < r && 0 < a && m > r && m < a && (m = p.indexOf("(", a)), g = a = null, 0 < m ? (a = p.slice(0, m), g = Qa(p.slice(m + 1, p.lastIndexOf(")")), !1), 0 >= g.length && (g = null)) : (a = p, g = null), a = Qa(a), "//" != a.slice(0, 2)) {
                    w = [];
                    if (null != g) {
                        for (var l = g.length, m = 0, n = u = -1, y = r = 0, p = null, A = 0; A < l; A++) p = g.charCodeAt(A), 0 == r && 40 == p ? m++ : 0 == r && 41 == p ? m-- : 34 == p ? 1 == r && 0 <= u ? (u = -1, r = 0) : 0 == r && (u = A, r = 1) : 39 == p && (2 == r && 0 <= n ? (n = -1, r = 0) : 0 == r && (n = A, r = 2)), 44 == p && 0 == m && 0 == r && (p = Qa(g.slice(y, A)), w.push(p), y = A + 1);
                        0 == m && (p = Qa(g.slice(y, A)), w.push(p))
                    }
                    null == f && (f = []);
                    m = new Se;
                    m.cmd = d ? a : G(a);
                    m.args = w;
                    m.caller = b;
                    f.push(m)
                }
            return f
        }

        function vc() {
            this.z = this.y = this.x = 0
        }

        function Ka() {
            var a = _[132] !== typeof Float32Array ? new Float32Array(16) : Array(16);
            a[0] = a[5] = a[10] = a[15] = 1;
            a[1] = a[2] = a[3] = a[4] = a[6] = a[7] = a[8] = a[9] = a[11] = a[12] = a[13] = a[14] = 0;
            return a
        }

        function ve(a, b, d, f, e, k, m, g, w, l, r, A, p, v, u, n, y) {
            a[0] = b;
            a[1] = d;
            a[2] = f;
            a[3] = e;
            a[4] = k;
            a[5] = m;
            a[6] = g;
            a[7] = w;
            a[8] = l;
            a[9] = r;
            a[10] = A;
            a[11] = p;
            a[12] = v;
            a[13] = u;
            a[14] = n;
            a[15] = y
        }

        function Nb(a, b, d, f, e, k, m, g, w, l) {
            a[0] = b;
            a[1] = d;
            a[2] = f;
            a[3] = 0;
            a[4] = e;
            a[5] = k;
            a[6] = m;
            a[7] = 0;
            a[8] = g;
            a[9] = w;
            a[10] = l;
            a[11] = 0;
            a[12] = 0;
            a[13] = 0;
            a[14] = 0;
            a[15] = 1
        }

        function Kd(a, b) {
            a[0] = b[0];
            a[1] = b[1];
            a[2] = b[2];
            a[3] = b[3];
            a[4] = b[4];
            a[5] = b[5];
            a[6] = b[6];
            a[7] = b[7];
            a[8] = b[8];
            a[9] = b[9];
            a[10] = b[10];
            a[11] = b[11];
            a[12] = b[12];
            a[13] = b[13];
            a[14] = b[14];
            a[15] = b[15]
        }

        function mc(a, b) {
            var d = b[0],
                f = b[1],
                e = b[2],
                k = b[3],
                m = b[4],
                g = b[5],
                w = b[6],
                l = b[7],
                r = b[8],
                A = b[9],
                p = b[10],
                v = b[11],
                u = b[12],
                n = b[13],
                y = b[14],
                I = b[15],
                B = a[0],
                C = a[1],
                z = a[2],
                h = a[3];
            a[0] = B * d + C * m + z * r + h * u;
            a[1] = B * f + C * g + z * A + h * n;
            a[2] = B * e + C * w + z * p + h * y;
            a[3] = B * k + C * l + z * v + h * I;
            B = a[4];
            C = a[5];
            z = a[6];
            h = a[7];
            a[4] = B * d + C * m + z * r + h * u;
            a[5] = B * f + C * g + z * A + h * n;
            a[6] = B * e + C * w + z * p + h * y;
            a[7] = B * k + C * l + z * v + h * I;
            B = a[8];
            C = a[9];
            z = a[10];
            h = a[11];
            a[8] = B * d + C * m + z * r + h * u;
            a[9] = B * f + C * g + z * A + h * n;
            a[10] = B * e + C * w + z * p + h * y;
            a[11] = B * k + C * l + z * v + h * I;
            B = a[12];
            C = a[13];
            z = a[14];
            h = a[15];
            a[12] = B * d + C * m + z * r + h * u;
            a[13] = B * f + C * g + z * A + h * n;
            a[14] = B * e + C * w + z * p + h * y;
            a[15] = B * k + C * l + z * v + h * I
        }

        function hf(a, b) {
            var d = a[0],
                f = a[1],
                e = a[2],
                k = a[3],
                m = a[4],
                g = a[5],
                w = a[6],
                l = a[7],
                r = a[8],
                A = a[9],
                p = a[10],
                v = a[11],
                u = a[12],
                n = a[13],
                y = a[14],
                I = a[15],
                B = b[0],
                C = b[1],
                z = b[2],
                h = b[3],
                c = b[4],
                F = b[5],
                E = b[6],
                N = b[7],
                t = b[8],
                O = b[9],
                R = b[10],
                K = b[11],
                Ba = b[12],
                ea = b[13],
                P = b[14],
                G = b[15];
            a[0] = B * d + C * m + z * r + h * u;
            a[1] = B * f + C * g + z * A + h * n;
            a[2] = B * e + C * w + z * p + h * y;
            a[3] = B * k + C * l + z * v + h * I;
            a[4] = c * d + F * m + E * r + N * u;
            a[5] = c * f + F * g + E * A + N * n;
            a[6] = c * e + F * w + E * p + N * y;
            a[7] = c * k + F * l + E * v + N * I;
            a[8] = t * d + O * m + R * r + K * u;
            a[9] = t * f + O * g + R * A + K * n;
            a[10] = t * e + O * w + R * p + K * y;
            a[11] = t * k + O * l + R * v + K * I;
            a[12] = Ba * d + ea * m + P * r + G * u;
            a[13] = Ba * f + ea * g + P * A + G * n;
            a[14] = Ba * e + ea * w + P * p + G * y;
            a[15] = Ba * k + ea * l + P * v + G * I
        }

        function Ue(a, b, d, f) {
            ve(a, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, b, d, f, 1)
        }

        function Nc(a, b, d, f) {
            var e = a[3],
                k = a[7],
                m = a[11],
                g = a[15];
            a[0] += e * b;
            a[1] += e * d;
            a[2] += e * f;
            a[4] += k * b;
            a[5] += k * d;
            a[6] += k * f;
            a[8] += m * b;
            a[9] += m * d;
            a[10] += m * f;
            a[12] += g * b;
            a[13] += g * d;
            a[14] += g * f
        }

        function Ld(a, b) {
            var d = b[0],
                f = b[1],
                e = b[2],
                k = b[4],
                m = b[5],
                g = b[6],
                w = b[8],
                l = b[9],
                r = b[10],
                A = a[0],
                p = a[1],
                v = a[2];
            a[0] = A * d + p * k + v * w;
            a[1] = A * f + p * m + v * l;
            a[2] = A * e + p * g + v * r;
            A = a[4];
            p = a[5];
            v = a[6];
            a[4] = A * d + p * k + v * w;
            a[5] = A * f + p * m + v * l;
            a[6] = A * e + p * g + v * r;
            A = a[8];
            p = a[9];
            v = a[10];
            a[8] = A * d + p * k + v * w;
            a[9] = A * f + p * m + v * l;
            a[10] = A * e + p * g + v * r;
            A = a[12];
            p = a[13];
            v = a[14];
            a[12] = A * d + p * k + v * w;
            a[13] = A * f + p * m + v * l;
            a[14] = A * e + p * g + v * r
        }

        function Zd(a, b, d, f) {
            var e, k, m;
            e = d * W;
            d = Math.cos(e);
            k = Math.sin(e);
            e = -(b - 90) * W;
            b = Math.cos(e);
            m = Math.sin(e);
            e = -f * W;
            f = Math.cos(e);
            e = Math.sin(e);
            Nb(a, b * f - m * k * e, b * e + m * k * f, -m * d, -d * e, d * f, k, m * f + b * k * e, m * e - b * k * f, b * d)
        }

        function Ve(a, b, d) {
            d = -d * W;
            var f = Math.cos(d);
            d = Math.sin(d);
            0 == b ? Nb(a, 1, 0, 0, 0, f, d, 0, -d, f) : 1 == b ? Nb(a, f, 0, -d, 0, 1, 0, d, 0, f) : Nb(a, f, d, 0, -d, f, 0, 0, 0, 1)
        }

        function we(a, b, d, f, e) {
            var k, m, g;
            e && (f = -f, d = -d, b = -b);
            k = -f * W;
            f = Math.cos(k);
            m = Math.sin(k);
            k = -d * W;
            d = Math.cos(k);
            g = Math.sin(k);
            k = -b * W;
            b = Math.cos(k);
            k = Math.sin(k);
            e ? Nb(a, d * b - g * m * k, d * k + g * m * b, -g * f, -f * k, f * b, m, g * b + d * m * k, g * k - d * m * b, d * f) : Nb(a, b * d + k * m * g, k * f, -b * g + k * m * d, -k * d + b * m * g, b * f, k * g + b * m * d, f * g, -m, f * d)
        }

        function xe(a, b) {
            var d = b[0],
                f = b[1],
                e = b[2],
                k = b[4],
                m = b[5],
                g = b[6],
                w = b[8],
                l = b[9],
                r = b[10],
                A = 1 / (d * m * r + f * g * w + k * l * e - w * m * e - k * f * r - l * g * d);
            Nb(a, (m * r - l * g) * A, (-f * r + l * e) * A, (f * g - m * e) * A, (-k * r + w * g) * A, (d * r - w * e) * A, (-d * g + k * e) * A, (k * l - w * m) * A, (-d * l + w * f) * A, (d * m - k * f) * A)
        }

        function Md(a, b) {
            var d = b.x,
                f = b.y,
                e = b.z;
            b.x = d * a[0] + f * a[4] + e * a[8];
            b.y = d * a[1] + f * a[5] + e * a[9];
            b.z = d * a[2] + f * a[6] + e * a[10]
        }

        function $d(a, b) {
            var d = b[0],
                f = b[1],
                e = b[2];
            b[0] = d * a[0] + f * a[4] + e * a[8];
            b[1] = d * a[1] + f * a[5] + e * a[9];
            b[2] = d * a[2] + f * a[6] + e * a[10]
        }

        function bc(a) {
            return d.fractionalscaling ? Math.round(a * (d.pixelratio + 1E-7)) / d.pixelratio : Math.round(a)
        }

        function nc(a, b, d, f) {
            a = ("" + a).split(d);
            f = f ? f : [0, 0, 0, 0];
            d = a.length;
            4 == d ? (f[0] = a[0] * b + .5 | 0, f[1] = a[1] * b + .5 | 0, f[2] = a[2] * b + .5 | 0, f[3] = a[3] * b + .5 | 0) : 3 == d ? (f[0] = a[0] * b + .5 | 0, f[1] = f[3] = a[1] * b + .5 | 0, f[2] = a[2] * b + .5 | 0) : 2 == d ? (f[0] = f[2] = a[0] * b + .5 | 0, f[1] = f[3] = a[1] * b + .5 | 0) : f[0] = f[1] = f[2] = f[3] = a[0] * b + .5 | 0;
            return f
        }

        function ae(a) {
            var b = a && a._poly;
            b && (b.setAttribute("fill", !0 === a.polyline ? "none" : ua(a.fillcolor, a.fillalpha)), b.setAttribute(_[600], ua(a.bordercolor, a.borderalpha)), b.setAttribute(_[347], a.borderwidth * ba))
        }

        function We(a) {
            var b = t.r_rmatrix,
                d = t.r_zoom,
                f = t.r_zoff,
                e = .5 * Ta,
                k = .5 * Ea + t.r_yoff,
                m = t._stereographic ? 10 - f : 1 - f * (1 - Math.min(t.fisheye * t.fisheye, 1)),
                g = a._poly;
            if (!g) {
                var w = V.svglayer;
                w || (w = document.createElementNS(_[99], "svg"), w.setAttribute(_[64], "100%"), w.setAttribute(_[17], "100%"), w.style.position = _[0], w.style.left = 0, w.style.top = 0, w.style.display = ja.stereo ? "none" : "", V.svglayer = w, V.hotspotlayer.appendChild(w));
                g = document.createElementNS(_[99], la(a.polyline) ? _[142] : _[528]);
                w.appendChild(g);
                g.kobject = a;
                a._poly = g;
                ae(a);
                g.style.opacity = Number(a.DATA.alpha) * (a.keep ? 1 : wc);
                a._assignEvents(g);
                setTimeout(function() {
                    a.loading = !1;
                    a.loaded = !0;
                    Z.callaction(a.onloaded, a)
                }, 7)
            }
            var w = a.point.getArray(),
                l = w.length,
                r = [];
            if (1 < l && a.DATA.visible && 0 == ja.stereo) {
                var A, p, v, u = new vc,
                    n = new vc,
                    y;
                p = w[l - 1];
                v = (180 - Number(p.ath)) * W;
                p = Number(p.atv) * W;
                u.x = 1E3 * Math.cos(p) * Math.cos(v);
                u.z = 1E3 * Math.cos(p) * Math.sin(v);
                u.y = 1E3 * Math.sin(p);
                Md(b, u);
                for (A = 0; A < l; A++) p = w[A], v = (180 - Number(p.ath)) * W, p = Number(p.atv) * W, n.x = 1E3 * Math.cos(p) * Math.cos(v), n.z = 1E3 * Math.cos(p) * Math.sin(v), n.y = 1E3 * Math.sin(p), Md(b, n), n.z >= m ? (u.z >= m || (y = (m - u.z) / (n.z - u.z), p = d / (m + f), v = (u.x + (n.x - u.x) * y) * p + e, p = (u.y + (n.y - u.y) * y) * p + k, r.push(v.toFixed(2) + "," + p.toFixed(2))), p = d / (n.z + f), v = n.x * p + e, p = n.y * p + k, r.push(v.toFixed(2) + "," + p.toFixed(2))) : u.z >= m && (y = (m - n.z) / (u.z - n.z), p = d / (m + f), v = (n.x + (u.x - n.x) * y) * p + e, p = (n.y + (u.y - n.y) * y) * p + k, r.push(v.toFixed(2) + "," + p.toFixed(2))), u.x = n.x, u.y = n.y, u.z = n.z;
                0 == a.polyline && 2 < r.length && r.push(r[0]);
                g.style.pointerEvents = a.DATA.enabled ? _[300] : "none";
                g.style.cursor = a.DATA.handcursor ? _[10] : _[6];
                g.style.visibility = a.DATA.visible ? _[16] : _[7]
            }
            g.setAttribute(_[569], r.join(" "))
        }

        function Xe(a, b) {
            var d = 0,
                f, e, k;
            if (a && b) {
                d = a.DATA.zorder;
                f = b.DATA.zorder;
                e = null == d || isNaN(d);
                k = null == f || isNaN(f);
                if (d == f || e && k)
                    if (d = a.DATA.depth, f = b.DATA.depth, e = null == d || isNaN(d), k = null == f || isNaN(f), d == f || e && k) d = a.index, f = b.index, e = k = !1;
                d = e ? -1 : k ? 1 : d - f
            }
            return d
        }

        function Nd(a, b) {
            if (void 0 === b && kd) {
                var x = Ua.getArray();
                x.sort(Xe);
                var f = x.length,
                    e;
                for (e = 0; e < f; e++) {
                    var k = x[e];
                    k && (k.index = e)
                }
                kd = !1
            }
            var x = Ua.getArray(),
                f = x.length,
                m;
            e = t.r_rmatrix;
            var k = Ta,
                g = Ea,
                w = ba,
                l = .5 * k,
                r = .5 * g,
                A = t.r_zoom,
                p = t.r_hlookat + Number(J.viewoffset),
                v = t.r_vlookat,
                u = t.r_vlookatA,
                n = t.r_yoff,
                y = t.r_zoff,
                I = t._camroll;
            m = t._stereographic;
            var B;
            B = 1 * (1 + y / 1E3);
            var C = 50;
            0 < y && (m ? C -= y : (C = 20 - y, -125 > C && (C = -125)));
            var z = 0,
                h = 0;
            m = 0;
            void 0 !== b && (m = b, f = m + 1);
            var c = Ob,
                F = d.realDesktop && 250 > A ? 1.5 : 0,
                E = Ye,
                N = wf;
            E[1] = l;
            E[5] = ye;
            E[9] = oa(p);
            E[15] = c + "," + c + "," + c;
            var X = qb,
                O = new vc,
                R = null;
            if (!ja.stereo)
                for (; m < f; m++) {
                    var K = x[m];
                    if (K && K._ready) {
                        var G = null == K.DATA.url && 0 < K.point.count,
                            R = null;
                        if (!G) {
                            if (K.DATA.webGL) continue;
                            R = K.sprite;
                            if (!R) continue
                        }
                        0 != K.haschanged_flags && K.processUpdates();
                        var ea = K.getparsed(),
                            R = R ? R.style : null,
                            P = Number(K.DATA.alpha) * (K.keep ? 1 : wc);
                        R && (R.opacity = P);
                        K._poly && (K._poly.style.opacity = P);
                        P = a || K.poschanged || K.forceupdate;
                        if (G) P && (We(K), K.poschanged = !1);
                        else if (K.DATA.visible && K.loaded && P) {
                            K.poschanged = !1;
                            G = Number(K.DATA.flying);
                            z = (1 - G) * Number(K.DATA.ath);
                            h = (1 - G) * Number(K.DATA.atv);
                            0 < G && (z += G * id(p, K.DATA.ath), h += G * id(v, K.DATA.atv));
                            var P = !1,
                                qa = (180 - z) * W,
                                Q = h * W;
                            O.x = 1E3 * Math.cos(Q) * Math.cos(qa);
                            O.z = 1E3 * Math.cos(Q) * Math.sin(qa);
                            O.y = 1E3 * Math.sin(Q);
                            Md(e, O);
                            var H = !1,
                                ra = O.x,
                                q = O.y,
                                qa = O.z;
                            if (qa >= C - y) var D = A / (qa + y),
                                ra = ra * D,
                                q = q * D + n,
                                H = 8E3 > Math.abs(ra) && 8E3 > Math.abs(q),
                                ra = ra + l,
                                q = q + r;
                            if (K.DATA.distorted) {
                                R.pointerEvents = 50 <= qa + y && K.DATA.enabled ? "auto" : "none";
                                P = !0;
                                Q = K.DATA.scale;
                                qa = Number(K.DATA.scale);
                                isNaN(qa) && (qa = 1);
                                K._hszscale = qa;
                                1 == K.scaleflying && (qa = qa * (1 - G) + qa / (A / (g / 2)) * B * G);
                                K.DATA.scale = 1;
                                K.updatepluginpos(_[206]);
                                K.DATA.scale = Q;
                                var L = K.pixelwidth,
                                    M = K.pixelheight,
                                    Za = Q = 1;
                                K._use_css_scale && (Q = L / K.imagewidth, Za = M / K.imageheight);
                                var wa = .5 * -M,
                                    ra = q = 0,
                                    nb = K._oxpix,
                                    cc = K._oypix,
                                    q = q + .5 * -L / Q,
                                    ra = ra + wa / Za,
                                    q = q - (ea.ex - .5) * L / Q,
                                    ra = ra - (ea.ey - .5) * M / Za,
                                    ea = -500,
                                    L = K._deepscale,
                                    M = K.DATA.depth;
                                isNaN(M) && (M = 1E3);
                                wa = 1;
                                0 == (M | 0) ? (ea = 0, L = 1) : wa = 1E3 / M;
                                2 == xc && (L *= 15);
                                L /= 1 + G + F;
                                if (d.firefox || 6 < d.iosversion && .1 > K.scale) L = 10 / (1 + G);
                                0 < y && (L = 1);
                                qa = qa * L * wa;
                                ea *= L;
                                nb = nb * L * wa;
                                cc = cc * L * wa;
                                if (0 < y || d.firefox) P = H;
                                H = L * wa * c / 2;
                                H = _[331] + H * K.tx + "px," + H * K.ty + "px," + -H * K.tz + "px) ";
                                E[3] = oa(r + n * (1 - G));
                                E[7] = oa(-(u * (1 - G) + v * G));
                                E[11] = H + _[140] + oa(-z);
                                E[13] = oa(h);
                                E[17] = ea;
                                E[19] = oa(1 * K.DATA.rotate + G * I);
                                E[21] = nb;
                                E[23] = cc;
                                K.inverserotation ? (E[25] = "Y(" + oa(K.ry), E[27] = "X(" + oa(K.rx), E[29] = "Z(" + oa(-K.rz)) : (E[25] = "Z(" + oa(K.rz), E[27] = "X(" + oa(-K.rx), E[29] = "Y(" + oa(-K.ry));
                                E[31] = qa * Q;
                                E[33] = qa * Za;
                                E[35] = q;
                                E[37] = ra;
                                R[X + _[92]] = "0 0";
                                R[X] = E.join("")
                            } else if (qa >= C && (qa = 1, H)) {
                                if (K.zoom || K.distorted) qa *= Number(2 * (1 - G) * D + G * ba) / ba;
                                K.updatepluginpos(_[213]);
                                L = K.pixelwidth;
                                M = K.pixelheight;
                                Za = Q = 1;
                                K._use_css_scale && (Q = L / K.imagewidth, Za = M / K.imageheight);
                                z = ra;
                                h = q;
                                0 == K.accuracy && (z = Math.round(z), h = Math.round(h));
                                ra = q = 0;
                                nb = K._oxpix * qa;
                                cc = K._oypix * qa;
                                wa = 0 != Q ? L / Q : 0;
                                H = 0 != Za ? M / Za : 0;
                                q -= (ea.ex - .5) * wa;
                                ra -= (ea.ey - .5) * H;
                                ea = 2 * qa * (Math.max(L, M) * K.DATA.scale + Math.max(nb, cc));
                                if (0 < z + ea || 0 < h + ea || z - ea < k || h - ea < g) K._use_css_scale ? qa *= w : (q *= w, ra *= w), P = -wa / 2, ea = -H / 2, K._use_css_scale || (P *= w, ea *= w), K._istextfield && 0 == K.accuracy && (z |= 0, h |= 0, P |= 0, ea |= 0, nb |= 0, cc |= 0, q |= 0, ra |= 0), N[1] = oa(z), N[3] = oa(h), N[5] = oa(P), N[7] = oa(ea), N[9] = oa(1 * K.DATA.rotate - I * (1 - G)), N[11] = nb, N[13] = cc, N[15] = qa * Q, N[17] = qa * Za, N[19] = oa(q), N[21] = oa(ra), G = N.join(""), G = yc && 2 > xc && .5 < Number(K.zorder2) ? _[373] + (999999999E3 + K._zdeep) + "px) " + G : _[297] + G, R[X + _[92]] = _[553], R[X] = G, P = !0
                            }
                            0 == K.forceupdate && (G = P ? "" : "none", G != R.display && (R.display = G));
                            K.forceupdate = !1
                        }
                    }
                }
        }

        function xf(a, b, x, f) {
            function e() {
                var c = Fa(),
                    a = c.style;
                a.marginTop = a.marginBottom = v[17] * I + "px";
                a.height = "1px";
                a.backgroundColor = ua(v[18]);
                "none" != v[19] && (a.borderBottom = _[408] + ua(v[19]));
                B.appendChild(c)
            }

            function k(a) {
                var c = a.changedTouches;
                return (c && 0 < c.length ? c[0] : a).pageY
            }

            function m(a, c, b) {
                var e = Fa(),
                    h = e.style;
                h.padding = v[20] * I + "px";
                h.border = v[21] + _[34] + ua(v[22]);
                h.borderRadius = v[23] * I + "px";
                h.marginTop = v[24] * I + "px";
                h.marginBottom = v[24] * I + "px";
                d.androidstock && (h[_[42]] = _[13]);
                eb.touch && aa(e, d.browser.events.touchstart, function(a) {
                    function L(L) {
                        L = k(L) - Za;
                        if (n > Ea) {
                            var a = q + L | 0;
                            a < Ea - n - 10 ? a = Ea - n - 10 : 10 < a && (a = 10);
                            y.style.top = a + "px"
                        }
                        15 < Math.abs(L) && (e.onmouseout(), h = !0)
                    }

                    function M() {
                        ia(T, f, L, !0);
                        ia(T, r, M, !0);
                        if (0 == h) e.onclick()
                    }
                    ta(a);
                    a.stopPropagation();
                    if (b && c) {
                        e.onmouseover();
                        var Za = k(a),
                            q = parseInt(y.style.top) | 0,
                            h = !1,
                            f = d.browser.events.touchmove,
                            r = d.browser.events.touchend;
                        aa(T, f, L, !0);
                        aa(T, r, M, !0)
                    }
                }, !0);
                b && c ? (h.cursor = _[10], e.onmousedown = function(a) {
                    a.stopPropagation()
                }, e.onmouseover = function() {
                    h = this.style;
                    h.background = ua(v[25]);
                    h.border = v[21] + _[34] + ua(v[26]);
                    h.color = ua(v[27])
                }, e.onmouseout = function() {
                    h = this.style;
                    h.background = "none";
                    h.border = v[21] + _[34] + ua(v[22]);
                    h.color = ua(v[4])
                }, e.oncontextmenu = function(a) {
                    ta(a);
                    a.stopPropagation();
                    e.onclick()
                }, e.onclick = function(a) {
                    f ? (h = y.style, h.opacity = 1, h.transition = _[119], h.opacity = 0, setTimeout(x, 300)) : x();
                    Z.callaction(b)
                }) : (0 == c && (h.color = ua(v[5])), h.cursor = _[6]);
                var q = Fa();
                q.style.marginLeft = v[28] * I + "px";
                q.style.marginRight = v[29] * I + "px";
                q.innerHTML = a;
                e.appendChild(q);
                B.appendChild(e);
                return q
            }

            function g() {
                function a() {
                    return .4 > Math.random() ? " " : _[161]
                }
                var c = m("About" + a() + "the" + a() + _[57] + a() + _[483] + a() + _[440], !0, function() {
                    Z.openurl(_[239])
                });
                try {
                    (new MutationObserver(function(a) {
                        a = T.getComputedStyle(c);
                        9 > Math.min(parseInt(a.width) | 0, parseInt(a.height) | 0) && (l = {}, cb(_[120]))
                    })).observe(c, {
                        attributes: !1,
                        childList: !0,
                        characterData: !0,
                        subtree: !0
                    })
                } catch (b) {}
            }

            function w() {
                m(V.fullscreen ? p.exitfs : p.enterfs, !0, function() {
                    l.fullscreen = !l.fullscreen
                })
            }

            function t() {
                var a = d.android,
                    c = d.infoString,
                    c = c.split(_[478]).join("");
                m((X ? "" : _[149] + l.version + _[270] + l.build + _[302]) + (a ? _[539] : "") + c + fb.infoString + (a ? _[475] : ""), !0, null)
            }

            function r() {
                Va && Va[2] && m(Va[2], !0, function() {
                    Z.openurl(Va[3])
                })
            }

            function A() {
                var c = y.getBoundingClientRect(),
                    d = c.width,
                    c = c.height,
                    e = b;
                if (0 < d && 0 < c) {
                    n = c;
                    f && (a -= d >> 1, a + d > Ta && (a = Ta - d - 10), 10 > a && (a = 10));
                    for (; a + d > Ta;) a -= d / 2;
                    0 > a && (a = 0);
                    b + c > Ea && (b = f ? Ea - c - 10 : b - c);
                    0 > b && (f ? b = Ea - c >> 1 : e > Ea / 2 ? (b = e - c, 0 > b && (b = 4)) : (b = e, b + c > Ea && (b = Ea - 4 - c)));
                    u = y.style;
                    u.left = (a | 0) + "px";
                    u.top = (b | 0) + "px";
                    f && (u.transition = _[119], u.opacity = 1)
                } else 10 > ++ea && setTimeout(A, 32)
            }
            var p = l.contextmenu;
            if (f && 0 == p.touch) return null;
            var v = null;
            p.customstyle && (_[128] == d.browser.domain || 0 == d.realDesktop || d.realDesktop && 0 != (La & 16)) && (v = G(p.customstyle).split("|"), 30 != v.length && (v = null));
            null == v && (v = (d.mac ? "default|14|default|0xFFFFFF|0x000000|0xBBBBBB|0|0|5|2|2|8|0x66000000|0|0|1|4|5|0xEEEEEE|none|1|0|0|0|3|0xEEEEEE|0|0|20|12" : "default|default|150%|0xFFFFFF|0x000000|0xBBBBBB|1|0xBBBBBB|0|2|2|8|0x66000000|0|0|2|2|5|0xE0E0E0|none|4|0|0|0|3|0xEEEEEE|0|0|18|12").split("|"));
            var u = null,
                n = 0,
                y = Fa();
            y.onselectstart = _[321];
            d.desktop && d.chrome && (y.style.opacity = .999);
            if (d.linux || d.android) v[1] = 12;
            u = y.style;
            u.position = _[0];
            u.zIndex = 99999999999;
            var I = 1;
            d.androidstock ? I = d.pixelratio : d.chrome && 40 > d.chromeversion && (u[qb] = _[27]);
            _[6] != v[0] ? u.fontFamily = v[0] : d.ios ? (u.fontFamily = _[20], u.fontWeight = _[534], _[6] == v[1] && (v[1] = 14)) : (u.font = "menu", d.firefox || 1 == d.pixelratio || (u.fontSize = "12px"));
            _[6] != v[1] && (u.fontSize = v[1] * I * (d.android ? 1.2 : 1) + "px");
            _[6] != v[2] && (u.lineHeight = v[2]);
            u.background = ua(v[3]);
            u.color = ua(v[4]);
            u.border = v[6] + _[34] + ua(v[7]);
            u.borderRadius = v[8] * I + "px";
            u.minWidth = "150px";
            u.textAlign = "left";
            u[Sb] = v[9] + "px " + v[10] + "px " + v[11] + "px " + ua(v[12]);
            var B = Fa(),
                u = B.style;
            u.border = v[13] + _[34] + ua(v[14]);
            u.paddingTop = v[15] * I + "px";
            u.paddingBottom = v[16] * I + "px";
            eb.touch && aa(B, d.browser.events.touchstart, function(a) {
                ta(a);
                a.stopPropagation()
            }, !1);
            y.appendChild(B);
            var C = p.item.getArray(),
                z, h, c = 0,
                F, E = C.length,
                N, X = 0 != (La & 16),
                O = X,
                R = X,
                K = !1,
                H = !1;
            for (N = 0; N < E; N++)
                if (z = C[N])
                    if (h = z.caption) h = ue(unescape(h)), z.separator && 0 < c && e(), F = G(h), _[57] == F ? 0 == O && (O = !0, g(), c++) : Va && _[497] == F ? 0 == R && (R = !0, r(), c++) : _[131] == F ? (K = !0, d.fullscreensupport && (w(), c++)) : _[366] == F ? (H = !0, t(), c++) : (F = z.visible && (!z.showif || Z.calc(null, z.showif))) ? (m(h, z.enabled, z.onclick), c++) : 0 == F && z.separator && 0 < c && B.removeChild(B.lastChild);
            Va && 0 == R && (0 < c && (e(), c = 0), r());
            0 == O && (0 < c && e(), g(), c++);
            0 == K && 1 == p.fullscreen && d.fullscreensupport && (w(), c++);
            0 == H && 1 == p.versioninfo && (0 < c && e(), t(), c++);
            if (0 == c) return null;
            u = y.style;
            u.left = _[143];
            u.top = "10px";
            var ea = 0;
            f && (u.opacity = 0);
            setTimeout(A, 16);
            return y
        }

        function yf() {
            function a(a, b, d) {
                a.__defineGetter__(b, d)
            }
            l = new Ib;
            l.set = Y;
            l.get = S;
            l.call = uc;
            l.trace = va;
            Object.defineProperty(l, _[509], {
                value: Z
            });
            l.Kloader = na;
            l["true"] = !0;
            l[_[26]] = !1;
            l.strict = !1;
            l.version = _[492];
            l.build = _[402];
            l.buildversion = l.version;
            l.debugmode = !1;
            l.tweentypes = zc;
            l.basedir = _[391];
            l.lasterror = "";
            l.showtext = function() {};
            l.bgcolor = 0;
            l[Pb[0]] = l[Pb[1]] = !0;
            l.haveexternalinterface = !0;
            l.havenetworkaccess = !0;
            l.device = d;
            l.browser = d.browser;
            l._have_top_access = d.topAccess;
            l._isrealdesktop = d.realDesktop;
            l.iosversion = d.iosversion;
            l.isphone = d.iphone;
            l.ispad = d.ipad;
            l.isandroid = d.android;
            l.ishtml5 = !0;
            l.isflash = !1;
            l.ismobile = d.mobile;
            l.istablet = d.tablet;
            l.isdesktop = d.desktop;
            l.istouchdevice = d.touchdevice;
            l.isgesturedevice = d.gesturedevice;
            a(l, _[390], function() {
                return Tb / ba
            });
            a(l, _[372], function() {
                return lb / ba
            });
            Ca(l, _[405], function() {
                return ba
            }, function(a) {
                a = Number(a);
                isNaN(a) && (a = 1);
                1E-4 < Math.abs(a - ba) && (ba = a, V.onResize(null, !0))
            });
            Bb = l.area = new zf;
            l.wheeldelta = 0;
            l.wheeldelta_raw = Number.NaN;
            l.wheeldelta_touchscale = 0;
            l.keycode = 0;
            l.idletime = .5;
            l.__defineGetter__(_[429], Ja);
            l.__defineGetter__(_[597], Math.random);
            Ca(l, _[131], function() {
                return V.fullscreen
            }, function(a) {
                V.setFullscreen(la(a))
            });
            Ca(l, _[432], function() {
                return na.swfpath
            }, function(a) {
                na.swfpath = a
            });
            l.hlookat_moveforce = 0;
            l.vlookat_moveforce = 0;
            l.fov_moveforce = 0;
            l.multireslevel = 0;
            l.lockmultireslevel = "-1";
            l.downloadlockedlevel = !1;
            H = l.mouse = {
                downLayer: !1,
                down: !1,
                up: !1,
                moved: !1,
                dragging: !1,
                vinvert: !1,
                downx: 0,
                downy: 0,
                x: 0,
                y: 0
            };
            a(H, _[592], function() {
                return H.x + Bb.pixelx
            });
            a(H, _[583], function() {
                return H.y + Bb.pixely
            });
            a(H, "dd", function() {
                var a = H.x - H.downx,
                    b = H.y - H.downy;
                return Math.sqrt(a * a + b * b)
            });
            t = l.view = new Af;
            l.screentosphere = t.screentosphere;
            l.spheretoscreen = t.spheretoscreen;
            l.loadFile = na.loadfile;
            l.decodeLicense = na.decodeLicense;
            l.haveLicense = Mb(function(a) {
                var b = !1,
                    d = La;
                switch (a.toLowerCase().charCodeAt(0)) {
                    case 107:
                        b = 0 != (d & 1);
                        break;
                    case 109:
                        b = 0 != (d & 128);
                        break;
                    case 98:
                        b = 0 != (d & 16)
                }
                return b
            });
            l.parsepath = l.parsePath = na.parsePath;
            l.contextmenu = new Bf;
            da = l.control = new Cf;
            Oc = l.cursors = new Df;
            J = l.image = {};
            Ga = l.plugin = new ub(Qb);
            l.layer = Ga;
            Ua = l.hotspot = new ub(Ef);
            jd = l.events = new ub(null, !0);
            jd.dispatch = ya;
            ja = l.display = {
                currentfps: 60,
                r_ft: 16,
                FRM: 0,
                _framebufferscale: 1,
                mipmapping: "auto",
                loadwhilemoving: d.realDesktop ? "true" : "auto",
                _stereo: !1,
                stereooverlap: 0,
                hardwarelimit: d.realDesktop && d.safari && "6" > d.safariversion ? 2E3 : d.realDesktop && !d.webgl ? 2560 : d.iphone && d.retina && !d.iphone5 ? 800 : d.iphone && !d.retina ? 600 : d.ipod && d.retina ? 640 : d.mobile || d.tablet ? 1024 : 4096
            };
            Ca(ja, _[150], function() {
                return ja._stereo
            }, function(a) {
                a = la(a);
                ja._stereo != a && (a = a && d.webgl, ja._stereo = a, V.svglayer && (V.svglayer.style.display = a ? "none" : ""), t.haschanged = !0)
            });
            Ca(ja, _[454], function() {
                var a = ja.FRM | 0;
                return 0 == a ? "auto" : "" + a
            }, function(a) {
                a |= 0;
                0 > a && (a = 0);
                ja.FRM = a
            });
            Ca(ja, _[250], function() {
                return ja._framebufferscale
            }, function(a) {
                a = Number(a);
                if (isNaN(a) || 0 == a) a = 1;
                ja._framebufferscale = a;
                V.onResize(null, !0)
            });
            l.memory = {
                maxmem: d.realDesktop ? Math.min(Math.max(150, 48 * screen.availWidth * screen.availHeight >> 20), 400) : d.ios && 7.1 > d.iosversion || d.iphone && !d.iphone5 ? 40 : 50
            };
            l.network = {
                retrycount: 2
            };
            Pc = l.progress = {};
            Pc.progress = 0;
            gb = new Qb;
            gb.name = "STAGE";
            ob = new Qb;
            ob.name = _[524];
            Ga.alpha = 1;
            Ua.alpha = 1;
            Ua.visible = !0;
            Ca(Ga, _[16], function() {
                return "none" != V.pluginlayer.style.display
            }, function(a) {
                V.pluginlayer.style.display = la(a) ? "" : "none"
            });
            l.xml = {
                url: "",
                content: null,
                scene: null,
                sceneNEW: null
            };
            var b = l.security = {};
            Ca(b, "cors", function() {
                return hd
            }, function(a) {
                hd = a
            });
            Db = l.autorotate = new Ff;
            l.math = function() {
                function a(b) {
                    var d = S(b, Z.actioncaller);
                    return Number(null !== d ? d : b)
                }

                function b(d) {
                    return function(b, e) {
                        Y(b, Math[d](a(void 0 === e ? b : e)), !1, Z.actioncaller)
                    }
                }
                var d = {},
                    k = _[168].split(" "),
                    m;
                for (m in k) {
                    var g = k[m];
                    d[g] = b(g)
                }
                d.pi = Ma;
                d.atan2 = function(b, d, e) {
                    Y(b, Math.atan2(a(d), a(e)), !1, Z.actioncaller)
                };
                d.min = function() {
                    var b = arguments,
                        d = b.length,
                        e = 3 > d ? 0 : 1,
                        f = a(b[e]);
                    for (e++; e < d; e++) f = Math.min(f, a(b[e]));
                    Y(b[0], f, !1, Z.actioncaller)
                };
                d.max = function() {
                    var b = arguments,
                        d = b.length,
                        e = 3 > d ? 0 : 1,
                        f = a(b[e]);
                    for (e++; e < d; e++) f = Math.max(f, a(b[e]));
                    Y(b[0], f, !1, Z.actioncaller)
                };
                d.pow = Z.pow;
                return d
            }();
            l.action = new ub;
            l.scene = new ub;
            l.data = new ub;
            l.addlayer = l.addplugin = function(a) {
                if (!ud(a, _[228] + a + ")")) return null;
                a = Ga.createItem(a);
                if (!a) return null;
                null == a.sprite && (a._dyn = !0, a.create(), null == a._parent && V.pluginlayer.appendChild(a.sprite));
                return a
            };
            l.removelayer = l.removeplugin = function(a, b) {
                var d = Ga.getItem(a);
                if (d) {
                    if (la(b)) {
                        var k = d._childs;
                        if (k)
                            for (; 0 < k.length;) l.removeplugin(k[0].name, !0)
                    }
                    d.visible = !1;
                    d.parent = null;
                    d.sprite && V.pluginlayer.removeChild(d.sprite);
                    d.destroy();
                    Ga.removeItem(a)
                }
            };
            l.addhotspot = function(a) {
                if (!ud(a, _[375] + a + ")")) return null;
                a = Ua.createItem(a);
                if (!a) return null;
                0 == a._ready && (a._dyn = !0, a.create(), a.sprite && V.hotspotlayer.appendChild(a.sprite));
                ce = !0;
                return a
            };
            l.removehotspot = function(a) {
                var b = Ua.getItem(a);
                if (b) {
                    b.visible = !1;
                    b.parent = null;
                    if (b.sprite) try {
                        V.hotspotlayer.removeChild(b.sprite)
                    } catch (d) {}
                    if (b._poly) {
                        try {
                            V.svglayer.removeChild(b._poly)
                        } catch (k) {}
                        b._poly.kobject = null;
                        b._poly = null
                    }
                    b.destroy();
                    Ua.removeItem(a)
                }
            }
        }

        function Gf() {
            var a = l.webVR;
            Z.processTicks();
            var b = t.haschanged;
            hb++;
            ja.frame = hb;
            fb.fps();
            var x = V.resizeCheck(),
                f = Z.processAnimations(),
                b = b | t.haschanged;
            if (d.webgl || !d.ios || d.ios && 5 <= d.iosversion) f = !1;
            f |= ce;
            ce = !1;
            f && (t._hlookat += ((hb & 1) - .5) / (1 + t.r_zoom), b = !0);
            b |= Ya.handleloading();
            b |= eb.handleFrictions();
            b |= Ya.idlecheck();
            b |= t.continuousupdates;
            Z.processTicks();
            $a && (b = !0, $a = !1);
            a && a.enabled && (b = !0);
            b || x ? (fb.startFrame(), Ya.updateview(0, !0), fb.finishFrame()) : (t.haschanged && t.updateView(), Nd(!1), d.webgl && fb.hittesthotspots(null));
            Ya.updateplugins(x);
            d.desktop && Ya.checkHovering();
            a && a.enabled && a.submitframe && a.submitframe()
        }
        var oc = this;
        try {
            !Object.prototype.__defineGetter__ && Object.defineProperty({}, "x", {
                get: function() {
                    return !0
                }
            }).x && (Object.defineProperty(Object.prototype, _[249], {
                enumerable: !1,
                configurable: !0,
                value: function(a, b) {
                    Object.defineProperty(this, a, {
                        get: b,
                        enumerable: !0,
                        configurable: !0
                    })
                }
            }), Object.defineProperty(Object.prototype, _[261], {
                enumerable: !1,
                configurable: !0,
                value: function(a, b) {
                    Object.defineProperty(this, a, {
                        set: b,
                        enumerable: !0,
                        configurable: !0
                    })
                }
            }))
        } catch (Lf) {}
        var Ha = navigator,
            ca = document,
            T = window,
            Ma = Math.PI,
            W = Ma / 180,
            Ub = Number.NaN,
            de = 0,
            Ja = T.performance && T.performance.now ? function() {
                return T.performance.now() - de
            } : function() {
                return (new Date).getTime() - de
            },
            de = Ja(),
            Kb = String.fromCharCode,
            l = null,
            Tb = 0,
            lb = 0,
            Ta = 0,
            Ea = 0,
            ba = 1,
            ee = 1,
            Qc = 0,
            Bb = null,
            Db = null,
            da = null,
            Oc = null,
            ja = null,
            jd = null,
            Pc = null,
            Ua = null,
            J = null,
            H = null,
            Ga = null,
            t = null,
            gb = null,
            ob = null,
            fe = !1,
            Rc = !1,
            ge = !1,
            he = 0,
            hb = 0,
            Od = 60,
            La = 14,
            Pd = null,
            Pb = [_[397], _[576]],
            Va = null,
            hd = "",
            Sc = null,
            rb = null,
            Eb = null,
            vb = null,
            ce = !1,
            Ac = 0,
            kc = 0,
            $a = !1,
            yc = !0,
            d = {
                runDetection: function(a) {
                    function b() {
                        var a = screen.width,
                            c = screen.height,
                            b = d.topAccess ? top : T,
                            q = b.innerWidth,
                            e = b.innerHeight,
                            b = b.orientation | 0,
                            L = a / (c + 1),
                            M = q / (e + 1);
                        if (1 < L && 1 > M || 1 > L && 1 < M) L = a, a = c, c = L;
                        r.width = a;
                        r.height = c;
                        r.orientation = b;
                        d.window = {
                            width: q,
                            height: e
                        };
                        a /= q;
                        return d.pagescale = a
                    }

                    function x(a, c) {
                        for (var b = ["ms", "Moz", _[575], "O"], d = 0; 5 > d; d++) {
                            var e = 0 < d ? b[d - 1] + a.slice(0, 1).toUpperCase() + a.slice(1) : a;
                            if (void 0 !== qa.style[e]) return e
                        }
                        return null
                    }
                    var f = "flash html5 mobile tablet desktop ie edge webkit firefox ios iosversion iphone ipod ipad retina hidpi android androidstock blackberry touchdevice gesturedevice fullscreensupport windows mac linux air standalone silk".split(" "),
                        e, k, m, g, w = ca.documentElement,
                        l = a.mobilescale;
                    isNaN(l) && (l = .5);
                    k = f.length;
                    for (e = 0; e < k; e++) m = f[e], d[m] = !1;
                    d.html5 = d.html = !0;
                    d.iosversion = 0;
                    d.css3d = !1;
                    d.webgl = !1;
                    d.topAccess = !1;
                    d.simulator = !1;
                    d.multiressupport = !1;
                    d.panovideosupport = !1;
                    var r = d.screen = {};
                    try {
                        top && top.document && (d.topAccess = !0)
                    } catch (A) {}
                    var p = Ha.platform,
                        f = G(p),
                        v = Ha.userAgent,
                        u = G(v),
                        n = k = "";
                    0 <= f.indexOf("win") ? d.windows = !0 : 0 <= f.indexOf("mac") ? d.mac = !0 : 0 <= f.indexOf("linux") && (d.linux = !0);
                    var y = T.devicePixelRatio,
                        I = 2 <= y;
                    e = 1;
                    var B = 0 <= f.indexOf("ipod"),
                        C = 0 <= f.indexOf(_[61]),
                        z = 0 <= f.indexOf("ipad"),
                        h = C || B || z,
                        c = u.indexOf("silk/"),
                        F = 0 <= u.indexOf(_[537]) || 0 <= u.indexOf(_[153]),
                        E = 0 > c && !F && 0 <= u.indexOf(_[538]),
                        N = m = !1,
                        t = !1,
                        O = v.indexOf(_[155]),
                        R = T.chrome && !F,
                        K = v.indexOf(_[540]),
                        H = !1,
                        ea = (h || E || 0 <= c) && (d.windows || d.mac);
                    F && (O = K = -1);
                    var f = !1,
                        P = 0;
                    ee = b();
                    if (h) {
                        if (d.ios = !0, k = p, g = v.indexOf("OS "), 0 < g && (g += 3, P = v.slice(g, v.indexOf(" ", g)).split("_").join("."), k += _[541] + P, d.iosversion = parseFloat(P), "6.0" <= P && (C && !I || B && I) && (d._iOS6_canvas_bug = !0)), m = C || B, N = z, g = Math.max(screen.width, screen.height), d.iphone = C || B, d.iphone5 = C && 500 < g, d.ip6p = C && 735 < g, d.ipod = B, d.ipad = z, d.retina = I, C || B) e *= l
                    } else if (E)
                        if (g = v.indexOf(_[542]), P = parseFloat(v.slice(g + 8)), d.android = !0, d.linux = !1, d.androidversion = P, k = v.slice(g, v.indexOf(";", g)), m = 0 < u.indexOf(_[56]), R && 0 < u.indexOf(_[313]) && (m = 480 > Math.min(screen.width, screen.height)), N = !m, g = v.indexOf(")"), 5 < g && (P = v.slice(0, g).lastIndexOf(";"), 5 < P && (I = v.indexOf(_[570], P), 0 < I && (g = I), k += " (" + v.slice(P + 2, g) + ")")), 0 < K && isNaN(y) && (y = ee), N && 1 < y) {
                            if (d.hidpi = !0, e = y, 0 <= O || 0 < K) d.hidpi = !1, e = 1
                        } else m && (d.hidpi = 1 < y, e = y * l, .5 > e && (e = .5), 0 <= O || 0 < K || ea) && (d.hidpi = !1, e = l);
                    else {
                        if (0 <= u.indexOf(_[387]) || 0 <= u.indexOf(_[389]) || 0 <= u.indexOf("bb10")) H = !0, d.blackberry = !0, k = _[381], f = !0;
                        0 <= c ? (H = !0, d.silk = !0, k = _[338] + parseFloat(u.slice(c + 5)).toFixed(2), t = !1, m = 0 <= u.indexOf(_[56]), N = !m, f = !0) : 0 <= u.indexOf("ipad") || 0 <= u.indexOf(_[61]) ? t = H = !0 : 0 <= u.indexOf(_[157]) ? (N = !0, k += _[566]) : 0 <= u.indexOf(_[56]) ? (m = !0, k += _[563], e = l) : t = !0
                    }
                    B = Ha.vendor && 0 <= Ha.vendor.indexOf("Apple");
                    C = T.opera;
                    I = !1;
                    t && (k = _[329]);
                    g = v.indexOf(_[550]);
                    0 < g && (B || C || E) && (g += 8, P = v.slice(g, v.indexOf(" ", g)), B ? (d.safari = !0, d.safariversion = P, n = _[558]) : (E && (n = _[287], f = !0), C && (d.opera = !0, d.operaversion = P, n = "Opera")), n += " " + P);
                    h && (g = v.indexOf(_[599]), 0 < g && (d.safari = !0, g += 6, P = parseFloat(v.slice(g, v.indexOf(" ", g))), d.crios = P, n = _[549] + P.toFixed(1)));
                    g = O;
                    if (0 <= g || R) P = parseFloat(v.slice(g + 7)), d.chrome = !0, d.chromeversion = P, d.chromemobile = E || 0 <= c, n = _[155] + (isNaN(P) ? "" : " " + P.toFixed(1)), g = u.indexOf("opr/"), 0 < g && (n = _[560] + parseFloat(v.slice(g + 4)).toFixed(1) + _[463]), E && 28 > P && (f = !0), E && 1 < y && 20 > P && !ea && (d.hidpi = !0, e = y, m && (e *= l));
                    else if (g = K, 0 > g && (g = v.indexOf(_[571])), 0 <= g && (P = parseFloat(v.slice(1 + v.indexOf("/", g))), d.firefox = !0, d.firefoxversion = P, n = _[491] + (isNaN(P) ? "" : P.toFixed(1)), E && 35 > P && (f = !0)), g = v.indexOf("MSIE "), I = 0 <= g || F) t = d.ie = !0, N = !1, n = _[237], 0 < u.indexOf(_[493]) || 0 < u.indexOf(_[319]) ? (m = !0, t = !1, n = _[531] + n, e = l) : 0 < u.indexOf("arm;") && 1 < Ha.msMaxTouchPoints && (N = !0, t = !1, n = _[526] + n, f = !0, e = 1), 0 <= g ? (P = v.slice(g + 4, v.indexOf(";", g)), d.ieversion = parseFloat(P), n += P) : (g = v.indexOf("rv:"), 0 <= g ? (P = parseFloat(v.slice(g + 3)), !isNaN(P) && 10 <= P && 100 > P && (d.ieversion = P, n += " " + P.toFixed(1))) : (g = u.indexOf(_[153]), 0 <= g && (n = _[306], d.edge = !0, yc = !1, P = parseFloat(v.slice(g + 6)), isNaN(P) || (d.ieversion = P, n += " " + P.toFixed(5))))), k = n, n = "";
                    d.android && (d.androidstock = !(d.chrome || d.firefox || d.opera));
                    0 == d.ie && 0 < (g = u.indexOf(_[525])) && (P = parseFloat(u.slice(g + 7)), !isNaN(P) && 0 < P && (d.webkit = !0, d.webkitversion = P));
                    d.pixelratio = isNaN(y) ? 1 : y;
                    d.fractionalscaling = 0 != d.pixelratio % 1;
                    var y = {},
                        qa = Fa();
                    y.find = x;
                    y.prefix = I ? "ms" : d.firefox ? "moz" : d.safari || d.chrome || d.androidstock ? _[89] : "";
                    y.perspective = x(_[364]);
                    y.transform = x(_[449]);
                    y.backgroundsize = x(_[298]);
                    y.boxshadow = x(_[450]);
                    y.boxshadow_style = _[290] == y.boxshadow ? _[230] : _[339] == y.boxshadow ? _[280] : _[388];
                    E && "4.0" > d.androidversion && (y.perspective = null);
                    y.perspective && (d.css3d = !0, _[244] == y.perspective && T.matchMedia && (u = T.matchMedia(_[207]))) && (d.css3d = 1 == u.matches);
                    qa = null;
                    d.webgl = function() {
                        var a = null;
                        try {
                            for (var c = Fa(2), b = 0; 4 > b && !(a = c.getContext([_[65], _[104], _[134], _[135]][b])); b++);
                        } catch (d) {}
                        return null != a
                    }();
                    u = {};
                    u.useragent = v;
                    u.platform = p;
                    u.domain = null;
                    u.location = T.location.href;
                    p = u.events = {};
                    u.css = y;
                    if (h || E || void 0 !== w.ontouchstart || H) d.touchdevice = !0, d.gesturedevice = !0;
                    h = 0;
                    (Ha.msPointerEnabled || Ha.pointerEnabled) && d.ie && (E = Ha.msMaxTouchPoints || Ha.maxTouchPoints, Ha.msPointerEnabled && (h = 2), Ha.pointerEnabled && (h = 1), d.touchdevice = 0 < E, d.gesturedevice = 1 < E);
                    p.touchstart = [_[47], _[368], _[315]][h];
                    p.touchmove = [_[48], _[379], _[317]][h];
                    p.touchend = [_[50], _[459], _[369]][h];
                    p.touchcancel = [_[362], _[308], _[293]][h];
                    p.gesturestart = [_[352], _[114], _[114]][h];
                    p.gesturechange = [_[320], _[110], _[110]][h];
                    p.gestureend = [_[392], _[122], _[122]][h];
                    p.pointerover = [_[12], _[12], _[44]][h];
                    p.pointerout = [_[14], _[14], _[45]][h];
                    d.pointerEvents = d.opera || d.ie && 11 > d.ieversion ? !1 : !0;
                    n && (k += " - " + n);
                    d.realDesktop = t;
                    n = a.vars ? G(a.vars.simulatedevice) : null;
                    _[462] == n && (0 <= v.indexOf(_[156]) || 0 <= v.indexOf("iPod") ? n = _[61] : 0 <= v.indexOf("iPad") && (n = "ipad"));
                    d.touchdeviceNS = d.touchdevice;
                    v = _[61] == n ? 1 : "ipad" == n ? 2 : 0;
                    0 < v && (d.simulator = !0, d.crios = 0, k += " - " + (1 == v ? _[156] : "iPad") + _[416], e = v * l, m = 1 == v, N = 2 == v, t = !1, d.ios = !0, d.iphone = m, d.ipad = N, d.touchdevice = !0, d.gesturedevice = !0);
                    d.browser = u;
                    d.infoString = k;
                    a = G(a.fakedevice);
                    _[56] == a ? (m = !0, N = t = !1) : _[157] == a ? (N = !0, m = t = !1) : _[554] == a && (t = !0, m = N = !1);
                    d.mobile = m;
                    d.tablet = N;
                    d.desktop = t;
                    d.normal = N || t;
                    d.handheld = m || N;
                    d.touch = d.gesturedevice;
                    d.mouse = t;
                    d.getViewportScale = b;
                    ba = e;
                    0 == d.simulator && (ca.fullscreenEnabled || ca.mozFullScreenEnabled || ca.webkitFullScreenEnabled || ca.webkitFullscreenEnabled || ca.msFullscreenEnabled || t && d.safari && 6 > parseInt(d.safariversion)) && (a = [_[246], _[215], _[203], _[205], _[229]], l = -1, e = null, k = _[258], w[a[0]] ? (e = "", l = 0) : w[a[1]] ? (e = "moz", l = 1) : w[a[2]] ? (e = _[89], l = 2) : w[a[3]] ? (e = _[89], l = 3) : w[a[4]] && (e = "MS", k = _[252], l = 4), 0 <= l && 0 == f && (d.fullscreensupport = !0, p.fullscreenchange = e + k, p.requestfullscreen = a[l]));
                    d.buildList();
                    delete d.runDetection
                },
                buildList: function() {
                    var a, b = "|all";
                    for (a in d) a == G(a) && d[a] && (b += "|" + a);
                    d.haveList = b + "|"
                },
                checkSupport: function(a) {
                    a = G(a).split("no-").join("!").split(".or.").join("|").split(".and.").join("+").split("|");
                    var b, l, f = a.length;
                    for (b = 0; b < f; b++) {
                        var e = a[b].split("+"),
                            k = !1;
                        for (l = 0; l < e.length; l++) {
                            var k = e[l],
                                m = !1;
                            33 == k.charCodeAt(0) && (k = k.slice(1), m = !0);
                            if (0 == k.indexOf("ios") && d.ios)
                                if (3 == k.length || d.iosversion >= parseFloat(k.slice(3)))
                                    if (m) {
                                        k = !1;
                                        break
                                    } else k = !0;
                            else if (m) k = !0;
                            else {
                                k = !1;
                                break
                            } else if (0 <= d.haveList.indexOf("|" + k + "|"))
                                if (m) {
                                    k = !1;
                                    break
                                } else k = !0;
                            else if (m) k = !0;
                            else {
                                k = !1;
                                break
                            }
                        }
                        if (k) return !0
                    }
                    return !1
                }
            },
            xc = 1,
            Jd = !1,
            qb = null,
            ze = null,
            Qd = null,
            Tc = null,
            Sb = null,
            Ae = !1,
            pc = 0,
            Ib = function() {
                var a = this;
                a._type = "base";
                a.registerattribute = function(b, d, f, e) {
                    b = G(b);
                    f && e ? (a.hasOwnProperty(b) && (d = ka(a[b], typeof d)), a.__defineGetter__(b, e), a.__defineSetter__(b, f), f(d)) : a.hasOwnProperty(b) ? a[b] = ka(a[b], typeof d) : a[b] = d
                };
                a.createobject = function(b) {
                    b = G(b);
                    try {
                        return a.hasOwnProperty(b) ? a[b] : a[b] = new Ib
                    } catch (d) {}
                    return null
                };
                a.removeobject = a.removeattribute = function(b) {
                    b = G(b);
                    try {
                        a[b] = null, delete a[b]
                    } catch (d) {}
                };
                a.createarray = function(b) {
                    b = G(b);
                    return a[b] && a[b].isArray ? a[b] : a[b] = new ub(Ib)
                };
                a.removearray = function(b) {
                    b = G(b);
                    a[b] && a[b].isArray && (a[b] = null, delete a[b])
                };
                a.getattributes = function() {
                    var b = [],
                        d = ["index", _[503], "DATA"],
                        f;
                    for (f in a) _[15] != typeof a[f] && -1 == d.indexOf(f) && "_" != f.charAt(0) && b.push(f);
                    return b
                }
            },
            ub = function(a, b) {
                var d = [],
                    f = {};
                this.isArray = !0;
                this.isDynArray = 1 == b;
                this.__defineGetter__("count", function() {
                    return d.length
                });
                this.__defineSetter__("count", function(a) {
                    0 == a ? (d = [], f = {}) : d.length = a
                });
                this.createItem = function(b, k) {
                    var m = -1,
                        g = null,
                        m = String(b).charCodeAt(0);
                    if (48 <= m && 57 >= m) {
                        if (k) return null;
                        m = parseInt(b, 10);
                        g = d[m];
                        if (null == g || void 0 == g) g = null != a ? new a : {}, g.name = "n" + m, g.index = m, d[m] = g, f[g.name] = g
                    } else if (b = G(b), g = f[b], null == g || void 0 == g) g = k ? k : null != a ? new a : {}, m = d.push(g) - 1, g.index = m, g.name = b, d[m] = g, f[b] = g;
                    return g
                };
                this.getItem = function(a) {
                    var b = -1,
                        b = String(a).charCodeAt(0);
                    48 <= b && 57 >= b ? (b = parseInt(a, 10), a = d[b]) : a = f[G(a)];
                    return a
                };
                this.getArray = function() {
                    return d
                };
                this.renameItem = function(a, b) {
                    var m = -1,
                        m = String(a).charCodeAt(0);
                    48 <= m && 57 >= m ? (m = parseInt(a, 10), m = d[m]) : m = f[G(a)];
                    m && (delete f[m.name], b = G(b), m.name = b, f[b] = m)
                };
                this.removearrayitem = this.removeItem = function(a) {
                    var b = -1,
                        b = null;
                    a = String(a);
                    b = String(a).charCodeAt(0);
                    48 <= b && 57 >= b ? (b = parseInt(a, 10), b = d[b]) : b = f[G(a)];
                    if (b) {
                        f[b.name] = null;
                        delete f[b.name];
                        d.splice(b.index, 1);
                        var m;
                        m = d.length;
                        for (a = b.index; a < m; a++) d[a].index--
                    }
                    return b
                };
                this.sortby = function(a, b) {
                    var f, g;
                    g = d.length;
                    if (1 < g) {
                        var l = 1,
                            t = !1,
                            r = !1;
                        _[1] === typeof b && (b = b.toLowerCase(), 0 <= b.indexOf(_[425]) && (l = -1), 0 <= b.indexOf(_[511]) && (t = !0), 0 <= b.indexOf(_[284]) && (r = !0));
                        d.sort(function(b, d) {
                            var f = b[a],
                                g = d[a];
                            t ? (f = Number(f), isNaN(f) && (f = void 0), g = Number(g), isNaN(g) && (g = void 0), void 0 === f && void 0 === g && (f = b[a], g = d[a])) : r && (null != f && (f = ("" + f).toLowerCase()), null != g && (g = ("" + g).toLowerCase()));
                            return void 0 === f && void 0 !== g ? +l : void 0 !== f && void 0 === g || f < g ? -l : f > g ? +l : 0
                        });
                        for (f = 0; f < g; f++) d[f].index = f
                    }
                }
            },
            Te = Array(256),
            na = {};
        (function() {
            function a(a) {
                var b, d, e, f, h = a.length;
                b = 3 * (h >> 2) - ("=" == a.charAt(h - 1)) - ("=" == a.charAt(h - 2));
                for (var c = new r(b), g = b / 3 | 0, m = 0, k = 0; 0 < g--;) b = p[a.charCodeAt(m) & 127], d = p[a.charCodeAt(m + 1) & 127], e = p[a.charCodeAt(m + 2) & 127], f = p[a.charCodeAt(m + 3) & 127], c[k] = b << 2 | d >> 4, c[k + 1] = (d & 15) << 4 | e >> 2, c[k + 2] = (e & 3) << 6 | f, m += 4, k += 3;
                m < h && (b = p[a.charCodeAt(m) & 127], d = p[a.charCodeAt(m + 1) & 127], e = p[a.charCodeAt(m + 2) & 127], f = p[a.charCodeAt(m + 3) & 127], c[k++] = b << 2 | d >> 4, 64 != e && (c[k++] = (d & 15) << 4 | e >> 2), 64 != f && (c[k++] = (e & 3) << 6 | f));
                return c
            }

            function b(a, b) {
                var d, e, f = 15,
                    h = _[251],
                    c = new r(256);
                if (82 == b)
                    if (Pd) f = 127, h = Pd;
                    else return null;
                d = a[65] & 7;
                for (e = 0; 128 > e; e++) c[2 * e] = a[e], c[2 * e + 1] = String(h).charCodeAt(e & f);
                v.srand(c, 256);
                return v.flip(a, d + 128, a.length - 128 - d)
            }

            function x(a, b, d) {
                if (null == a) return null;
                a = "" + a;
                1 == b && l.basedir && 0 > a.indexOf("://") && 0 != a.indexOf("/") && _[95] != a.slice(0, 5) && (a = l.basedir + a);
                a = a.split("\\").join("/");
                null == g.firstxmlpath && (g.firstxmlpath = "");
                null == g.currentxmlpath && (g.currentxmlpath = "");
                null == g.swfpath && (g.swfpath = "");
                null == g.htmlpath && (g.htmlpath = "");
                for (b = a.indexOf("%"); 0 <= b;) {
                    var e = a.indexOf("%", b + 1);
                    if (e > b) {
                        var f = a.slice(b + 1, e),
                            h = null;
                        if (36 == f.charCodeAt(0)) {
                            if (f = S(f.slice(1)), null != f) {
                                f = "" + f;
                                a = 47 == f.charCodeAt(0) || 0 < f.indexOf("://") ? f + a.slice(e + 1) : a.slice(0, b) + f + a.slice(e + 1);
                                b = a.indexOf("%");
                                continue
                            }
                        } else switch (f) {
                            case _[502]:
                                h = 1 == d ? "" : g.firstxmlpath;
                                break;
                            case _[411]:
                                h = g.currentxmlpath;
                                break;
                            case _[513]:
                                h = 1 == d ? "" : g.swfpath;
                                break;
                            case _[501]:
                                h = 1 == d ? "" : g.htmlpath;
                                break;
                            case _[514]:
                                h = 1 == d ? "" : l.basedir
                        }
                        null != h ? (e++, "/" == a.charAt(e) && e++, a = h + a.slice(e), b = a.indexOf("%")) : b = a.indexOf("%", b + 1)
                    } else b = -1
                }
                return a
            }

            function f(d, f, g) {
                var m, k;
                0 <= (m = f.indexOf(_[363])) ? (k = f.indexOf(_[348])) > m && (f = f.slice(m + 11, k), m = f.indexOf(_[457]), 0 <= m && (f = f.slice(m + 9, -3), 0 <= f.indexOf(_[105]) && (f = f.split(_[105]).join(_[593])))) : g && 0 <= (m = f.indexOf('"[[KENC')) && (k = f.lastIndexOf(']]"')) > m && (f = f.slice(m + 3, k));
                var h = null;
                m = f.slice(0, 8);
                k = f.slice(8);
                g = !0 === g && La & 64 || !g && La & 32;
                if ("KENC" != m.slice(0, 4)) return f;
                f = !1;
                var c = 0,
                    p = 0,
                    p = 0,
                    l = !1,
                    c = String(m).charCodeAt(4);
                if (80 == c || 82 == c)
                    if (p = String(m).charCodeAt(5), 85 == p && (p = String(m).charCodeAt(6), l = 90 == p, 66 == p || l)) f = !0;
                if (f && (!g || 80 != c))
                    if (l) {
                        m = c;
                        h = k.length;
                        f = g = null;
                        var n = p = l = c = 0,
                            v = 0,
                            w = 0,
                            u = 0;
                        for (g = new r(4 * h / 5 | 0); c < h;) p = k.charCodeAt(c++) - 35, n = k.charCodeAt(c++) - 35, v = k.charCodeAt(c++) - 35, w = k.charCodeAt(c++) - 35, u = k.charCodeAt(c++) - 35, 56 < p && p--, 56 < n && n--, 56 < v && v--, 56 < w && w--, 56 < u && u--, u += 85 * (85 * (85 * (85 * p + n) + v) + w), g[l++] = u >> 24 & 255, g[l++] = u >> 16 & 255, g[l++] = u >> 8 & 255, g[l++] = u & 255;
                        g = b(g, m);
                        if (null == g) h = null;
                        else {
                            h = g[2] << 16 | g[1] << 8 | g[0];
                            f = new r(h);
                            h = 8 + (g[6] << 16 | g[5] << 8 | g[4]);
                            c = 8;
                            for (l = 0; c < h;) {
                                p = g[c++];
                                n = p >> 4;
                                for (v = n + 240; 255 === v; n += v = g[c++]);
                                for (w = c + n; c < w;) f[l++] = g[c++];
                                if (c === h) break;
                                u = l - (g[c++] | g[c++] << 8);
                                n = p & 15;
                                for (v = n + 240; 255 === v; n += v = g[c++]);
                                for (w = l + n + 4; l < w;) f[l++] = f[u++]
                            }
                            g.length = 0;
                            h = k = e(f)
                        }
                    } else h = a(k), (h = b(h, c)) && (h = e(h));
                null == h && d && cb(d + _[208]);
                return h
            }

            function e(a) {
                if (A) return A.decode(a);
                for (var b = "", d = 0, e = 0, f = 0, h = 0, c = a.length; d < c;) e = a[d], 128 > e ? (0 < e && (b += Kb(e)), d++) : 191 < e && 224 > e ? (f = a[d + 1], b += Kb((e & 31) << 6 | f & 63), d += 2) : (f = a[d + 1], h = a[d + 2], e = (e & 15) << 12 | (f & 63) << 6 | h & 63, 65279 != e && (b += Kb(e)), d += 3);
                return b
            }

            function k(a, b, d) {
                void 0 !== b ? b(a, d) : cb(a + _[101] + d + ")")
            }

            function m(a, b, e, f, r) {
                if (0 == g.DMcheck(a)) k(a, r, _[257]);
                else {
                    var h = null,
                        c = !1;
                    if (d.ie && "" == ca.domain) try {
                        h = new ActiveXObject(_[245]), c = !0
                    } catch (m) {
                        h = null
                    }
                    null == h && (h = new XMLHttpRequest);
                    void 0 !== h.overrideMimeType && b && h.overrideMimeType(b);
                    h.onreadystatechange = function() {
                        if (4 == h.readyState) {
                            var b = h.status,
                                d = h.responseText;
                            if (0 == b && d || 200 == b || 304 == b)
                                if (e) {
                                    var g = null,
                                        g = c ? (new DOMParser).parseFromString(d, _[36]) : h.responseXML;
                                    f(a, g, b)
                                } else f(a, d);
                            else k(a, r, h.status)
                        }
                    };
                    try {
                        h.open("GET", a, !0), h.send(null)
                    } catch (p) {
                        k(a, r, p)
                    }
                }
            }
            var g = na,
                w = 1;
            try {
                String.fromCharCode.apply(null, (new Uint8Array(4)).subarray(2))
            } catch (t) {
                w = 0
            }
            var r = w ? Uint8Array : Array,
                A = w && window.TextDecoder ? new TextDecoder : null,
                p = null;
            (function() {
                var a;
                p = new r(128);
                for (a = 0; 128 > a; a++) p[a] = 0;
                p[43] = 62;
                p[47] = 63;
                p[61] = 64;
                for (a = 48; 58 > a; a++) p[a] = a + 4;
                for (a = 65; 91 > a; a++) p[a] = a - 65;
                for (a = 97; 123 > a; a++) p[a] = a - 71
            })();
            g.firstxmlpath = null;
            g.currentxmlpath = null;
            g.swfpath = null;
            g.htmlpath = null;
            g.parsePath = x;
            g.DMcheck = function(a) {
                var b;
                if (La & 256 && (b = ca.domain) && Sc) {
                    a = a.toLowerCase();
                    var d = a.indexOf("://");
                    if (0 < d) {
                        var d = d + 3,
                            e = a.indexOf("/", d);
                        if (0 < e) return a = a.slice(d, e), d = a.indexOf(":"), 1 < d && (a = a.slice(0, d)), a == b
                    } else return b == Sc
                }
                return !0
            };
            var v = new function() {
                    var a, b, d;
                    this.srand = function(e, f) {
                        var h, c, g, m, k = new r(256);
                        for (h = 0; 256 > h; h++) k[h] = h;
                        for (c = h = 0; 256 > h; h++) c = c + k[h] + e[h % f] & 255, m = k[h], k[h] = k[c], k[c] = m;
                        for (g = c = h = 0; 256 > g; g++) h = h + 1 & 255, c = c + k[h] & 255, m = k[h], k[h] = k[c], k[c] = m;
                        a = k;
                        b = h;
                        d = c
                    };
                    this.flip = function(e, f, h) {
                        var c = new r(h),
                            g, m;
                        c.length = h;
                        var k = a,
                            p = b,
                            l = d;
                        for (g = 0; g < h; g++, f++) p = p + 1 & 255, l = l + k[p] & 255, c[g] = e[f] ^ a[k[p] + k[l] & 255], m = k[p], k[p] = k[l], k[l] = m;
                        b = p;
                        d = l;
                        return c
                    }
                },
                u = {},
                n = function() {
                    this.img = this.url = null;
                    this.retries = 0;
                    this.refs = 1;
                    this.state = 0;
                    this.cb_done = [];
                    this.cb_err = []
                };
            n.prototype.handleEvent = function(a) {
                a = a.type;
                var b = 1;
                if ("load" == a) b = 2;
                else if (_[94] == a) b = 4;
                else if (_[41] == a && (b = 3, ++this.retries < l.network.retrycount)) {
                    this.reload();
                    return
                }
                this.state = b;
                this.finish()
            };
            n.prototype.removeImage = function() {
                var a = this.img;
                a.removeEventListener("load", this);
                a.removeEventListener(_[41], this);
                a.removeEventListener(_[94], this);
                this.img = null
            };
            n.prototype.clear = function() {
                this.img = this.url = null;
                this.retries = 0;
                this.refs = 1;
                this.state = 0;
                this.cb_done.length = 0;
                this.cb_err.length = 0
            };
            n.prototype.load = function() {
                var a = this.img,
                    b = this.state;
                null == a && (a = Fa(1), a.addEventListener("load", this), a.addEventListener(_[41], this), a.addEventListener(_[94], this), this.img = a);
                0 == b && (this.state = 1, a.src = this.url)
            };
            n.prototype.reload = function() {
                this.removeImage();
                this.state = 0;
                this.load()
            };
            n.prototype.finish = function() {
                var a, b = this.img,
                    d = this.refs,
                    e = 4 == this.state,
                    f = 2 == this.state ? this.cb_done : this.cb_err;
                delete u[this.url];
                this.removeImage();
                for (a = 0; a < d; a++) {
                    var h = f[a];
                    h && h(b, e)
                }
                this.clear()
            };
            g.reportLoadingError = function(a, b, d) {
                a = _[337] + a + _[455];
                b && (a = b + " " + a);
                d && (a = a + " " + d);
                l.lasterror = a;
                0 == ya(_[385]) && va(3, a)
            };
            g.loadimage = function(a, b, d, e) {
                var f = u[a];
                f ? f.refs++ : (f = new n, f.url = a, u[a] = f);
                f.cb_done.push(b);
                f.cb_err.push(d);
                a = f;
                !0 === e && (a.retries = l.network.retrycount);
                a.load();
                return a.img
            };
            g.iOSWakelockCheck = function() {
                for (var a in u) u[a].reload()
            };
            g.loadfile = function(a, b, d) {
                g.loadfile2(a, null, b, d)
            };
            g.loadxml = function(a, b, d) {
                g.loadfile2(a, _[36], b, d, !0)
            };
            g.loadfile2 = function(a, b, d, e, g) {
                g = !0 === g;
                var h = {
                    errmsg: !0
                };
                h.rqurl = a;
                a = x(a);
                h.url = a;
                m(a, b, g, function(a, m, r) {
                    !0 === g ? d(m, r) : (m = f(a, m, _[111] == b), h.data = m, null != m ? d && d(h) : e && e(h))
                }, g ? e : function(b, d) {
                    e && e(h);
                    h.errmsg && va(3, a + _[101] + d + ")")
                })
            };
            g.resolvecontentencryption = f;
            g.b64u8 = function(b) {
                return e(a(b))
            };
            g.decodeLicense = function(a) {
                return null
            }
        })();
        var fa = {};
        (function() {
            function a(b) {
                var d, e, f = b.childNodes,
                    g;
                e = f.length;
                for (d = 0; d < e; d++)
                    if (g = f.item(d)) switch (g.nodeType) {
                        case 1:
                            a(g);
                            break;
                        case 8:
                            b.removeChild(g), d--, e--
                    }
            }

            function b(a, b) {
                var d, e, f = a.childNodes,
                    g = -1;
                e = f.length;
                if (1 <= e)
                    for (d = 0; d < e; d++)
                        if (G(f[d].nodeName) == b) {
                            g = d;
                            break
                        }
                return 0 <= g ? f[g] : null
            }

            function x(b, e, f, g, m) {
                var k, u, n, y = null,
                    t = null,
                    B, C;
                C = 0;
                var z, h = b.length,
                    c = new XMLSerializer,
                    F = !1;
                g || (F = !0, g = [], m = [], l.xml.parsetime = Ja());
                for (var E = 0; E < h; E++)
                    if ((k = b[E]) && k.nodeName && "#text" != k.nodeName && (u = k.nodeName, u = G(u), _[144] != u)) {
                        u = null == e && _[57] == u ? null : e ? e + "." + u : u;
                        if (n = k.attributes)
                            if (n.devices && 0 == d.checkSupport(n.devices.value)) continue;
                            else if (n["if"] && !Z.calc(null, n["if"].value)) continue;
                        z = (t = n && n.name ? n.name.value : null) ? !0 : !1;
                        if (f) {
                            if (_[517] == u && f & 16) continue;
                            if ((_[62] == u || _[63] == u) && f & 4) continue;
                            if (_[5] == u && f & 128) continue;
                            if (_[96] == u && f & 65536) continue;
                            if (f & 64 && t)
                                if (_[62] == u || _[63] == u) {
                                    if ((y = Ga.getItem(t)) && y._pCD && y.keep) continue
                                } else if (_[5] == u && (y = Ua.getItem(t)) && y._pCD && y.keep) continue
                        }
                        if (u)
                            if (z) {
                                if (_[11] == u || "data" == u || "scene" == u) {
                                    a(k);
                                    z = null;
                                    if ((_[11] == u || "data" == u) && k.childNodes && 1 <= k.childNodes.length)
                                        for (y = 0; y < k.childNodes.length; y++)
                                            if (4 == k.childNodes[y].nodeType) {
                                                z = k.childNodes[y].nodeValue;
                                                break
                                            }
                                    null == z && (z = c.serializeToString(k), z = z.slice(z.indexOf(">") + 1, z.lastIndexOf("</")), _[11] == u && (z = z.split(_[589]).join('"').split(_[588]).join("'").split(_[161]).join(String.fromCharCode(160)).split("&amp;").join("&")));
                                    _[11] == u && la(k.getAttribute(_[520])) ? Z.addPAction(G(t), z) : Y(u + "[" + t + _[79], z);
                                    if (n) {
                                        var N;
                                        z = n.length;
                                        for (N = 0; N < z; N++)
                                            if (B = n[N], y = G(B.nodeName), B = B.value, "name" != y) {
                                                C = y.indexOf(".");
                                                if (0 < C)
                                                    if (d.checkSupport(y.slice(C + 1))) y = y.slice(0, C);
                                                    else continue;
                                                C = u + "[" + t + "]." + G(y);
                                                Y(C, B)
                                            }
                                    }
                                    continue
                                }
                                u = u + "[" + t + "]";
                                if (!ud(t, u)) continue;
                                Y(u + ".name", t)
                            } else(t = S(u)) && t.isArray && !t.isDynArray && (t = "n" + String(t.count), u = u + "[" + t + "]", Y(u + ".name", t));
                        if (n) {
                            var X = "view" == u,
                                y = u ? S(u) : null,
                                t = null;
                            z = n.length;
                            y && (y._lateBinding && (t = y._lateBinding), (B = n.style) && (B = B.value) && null == t && (y.style = B, m.push(u), t = y._lateBinding = {}));
                            for (N = 0; N < z; N++) {
                                B = n[N];
                                y = G(B.nodeName);
                                B = B.value;
                                var O = u ? u + "." : "";
                                if ("name" != y && "style" != y) {
                                    C = y.indexOf(".");
                                    if (0 < C)
                                        if (d.checkSupport(y.slice(C + 1))) y = y.slice(0, C).toLowerCase();
                                        else continue;
                                    C = O + y;
                                    t ? t[y] = B : !B || _[1] != typeof B || "get:" != B.slice(0, 4) && "calc:" != B.slice(0, 5) ? (Y(C, B), X && Y("xml." + C, B)) : (g.push(C), g.push(B))
                                }
                            }
                        }
                        k.childNodes && 0 < k.childNodes.length && x(k.childNodes, u, f, g, m)
                    }
                if (F) {
                    h = g.length;
                    for (E = 0; E < h; E += 2) Y(g[E], g[E + 1]);
                    h = m.length;
                    for (E = 0; E < h; E++)
                        if (u = m[E], Z.assignstyle(u, null), y = S(u))
                            if (t = y._lateBinding) Z.copyattributes(y, t), y._lateBinding = null;
                    l.xml.parsetime = Ja() - l.xml.parsetime
                }
            }

            function f(a, b) {
                var d = null,
                    e, g;
                g = a.length;
                for (e = 0; e < g; e++)
                    if (d = a[e], !d || !d.nodeName || _[11] != G(d.nodeName)) {
                        var m = d.attributes;
                        if (m) {
                            var k, l = m.length,
                                x;
                            for (k = 0; k < l; k++) {
                                var t = m[k];
                                x = G(t.nodeName);
                                var B = x.indexOf(".");
                                0 < B && (x = x.slice(0, B));
                                if (_[498] == x) {
                                    x = t.value;
                                    var B = x.split("|"),
                                        C, z;
                                    z = B.length;
                                    for (C = 0; C < z; C++) x = B[C], "" != x && 0 > x.indexOf("://") && 47 != x.charCodeAt(0) && (B[C] = b + x);
                                    t.value = B.join("|")
                                } else if (B = x.indexOf("url"), 0 == B || 0 < B && B == x.length - 3)
                                    if (x = t.value) B = x.indexOf(":"), C = x.charCodeAt(0), 47 == C || 37 == C && 36 != x.charCodeAt(1) || 0 < B && ("//" == x.substr(B + 1, 2) || 0 <= _[113].indexOf(x.substr(0, B + 1))) || (x = b + x), t.value = x
                            }
                        }
                        d.childNodes && 0 < d.childNodes.length && f(d.childNodes, b)
                    }
            }

            function e(a, b) {
                var d = Mc(b),
                    e = d.lastIndexOf("/"),
                    g = d.lastIndexOf("\\");
                g > e && (e = g);
                0 < e && (d = d.slice(0, e + 1), f(a, d))
            }

            function k(a, d) {
                var e = b(a, _[447]);
                if (e) {
                    var f = "",
                        g, k;
                    k = e.childNodes.length;
                    for (g = 0; g < k; g++) f += e.childNodes[g].nodeValue;
                    return (e = na.resolvecontentencryption(d, f)) ? (e = (new DOMParser).parseFromString(e, _[36])) && e.documentElement && _[32] == e.documentElement.nodeName ? (va(3, d + _[28]), null) : e : null
                }
                return La & 32 ? (cb(d + _[212]), null) : a
            }

            function m(a, b) {
                var d, e;
                switch (a.nodeType) {
                    case 1:
                        var f = fa.xmlDoc.createElement(a.nodeName);
                        if (a.attributes && 0 < a.attributes.length)
                            for (d = 0, e = a.attributes.length; d < e;) f.setAttribute(a.attributes[d].nodeName, a.getAttribute(a.attributes[d++].nodeName));
                        if (b && a.childNodes && 0 < a.childNodes.length)
                            for (d = 0, e = a.childNodes.length; d < e;) f.appendChild(m(a.childNodes[d++], b));
                        return f;
                    case 3:
                    case 4:
                    case 8:
                        return fa.xmlDoc.createTextNode(a.nodeValue)
                }
            }

            function g(a, b) {
                var f, l, p;
                if (null != fa.xmlIncludeNode) {
                    p = Mc(a.url);
                    if ((l = a.responseXML) && l.documentElement && _[32] == l.documentElement.nodeName) {
                        cb(p + _[28]);
                        return
                    }
                    l = k(l, a.url);
                    if (null == l) return;
                    e(l.childNodes, p);
                    f = l.childNodes;
                    var x = fa.xmlIncludeNode.parentNode;
                    if (null != x.parentNode) {
                        var u = 0;
                        p = f.length;
                        if (1 < p)
                            for (l = 0; l < p; l++)
                                if (_[57] == G(f[l].nodeName)) {
                                    u = l;
                                    break
                                }
                        l = null;
                        l = void 0 === fa.xmlDoc.importNode ? m(f[u], !0) : fa.xmlDoc.importNode(f[u], !0);
                        x.insertBefore(l, fa.xmlIncludeNode);
                        x.removeChild(fa.xmlIncludeNode)
                    } else fa.xmlDoc = l;
                    fa.xmlAllNodes = [];
                    fa.addNodes(fa.xmlDoc.childNodes);
                    fa.xmlIncludeNode = null
                }
                x = !1;
                p = fa.xmlAllNodes.length;
                for (l = 0; l < p; l++)
                    if (f = fa.xmlAllNodes[l], u = null, null != f.nodeName) {
                        u = G(f.nodeName);
                        if (_[144] == u) {
                            var u = f.attributes,
                                n, t = u.length,
                                I = !1;
                            for (n = 0; n < t; n++) {
                                var B = u[n];
                                _[522] == B.nodeName ? 0 == d.checkSupport(B.value) && (I = !0) : "if" == B.nodeName && (Z.calc(null, B.value) || (I = !0))
                            }
                            if (0 == I)
                                for (n = 0; n < t; n++)
                                    if (B = u[n], "url" == G(B.nodeName)) {
                                        x = !0;
                                        I = B.value;
                                        B = I.indexOf(":");
                                        0 < B && 0 <= _[113].indexOf(I.substr(0, B + 1)) && (I = Z.calc(null, I.substr(B + 1)));
                                        fa.xmlIncludeNode = f;
                                        var C = na.parsePath(I);
                                        C ? na.loadxml(C, function(a, d) {
                                            a ? g({
                                                url: C,
                                                responseXML: a
                                            }, b) : cb(C + " - " + (200 == d ? _[225] : _[198]))
                                        }) : b()
                                    }
                        }
                        if (x) break
                    }
                0 == x && b()
            }
            fa.resolvexmlencryption = k;
            fa.resolvexmlincludes = function(a, b) {
                var d = a.childNodes;
                fa.xmlDoc = a;
                fa.xmlAllNodes = [];
                fa.addNodes(d);
                e(d, l.xml.url);
                fa.xmlIncludeNode = null;
                g(null, b)
            };
            fa.parsexml = x;
            fa.xmlDoc = null;
            fa.xmlAllNodes = null;
            fa.xmlIncludeNode = null;
            fa.addNodes = function(a) {
                var b, d, e;
                e = a.length;
                for (d = 0; d < e; d++)(b = a[d]) && b.nodeName && _[11] != G(b.nodeName) && (fa.xmlAllNodes.push(b), b.childNodes && 0 < b.childNodes.length && fa.addNodes(b.childNodes))
            };
            fa.findxmlnode = b
        })();
        var zc = {};
        (function() {
            var a = zc;
            a.linear = function(a, d, f) {
                return f * a + d
            };
            a.easeinquad = function(a, d, f) {
                return f * a * a + d
            };
            a.easeoutquad = function(a, d, f) {
                return -f * a * (a - 2) + d
            };
            a[_[6]] = a.easeoutquad;
            a.easeinoutquad = function(a, d, f) {
                return (1 > (a /= .5) ? f / 2 * a * a : -f / 2 * (--a * (a - 2) - 1)) + d
            };
            a.easeinback = function(a, d, f) {
                return f * a * a * (2.70158 * a - 1.70158) + d
            };
            a.easeoutback = function(a, d, f) {
                return f * (--a * a * (2.70158 * a + 1.70158) + 1) + d
            };
            a.easeinoutback = function(a, d, f) {
                var e = 1.70158;
                return 1 > (a *= 2) ? f / 2 * a * a * (((e *= 1.525) + 1) * a - e) + d : f / 2 * ((a -= 2) * a * (((e *= 1.525) + 1) * a + e) + 2) + d
            };
            a.easeincubic = function(a, d, f) {
                return f * a * a * a + d
            };
            a.easeoutcubic = function(a, d, f) {
                return f * (--a * a * a + 1) + d
            };
            a.easeinquart = function(a, d, f) {
                return f * a * a * a * a + d
            };
            a.easeoutquart = function(a, d, f) {
                return -f * ((a = a / 1 - 1) * a * a * a - 1) + d
            };
            a.easeinquint = function(a, d, f) {
                return f * a * a * a * a * a + d
            };
            a.easeoutquint = function(a, d, f) {
                return f * ((a = a / 1 - 1) * a * a * a * a + 1) + d
            };
            a.easeinsine = function(a, d, f) {
                return -f * Math.cos(Ma / 2 * a) + f + d
            };
            a.easeoutsine = function(a, d, f) {
                return f * Math.sin(Ma / 2 * a) + d
            };
            a.easeinexpo = function(a, d, f) {
                return 0 == a ? d : f * Math.pow(2, 10 * (a - 1)) + d - .001 * f
            };
            a.easeoutexpo = function(a, d, f) {
                return 1 == a ? d + f : 1.001 * f * (-Math.pow(2, -10 * a) + 1) + d
            };
            a.easeincirc = function(a, d, f) {
                return -f * (Math.sqrt(1 - a * a) - 1) + d
            };
            a.easeoutcirc = function(a, d, f) {
                return f * Math.sqrt(1 - (a = a / 1 - 1) * a) + d
            };
            a.easeoutbounce = function(a, d, f) {
                return a < 1 / 2.75 ? 7.5625 * f * a * a + d : a < 2 / 2.75 ? f * (7.5625 * (a -= 1.5 / 2.75) * a + .75) + d : a < 2.5 / 2.75 ? f * (7.5625 * (a -= 2.25 / 2.75) * a + .9375) + d : f * (7.5625 * (a -= 2.625 / 2.75) * a + .984375) + d
            };
            a.easeinbounce = function(b, d, f) {
                return f - a.easeoutbounce(1 - b, 0, f) + d
            };
            a.getTweenfu = function(d) {
                d = G(d);
                "" == d || "null" == d ? d = _[75] : void 0 === a[d] && (d = _[75]);
                return a[d]
            }
        })();
        var Z = {};
        (function() {
            function a(a, d, b) {
                var c, e = a.length;
                b = 1 != b;
                for (c = 0; c < e; c++) {
                    var q = "" + a[c],
                        f = q.toLowerCase();
                    b && "null" == f ? a[c] = null : 41 == q.charCodeAt(q.length - 1) && (f = f.slice(0, 4), "get(" == f ? a[c] = S(Qa(q.slice(4, q.length - 1)), d) : "calc" == f && 40 == q.charCodeAt(4) && (a[c] = S(q, d)))
                }
            }

            function d(a, b) {
                var c, q, e, f = 0,
                    g = 0,
                    h = 0;
                e = "";
                c = 0;
                for (q = a.length; c < q;) {
                    e = a.charCodeAt(c);
                    if (!(32 >= e))
                        if (34 == e) 0 == h ? h = 1 : 1 == h && (h = 0);
                        else if (39 == e) 0 == h ? h = 2 : 2 == h && (h = 0);
                    else if (0 == h)
                        if (91 == e) 0 == g && (g = c + 1), f++;
                        else if (93 == e && 0 < f && (f--, 0 == f)) {
                        if (e = lc(a, g, c, b)) a = a.slice(0, g) + e + a.slice(c), c = g + e.length + 1, q = a.length;
                        g = 0
                    }
                    c++
                }
                return a
            }

            function x(a, d) {
                var b = "",
                    c, e, q, f, g;
                q = a.length;
                g = d.length;
                for (e = 0; e < q; e++) c = a.charAt(e), "%" == c ? (e++, c = a.charCodeAt(e) - 48, 0 <= c && 9 >= c ? (e + 1 < q && (f = a.charCodeAt(e + 1) - 48, 0 <= f && 9 >= f && (e++, c = 10 * c + f)), b = c < g ? b + ("" + d[c]) : b + "null") : b = -11 == c ? b + "%" : b + ("%" + a.charAt(e))) : b += c;
                return b
            }

            function f(a, d, b, c) {
                b = Array.prototype.slice.call(b);
                b.splice(0, 0, a);
                d = x(d, b);
                h.callaction(d, c, !0)
            }

            function e(a) {
                a.position = P ? 0 : 1
            }

            function k(a, d, b) {
                var krpano = l;
                var caller = b;
                var args = d;
                var resolve = B;
                var actions = h;
                try {
                    eval(a, b)
                } catch (c) {
                    va(3, d[0] + " - " + c)
                }
            }

            function m(a) {
                var d = E,
                    b = d.length,
                    c;
                for (c = 0; c < b; c++)
                    if (d[c].id == a) {
                        a = d.splice(c, 1);
                        ea === a && (ea = null);
                        a && a[0].blockedactions && (K.splice(K.indexOf(a), 1), h.executeActions(a[0].blockedactions));
                        break
                    }
            }

            function g(a) {
                va(2, _[197] + a)
            }

            function w(a) {
                var d = a.length;
                if (2 == d || 3 == d) {
                    var b = S(a[d - 2], h.actioncaller),
                        c = S(a[d - 1], h.actioncaller);
                    null == b && (b = a[d - 2]);
                    null == c && (c = a[d - 1]);
                    return [a[0], parseFloat(b), parseFloat(c)]
                }
                return null
            }

            function H(a, d, b) {
                var c = 1 == d.length ? S(d[0], b) : d[1],
                    c = 0 == a ? escape(c) : unescape(c);
                Y(d[0], c, !1, b, !0)
            }

            function r(a) {
                var d, b = a.length,
                    c = 0,
                    e = 0,
                    q = !1,
                    f = !1,
                    g = 0,
                    h = 0,
                    D = 0,
                    k = !1,
                    m = [],
                    p = 0,
                    n = 0;
                for (d = 0; d < b; d++)
                    if (n = a.charCodeAt(d), 0 == k && 32 >= n) 0 < e && (m[p++] = a.substr(c, e), e = 0), q = !1;
                    else if (0 == k && (61 == n || 33 == n && 61 == a.charCodeAt(d + 1) || 62 == n || 60 == n)) 0 == q && (0 < e ? (m[p++] = a.substr(c, e), e = 0) : 0 == p && 0 == l.strict && (m[p++] = ""), q = !0, f = !1, c = d), e++;
                else if (0 != k || 43 != n && 45 != n && 42 != n && 47 != n && 94 != n && 63 != n && 58 != n) {
                    if (0 == D)
                        if (91 == n) g++, k = !0;
                        else if (93 == n) g--, 0 == g && 0 == h && (k = !1);
                    else if (40 == n) h++, k = !0;
                    else if (41 == n) h--, 0 == h && 0 == g && (k = !1);
                    else {
                        if (39 == n || 34 == n) D = n, k = !0
                    } else n == D && (D = 0, 0 == g && 0 == h && (k = !1));
                    if (q || f) 0 < e && (m[p++] = a.substr(c, e), e = 0), f = q = !1, c = d;
                    0 == e && (c = d);
                    e++
                } else 0 < e && (m[p++] = a.substr(c, e)), q = !1, f = !0, c = d, e = 1;
                0 < e && (m[p++] = a.substr(c, e));
                2 == p && q && 0 == l.strict && (m[p++] = "");
                return m
            }

            function A(a) {
                var d = a.length;
                if (!(3 > d)) {
                    var b, c;
                    for (b = 1; b < d - 1; b++)
                        if (c = a[b], "==" == c || "!=" == c) {
                            a[b - 1] = "@" + a[b - 1];
                            c = a[b + 1];
                            if ("+" == c || "-" == c)
                                for (b++, c = a[b + 1];
                                    "+" == c || "-" == c;) b++, c = a[b + 1];
                            a[b + 1] = "@" + c
                        }
                }
            }

            function p(a) {
                var d = D,
                    b = a.length,
                    c, e;
                if (1 == b) a[0] = n(a[0]);
                else
                    for (c = 0; c < b; c++)
                        if (e = a[c], !(0 <= d.indexOf("." + e + "."))) {
                            switch (e) {
                                case "AND":
                                    e = "&&";
                                    break;
                                case "OR":
                                    e = "||";
                                    break;
                                case "GT":
                                    e = ">";
                                    break;
                                case "GE":
                                    e = ">=";
                                    break;
                                case "LT":
                                    e = "<";
                                    break;
                                case "LE":
                                    e = "<=";
                                    break;
                                case "EQ":
                                    e = "==";
                                    break;
                                case "LSHT":
                                    e = "<<";
                                    break;
                                case "RSHT":
                                    e = ">>";
                                    break;
                                case "BAND":
                                    e = "~&";
                                    break;
                                case "BOR":
                                    e = "~|";
                                    break;
                                default:
                                    e = n(e)
                            }
                            a[c] = e
                        }
            }

            function v(a) {
                var d = a.length;
                if (!(2 > d)) {
                    var b = D,
                        c, e, q = null;
                    for (c = 0; c < a.length; c++)
                        if (q = a[c], "+" == q || "-" == q)
                            if (0 == c || 0 <= b.indexOf("." + a[c - 1] + ".")) {
                                e = 45 == q.charCodeAt(0) ? -1 : 1;
                                d = 1;
                                for (q = "" + a[c + d];
                                    "+" == q || "-" == q;) e *= 45 == q.charCodeAt(0) ? -1 : 1, d++, q = "" + a[c + d];
                                q && 40 == q.charCodeAt(0) && (q = n(q));
                                q = q && 37 == q.charCodeAt(q.length - 1) ? parseFloat(q) * e + "%" : Number(q) * e;
                                a.splice(c, 1 + d, q);
                                --c
                            }
                    for (c = 1; c < a.length - 1; c++) q = a[c], "*" == q ? (a.splice(c - 1, 3, Number(a[c - 1]) * Number(a[c + 1])), c -= 3) : "/" == q ? (a.splice(c - 1, 3, Number(a[c - 1]) / Number(a[c + 1])), c -= 3) : "^" == q ? (a.splice(c - 1, 3, Math.pow(Number(a[c - 1]), Number(a[c + 1]))), c -= 3) : "<<" == q ? (a.splice(c - 1, 3, Number(a[c - 1]) << Number(a[c + 1])), c -= 3) : ">>" == q ? (a.splice(c - 1, 3, Number(a[c - 1]) >> Number(a[c + 1])), c -= 3) : "~&" == q ? (a.splice(c - 1, 3, Number(a[c - 1]) & Number(a[c + 1])), c -= 3) : "~|" == q && (a.splice(c - 1, 3, Number(a[c - 1]) | Number(a[c + 1])), c -= 3);
                    for (c = 1; c < a.length - 1; c++) q = a[c], "+" == q ? (a.splice(c - 1, 3, a[c - 1] + a[c + 1]), c -= 3) : "-" == q && (a.splice(c - 1, 3, Number(a[c - 1]) - Number(a[c + 1])), c -= 3)
                }
            }

            function u(a) {
                if (1 == a.length) return a[0];
                var c, d = null,
                    b = null,
                    e = null,
                    d = !1;
                for (c = 0; c < a.length; c++)
                    if (d = "" + a[c], 0 < d.length && 0 <= _[496].indexOf(d)) {
                        if (0 == c || c >= a.length - 1) throw _[43];
                        b = a[c - 1];
                        e = a[c + 1];
                        switch (d) {
                            case "===":
                            case "==":
                                d = b == e;
                                break;
                            case "!==":
                            case "!=":
                                d = b != e;
                                break;
                            case "<":
                                d = b < e;
                                break;
                            case "<=":
                                d = b <= e;
                                break;
                            case ">":
                                d = b > e;
                                break;
                            case ">=":
                                d = b >= e;
                                break;
                            default:
                                throw _[43];
                        }
                        a.splice(c - 1, 3, d);
                        c -= 2
                    }
                if (1 == a.length) return a[0];
                for (c = 0; c < a.length; c++)
                    if (d = a[c], "&&" == d || "||" == d) {
                        if (0 == c || c >= a.length - 1) throw _[43];
                        b = a[c - 1];
                        e = a[c + 1];
                        d = "&&" == d ? b && e : b || e;
                        a.splice(c - 1, 3, d);
                        c -= 2
                    }
                if (5 == a.length && "?" == a[1] && ":" == a[3]) return a[0] ? a[2] : a[4];
                if (1 < a.length) throw _[43];
                return a[0]
            }

            function n(a) {
                var c = void 0,
                    c = G(a),
                    d = c.charCodeAt(0),
                    b, e = 0,
                    f = !1;
                64 == d && (f = !0, a = a.slice(1), c = c.slice(1), d = c.charCodeAt(0));
                if (39 == d || 34 == d) {
                    a = Qa(a);
                    if (f && 5 >= a.length) {
                        c = G(a);
                        if ("true" == c) return !0;
                        if (_[26] == c) return !1;
                        if ("null" == c) return null
                    }
                    2 >= a.length && 0 <= D.indexOf("." + a + ".") && (a = q + a + q);
                    return a
                }
                if (33 == d || 43 == d || 45 == d) e = d, a = a.slice(1), c = c.slice(1), d = c.charCodeAt(0);
                b = c.charCodeAt(c.length - 1);
                40 == d && 41 == b ? c = y(a.slice(1, -1)) : 37 == b ? c = a : (c = "null" != c ? S(a, h.actioncaller, !0) : null, void 0 === c ? (d = Number(a), isNaN(d) || isNaN(parseFloat(a)) ? f && (c = a) : c = d) : _[1] == typeof c && (a = G(c), "true" == a ? c = !0 : _[26] == a ? c = !1 : "null" == a ? c = null : (a = Number(c), isNaN(a) || (c = a))));
                33 == e ? c = !c : 45 == e && (c = -c);
                return c
            }

            function y(a) {
                var c;
                if ("" == a || null === a) return a;
                try {
                    var d = r(a);
                    0 == l.strict && A(d);
                    p(d);
                    v(d);
                    c = u(d);
                    _[1] == typeof c && (c = c.split(q).join(""))
                } catch (b) {
                    va(3, b + ": " + a)
                }
                return c
            }

            function I(a) {
                var c = a.position;
                1 == a.motionmode ? (c *= a.Tmax, c <= a.T1 ? c *= a.accelspeed / 2 * c : c > a.T1 && c <= a.T1 + a.T2 ? c = a.S1 + (c - a.T1) * a.Vmax : (c -= a.T1 + a.T2, c = a.Vmax * c + a.breakspeed / 2 * c * c + a.S1 + a.S2), c = 0 != a.Smax ? c / a.Smax : 1) : 2 == a.motionmode && (c = a.tweenfu(c, 0, 1));
                t.hlookat = a.startH + c * (a.destH - a.startH);
                t.vlookat = a.startV + c * (a.destV - a.startV);
                t.fov = a.startF + c * (a.destF - a.startF);
                bb(_[578])
            }

            function B(a, c) {
                var d = S(a, c);
                null == d && (d = a);
                return d
            }

            function C(a) {
                var c = a.waitfor;
                "load" == c ? Ya.isLoading() && (a.position = 0) : "blend" == c && Ya.isBlending() && (a.position = 0);
                bb("wait")
            }

            function z(a) {
                var c = a.varname,
                    d = parseFloat(a.startval),
                    b = parseFloat(a.endval),
                    e = null != a.startval ? 0 < String(a.startval).indexOf("%") : !1,
                    q = null != a.endval ? 0 < String(a.endval).indexOf("%") : !1;
                q ? e || (d = 0) : e && 0 == b && (q = !0);
                var e = 0,
                    e = a.position,
                    f = a.tweenmap;
                0 <= c.indexOf(_[24], c.lastIndexOf(".") + 1) ? (d = parseInt(a.startval), b = parseInt(a.endval), 1 <= e ? e = b : (e = f(e, 0, 1), e = Math.min(Math.max((d >> 24) + e * ((b >> 24) - (d >> 24)), 0), 255) << 24 | Math.min(Math.max((d >> 16 & 255) + e * ((b >> 16 & 255) - (d >> 16 & 255)), 0), 255) << 16 | Math.min(Math.max((d >> 8 & 255) + e * ((b >> 8 & 255) - (d >> 8 & 255)), 0), 255) << 8 | Math.min(Math.max((d & 255) + e * ((b & 255) - (d & 255)), 0), 255))) : e = 1 <= e ? b : f(e, d, b - d);
                Y(c, q ? e + "%" : e, !0, a.actioncaller);
                null != a.updatefu && h.callaction(a.updatefu, a.actioncaller)
            }
            var h = Z,
                c = !1;
            h.blocked = !1;
            h.actioncaller = null;
            var F = {};
            h.addPAction = function(a, c) {
                F[a] = c
            };
            var E = [],
                N = [],
                X = [],
                O = null,
                R = 0,
                K = [],
                Ba = null,
                ea = null,
                P = null,
                qa = function() {
                    this.blockedactions = this.id = null;
                    this.position = this.maxruntime = this.starttime = 0;
                    this.updatefu = this.actioncaller = this.donecall = this.process = null
                };
            h.copyattributes = function(a, c) {
                for (var d in c) {
                    var b = G(d);
                    if ("name" != b && "index" != b && "_type" != b) {
                        var e = c[d];
                        if (_[15] !== typeof e) {
                            if (e && _[1] == typeof e) {
                                var q = e.slice(0, 4);
                                "get:" == q ? e = S(e.slice(4)) : "calc" == q && 58 == e.charCodeAt(4) && (e = y(e.slice(5)))
                            }
                            a[b] = _[53] == typeof a[b] ? la(e) : e
                        }
                    }
                }
            };
            h.assignstyle = function(a, c) {
                var d = S(a);
                if (d && (null == c && (c = d.style), c)) {
                    d.style = c;
                    var b = c.split("|"),
                        e, q;
                    q = b.length;
                    for (e = 0; e < q; e++) {
                        var f = S(_[573] + b[e] + "]");
                        f ? h.copyattributes(d, f) : va(3, a + _[214] + b[e])
                    }
                }
            };
            h.checkInterrupt = function() {
                if (0 < K.length) {
                    var a = O;
                    if (a) {
                        O = null;
                        var c = E,
                            d = c.length,
                            b;
                        for (b = 0; b < d; b++) {
                            var e = c[b];
                            e && e.blockedactions && (c.splice(b, 1), d--, b--)
                        }
                        Ba = ea = null;
                        K = [];
                        "break" != G(a) && h.callaction(a)
                    }
                }
            };
            h.isblocked = function() {
                return 0 < K.length || c
            };
            h.isBusy = function() {
                return c
            };
            h.actions_autorun = function(a, c) {
                var d = l.action.getArray(),
                    b = [],
                    e, q, f = null;
                q = d.length;
                for (e = 0; e < q; e++)(f = d[e]) && f.autorun == a && !f._arDone && (f._arDone = !0, b.push(f));
                q = b.length;
                if (0 < q) {
                    d = "";
                    for (e = 0; e < q; e++) f = b[e], d += _[536] + f.name + ");";
                    h.callaction(d, null, c)
                }
            };
            h.callwith = function(a, c) {
                var d = S(a, h.actioncaller);
                if (d) {
                    var b = d._type;
                    _[62] != b && _[5] != b || h.callaction(c, d)
                }
            };
            h.callaction = function(a, c, d) {
                a && "null" != a && "" != a && (d = typeof a, _[15] === d ? a() : _[87] !== d && h.executeActions(Ab(a, c, !1)))
            };
            h.haltActions = function() {
                c = !0;
                var a = new qa;
                a.id = "HALT" + ++R;
                a.maxruntime = 1;
                a.process = e;
                a.starttime = Ja();
                a.actioncaller = h.actioncaller;
                a.blockedactions = [];
                Ba = a;
                K.push(a);
                E.push(a);
                P = a
            };
            h.resumeActions = function() {
                c = !1;
                P && (Ba === P && (Ba = null), P = null)
            };
            h.processactions = function() {};
            var Q = 0,
                W = 0,
                ra = 0;
            h.executeActions = function(c) {
                if (null != c) {
                    Q++;
                    if (1 == Q) ra = 0;
                    else if (0 < ra) return;
                    for (var d = null, b = null, e = null, d = null, q = h.actioncaller, f = 0, f = 0; f < c.length; f++) {
                        if (P && 0 == W) {
                            P.blockedactions = P.blockedactions.concat(c.slice(f));
                            break
                        }
                        if (Ba && 0 == W) {
                            Ba.blockedactions = Ba.blockedactions.concat(c.slice(f));
                            break
                        }
                        var d = c[f],
                            b = String(d.cmd),
                            e = d.args.slice(0),
                            g = d.caller;
                        g && !0 === g._destroyed && (d.caller = g = null);
                        h.actioncaller = g;
                        if ("//" != b.slice(0, 2)) {
                            if ("call" == b) b = G(e.shift());
                            else if ("break" == b) {
                                ra = Q;
                                break
                            }
                            a(e, g, "set" == b);
                            if (_[279] == b && 0 == la(e[1])) {
                                var b = e[0],
                                    b = G(b),
                                    D = null,
                                    D = l.events[b];
                                null != D && void 0 !== D && "" != D && h.nexttick(D);
                                e = l.events.getArray();
                                g = e.length;
                                d = void 0;
                                for (d = 0; d < g; d++)
                                    if (D = e[d]) D = D[b], null != D && void 0 !== D && "" != D && h.nexttick(D)
                            } else if (void 0 !== h[b]) h[b].apply(h[b], e);
                            else if (g && void 0 !== g[b]) d = g[b], _[15] === typeof d ? d.apply(d, e) : h.executeActions(Ab(g[b], g, !1));
                            else {
                                if (_[11] == b || "call" == b) b = G(e.shift());
                                d = null;
                                null != (d = S(b)) ? (D = typeof d, _[15] === D ? d.apply(d, e) : _[87] === D ? va(2, _[109] + td(b)) : _[1] === typeof d && (e.splice(0, 0, b), d = x(d, e), h.executeActions(Ab(d, g, !1)))) : (D = S(_[544] + b + "]")) ? ((d = D.content) || (d = F[b]), d && (e.splice(0, 0, b), _[424] === G(D.type) ? k(d, e, g) : (d = x(d, e), h.executeActions(Ab(d, g, !1))))) : va(2, _[109] + td(b))
                            }
                        }
                    }
                    h.actioncaller = q;
                    Q--;
                    0 == Q && (ra = 0, Ba = null)
                }
            };
            h.processAnimations = function(a) {
                var c = !1,
                    d = E,
                    b = d.length,
                    e, q = Ja();
                a = 1 == a;
                for (e = 0; e < b; e++) {
                    var f = d[e];
                    if (f) {
                        var g = 0 < f.maxruntime ? (q - f.starttime) / 1E3 / f.maxruntime : 1;
                        isNaN(g) && (g = 1);
                        1 < g && (g = 1);
                        f.position = g;
                        null != f.process && (c = !0, f.process(f), g = f.position);
                        if (1 <= g || a) d.splice(e, 1), b--, e--, f.blockedactions ? (ea === f && (ea = null), K.splice(K.indexOf(f), 1), 0 < f.blockedactions.length && 0 == a && (g = f.blockedactions, f.blockedactions = null, h.executeActions(g))) : f.donecall && 0 == a && h.callaction(f.donecall, f.actioncaller)
                    }
                }
                return c
            };
            h.processTicks = function() {
                var a = N,
                    c = a.length,
                    d;
                if (0 < c)
                    for (N = [], d = 0; d < c; d++) {
                        var b = a[d],
                            e = b.actioncaller;
                        e && !0 === e._destroyed && (b.actioncaller = e = null);
                        h.callaction(b.call, e)
                    }
            };
            h.fromcharcode = function() {
                var a = arguments;
                2 == a.length && Y(a[0], String.fromCharCode(B(a[1], h.actioncaller)), !1, h.actioncaller)
            };
            h.stopmovements = function() {
                eb.stopFrictions(4)
            };
            h.stopall = function() {
                g(_[545]);
                E = [];
                K = [];
                P = ea = Ba = null
            };
            h.breakall = function() {
                g(_[490]);
                h.processAnimations(!0)
            };
            h.oninterrupt = function(a) {
                O = a
            };
            h.delayedcall = function() {
                var a = arguments,
                    c = a.length,
                    d = 0;
                3 == c && (d++, c--);
                2 == c && (c = new qa, c.maxruntime = Number(a[d]), c.donecall = a[d + 1], c.starttime = Ja(), c.actioncaller = h.actioncaller, c.id = 0 < d ? "ID" + G(a[0]) : "DC" + ++R, m(c.id), E.push(c))
            };
            h.stopdelayedcall = function(a) {
                m("ID" + G(a))
            };
            h.nexttick = function(a) {
                var c = {};
                c.call = a;
                c.actioncaller = h.actioncaller;
                N.push(c)
            };
            h.def = function() {
                var a = arguments,
                    c = a.length;
                if (2 <= c) {
                    var d = h.actioncaller,
                        b = "" + a[0],
                        e = G(a[1]),
                        a = 3 == c ? a[2] : S(b, d, !1);
                    _[87] == e ? a = {} : _[546] == e ? (a = parseInt(a), isNaN(a) && (a = 0)) : a = ka(a, e);
                    Y(b, a, !1, d, !0)
                }
            };
            h.set = function() {
                var a = arguments;
                2 == a.length && Y(a[0], a[1], !1, h.actioncaller)
            };
            h.copy = function() {
                var a = arguments;
                if (2 == a.length) {
                    var c = S(a[1], h.actioncaller);
                    Y(a[0], void 0 === c ? null : c, !1, h.actioncaller)
                }
            };
            h.push = function() {
                var a = arguments;
                1 == a.length && X.push(S(a[0], h.actioncaller))
            };
            h.pop = function() {
                var a = arguments;
                1 == a.length && Y(a[0], X.pop(), !1, h.actioncaller)
            };
            h[_[565]] = function() {
                var a = arguments,
                    c = a.length,
                    d = a[0],
                    b = G(S(d, h.actioncaller));
                if (1 == c) Y(d, !la(b), !0, h.actioncaller);
                else if (3 <= c) {
                    var e;
                    c--;
                    for (e = 1; e <= c; e++) {
                        var q = G(a[e]),
                            f = !1;
                        isNaN(Number(b)) || isNaN(Number(q)) ? b == q && (f = !0) : Number(b) == Number(q) && (f = !0);
                        if (f) {
                            e++;
                            e > c && (e = 1);
                            Y(d, a[e], !0, h.actioncaller);
                            break
                        }
                    }
                }
            };
            h.toggle = function(a) {
                var c = S(a, h.actioncaller, !0);
                void 0 !== c && Y(a, !la(c), !0, h.actioncaller)
            };
            h.roundval = function() {
                var a = arguments;
                if (1 <= a.length) {
                    var c = Number(S(a[0], h.actioncaller)),
                        d = 2 == a.length ? parseInt(a[1]) : 0,
                        c = 0 == d ? Math.round(c).toString() : c.toFixed(d);
                    Y(a[0], c, !1, h.actioncaller, !0)
                }
            };
            h.tohex = function() {
                var a = arguments,
                    c = a.length;
                if (0 < c) {
                    var d = parseInt(S(a[0], h.actioncaller)).toString(16).toUpperCase();
                    2 < c && (d = (_[489] + d).slice(-parseInt(a[2])));
                    1 < c && (d = a[1] + d);
                    Y(a[0], d, !1, h.actioncaller, !0)
                }
            };
            h.tolower = function() {
                var a = arguments;
                1 == a.length && Y(a[0], G(S(a[0], h.actioncaller)), !1, h.actioncaller, !0)
            };
            h.toupper = function() {
                var a = arguments;
                1 == a.length && Y(a[0], ("" + S(a[0], h.actioncaller)).toUpperCase(), !1, h.actioncaller, !0)
            };
            h.inc = function() {
                var a = arguments,
                    c = a.length;
                if (1 <= c) {
                    var d = Number(S(a[0], h.actioncaller)) + (1 < c ? Number(a[1]) : 1);
                    3 < c && d > Number(a[2]) && (d = Number(a[3]));
                    Y(a[0], d, !0, h.actioncaller)
                }
            };
            h.dec = function() {
                var a = arguments,
                    c = a.length;
                if (1 <= c) {
                    var d = Number(S(a[0], h.actioncaller)) - (1 < c ? Number(a[1]) : 1);
                    3 < c && d < Number(a[2]) && (d = Number(a[3]));
                    Y(a[0], d, !0, h.actioncaller)
                }
            };
            h.add = function() {
                var a = w(arguments);
                a && Y(a[0], a[1] + a[2], !1, h.actioncaller)
            };
            h.sub = function() {
                var a = w(arguments);
                a && Y(a[0], a[1] - a[2], !1, h.actioncaller)
            };
            h.mul = function() {
                var a = w(arguments);
                a && Y(a[0], a[1] * a[2], !1, h.actioncaller)
            };
            h.div = function() {
                var a = w(arguments);
                a && Y(a[0], a[1] / a[2], !1, h.actioncaller)
            };
            h.mod = function() {
                var a = w(arguments);
                if (a) {
                    var c = a[1],
                        d = c | 0,
                        c = c + (-d + d % (a[2] | 0));
                    Y(a[0], c, !1, h.actioncaller)
                }
            };
            h.pow = function() {
                var a = w(arguments);
                a && Y(a[0], Math.pow(a[1], a[2]), !1, h.actioncaller)
            };
            h.clamp = function() {
                var a = arguments;
                if (3 == a.length) {
                    var c = h.actioncaller,
                        d = Number(S(a[0], c)),
                        b = Number(a[1]),
                        e = Number(a[2]);
                    d < b && (d = b);
                    d > e && (d = e);
                    Y(a[0], d, !1, c)
                }
            };
            h.remapfovtype = function() {
                var a = arguments,
                    c = a.length;
                if (3 == c || 5 == c) {
                    var d = h.actioncaller,
                        b = Number(S(a[0], d)),
                        e = 3 == c ? l.area.pixelwidth : Number(S(a[3], d)),
                        c = 3 == c ? l.area.pixelheight : Number(S(a[4], d)),
                        b = t.fovRemap(b, a[1], a[2], e, c);
                    Y(a[0], b, !1, d)
                }
            };
            h.screentosphere = function() {
                var a = arguments;
                if (4 == a.length) {
                    var c = h.actioncaller,
                        d = t.screentosphere(Number(S(a[0], c)), Number(S(a[1], c)));
                    Y(a[2], d.x, !1, c);
                    Y(a[3], d.y, !1, c)
                }
            };
            h.spheretoscreen = function() {
                var a = arguments;
                if (4 <= a.length) {
                    var c = h.actioncaller,
                        d = t.spheretoscreen(Number(S(a[0], c)), Number(S(a[1], c)), a[4]);
                    Y(a[2], d.x, !1, c);
                    Y(a[3], d.y, !1, c)
                }
            };
            h.screentolayer = function() {
                var a = arguments;
                if (5 == a.length) {
                    var c = h.actioncaller,
                        d = Ga.getItem(a[0]);
                    if (d) {
                        var b = Number(S(a[1], c)),
                            e = Number(S(a[2], c)),
                            q = Ub,
                            f = Ub,
                            g = d.sprite;
                        if (g) {
                            var D = ba,
                                f = V.viewerlayer.getBoundingClientRect(),
                                k = g.getBoundingClientRect(),
                                q = b * D - (k.left - f.left + g.clientLeft + g.scrollLeft),
                                f = e * D - (k.top - f.top + g.clientTop + g.scrollTop);
                            d.scalechildren && (D = 1);
                            q /= d._finalxscale * D;
                            f /= d._finalyscale * D
                        }
                        Y(a[3], q, !1, c);
                        Y(a[4], f, !1, c)
                    }
                }
            };
            h.layertoscreen = function() {
                var a = arguments;
                if (5 == a.length) {
                    var c = h.actioncaller,
                        d = Ga.getItem(a[0]);
                    if (d) {
                        var b = Number(S(a[1], c)),
                            e = Number(S(a[2], c)),
                            q = Ub,
                            f = Ub,
                            g = d.sprite;
                        if (g) var f = ba,
                            D = d.scalechildren ? f : 1,
                            k = V.viewerlayer.getBoundingClientRect(),
                            m = g.getBoundingClientRect(),
                            q = b * d._finalxscale / D + (m.left - k.left + g.clientLeft + g.scrollLeft) / f,
                            f = e * d._finalyscale / D + (m.top - k.top + g.clientTop + g.scrollTop) / f;
                        Y(a[3], q, !1, c);
                        Y(a[4], f, !1, c)
                    }
                }
            };
            h.escape = function() {
                H(0, arguments, h.actioncaller)
            };
            h.unescape = function() {
                H(1, arguments, h.actioncaller)
            };
            h.txtadd = function() {
                var a = arguments,
                    c, d = a.length,
                    b = 2 == d ? String(S(a[0], h.actioncaller)) : "";
                "null" == b && (b = "");
                for (c = 1; c < d; c++) b += a[c];
                Y(a[0], b, !1, h.actioncaller, !0)
            };
            h.subtxt = function() {
                var a = arguments,
                    c = a.length;
                if (2 <= c) {
                    var d = S(a[1], h.actioncaller),
                        d = null == d ? String(a[1]) : String(d),
                        d = d.substr(2 < c ? Number(a[2]) : 0, 3 < c ? Number(a[3]) : void 0);
                    Y(a[0], d, !1, h.actioncaller, !0)
                }
            };
            h.indexoftxt = function() {
                var a = arguments,
                    c = a.length;
                3 <= c && (c = String(a[1]).indexOf(String(a[2]), 3 < c ? Number(a[3]) : 0), Y(a[0], c, !1, h.actioncaller, !0))
            };
            h.txtreplace = function() {
                var a = arguments,
                    c = a.length;
                if (3 == c || 4 == c) {
                    var c = 3 == c ? 0 : 1,
                        d = S(a[c], h.actioncaller);
                    if (d) var b = a[c + 2],
                        d = d.split(a[c + 1]).join(b);
                    Y(a[0], d, !1, h.actioncaller, !0)
                }
            };
            h.txtsplit = function() {
                var a = arguments,
                    c = a.length;
                if (3 <= c) {
                    var d = ("" + B(a[0], h.actioncaller)).split("" + a[1]),
                        b;
                    if (3 == c)
                        for (b = 0; b < d.length; b++) Y(a[2] + "[" + b + _[548], d[b], !1, h.actioncaller, !0);
                    else
                        for (b = 2; b < c; b++) Y(a[b], d[b - 2], !1, h.actioncaller, !0)
                }
            };
            h.showlog = function() {
                var a = arguments,
                    a = !(1 == a.length && 0 == la(a[0]));
                V.showlog(a)
            };
            h[_[562]] = function() {
                var a = arguments,
                    c, d = a.length,
                    b = h.actioncaller;
                for (c = 0; c < d; c++) a: {
                    var e = b,
                        q = void 0,
                        f = void 0,
                        g = void 0,
                        D = vd(a[c]),
                        f = D.length;
                    if (1 == f && e && (g = D[0], e.hasOwnProperty(g))) {
                        e[g] = null;
                        delete e[g];
                        break a
                    }
                    for (var k = l, q = 0; q < f; q++) {
                        var g = D[q],
                            m = q == f - 1,
                            n = null,
                            p = g.indexOf("[");
                        0 < p && (n = lc(g, p + 1, g.length - 1, e), g = g.slice(0, p));
                        if (void 0 !== k[g]) {
                            if (null != n && (p = k[g], p.isArray))
                                if (g = p.getItem(n))
                                    if (m) break a;
                                    else {
                                        k = g;
                                        continue
                                    }
                            else break;
                            if (m) {
                                k[g] = null;
                                delete k[g];
                                break a
                            } else k = k[g]
                        } else break
                    }
                }
            };
            h.Ltrace = function(a, c) {
                var d, b = c.length,
                    e = "",
                    q = h.actioncaller;
                for (d = 0; d < b; d++) var f = c[d],
                    g = S(f, q),
                    e = null != g ? e + g : e + f;
                va(a, e)
            };
            h.debug = function() {
                h.Ltrace(0, arguments)
            };
            h.trace = function() {
                h.Ltrace(1, arguments)
            };
            h.warning = function() {
                h.Ltrace(2, arguments)
            };
            h.error = function() {
                h.Ltrace(3, arguments)
            };
            h.fatalerror = function(a) {
                cb(a)
            };
            h.openurl = function() {
                var a = arguments;
                T.open(a[0], 0 < a.length ? a[1] : _[561])
            };
            h.loadscene = function() {
                var a = arguments;
                if (0 < a.length) {
                    var c = a[0],
                        d = S(_[91] + c + _[79]),
                        b = S(_[91] + c + _[443]);
                    b && (b += ";");
                    null == d ? va(3, 'loadscene() - scene "' + c + '" not found') : (l.xml.sceneNEW = c, l.xml.view = {}, Ya.loadxml(_[139] + d + _[136], a[1], a[2], a[3], b))
                }
            };
            h.jsget = function() {
                var a = arguments;
                if (2 == a.length) {
                    var c = a[0],
                        d = a[1],
                        b = null;
                    try {
                        (function() {
                            var krpano = V.viewerlayer;
                            b = eval(d)
                        })()
                    } catch (e) {
                        va(3, "js" + (c ? "get" : "call") + '() - calling Javascript "' + d + '" failed: ' + e)
                    }
                    c && Y(c, b, !1, h.actioncaller)
                }
            };
            h.jscall = function() {
                var a = arguments;
                1 == a.length && h.jsget(null, a[0])
            };
            h.parseFunction = function(c) {
                var d = null;
                if (c = Ab(c, null, !0)) c = c[0], a(c.args, h.actioncaller), d = [c.cmd].concat(c.args);
                return d
            };
            h.js = function(c) {
                c = "" + c;
                var d = Ab(c, null, !0);
                if (d) {
                    d = d[0];
                    a(d.args, h.actioncaller);
                    var b = !1;
                    if (_[15] == typeof T[d.cmd]) {
                        b = !0;
                        try {
                            T[d.cmd].apply(T[d.cmd], d.args)
                        } catch (e) {
                            b = !1
                        }
                    }
                    if (0 == b) {
                        d = d.cmd + (0 < d.args.length ? "('" + d.args.join("','") + "');" : "();");
                        try {
                            eval(d)
                        } catch (q) {
                            va(2, 'js() - calling Javascript "' + c + '" failed: ' + q)
                        }
                    }
                }
            };
            h.setfov = function() {
                var a = arguments;
                1 == a.length && (t.fov = Number(a[0]))
            };
            h.lookat = function() {
                var a = arguments;
                if (1 <= a.length) {
                    var c, d = l.webVR;
                    d && d.enabled && d.setoffset ? (c = Number(a[0]), Ya.setLastPanoOffset(c - t.hlookat), d.setoffset(c), t.hlookat = c) : (c = Number(a[0]), isNaN(c) || (t.hlookat = c), c = Number(a[1]), isNaN(c) || (t.vlookat = c), c = Number(a[2]), isNaN(c) || (t.fov = c), c = Number(a[3]), isNaN(c) || (t.distortion = c), c = Number(a[4]), isNaN(c) || (t.architectural = c), c = Number(a[5]), isNaN(c) || (t.pannini = "" + c))
                }
            };
            h.adjusthlookat = function() {
                var a = arguments;
                1 == a.length && (a = Number(B(a[0], h.actioncaller)), isNaN(a) || (t.hlookat = id(t.hlookat, a)))
            };
            h["for"] = function() {
                var a = arguments;
                if (4 == a.length) {
                    W++;
                    var c = h.actioncaller,
                        d = "" + a[1],
                        b = "" + a[3] + ";" + a[2],
                        a = Ab("" + a[0], c, !1),
                        c = Ab(b, c, !1);
                    h.executeActions(a);
                    b = null;
                    try {
                        b = r(d), 0 == l.strict && A(b)
                    } catch (e) {
                        b = null, va(3, e + ": " + d)
                    }
                    if (b)
                        for (;;)
                            if (d = b.slice(), p(d), v(d), u(d)) {
                                if (h.executeActions(c), 0 < ra) {
                                    ra = 0;
                                    break
                                }
                            } else break;
                    W--
                }
            };
            h.loop = function() {
                f("loop", _[318], arguments, h.actioncaller)
            };
            h.asyncloop = function() {
                f(_[442], _[175], arguments, h.actioncaller)
            };
            h.callwhen = function() {
                f(_[485], _[181], arguments, h.actioncaller)
            };
            h.asyncfor = function() {
                f(_[484], "if('%5'!='NEXTLOOP',%1);if(%2,%4;%3;delayedcall(0,asyncfor(%1,%2,%3,%4,NEXTLOOP)););", arguments, h.actioncaller)
            };
            h.setinterval = function() {
                f(_[383], _[172], arguments, h.actioncaller)
            };
            h.clearinterval = function(a) {
                h.stopdelayedcall(_[441] + a)
            };
            var q = String.fromCharCode(2),
                D = ".<.<<.<=.==.===.=>.>.>>.!=.!==.+.-.*./.^.&&.||.?.:.~|.~&.";
            h.calc = function() {
                var a, c = arguments;
                2 == c.length && (a = y(c[1]), c[0] && Y(c[0], a, !1, h.actioncaller));
                return a
            };
            h.resolvecondition = function() {
                var a = h.actioncaller,
                    c = arguments,
                    d = c.length,
                    b = null,
                    e = null,
                    e = !1;
                if (2 == d || 3 == d) {
                    b = G(c[0]);
                    e = 2 == d ? c[1] : c[2];
                    if ("null" == b || "" == b) b = null;
                    e = null == e || "" == e ? !1 : y(e);
                    null != b && (3 == d && (c = G(c[1]), d = la(S(b, a)), "and" == c ? e = d && e : "or" == c ? e = d || e : "xor" == c && (e = !(d && e) && (d || e))), Y(b, e, !1, a))
                }
                return e
            };
            h["if"] = function() {
                var a = arguments,
                    c = h.actioncaller;
                2 <= a.length && (y(a[0]) ? h.callaction(a[1], c, !0) : 3 == a.length && h.callaction(a[2], c, !0))
            };
            h.ifnot = function() {
                var a = arguments;
                h["if"](a[0], a[2], a[1])
            };
            h.stoplookto = function() {
                m(_[90])
            };
            h.lookto = function() {
                var c = arguments,
                    d = c.length;
                if (2 <= d)
                    if (ea) va(2, _[163]);
                    else {
                        var b = 0 == la(c[5]),
                            e = h.actioncaller,
                            q = new qa;
                        h.stopmovements();
                        m(_[90]);
                        q.id = _[90];
                        q.actioncaller = e;
                        0 == b ? q.donecall = c[6] : (ea = q, q.blockedactions = [], Ba = q, K.push(q));
                        4 < d && void 0 === c[4] && d--;
                        3 < d && void 0 === c[3] && d--;
                        2 < d && void 0 === c[2] && d--;
                        var f = Number(c[0]),
                            g = Number(c[1]),
                            D = 2 < d ? Number(c[2]) : t.fov,
                            k = 3 < d ? c[3] : null,
                            n = 4 < d ? la(c[4]) : !0;
                        if (!(isNaN(f) || isNaN(g) || isNaN(D))) {
                            var f = f - Number(l.image.viewoffset),
                                p = 1,
                                c = 720,
                                d = -720,
                                b = 720,
                                r = t.hlookat,
                                u = r,
                                v = t.vlookat,
                                w = t.fov;
                            if (n) {
                                for (; - 90 > g || 90 < g;) - 90 > g ? (g = -180 - g, f += 180) : 90 < g && (g = 180 - g, f -= 180);
                                for (; 0 > r;) r += 360;
                                for (; 360 < r;) r -= 360;
                                for (; 0 > f;) f += 360;
                                for (; 360 < f;) f -= 360;
                                for (; - 180 > v;) v += 360;
                                for (; 180 < v;) v -= 360;
                                r = id(r, f);
                                v = id(v, g);
                                n = r - u;
                                r -= n;
                                f -= n
                            }
                            q.startH = r;
                            q.startV = v;
                            q.startF = w;
                            q.destH = f;
                            q.destV = g;
                            q.destF = D;
                            f = Math.sqrt((f - r) * (f - r) + (g - v) * (g - v) + (D - w) * (D - w));
                            k && ((k = Ab(k, null, !1)) && (k = k[0]), k && (g = k.cmd, D = k.args, a(D, e), _[59] == g ? (p = 0, b = 360, 1 == k.args.length && (b = parseFloat(D[0]))) : _[559] == g ? (p = 1, 0 < k.args.length && (c = parseFloat(D[0])), 1 < k.args.length && (d = parseFloat(D[1])), 2 < k.args.length && (b = parseFloat(D[2])), c = +Math.abs(c), d = -Math.abs(d), b = +Math.abs(b)) : "tween" == g && (p = 2, q.tweenfu = zc.getTweenfu(D[0]), q.maxruntime = parseFloat(D[1]), isNaN(q.maxruntime) && (q.maxruntime = .5))));
                            q.motionmode = p;
                            0 == p ? q.maxruntime = f / b : 1 == p && (e = f, p = b * b / (2 * c), k = b / c, f = -(b * b) / (2 * d), g = -b / d, D = e - (p + f), r = D / b, 0 > r && (b = Math.sqrt(2 * e * c * d / (d - c)), p = b * b / (2 * c), k = b / c, f = -(b * b) / (2 * d), g = -b / d, r = D = 0), v = k + r + g, q.accelspeed = c, q.breakspeed = d, q.Vmax = b, q.Tmax = v, q.Smax = e, q.T1 = k, q.T2 = r, q.T3 = g, q.S1 = p, q.S2 = D, q.S3 = f, q.maxruntime = v);
                            q.starttime = Ja();
                            q.process = I;
                            E.push(q)
                        }
                    }
            };
            h.looktohotspot = function() {
                var a = arguments,
                    c = h.actioncaller,
                    d = Ua.getItem(1 > a.length ? c ? c.name : "" : a[0]);
                if (d) {
                    var c = d.ath,
                        b = d.atv,
                        e = 30,
                        e = d.getcenter(),
                        c = e.x,
                        b = e.y,
                        e = e.z,
                        d = Number(a[1]);
                    isNaN(d) || (e = d);
                    d = t.fovmin;
                    e < d && (e = d);
                    h.lookto(c, b, e, a[2], a[3])
                }
            };
            h.moveto = function() {
                var a = arguments;
                2 <= a.length && h.lookto(a[0], a[1], t.fov, a[2])
            };
            h.zoomto = function() {
                var a = arguments;
                1 <= a.length && h.lookto(t.hlookat, t.vlookat, a[0], a[1])
            };
            h.getlooktodistance = function() {
                var a = arguments,
                    c = a.length;
                if (3 <= c) {
                    var d = h.actioncaller,
                        b = Number(B(a[1], d)),
                        e = Number(B(a[2], d)),
                        q = t.hlookat,
                        f = t.vlookat;
                    5 == c && (q = Number(B(a[3], d)), f = Number(B(a[4], d)));
                    if (!(isNaN(b) || isNaN(e) || isNaN(q) || isNaN(f))) {
                        var c = Math.PI,
                            g = c / 180,
                            b = c - b * g,
                            q = c - q * g,
                            f = f * g,
                            e = e * g,
                            b = Math.acos(Math.cos(f) * Math.cos(q) * Math.cos(e) * Math.cos(b) + Math.sin(f) * Math.sin(e) + Math.cos(f) * Math.sin(q) * Math.cos(e) * Math.sin(b)) / g;
                        Y(a[0], b, !1, d)
                    }
                }
            };
            h.wait = function() {
                var a = arguments;
                if (1 == a.length) {
                    var a = a[0],
                        c = G(a);
                    if ("load" == c || "blend" == c) a = 0;
                    else {
                        c = "time";
                        a = Number(a);
                        if (isNaN(a)) return;
                        0 >= a && (a = 0)
                    }
                    var d = new qa;
                    d.waitfor = c;
                    d.maxruntime = a;
                    d.process = C;
                    d.starttime = Ja();
                    d.actioncaller = h.actioncaller;
                    d.id = "WAIT" + ++R;
                    d.blockedactions = [];
                    Ba = d;
                    K.push(d);
                    E.push(d)
                }
            };
            h.tween = function() {
                var a = arguments,
                    c = a.length;
                if (2 <= c) {
                    var e = h.actioncaller,
                        q = new qa,
                        f = G(a[0]);
                    if (0 < f.indexOf("|")) {
                        var c = ("" + a[0]).split("|"),
                            e = ("" + a[1]).split("|"),
                            q = a[3] ? ("" + a[3]).split("|") : [a[3]],
                            g = c.length,
                            D = e.length,
                            k = q.length,
                            l = parseFloat(a[2]);
                        if (0 > l || isNaN(l)) l = .5;
                        for (f = 0; f < D; f++) e[f] = Qa(e[f]);
                        for (f = 0; f < k; f++) q[f] = Qa(q[f]);
                        for (f = 0; f < g; f++) h.tween(Qa(c[f]), e[f % D], l, q[f % k], f == g - 1 ? a[4] : null, f == g - 1 ? a[5] : null)
                    } else {
                        g = f;
                        k = a[1];
                        D = !1;
                        e && 0 > f.indexOf(".") && e.hasOwnProperty(f) && (g = e._type + "[" + e.name + "]." + f, D = !0);
                        0 == D && 0 < f.indexOf("[") && (g = f = d(f, e), g = g.split(_[158]).join(_[146]));
                        q.id = g;
                        q.varname = f;
                        q.actioncaller = e;
                        q.startval = D ? e[f] : S(f, e);
                        if (null == q.startval || "" == q.startval) q.startval = 0;
                        q.endval = k;
                        f = 2 < c ? String(a[2]) : "0.5";
                        if (0 < f.indexOf("(") && (l = Ab(f, null, !1))) {
                            var n = l[0];
                            _[481] == n.cmd && (l = Number(n.args[0]), f = Number(n.args[1]), k = Math.abs(parseFloat(k) - parseFloat(q.startval)), f = f * k / l)
                        }
                        f = parseFloat(f);
                        isNaN(f) && (f = .5);
                        q.maxruntime = f;
                        q.tweenmap = zc.getTweenfu(3 < c ? a[3] : _[75]);
                        if (4 < c)
                            if ("wait" == G(a[4])) q.blockedactions = [], Ba = q, K.push(q);
                            else if (k = a[4]) 0 == D && 0 < k.indexOf("[") && (k = d(k, e)), q.donecall = k;
                        5 < c && (q.updatefu = a[5]);
                        q.starttime = Ja();
                        q.process = z;
                        m(g);
                        E.push(q)
                    }
                }
            };
            h.stoptween = function() {
                var a = h.actioncaller,
                    c = arguments,
                    e = c.length,
                    q;
                for (q = 0; q < e; q++) {
                    var f = G(c[q]);
                    if (0 < f.indexOf("|")) h.stoptween.apply(h.stoptween, f.split("|"));
                    else {
                        if (a && 0 > f.indexOf(".")) {
                            if (m(a._type + "[" + a.name + "]." + f)) continue
                        } else 0 < f.indexOf("[") && (f = d(f, a)), f = f.split(_[158]).join(_[146]);
                        m(f)
                    }
                }
            };
            h.invalidatescreen = function() {
                t.haschanged = !0
            };
            h.updatescreen = function() {
                t.haschanged = !0
            };
            h.updateobject = function() {
                U && U.updateFOV && U.updateFOV(U, [Number(J.hfov), Number(J.vfov), Number(J.voffset)]);
                t.haschanged = !0
            };
            h.loadpano = function(a, c, d, b, e) {
                l.xml.scene = null;
                l.xml.view = {};
                Ya.loadpano(a, c, d, b, e)
            };
            h.loadpanoscene = function(a, c, d, b, e, q) {
                l.xml.sceneNEW = c;
                l.xml.view = {};
                l._loadpanoscene_name = c;
                Ya.loadpano(a, d, b, e, q)
            };
            h.loadxml = function(a, c, d, b, e) {
                l.xml.scene = null;
                l.xml.view = {};
                Ya.loadxml(a, c, d, b, e)
            };
            h.fscommand = function() {};
            h.freezeview = function() {};
            h.reloadpano = function() {};
            h.addlensflare = function() {};
            h.removelensflare = function() {};
            h.SAcall = function(a) {
                var c = S(_[11]);
                if ((a = Ab(a, null, !1)) && c) {
                    var d, b;
                    b = a.length;
                    for (d = 0; d < b; d++) {
                        var e = a[d];
                        if (e) {
                            var q = e.cmd,
                                f = c.getItem(q);
                            f && 1 == la(f.secure) ? (e = e.args, e.splice(0, 0, q), h.callaction(x(f.content, e))) : va(2, _[480] + q + _[333])
                        }
                    }
                }
            }
        })();
        var V = {};
        (function() {
            function a(a) {
                a = _[200] + a;
                T.console ? T.console.log(a) : alert(a)
            }

            function b(a, c, d, b, e, f) {
                var g = Fa(),
                    h = g.style;
                h.position = _[0];
                "LT" == a ? (h.left = c, h.top = d) : (h.left = c, h.bottom = d);
                h.width = b;
                h.height = e;
                h.overflow = _[7];
                !1 === f && (h.webkitUserSelect = h.MozUserSelect = h.msUserSelect = h.oUserSelect = h.userSelect = "none");
                return g
            }

            function x(a) {
                if (n.fullscreen = a) T.activekrpanowindow = z.id;
                z.style.background = a ? ua(l.bgcolor, 1) : _[13];
                ya(1 == a ? _[241] : _[253])
            }

            function f(a) {
                I && (ta(a), n.onResize(a), setTimeout(r, 250))
            }

            function e(a, c) {
                for (var d = a.style, b = c.length, e = 0, e = 0; e < b; e += 2) d[c[e]] = c[e + 1]
            }

            function k() {
                v(!Rc, ge);
                N.style.textDecoration = Rc ? _[133] : "none"
            }

            function m() {
                v(Rc, !ge);
                X.style.textDecoration = ge ? _[133] : "none"
            }

            function g(a) {
                bb(_[29])
            }

            function w(a) {
                x(!!(ca.fullscreenElement || ca.mozFullScreenElement || ca.webkitIsFullScreen || ca.webkitFullscreenElement || ca.msFullscreenElement))
            }

            function H(a) {
                if (I) {
                    a = T.innerHeight;
                    var c = lb;
                    a < c ? n.__scrollpage_yet = !0 : n.__scrollpage_yet && (n.__scrollpage_yet = !1, r());
                    if (a != c) n.onResize(null)
                }
            }

            function r() {
                var a = T.innerWidth,
                    c = T.innerHeight;
                n.__scrollpage_yet && c == lb && (n.__scrollpage_yet = !1);
                var b = screen.height - 64,
                    e = 268;
                26 <= d.crios && (b += 44, e = 300);
                (320 == a && c != b || a == screen.height && c != e) && T.scrollTo(0, 0)
            }

            function A() {
                if (8 == d.iosversion && d.ipad) {
                    var a = screen.width,
                        c = screen.height,
                        b = T.innerWidth,
                        e = T.innerHeight,
                        f = z.clientHeight;
                    if (Math.min(b, e) == Math.min(a, c) && Math.max(b, e) == Math.max(a, c) || f > e) P ^= 1, T.scrollTo(0, P), setTimeout(A, 60)
                }
            }

            function p(a, d) {
                ta(a);
                var b = "none" != c.style.display ? "none" : "";
                void 0 !== d && (b = 1 == d ? "" : "none");
                c.style.display = b;
                N.style.display = X.style.display = l.debugmode ? "" : "none";
                F.scrollTop = F.scrollHeight
            }

            function v(a, c) {
                var d = a ? _[98] : "none";
                Rc = a;
                ge = c;
                var b, e, f, g;
                f = Ga.getArray();
                e = f.length;
                for (b = 0; b < e; b++)(g = f[b]) && g.sprite && (g.sprite.style.outline = d);
                d = c ? _[193] : "none";
                f = Ua.getArray();
                e = f.length;
                for (b = 0; b < e; b++)(g = f[b]) && g.sprite && (g.sprite.style.outline = d);
                $a = !0
            }

            function u() {
                J && (h.removeChild(J), J = null);
                var a, c = Fa();
                a = 25;
                d.androidstock && (a *= d.pixelratio);
                e(c, [_[37], _[0], "left", "50%", "top", "50%", _[24], _[54], _[52], a + "px", _[67], "none", _[40], _[6], _[312], "none"]);
                a = c.style;
                a.zIndex = 999999;
                a.opacity = .67;
                a = Fa();
                e(a, "position;relative;left;-50%;top;-25px;fontFamily;sans-serif;textShadow;#000000 1px 1px 2px;lineHeight;110%".split(";"));
                a.innerHTML = _[477] + (Va && Va[1] && 6 < Qa(Va[1], !1).length ? Va[1] : _[180]) + _[434];
                c.appendChild(a);
                h.appendChild(c);
                J = c
            }
            var n = V;
            n.fullscreen = !1;
            var y = !0,
                I = !1,
                B = !1;
            n.__scrollpage_yet = !1;
            var C = null,
                z = null,
                h = null;
            n.htmltarget = null;
            n.viewerlayer = null;
            n.controllayer = null;
            n.panolayer = null;
            n.pluginlayer = null;
            n.hotspotlayer = null;
            var c = n.svglayer = null,
                F = null,
                E = null,
                N = null,
                X = null,
                O = null,
                R = 0,
                K = 0,
                Ba = !1,
                ea = !1;
            n.build = function(r) {
                function q(a) {
                    a && _[8] == a.type && 0 != (a.button | 0) || p(null, !1)
                }
                var D = r.target,
                    L = r.id,
                    M = ca.getElementById(D);
                if (!M) return a(_[182] + D), !1;
                for (var D = null, u = L, v = 1;;)
                    if (D = ca.getElementById(L))
                        if (_[269] == u) v++, L = u + v;
                        else return a(_[176] + L), !1;
                else break;
                D = Fa();
                D.id = L;
                D.style.position = _[138];
                D.style.overflow = _[7];
                D.style.lineHeight = _[58];
                D.style.fontWeight = _[58];
                D.style.fontStyle = _[58];
                D.tabIndex = -1;
                D.style.outline = 0;
                L = _[38];
                r.bgcolor && (L = r.bgcolor, l.bgcolor = parseInt(L.slice(1), 16));
                u = G(r.wmode);
                if (_[13] == u || _[154] == u) L = null;
                null != L && (D.style.background = L);
                M.appendChild(D);
                z = D;
                !0 === r.focus && (T.activekrpanowindow = z.id, z.focus());
                n.htmltarget = M;
                n.viewerlayer = D;
                h = b("LT", 0, 0, "100%", "100%", !1);
                e(h, "msTouchAction none touchAction none msContentZooming none contentZooming none -webkit-tap-highlight-color transparent".split(" "));
                n.controllayer = h;
                M = b("LT", 0, 0, "100%", "100%");
                n.panolayer = M;
                e(M, [_[301], "none"]);
                r = b("LT", 0, 0, "100%", "100%", !1);
                0 == d.ie && 0 == d.firefox && e(r, [ze, _[124]]);
                d.android && d.firefox && yc && (L = b("LT", 0, 0, "1px", "1px"), L.style.background = _[259], L.style.pointerEvents = "none", L.style.zIndex = 999999999, L.style[qb] = _[27], r.appendChild(L));
                var L = d.androidstock ? d.pixelratio : 1,
                    u = 156 * L,
                    v = (d.mobile ? 8 : 13) * L,
                    t = d.androidstock || d.android && d.chrome ? 6 : 8;
                c = b("LB", 0, 0, "100%", u + "px", !0);
                c.style.display = "none";
                !0 !== d.opera && yc && (2 > xc && (c.style[qb] = _[27]), d.ios && 0 == d.simulator || d.android && d.chrome) && (c.style[qb] = _[27]);
                c.style.zIndex = 999999999;
                var x = b("LT", 0, 0, "100%", "100%", !0);
                x.style.opacity = .67;
                d.android && d.opera && (x.style.borderTop = _[189]);
                e(x, [_[266], _[38], Sb, _[474] + t + _[406], _[137], t + "px", _[535], .67]);
                F = ca.createElement("pre");
                t = null;
                d.mac && (t = _[324] + (T.chrome ? "1px" : "0"));
                d.realDesktop ? (F.style.fontFamily = _[30], F.style.fontSize = "11px", t && (F.style.fontSize = "13px", F.style.textShadow = t)) : (F.style.fontFamily = _[20], F.style.fontSize = v + "px");
                e(F, [_[37], _[0], "left", "5px", "top", "0px", _[66], "left", _[367], 0, _[342], d.realDesktop ? "16px" : 0, _[419], 0, _[332], 0, _[129], "none", _[86], 0, _[137], (d.realDesktop ? 10 : 8) + "px", _[64], "100%", _[17], u - 10 + "px", _[472], "auto", _[232], "none", _[82], "block", _[427], "left", _[415], _[471], _[67], "none", _[24], _[54], _[40], "text"]);
                E = Fa();
                t && (E.style.textShadow = t);
                e(E, [_[37], _[0], _[3], 0, "top", "10px", _[55], "0 4px", _[17], "30px", _[69], "none", _[70], "none", _[76], "none", _[40], _[10], _[42], _[13], _[77], d.realDesktop ? _[30] : _[20], _[52], (d.realDesktop ? 10 : 9 * L | 0) + "px", _[24], _[54]]);
                E.innerHTML = "CLOSE";
                aa(E, _[47], ta, !0);
                aa(E, _[48], ta, !0);
                aa(E, _[50], q, !0);
                aa(E, _[2], q, !0);
                c.appendChild(x);
                c.appendChild(F);
                c.appendChild(E);
                N = Fa();
                t && (N.style.textShadow = t);
                e(N, [_[37], _[0], _[3], "0px", _[4], "0px", _[55], _[273], _[17], "12px", _[69], "none", _[70], "none", _[76], "none", _[40], _[10], _[42], _[13], _[77], d.realDesktop ? _[30] : _[20], _[52], (d.realDesktop ? 10 : 9 * L | 0) + "px", _[24], _[145], _[82], "none"]);
                N.innerHTML = _[577];
                aa(N, _[47], ta, !0);
                aa(N, _[48], ta, !0);
                aa(N, _[50], k, !0);
                aa(N, _[2], k, !0);
                c.appendChild(N);
                X = Fa();
                t && (X.style.textShadow = t);
                e(X, [_[37], _[0], _[3], "0px", _[4], "18px", _[55], _[265], _[17], "12px", _[69], "none", _[70], "none", _[76], "none", _[40], _[10], _[42], _[13], _[77], d.realDesktop ? _[30] : _[20], _[52], (d.realDesktop ? 10 : 9 * L | 0) + "px", _[24], _[145], _[82], "none"]);
                X.innerHTML = _[466];
                aa(X, _[47], ta, !0);
                aa(X, _[48], ta, !0);
                aa(X, _[50], m, !0);
                aa(X, _[2], m, !0);
                c.appendChild(X);
                D.appendChild(h);
                h.appendChild(M);
                h.appendChild(r);
                d.ios && (M = Fa(), M.style.position = _[0], M.style.webkitTransformStyle = _[124], r.appendChild(M));
                D.appendChild(c);
                n.pluginlayer = r;
                n.hotspotlayer = r;
                d.fullscreensupport && aa(ca, d.browser.events.fullscreenchange, w);
                aa(T, _[51], g, !1);
                aa(T, _[465], g, !1);
                aa(ca, _[29], g, !1);
                O = [D.style.width, D.style.height];
                n.onResize(null);
                aa(T, _[152], n.onResize, !1);
                d.iphone && d.safari && aa(T, _[159], H, !1);
                aa(T, _[106], f, !1);
                return !0
            };
            n.focus = function(a) {
                T.activekrpanowindow = z.id;
                d.desktop && ca.activeElement !== z && z.focus()
            };
            n.setFullscreen = function(a) {
                if (d.fullscreensupport)
                    if (a) z[d.browser.events.requestfullscreen]();
                    else try {
                        ca.exitFullscreen ? ca.exitFullscreen() : ca.mozCancelFullScreen ? ca.mozCancelFullScreen() : ca.webkitCancelFullScreen ? ca.webkitCancelFullScreen() : ca.webkitExitFullscreen ? ca.webkitExitFullscreen() : ca.msExitFullscreen && ca.msExitFullscreen()
                    } catch (c) {} else {
                        var b = ca.body,
                            e = b.style,
                            f = z.style;
                        if (a) n.fsbkup = [e.padding, e.margin, e.overflow, b.scrollTop, b.scrollLeft, T.pageYOffset], e.padding = "0 0", e.margin = "0 0", e.overflow = _[7], b.scrollTop = "0", b.scrollLeft = "0", b.appendChild(z), f.position = _[0], f.left = 0, f.top = 0, f.width = "100%", f.height = "100%", eb.domUpdate(), T.scrollTo(0, 0), x(!0);
                        else if (a = n.fsbkup) n.htmltarget.appendChild(z), e.padding = a[0], e.margin = a[1], e.overflow = a[2], b.scrollTop = a[3], b.scrollLeft = a[4], f.position = _[138], eb.domUpdate(), T.scrollTo(0, a[5]), n.fsbkup = null, x(!1)
                    }
            };
            var P = 0;
            n.onResize = function(a, c) {
                Ba = c;
                ea = !0
            };
            n.resizeCheck = function() {
                var a = !1,
                    b = z,
                    e = b.clientWidth,
                    b = b.clientHeight;
                !(e != R || b != K || Bb && Bb.haschanged) || 0 == e && 0 == R || (R = e, K = b, a = !0);
                ea && (a = !0, ea = !1);
                255 == (hb & 511) && 0 == (La & 1) && u();
                if (a) {
                    var f = z,
                        g = "100%",
                        e = "100%";
                    null == O && (O = [f.style.width, f.style.height]);
                    O && (g = O[0], e = O[1], "" == g && (g = "100%"), "" == e && (e = "100%"), O = null);
                    if (b = oc.so) b.width && (g = b.width), b.height && (e = b.height);
                    n.fullscreen && (g = e = "100%");
                    var b = f.parentNode,
                        k = 0,
                        m = f;
                    do
                        if (k = m.offsetHeight, d.ie && n.fullscreen && 20 > k && (k = 0), 1 >= k) {
                            if (m = m.parentNode, null == m) {
                                k = T.innerHeight;
                                break
                            }
                        } else break;
                    while (1);
                    for (var l = 0, m = f; m && "body" != G(m.nodeName);) l++, m = m.parentNode;
                    var m = b ? b.offsetHeight : T.innerHeight,
                        p = f.clientWidth,
                        b = !1;
                    if (0 == f.clientHeight) {
                        for (var v = !1; f;)
                            if (f && f.style && "none" == f.style.display) {
                                v = !0;
                                break
                            } else f = f.parentNode;
                        0 == v && 0 < p && (b = !0)
                    }
                    v = g;
                    f = e;
                    0 < String(g).indexOf("%") ? g = parseFloat(g) * p / 100 : (g = parseFloat(g), v = g + "px");
                    0 < String(e).indexOf("%") ? e = parseFloat(e) * k / 100 : (e = parseFloat(e), f = e + "px");
                    1 > e && (e = 100);
                    var k = screen.width,
                        p = screen.height,
                        E = T.innerWidth,
                        t = T.innerHeight;
                    d.ios && 2 >= l && 0 == n.fullscreen && (26 <= d.crios && m > t && (t = e = m), A(), 7 <= d.iosversion && e >= t && (e = t, I = B = !0, setTimeout(r, 10)));
                    y && (y = !1, d.iphone ? (320 == E && t >= p - 124 ? t = p - 124 : E == p && 208 <= t && (t = 208), 2 >= l && (E == g && t && (320 == g && e == p - 124 || g == p && (208 == e || 320 == e)) && (I = !0), 320 == g && t == p - 124 && (B = I = !0), 26 <= d.crios && (320 == g || g == p) && (I = !0))) : d.ipad && 28 <= d.crios && 2 >= l && (g > e != k > p && (l = k, k = p, p = l), g == k && e == p - 20 && (B = I = !0)));
                    I && (B ? (g = E, e = t, 9 <= (d.iosversion | 0) && g > e && (e += 1)) : 320 == T.innerWidth ? (g = 320, e = p - 64, d.crios && (e += 44)) : (g = p, e = 320 == T.innerHeight ? 320 : 268, 26 <= d.crios && (e = 300)), v = g + "px", f = e + "px");
                    d.getViewportScale();
                    l = v;
                    m = f;
                    eb && eb.focusLoss();
                    I && null == C && (C = setInterval(r, 4E3), setTimeout(r, 250));
                    f = !1;
                    if (Tb != g || lb != e || Ba) f = !0, Ba = !1, Tb = g, lb = e;
                    z.style.width = l;
                    z.style.height = m;
                    R = Tb;
                    K = lb;
                    gb && (gb._pxw = gb.pixelwidth = gb.imagewidth = Tb / ba, gb._pxh = gb.pixelheight = gb.imageheight = lb / ba);
                    ob && (ob._pxw = ob.pixelwidth = ob.imagewidth = Tb / ba, ob._pxh = ob.pixelheight = ob.imageheight = lb / ba);
                    f && (Bb && Bb.calc(Tb, lb), ya(_[80]), f = !1);
                    Bb ? (f |= Bb.calc(Tb, lb), h.style.left = Bb.pixelx * ba + "px", h.style.top = Bb.pixely * ba + "px", h.style.width = Ta + "px", h.style.height = Ea + "px", g = Ta, e = Ea) : (Ta = Tb, Ea = lb);
                    Qc = Math.max(4 * e / 3, g);
                    d.desktop && (l = T.devicePixelRatio, isNaN(l) || (d.pixelratio = l, d.fractionalscaling = 0 != l % 1));
                    fb.size(g, e);
                    f && ya(_[80]);
                    "" == c.style.display && (F.scrollTop = F.scrollHeight);
                    Ya.updateview(!1, !0);
                    ea = b
                }
                return a
            };
            var qa = "";
            n.log = function(a) {
                if ("cls" == a) F.innerHTML = "";
                else if ("d" == a) u();
                else {
                    var c = 4 > d.firefoxversion ? 4096 : 1E4,
                        b = a.slice(0, 6).charCodeAt(0);
                    73 != b ? (c = _[216] + (68 == b ? _[585] : 87 == b ? _[586] : _[591]) + ";'>" + a + _[506], qa += c + "\n", F.innerHTML += "\n" + c) : (qa += a + "\n", qa.length > c ? (qa = qa.slice(-c / 2, -1), F.innerHTML = qa) : F.lastChild ? F.lastChild.nodeValue += "\n" + a : F.innerHTML += a);
                    F.scrollTop = F.scrollHeight;
                    oc.so.vars && la(oc.so.vars.consolelog) && (c = T.console) && c.log && (d.firefox || d.chrome ? c.log("%c" + a, 68 == b ? _[303] : 69 == b ? _[190] : 87 == b ? _[304] : _[295]) : c.log(a))
                }
            };
            n.showlog = function(a) {
                p(null, a)
            };
            var Q = 0;
            n.handleKeydown = function(a) {
                l[Pb[1]] ? 79 == a ? p() : "none" != c.style.display && (68 == a ? (l.debugmode = !l.debugmode, p(null, !0), 0 == l.debugmode && (N.style.textDecoration = X.style.textDecoration = "none", fe = !1, v(!1, !1))) : l.debugmode && (72 == a ? m() : 76 == a ? k() : 80 == a ? (fe = !fe, $a = !0) : 83 == a ? (ja.stereo = !ja.stereo, $a = !0) : 65 == a ? (Db.enabled = !Db.enabled, va(0, (Db.enabled ? "en" : "dis") + _[292]), $a = !0) : 67 == a ? da.mousetype = _[18] == da.mousetype ? _[596] : _[18] : 85 == a && (va(0, _[218]), t.maxpixelzoom = Number.NaN, t.fovmin = 0, t.fovmax = 179, t.limitview = "off", $a = !0))) : 0 != Q || 220 != a && 160 != a ? 1 == Q && 73 == a ? Q++ : 2 == Q && 68 == a ? Q++ : 3 == Q && 75 == a ? Q++ : 4 == Q && 70 == a ? Q++ : 5 == Q && 65 == a ? l[Pb[1]] = !0 : Q = 0 : Q++
            };
            n.getMousePos = function(a, c) {
                var d = {},
                    b = c ? c : h,
                    e = b.getBoundingClientRect();
                d.x = Math.round(a.clientX - e.left - b.clientLeft + b.scrollLeft);
                d.y = Math.round(a.clientY - e.top - b.clientTop + b.scrollTop);
                return d
            };
            n.remove = function() {
                null != C && (clearInterval(C), C = null);
                try {
                    ia(T, _[152], n.onResize, !1), d.iphone && d.safari && ia(T, _[159], H, !1), ia(T, _[106], f, !1), d.fullscreensupport && ia(ca, d.browser.events.fullscreenchange, w), n.htmltarget.removeChild(z), n.htmltarget = null, n.viewerlayer = null, n.controllayer = null, n.panolayer = null, n.pluginlayer = null, h = z = E = F = c = n.hotspotlayer = null
                } catch (a) {}
            };
            var J = null
        })();
        var eb = {};
        (function() {
            function a(a) {
                var c = a.pointerType;
                if (4 != c && _[19] != c) {
                    a = a.changedTouches ? a.changedTouches : [a];
                    var c = a.length,
                        d, b, e;
                    for (d = 0; d < c; d++)
                        if (b = a[d], e = b.pointerId ? b.pointerId : b.identifier, void 0 !== e) {
                            b = D(b);
                            b = {
                                id: e,
                                lx: b.x / ba,
                                ly: b.y / ba
                            };
                            var f, q;
                            q = Wa.length;
                            for (f = 0; f < q; f++)
                                if (Wa[f].id == e) {
                                    Wa[f] = b;
                                    return
                                }
                            Wa.push(b)
                        }
                }
            }

            function b(a) {
                var c = a.pointerType;
                if (4 != c && _[19] != c) {
                    a = a.changedTouches ? a.changedTouches : [a];
                    var c = a.length,
                        d, b;
                    for (d = 0; d < c; d++)
                        if (b = a[d], b = b.pointerId ? b.pointerId : b.identifier, void 0 !== b) {
                            var e, f;
                            f = Wa.length;
                            for (e = 0; e < f; e++)
                                if (Wa[e].id == b) {
                                    Wa.splice(e, 1);
                                    break
                                }
                        }
                }
            }

            function x() {
                var a = G(da.usercontrol);
                return (_[19] == a || "all" == a) && !Z.isblocked()
            }

            function f(a) {
                return a && (a = a.pointerType, 4 == a || _[19] == a) ? !0 : !1
            }

            function e(a, c, d, b) {
                for (var e = hb; 0 < Ia.length && !(d - Ia[0].t <= wd) && !(1 >= e - Ia[0].f);) Ia.shift();
                e = Ia.length - 1;
                0 <= e && a == Ia[e].x && c == Ia[e].y ? Ia[e].t = d : Ia.push({
                    x: a,
                    y: c,
                    t: d,
                    f: b
                })
            }

            function k(a, c, d, b, e) {
                e && (d = .5 * (d - a), b = .5 * (b - c), c = .5 * Ta, e = .5 * Ea + t.r_yoff, a = c - d, d = c + d, c = e - b, b = e + b);
                c = t.inverseProject(a, c);
                e = t.inverseProject(d, b);
                b = (Math.atan2(e.z, e.x) - Math.atan2(c.z, c.x)) / W;
                c = -(Math.atan2(c.y, Math.sqrt(c.x * c.x + c.z * c.z)) - Math.atan2(e.y, Math.sqrt(e.x * e.x + e.z * e.z))) / W; - 180 > b ? b += 360 : 180 < b && (b -= 360);
                if (d < a && 0 > b || d > a && 0 < b) b = -b;
                return {
                    h: b,
                    v: c
                }
            }

            function m(a, c, d, b) {
                x() ? (a = k(a, c, d, b, da.dragrelative), yb = !1, pa = a.h, ka = a.v, H.vinvert && (pa *= -1), a = t.hlookat + pa, d = t.vlookat + ka, Rd += pa, la += ka, c = t._limits, da.bouncinglimits && c && (360 > c[0] && (a < c[1] ? (za = !0, a = .5 * Rd + .5 * c[1]) : a > c[2] && (za = !0, a = .5 * Rd + .5 * c[2])), d < c[4] ? (za = !0, d = -(la - c[4]), b = Math.min(d / 720, 1), b = -Math.min(d - 120 * b + 200 * b * b - 3E3 * b * b * b + 3E3 * b * b * b * b, 163), d = .5 * (c[4] + b) + .5 * c[4]) : d > c[5] && (za = !0, d = la - c[5], b = Math.min(d / 720, 1), b = Math.min(d - 120 * b + 200 * b * b - 3E3 * b * b * b + 3E3 * b * b * b * b, 163), d = .5 * (c[5] + b) + .5 * c[5])), t.hlookat = a, t.vlookat = d, Ya.updateview(), t.haschanged = !0) : ka = pa = 0
            }

            function g(a) {
                (ca.hidden || ca.webkitHidden || ca.mozHidden || ca.msHidden) && w(a)
            }

            function w(a) {
                a ? (_[31] == a.type ? V.controllayer.contains(a.target) && a.preventDefault() : I(), _[51] == a.type && !1 === a.persisted && (Jd = !0), H.down && F(a)) : I();
                for (var c in Za) 1 == Za[c] && (l.keycode = c, ya(_[148]), Za[c] = !1);
                l.keycode = 0;
                Da()
            }

            function Da() {
                l.hlookat_moveforce = l.vlookat_moveforce = l.fov_moveforce = 0;
                Ka = Oa = yb = !1;
                Ra = ua = ma = ab = pa = ka = Ca = ib = sa = Ua = 0
            }

            function r(a) {
                var c = 0;
                if (1 != da.disablewheel && (ta(a), bb(_[263]), x())) {
                    a.wheelDelta ? c = a.wheelDelta / -120 : a.detail && (c = a.detail, 0 == d.mac && (c /= 3));
                    var b = c * da.mousefovchange;
                    da.zoomtocursor ? (Ga = !0, u(a), Ja = H.x, xa = H.y, 0 < b && 0 == da.zoomoutcursor && (Ga = !1)) : Ga = !1;
                    Ka = !0;
                    Ma = 0;
                    Ra += .001 * b;
                    l.wheeldelta_raw = -c;
                    l.wheeldelta = 3 * -c;
                    z(_[73])
                }
            }

            function A(a) {
                var c = V.viewerlayer;
                ca.activeElement == c != 0 && T.activekrpanowindow == c.id && (bb(_[83]), c = a.keyCode, 0 == (a.altKey || a.ctrlKey || a.shiftKey || a.metaKey || 32 > c || 111 < c && 124 > c) && ta(a), l.keycode = c, Z.checkInterrupt(), 0 != Z.isblocked() || !0 === Za[c] && !da.keydownrepeat || (Za[c] = !0, ya(_[436])), V.handleKeydown(c), v(c, 1), 27 == c && (I(), V.fullscreen && (V.fsbkup || d.opera) && V.setFullscreen(!1)))
            }

            function p(a) {
                var c = V.viewerlayer;
                ca.activeElement == c != 0 && T.activekrpanowindow == c.id && (bb(_[97]), a = a.keyCode, l.keycode = a, 1 == Za[a] && (Za[a] = !1, ya(_[148])), v(a, 0))
            }

            function v(a, c) {
                if (0 == c || !Z.isblocked()) {
                    var d = G(da.usercontrol);
                    if ("all" == d || "keyb" == d) a = "," + a + ",", 0 <= ("," + da.keycodesin + ",").indexOf(a) ? l.fov_moveforce = -c : 0 <= ("," + da.keycodesout + ",").indexOf(a) ? l.fov_moveforce = +c : 0 <= ("," + da.keycodesleft + ",").indexOf(a) ? l.hlookat_moveforce = -c : 0 <= ("," + da.keycodesright + ",").indexOf(a) ? l.hlookat_moveforce = +c : 0 <= ("," + da.keycodesup + ",").indexOf(a) ? l.vlookat_moveforce = da.keybinvert ? +c : -c : 0 <= ("," + da.keycodesdown + ",").indexOf(a) && (l.vlookat_moveforce = da.keybinvert ? -c : +c)
                }
            }

            function u(a) {
                a = D(a);
                H.x = a.x / ba;
                H.y = a.y / ba;
                H.moved = !0
            }

            function n(a) {
                var c, b, e = a.changedTouches ? a.changedTouches : [a];
                b = e.length;
                var q = G(a.type),
                    g = 0 <= q.indexOf("start") || 0 <= q.indexOf("down"); - 99 != na && g && (Uc = !0);
                for (c = 0; c < b; c++) {
                    var q = e[c],
                        h = q.pointerId ? q.pointerId : q.identifier; - 99 == na && g && (na = h);
                    if (na == h) {
                        b = D(q);
                        H.x = b.x / ba;
                        H.y = b.y / ba;
                        H.moved = !0;
                        0 == (La & 16) && (0 == d.realDesktop || 10 <= d.ieversion && !f(a)) && H.x > Tb / ba - 22 && H.y > lb / ba - 32 && a.type == L.touchstart && (nb = q.pageY, aa(M, L.touchend, y, !0));
                        break
                    }
                }
            }

            function y(a) {
                a = a.changedTouches ? a.changedTouches : [a];
                ia(M, L.touchend, y, !0); - 120 > a[0].pageY - nb && V.showlog(!0)
            }

            function I() {
                if ($a) {
                    try {
                        M.removeChild($a), M.removeChild(Qa)
                    } catch (a) {}
                    Qa = $a = null
                }
            }

            function B(a) {
                if ($a) I();
                else {
                    ta(a);
                    a.stopPropagation();
                    var c = D(a.changedTouches ? a.changedTouches[0] : a);
                    H.downx = H.x = c.x / ba;
                    H.downy = H.y = c.y / ba;
                    $a = xf(c.x, c.y, I, 0 <= G(a.type).indexOf("touch"));
                    null != $a && (Qa = Fa(), a = Qa.style, a.position = _[0], d.androidstock || (a.zIndex = 99999999998, a[qb] = _[27]), a.width = "100%", a.height = "100%", M.appendChild(Qa), M.appendChild($a))
                }
            }

            function C(a, b) {
                var e = a.timeStamp | 0;
                500 < e && 500 > e - Ac ? Ac = 0 : (V.focus(1), ta(a), (e = 0 == (a.button | 0)) && I(), Z.checkInterrupt(), !Z.isblocked() && e && (1 != b ? (aa(T, _[9], h, !0), aa(T, _[2], c, !0), d.topAccess && aa(top, _[2], F, !0)) : aa(d.topAccess ? top : T, L.touchend, K, !0), e = D(a), Na = e.x, fa = e.y, ga = a.timeStamp, Rd = t.hlookat, la = t.vlookat, oa = 0, H.down = !0, H.up = !1, H.moved = !1, H.downx = H.x = e.x / ba, H.downy = H.y = e.y / ba, 1 == z(_[46]) ? (ia(T, _[9], h, !0), H.down = !1) : Oc.update()))
            }

            function z(a) {
                var c = _[39] == a,
                    d = !1;
                if (_[46] == a || _[33] == a || c || _[73] == a) d = fb.hittesthotspots(a);
                0 == d && (c ? (ya(_[33]), ya(_[39])) : ya(a));
                return d
            }

            function h(a) {
                ta(a);
                var d = D(a);
                H.x = d.x / ba;
                H.y = d.y / ba;
                H.moved = !0;
                if (_[18] == G(da.mousetype)) {
                    Oa = !0;
                    var b = k(Na, fa, d.x, d.y, da.movetorelative).h;
                    H.vinvert && (b *= -1);
                    oa += b
                } else m(Na, fa, d.x, d.y);
                Na = d.x;
                fa = d.y;
                ga = a.timeStamp;
                e(Na, fa, ga, hb);
                (0 === a.buttons || void 0 === a.buttons && 0 === a.which) && c(a, !0)
            }

            function c(a, b) {
                0 == H.downLayer && bb(_[340]);
                ta(a);
                ia(T, _[9], h, !0);
                ia(T, _[2], c, !0);
                d.topAccess && ia(top, _[2], F, !0);
                var f = D(a);
                Na = f.x;
                fa = f.y;
                ga = a.timeStamp;
                e(Na, fa, ga, hb);
                if (da.drag_oldmode) yb = !0, 1 >= Ia.length && (yb = !1, ka = pa = 0);
                else if (_[18] != G(da.mousetype))
                    if (x() && 1 < Ia.length && 0 == va) {
                        var q = Ia[0],
                            g = Ia[Ia.length - 1],
                            f = (g.t - q.t) * da.draginertia;
                        0 < f && (q = k(q.x, q.y, g.x, g.y, da.dragrelative), yb = !0, pa = q.h / f, ka = q.v / f)
                    } else yb = !1, ka = pa = 0;
                H.down = !1;
                H.dragging = !1;
                Oc.update();
                0 == H.up && (H.up = !0, f = _[33], !0 !== b && (0 == H.moved || 5 > Math.abs(H.x - H.downx) && 5 > Math.abs(H.y - H.downy)) && (f = _[39]), z(f))
            }

            function F(a) {
                c(a, !0)
            }

            function E(a) {
                1 == l.control.preventTouchEvents && ta(a)
            }

            function N(a) {
                wb && (db++, 2 == db && (Vc = 1), Cb.addPointer(a.pointerId), M.setPointerCapture ? M.setPointerCapture(a.pointerId) : M.msSetPointerCapture && M.msSetPointerCapture(a.pointerId))
            }

            function X(a) {
                db--;
                0 > db && (db = 0);
                return 2 > db && wa ? (J(a), !0) : !1
            }

            function O(c) {
                Ac = c.timeStamp | 0;
                wd = d.ios ? 100 : 49 > Od ? 200 : 100;
                a(c);
                if (md) {
                    if (0 == l.control.preventTouchEvents) return;
                    if (f(c)) {
                        c.currentPoint && c.currentPoint.properties && 0 == c.currentPoint.properties.isLeftButtonPressed && (c.button = 0);
                        Ac = 0;
                        C(c, !0);
                        return
                    }
                    N(c)
                }
                T.activekrpanowindow = V.viewerlayer.id;
                bb(_[278]);
                0 == V.__scrollpage_yet && E(c);
                I();
                if (!(wa || 0 == U && 1 < Wa.length || (Z.checkInterrupt(), Z.isblocked()))) {
                    var b = c.changedTouches ? c.changedTouches[0] : c,
                        e = D(b);
                    dc = b.pointerId ? b.pointerId : b.identifier;
                    Na = e.x;
                    fa = e.y;
                    ga = c.timeStamp;
                    Ia = [];
                    Rd = t.hlookat;
                    la = t.vlookat;
                    oa = 0;
                    H.down = !0;
                    H.dragging = !0;
                    H.up = !1;
                    H.moved = !1;
                    H.downx = H.x = e.x / ba;
                    H.downy = H.y = e.y / ba;
                    q = {
                        t: Ac
                    };
                    va = 1 == z(_[46]) ? !0 : !1
                }
            }

            function R(a) {
                var c = a.pointerType;
                if (4 != c && _[19] != c) {
                    var c = a.changedTouches ? a.changedTouches : [a],
                        d = c.length,
                        b, g, l;
                    for (b = 0; b < d; b++)
                        if (g = c[b], l = g.pointerId ? g.pointerId : g.identifier, void 0 !== l) {
                            var p, n;
                            n = Wa.length;
                            for (p = 0; p < n; p++)
                                if (Wa[p].id == l) {
                                    g = D(g);
                                    l = g.y / ba;
                                    p = Wa[p];
                                    p.lx = g.x / ba;
                                    p.ly = l;
                                    break
                                }
                        }
                }
                if (md) {
                    if (f(a)) {
                        H.down && h(a);
                        return
                    }
                    if (1 < db) return
                }
                if ((c = x()) && 0 == U && 1 < Wa.length) {
                    var r;
                    n = g = Wa[0].lx;
                    r = l = Wa[0].ly;
                    p = Wa.length;
                    for (b = 1; b < p; b++) c = Wa[b].lx, d = Wa[b].ly, c < g && (g = c), c > n && (n = c), d < l && (l = d), d > r && (r = d);
                    c = n - g;
                    d = r - l;
                    c = Math.sqrt(c * c + d * d);
                    1 > c && (c = 1);
                    0 == Jb ? (Jb = !0, be = c, ea(a)) : P(a, c / be)
                } else bb(_[307]), 0 == V.__scrollpage_yet && E(a), wa || 0 == c || (c = a.changedTouches ? a.changedTouches[0] : a, dc == (c.pointerId ? c.pointerId : c.identifier) && (c = D(c), 0 == va && (_[18] == G(da.touchtype) ? (Oa = !0, d = k(Na, fa, c.x, c.y, da.movetorelative).h, -180 > d ? d = 360 + d : 180 < d && (d = -360 + d), oa += d) : m(Na, fa, c.x, c.y)), Na = c.x, fa = c.y, ga = a.timeStamp, e(Na, fa, ga, hb), -99 == na && (H.x = c.x / ba, H.y = c.y / ba), q && 16 < H.dd && (q = null), ta(a)))
            }

            function K(a) {
                b(a);
                na = -99;
                Uc = !1;
                if (md) {
                    ia(d.topAccess ? top : T, L.touchend, K, !0);
                    if (X(a)) return;
                    if (f(a)) {
                        c(a);
                        return
                    }
                }
                Jb && (J(a), Jb = !1);
                0 == V.__scrollpage_yet && E(a);
                if (wa) dc = -99;
                else {
                    var g = a.changedTouches ? a.changedTouches[0] : a;
                    if (dc == (g.pointerId ? g.pointerId : g.identifier)) {
                        dc = -99;
                        g = D(g);
                        H.x = g.x / ba;
                        H.y = g.y / ba;
                        Na = g.x;
                        fa = g.y;
                        ga = a.timeStamp;
                        e(Na, fa, ga, hb);
                        if (_[18] != G(da.touchtype))
                            if (x() && 1 < Ia.length && 0 == va) {
                                var h = Ia[0],
                                    m = Ia[Ia.length - 1],
                                    g = (m.t - h.t) * da.draginertia;
                                0 < g && (h = k(h.x, h.y, m.x, m.y, da.dragrelative), yb = !0, pa = h.h / g, ka = h.v / g)
                            } else yb = !1, ka = pa = 0;
                        H.down = !1;
                        H.dragging = !1;
                        if (0 == H.up) {
                            H.up = !0;
                            q && 0 == va && (g = 52800 / (Math.min(Math.max(ja.currentfps, 10), 60) + 35), 32 > H.dd && (a.timeStamp | 0) - q.t > g && B(a));
                            a = _[33];
                            if (0 == H.moved || 5 > Math.abs(H.x - H.downx) && 5 > Math.abs(H.y - H.downy)) a = _[39];
                            z(a)
                        }
                        q = null;
                        va = !1
                    }
                }
            }

            function Ba(a) {
                b(a);
                Jb = !1;
                na = dc = -99;
                wa = !1;
                db = 0;
                va = !1;
                q = null
            }

            function ea(a) {
                0 == l.control.preventTouchEvents || wb && 2 > db || (ta(a), wa = !0, q = null, Y = t.fov, dc = -99, H.down = !1, H.dragging = !1)
            }

            function P(a, c) {
                if (0 != l.control.preventTouchEvents) {
                    var d = void 0 !== c ? c : a.scale;
                    if (wb) {
                        if (2 > db) return;
                        0 == wa && ea(a);
                        d = Vc *= d
                    }
                    ta(a);
                    bb(_[277]);
                    if (x()) {
                        ka = pa = 0;
                        var b = 2 / W,
                            e = 1 / Math.tan(Y / b),
                            b = Math.atan(1 / (e * d)) * b,
                            e = b > t.fov ? -3 : 3;
                        l.wheeldelta = e;
                        l.wheeldelta_raw = e / 3;
                        l.wheeldelta_touchscale = d;
                        0 == da.touchzoom && (b = t.fov);
                        da.bouncinglimits && (b < t.fovmin ? (b = Q(b), d = Q(t.fovmin), Ra = .5 * -(b - d), Ka = !0, Ma = 1, b += Ra, Ra = 1E-9, b = S(b)) : b > t.fovmax && (b = Q(b), d = Q(t.fovmax), Ra = .75 * -(b - d), Ka = !0, Ma = 1, b += Ra, Ra = 1E-9, b = S(b)));
                        if (da.zoomtocursor && (0 < e || 1 == da.zoomoutcursor)) {
                            if (e = Wa.length, 0 < e) {
                                Ga = !0;
                                for (d = xa = Ja = 0; d < e; d++) {
                                    var f = Wa[d];
                                    Ja += f.lx;
                                    xa += f.ly
                                }
                                Ja /= e;
                                xa /= e;
                                t.updateView();
                                e = t.screentosphere(Ja, xa);
                                t.fov = b;
                                t.updateView();
                                d = t.screentosphere(Ja, xa);
                                b = t.hlookat + (e.x - d.x);
                                e = t.vlookat + (e.y - d.y);
                                if (d = t._limits) 360 > d[0] && (b < d[1] ? b = d[1] : b > d[2] && (b = d[2])), e < d[4] ? e = d[4] : e > d[5] && (e = d[5]);
                                t.hlookat = b;
                                t.vlookat = e
                            }
                        } else t.fov = b, t.updateView();
                        z(_[73]);
                        t.haschanged = !0
                    }
                }
            }

            function J(a) {
                0 != l.control.preventTouchEvents && (wa && (wa = !1), Uc = !1, Wa = [], ta(a))
            }

            function Q(a) {
                return jb * Math.log(1 / Math.tan(.5 * a * W))
            }

            function S(a) {
                return 2 * Math.atan(1 / Math.exp(a / jb)) / W
            }
            var ra = eb;
            ra.mouse = !1;
            ra.touch = !1;
            var q = null,
                D = null,
                L = null,
                M = null,
                Za = [],
                wa = !1,
                nb = 0,
                U = !1,
                Jb = !1,
                be = 1,
                Y = 90,
                dc = -99,
                Rd = 0,
                la = 0,
                Na = 0,
                fa = 0,
                ga = 0,
                Ia = [],
                na = -99,
                Uc = !1,
                wd = 100,
                va = !1,
                Wa = [],
                md = !1,
                wb = !1,
                Cb = null,
                db = 0,
                Vc = 1,
                yb = !1,
                pa = 0,
                ka = 0,
                Oa = !1,
                ma = 0,
                ab = 0,
                ua = 0,
                oa = 0,
                Ka = !1,
                Ra = 0,
                Ma = 0,
                Ga = !1,
                Ja = 0,
                xa = 0,
                Ca = 0,
                ib = 0,
                za = !1,
                sa = 0,
                Ua = 0,
                $a = null,
                Qa = null;
            ra.registerControls = function(a) {
                M = a;
                L = d.browser.events;
                D = V.getMousePos;
                d.ie && (wb = (md = Ha.msPointerEnabled || Ha.pointerEnabled) && (1 < Ha.msMaxTouchPoints || 1 < Ha.maxTouchPoints));
                U = wb || 0 == d.simulator && d.ios || void 0 !== ca.documentElement.ongesturestart;
                if (d.chrome || d.android) U = !1;
                a = !(0 == d.simulator && d.ios || d.android || 10 <= d.ieversion && d.touchdeviceNS);
                var c = d.touchdeviceNS;
                c && (d.mobile || d.tablet) && 0 == d.simulator && 0 == d.realDesktop && (a = !1);
                ra.mouse = a;
                ra.touch = c;
                L.mouse = a;
                L.touch = c;
                aa(ca, _[83], A, !1);
                aa(ca, _[97], p, !1);
                aa(d.topAccess ? top : T, _[31], w, !0);
                aa(d.topAccess ? top : T, _[51], w, !0);
                aa(ca, _[29], g);
                aa(ca, _[100], g);
                aa(ca, _[102], g);
                aa(ca, _[103], g);
                if (a || md) aa(M, _[115], r, !1), aa(M, _[130], r, !1);
                (a || md) && aa(T, _[9], u, !0);
                a && aa(M, _[8], C, !1);
                (a && d.realDesktop || d.ie) && aa(M, _[31], B, !0);
                c && (aa(M, L.touchstart, n, !0), aa(M, L.touchmove, n, !0), aa(M, L.touchstart, O, !1), aa(M, L.touchmove, R, !0), aa(M, L.touchend, K, !0), aa(M, L.touchcancel, Ba, !0), U && (aa(M, L.gesturestart, ea, !1), aa(M, L.gesturechange, P, !1), aa(M, L.gestureend, J, !0), wb && (aa(M, _[117], J, !0), Cb = new MSGesture, Cb.target = M)))
            };
            ra.domUpdate = function() {
                if (Cb) {
                    var a = M;
                    db = 0;
                    ra.unregister();
                    ra.registerControls(a)
                }
            };
            ra.unregister = function() {
                Cb && (Cb = Cb.target = null);
                ia(ca, _[83], A, !1);
                ia(ca, _[97], p, !1);
                ia(d.topAccess ? top : T, _[31], w, !0);
                ia(d.topAccess ? top : T, _[51], w, !0);
                d.topAccess && ia(top, _[2], F, !0);
                ia(ca, _[29], g);
                ia(ca, _[100], g);
                ia(ca, _[102], g);
                ia(ca, _[103], g);
                ia(T, _[9], u, !0);
                ia(T, _[9], h, !0);
                ia(T, _[2], c, !0);
                ia(M, _[115], r, !1);
                ia(M, _[130], r, !1);
                ia(M, _[8], C, !1);
                ia(M, _[31], B, !0);
                ia(M, L.touchstart, n, !0);
                ia(M, L.touchmove, n, !0);
                ia(M, L.touchstart, O, !1);
                ia(M, L.touchmove, R, !0);
                ia(M, L.touchend, K, !0);
                ia(M, L.touchcancel, Ba, !0);
                ia(M, L.gesturestart, ea, !1);
                ia(M, L.gesturechange, P, !1);
                ia(M, L.gestureend, J, !0);
                ia(M, _[117], J, !0);
                D = L = M = null
            };
            ra.handleFrictions = function() {
                var a, c = a = !1,
                    d = l.hlookat_moveforce,
                    b = l.vlookat_moveforce,
                    e = l.fov_moveforce;
                if (0 != e) {
                    var f = da.keybfovchange;
                    Ga = !1;
                    Ka = !0;
                    Ma = 0;
                    Ra += f * e * .001
                }
                if (0 != d || 0 != b || 0 != Ca || 0 != ib) {
                    var q = da.keybfriction,
                        c = da.keybspeed,
                        e = t.hlookat,
                        f = t.vlookat,
                        g = da.keybaccelerate * Math.tan(Math.min(.5 * Number(t.fov), 45) * W);
                    Ca += d * g;
                    d = ib += b * g;
                    b = Ca;
                    Ca *= q;
                    ib *= q;
                    q = Math.sqrt(d * d + b * b);
                    0 < q ? (d /= q, b /= q) : b = d = 0;
                    q > c && (q = c);
                    b *= q;
                    e = 180 >= (Math.floor(f) % 360 + 450) % 360 ? e + b : e - b;
                    f += d * q;
                    t.hlookat = e;
                    t.vlookat = f;
                    q < .05 * g && (ib = Ca = 0);
                    c = !0
                }
                a |= c;
                if (yb) d = Math.pow(da.dragfriction, .92), pa *= d, ka *= d, d = Math.sqrt(ka * ka + pa * pa), b = Math.min(.04 * Qc / t.r_zoom, .5), 0 != d && (t.hlookat += pa, t.vlookat += ka), d < b && (yb = !1, ka = pa = 0), a |= 1;
                else if (Oa) {
                    var d = H,
                        b = ua,
                        c = ma,
                        e = ab,
                        q = .025 * da.movetoaccelerate,
                        h = da.movetospeed,
                        g = da.movetofriction,
                        f = !1;
                    if (x()) {
                        if (d.down && (d.x != d.downx || d.y != d.downy)) {
                            var m = k(d.downx, d.downy, d.x, d.y, da.movetorelative);
                            m.h = oa;
                            c = b * c - m.h * q;
                            e = b * e - m.v * q;
                            b = Math.sqrt(c * c + e * e);
                            0 < b && (c /= b, e /= b, b > h && (b = h))
                        }
                        q = t.hlookat;
                        h = t.vlookat;
                        h += b * e * da.movetoyfriction;
                        t.hlookat = q + b * c;
                        t.vlookat = h;
                        b *= g;
                        g = Math.min(.04 * Qc / t.r_zoom, .5);
                        0 == d.down && b < g && (f = !0)
                    } else f = !0;
                    f && (Oa = !1, oa = e = c = b = 0);
                    ua = b;
                    ma = c;
                    ab = e;
                    a |= 1
                }
                if (Ka) {
                    a: {
                        b = d = t.fov;c = Ra;e = !1;
                        if (0 < Math.abs(c)) {
                            g = c;
                            q = da.fovspeed;
                            e = t.fovmin;
                            f = t.fovmax;
                            c *= da.fovfriction;
                            Math.abs(g) > q && (g = q * (g / Math.abs(g)));
                            d = Q(d);
                            d = S(d + g);
                            if (da.bouncinglimits && 0 < Ma)
                                if (0 == wa) g = Q(d), d < e ? (c = Q(e), c = .25 * -(g - c)) : d > f && (c = Q(f), c = .25 * -(g - c));
                                else {
                                    d = void 0;
                                    break a
                                }
                            else d < e && (d = e, c = 0), d > f && (d = f, c = 0);
                            t.fov = d;
                            Ra = c;
                            e = !0;
                            Ga && (t.fov = b, t.updateView(), b = t.screentosphere(Ja, xa), t.fov = d, t.updateView(), d = t.screentosphere(Ja, xa), c = t.vlookat + (b.y - d.y), t.hlookat += b.x - d.x, t.vlookat = c)
                        }
                        1E-5 > Math.abs(Ra) && (Ma = Ra = 0, Ka = !1);d = e
                    }
                    a |= d
                }
                za && (d = !1, H.down ? d = !1 : (b = t.hlookat, c = t.vlookat, b += sa, c += Ua, t.hlookat = b, t.vlookat = c, d = !0, sa *= .95, Ua *= .95, e = t._limits, da.bouncinglimits && e && (360 > e[0] && (b < e[1] ? sa = .15 * -(b - e[1]) : b > e[2] && (sa = .15 * -(b - e[2]))), c < e[4] ? Ua = .15 * -(c - e[4]) : c > e[5] && (Ua = .15 * -(c - e[5]))), b = .15 * Math.min(.04 * Qc / t.r_zoom, .5), Math.sqrt(sa * sa + Ua * Ua) < b && (sa = Ua = 0, za = !1)), a |= d);
                return a
            };
            ra.stopFrictions = function(a) {
                0 == (0 | a) && (a = 3);
                a & 1 && (ma = pa = 0);
                a & 2 && (ab = ka = 0);
                a & 4 && (Da(), H.down = !1)
            };
            ra.isMultiTouch = function() {
                return wa || Jb || 1 < db || Uc
            };
            ra.isBouncing = function() {
                return 0 < Ma || za
            };
            ra.focusLoss = w;
            ra.trackTouch = function(c) {
                if (0 == U || wb) {
                    var d = c.type;
                    d == L.touchstart ? md ? N(c) : a(c) : d == L.touchend && (md ? X(c) : b(c))
                }
            };
            var jb = -.1
        })();
        var ga = null,
            U = null,
            Wc = !1,
            je = !1,
            pb = 0,
            Bc = !1,
            nd = !1,
            Cc = -1,
            Ya = {};
        (function() {
            function a(a, d) {
                if (!0 !== d) t.haschanged = !0;
                else {
                    var b = l.webVR;
                    b && b.enabled && b.updateview();
                    b = Z.isBusy();
                    0 == b && ya(_[355]);
                    t.updateView();
                    ga && fb.renderpano(ga, 2);
                    U && fb.renderpano(U, 1);
                    z && (z = fb.rendersnapshot(z, U));
                    Nd(!0);
                    0 == b && ya(_[314])
                }
            }

            function b(a, d, b, f, g) {
                y.count++;
                y.id = y.count;
                if (e()) {
                    l.xml.sceneNEW && (l.xml.scene = l.xml.sceneNEW, l.xml.sceneNEW = null);
                    Z.haltActions();
                    l.xml.url = "";
                    l.xml.content = a;
                    var h = (new DOMParser).parseFromString(a, _[36]);
                    fa.resolvexmlincludes(h, function() {
                        h = fa.xmlDoc;
                        m(h, d, b, f, g)
                    })
                }
            }

            function x(a, d) {
                setTimeout(function() {
                    try {
                        a.removeChild(d)
                    } catch (b) {}
                }, 20)
            }

            function f(a) {
                var b = 0 != (I & 64) && 0 == (I & 256),
                    e;
                !0 === a && (I = b = 0);
                if (0 == (I & 4)) {
                    var f = Ga.getArray();
                    a = f.length;
                    for (e = 0; e < a; e++) {
                        var g = f[e];
                        !g || 0 != b && 0 != g.keep || (g.sprite && (g.visible = !1, g.parent = null, g.sprite.parentNode && g.sprite.parentNode.removeChild(g.sprite)), g.destroy(), Ga.removeItem(e), e--, a--)
                    }
                }
                if (0 == (I & 128))
                    for (f = Ua.getArray(), a = f.length, e = 0; e < a; e++)
                        if ((g = f[e]) && (0 == b || 0 == g.keep)) {
                            if (g.sprite) {
                                g.visible = !1;
                                g.parent = null;
                                try {
                                    V.hotspotlayer.removeChild(g.sprite)
                                } catch (h) {}
                            }
                            var k = g._poly;
                            k && (k.kobject = null, 8.4 == d.iosversion ? x(V.svglayer, k) : V.svglayer.removeChild(k), g._poly = null);
                            g.destroy();
                            Ua.removeItem(e);
                            e--;
                            a--
                        }
                b = jd.getArray();
                a = b.length;
                for (e = 0; e < a; e++)(f = b[e]) && 0 == la(f.keep) && (jd.removeItem(e), e--, a--)
            }

            function e() {
                return 1 < y.count && y.removeid != y.id && (y.removeid = y.id, ya(_[343], !0), y.removeid != y.id) ? !1 : !0
            }

            function k(a) {
                var d, b, e = "";
                a = Mc(a);
                d = a.lastIndexOf("/");
                b = a.lastIndexOf("\\");
                b > d && (d = b);
                0 <= d && (e = a.slice(0, d + 1));
                return e
            }

            function m(a, b, e, h, k) {
                Db.currentmovingspeed = 0;
                B = !1;
                I = U ? 64 : 0;
                e && (e = G(e), 0 <= e.indexOf(_[365]) && (I |= 4), 0 <= e.indexOf(_[351]) && (I |= 128), 0 <= e.indexOf(_[458]) && (I |= 16), 0 <= e.indexOf(_[504]) && (I |= 32), 0 <= e.indexOf("merge") && (I |= 16448), 0 <= e.indexOf(_[417]) && (I |= 256), 0 <= e.indexOf(_[507]) && (I |= 4), 0 <= e.indexOf(_[508]) && (I |= 36), 0 <= e.indexOf(_[446]) && (B = !0, I |= 65536), 0 <= e.indexOf(_[344]) && Y(_[126], 0), 0 <= e.indexOf(_[413]) && (I |= 1056));
                0 == B && (pb = 0, h && (h = G(h), e = h.indexOf(_[595]), 0 <= e && (pb = parseFloat(h.slice(e + 6)), isNaN(pb) || 0 > pb)) && (pb = 2), U && (e = 0 != (I & 1024), d.webgl ? (e && (ga || z) && (ga && (z = fb.snapshot(z, ga)), e = !1), ga && (ga.destroy(), ga = null), 0 == e ? (U.stop(), z = fb.snapshot(z, U), U.destroy(), U = null) : (U.suspended = !0, ga = U, U = null, fb.renderpano(ga, 2)), fb.setblendmode(h), Cc = -1, Bc = !1) : (0 == Bc ? (ga && (ga.destroy(), ga = null), ga = U, 0 == e ? ga.stop() : ga.suspended = !0, U = null) : (h = (Ja() - Cc) / 1E3 / pb, h = v(h), .5 < h ? U && (U.destroy(), U = null) : (ga && (ga.destroy(), ga = null), ga = U, 0 == e ? ga.stop() : ga.suspended = !0, U = null), Bc = !1), ga && ga.stopped && fb.renderpano(ga, 2))), I & 32 && (n[0] = t.hlookat, n[1] = t.vlookat, n[2] = t.camroll, n[3] = t.fov, n[4] = t.fovtype, n[5] = t.fovmin, n[6] = t.fovmax, n[7] = t.maxpixelzoom, n[8] = t.fisheye, n[9] = t.fisheyefovlink, n[10] = t.stereographic, n[12] = t.pannini, n[13] = t.architectural, n[14] = t.architecturalonlymiddle), 0 == (I & 16384) && t.defaults(), t.limitview = "auto", t.hlookatmin = Number.NaN, t.hlookatmax = Number.NaN, t.vlookatmin = Number.NaN, t.vlookatmax = Number.NaN, l.preview && delete l.preview, l.image && delete l.image, l.onstart = null, J = l.image = {}, J.type = null, J.multires = !1, J.multiresthreshold = .025, J.cubelabels = "l|f|r|b|u|d", J.stereo = !1, J.stereoformat = "TB", J.stereolabels = "1|2", J.tiled = !1, J.tilesize = 0, J.tiledimagewidth = 0, J.tiledimageheight = 0, J.baseindex = 1, J.level = new ub, J.hfov = 0, J.vfov = 0, J.voffset = 0, J.hres = 0, J.vres = 0, J.viewoffset = 0, J.haschanged = !1, sa(J, "frame", 1), J.frames = 1);
                f();
                if (a && a.documentElement && _[32] == a.documentElement.nodeName) cb(a.baseURI + _[28]);
                else {
                    fa.parsexml(a.childNodes, null, I);
                    if (null != l._loadpanoscene_name) {
                        var m = S(_[91] + l._loadpanoscene_name + "]");
                        m && (h = _[139] + m.content + _[136], l.xml.url = "", l.xml.scene = l._loadpanoscene_name, l.xml.content = h, l.onstart = null, h = (new DOMParser).parseFromString(h, _[36]), fa.resolvexmlincludes(h, function() {
                            (a = fa.xmlDoc) && a.documentElement && _[32] == a.documentElement.nodeName ? cb(a.baseURI + _[28]) : (fa.parsexml(a.childNodes, null, I), k = m.onstart)
                        }));
                        l._loadpanoscene_name = null
                    }
                    l.xmlversion = l.version;
                    l.version = l.buildversion;
                    C = k;
                    Xd(b);
                    g()
                }
            }

            function g() {
                var a, d, b = l.plugin.getArray(),
                    e;
                d = b.length;
                for (a = 0; a < d; a++) {
                    var f = b[a];
                    if (f && f.layer && f.layer.isArray) {
                        var g = f.layer.getArray();
                        e = g.length;
                        for (d = 0; d < e; d++) {
                            var h = g[d];
                            h && (Ga.createItem(h.name, h), h.parent = f.name, h.keep = f.keep)
                        }
                        f.plugin = null;
                        f.layer = null;
                        a--;
                        d = b.length
                    }
                }
                if (0 != w(!0)) {
                    if (0 == B) {
                        I & 32 && (t.hlookat = n[0], t.vlookat = n[1], t.camroll = n[2], t.fov = n[3], t.fovtype = n[4], t.fovmin = n[5], t.fovmax = n[6], t.maxpixelzoom = n[7], t.fisheye = n[8], t.fisheyefovlink = n[9], t.stereographic = n[10], t.pannini = n[12], t.architectural = n[13], t.architecturalonlymiddle = n[14]);
                        Ya.updateview();
                        ga && ga.removemainpano();
                        for (a = 0; 4100 > a; a++);
                        void 0 !== ja.hardwarelimit && (pc = parseFloat(ja.hardwarelimit), isNaN(pc) && (pc = 0));
                        void 0 !== ja.usedesktopimages && (Ae = la(ja.usedesktopimages));
                        Wc = !0;
                        Pc.progress = 0;
                        U = fb.createPano(J);
                        U.addToLayer(V.panolayer);
                        0 < pb ? (nd = !0, U.setblend(0), wc = 0) : (nd = !1, U.setblend(1), wc = 1)
                    }
                    Z.resumeActions();
                    Z.actions_autorun(_[515], !0);
                    a = l.onstart;
                    C && (a = C, C = null);
                    b = y.id;
                    Z.callaction(a, null, !0);
                    if (b == y.id && (Z.actions_autorun(_[516], !1), ya(_[334]), l.xml && l.xml.scene && ya(_[394]), b == y.id)) {
                        0 == B && r();
                        a = Ua.getArray();
                        b = a.length;
                        for (f = 0; f < b; f++)(d = a[f]) && 0 == d._ready && (d.create(), d.sprite && V.hotspotlayer.appendChild(d.sprite));
                        w();
                        0 < lb && ya(_[80]);
                        Ya.updateview();
                        Z.processactions()
                    }
                }
            }

            function w(a) {
                var d = Ga.getArray(),
                    b = d.length,
                    e, f = !0;
                for (e = 0; e < b; e++) {
                    var h = d[e];
                    if (h) {
                        var k = !1;
                        1 == a ? 1 == h.preload && _[22] != h.type && 0 == h.loaded && (h.onloaded = g, h.altonloaded = null, k = !0, f = !1) : (1 == h.preload && (h.preload = !1, h.onloaded = null), k = !0);
                        k && 0 == h._ready && (h.create(), h.sprite && null == h._parent && V.pluginlayer.appendChild(h.sprite))
                    }
                }
                return f
            }

            function Da() {
                ya(_[247])
            }

            function r() {
                var c = d.desktop || Ae,
                    b = !1,
                    e = J.type,
                    f = parseFloat(J.hfov),
                    g = parseFloat(J.vfov),
                    h = parseFloat(J.voffset);
                isNaN(f) && (f = 0);
                isNaN(g) && (g = 0);
                isNaN(h) && (h = 0);
                var k = !!(J.multires && J.level && 0 < J.level.count),
                    m = !!J.mobile,
                    l = !!J.tablet;
                c || 0 != k || !m && !l || (e = "cube", b = !0);
                if (null == e)
                    if (J.left || J.cube) e = "cube";
                    else if (J.cubestrip) e = _[49];
                else if (J.sphere) e = _[60];
                else if (J.cylinder) e = _[35];
                else if (J.flat) e = "flat";
                else if (J.fisheye) e = _[81];
                else {
                    if (m || l) e = "cube", b = !0
                } else e = G(e);
                var n = _[60] == e || _[35] == e || _[81] == e,
                    r = 0 < f && 1 >= f && 45 >= g && n || "flat" == e,
                    u = "cube" == e || _[49] == e || null == e && 0 == n && 0 == r,
                    c = !1,
                    v = null;
                if (u) f = 360, g = 180;
                else if (n || r)
                    if (v = na.parsePath(S(_[579] + e + ".url"))) {
                        var t = 0;
                        0 <= (t = G(v).indexOf(_[529])) && (n = c = !0, k = r = !1, d.panovideosupport && (v = v.slice(t + 7)))
                    }
                J.type = e;
                J.hfov = f;
                J.vfov = g;
                J.voffset = h;
                h = ("" + J.cubelabels).split("|");
                6 == h.length && (U.cubelabels = h);
                U.stereo = d.webgl ? J.stereo : !1;
                U.stereoformat = "sbs" == G(J.stereoformat) ? 0 : 1;
                h = ("" + J.stereolabels).split("|");
                2 == h.length && (U.stereolabels = h);
                t = G(S(_[360]));
                if (h = S(_[376])) {
                    h = na.parsePath(h);
                    if (_[49] == t || "null" == t && u) {
                        t = S(_[233]);
                        if (null != t) {
                            var t = G(t),
                                w = [0, 1, 2, 3, 4, 5];
                            w[t.indexOf("l")] = 0;
                            w[t.indexOf("f")] = 1;
                            w[t.indexOf("r")] = 2;
                            w[t.indexOf("b")] = 3;
                            w[t.indexOf("u")] = 4;
                            w[t.indexOf("d")] = 5;
                            t = w
                        }
                        U.addCubestripPreview(h, t)
                    } else("flat" == t || ("null" == t || _[60] == t || _[35] == t) && r) && U.addFlatLevel(h, f, g, 0, 0, 0, J.baseindex, !0);
                    a(!1, !0)
                } else if (0 == t.indexOf("grid")) {
                    if (h = Ab(t, null, !1))
                        if (h = h[0], "grid" == h.cmd) {
                            var q = h.args,
                                h = void 0 == q[1] ? 64 : parseInt(q[1]),
                                t = void 0 == q[2] ? 64 : parseInt(q[2]),
                                w = void 0 == q[3] ? 512 : parseInt(q[3]),
                                D = void 0 == q[4] ? 6710886 : parseInt(q[4]),
                                x = void 0 == q[5] ? 2236962 : parseInt(q[5]),
                                q = void 0 == q[6] ? void 0 == q[4] ? 16777215 : D : parseInt(q[6]),
                                D = ua(D),
                                x = ua(x),
                                q = ua(q);
                            U.addGridPreview(w, h, t, x, D, q);
                            a(!1, !0);
                            Da()
                        }
                } else Da();
                h = !1;
                t = d.androidstock && !d.webgl;
                if (r || u) {
                    if (b || u && t) l ? h = p(_[354]) : m && (h = p(_[356]));
                    if (0 == h)
                        if ("cube" == e) {
                            if (k)
                                if (b = J.level.getArray(), c = b.length, b.sort(function(a, c) {
                                        return +parseInt(a.tiledimagewidth, 10) - parseInt(c.tiledimagewidth, 10)
                                    }), 0 == d.multiressupport || t) {
                                    g = d.iphone && d.retina || d.tablet || d.android ? 1100 : d.iphone ? 512 : 2560;
                                    0 < pc && (g = pc + 256);
                                    for (v = c - 1; 0 <= v && !(f = b[v].tiledimagewidth, f <= g); v--);
                                    0 <= v && (h = p(_[71] + v + "]", !0))
                                } else
                                    for (b.sort(function(a, c) {
                                            return +parseInt(a.tiledimagewidth, 10) - parseInt(c.tiledimagewidth, 10)
                                        }), v = 0; v < c; v++)
                                        if (b = _[71] + v + "]", k = S(b), g = A(b)) b = k.tilesize ? k.tilesize : J.tilesize, f = parseInt(k.tiledimagewidth, 10), 0 < b && 0 < f && (U.addCubeLevel(g, f, b, J.baseindex), h = !0);
                            0 == h && (h = p(_[96]))
                        } else if (_[49] == e && J.cubestrip) U.addCubestripPano(na.parsePath("" + J.cubestrip.url)), h = !0;
                    else if ((_[60] == e || _[35] == e) && 1 >= f && 45 >= g || "flat" == e) {
                        if (d.multiressupport && k)
                            for (b = J.level.getArray(), c = b.length, b.sort(function(a, c) {
                                    return +parseInt(a.tiledimagewidth, 10) - parseInt(c.tiledimagewidth, 10)
                                }), v = 0; v < c; v++)
                                if (b = _[71] + v + "]", k = S(b), m = S(b + "." + e + ".url"), m = na.parsePath(m)) b = k.tilesize ? k.tilesize : J.tilesize, l = parseInt(k.tiledimagewidth, 10), k = parseInt(k.tiledimageheight, 10), 0 < b && 0 < l && 0 < k && (U.addFlatLevel(m, f, g, l, k, b, J.baseindex, !1), h = !0);
                        0 == h && (c = J[e]) && c.url && (U.addFlatLevel(na.parsePath("" + c.url), f, g, 0, 0, 0, J.baseindex, !1), h = !0)
                    }
                } else n && 0 == k && d.webgl && v && ((f = [Number(J.hfov), Number(J.vfov), Number(J.voffset)], g = J[e], c) ? d.panovideosupport && (c = Ga.getItem(v)) && (c.renderToBitmap = !0, c.visible = !1, U.addRoundPano(e, null, f, c, g), h = !0) : (U.addRoundPano(e, v, f, null, g), h = !0));
                h && (Wc = je = !0);
                U.finalize();
                0 == h && null != e && (va(2, _[195]), ya(_[116]));
                a(!1, !0)
            }

            function A(a) {
                var d = _[184].split(" "),
                    b = Array(6),
                    e, f;
                if (e = S(a + "." + d[6] + ".url")) {
                    if (e = na.parsePath(e))
                        for (f = 0; 6 > f; f++) b[f] = e.split("%s").join(U.cubelabels[f])
                } else
                    for (f = 0; 6 > f; f++)
                        if (e = na.parsePath(S(a + "." + d[f] + ".url"))) b[f] = e;
                        else return null;
                return b
            }

            function p(a, d) {
                var b = A(a);
                if (!b) return !1;
                if (d) {
                    var e = S(a),
                        f = e.tilesize ? e.tilesize : J.tilesize,
                        e = parseInt(e.tiledimagewidth, 10);
                    U.addCubeLevel(b, e, f, J.baseindex)
                } else U.addCubeLevel(b, 0, 0, 1);
                return !0
            }

            function v(a) {
                1 < a && (a = 1);
                0 == d.webgl && (a *= a * a);
                a = 1 - a;
                0 > a && (a = 0);
                return a
            }
            var u = Ya;
            u.loadpano = function(a, d, f, g, h) {
                y.count++;
                y.id = y.count;
                if (e())
                    if (0 > G(f).indexOf(_[396]) && Y(_[126], 0), "null" == G(a) && (a = null), l.xml.content = null, l.xml.scene = null, a) {
                        Z.haltActions();
                        null == na.firstxmlpath ? na.firstxmlpath = k(a) : a = na.parsePath(a, !0);
                        na.currentxmlpath = k(a);
                        l.xml.url = a;
                        var p = y.id;
                        na.loadxml(a, function(b, e) {
                            if (p == y.id) {
                                if (b && b.childNodes) {
                                    var k = b.childNodes,
                                        l = k.length;
                                    0 == l ? b = null : 2 == l && k[1] && _[32] == k[1].nodeName && (b = null)
                                }
                                b ? (b = fa.resolvexmlencryption(b, a), null != b && fa.resolvexmlincludes(b, function() {
                                    b = fa.xmlDoc;
                                    m(b, d, f, g, h)
                                })) : 200 == e ? cb(a + _[28]) : cb(a + _[192])
                            }
                        })
                    } else l.xml.url = "", b(_[243], d, f, g, h)
            };
            u.loadxml = b;
            u.loadxmldoc = m;
            u.updateview = a;
            u.updateplugins = function(a) {
                var d = Ga.getArray(),
                    b = d.length,
                    e;
                Ja();
                var f = 0,
                    g = 0;
                for (e = 0; e < b; e++) {
                    var h = d[e];
                    h && h._ready && (0 != h.haschanged_flags && (h.processUpdates(), f++), (a || h.poschanged) && h.loaded && (h.updatepos(_[435]), g++))
                }
            };
            u.idlecheck = function() {
                var a = Ja();
                H.moved && (H.down || H.downLayer) && bb((H.downLayer ? _[63] : "pano") + _[196]);
                (a - kc) / 1E3 > l.idletime && h != kc && (h = kc, ya(_[564]));
                return Db.checkIdletime(a, kc)
            };
            u.previewdone = Da;
            u.havepanosize = function(a) {
                U && U.id == a.id && (J.hfov = a.hfov, J.vfov = a.vfov, J.hres = a.hres, J.vres = a.vres, ya(_[437]), t.haschanged = !0)
            };
            u.removeelements = f;
            u.isLoading = function() {
                return Wc
            };
            u.isBlending = function() {
                return nd || Bc
            };
            var n = [],
                y = {
                    count: 0,
                    id: 0
                },
                I = 0,
                B = !1,
                C = null,
                z = null,
                h = 0;
            u.checkHovering = function() {
                if (1 != (hb & 1) && !Z.isblocked()) {
                    var a = [Ga.getArray(), Ua.getArray()],
                        d, b, e, f, g;
                    for (g = 0; 2 > g; g++)
                        for (d = a[g], e = d.length, f = 0; f < e; f++)(b = d[f]) && b.DATA.visible && b.hovering && b.onhover && Z.callaction(b.onhover, b)
                }
            };
            u.handleloading = function() {
                var a = !1;
                0 == Bc && (ga && (a |= ga.doloading()), U && (a |= U.doloading()));
                Wc = U && U.isloading();
                var d = fb.handleloading();
                je && 1 != Wc && (je = !1, ya(_[116]));
                d & 1 && (Wc = !0);
                d & 2 && (a = !0);
                if (U && (ga || z))
                    if (0 == Bc) U.previewcheck() && (Bc = !0, Cc = -1);
                    else {
                        a = 0;
                        0 <= pb && (-1 == Cc ? Cc = Ja() : (a = (Ja() - Cc) / 1E3, a = 0 < pb ? a / pb : 1), a = v(a), nd = !0, 0 < pb && U.setblend(1 - a), wc = 1 - a);
                        if (0 == a || 0 >= pb) pb = 0, wc = 1, ga && (ga.destroy(), ga = null), nd = Bc = !1;
                        a = !0
                    }
                return a
            };
            u.setLastPanoOffset = function(a) {
                ga && ga.image && (ga.image.viewoffset += -a)
            }
        })();
        var fb = {};
        (function() {
            var a, b;

            function x(a) {
                if (ma) {
                    var c = l.bgcolor;
                    ma.clearColor((c >> 16 & 255) / 255, (c >> 8 & 255) / 255, (c & 255) / 255, a)
                }
            }

            function f(a) {
                if (!1 === document.hidden && Oa) {
                    var c = parseInt(Oa.style.height);
                    0 < c && (Oa.style.height = c + 1 + "px", setTimeout(function() {
                        Oa && parseInt(Oa.style.height) == c + 1 && (Oa.style.height = c + "px")
                    }, 100))
                }
            }

            function e() {
                return "attribute vec3 vx;attribute vec2 tx;uniform float sh;uniform float ch;uniform mat4 mx;uniform mat4 ot;uniform mat3 tm;varying vec2 tt;void main(){vec3 vr=vec3(ot*vec4(vx,1));vec3 vs=1000.0*normalize(vr);vec2 c2=vec2(vr.x,vr.z);c2=c2/max(1.0,length(c2));vec3 vc=1000.0*vec3(c2.x,clamp(vr.y*inversesqrt(1.0+vr.x*vr.x+vr.z*vr.z),-30.0,+30.0),c2.y);vec3 vv=vr*(1.0-sh)+sh*(vs*(1.0-ch)+vc*ch);gl_Position=mx*vec4(vv,1.0);tt=(vec3(tx,1)*tm).xy;}"
            }

            function k(a, c) {
                return "#ifdef GL_ES\n#ifdef GL_FRAGMENT_PRECISION_HIGH\nprecision highp float;\n#else\nprecision mediump float;\n#endif\n#endif\nuniform float aa;uniform sampler2D sm;varying vec2 tt;void main(){vec4 c=texture2D(sm,vec2(tt.s,tt.t)" + (a ? ",-1.0" : "") + ");" + (c ? _[188] : "") + "gl_FragColor=vec4(c.rgb,c.a*aa);}"
            }

            function m(a) {
                var c = ma;
                c && a && (c.deleteProgram(a.prg), c.deleteShader(a.vs), c.deleteShader(a.fs), a.prg = null, a.vs = null, a.fs = null)
            }

            function g(a, c, d, b) {
                var e = ma;
                null == a && (a = "attribute vec2 vx;varying vec2 tx;void main(){gl_Position=vec4(vx.x*2.0-1.0,-1.0+vx.y*2.0,0.0,1.0);tx=vx;}");
                var f = null;
                if (void 0 === Mb[a]) {
                    f = e.createShader(e.VERTEX_SHADER);
                    e.shaderSource(f, a);
                    e.compileShader(f);
                    if (!e.getShaderParameter(f, e.COMPILE_STATUS)) return va(0, _[118] + e.getShaderInfoLog(f)), null;
                    Mb[a] = f
                } else f = Mb[a];
                a = e.createShader(e.FRAGMENT_SHADER);
                e.shaderSource(a, c);
                e.compileShader(a);
                if (!e.getShaderParameter(a, e.COMPILE_STATUS)) return va(0, _[118] + e.getShaderInfoLog(a)), null;
                c = e.createProgram();
                e.attachShader(c, f);
                e.attachShader(c, a);
                e.linkProgram(c);
                if (!e.getProgramParameter(c, e.LINK_STATUS)) return null;
                e.useProgram(c);
                e.uniform1i(e.getUniformLocation(c, "sm"), 0);
                var f = {
                        vs: f,
                        fs: a,
                        prg: c
                    },
                    g = d.split(","),
                    q;
                a = g.length;
                for (d = 0; d < a; d++)(q = g[d]) && e.enableVertexAttribArray(f[q] = e.getAttribLocation(c, q));
                b = b.split(",");
                a = b.length;
                for (d = 0; d < a; d++)(g = b[d]) && (f[g] = e.getUniformLocation(c, g));
                return f
            }

            function w(a, c) {
                return g(null, a, "vx", c)
            }

            function Da() {
                ec = null
            }

            function r(a) {
                a = a && a.prg ? a.prg : a;
                var c = ma;
                a ? a != ec && (Ob = ec, ec = a, c.useProgram(ec)) : Ob && (ec = Ob, Ob = null, c.useProgram(ec))
            }

            function A() {
                var c = ma;
                try {
                    var f = c.createBuffer();
                    c.bindBuffer(mb, f);
                    c.bufferData(mb, new Float32Array([0, 0, 0, 1, 1, 1, 1, 0]), Xc);
                    var q = c.createBuffer();
                    c.bindBuffer(Rb, q);
                    c.bufferData(Rb, new Uint16Array([0, 1, 2, 0, 2, 3]), Xc);
                    a = f;
                    b = q;
                    var h;
                    for (h = 0; 6 > h; h++) {
                        var c = _[170],
                            m = q = f = "";
                        0 == h ? q = _[179] : 1 == h ? (m = "cc", f = _[107], q = _[169]) : 2 == h ? (m = "cc", f = _[107], q = _[165]) : 3 == h ? (m = "ct,zf", f = _[186], q = _[164]) : 4 == h ? (m = "fp,bl", f = _[185], q = "float t=(tx.x*fp.x+tx.y*fp.y+fp.z)*(1.0-2.0*bl)+bl;gl_FragColor=vec4(texture2D(sm,tx).rgb,smoothstep(t-bl,t+bl,aa));") : 5 == h && (m = _[488], f = _[174], q = "float t=(1.0-sqrt(2.0)*sqrt((ap.x*(tx.x-0.5)*(tx.x-0.5)+ap.y*(tx.y-0.5)*(tx.y-0.5))/(0.5*(ap.x+ap.y))))*(1.0-2.0*bl)+bl;gl_FragColor=vec4(texture2D(sm,(tx-vec2(0.5,0.5))*mix(1.0,aa,zf)+vec2(0.5,0.5)).rgb,smoothstep(t-bl,t+bl,aa));");
                        c = _[202] + c + f + "void main(){" + q + "}";
                        ib[h] = g(null, c, "vx", "aa," + m);
                        if (null == ib[h]) return !1
                    }
                    var l = g(e(), k(!0, !1), _[93], _[68]);
                    null == l && d.ie && (l = g(e(), k(!1, !1), _[93], _[68]));
                    if (null == l) return !1;
                    ya = l;
                    Ra = g(e(), k(!1, !0), _[93], _[68]);
                    ob = l.vx;
                    pb = l.tx;
                    xb = l.sh;
                    Db = l.ch;
                    ub = l.aa;
                    Ab = l.mx;
                    zb = l.ot;
                    Bb = l.tm
                } catch (D) {
                    return !1
                }
                return !0
            }

            function p(a) {
                if (a) {
                    var c = ma;
                    c.deleteBuffer(a.vx);
                    c.deleteBuffer(a.tx);
                    c.deleteBuffer(a.ix);
                    a.vx = null;
                    a.tx = null;
                    a.ix = null;
                    a.vxd = null;
                    a.txd = null;
                    a.ixd = null;
                    a.tcnt = 0
                }
            }

            function v(a, c, d, b) {
                this.tcnt = a;
                this.vxd = c;
                this.txd = d;
                this.ixd = b;
                this.ix = this.tx = this.vx = null
            }

            function u(a) {
                var c = ma;
                c.bindBuffer(mb, a.vx = c.createBuffer());
                c.bufferData(mb, a.vxd, Xc);
                c.bindBuffer(mb, a.tx = c.createBuffer());
                c.bufferData(mb, a.txd, Xc);
                c.bindBuffer(Rb, a.ix = c.createBuffer());
                c.bufferData(Rb, a.ixd, Xc)
            }

            function n(a, c) {
                var d, b = 2 * (c + 1) * (c + 1);
                d = 6 * c * c;
                var e = new Float32Array(3 * (c + 1) * (c + 1)),
                    f = new Float32Array(b),
                    g = new Uint16Array(d),
                    q, h, k, m, l;
                a *= 2;
                for (h = d = b = 0; h <= c; h++)
                    for (q = 0; q <= c; q++) k = q / c, m = h / c, f[b] = k, f[b + 1] = m, b += 2, e[d] = a * (k - .5), e[d + 1] = a * (m - .5), e[d + 2] = 0, d += 3;
                for (h = d = 0; h < c; h++)
                    for (q = 0; q < c; q++) b = q + h * (c + 1), k = b + 1, m = b + (c + 1), l = m + 1, g[d] = b, g[d + 1] = k, g[d + 2] = m, g[d + 3] = k, g[d + 4] = l, g[d + 5] = m, d += 6;
                return new v(6 * c * c, e, f, g)
            }

            function y(a) {
                var c = ma;
                null == a && (a = {
                    have: !1,
                    fb: null,
                    tex: null,
                    w: 0,
                    h: 0,
                    alpha: 1,
                    havepano: -1,
                    drawcalls: 0
                }, a.fb = c.createFramebuffer(), a.tex = c.createTexture(), c.bindTexture(ha, a.tex), c.texParameteri(ha, c.TEXTURE_WRAP_T, c.CLAMP_TO_EDGE), c.texParameteri(ha, c.TEXTURE_WRAP_S, c.CLAMP_TO_EDGE), c.texParameteri(ha, c.TEXTURE_MAG_FILTER, Vb), c.texParameteri(ha, c.TEXTURE_MIN_FILTER, Vb), c.bindFramebuffer(Xa, null), jb = !1);
                var b = d.gl.width * La + .5 | 0,
                    e = d.gl.height * La + .5 | 0;
                if (a.w != b || a.h != e) a.w = b, a.h = e, c.bindTexture(ha, a.tex), c.texImage2D(ha, 0, Ib, b, e, 0, Ib, Yc, null), c.bindFramebuffer(Xa, a.fb), c.framebufferTexture2D(Xa, c.COLOR_ATTACHMENT0, ha, a.tex, 0), c.bindTexture(ha, null), c.bindFramebuffer(Xa, null), jb = !1;
                return a
            }

            function I(c, e, f) {
                var g = ma;
                if (0 >= c.drawcalls || null == e) return !1;
                var q = d.gl.width * La + .5 | 0,
                    h = d.gl.height * La + .5 | 0;
                if (0 < q && 0 < h) return r(e.prg), g.viewport(0, 0, q, h), e.aa && (cb && (f = 1 - cb(1 - f, 0, 1), 0 > f ? f = 0 : 1 < f && (f = 1)), g.uniform1f(e.aa, f)), e.sz && g.uniform2f(e.sz, q, h), g.bindBuffer(mb, a), g.vertexAttribPointer(e.vx, 2, fc, !1, 0, 0), g.bindBuffer(Rb, b), g.activeTexture(Zc), g.bindTexture(ha, c.tex), g.drawElements(bc, 6, Sb, 0), Ia++, !0
            }

            function B(a, c, d, b, e, f) {
                var g = !1;
                0 == b && (c = d = b = 1024, Na = g = !0);
                this.type = 0;
                this.stereo = f;
                this.preview = !1;
                this.needsize = g;
                this.w = c;
                this.h = d;
                this.mp = c * d * a >> 20;
                this.tilesize = b;
                this.htiles = (c + b - 1) / b | 0;
                this.vtiles = (d + b - 1) / b | 0;
                this.loadedtiles = [0, 0];
                this.addedtiles = [0, 0];
                this.totaltiles = a * this.htiles * this.vtiles;
                this.i = e;
                this.planeurls = Array(a);
                this.planemapping = 6 == a ? [0, 1, 2, 3, 4, 5] : [1];
                this.invplanemapping = 6 == a ? [0, 1, 2, 3, 4, 5] : [0, 0, 0, 0, 0, 0];
                this.completelyadded = this.complete = !1;
                this.vfov = this.hfov = 90;
                this.voffset = this.hoffset = 0;
                this.vscale = 1
            }

            function C(a, c) {
                return a.preview ? -1 : c.preview ? 1 : a.w - c.w
            }

            function z(a, c, d, b, e, f, g) {
                f = 0 < f ? b * g / f : 1;
                0 >= b && (b = 1);
                0 >= e && (e = f);
                f = e / f;
                c.hfov = b;
                c.vfov = e;
                c.hoffset = 0;
                c.voffset = b / 2 - e / f / 2;
                c.vscale = 1;
                g = a.levels;
                d && g.push(c);
                g.sort(C);
                c = g.length - 1;
                for (d = e = 0; d <= c; d++) g[d].needsize || (e = g[d].vfov);
                if (0 < e) {
                    for (d = 0; d <= c; d++) g[d].needsize || (g[d].vscale = e / g[d].vfov * f);
                    a.fovlimits = [-b / 2, +b / 2, -e / 2, +e / 2]
                }
                h(a)
            }

            function h(a) {
                var c = null,
                    d = 0 == a.type,
                    b = d || null != a.fovlimits,
                    e = a.levels;
                if (e) {
                    var f = e.length;
                    0 < f && (e = e[f - 1], 0 == e.preview && 0 == e.needsize && b && (c = e))
                }
                c && a.done && 0 == a.ready && (a.ready = !0, a.hfov = d ? 360 : c.hfov, a.vfov = d ? 180 : c.vfov, a.hres = c.w, a.vres = c.h, Ya.havepanosize(a))
            }

            function c() {
                this.h = this.w = 0;
                this.imgfov = null;
                this.loading = !0;
                this.texture = this.obj = null;
                this.texvalid = !1;
                this.mx = Ka()
            }

            function F() {
                this.layer = null;
                this.tiles = [];
                this.mx = this.texture = this.csobj = this.csobj0 = null
            }

            function E(a) {
                function b(a, c, d, e) {
                    g(a);
                    if (0 == a.type || 5 == a.type) {
                        var f = ma;
                        d || (d = [0, 1, 2, 3, 4, 5]);
                        var q, h, k, m;
                        if (c) {
                            q = c.naturalWidth;
                            h = c.naturalHeight;
                            m = 1;
                            if (3 * q == 2 * h) k = q / 2;
                            else if (2 * q == 3 * h) k = q / 3;
                            else if (1 * q == 6 * h) k = q / 6;
                            else if (6 * q == 1 * h) k = q / 1;
                            else {
                                0 == a.type && va(2, _[281] + c.src + _[201]);
                                return
                            }
                            q /= k;
                            h /= k
                        } else e && (k = e.width, m = 0, q = 1, h = 6, c = e);
                        e = pa ? 0 : nb;
                        var l = k,
                            D = new F,
                            ke = new B(6, l, l, l, 1, !1),
                            p, n, r, t = [2, 0, 3, 1, 4, 5];
                        0 == pa && (p = Fa(), p.style.position = _[0], p.style.pointerEvents = "none", D.layer = p);
                        D.tiles = Array(6);
                        for (n = 0; n < h; n++)
                            for (p = 0; p < q; p++) {
                                var v = d[n * q + p],
                                    u = new N("prev" + a.id + "s" + nc[v], 0, v, 0, 0, ke, "", a);
                                r = t[v];
                                var w = 1 == v || 3 == v ? e : 0,
                                    qc = 3 >= v ? e : 0,
                                    x = Fa(2);
                                x.width = l + 2 * w;
                                x.height = l + 2 * qc;
                                x.style.position = _[0];
                                x.style[Tc] = "0 0";
                                var M = x.getContext("2d");
                                M && (0 < qc && (M.drawImage(c, m * p * k, m * n * k, k, 1, w, 0, k, qc), M.drawImage(c, m * p * k, m * n * k + k - 1, k, 1, w, l + qc, k, qc)), 0 < w && (M.drawImage(c, m * p * k + 0, m * n * k + 0, 1, k, 0, w, w, k), M.drawImage(c, m * p * k + k - 1, m * n * k + 0, 1, k, l + w, w, w, k)), M.drawImage(c, m * p * k, m * n * k, k, k, w, qc, l, l), aa && M.getImageData(l >> 1, l >> 1, 1, 1));
                                u.canvas = x;
                                0 == pa ? (u.elmt = x, x = -l / 2, u.transform = Pb[v] + _[72] + (x - w) + "px," + (x - qc) + "px," + x + "px) ") : (S(u, l, l), v = f.createTexture(), f.activeTexture(Zc), f.bindTexture(ha, v), f.texParameteri(ha, f.TEXTURE_WRAP_T, f.CLAMP_TO_EDGE), f.texParameteri(ha, f.TEXTURE_WRAP_S, f.CLAMP_TO_EDGE), f.texParameteri(ha, f.TEXTURE_MAG_FILTER, Vb), f.texParameteri(ha, f.TEXTURE_MIN_FILTER, Vb), f.texImage2D(ha, 0, Wb, Wb, Yc, x), f.bindTexture(ha, null), u.texture = v, u.mem = 0);
                                u.state = 2;
                                D.tiles[r] = u
                            }
                        Na = !0;
                        a.cspreview = D
                    }
                }

                function e(a, c) {
                    k.imagefov = c;
                    var d = a.rppano,
                        b = d.w,
                        f = d.h;
                    a.stereo && (0 == a.stereoformat ? b >>= 1 : f >>= 1);
                    var g = c[0],
                        q = c[1],
                        h = c[2];
                    0 >= g && (g = 360);
                    if (0 >= q) {
                        var q = g,
                            m = b,
                            l = f,
                            D = 180,
                            D = 4 == a.type ? 2 * Math.atan(q / 2 * (l / m) * W) / W : _[147] == a.mapping ? l / m * (q / 2) * Ma : q * l / m;
                        180 < D && (D = 180);
                        q = D
                    }
                    a.hfov = g;
                    a.vfov = q;
                    a.hres = b;
                    a.vres = f;
                    d.imgfov = [g, q, h];
                    d = -q / 2 + h;
                    b = +q / 2 + h;
                    4 == a.type && (b = Math.tan(.5 * q * W), h = Math.sin(h * W), d = Math.atan(-b + h) / W, b = Math.atan(+b + h) / W);
                    a.fovlimits = [-g / 2, +g / 2, d, b]
                }

                function f(a, c, b, e) {
                    c = ma;
                    var g = a.rppano,
                        q = c.createTexture();
                    c.activeTexture(Zc);
                    c.bindTexture(ha, q);
                    c.texParameteri(ha, c.TEXTURE_WRAP_T, c.CLAMP_TO_EDGE);
                    c.texParameteri(ha, c.TEXTURE_WRAP_S, c.CLAMP_TO_EDGE);
                    c.texParameteri(ha, c.TEXTURE_MAG_FILTER, Vb);
                    c.texParameteri(ha, c.TEXTURE_MIN_FILTER, Vb);
                    if (b) {
                        var h;
                        e = b.naturalWidth;
                        h = b.naturalHeight;
                        g.w = e;
                        g.h = h;
                        var k = !1,
                            m = !1,
                            l = R(e) << 1 | R(h),
                            m = d.opera ? "" : G(ja.mipmapping);
                        if (m = "force" == m || "auto" == m && 3 == l) 0 == (l & 2) && (k = !0, e = K(e)), 0 == (l & 1) && (k = !0, h = K(h)), c.texParameteri(ha, c.TEXTURE_MIN_FILTER, c.LINEAR_MIPMAP_LINEAR);
                        e > sa && (k = !0, e = sa);
                        h > sa && (k = !0, h = sa);
                        if (k) {
                            k = Fa(2);
                            k.width = e;
                            k.height = h;
                            l = k.getContext("2d");
                            l.drawImage(b, 0, 0, e, h);
                            if (d.ios) {
                                var D;
                                D = h;
                                for (var p = l.getImageData(0, 0, 1, D).data, ke = 0, n = D, r = D; r > ke;) 0 == p[4 * (r - 1) + 3] ? n = r : ke = r, r = n + ke >> 1;
                                D = r / D;
                                0 < D && 1 > D && l.drawImage(b, 0, 0, e, h / D)
                            }
                            c.texImage2D(ha, 0, Wb, Wb, Yc, k)
                        } else c.texImage2D(ha, 0, Wb, Wb, Yc, b);
                        m && c.generateMipmap(ha);
                        g.texvalid = !0
                    } else e && (g.videoplugin = e, g.videoready = !1);
                    c.bindTexture(ha, null);
                    g.texture = q;
                    a.rppano = g;
                    Na = !0
                }

                function g(a) {
                    var c = ma,
                        d = a.cspreview;
                    if (d)
                        if (a.cspreview = null, c)
                            for (a = 0; 6 > a; a++) {
                                var b = d.tiles[a],
                                    e = b.texture;
                                e && (c.deleteTexture(e), b.texture = null)
                            } else a.previewadded && (a.layer.removeChild(d.layer), a.previewadded = !1)
                }
                var q = ++Uc,
                    k = this;
                k.id = q;
                k.image = a;
                k.panoview = null;
                k.type = 0;
                k.typeinfos = null;
                k.mapping = null;
                k.cubelabels = _[574].split("");
                k.stereo = !1;
                k.stereoformat = 0;
                k.stereolabels = ["1", "2"];
                k.done = !1;
                k.ready = !1;
                k.fovlimits = null;
                k.hfov = 0;
                k.vfov = 0;
                k.hres = 0;
                k.vres = 0;
                k.levels = [];
                k.frame = 0;
                k.currentlevel = -1;
                k.viewloaded = !1;
                k.stopped = !1;
                k.suspended = !1;
                k.alpha = 1;
                k.cspreview = null;
                k.rppano = null;
                k.previewadded = !1;
                k.previewloading = !1;
                k.mjpegimage = null;
                k.mjpegdata = null;
                k.addToLayer = function(a) {
                    if (0 == pa) {
                        var c = Fa(),
                            d = c.style;
                        d.position = _[0];
                        d.left = 0;
                        d.top = 0;
                        k.layer = c;
                        a.appendChild(c)
                    }
                };
                k.addGridPreview = function(a, c, e, f, g, q) {
                    var h;
                    a += 1;
                    var m = d.desktop ? 1023 : d.tablet || d.webgl ? 511 : 255;
                    h = a < m ? a : m;
                    var l = Fa(2);
                    l.width = h;
                    l.height = h;
                    m = h / a;
                    e *= m;
                    c *= m;
                    m = l.getContext("2d");
                    m.fillStyle = f;
                    m.fillRect(0, 0, h, h);
                    m.fillStyle = g;
                    for (f = 0; f < a; f += e) m.fillRect(0, f, a, 1);
                    for (f = 0; f < a; f += c) m.fillRect(f, 0, 1, a);
                    if (q != g)
                        for (m.fillStyle = q, g = 0; g < a; g += e)
                            for (f = 0; f < a; f += c) m.fillRect(f, g, 1, 1);
                    setTimeout(function() {
                        b(k, null, null, l)
                    }, 10)
                };
                k.addCubestripPreview = function(a, c) {
                    k.previewloading = !0;
                    na.loadimage(a, function(a) {
                        b(k, a, c);
                        k.previewloading = !1;
                        Ya.previewdone()
                    }, function(c) {
                        na.reportLoadingError(a);
                        k.previewloading = !1
                    })
                };
                k.addCubestripPano = function(a) {
                    na.loadimage(a, function(a) {
                        b(k, a, null)
                    }, function() {
                        na.reportLoadingError(a)
                    })
                };
                k.addCubeLevel = function(a, c, d, b) {
                    c = new B(6, c, c, d, b, k.stereo);
                    c.planeurls[0] = a[0];
                    c.planeurls[1] = a[1];
                    c.planeurls[2] = a[2];
                    c.planeurls[3] = a[3];
                    c.planeurls[4] = a[4];
                    c.planeurls[5] = a[5];
                    a = k.levels;
                    a.push(c);
                    a.sort(C);
                    h(k)
                };
                k.addFlatLevel = function(a, c, d, b, e, f, g, q) {
                    k.type = 1;
                    f = new B(1, b, e, f, g, k.stereo);
                    f.planeurls[0] = a;
                    f.type = 1;
                    f.preview = q;
                    z(k, f, !0, c, d, b, e)
                };
                k.addRoundPano = function(a, d, b, g, q) {
                    var h = !1,
                        m = G(q.mjpegstream);
                    "true" == m || "auto" == m ? (h = !0, k.mjpegdata = null) : (m = Number(m), !isNaN(m) && 0 < m && (h = !0, k.mjpegdata = {
                        delay: 1E3 / m,
                        lastupdate: 0
                    }));
                    k.mapping = q.mapping ? G(q.mapping) : "equi";
                    a = G(a);
                    _[35] == a ? k.type = 4 : _[81] == a ? (k.type = 5, k.stereo = !1, k.typeinfos = {
                        fov: q.fov,
                        align: q.align,
                        crop: q.crop,
                        lenscp: q.lenscp
                    }) : k.type = 3;
                    k.rppano = new c;
                    if (g) {
                        if (k.updateFOV = e, f(k, a, null, g), q = void 0 !== g._panoid, g._panoid = k.id, k.imagefov = b, g.onvideoreadyCB = function() {
                                var a = k.rppano;
                                a.w = g.videowidth;
                                a.h = g.videoheight;
                                e(k, k.imagefov);
                                t.updateView();
                                Ya.havepanosize(k);
                                k.ready = !0;
                                k.rppano.loading = !1;
                                a.videoready = !0
                            }, !q && g.havevideosize) g.onvideoreadyCB()
                    } else d && na.loadimage(d, function(c) {
                        h && (k.mjpegimage = c);
                        f(k, a, c);
                        e(k, b);
                        t.updateView();
                        Ya.havepanosize(k);
                        k.rppano.loading = !1
                    }, function() {
                        na.reportLoadingError(d)
                    })
                };
                k.finalize = function() {
                    k.done = !0;
                    h(k)
                };
                k.setblend = function(a) {
                    pa ? k.alpha = a : k.layer && (k.layer.style.opacity = a)
                };
                k.removemainpano = function() {};
                k.stop = function() {
                    k.stopped = !0
                };
                k.destroy = function() {
                    var a = ma;
                    g(k);
                    if (a) {
                        var c = k.rppano;
                        if (c) {
                            c.videoplugin && (c.videoplugin._panoid = void 0);
                            var d = c.texture;
                            d && a.deleteTexture(d);
                            c.texture = null
                        }
                    }
                    for (var b in ua)(c = ua[b]) && c.pano === k && P(c);
                    a || (k.layer.parentNode.removeChild(k.layer), k.layer = null)
                };
                k.previewcheck = function() {
                    var a = k.rppano;
                    return a && a.videoplugin ? a.texvalid : k.previewloading || 0 == k.type && null == k.cspreview && 0 < k.levels.length && !k.viewloaded ? !1 : !0
                };
                k.doloading = function() {
                    return !1
                };
                k.isloading = function() {
                    if (k.previewloading) return !0;
                    var a = k.levels,
                        c = a.length;
                    if (0 < c) {
                        if (0 == k.type && (c = a[0].preview && 1 < c ? 1 : 0, 9 > a[c].mp && !a[c].complete) || !k.viewloaded) return !0
                    } else if (a = k.rppano) return a.videoplugin ? !a.texvalid : a.loading;
                    return !1
                }
            }

            function N(a, c, d, b, e, f, g, q) {
                this.id = a;
                this.pano = q;
                this.cubeside = d;
                this.stereo = g;
                this.levelindex = c;
                this.level = f;
                this.h = b;
                this.v = e;
                this.draworder = f ? nc[d] * f.htiles * f.vtiles + e * f.htiles + b : nc[d];
                this.url = null;
                this.sh = this.ch = this.sv = 0;
                this.mx = this.texture = this.canvas = this.image = this.elmt = null;
                this.lastusage_on_frame = this.mem = this.retries = this.state = 0;
                this.overlap = this.transform = null;
                f && (a = 2 * ((b + .5) / f.htiles - .5), e = 2 * ((e + .5) / f.vtiles - .5), a += .5 / f.htiles, e += .5 / f.vtiles, 1 == q.type && (a *= Math.tan(.5 * f.hfov * W), e *= Math.tan(.5 * f.vfov * W)), 0 == d ? (d = 1, f = e, q = -a) : 1 == d ? (d = -a, f = e, q = -1) : 2 == d ? (d = -1, f = e, q = a) : 3 == d ? (d = a, f = e, q = 1) : 4 == d ? (d = -a, q = -e, f = -1) : (d = -a, q = e, f = 1), a = -Math.atan2(d, q), e = -Math.atan2(-f, Math.sqrt(d * d + q * q)), this.sv = Math.sin(e), e = Math.cos(e), this.ch = Math.cos(a) * e, this.sh = Math.sin(a) * e)
            }

            function S(a, c, d) {
                var b = uc[a.cubeside],
                    e = a.level,
                    f = e.w / 2,
                    g = e.tilesize,
                    q = 1E3 / f,
                    h = 1,
                    k = e.vscale;
                1 == e.type && (h = Math.tan(.5 * e.hfov * W));
                var m = (-f + a.h * g + c / 2 + 2 * e.hoffset * f / 90) * q * h,
                    e = (-f + a.v * g + d / 2 + 2 * e.voffset * f / e.hfov) * q * h * k,
                    f = f * q;
                Nb(xd, c / 1E3 * h, 0, 0, 0, d / 1E3 * h * k, 0, 0, 0, 1);
                Ue(lc, m, e, f);
                mc(xd, lc);
                c = lc;
                h = b[1];
                k = -b[0] * W;
                b = Math.cos(k);
                d = Math.sin(k);
                k = -h * W;
                h = Math.cos(k);
                k = Math.sin(k);
                Nb(c, h, 0, -k, d * k, b, d * h, b * k, -d, b * h);
                mc(xd, lc);
                b = Ka();
                Nb(b, q, 0, 0, 0, q, 0, 0, 0, q);
                mc(b, xd);
                a.mx = b
            }

            function O(a, c, d, b, e, f) {
                var g = [],
                    q = a.length,
                    h, k = !1,
                    m = 0,
                    l;
                for (h = 0; h < q; h++) {
                    var D = a.charAt(h),
                        p = D.charCodeAt(0);
                    if (37 == p) k = !0, m = 0;
                    else if (48 == p) k ? m++ : g.push(D);
                    else if (k) {
                        k = !1;
                        l = null;
                        65 <= p && 84 >= p && (p += 32);
                        if (108 == p) l = d;
                        else if (115 == p) l = c;
                        else if (116 == p) l = f;
                        else if (117 == p || 120 == p || 99 == p || 104 == p) l = b;
                        else if (118 == p || 121 == p || 114 == p) l = e;
                        if (null != l) {
                            for (; l.length <= m;) l = "0" + l;
                            g.push(l)
                        } else g.push("%" + D)
                    } else k = !1, g.push(D)
                }
                return g.join("")
            }

            function R(a) {
                return 0 == (a & a - 1)
            }

            function K(a) {
                a--;
                a |= a >> 1;
                a |= a >> 2;
                a |= a >> 4;
                a |= a >> 8;
                a |= a >> 16;
                a++;
                return a
            }

            function Ba(a, c, d, b, e, f) {
                if (0 < f) setTimeout(function() {
                    try {
                        Ba(null, c, d, b, e, 0)
                    } catch (a) {}
                }, f);
                else {
                    null == a && (a = c.getContext("2d"));
                    f = e[0];
                    var g = e[1],
                        q = e[2],
                        h = e[3];
                    0 < f && a.drawImage(d, 0, 0, 1, b[1], 0, g, f, b[3]);
                    0 < g && a.drawImage(d, 0, 0, b[0], 1, f, 0, b[2], g);
                    0 < q && a.drawImage(d, b[0] - 1, 0, 1, b[1], f + b[2], g, q, b[3]);
                    0 < h && a.drawImage(d, 0, b[1] - 1, b[0], 1, f, g + b[3], b[2], h)
                }
            }

            function ea(a) {
                function c(b) {
                    b ? a.image = b : b = a.image;
                    if (0 < oa) Na = !0, setTimeout(c, 0);
                    else if (wd--, null != b && null != b.naturalWidth) {
                        var e = b.naturalWidth,
                            f = b.naturalHeight,
                            g = e * f * 4,
                            q = !1;
                        0 == g && (q = !0);
                        if (q) a.state = 0, Na = !0;
                        else {
                            var k = a.level;
                            if (k) {
                                k.needsize && (k.w = e, k.h = f, k.tilesize = e > f ? e : f, k.needsize = !1, 1 == k.type ? z(a.pano, k, !1, J.hfov, J.vfov, e, f) : h(a.pano), k.preview && Ya.previewdone());
                                k.loadedtiles[a.stereo - 1]++;
                                k.complete = k.stereo && ja.stereo ? k.loadedtiles[0] == k.totaltiles && k.loadedtiles[1] == k.totaltiles : k.loadedtiles[0] == k.totaltiles;
                                q = 1 == k.htiles * k.vtiles;
                                a.state = 2;
                                a.lastusage_on_frame = ga;
                                if (pa) {
                                    S(a, e, f);
                                    var m = ma,
                                        l = d.opera ? "" : G(ja.mipmapping),
                                        D = "force" == l;
                                    if (l = D || "auto" == l) {
                                        if (!R(e) || !R(f)) {
                                            l = 1024;
                                            q ? (l = 0, D && (l = sa)) : D || R(k.tilesize) || (l = 0);
                                            var q = K(e),
                                                p = K(f);
                                            q < l && p < l && (k = Fa(2), k.width = q, k.height = p, l = k.getContext("2d"), l.drawImage(b, 0, 0, q, p), b = k, e = q, f = p)
                                        }
                                        l = R(e) && R(f)
                                    }
                                    l && 0 == D && !d.realDesktop && a.level && 2500 < a.level.h && (l = !1);
                                    e = m.createTexture();
                                    m.activeTexture(Zc);
                                    m.bindTexture(ha, e);
                                    m.texParameteri(ha, m.TEXTURE_WRAP_T, m.CLAMP_TO_EDGE);
                                    m.texParameteri(ha, m.TEXTURE_WRAP_S, m.CLAMP_TO_EDGE);
                                    m.texParameteri(ha, m.TEXTURE_MAG_FILTER, Vb);
                                    m.texParameteri(ha, m.TEXTURE_MIN_FILTER, l ? m.LINEAR_MIPMAP_LINEAR : Vb);
                                    m.texImage2D(ha, 0, Wb, Wb, Yc, b);
                                    l && m.generateMipmap(ha);
                                    m.bindTexture(ha, null);
                                    a.texture = e;
                                    a.image = null
                                } else {
                                    m = [e, f, e, f];
                                    D = !1;
                                    e == f && 1 == k.htiles && (l = ja.hardwarelimit, e + 2 * nb > l && (k.w = k.h = m[2] = m[3] = e = f = l - 2 * nb, D = !0));
                                    var n = [0, 0, 0, 0],
                                        r = nb,
                                        v = a.h,
                                        t = a.v,
                                        k = a.cubeside,
                                        u = a.level,
                                        w = u.tilesize,
                                        l = u.vscale,
                                        x = -u.w / 2,
                                        M = p = 1;
                                    1 == u.type && (p = Math.tan(.5 * u.hfov * W), k = 6, 2 < r && (r = 2), d.ie || d.desktop && d.safari) && (M = 252);
                                    1E3 < -x && 4 < r && (r = 4);
                                    var L = x,
                                        qc = L;
                                    n[2] = r;
                                    n[3] = r;
                                    0 == k || 2 == k ? 0 == v && (n[0] = r) : 1 != k && 3 != k || v != u.vtiles - 1 || (n[2] = 0);
                                    0 <= k && 3 >= k ? 0 == t && (n[1] = r) : (v == u.htiles - 1 && (n[2] = 0), t == u.vtiles - 1 && (n[3] = 0));
                                    a.overlap = n;
                                    L -= n[0];
                                    qc -= n[1];
                                    n = (L + v * w) * p;
                                    t = (qc + t * w - 2 * u.voffset * x / u.hfov) * p * l;
                                    u = p;
                                    w = p * l;
                                    1 < M && (n *= M, t *= M, x *= M, u *= M, w *= M);
                                    M = "" + n;
                                    n = 0 < M.indexOf("e-") ? n = n.toFixed(18) : M;
                                    M = "" + t;
                                    t = 0 < M.indexOf("e-") ? t = t.toFixed(18) : M;
                                    M = "" + x;
                                    x = 0 < M.indexOf("e-") ? x = x.toFixed(18) : M;
                                    a.transform = Pb[k] + _[72] + n + "px," + t + "px," + x + "px) ";
                                    if (1 != p || 1 != l) a.transform += _[494] + u + "," + w + ",1) ";
                                    (p = a.overlap) ? (k = Fa(2), k.width = e + p[0] + p[2], k.height = f + p[1] + p[3], k.style.overflow = _[7], g = k.width * k.height * 4, x = M = 0, l = k.getContext("2d"), p && (M = p[0], x = p[1], Ba(l, k, b, m, p, q ? 0 : 250)), D ? l.drawImage(b, 0, 0, m[0], m[1], M, x, e, f) : l.drawImage(b, M, x), aa && l.getImageData(m[0] >> 1, m[1] >> 1, 1, 1), a.canvas = k, a.elmt = k, a.image = null) : a.elmt = b;
                                    a.elmt.style.position = _[0];
                                    a.elmt.style[Tc] = "0 0"
                                }
                                a.mem = g;
                                Cb += g;
                                if (Cb > db) {
                                    Na = !0;
                                    oa++;
                                    for (var y, g = null, e = 0;;) {
                                        for (y in ua) e++, b = ua[y], 0 < b.levelindex && 2 <= b.state && b.lastusage_on_frame < ga - 1 && (!g || b.lastusage_on_frame < g.lastusage_on_frame) && (g = b);
                                        if (g) {
                                            if (P(g), g = null, Cb < db - 2097152) break
                                        } else break
                                    }
                                    if (e > Math.max(2 * wb.length, 100)) {
                                        g = {};
                                        for (y in ua)
                                            if (b = ua[y])(0 < b.levelindex || 8 < b.level.mp) && 0 == b.state && b.lastusage_on_frame < ga - 2 ? (b.pano = null, b.level = null) : g[y] = b;
                                        ua = g
                                    }
                                    Cb > db && (Vc = !0)
                                }
                                Na = !0;
                                oa++
                            }
                        }
                    }
                }

                function b(c, d) {
                    wd--;
                    d ? a.state = 4 : a.retries < l.network.retrycount ? (a.retries++, a.state = 0, Na = !0) : (a.state = 4, na.reportLoadingError(a.url))
                }
                null != a.pano && (null == a.url && (a.url = O(a.level.planeurls[a.level.invplanemapping[a.cubeside]], a.pano.cubelabels[a.cubeside], a.levelindex, String(a.h + a.level.i), String(a.v + a.level.i), a.pano.stereolabels[a.stereo - 1])), a.state = 1, na.loadimage(a.url, c, b, !0), wd++)
            }

            function P(a) {
                var c = ma,
                    d = a.texture;
                c && d && c.deleteTexture(d);
                (c = a.elmt) && (d = c.parentNode) && d.removeChild(c);
                d = wb.length;
                for (c = 0; c < d; c++)
                    if (wb[c] == a) {
                        wb.splice(c, 1);
                        break
                    }
                c = a.id;
                ua[c] = null;
                delete ua[c];
                if (c = a.level) c.addedtiles[a.stereo - 1]--, c.completelyadded = c.stereo && ja.stereo ? c.addedtiles[0] == c.totaltiles && c.addedtiles[1] == c.totaltiles : c.addedtiles[0] == c.totaltiles;
                Cb -= a.mem;
                a.state = 0;
                a.image = null;
                a.canvas = null;
                a.texture = null;
                a.elmt = null;
                a.pano = null;
                a.level = null
            }

            function U(a) {
                if (pa) {
                    var c = ma,
                        d = Ga,
                        b = a.texture;
                    d && b && (c.uniformMatrix4fv(zb, !1, a.mx), c.bindBuffer(mb, d.vx), c.vertexAttribPointer(ob, 3, fc, !1, 0, 0), c.bindBuffer(mb, d.tx), c.vertexAttribPointer(pb, 2, fc, !1, 0, 0), c.bindBuffer(Rb, d.ix), c.activeTexture(Zc), c.bindTexture(ha, b), c.drawElements(bc, d.tcnt, Sb, 0), Ia++, fe && kd(d, .6))
                } else a.elmt.style[qb] = Wc + a.transform
            }

            function Q(a, c) {
                var d = new vc;
                d.x = a[0] * c[0] + a[1] * c[1] + a[2] * c[2];
                d.y = a[0] * c[3] + a[1] * c[4] + a[2] * c[5];
                d.z = -2 * (a[0] * c[6] + a[1] * c[7] + a[2] * c[8]);
                return d
            }

            function Y(a, c) {
                var b = a.panoview,
                    e = a.id,
                    f, g, q, k, h, m, w, x, y, A, B, z, K, C, E, F, G, I, P, H, R, Jb, O = !1,
                    Da, J, T, nb, Q, S, Ba, V, Z, aa, X, ca, cc, na, oa = !1,
                    sa = !1,
                    Uc = !0,
                    ta = Ja();
                if (pa) {
                    var xa = ma,
                        za = Ta,
                        Wa = Ea,
                        Ca = a.panoview,
                        db = d.gl.width * La + .5 | 0,
                        Oa = d.gl.height * La + .5 | 0;
                    if (0 < c) {
                        var Vc = db,
                            db = db >> 1,
                            za = za >> 1;
                        xa.viewport(2 == c ? db : 0, 0, 1 == c ? db : Vc - db, Oa)
                    } else xa.viewport(0, 0, db, Oa);
                    var Cb = 1 / (.5 * za),
                        Va = -1 / (.5 * Wa),
                        Ha = Ca.zf,
                        Ya = 0 < c ? Number(ja.stereooverlap) * za * .5 * (1 == c ? 1 : -1) : 0,
                        bb = Ca.yf,
                        ib = Math.min(Ha / 200, 1),
                        jb = 0 < Ha ? Ca.ch : 0;
                    ve(nd, Cb, 0, 0, 0, 0, Va, 0, 0, 0, 0, 65535 / 65536, 1, 0, 0, 65535 / 65536 - 1, 0);
                    var fb = Ca.z;
                    ve(le, fb, 0, 0, 0, 0, fb, 0, 0, Ya, bb, 1, 0, Ha * Ya, Ha * bb, Ha, 1);
                    mc(le, nd);
                    if (0 < c) {
                        var hb = l.webVR;
                        hb && hb.enabled && hb.prjmatrix(c, le)
                    }
                    5 == a.type && Ra ? (r(Ra), ob = Ra.vx, pb = Ra.tx, xb = Ra.sh, Db = Ra.ch, ub = Ra.aa, Ab = Ra.mx, zb = Ra.ot, Bb = Ra.tm) : (r(ya), ob = ya.vx, pb = ya.tx, xb = ya.sh, Db = ya.ch, ub = ya.aa, Ab = ya.mx, zb = ya.ot, Bb = ya.tm);
                    xa.uniform1f(ub, 1);
                    xa.uniform1f(xb, ib);
                    xa.uniform1f(Db, jb);
                    Kd(hd, Rc);
                    mc(hd, le);
                    xa.uniformMatrix4fv(Ab, !1, hd);
                    xa.uniformMatrix3fv(Bb, !1, Tb);
                    var cb = ab.obj0,
                        gb = ab.obj;
                    null == cb && (cb = n(500, 1), gb = n(500, 19), u(cb), u(gb), ab.obj0 = cb, ab.obj = gb);
                    Ga = 10 < Ha ? gb : cb
                }
                var Xa = c;
                0 == Xa && (Xa = 1);
                a.stereo && (e += "t" + Xa);
                f = +b.h + Number(a.image.viewoffset);
                g = -b.v;
                q = b.z;
                k = Ma - f * W;
                h = -g * W;
                m = Math.sin(h);
                w = Math.cos(h);
                x = Math.cos(k) * w;
                y = Math.sin(k) * w;
                if (ac) {
                    var lb = [x, m, y];
                    xe(xd, ac);
                    $d(xd, lb);
                    x = lb[0];
                    m = lb[1];
                    y = lb[2]
                }
                A = a.levels;
                z = A.length;
                K = a.currentlevel;
                a.viewloaded = !1;
                if (5E3 > q) {
                    var vb = 1 / Math.max(100, q),
                        qb = Math.abs(Math.cos(f * W)),
                        jf = Math.cos(.25 * Ma);
                    if (1E-14 > qb || qb > jf - 1E-14 && qb < jf + 1E-14 || qb > 1 - 1E-14 || 1E-14 > w || w > 1 - 1E-14) f += (.5 + .5 * Math.random()) * vb * (.5 > Math.random() ? -1 : 1), g += (.5 + .5 * Math.random()) * vb * (.5 > Math.random() ? -1 : 1);
                    d.firefox && (m < -(1 - 1E-14) && (g += .5), m > +(1 - 1E-14) && (g -= .5))
                }
                Wc = _[72] + Ta / 2 + "px," + Ea / 2 + _[221] + b.yf.toFixed(16) + _[260] + q.toFixed(16) + _[121] + (-b.r).toFixed(16) + _[108] + q.toFixed(16) + _[357] + g.toFixed(16) + _[327] + f.toFixed(16) + "deg) " + Cc;
                if (0 < z) {
                    var rb = 1 == la(ja.loadwhilemoving) ? !0 : 0 == a.hasmoved || da,
                        tb = K;
                    7 <= wd && (rb = !1);
                    if (a.stopped) rb = !1;
                    else {
                        9 > A[0].mp && (0 == A[0].complete && (tb = 0, O = !0), 0 == rb && 0 == A[0].completelyadded && (tb = 0, rb = O = !0));
                        var Ib = l.lockmultireslevel | 0;
                        l.downloadlockedlevel && 0 <= Ib && Ib < z && (O = !0, 0 == A[Ib].complete && (rb = !0))
                    }
                    dc && 5 < tb && (tb -= 3, dc = !1, Na = !0);
                    if (rb) {
                        be = ta;
                        da = !1;
                        ca = null;
                        na = 1E6;
                        for (C = tb; 0 <= C; C--) {
                            B = A[C];
                            G = B.w;
                            I = B.h;
                            P = B.tilesize;
                            H = B.htiles;
                            R = B.vtiles;
                            var oa = !0,
                                Vb = B.planeurls.length;
                            for (F = 0; F < Vb; F++)
                                if (E = B.planemapping[F], Jb = O ? [0, 0, 1, 1] : b.vr[E]) {
                                    aa = "p" + e + "l" + C + "s" + nc[E] + "h";
                                    var Nb = 1,
                                        Ob = 1;
                                    1 == a.type && (Nb = 1 / Math.tan(.5 * B.hfov * W), Ob = 1 / Math.tan(.5 * B.vfov * W));
                                    Da = Math.floor((Nb * (Jb[0] - .5) + .5) * G / P);
                                    J = Math.ceil((Nb * (Jb[2] - .5) + .5) * G / P);
                                    0 > Da && (Da = 0);
                                    J > H && (J = H);
                                    T = Math.floor((Ob * (Jb[1] - .5) + .5) * I / P);
                                    nb = Math.ceil((Ob * (Jb[3] - .5) + .5) * I / P);
                                    0 > T && (T = 0);
                                    nb > R && (nb = R);
                                    for (V = T; V < nb; V++)
                                        for (Ba = Da; Ba < J; Ba++) {
                                            Z = aa + Ba + "v" + V;
                                            X = ua[Z];
                                            X || (X = new N(Z, C, E, Ba, V, B, Xa, a), ua[Z] = X, oa = !1);
                                            if (0 == X.state) cc = Math.acos(x * X.ch + y * X.sh + m * X.sv), cc < na && (ca = X, na = cc), oa = !1;
                                            else if (1 == X.state) oa = !1;
                                            else if (2 == X.state) {
                                                0 == pa && U(X);
                                                var ld = X,
                                                    Eb = null,
                                                    Mb = null;
                                                0 == pa && (Eb = ld.elmt, Mb = a.layer);
                                                if (0 != pa || Eb.parentNode != Mb) {
                                                    for (var lc = wb.length, Pb = -1, Qb = void 0, Kb = void 0, wc = ld.pano, xc = ld.levelindex, yc = ld.draworder, oc = 0, tc = 0, Kb = 0; Kb < lc; Kb++)
                                                        if (Qb = wb[Kb], Qb.pano === wc && (oc = Qb.levelindex, tc = Qb.draworder, oc >= xc && tc >= yc)) {
                                                            Pb = Kb;
                                                            break
                                                        }
                                                    0 > Pb ? (Eb && Mb.appendChild(Eb), wb.push(ld)) : (Eb && Mb.insertBefore(Eb, wb[Pb].elmt), wb.splice(Pb, 0, ld));
                                                    var $c = ld.level;
                                                    $c.addedtiles[ld.stereo - 1]++;
                                                    $c.completelyadded = $c.stereo && ja.stereo ? $c.addedtiles[0] == $c.totaltiles && $c.addedtiles[1] == $c.totaltiles : $c.addedtiles[0] == $c.totaltiles
                                                }
                                                X.state = 3
                                            }
                                            X.lastusage_on_frame = ga
                                        }
                                }
                            0 == dc && 0 == oa && C == tb && 1E3 < ta - fa && (dc = !0, fa = ta);
                            if (oa) {
                                a.viewloaded = !0;
                                break
                            }
                        }
                        ca && ea(ca)
                    }
                }
                1 != a.viewloaded ? (sa = !0, ia = ta) : 0 < ia && 200 > ta - ia && (sa = !0);
                pa && 10 < b.zf && (sa = !0);
                if (sa) {
                    var Ub = a.cspreview;
                    if (Ub) {
                        var pc = Ub.layer;
                        for (Q = 0; 6 > Q; Q++) {
                            var ec = Ub.tiles[Q];
                            U(ec);
                            0 == pa && 2 == ec.state && (pc.appendChild(ec.elmt), ec.state = 3)
                        }
                        0 != pa || a.previewadded || (0 == a.layer.childNodes.length ? a.layer.appendChild(pc) : a.layer.insertBefore(pc, a.layer.childNodes[0]), a.previewadded = !0)
                    }
                } else 0 == pa && a.previewadded && ((Ub = a.cspreview) && a.layer.removeChild(Ub.layer), a.previewadded = !1);
                a.previewloading && (Uc = !1);
                if (Uc)
                    for (S = wb.length, Q = 0; Q < S; Q++)
                        if (X = wb[Q], !(X.pano !== a || a.stereo && X.stereo != Xa))
                            if (X.levelindex > K) {
                                0 == pa && X.pano.layer.removeChild(X.elmt);
                                X.state = 2;
                                wb.splice(Q, 1);
                                Q--;
                                S--;
                                var ad = X.level;
                                ad.addedtiles[X.stereo - 1]--;
                                ad.completelyadded = ad.stereo && ja.stereo ? ad.addedtiles[0] == ad.totaltiles && ad.addedtiles[1] == ad.totaltiles : ad.addedtiles[0] == ad.totaltiles
                            } else U(X);
                if (0 == z && pa) {
                    var Hb = a.rppano;
                    if (2 < a.type && Hb) {
                        var Kc = Hb.texture,
                            kc = Hb.imgfov,
                            Dc = Hb.videoplugin,
                            bd = null,
                            uc = !1;
                        Dc && (Dc._panoid != a.id ? Dc = Hb.videoplugin = null : Na = t.haschanged = !0);
                        if (Kc && kc) {
                            var Qc = kc[0],
                                Sc = kc[1],
                                kf = kc[2];
                            uc = Dc ? (bd = Dc.videoDOM) ? Hb.videoready : Hb.texvalid : !0;
                            if (uc) {
                                var cd = ab.objS,
                                    zc = a.type + "/" + Qc + "x" + Sc + "/" + kf + "/" + a.mapping;
                                5 == a.type && (zc += "/" + a.hres + "x" + a.vres);
                                if (zc != ab.objS_i) {
                                    var ie = Qc,
                                        od = Sc,
                                        Ec = kf,
                                        dd = cd,
                                        gd = a.type,
                                        gc = 15453,
                                        Fc = 10302,
                                        rc = 3E4;
                                    dd && dd.tcnt != rc && (dd = null);
                                    var yd = dd ? dd.vxd : new Float32Array(gc),
                                        me = dd ? dd.txd : new Float32Array(Fc),
                                        zd = dd ? dd.ixd : new Uint16Array(rc),
                                        Xb, Yb, Ad, pd, Bd, Nc, Cd, hc, Dd, Oc, Pc, Tc, ne, Be, ie = ie * W,
                                        od = od * W,
                                        Ec = Ec * W;
                                    4 == gd ? (od = 1E3 * Math.tan(.5 * od), Ec = 500 * Math.sin(1 * Ec)) : Ec = -Ec + .5 * Ma;
                                    var gc = Fc = 0,
                                        Wd = _[147] === a.mapping;
                                    if (5 == gd) {
                                        var Ce = Ka(),
                                            Fb = new vc,
                                            De = a.typeinfos,
                                            oe = Number(De.fov),
                                            sd = ("" + De.align).split("|"),
                                            td = Number(sd[0]),
                                            ud = Number(sd[1]),
                                            vd = Number(sd[2]),
                                            kb = ("" + De.lenscp).split("|");
                                        isNaN(oe) && (oe = 180);
                                        isNaN(ud) && (ud = 0);
                                        isNaN(td) && (td = 0);
                                        isNaN(vd) && (vd = 0);
                                        isNaN(kb[0]) && (kb[0] = 0);
                                        isNaN(kb[1]) && (kb[1] = 0);
                                        isNaN(kb[2]) && (kb[2] = 0);
                                        isNaN(kb[3]) && (kb[3] = 0);
                                        isNaN(kb[4]) && (kb[4] = 0);
                                        kb[5] = 1 - kb[0] - kb[1] - kb[2];
                                        kb[3] /= a.hres;
                                        kb[4] /= a.vres;
                                        var ed = 1,
                                            Ee = 0,
                                            Fe = 0,
                                            Jd = a.vres / a.hres,
                                            Ed = ("" + De.crop).split("|");
                                        if (1 == Ed.length) ed = Number(Ed[0]), isNaN(ed) && (ed = 1);
                                        else if (4 == Ed.length) {
                                            var Ld = Number(Ed[0]),
                                                Nd = Number(Ed[1]),
                                                ce = Number(Ed[2]),
                                                de = Number(Ed[3]),
                                                ed = (Nd - Ld) / 2;
                                            if (isNaN(ed)) ed = 1;
                                            else var ee = (ce + de) / 2,
                                                Ee = a.hres / 2 - (Ld + Nd) / 2,
                                                Fe = a.vres / 2 - ee,
                                                ed = ed / (a.vres / 2),
                                                Ee = Ee / a.vres,
                                                Fe = Fe / a.vres
                                        }
                                        var Od = Ka(),
                                            Pd = Ka(),
                                            Qd = Ka();
                                        Ve(Od, 1, -td);
                                        Ve(Pd, 0, vd);
                                        Ve(Qd, 2, -ud);
                                        mc(Ce, Pd);
                                        mc(Ce, Qd);
                                        mc(Ce, Od);
                                        ie = 360 * W;
                                        od = .5 * oe * W;
                                        Ec = (180 - .25 * oe) * W;
                                        for (Yb = 0; 50 >= Yb; Yb++)
                                            for (hc = (Yb / 50 - .5) * od + Ec, Dd = Math.sin(hc), Oc = Math.cos(hc), Xb = 0; 100 >= Xb; Xb++) {
                                                hc = (Xb / 100 - .5) * ie + Ma;
                                                Pc = Math.sin(hc);
                                                Tc = Math.cos(hc);
                                                pd = -500 * Tc * Dd;
                                                Ad = 500 * Oc;
                                                Bd = 500 * Pc * Dd;
                                                var Hf = Ad,
                                                    je = pd,
                                                    ue = Bd;
                                                Fb.x = Ad;
                                                Fb.y = pd;
                                                Fb.z = Bd;
                                                Md(Ce, Fb);
                                                Ad = Fb.x;
                                                pd = Fb.y;
                                                Bd = Fb.z;
                                                Fb.x = ue;
                                                Fb.y = -Hf;
                                                Fb.z = je;
                                                var Xd = Math.atan2(Fb.z, Fb.x),
                                                    Lb = Math.atan2(Math.sqrt(Fb.x * Fb.x + Fb.z * Fb.z), Fb.y),
                                                    Lb = 2 / (oe * Math.PI / 180) * Lb,
                                                    Lb = ed * (kb[0] * Lb * Lb * Lb * Lb + kb[1] * Lb * Lb * Lb + kb[2] * Lb * Lb + kb[5] * Lb);
                                                Nc = .5 - Ee * Jd + .5 * Jd * Lb * Math.cos(Xd) + kb[3];
                                                Cd = .5 - Fe + .5 * Lb * Math.sin(Xd) + kb[4];
                                                yd[gc] = Ad;
                                                yd[gc + 1] = pd;
                                                yd[gc + 2] = Bd;
                                                gc += 3;
                                                me[Fc] = Nc;
                                                me[Fc + 1] = Cd;
                                                Fc += 2
                                            }
                                    } else
                                        for (Yb = 0; 50 >= Yb; Yb++)
                                            for (Cd = 1 - Yb / 50, 4 == gd ? (Dd = 1, pd = od * (Cd - .5) + Ec) : (hc = (Yb / 50 - .5) * od + Ec, Dd = Math.sin(hc), Oc = Math.cos(hc), pd = 500 * Oc, Wd && (Cd = .5 * Math.sin((Cd - .5) * Ma) + .5)), Xb = 0; 100 >= Xb; Xb++) hc = (Xb / 100 - .5) * ie + Ma, Pc = Math.sin(hc), Tc = Math.cos(hc), Ad = 500 * Tc * Dd, Bd = 500 * Pc * Dd, Nc = 1 - Xb / 100, yd[gc] = Ad, yd[gc + 1] = pd, yd[gc + 2] = Bd, gc += 3, me[Fc] = Nc, me[Fc + 1] = Cd, Fc += 2;
                                    for (Yb = rc = 0; 50 > Yb; Yb++)
                                        for (Xb = 0; 100 > Xb; Xb++) ne = 101 * Yb + Xb, Be = ne + 101, zd[rc] = ne, zd[rc + 1] = ne + 1, zd[rc + 2] = Be, zd[rc + 3] = Be, zd[rc + 4] = ne + 1, zd[rc + 5] = Be + 1, rc += 6;
                                    var cd = new v(3E4, yd, me, zd),
                                        Fd = ab.objS,
                                        sc = cd;
                                    if (Fd && Fd.tcnt == sc.tcnt) {
                                        sc.vx = Fd.vx;
                                        sc.tx = Fd.tx;
                                        sc.ix = Fd.ix;
                                        var Sd = ma;
                                        Sd.bindBuffer(mb, sc.vx);
                                        Sd.bufferData(mb, sc.vxd, Xc);
                                        Sd.bindBuffer(mb, sc.tx);
                                        Sd.bufferData(mb, sc.txd, Xc);
                                        Sd.bindBuffer(Rb, sc.ix);
                                        Sd.bufferData(Rb, sc.ixd, Xc)
                                    } else Fd && p(Fd), u(sc);
                                    ab.objS = cd;
                                    ab.objS_i = zc
                                }
                                var Gc = ma;
                                Gc.uniformMatrix4fv(zb, !1, Hb.mx);
                                a.stereo && Gc.uniformMatrix3fv(Bb, !1, 0 == a.stereoformat ? 1 >= Xa ? Lc : jd : 1 >= Xa ? Ac : Bc);
                                Gc.bindBuffer(mb, cd.vx);
                                Gc.vertexAttribPointer(ob, 3, fc, !1, 0, 0);
                                Gc.bindBuffer(mb, cd.tx);
                                Gc.vertexAttribPointer(pb, 2, fc, !1, 0, 0);
                                Gc.bindBuffer(Rb, cd.ix);
                                var Gd = null;
                                if (bd && 0 == ka) {
                                    ka++;
                                    var Ze = Dc.posterDOM,
                                        Yd = Ze && Ze.complete,
                                        Zd = (4 <= bd.readyState || !0 === Dc.iPhoneMode) && 0 < bd.videoWidth;
                                    Yd && d.chromemobile && 0 == bd.currentTime && (Zd = !1);
                                    if (Zd) {
                                        var ae = bd.currentTime;
                                        if (Dc.lastCurrentTime != ae && (Dc.lastCurrentTime = 4 > bd.readyState ? -1 : ae, Gd = bd, d.ie && !d.edge && d.desktop)) {
                                            null == yb && (yb = Fa(2));
                                            if (yb.width != Hb.w || yb.height != Hb.h) yb.width = Hb.w, yb.height = Hb.h;
                                            yb.getContext("2d").drawImage(bd, 0, 0, Hb.w, Hb.h);
                                            Gd = yb
                                        }
                                    } else Yd && (Gd = Ze)
                                } else a.mjpegimage && ($a = !0, null == a.mjpegdata ? 0 == a.hasmoved && (Gd = a.mjpegimage) : ta - a.mjpegdata.lastupdate > a.mjpegdata.delay && (a.mjpegdata.lastupdate = ta, Gd = a.mjpegimage));
                                Gc.activeTexture(Zc);
                                Gc.bindTexture(ha, Kc);
                                if (Gd) {
                                    var ye = Gd,
                                        $e = Dc,
                                        he = !0;
                                    d.ios && 10 <= d.iosversion && ma.pixelStorei(ma.UNPACK_PREMULTIPLY_ALPHA_WEBGL, !0);
                                    try {
                                        ma.texImage2D(ha, 0, Wb, Wb, Yc, ye)
                                    } catch (pe) {
                                        he = !1, pe = "" + pe, $e && $e.error != pe && ($e.error = pe, va(3, pe))
                                    }
                                    he && (Hb.texvalid = !0)
                                }
                                Hb.texvalid && (Gc.drawElements(bc, cd.tcnt, Sb, 0), Ia++, fe && kd(cd, .25))
                            }
                        }
                    }
                }
                if (pa) {
                    var Sa = ma,
                        qe = Ga,
                        Ge = l.webVR,
                        af = Ge && Ge.enabled,
                        bf = af ? Ge.getcursor() : null,
                        ic = a.panoview,
                        ze = ic.h + Number(a.image.viewoffset),
                        Ae = ic.v,
                        Qe = ic.r,
                        Re = ic.z / (af ? 2E3 : Ea) * 2,
                        cf = ic.zf,
                        Se = Math.min(ic.zf / 200, 1),
                        Te = 1 + cf / 1E3,
                        df = xd;
                    we(df, 0, -ic.h + 90 - Number(a.image.viewoffset), ic.v, !1);
                    var lf = Ua.getArray(),
                        We = lf.length,
                        He, Aa, Pa, Td, re = 2 > c,
                        ef = null;
                    if (0 < c) {
                        var Xe = af ? Ge.eyetranslt(c) : 0;
                        Ue(se, -Xe, 0, 0);
                        Kd(Mc, qd);
                        mc(Mc, se);
                        Ue(se, -t.tz, t.ty, -t.tx);
                        hf(Mc, se);
                        ef = Mc
                    }
                    Sa.uniformMatrix4fv(Ab, !1, le);
                    var Hd = !1;
                    Sa.bindBuffer(mb, qe.vx);
                    Sa.vertexAttribPointer(ob, 3, fc, !1, 0, 0);
                    Sa.bindBuffer(mb, qe.tx);
                    Sa.vertexAttribPointer(pb, 2, fc, !1, 0, 0);
                    Sa.bindBuffer(Rb, qe.ix);
                    for (He = 0; He < We; He++)
                        if ((Aa = lf[He]) && Aa._ready && (re && 0 != Aa.haschanged_flags && Aa.processUpdates(), Aa.loaded && (Aa.keep || !a.suspended) && (Pa = Aa.DATA, Pa.visible)))
                            if (Pa.webGL) {
                                var Hc = Aa.GL;
                                Hc || (Hc = Aa.GL = new ra);
                                var mf = !0,
                                    Ud = Pa.depth,
                                    Gb = 1;
                                isNaN(Ud) && (Ud = 1E3, mf = !1);
                                Aa === bf && (Ud = bf.hit_depth, Gb *= Ud / 1E3);
                                var Zb = Aa.getparsed(),
                                    Id = Zb.flags;
                                if (re) {
                                    var nf = Pa.scale,
                                        Gb = Gb * nf;
                                    Pa.scale = 1;
                                    Aa.renderer_flags & of && Aa.API_calcsize();
                                    Pa.scale = nf;
                                    Hc.state = 1;
                                    Aa.renderer_flags = 0;
                                    var fd = Pa.flying,
                                        Ie = (1 - fd) * Pa.ath,
                                        Je = (1 - fd) * Pa.atv,
                                        Ke = (1 - fd) * Pa.rotate;
                                    0 < fd && (Ie += fd * id(ze, Pa.ath), Je += fd * id(Ae, Pa.atv), Ke += fd * id(Qe, Pa.rotate));
                                    var Le = 0 == Pa.distorted && 0 == Pa.zoom;
                                    1 != Aa.scaleflying || Le || (Gb = Gb * (1 - fd) + Gb / Re * fd * Te);
                                    var Ic = Aa.getrenderer(),
                                        Me = 2 * Ic.w / 1E3,
                                        Ne = 2 * Ic.h / 1E3;
                                    Le && (Me *= ba, Ne *= ba);
                                    Za(Pa.distorted ? null : df, Id, sb, Me * Gb, Ne * Gb, Pa.mx_RR, 2 * (Id & 64 ? Zb.ox * Ic.w : Zb.ox), 2 * (Id & 128 ? Zb.oy * Ic.h : Zb.oy), Ud, -Ke, -Ie + 90, Je, -Aa.tz, Aa.ty, Aa.tx, -(Zb.ex - .5) * Ic.w * 2 * Gb, -(Zb.ey - .5) * Ic.h * 2 * Gb);
                                    var te = 0;
                                    if (Le || 0 == Pa.distorted)
                                        if (te = (sb[8] + sb[12]) * qd[2] + (sb[9] + sb[13]) * qd[6] + (sb[10] + sb[14]) * qd[10] + (sb[11] + sb[15]) * qd[14], te += ic.zf, te < ic.zf && 1E3 < ic.zf) {
                                            Hc.state = 0;
                                            continue
                                        }
                                    if (Le) {
                                        var jc = te,
                                            jc = .5 / ic.z * jc,
                                            Gb = Gb * jc;
                                        Za(df, Id, sb, Me * Gb, Ne * Gb, Pa.mx_RR, 2 * jc * (Id & 64 ? Zb.ox * Ic.w : Zb.ox), 2 * jc * (Id & 128 ? Zb.oy * Ic.h : Zb.oy), Ud, -Ke, -Ie + 90, Je, -Aa.tz, Aa.ty, Aa.tx, -(Zb.ex - .5) * Ic.w * 2 * Gb, -(Zb.ey - .5) * Ic.h * 2 * Gb)
                                    }
                                    Kd(Aa.MX, sb)
                                } else Kd(sb, Aa.MX);
                                if (!(.01 > Pa.alpha)) {
                                    ef && mf ? mc(sb, ef) : mc(sb, qd);
                                    if (re) {
                                        if (Id & 3072) {
                                            if (Hd = !0, 0 < cf) {
                                                var pf = sb[8] + sb[12],
                                                    qf = sb[9] + sb[13],
                                                    jc = sb[10] + sb[14],
                                                    jc = jc * (1E3 / Math.sqrt(pf * pf + qf * qf + jc * jc)); - 800 > jc && (Hd = !1);
                                                if (jc < (1E3 < cf ? -100 : -950)) {
                                                    Hc.state = 0;
                                                    continue
                                                }
                                            }
                                        } else Hd = !1;
                                        Hc.state = Hd ? 2 : 1
                                    } else {
                                        if (0 == Hc.state) continue;
                                        Hd = 2 == Hc.state
                                    }
                                    if (Td = Hc.tex) {
                                        if (Sa.activeTexture(Zc), Sa.bindTexture(ha, Td), 1 != Hc.tex_type) a: {
                                            var $b = Aa,
                                                rf = !1;
                                            if (2 == $b.GL.tex_type) {
                                                Na = !0;
                                                var ff = $b.posterDOM,
                                                    rd = $b.videoDOM,
                                                    Ye = ff && ff.complete,
                                                    gf = rd && (4 <= rd.readyState || !0 === $b.iPhoneMode) && 0 < rd.videoWidth;
                                                rd && d.chromemobile && 0 == rd.currentTime && (gf = !1);
                                                var Oe = gf ? rd : Ye ? ff : null;
                                                if (Oe !== $b.GL.tex_src) {
                                                    if (null == rd) {
                                                        M($b);
                                                        $b.lastCurrentTime = -1;
                                                        Td = null;
                                                        break a
                                                    }
                                                    Oe && ($b.GL.tex_src = Oe, $b.lastCurrentTime = -1)
                                                }
                                                if (gf) {
                                                    var sf = rd.currentTime;
                                                    sf !== $b.lastCurrentTime && (rf = !0, $b.lastCurrentTime = sf)
                                                }
                                                rf && L($b, Wb, Oe)
                                            }
                                            Td = $b.GL.tex
                                        }
                                    } else Td = D(Aa);
                                    if (null != Td) {
                                        Sa.uniformMatrix4fv(zb, !1, sb);
                                        var Jc = Tb,
                                            Vd = Pa.crop;
                                        Aa.pressed && Pa.ondowncrop ? Vd = Pa.ondowncrop : Aa.hovering && Pa.onovercrop && (Vd = Pa.onovercrop);
                                        if (Vd)
                                            if (Vd != Aa.C_crop) {
                                                Aa.C_crop = Vd;
                                                var Pe = ("" + Vd).split("|"),
                                                    tf = Aa.loader.naturalWidth,
                                                    uf = Aa.loader.naturalHeight,
                                                    Jc = [1, 0, 0, 0, 1, 0, 0, 0, 0];
                                                Jc[0] = (1 * Pe[2] - 1) / tf;
                                                Jc[2] = (1 * Pe[0] + .5) / tf;
                                                Jc[4] = (1 * Pe[3] - 1) / uf;
                                                Jc[5] = (1 * Pe[1] + .5) / uf;
                                                Aa.C_crop_matrix = Jc
                                            } else Jc = Aa.C_crop_matrix;
                                        else switch (Pa.stereo) {
                                            case "SBS":
                                                Jc = [.5, 0, 2 > c ? 0 : .5, 0, 1, 0, 0, 0, 0];
                                                break;
                                            case "TB":
                                                Jc = [1, 0, 0, 0, .5, 2 > c ? 0 : .5, 0, 0, 0]
                                        }
                                        Sa.uniformMatrix3fv(Bb, !1, Jc);
                                        Sa.uniform1f(ub, Pa.alpha);
                                        0 == Pa.distorted && Sa.uniform1f(xb, 0);
                                        Hd && Sa.disable(Sa.CULL_FACE);
                                        var vf = !1;
                                        "add" == Aa.blendmode && (vf = !0, Sa.blendFunc(Sa.SRC_ALPHA, Sa.ONE));
                                        Sa.drawElements(bc, qe.tcnt, Sb, 0);
                                        Ia++;
                                        vf && (Qa ? Sa.blendFuncSeparate(Sa.SRC_ALPHA, Sa.ONE_MINUS_SRC_ALPHA, Sa.ONE, Sa.ONE) : Sa.blendFunc(Sa.SRC_ALPHA, Sa.ONE_MINUS_SRC_ALPHA));
                                        Hd && Sa.enable(Sa.CULL_FACE);
                                        ge && kd(qe, 1);
                                        0 == Pa.distorted && Sa.uniform1f(xb, Se)
                                    }
                                }
                            } else re && 0 < c && Aa.sprite && "none" != Aa.sprite.style.display && (Aa.sprite.style.display = "none");
                    re && (bf || 1 == eb.mouse || d.ie) && wa.hittesthotspots(null)
                }
            }

            function ra() {
                this.state = 0;
                this.tex_uid = null;
                this.tex_type = 0;
                this.destroy = this.tex = this.tex_src = null
            }

            function q(a, c) {
                this.uid = a;
                this.cnt = 1;
                this.tex = c
            }

            function D(a) {
                var c = 0,
                    b = null,
                    e = a.loader,
                    f = Ib;
                if (a.jsplugin) {
                    var b = a.getfullpath(),
                        e = a.posterDOM,
                        g = a.videoDOM;
                    e || g ? (Na = !0, c = 2, f = Wb, e && g && d.chromemobile && 0 == g.currentTime && (g = null), g && (2 <= g.readyState || !0 === a.iPhoneMode) && 0 < g.videoWidth ? e = g : e && e.complete || (e = null, a.requestUpdate())) : a._istextfield ? (e = null, c = 3) : e = null
                } else e && (b = e.src, !b || 1 > e.naturalWidth || 1 > e.naturalHeight ? e = null : c = 1);
                if (!e) return null;
                var g = ma,
                    k = null;
                if (k = gd[b]) k.cnt++, k = k.tex;
                else {
                    g.activeTexture(Zc);
                    k = g.createTexture();
                    g.bindTexture(ha, k);
                    g.texParameteri(ha, g.TEXTURE_WRAP_T, g.CLAMP_TO_EDGE);
                    g.texParameteri(ha, g.TEXTURE_WRAP_S, g.CLAMP_TO_EDGE);
                    g.texParameteri(ha, g.TEXTURE_MAG_FILTER, Vb);
                    g.texParameteri(ha, g.TEXTURE_MIN_FILTER, Vb);
                    2 == c && d.ios && 10 <= d.iosversion && ma.pixelStorei(ma.UNPACK_PREMULTIPLY_ALPHA_WEBGL, !0);
                    try {
                        L(a, f, e), gd[b] = new q(b, k)
                    } catch (h) {
                        va(3, h)
                    }
                }
                a.GL.tex = k;
                a.GL.tex_uid = b;
                a.GL.tex_type = c;
                a.GL.tex_src = e;
                a.GL.destroy || (a.GL.destroy = function() {
                    M(a)
                });
                return k
            }

            function L(a, c, b) {
                if (d.ie && !d.edge && "video" == b.localName) {
                    var e = b.videoWidth,
                        f = b.videoHeight,
                        g = a.DATA.tmpIECanvas;
                    null == g && (g = a.DATA.tmpIECanvas = Fa(2));
                    if (g.width != e || g.height != f) g.width = e, g.height = f;
                    g.getContext("2d").drawImage(b, 0, 0);
                    b = g
                }
                ma.texImage2D(ha, 0, c, c, Yc, b)
            }

            function M(a) {
                if (a.GL) {
                    a.DATA.tmpIECanvas && (a.DATA.tmpIECanvas.width = a.DATA.tmpIECanvas.height = 1, a.DATA.tmpIECanvas = null);
                    var c = a.GL.tex_uid,
                        b = gd[c];
                    b && 0 == --b.cnt && (ma.deleteTexture(b.tex), b.tex = null, gd[c] = null, delete gd[c]);
                    a.GL.tex = null;
                    a.GL.tex_uid = null;
                    a.GL.tex_type = 0;
                    a.GL.tex_src = null;
                    a.GL.destroy = null;
                    a.GL = null
                }
            }

            function Za(a, c, b, d, e, f, g, q, k, h, m, l, D, p, n, r, t) {
                var v = se;
                ve(b, d, 0, 0, 0, 0, e, 0, 0, 0, 0, 1, 0, r, t, 0, 1);
                a ? (Nc(b, g, q, 0), d = -h * W, c = Math.cos(d), d = Math.sin(d), e = b[0], f = b[1], b[0] = e * c - f * d, b[1] = e * d + f * c, e = b[4], f = b[5], b[4] = e * c - f * d, b[5] = e * d + f * c, e = b[8], f = b[9], b[8] = e * c - f * d, b[9] = e * d + f * c, e = b[12], f = b[13], b[12] = e * c - f * d, b[13] = e * d + f * c, Ld(b, a), m = (m + 90) * W, l *= W, D += k * Math.cos(l) * Math.cos(m), n += k * Math.cos(l) * Math.sin(m), p += k * Math.sin(l), Nc(b, D, p, n)) : (c & 1024 && Ld(b, f), Nc(b, g, q, k), we(v, h, m, l, !1), Ld(b, v), c & 2048 && Nc(b, D, p, n))
            }
            var wa = fb,
                nb = 0,
                aa = !1,
                Jb = 0,
                be = 0,
                da = !1,
                dc = !1,
                fa = 0,
                ia = 0,
                Na = !1,
                ga = 0,
                ka = 0,
                Ia = 0,
                oa = 0,
                Uc = 0,
                wd = 0,
                ta = 0,
                Wa = 16.666,
                ua = {},
                wb = [],
                Cb = 0,
                db = 52428800,
                Vc = !1,
                yb = null,
                pa = !1,
                Ca = !1,
                Oa = null,
                ma = null,
                ab = null,
                sa = 0,
                Ga = null,
                ya = null,
                Ra = null,
                Qa = !1,
                La = 1,
                bb = !1,
                xa = null,
                Va = null;
            b = a = null;
            var ib = [],
                za = null,
                cb = null,
                hb = !1,
                Ha = null,
                lb = null,
                jb = !1,
                gb = [],
                ob, pb, xb, Db, ub, Ab, zb, Bb, Tb = [1, 0, 0, 0, 1, 0, 0, 0, 0],
                Ac = [1, 0, 0, 0, .5, 0, 0, 0, 0],
                Bc = [1, 0, 0, 0, .5, .5, 0, 0, 0],
                Lc = [.5, 0, 0, 0, 1, 0, 0, 0, 0],
                jd = [.5, 0, .5, 0, 1, 0, 0, 0, 0],
                ha, tc, Xa, Zc, mb, Rb, Ib, Wb, Yc, Sb, fc, bc, Xc, Vb, nc = [1, 3, 0, 2, 4, 5, 6],
                Pb = "rotateY(90deg) ;;rotateY(-90deg) ;rotateY(180deg) ;rotateX(-90deg) ;rotateX(90deg) ;".split(";"),
                Wc = "",
                Cc = "",
                ac = null;
            wa.requiereredraw = !1;
            wa.isloading = !1;
            wa.setup = function(a) {
                var c, b = null;
                if (2 == a) {
                    var e = {};
                    if (0 <= G(oc.so.html5).indexOf(_[211]) || d.mac && d.firefox) e.preserveDrawingBuffer = !0;
                    if (d.mobile || d.ios) e.antialias = !1;
                    e.depth = !1;
                    e.stencil = !1;
                    var q = oc.so.webglsettings;
                    q && (!0 === q.preserveDrawingBuffer && (e.preserveDrawingBuffer = !0), !0 === q.depth && (e.depth = !0), !0 === q.stencil && (e.stencil = !0));
                    q = G(oc.so.wmode);
                    _[13] == q || _[154] == q ? (Qa = !0, e.alpha = !0, e.premultipliedAlpha = !0) : e.alpha = !1;
                    try {
                        for (Oa = Fa(2), Oa.style.position = _[0], Oa.style.left = 0, c = Oa.style.top = 0; 4 > c && !(b = Oa.getContext([_[65], _[104], _[134], _[135]][c], e)); c++);
                    } catch (k) {}
                    Oa && b && (ma = b, ab = {}, ha = b.TEXTURE_2D, tc = b.COLOR_BUFFER_BIT | b.DEPTH_BUFFER_BIT | b.STENCIL_BUFFER_BIT, Xa = b.FRAMEBUFFER, Zc = b.TEXTURE0, mb = b.ARRAY_BUFFER, Rb = b.ELEMENT_ARRAY_BUFFER, Ib = b.RGBA, Wb = b.RGB, Yc = b.UNSIGNED_BYTE, Sb = b.UNSIGNED_SHORT, fc = b.FLOAT, bc = b.TRIANGLES, Xc = b.STATIC_DRAW, Vb = b.LINEAR, A() && (Qa ? b.clearColor(0, 0, 0, 0) : x(1), b.disable(b.DEPTH_TEST), b.depthFunc(b.NEVER), b.enable(b.BLEND), b.blendFunc(b.SRC_ALPHA, b.ONE_MINUS_SRC_ALPHA), b.enable(b.CULL_FACE), b.cullFace(b.FRONT), sa = b.getParameter(b.MAX_TEXTURE_SIZE), !d.desktop && 4096 < sa && (sa = 4096), 2048 >= sa && d.firefox && !d.mac && !d.android && (d.css3d = !1), d.ios && (sa = 2048), V.panolayer.appendChild(Oa), wa.infoString = _[499], l.webGL = {
                        canvas: Oa,
                        context: b,
                        ppShaderArray: gb,
                        createShader: g,
                        createPostProcessingShader: w,
                        deleteShader: m,
                        useShader: r,
                        restoreProgram: Da,
                        ppshaders: gb,
                        createppshader: w,
                        useProgram: r
                    }, pa = !0));
                    0 == pa && (ab = ma = Oa = null, a = 1)
                }
                1 == a && (wa.infoString = _[500], d.webgl = !1);
                nb = d.browser.css.tileoverlap | 0;
                if (6 < d.iosversion || d.mac && "7" <= d.safariversion) aa = !0;
                d.multiressupport = d.androidstock && 0 == d.webgl ? !1 : !0;
                (a = d.webgl) && d.android && d.androidstock && (a = !1);
                9 <= d.iosversion && document.addEventListener(_[29], f, !1);
                d.panovideosupport = a;
                d.buildList()
            };
            wa.reset = function() {
                ga = 0
            };
            var Mb = {},
                Ob = null,
                ec = null;
            wa.unload = function() {
                var c;
                l.webGL && (l.webGL.canvas = null, l.webGL.context = null, l.webGL = null);
                var d = ma;
                if (d && ab) {
                    d.bindTexture(ha, null);
                    d.bindBuffer(mb, null);
                    d.bindBuffer(Rb, null);
                    d.bindFramebuffer(Xa, null);
                    jb = !1;
                    m(ya);
                    m(Ra);
                    Ra = ya = null;
                    ab.obj0 && (p(ab.obj0), p(ab.obj));
                    ab.objS && p(ab.objS);
                    ab = null;
                    for (c = 0; 6 > c; c++) ib[c] && ib[c].prg && (d.deleteProgram(ib[c].prg), ib[c].prg = null, ib[c] = null);
                    d.deleteBuffer(a);
                    d.deleteBuffer(b);
                    var e = [xa, Va, Ha, lb];
                    for (c = 0; c < e.length; c++) e[c] && (e[c].fb && d.deleteFramebuffer(e[c].fb), e[c].tex && d.deleteTexture(e[c].tex), e[c] = null)
                }
                pa = !1;
                ma = Oa = null
            };
            wa.size = function(a, c) {
                if (pa) {
                    var b = (d.android && 0 == d.androidstock || d.blackberry || d.silk || d.mac) && 0 == d.hidpi ? d.pixelratio : 1;
                    if (d.desktop || d.ios || d.ie) b = T.devicePixelRatio;
                    isNaN(b) && (b = 1);
                    if (!d.desktop && 1 != b) a: {
                        var e = b,
                            b = [320, 360, 400, 480, 640, 720, 768, 800, 1024, 1080, 1280, 1366, 1440, 1920, 2560],
                            f, g, q = a * e;g = b.length;
                        for (f = 0; f < g; f++)
                            if (2 > Math.abs(b[f] - q)) {
                                b = b[f] / a;
                                break a
                            }
                        b = e
                    }
                    b *= 1;
                    e = a * b + .25 | 0;
                    b = c * b + .25 | 0;
                    if (f = l.webVR)
                        if (f = f.getsize(e, b)) e = f.w, b = f.h;
                    e *= ja.framebufferscale;
                    b *= ja.framebufferscale;
                    Oa.style.width = a + "px";
                    Oa.style.height = c + "px";
                    if (Oa.width != e || Oa.height != b || 0 == Ca) {
                        Ca = !0;
                        Oa.width = e;
                        Oa.height = b;
                        ma.bindFramebuffer(Xa, null);
                        jb = !1;
                        f = ma.drawingBufferWidth | 0;
                        g = ma.drawingBufferHeight | 0;
                        d.desktop && d.chrome && 300 == f && 150 == g && (f = g = 0);
                        if (0 >= f || 0 >= g) f = e, g = b;
                        ma.viewport(0, 0, f, g);
                        d.gl = {
                            width: f,
                            height: g
                        }
                    }
                } else d.gl = {
                    width: 0,
                    height: 0
                }
            };
            wa.fps = function() {
                var a = Ja();
                if (0 < ta) {
                    var c = a - ta;
                    if (5 < c && 500 > c) {
                        var b = Math.min(c / 160, .75);
                        Wa = Wa * (1 - b) + c * b;
                        0 < Wa && (Od = 1E3 / Wa, ja.currentfps = Od)
                    }
                    0 == oa && (ja.r_ft = .9 * ja.r_ft + .1 * c)
                }
                ta = a
            };
            var Kc = !1;
            wa.startFrame = function() {
                Na = !1;
                Ia = ka = 0;
                Kc = !0;
                db = l.memory.maxmem << 20;
                if (pa) {
                    var a = ma;
                    (hb = 0 < gb.length) ? (a.clear(tc), Ha = y(Ha), 0 == jb && (jb = !0, a.bindFramebuffer(Xa, Ha.fb)), a.clear(tc), Ia = 0) : (jb && (jb = !1, a.bindFramebuffer(Xa, null)), a.clear(tc))
                }
            };
            wa.finishFrame = function() {
                ga++;
                oa = 0;
                if (pa) {
                    var a = ma;
                    if (hb) {
                        var c, b = gb.length,
                            e = Ha,
                            f = null;
                        1 < b && (f = lb = y(lb));
                        a.disable(a.BLEND);
                        for (c = 0; c < b; c++) e.drawcalls = Ia, Ia = 0, f ? (a.bindFramebuffer(Xa, f.fb), jb = !0) : (a.bindFramebuffer(Xa, null), jb = !1), a.clear(tc), I(e, gb[c], 1), e = f, f = c + 1 == b - 1 ? null : c & 1 ? lb : Ha;
                        a.enable(a.BLEND);
                        a.bindFramebuffer(Xa, Ha.fb);
                        jb = !0
                    } else jb && (jb = !1, a.bindFramebuffer(Xa, null));
                    d.androidstock && a.finish()
                }
                l.memory.usage = Cb >> 20;
                Kc = !1
            };
            wa.createPano = function(a) {
                return new E(a)
            };
            var xc = 0,
                yc = 0,
                Qb = 0,
                qd = Ka(),
                tb = Ka(),
                Ub = Ka(),
                Rc = Ka(),
                pc = Ka(),
                nd = Ka(),
                le = Ka(),
                hd = Ka(),
                Mc = Ka(),
                xd = Ka(),
                lc = Ka();
            wa.setblendmode = function(a) {
                if (pa) {
                    var c = ma;
                    za = null;
                    var b = !0,
                        e = null,
                        f = null,
                        g = 1,
                        q = Z.parseFunction(a);
                    if (q) switch (q[0].toUpperCase()) {
                        case "BLEND":
                            (e = q[2]) || (e = _[378]);
                            za = ib[0];
                            break;
                        case _[399]:
                            f = Number(q[2]);
                            g = Number(q[3]);
                            (e = q[4]) || (e = _[361]);
                            isNaN(f) && (f = 16777215);
                            isNaN(g) && (g = 2);
                            za = ib[1];
                            r(za.prg);
                            break;
                        case _[410]:
                            f = Number(q[2]);
                            (e = q[3]) || (e = _[382]);
                            isNaN(f) && (f = 0);
                            za = ib[2];
                            r(za.prg);
                            break;
                        case _[422]:
                            var b = !1,
                                k = Number(q[2]);
                            a = Number(q[3]);
                            e = q[4];
                            isNaN(k) && (k = 0);
                            isNaN(a) && (a = .2);
                            a = 0 > a ? 0 : 1 < a ? 1 : a;
                            e || (e = _[59]);
                            var h = q = 0,
                                m = Math.cos(k * W),
                                l = Math.sin(k * W);
                            0 > l && (h = 1, k += 90);
                            0 > m && (q = 1, k += 0 > l ? 90 : -90);
                            k = Math.sqrt(2) * Math.cos((45 - k) * W);
                            m *= k;
                            l *= k;
                            k = 1 / (m * m + l * l);
                            za = ib[4];
                            r(za.prg);
                            c.uniform3f(za.fp, m * k, l * k, (-q * m - h * l) * k);
                            c.uniform1f(za.bl, .5 * a);
                            break;
                        case _[461]:
                            b = !1;
                            a = Number(q[2]);
                            (e = q[3]) || (e = _[323]);
                            isNaN(a) && (a = 2);
                            za = ib[3];
                            r(za.prg);
                            c.uniform2f(za.ct, .5, .5);
                            c.uniform1f(za.zf, a);
                            break;
                        case _[464]:
                            b = !1, a = Number(q[2]), k = Number(q[3]), h = Number(q[4]), (e = q[5]) || (e = _[59]), isNaN(a) && (a = .2), isNaN(k) && (k = .2), isNaN(h) && (h = 0), a = -1 > a ? -1 : 1 < a ? 1 : a, k = 0 > k ? 0 : 1 < k ? 1 : k, h = 0 > h ? 0 : 1 < h ? 1 : h, q = d.gl.width / d.gl.height, m = 1, isNaN(q) && (q = 1), q *= q, 0 > a ? q *= 1 + a : m *= 1 - a, za = ib[5], r(za.prg), c.uniform2f(za.ap, q, m), c.uniform1f(za.bl, .5 * k), c.uniform1f(za.zf, h)
                    }
                    if (null == za || 0 == b && ja.stereo) za = ib[0], f = null;
                    null !== f && c.uniform3f(za.cc, g * (f >> 16 & 255) / 255, g * (f >> 8 & 255) / 255, g * (f & 255) / 255);
                    null == e && (e = _[59]);
                    cb = zc.getTweenfu(e);
                    bb = 0 == d.realDesktop && 1 < d.pixelratio || 33 < ja.r_ft
                }
            };
            wa.snapshot = function(a, c) {
                if (pa) {
                    var b = ma;
                    if (!d.gl) return null;
                    if (a) {
                        var e = xa;
                        xa = Va;
                        Va = e
                    }
                    bb && (La = .707);
                    Va = y(Va);
                    b.bindFramebuffer(Xa, Va.fb);
                    jb = !0;
                    Ia = 0;
                    Qa && x(1);
                    b.clear(tc);
                    e = 0;
                    c && (e = Kc, Kc = !0, wa.renderpano(c, 1), Kc = e, e = 1 - c.alpha);
                    a && I(xa, za, c ? 1 - c.alpha : a.alpha) && Ia++;
                    Va.drawcalls = Ia;
                    hb ? (b.bindFramebuffer(Xa, Ha.fb), jb = !0) : (b.bindFramebuffer(Xa, null), jb = !1);
                    La = 1;
                    null == a && (a = {});
                    a.alpha = e;
                    return a
                }
                return null
            };
            wa.rendersnapshot = function(a, c) {
                if (0 == Kc) return a;
                if (null == ma || null == Va || c && 1 <= c.alpha) return null;
                var b = a.alpha = c ? 1 - c.alpha : a.alpha;
                I(Va, za, b);
                return a
            };
            wa.renderpano = function(a, c) {
                if (0 != Kc) {
                    a.frame = ga;
                    var b = !1,
                        e = ma;
                    if (2 == c && e) {
                        if (a.stopped && xa && xa.done && xa.pano == a.id) {
                            xa.have = !0;
                            return
                        }
                        bb && (La = .707);
                        if (xa = y(xa)) b = !0, xa.have = !0, xa.pano = a.id, xa.done = !1, xa.alpha = a.alpha, xa.drawcalls = 0, e.bindFramebuffer(Xa, xa.fb), jb = !0, x(1), e.clear(tc)
                    }
                    var f = a.panoview = a.stopped && a.panoview ? a.panoview : t.getState(a.panoview),
                        g = Number(f.h) + Number(a.image.viewoffset),
                        q = f.v,
                        k = f.r,
                        h = f.z,
                        m = a.hasmoved = g != xc || q != yc || h != Qb;
                    h != Qb && (Vc = !1);
                    var D = Ja();
                    if (m) {
                        if ("auto" == G(ja.loadwhilemoving)) {
                            var p = D - kc;
                            200 < D - be && 0 == H.down && 200 < p && (da = !0)
                        }
                        Jb = D
                    } else 10 > D - Jb && (a.hasmoved = m = !0);
                    Na = m;
                    xc = g;
                    yc = q;
                    Qb = h;
                    m = qd;
                    h = tb;
                    Zd(m, g, q, k);
                    Kd(Rc, m);
                    Cc = "";
                    ac = null;
                    a.image && a.image.prealign && (k = ("" + a.image.prealign).split("|"), 3 == k.length && (g = Number(k[0]), q = -Number(k[1]), k = -Number(k[2]), isNaN(g) || isNaN(q) || isNaN(k) || (Cc = _[140] + q.toFixed(4) + _[311] + k.toFixed(4) + _[322] + g.toFixed(4) + "deg) ", ac = Ub, xe(h, m), m = Rc, h = pc, Kd(m, qd), we(ac, g, q, k, !1), hf(m, ac))));
                    xe(h, m);
                    g = (d.android && 0 == d.androidstock || d.blackberry || d.ios) && 0 == d.hidpi ? d.pixelratio : 1;
                    d.ios && d.retina && (g = 1.5);
                    1.4 < g && (g = 1.4);
                    k = 1 / (f.z / (.5 * Ea));
                    q = f.zf;
                    200 < q && (k = Math.atan(k), q = Math.min(k + Math.asin(q / 1E3 * Math.sin(k)), 1), isNaN(q) && (q = 1), k = Math.tan(q));
                    .5 > k && (g = 1);
                    d.desktop && (g = d.pixelratio);
                    g = .25 * Ma * (Ta * g / Math.sin(Math.atan(Ta / Ea * k)) + Ea * g / k);
                    0 == a.type ? g *= 2 / Ma : 1 == a.type && (q = a.levels, g *= 2 / Ma, g *= Math.tan(.5 * q[q.length - 1].vfov * W));
                    k = g;
                    g = 0;
                    m = a.levels;
                    q = m.length;
                    D = 1 + (J ? parseFloat(J.multiresthreshold) : 0);
                    isNaN(D) && (D = 1);
                    .1 > D && (D = .1);
                    k = Math.ceil(k * D);
                    if (0 < q) {
                        for (; !(0 == m[g].preview && m[g].h >= k);)
                            if (g++, g >= q) {
                                g = q - 1;
                                break
                            }
                        Vc && 0 < g && --g;
                        k = l.lockmultireslevel;
                        _[519] == G(k) && (l.lockmultireslevel = k = "" + g);
                        k |= 0;
                        0 <= k && k < q && (g = k);
                        a.currentlevel != g && (a.currentlevel = g)
                    }
                    1 == c && (g = a.currentlevel, l.multireslevel = 0 < g && a.levels[0].preview ? g - 1 : g);
                    a: {
                        m = h;h = f.zf;k = 1 / (f.z / (.5 * Qc));
                        if (0 < h && (g = Math.atan(k), k = Math.tan(g + Math.asin(h / 1E3 * Math.sin(g))), isNaN(k) || 0 >= k)) {
                            f.vr = Sc;
                            break a
                        }
                        D = k * Ea / Ta;p = f.yf / Ea * 2 * D;h = [k, D + p, -1];g = [-k, D + p, -1];q = [-k, -D + p, -1];k = [k, -D + p, -1];$d(m, h);$d(m, g);$d(m, q);$d(m, k);
                        for (var n, D = 1, r = null, p = Array(40), v = [null, null, null, null, null, null], m = 0; 6 > m; m++) {
                            var u = [],
                                w = [];
                            u.push(Q(h, Kb[m]));
                            u.push(Q(g, Kb[m]));
                            u.push(Q(q, Kb[m]));
                            u.push(Q(k, Kb[m]));
                            var M = 0,
                                L = 0,
                                A = 0,
                                B = 0;
                            for (n = L = 0; 4 > n; n++) r = u[n], L = r.x, A = r.y, B = r.z / 2, L = 1 * (L > -B) + 8 * (L < B) + 64 * (A < B) + 512 * (A > -B) + 4096 * (-.1 > -B), p[n] = L, M += L;
                            n = 0 != (M & 18724);
                            if (0 == M)
                                for (n = 0; 4 > n; n++) r = u[n], w.push(r.x / r.z), w.push(r.y / r.z);
                            else if (n) continue;
                            else {
                                for (var M = 4, r = p, z = 0, C = [], K = [], E, F = 0, F = 0; 5 > F; F++) {
                                    var Za = 1 << 3 * F;
                                    for (n = 0; n < M; n++) {
                                        var A = (n + M - 1) % M,
                                            L = u[A],
                                            P = u[n],
                                            A = r[A],
                                            ea = r[n],
                                            R = 0;
                                        0 == (ea & Za) ? (R |= 2, A & Za && (R |= 1)) : 0 == (A & Za) && (R |= 1);
                                        R & 1 && (4 == F ? D = (.1 - L.z / 2) / (P.z - L.z) / 2 : 3 == F ? D = (-L.y - L.z / 2) / (P.y - L.y + (P.z - L.z) / 2) : 2 == F ? D = (L.z / 2 - L.y) / (P.y - L.y - (P.z - L.z) / 2) : 1 == F ? D = (L.z / 2 - L.x) / (P.x - L.x - (P.z - L.z) / 2) : 0 == F && (D = (-L.z / 2 - L.x) / (P.x - L.x + (P.z - L.z) / 2)), E = new vc, E.x = L.x + (P.x - L.x) * D, E.y = L.y + (P.y - L.y) * D, E.z = L.z + (P.z - L.z) * D, L = E.x, A = E.y, B = E.z / 2, L = 1 * (L > -B) + 8 * (L < B) + 64 * (A < B) + 512 * (A > -B) + 4096 * (-.1 > -B), C.push(E), K.push(L), z++);
                                        R & 2 && (C.push(P), K.push(ea), z++)
                                    }
                                    M = z;
                                    u = C;
                                    r = K;
                                    z = 0;
                                    C = [];
                                    K = []
                                }
                                for (n = 0; n < M; n++) r = u[n], w.push(r.x / r.z), w.push(r.y / r.z)
                            }
                            u = M = 9;
                            z = r = -9;
                            C = w.length;
                            if (4 < C) {
                                for (n = 0; n < C; n++) w[n] += .5;
                                for (n = 0; n < C; n += 2) w[n + 0] < M && (M = w[n + 0]), w[n + 1] < u && (u = w[n + 1]), w[n + 0] > r && (r = w[n + 0]), w[n + 1] > z && (z = w[n + 1]);
                                M > r || 0 > M && 0 > r || 1 < M && 1 < r || u > z || 0 > u && 0 > z || 1 < u && 1 < z || (0 > M && (M = 0), 0 > u && (u = 0), 1 < r && (r = 1), 1 < z && (z = 1), v[m] = [M, u, r, z])
                            }
                        }
                        f.vr = v
                    }
                    ab && (Qa ? (e.clearColor(0, 0, 0, 0), e.blendEquationSeparate(e.FUNC_ADD, e.FUNC_ADD), e.blendFuncSeparate(e.SRC_ALPHA, e.ONE_MINUS_SRC_ALPHA, e.ONE, e.ONE)) : e.blendFunc(e.SRC_ALPHA, e.ONE_MINUS_SRC_ALPHA));
                    ja.stereo ? (Y(a, 1), Y(a, 2)) : Y(a, 0);
                    f = 0;
                    h = a.levels;
                    g = h.length;
                    l.downloadlockedlevel && 0 < (l.lockmultireslevel | 0) && (f = l.lockmultireslevel | 0, f >= g && (f = g - 1));
                    0 < g && (f = h[f], Pc.progress = f.stereo && ja.stereo ? (f.loadedtiles[0] + f.loadedtiles[1]) / (2 * f.totaltiles) : f.loadedtiles[0] / f.totaltiles);
                    b && (hb ? (e.bindFramebuffer(Xa, Ha.fb), jb = !0) : (e.bindFramebuffer(Xa, null), jb = !1), e.clear(tc), xa.drawcalls = Ia, xa.done = !0, La = 1);
                    1 == c && e && xa && 0 < xa.drawcalls && xa.done && xa.have && (xa.have = !1, I(xa, za, 1 - wc))
                }
            };
            wa.handleloading = function() {
                return Na ? 2 : 0
            };
            var uc = [
                    [0, 180],
                    [0, 90],
                    [0, 0],
                    [0, 270],
                    [-90, 90],
                    [90, 90]
                ],
                kd = function() {
                    function a(c, b) {
                        var d, e = 8 * (b + 1);
                        d = 4 * (b + 1);
                        var f = new Float32Array(12 * (b + 1)),
                            g = new Float32Array(e),
                            q = new Uint16Array(d),
                            k, h, m, l;
                        c *= 2;
                        for (k = d = e = 0; 4 > k; k++)
                            for (h = 0; h <= b; h++) 0 == k ? (m = h, l = 0) : 1 == k ? (m = b, l = h) : 2 == k ? (m = b - h, l = b) : (m = 0, l = b - h), m /= b, l /= b, g[e] = m, g[e + 1] = l, e += 2, f[d] = c * (m - .5), f[d + 1] = c * (l - .5), f[d + 2] = 0, d += 3;
                        for (h = d = 0; h < 4 * (b + 1); h++) q[d] = h, d += 1;
                        return new v(d, f, g, q)
                    }
                    var c = null,
                        b = null,
                        d = null;
                    return function(e, f) {
                        var g = ma;
                        null == c && (c = g.createTexture(), g.bindTexture(ha, c), g.texParameteri(ha, g.TEXTURE_WRAP_T, g.CLAMP_TO_EDGE), g.texParameteri(ha, g.TEXTURE_WRAP_S, g.CLAMP_TO_EDGE), g.texParameteri(ha, g.TEXTURE_MAG_FILTER, g.NEAREST), g.texParameteri(ha, g.TEXTURE_MIN_FILTER, g.NEAREST), g.texImage2D(ha, 0, g.RGB, 1, 1, 0, g.RGB, Yc, new Uint8Array([0, 255, 0])), b = a(500, 1), d = a(500, 19), u(b), u(d), Na = !0);
                        var q = null;
                        if (q = e === ab.obj0 ? b : e === ab.obj ? d : e) g.bindBuffer(mb, q.vx), g.vertexAttribPointer(ob, 3, fc, !1, 0, 0), g.bindBuffer(mb, q.tx), g.vertexAttribPointer(pb, 2, fc, !1, 0, 0), g.bindBuffer(Rb, q.ix), g.uniform1f(ub, f), g.bindTexture(ha, c), g.drawElements(g.LINE_LOOP, q.tcnt, Sb, 0), g.bindBuffer(mb, e.vx), g.vertexAttribPointer(ob, 3, fc, !1, 0, 0), g.bindBuffer(mb, e.tx), g.vertexAttribPointer(pb, 2, fc, !1, 0, 0), g.bindBuffer(Rb, e.ix), g.uniform1f(ub, 1)
                    }
                }(),
                Kb = [
                    [-1, 0, 0, 0, 1, 0, 0, 0, 1],
                    [0, 0, 1, 0, 1, 0, 1, 0, 0],
                    [1, 0, 0, 0, 1, 0, 0, 0, -1],
                    [0, 0, -1, 0, 1, 0, -1, 0, 0],
                    [0, 0, 1, -1, 0, 0, 0, 1, 0],
                    [0, 0, 1, 1, 0, 0, 0, -1, 0]
                ],
                Sc = [
                    [0, 0, 1, 1],
                    [0, 0, 1, 1],
                    [0, 0, 1, 1],
                    [0, 0, 1, 1],
                    [0, 0, 1, 1],
                    [0, 0, 1, 1]
                ],
                gd = {},
                sb = Ka(),
                se = Ka();
            wa.hittesthotspots = function(a) {
                if (_[33] == a) {
                    if (Eb) return Eb.process_onup(Eb, !0), Eb = null, !0
                } else if (_[39] == a && Eb) return Eb.process_onup(Eb, !1), Eb = null, !0;
                var c = l.webVR,
                    b = c && c.enabled,
                    c = b ? c.getcursor() : null,
                    d = Ua.getArray(),
                    e = d.length,
                    f, g = [0, 0, 1],
                    q = !1,
                    k = !1,
                    h = c ? c.depth : 2E3,
                    m = c && c.enabled;
                if (!b) {
                    m = !0;
                    b = H.x * ba;
                    f = H.y * ba;
                    if (ja.stereo) {
                        var g = Ta >> 1,
                            D = g * Number(ja.stereooverlap);
                        b < g ? b = b + (g >> 1) - (D >> 1) : (b -= g >> 1, b += D >> 1)
                    }
                    g = t.inverseProject(b, f);
                    g = [-g.x, -g.y, -g.z];
                    if (rb) {
                        if (D = rb.hovering) a: {
                            D = rb;
                            if (ca.elementsFromPoint && (b = ca.elementsFromPoint(b, f))) {
                                var p = b.length;
                                for (f = 0; f < p; f++)
                                    if (b[f].kobject === D) {
                                        D = !0;
                                        break a
                                    }
                                D = !1;
                                break a
                            }
                            D = !0
                        }
                        0 == D && (rb = null)
                    }
                }
                b = g;
                f = b[0];
                D = b[1];
                p = b[2];
                b[0] = f * tb[0] + D * tb[4] + p * tb[8] + tb[12];
                b[1] = f * tb[1] + D * tb[5] + p * tb[9] + tb[13];
                b[2] = f * tb[2] + D * tb[6] + p * tb[10] + tb[14];
                if (null == rb)
                    for (--e; 0 <= e; e--)
                        if ((b = d[e]) && b._ready && (0 != b.haschanged_flags && b.processUpdates(), f = b.DATA, f.visible && b !== c && (0 != f.reloading || b.loaded && b.GL && 0 != b.GL.state) && m && f.enabled)) {
                            var n = b.MX,
                                D = 0,
                                p = 1E3,
                                r = g[0],
                                u = g[1],
                                v = g[2],
                                w = p * n[0],
                                M = p * n[1],
                                x = p * n[2],
                                L = p * n[4],
                                y = p * n[5],
                                A = p * n[6],
                                B = n[12] - (w + L) / 2,
                                z = n[13] - (M + y) / 2,
                                n = n[14] - (x + A) / 2,
                                C = u * A - v * y,
                                E = v * L - r * A,
                                K = r * y - u * L,
                                F = w * C + M * E + x * K;
                            if (-1E-6 > F || 1E-6 < F) F = 1 / F, p = (B * C + z * E + n * K) * -F, 0 <= p && 1 >= p && (C = n * M - z * x, E = B * x - n * w, K = z * w - B * M, p = (r * C + u * E + v * K) * F, 0 <= p && 1 >= p && (D = (L * C + y * E + A * K) * F));
                            if (1 < D) {
                                null == a && b != vb && (null != vb && (vb.hovering = !1, Z.callaction(vb.onout, vb), c && Z.callaction(c.onout, vb), vb.DATA.onovercrop && ($a = !0), vb = null), vb = b, b.hovering = !0, f.onovercrop && ($a = !0), Z.isblocked() || (Z.callaction(b.onover, b), c && Z.callaction(c.onover, b)));
                                q = !0;
                                h = D;
                                _[46] == a && (Eb = b, b.process_ondown(b), b.capture && (k = !0));
                                break
                            }
                        }
                null == a && (c && (h = Math.max(h, 200) - 100, c.hit_depth = h), 0 == q && null != vb && (vb.DATA.onovercrop && ($a = !0), vb.hovering = !1, Z.callaction(vb.onout, vb), c && Z.callaction(c.onout, vb), vb = null), Oc.update());
                return q && k
            }
        })();
        var Af = function() {
                function a(a, d, f) {
                    a = G(a).charCodeAt(0);
                    return 118 == a ? f : 104 == a ? d : 100 == a ? Math.sqrt(d * d + f * f) : Math.max(d, f * b.mfovratio)
                }
                var b = this;
                b.haschanged = !1;
                b.r_rmatrix = Ka();
                (function() {
                    var a = "hlookat vlookat camroll fov maxpixelzoom fisheye fisheyefovlink architectural tx ty tz".split(" "),
                        d = [_[325], _[204]],
                        f;
                    for (f in a) sa(b, a[f], 0);
                    for (f in d) sa(b, d[f], !1);
                    sa(b, _[533], "VFOV");
                    b.continuousupdates = !1;
                    Ca(b, _[543], function() {
                        return "" + b._pannini
                    }, function(a) {
                        var d = Number(a),
                            d = isNaN(d) ? la(a) ? 1 : 0 : 0 > d ? 0 : 1 < d ? 1 : d;
                        b._pannini = d;
                        b.haschanged = !0
                    });
                    Ca(b, _[420], function() {
                        return b._fisheye
                    }, function(a) {
                        b.fisheye = a
                    });
                    Ca(b, _[238], function() {
                        return b._fisheyefovlink
                    }, function(a) {
                        b.fisheyefovlink = a
                    });
                    Ca(b, _[350], function() {
                        if ("off" == G(b.limitview)) return 360;
                        var a = b.hlookatmax,
                            d = b.hlookatmin,
                            e = U && U.fovlimits;
                        isNaN(d) && (d = e ? e[0] : -180);
                        isNaN(a) && (a = e ? e[1] : 180);
                        return a - d
                    }, function(a) {});
                    Ca(b, _[353], function() {
                        if ("off" == G(b.limitview)) return 180;
                        var a = b.vlookatmax,
                            d = b.vlookatmin,
                            e = U && U.fovlimits;
                        isNaN(d) && (d = e ? e[2] : -90);
                        isNaN(a) && (a = e ? e[3] : 90);
                        return a - d
                    }, function(a) {})
                })();
                b.defaults = function() {
                    b._hlookat = 0;
                    b._vlookat = 0;
                    b._architectural = 0;
                    b._architecturalonlymiddle = !0;
                    b._fov = 90;
                    b._fovtype = d.desktop ? "VFOV" : "MFOV";
                    b._camroll = 0;
                    b.mfovratio = 4 / 3;
                    b._maxpixelzoom = Number.NaN;
                    b._stereographic = !0;
                    b._pannini = 0;
                    b._fisheye = 0;
                    b._fisheyefovlink = .5;
                    b.fovmin = 1;
                    b.fovmax = 179;
                    b.r_zoom = 1;
                    b.r_yoff = 0;
                    b.r_zoff = 0;
                    b.haschanged = !1;
                    b.limitview = "auto";
                    b.hlookatmin = Number.NaN;
                    b.hlookatmax = Number.NaN;
                    b.vlookatmin = Number.NaN;
                    b.vlookatmax = Number.NaN;
                    b._limits = null
                };
                b.inverseProject = function(a, d) {
                    var f, g, l, t, r, x, p, v;
                    l = -1E3;
                    r = l / b.r_zoom;
                    f = (a - Ta / 2) * r;
                    g = (d - Ea / 2 - b.r_yoff) * r;
                    r = 1 / Math.sqrt(f * f + g * g + l * l);
                    f *= r;
                    g *= r;
                    l *= r;
                    t = b.r_zoff;
                    0 < t && (x = b._pannini, 0 < x && (r = f * f + l * l, 0 != r && (r = 1 + x * (1 / Math.sqrt(r) - 1), f *= r, g *= r, l *= r)), 0 == b._stereographic && (v = Math.atan(1E3 / t) / W - 1, (1 > -l ? Math.acos(-l) / W : 0) > v && (x = -g, p = f, r = x * x + p * p, 0 < r && (r = 1 / Math.sqrt(r), x *= r, p *= r), v *= W, r = Math.sin(v), f = r * p, g = -r * x, l = -Math.cos(v))), x = t * l, p = x * x - (t * t - 1E6), 0 < p && (r = -x + Math.sqrt(p), f *= r, g *= r, l = l * r - -t, r = 1 / Math.sqrt(f * f + g * g + l * l), f *= r, g *= r, l *= r));
                    t = new vc;
                    t.x = f;
                    t.y = g;
                    t.z = l;
                    return t
                };
                var l = b.fovRemap = function(b, d, f, g, l) {
                        g || (g = Ta);
                        l || (l = Ea);
                        b = Math.tan(b / 360 * Ma);
                        d = a(d, g, l);
                        f = a(f, g, l);
                        return b = 360 * Math.atan(b * f / d) / Ma
                    },
                    f = Ka();
                b.screentosphere = function(a, d) {
                    var m = new vc;
                    if (ja.stereo) {
                        var g = Ta / 2,
                            l = g / 2 * (1 - Number(ja.stereooverlap));
                        a = a < g ? a + l : a - l
                    }
                    g = b.inverseProject(a * ba, d * ba);
                    xe(f, b.r_rmatrix);
                    Md(f, g);
                    g = [Math.atan2(g.x, g.z) / W + 270, Math.atan2(-g.y, Math.sqrt(g.x * g.x + g.z * g.z)) / W];
                    180 < g[0] && (g[0] -= 360);
                    m.x = g[0];
                    m.y = g[1];
                    m.z = 0;
                    return m
                };
                b.spheretoscreen = function(a, d, f) {
                    var g = new vc;
                    a = (180 - a) * W;
                    d *= W;
                    g.x = 1E3 * Math.cos(d) * Math.cos(a);
                    g.z = 1E3 * Math.cos(d) * Math.sin(a);
                    g.y = 1E3 * Math.sin(d);
                    Md(b.r_rmatrix, g);
                    d = g.z + b.r_zoff;
                    var l = a = Ub;
                    10 <= d && (d = b.r_zoom / d, a = (g.x * d + .5 * Ta) / ba, l = (g.y * d + .5 * Ea) / ba + b.r_yoff, ja.stereo && f && ("l" == f ? a -= Ta / 4 * (1 - Number(ja.stereooverlap)) : "r" == f && (a += Ta / 4 * (1 - Number(ja.stereooverlap)))));
                    g.x = a;
                    g.y = l;
                    return g
                };
                b.updateView = function() {
                    var a = b._maxpixelzoom;
                    if (!isNaN(a) && 0 != a) {
                        var f = 1E-6;
                        if (U && U.ready) {
                            var m = U.vres,
                                g = U.vfov;
                            0 == U.type && (m = m * Math.PI * .5);
                            if (50 < m && 0 < g) {
                                var f = Ta,
                                    w = Ea,
                                    a = 360 / Math.PI * Math.atan(Math.tan(2 * Math.atan(1 / (2 / Math.PI * m * a / (g / 180) / (.5 * f)))) / (f / w));
                                if (isNaN(a) || 1E-4 > a) a = b.fovmax;
                                90 < a && (a = 90);
                                f = l(a, "VFOV", b._fovtype)
                            }
                        }
                        b.fovmin = f
                    }
                    var a = b._fov,
                        m = b._hlookat,
                        g = b._vlookat,
                        f = b._camroll,
                        H = d.webgl ? b._fisheye : 0,
                        r = b._fisheyefovlink,
                        A = b._stereographic,
                        w = 0,
                        p = 0 == da.bouncinglimits || 0 == eb.isBouncing();
                    p && (a < b.fovmin && (a = b.fovmin), a > b.fovmax && (a = b.fovmax));
                    179 < a && (a = 179);
                    if (0 < H) {
                        var v = l(a, b._fovtype, "VFOV");
                        A ? (170 < a && (a = 170), w = 1E3 * H * Math.sin(Math.pow(Math.min(v / 130, 1), 2 * r) * Ma * .5)) : (H += Math.pow(Math.min(H, 1), 10) / 10, w = H * Math.sin(Math.pow(v / 180, r) * Ma * .5), w *= 3E3 * w)
                    }
                    var u = G(b.limitview),
                        n = U && U.fovlimits,
                        y = 0,
                        I = 0,
                        B = 0,
                        r = Number(b.hlookatmin),
                        v = Number(b.hlookatmax),
                        C = Number(b.vlookatmin),
                        z = Number(b.vlookatmax);
                    "auto" == u && (r = v = C = z = Number.NaN);
                    isNaN(r) && (r = n ? n[0] : -180);
                    isNaN(v) && (v = n ? n[1] : 180);
                    isNaN(C) && (C = n ? n[2] : -90);
                    isNaN(z) && (z = n ? n[3] : 90);
                    "auto" == u && (t.hlookatmin = r, t.hlookatmax = v, t.vlookatmin = C, t.vlookatmax = z, u = "range");
                    z < C && (n = C, C = z, z = n);
                    v < r && (n = r, r = v, v = n);
                    var h = !1,
                        c = !1,
                        F = _[141] != u,
                        E = !0,
                        E = 180,
                        n = v - r,
                        N = z - C;
                    switch (u) {
                        case "off":
                        case _[26]:
                            n = 360;
                            r = -180;
                            v = 180;
                            C = -1E5;
                            z = 1E5;
                            F = !1;
                            break;
                        case _[439]:
                            F = !0;
                        case _[141]:
                            c = !0;
                        case "range":
                            if ((h = 360 > n) || 180 > N) B = l(a, b._fovtype, "HFOV"), B > n && (E = !0, c && l(n, "HFOV", "VFOV") < N && (E = h = !1), B = n, F && E && (a = l(B, "HFOV", b._fovtype))), y = l(a, b._fovtype, "VFOV"), y > N && (E = !0, c && l(N, "VFOV", "HFOV") < n && (E = h = !1), y = N, F && E && (a = l(y, "VFOV", b._fovtype))), l(a, b._fovtype, "HFOV"), E = y, I = y *= .5, B *= .5, -89.9 >= C && (y = 0), 89.9 <= z && (I = 0)
                    }
                    u = [360, -180, 180, y + I, C + y, z - I];
                    p && (g - y < C ? (g = C + y, eb.stopFrictions(2)) : g + I > z && (g = z - I, eb.stopFrictions(2)));
                    h && (B = -g * W, I = .5 * Ta, y = .5 * Ea, C = y / Math.tan(E * W * .5), 0 < B && (y = -y), I = 1 / Math.sqrt(1 + (I * I + y * y) / (C * C)), y = y / C * I, C = Math.acos(-I * Math.sin(B) + y * Math.cos(B)) - Ma / 2, isNaN(C) && (C = -Ma / 2), I = Math.acos((I * Math.cos(B) + y * Math.sin(B)) / Math.sin(C + Ma / 2)), isNaN(I) && (I = 0), B = 180 * I / Ma, 2 * B >= n && (F && (B = l(n, "HFOV", b._fovtype), B < a && (a = B)), B = n / 2));
                    360 > n && (F = !1, u[0] = n, u[1] = r + B, u[2] = v - B, p && (m - B < r ? (m = r + B, F = !0) : m + B > v && (m = v - B, F = !0)), F && (eb.stopFrictions(1), 0 != Db.currentmovingspeed && (Db.currentmovingspeed = 0, Db.speed *= -1)));
                    b._limits = u;
                    b._fov = a;
                    b._hlookat = m;
                    b._vlookat = g;
                    a = l(a, b._fovtype, "MFOV");
                    0 < H && 0 == A ? (v = l(a, "MFOV", "VFOV"), H = Math.asin(1E3 * Math.sin(v * W * .5) / (1E3 + .72 * w)), H = .5 * Ea / Math.tan(H)) : H = .5 * Qc / Math.tan(a / 114.591559);
                    b.hfov = l(a, "MFOV", "HFOV");
                    b.vfov = l(a, "MFOV", "VFOV");
                    b.r_fov = a;
                    b.r_zoom = H;
                    b.r_zoff = w;
                    b.r_vlookat = g;
                    A = Number(b._architectural);
                    p = 0;
                    0 < A && (1 == b._architecturalonlymiddle && (p = Math.abs(g / 90), 1 < p && (p = 1), p = Math.tan(p * Ma * .25), A *= 1 - p), p = A * (-g * (Ea / Math.tan(l(a, "MFOV", "VFOV") / 114.591559)) / 90), g *= 1 - A);
                    b.r_yoff = p;
                    Zd(b.r_rmatrix, m + Number(J.viewoffset), g, f);
                    b.r_hlookat = m;
                    b.r_vlookatA = g;
                    b.r_roll = f;
                    Ob = 0 == d.simulator && (d.iphone || d.ipad) ? .25 : 1;
                    d.ie && (Ob = t.r_zoom / 1E3 * 10);
                    if (d.androidstock || d.android && d.chrome || d.blackberry) Ob = t.r_zoom / 1E3 / 4;
                    ye = _[341] + H + _[121] + -f + _[108] + (H - w / 2 * Ob) + "px) ";
                    b.haschanged = !1
                };
                b.getState = function(a) {
                    null == a && (a = {
                        h: 0,
                        v: 0,
                        z: 0,
                        r: 0,
                        zf: 0,
                        yf: 0,
                        ch: 0,
                        vr: null
                    });
                    a.h = b._hlookat;
                    a.v = b.r_vlookatA;
                    a.z = b.r_zoom;
                    a.r = b._camroll;
                    a.zf = b.r_zoff;
                    a.yf = b.r_yoff;
                    a.ch = b._pannini;
                    return a
                };
                b.defaults()
            },
            Cf = function() {
                var a = this;
                a.defaults = function() {
                    a.usercontrol = "all";
                    a.mouse = "drag";
                    a.touch = "drag";
                    a.drag_oldmode = !1;
                    a.dragrelative = !0;
                    a.draginertia = .1;
                    a.dragfriction = .9;
                    a.movetorelative = !0;
                    a.movetoaccelerate = 1;
                    a.movetospeed = 10;
                    a.movetofriction = .8;
                    a.movetoyfriction = 1;
                    a.keybaccelerate = .5;
                    a.keybspeed = 10;
                    a.keybfriction = .9;
                    a.keybinvert = !1;
                    a.keybfovchange = .75;
                    a.mousefovchange = 1;
                    a.fovspeed = 3;
                    a.fovfriction = .9;
                    a.camrollreset = !0;
                    a.keycodesleft = "37";
                    a.keycodesright = "39";
                    a.keycodesup = "38";
                    a.keycodesdown = "40";
                    a.keycodesin = "";
                    a.keycodesout = "";
                    a.touchzoom = !0;
                    a.zoomtocursor = !1;
                    a.zoomoutcursor = !0;
                    a.disablewheel = !1;
                    a.keydownrepeat = !0;
                    a.bouncinglimits = !1;
                    a.preventTouchEvents = !0
                };
                a.defaults();
                zb(a, _[448], _[19]);
                zb(a, _[451], "touch");
                zb(a, _[272], _[256]);
                zb(a, _[403], _[380]);
                zb(a, _[328], _[299]);
                zb(a, _[305], _[285]);
                zb(a, _[316], _[346])
            },
            Df = function() {
                var a = this;
                a.standard = _[6];
                a.dragging = "move";
                a.moving = "move";
                a.hit = _[10];
                a.update = function() {
                    var b = H.down,
                        d = !1,
                        f = vb,
                        e = Eb;
                    e ? f ? (d = f.DATA.handcursor, f == e ? (b = !1, f.capture || (b = H.down && H.moved)) : b = e.capture ? !1 : H.down && H.moved) : b = !e.capture : f && 0 == b && (d = f.DATA.handcursor);
                    f = G(da.mousetype);
                    V.controllayer.style.cursor = b ? _[18] == f ? a.moving : a.dragging : d ? a.hit : a.standard
                }
            },
            zf = function() {
                var a = this;
                a.haschanged = !1;
                a.mode = _[66];
                a.pixelx = 0;
                a.pixely = 0;
                a.pixelwidth = 0;
                a.pixelheight = 0;
                sa(a, _[66], _[84]);
                sa(a, "x", "0");
                sa(a, "y", "0");
                sa(a, _[64], "100%");
                sa(a, _[17], "100%");
                sa(a, "left", "0");
                sa(a, "top", "0");
                sa(a, _[3], "0");
                sa(a, _[4], "0");
                a.calc = function(b, d) {
                    var f = 1 / ba,
                        e = _[86] == G(a.mode),
                        k = e ? a._left : a._x,
                        l = e ? a._top : a._y,
                        g = e ? a._right : a._width,
                        t = e ? a._bottom : a._height,
                        k = 0 < k.indexOf("%") ? parseFloat(k) / 100 * b * f : Number(k),
                        g = 0 < g.indexOf("%") ? parseFloat(g) / 100 * b * f : Number(g),
                        l = 0 < l.indexOf("%") ? parseFloat(l) / 100 * d * f : Number(l),
                        t = 0 < t.indexOf("%") ? parseFloat(t) / 100 * d * f : Number(t),
                        k = k / f,
                        l = l / f,
                        g = g / f,
                        t = t / f;
                    e ? (g = b - k - g, t = d - l - t) : (e = G(a._align), 0 <= e.indexOf("left") || (k = 0 <= e.indexOf(_[3]) ? b - g - k : (b - g) / 2 + k), 0 <= e.indexOf("top") || (l = 0 <= e.indexOf(_[4]) ? d - t - l : (d - t) / 2 + l));
                    a.pixelx = Math.round(k * f);
                    a.pixely = Math.round(l * f);
                    e = !1;
                    k = Math.round(g);
                    g = Math.round(t);
                    if (Ta != k || Ea != g) e = !0, Ta = k, Ea = g;
                    a.pixelwidth = k * f;
                    a.pixelheight = g * f;
                    a.haschanged = !1;
                    return e
                }
            },
            of = 1,
            ac = of | 2,
            kd = !1,
            If = function() {
                this.ay = this.ax = this.oy = this.ox = this.y = this.x = this.h = this.w = this.flags = 0;
                this.asy = this.asx = 1;
                this.ey = this.ex = 0
            },
            Jf = function() {
                this.h = this.w = 0
            },
            Qb = function() {
                function a(a, b, d) {
                    F[a] = b;
                    c.__defineGetter__(a, function() {
                        return F[a]
                    });
                    c.__defineSetter__(a, function(b) {
                        if (b != F[a] || d & 96) F[a] = b, c.haschanged_flags |= d, c.GL && ($a = !0)
                    })
                }

                function b() {
                    var a = F.alpha;
                    c.ishotspot && (a *= wc);
                    var b = 255 * a | 0;
                    b == c._aa || c.GL || (c.sprite && (c.sprite.style.opacity = a, c._aa = b), c._poly && (c._poly.style.opacity = a, c._aa = b));
                    F.autoalpha && (a = 0 < a, a != F.visible && (c.visible = a))
                }

                function t() {
                    if (c.sprite && null != F.zorder) {
                        var a = parseInt(F.zorder);
                        !isNaN(a) && 0 <= a ? (c.sprite.style.zIndex = X + a, c._zdeep = a, c._deepscale = 100 / (200 + a)) : (c._zdeep = 0, c._deepscale = .5)
                    }
                    c.ishotspot && (kd = !0)
                }

                function f() {
                    c.sprite && (c.sprite.style.overflow = F.maskchildren ? _[7] : _[16], S && d.safari && y())
                }

                function e(a, c) {
                    var b = c;
                    c && (b = c = a.DATA.enabled) && _[22] == a.type && (b = 0 != a.DATA.bgcapture);
                    if (a.sprite) {
                        var d = a.sprite.style;
                        d.cursor = b && a.DATA.handcursor ? _[10] : _[6];
                        d.pointerEvents = b ? "auto" : "none";
                        0 == b && a.hovering && (a.hovering = !1, rb === a && (rb = null))
                    }
                    if (b = a._childs) {
                        var f, g;
                        f = b.length;
                        for (d = 0; d < f; d++)(g = b[d]) && g.sprite && e(g, c)
                    }
                }

                function k() {
                    if (c.sprite) {
                        var a = F.enabled;
                        if (a && c._parent) a: {
                            for (a = m(c._parent); a;) {
                                if (0 == a.DATA.enabled || 0 == a.children) {
                                    a = !1;
                                    break a
                                }
                                if (a._parent) a = m(a._parent);
                                else break
                            }
                            a = !0
                        }
                        e(c, a, !0)
                    }
                }

                function m(a) {
                    var c = null;
                    if (a) {
                        var c = a = G(a),
                            b = Ga,
                            d = a.indexOf("[");
                        0 < d && (c = a.slice(0, d), _[5] == c && (b = Ua), a = a.slice(d + 1, a.indexOf("]")));
                        if ("stage" == c) return null == gb.sprite && (gb.sprite = V.viewerlayer, gb.loaded = !0), gb;
                        if (_[510] == c) return null == ob.sprite && (a = Fa(), c = a.style, c.position = _[0], c.width = "100%", c.height = "100%", c.overflow = _[7], c.zIndex = "0", c.pointerEvents = "none", V.controllayer.parentNode.insertBefore(a, V.controllayer), ob.sprite = a, ob.loaded = !0), ob;
                        c = b.getItem(a)
                    }
                    return c
                }

                function g(a) {
                    if (c._parent != a && !c._destroyed) {
                        if (c._parent) {
                            var b = m(c._parent);
                            if (b) {
                                var d = b._childs;
                                if (d) {
                                    var e, f;
                                    f = d.length;
                                    for (e = 0; e < f; e++)
                                        if (d[e] === c) {
                                            d.splice(e, 1);
                                            f--;
                                            break
                                        }
                                    0 == f && (d = null);
                                    b._childs = d;
                                    b.requestUpdate()
                                }
                            }
                        }
                        if (a)
                            if (b = m(a))
                                if (b.sprite) null == b._childs && (b._childs = []), b._use_css_scale = !1, c._use_css_scale = !1, b._childs.push(c), b.sprite.appendChild(c.sprite), b.requestUpdate(), b.haschanged_flags |= 4096;
                                else {
                                    if (b.GL || b.ishotspot && _[65] == b.renderer) {
                                        b.renderer = _[25];
                                        b.processUpdatesHS();
                                        b.requestUpdate();
                                        g(a);
                                        return
                                    }
                                    setTimeout(function() {
                                        c._parent = null;
                                        g(a)
                                    }, 16)
                                }
                        else a = null;
                        null == a && V.pluginlayer.appendChild(c.sprite);
                        c._parent = a;
                        c.requestUpdate();
                        c.haschanged_flags |= 4096
                    }
                }

                function w(a) {
                    (a = this.kobject) && 0 == K && (a.DATA.reloading = !1, (a = a.loadingurl) && _[95] == a.slice(0, 5) && 50 < a.length && (a = a.slice(0, 50) + "..."), na.reportLoadingError(a, c.getfullpath() + " -"))
                }

                function J() {
                    var a = c.jsplugin,
                        b = c.GL;
                    a && a.unloadplugin && a.unloadplugin();
                    b && b.destroy && b.destroy();
                    c.jsplugin = null;
                    c.GL = null
                }

                function r(a) {
                    Q && (H.down = !1, eb.trackTouch(a), ia(T, a.type, r, !0), _[2] == a.type ? (ca.body.style.webkitUserSelect = ca.body.style.backupUserSelect, ia(T, _[9], A, !0), ia(T, _[2], r, !0)) : (ia(T, d.browser.events.touchmove, A, !0), ia(T, d.browser.events.touchend, r, !0)), c.process_onup(Q, R))
                }

                function A(a, c) {
                    bb(_[423]);
                    var b = a.changedTouches && 0 < a.changedTouches.length ? a.changedTouches[0] : a,
                        e = b.pageX,
                        b = b.pageY;
                    !0 === c ? U = [e, b] : U ? 0 == R && (e -= U[0], b -= U[1], Math.sqrt(e * e + b * b) >= (d.touchdevice ? 11 : 4) && (R = !0)) : (U = null, ia(T, a.type, A, !0))
                }

                function p(a, b) {
                    var e = a.timeStamp | 0,
                        f = !0;
                    switch (a.type) {
                        case _[44]:
                        case _[12]:
                        case _[21]:
                            1 == b && (e = _[22] == Q.type, u(Q) && (!e || e && Q.DATA.bgcapture) && Q.DATA.handcursor && (c.sprite.style.cursor = _[10]));
                            e = Q.sprite || Q._poly;
                            for (f = 0; e;) {
                                var g = e.kobject;
                                if (g) {
                                    var k = g.DATA.enabled;
                                    0 == d.pointerEvents && (k = u(g));
                                    if (0 == k || 0 < f && 0 == g.children) return;
                                    f++;
                                    e = e.parentNode
                                } else break
                            }
                            for (f = Q.sprite || Q._poly; f;) {
                                if (g = f.kobject) g.enabled && 0 == g.hovering && (g.hovering = !0, rb = g, 0 == g.pressed && g.DATA.onovercrop && C(g, g.DATA.onovercrop), Z.isblocked() || Z.callaction(g.onover, g));
                                else break;
                                f = f.parentNode
                            }
                            break;
                        case _[45]:
                        case _[14]:
                        case _[23]:
                            for (e = (f = a.relatedTarget) ? f.kobject : null; f && null == e;)
                                if (f = f.parentNode) e = f.kobject;
                                else break;
                            for (f = Q.sprite || Q._poly; f;) {
                                if (g = f.kobject) {
                                    for (var k = !1, h = e; h;) {
                                        if (g == h) {
                                            k = !0;
                                            break
                                        }
                                        if (h.sprite && h.sprite.parentNode) h = h.sprite.parentNode.kobject;
                                        else break
                                    }
                                    if (0 == k) 1 == g.hovering && (g.hovering = !1, rb === g && (rb = null), 0 == g.pressed && g.DATA.onovercrop && C(g, g.DATA.crop), Z.callaction(g.onout, g));
                                    else break
                                } else break;
                                f = f.parentNode
                            }
                            break;
                        case _[8]:
                            V.focus(2);
                            bb(_[274]);
                            if (500 < e && 500 > e - Ac) {
                                Ac = 0;
                                break
                            }
                            if (f = 0 == (a.button | 0)) ca.body.style.backupUserSelect = ca.body.style.webkitUserSelect, ca.body.style.webkitUserSelect = "none", H.down = !0, A(a, !0), aa(T, _[2], r, !0), aa(T, _[9], A, !0), c.process_ondown(Q);
                            break;
                        case d.browser.events.touchstart:
                            V.focus(2);
                            bb(_[255]);
                            Ac = e;
                            eb.trackTouch(a);
                            if (eb.isMultiTouch()) break;
                            R = !1;
                            if (f = 0 == (a.button | 0)) A(a, !0), aa(T, d.browser.events.touchend, r, !0), aa(T, d.browser.events.touchmove, A, !0), Q.pressed = !0, Q.DATA.ondowncrop && C(Q, Q.DATA.ondowncrop), Z.isblocked() || Z.callaction(Q.ondown, Q)
                    }
                }

                function v(a, c) {
                    if (a === c) return !1;
                    for (; c && c !== a;) c = c.parentNode;
                    return c === a
                }

                function u(a) {
                    if (a.DATA.enabled) {
                        for (a = a.sprite; a;)
                            if ((a = a.parentNode) && a.kobject && 0 == a.kobject.DATA.enabled) return !1;
                        return !0
                    }
                    return !1
                }

                function n(a) {
                    var b = a.type;
                    if (_[8] != b && b != d.browser.events.touchstart || !Z.isblocked()) {
                        var e = a.target.kobject;
                        _[44] == b ? b = _[12] : _[45] == b && (b = _[14]);
                        null == e && (e = c);
                        if ((_[12] != b && _[14] != b || 4 == a.pointerType || _[19] == a.pointerType) && e) {
                            var e = a.timeStamp,
                                f = c._eP;
                            e != c._eT && (f = 0);
                            if (_[21] == b || _[12] == b) {
                                var g = a.relatedTarget;
                                if (this === g || v(this, g)) return
                            } else if (_[23] == b || _[14] == b)
                                if (g = a.relatedTarget, this === g || v(this, g)) return;
                            _[21] == b && 0 == c.hovering ? f = 0 : _[23] == b && 1 == c.hovering && (f = 0);
                            b = F.enabled;
                            0 == d.pointerEvents && (b = u(c));
                            if (b && (!S || S && F.bgcapture)) 0 == c.children && a.stopPropagation(), 0 == f && (0 == c.children && 1 == a.eventPhase || 2 <= a.eventPhase) && (f = 1, c.jsplugin && c.jsplugin.hittest && (b = V.getMousePos(a.changedTouches ? a.changedTouches[0] : a, c.sprite), c.jsplugin.hittest(b.x * c.imagewidth / c.pixelwidth, b.y * c.imageheight / c.pixelheight) || (f = 2)), 1 == f && (Q = c, p(a), c.capture && (null != c.jsplugin && v(V.controllayer, c.sprite) || 0 == (a.target && "A" == a.target.nodeName) && ta(a), a.stopPropagation())));
                            else if (0 == d.pointerEvents && ca.msElementsFromPoint && 0 == f && 2 == a.eventPhase && (g = a.type, b = _[2] == g || _[23] == g || _[45] == g || _[14] == g || g == d.browser.events.touchend, _[8] == g || _[21] == g || _[44] == g || _[12] == g || g == d.browser.events.touchstart || b) && (g = ca.msElementsFromPoint(a.clientX, a.clientY))) {
                                var h = [],
                                    l, m, n = null,
                                    n = null;
                                for (l = 0; l < g.length; l++)
                                    if (n = g[l], n = n.kobject) h.push(n);
                                    else break;
                                b && k();
                                if (b && W)
                                    for (l = 0; l < W.length; l++) {
                                        var n = W[l],
                                            r = !1;
                                        for (m = 0; m < h.length; m++) h[m] === n && (r = !0);
                                        0 == r && (f = 1, Q = n, p(a, !0), n.capture && (null == c.jsplugin && ta(a), a.stopPropagation()))
                                    }
                                for (l = 0; l < g.length; l++)
                                    if (n = g[l], n = n.kobject) {
                                        if (m = _[22] == n.type, 1 == (u(n) && (!m || m && n.DATA.bgcapture)) || b)
                                            if (f = 1, Q = n, p(a, !0), n.capture) {
                                                null == c.jsplugin && ta(a);
                                                a.stopPropagation();
                                                break
                                            }
                                    } else break;
                                W = h
                            }
                            c._eT = e;
                            c._eP = f
                        }
                    }
                }

                function y() {
                    var a = c.sprite;
                    if (a) {
                        var a = a.style,
                            b = Number(F.bgcolor),
                            e = Number(F.bgalpha),
                            f = ba;
                        isNaN(b) && (b = 0);
                        isNaN(e) && (e = 0);
                        var g = ("" + F.bgborder).split(" "),
                            k = nc(g[0], f, ","),
                            h = g[1] | 0,
                            g = Number(g[2]);
                        isNaN(g) && (g = 1);
                        if (k[0] != ea[0] || k[3] != ea[3]) ea = k, c.requestUpdate();
                        0 == e ? a.background = "none" : a.backgroundColor = ua(b, e);
                        var b = nc(c.bgroundedge, f * F.scale, " "),
                            e = "",
                            l = c.bgshadow;
                        if (l) {
                            var m = ("" + l).split(","),
                                n, p;
                            p = m.length;
                            for (n = 0; n < p; n++) {
                                var r = Qa(m[n]).split(" "),
                                    t = r.length;
                                if (4 < t) {
                                    var u = 5 < t ? 1 : 0;
                                    "" != e && (e += ", ");
                                    e += r[0] * f + "px " + r[1] * f + "px " + r[2] * f + "px " + (u ? r[3] * f : 0) + "px " + ua(r[3 + u] | 0, r[4 + u]) + (6 < t ? " " + r[6] : "")
                                }
                            }
                        }
                        if (d.safari || d.ios) a.webkitMaskImage = F.maskchildren && !l && 0 < b[0] + b[1] + b[2] + b[3] ? _[178] : "";
                        a[Sb] = e;
                        a.borderStyle = "solid";
                        a.borderColor = ua(h, g);
                        a.borderWidth = k.join("px ") + "px";
                        a.borderRadius = b.join("px ") + "px"
                    }
                }

                function I(a) {
                    this.ss = ba;
                    this.onresize = function(c, b) {
                        a.imagewidth = a.pixelwidth / a.DATA.scale;
                        a.imageheight = a.pixelheight / a.DATA.scale;
                        var d = 65536;
                        this.ss != ba && (this.ss = ba, d |= 16384);
                        a.haschanged_flags |= d;
                        return !1
                    }
                }

                function B() {
                    c.loadedurl && (F.reloading = !0);
                    if (c._ready) {
                        var a = na.parsePath(F.url),
                            b = a,
                            d = "";
                        if (!(c.loading && c.loadingurl == a || c.loadedurl == a)) {
                            var e = b.indexOf("?");
                            0 < e && (b = b.slice(0, e));
                            e = b.indexOf("#");
                            0 < e && (b = b.slice(0, e));
                            e = b.lastIndexOf(".");
                            0 < e && (d = G(b.slice(e + 1)));
                            J();
                            K = !1;
                            c.loading = !0;
                            c.loaded = !1;
                            c.loadedurl = null;
                            c.createLoader();
                            if (_[74] == b) S = K = !0, c.loading = !1, c.loaded = !0, c.loadedurl = a, c.createVars([_[530], c.bgcolor ? Number(c.bgcolor) : 0, 16384, _[532], c.bgalpha ? Number(c.bgalpha) : 0, 16384, _[371], c.bgroundedge ? c.bgroundedge : "0", 16384, _[468], c.bgborder ? c.bgborder : "0", 16384, _[469], c.bgshadow ? c.bgshadow : "", 16384, _[426], la(c.bgcapture), 4096]), c.haschanged_flags |= 4096, c.haschanged_flags |= 16384, c.jsplugin = new I(c), z();
                            else if (0 <= a.indexOf(_[330])) {
                                K = !0;
                                c.loading = !1;
                                c.loaded = !0;
                                c.loadedurl = a;
                                var f = new Kf;
                                f.registerplugin(l, c.getfullpath(), c);
                                c.jsplugin = f;
                                0 == c._dyn ? z() : setTimeout(function() {
                                    f.updatehtml();
                                    z()
                                }, 7)
                            } else "js" == d ? (K = !0, c.loadingurl = a, na.loadfile2(a, _[111], function(b) {
                                c.loading = !1;
                                c.loaded = !0;
                                c.loadedurl = a;
                                b = b.data;
                                debugger;
                                if (null != b) {
                                    var d = _[414] + a + _[199];
                                    try {
                                        eval(b + ";")
                                    } catch (e) {
                                        d = _[431] + a + _[409] + e
                                    }
                                    _[15] == typeof krpanoplugin ? (b = new krpanoplugin, b.registerplugin(l, c.getfullpath(), c), c.jsplugin = b, z()) : va(3, d)
                                }
                            })) : "swf" == d ? (c.loading = !1, c.loaded = !1, va(2, c.getfullpath() + _[210] + Wd(a))) : (c.loaded && c.preload && (c._ispreload = !0, c.preload = !1, c.onloaded = null), na.DMcheck(a) ? (c.loading = !0, c.loaded = !1, c.loadingurl = a, c.loader.src = a) : (c.loading = !1, va(3, c.getfullpath() + _[254] + a)))
                        }
                    }
                }

                function C(a, b) {
                    var d = 0,
                        e = 0,
                        f = a.loader;
                    if (f && (d = f.naturalWidth, e = f.naturalHeight, a.ishotspot)) switch (a.stereo) {
                        case "SBS":
                            d >>= 1;
                            break;
                        case "TB":
                            e >>= 1
                    }
                    b && (b = String(b).split("|"), 4 == b.length && (d = b[2], e = b[3]));
                    if (null == a.jsplugin && 0 == a._isNE()) {
                        a.imagewidth = d;
                        a.imageheight = e;
                        var f = a._gOSF(),
                            g = a.haschanged_flags;
                        f & 1 && 0 == (g & 32) && (a.DATA.width = String(d));
                        f & 2 && 0 == (g & 64) && (a.DATA.height = String(e))
                    }
                    c.GL && ($a = !0);
                    c.requestUpdate(ac)
                }

                function z() {
                    1 != c._destroyed && (F.reloading = !1, c.loading = !1, c.loaded = !0, 0 == K && (c.loadedurl = c.loadingurl), c.jsplugin ? h() : c.haschanged_flags |= 2, $a = !0)
                }

                function h() {
                    c.sprite && (0 == K ? c.sprite.style.backgroundImage = 'url("' + c.loader.src + '")' : c.sprite.style.background = "none");
                    C(c, F.crop);
                    c.requestUpdate(ac);
                    P = !0;
                    0 == K && null == c.parent && null == c._childs && (c._use_css_scale = !0);
                    c.ishotspot || c.updatepluginpos();
                    Z.callaction(null != c.altonloaded ? c.altonloaded : c.onloaded, c, !0)
                }
                var c = this;
                c.prototype = Ib;
                this.prototype.call(this);
                var F = c.DATA = {};
                c._type = _[62];
                c.layer = c.plugin = new ub(Qb);
                c.haschanged_flags = 0;
                c.renderer_flags = 0;
                var E = new If,
                    N = new Jf;
                c.createVars = function(c) {
                    var b, d = c.length;
                    for (b = 0; b < d; b += 3) a(c[b], c[b + 1], c[b + 2])
                };
                var X = 0,
                    O = 3,
                    R = !1,
                    K = !1,
                    S = !1,
                    ea = [0, 0, 0, 0],
                    P = !1,
                    U = null,
                    Q = null,
                    W = null,
                    Y = null;
                c._isNE = function() {
                    return K
                };
                c._gOSF = function() {
                    return O
                };
                c.haveUserWidth = function() {
                    return 0 == (O & 1) || 0 != (c.haschanged_flags & 32)
                };
                c.haveUserHeight = function() {
                    return 0 == (O & 2) || 0 != (c.haschanged_flags & 64)
                };
                c.__defineGetter__("type", function() {
                    return _[74] == c.url ? _[22] : _[96]
                });
                c.__defineSetter__("type", function(a) {
                    _[22] == G(a) && (c.url = _[74])
                });
                c.sprite = null;
                c.loader = null;
                c.jsplugin = null;
                c.ishotspot = !1;
                c._ready = !1;
                c._dyn = !1;
                c._use_css_scale = !1;
                c._hszscale = 1;
                c._eT = 0;
                c._eP = 0;
                c._pCD = !1;
                c._deepscale = .5;
                c._zdeep = 0;
                c._childs = null;
                c._parent = null;
                c.__defineGetter__(_[160], function() {
                    return c._parent
                });
                c.__defineSetter__(_[160], function(a) {
                    if (null == a || "" == a || "null" == G(a)) a = null;
                    c.sprite ? g(a) : c._parent = a
                });
                c.MX = Ka();
                c.GL = null;
                c.imagewidth = 0;
                c.imageheight = 0;
                c.forceresize = !1;
                c.pixelwidth = 0;
                c.pixelheight = 0;
                c.pixelx = 0;
                c.pixely = 0;
                c._pxw = 0;
                c._pxh = 0;
                c._finalxscale = 1;
                c._finalyscale = 1;
                c._ispreload = !1;
                F.reloading = !1;
                c.loading = !1;
                c.loaded = !1;
                c.loadingurl = null;
                c.loadedurl = null;
                c.pressed = !1;
                c.hovering = !1;
                c.preload = !1;
                c.keep = !1;
                c.style = null;
                c.capture = !0;
                c.children = !0;
                c.accuracy = 0;
                c.onloaded = null;
                c.altonloaded = null;
                c.maxwidth = 0;
                c.minwidth = 0;
                c.maxheight = 0;
                c.minheight = 0;
                c.onover = null;
                c.onhover = null;
                c.onout = null;
                c.onclick = null;
                c.ondown = null;
                c.onup = null;
                c.onloaded = null;
                c.createVars(["url", null, 1, _[16], !0, 4, _[64], null, 32, _[17], null, 64, "scale", 1, 16, _[568], 0, 8, "x", null, 512, "y", null, 512, "ox", null, 256, "oy", null, 256, _[66], null, 1024, "edge", null, 1024, _[567], null, 2048, _[335], !1, 32768, _[310], !1, 65536, "alpha", 1, 8192, _[438], !1, 8192, _[398], null, 0, _[401], null, 0, _[552], !0, 4096, _[404], !0, 4096]);
                F.crop = null;
                c.__defineGetter__("crop", function() {
                    return F.crop
                });
                c.__defineSetter__("crop", function(a) {
                    a != F.crop && (F.crop = a, c.pressed && F.ondowncrop ? a = F.ondowncrop : c.hovering && F.onovercrop && (a = F.onovercrop), C(c, a))
                });
                c.getrenderer = function() {
                    return N
                };
                c.getparsed = function() {
                    return E
                };
                c.API_calcsize = function(a) {
                    a = c.ishotspot;
                    var b = ba,
                        d = Ta,
                        e = Ea;
                    a && (b = 1, d = e = 1E3);
                    var f = c.imagewidth,
                        g = c.imageheight,
                        k = E.flags,
                        h = F.scale,
                        l = E.w,
                        m = E.h;
                    0 == (k & 3) ? l = f : 2 == (k & 3) && (l *= d / b / 1);
                    0 == (k & 12) ? m = g : 8 == (k & 12) && (m *= e / b / 1);
                    l *= b;
                    m *= b;
                    0 > l && (l = d / 1 + l, 0 > l && (l = 0));
                    0 > m && (m = e / 1 + m, 0 > m && (m = 0));
                    3 == (k & 3) ? l = 0 != g ? m * f / g : 0 : 12 == (k & 12) && (m = 0 != f ? l * g / f : 0);
                    0 < c.maxwidth && l > b * c.maxwidth && (l = b * c.maxwidth);
                    0 < c.minwidth && l < b * c.minwidth && (l = b * c.minwidth);
                    0 < c.maxheight && m > b * c.maxheight && (m = b * c.maxheight);
                    0 < c.minheight && m < b * c.minheight && (m = b * c.minheight);
                    l = l * h * 1;
                    m = m * h * 1;
                    a || 0 != c.accuracy || (l = bc(l), m = bc(m));
                    N.w = l;
                    N.h = m;
                    return N
                };
                c.loadstyle = function(a) {
                    Z.assignstyle(c.getfullpath(), a)
                };
                c.getmouse = function(a) {
                    var b = 0,
                        d = 0;
                    if (d = c.sprite) {
                        var e = V.controllayer,
                            f = e.getBoundingClientRect(),
                            g = d.getBoundingClientRect(),
                            b = H.x - g.left - d.clientLeft + f.left + e.clientLeft,
                            d = H.y - g.top - d.clientTop + f.top + e.clientTop;
                        a && (b = b * c.imagewidth / c.pixelwidth, d = d * c.imageheight / c.pixelheight);
                        return {
                            x: b,
                            y: d
                        }
                    }
                    return null
                };
                c._assignEvents = function(a, b) {
                    b || (b = "add");
                    eb.touch && (xb(b, a, d.browser.events.touchstart, n, !0), xb(b, a, d.browser.events.touchstart, n, !1));
                    eb.mouse && (xb(b, a, _[8], n, !0), xb(b, a, _[8], n, !1));
                    d.desktop && (eb.mouse || d.ie) && (0 == eb.mouse && d.ie ? (xb(b, a, d.browser.events.pointerover, n, !0), xb(b, a, d.browser.events.pointerover, n, !1), xb(b, a, d.browser.events.pointerout, n, !0), xb(b, a, d.browser.events.pointerout, n, !1)) : (xb(b, a, _[21], n, !0), xb(b, a, _[21], n, !1), xb(b, a, _[23], n, !0), xb(b, a, _[23], n, !1)))
                };
                c.createLoader = function() {
                    var a = c.loader;
                    a && "" != a.src && (c.destroyLoader(), a = null);
                    a || (a = Fa(1), a.kobject = c, aa(a, _[41], w, !0), aa(a, "load", z, !1), c.loader = a)
                };
                c.destroyLoader = function() {
                    var a = c.loader;
                    a && (a.kobject = null, ia(a, _[41], w, !0), ia(a, "load", z, !1), c.loader = null)
                };
                c.createSprite = function() {
                    if (!c.sprite) {
                        var a = Fa(),
                            d = a.style;
                        a.kobject = c;
                        d.display = "none";
                        d.position = _[0];
                        Rc && (d.outline = _[98]);
                        d.zIndex = X;
                        c.sprite = a;
                        c._assignEvents(a);
                        f();
                        b();
                        t();
                        c.haschanged_flags |= 4096;
                        he++
                    }
                };
                c.destroySprite = function() {
                    var a = c.sprite;
                    a && (a.parentNode && a.parentNode.removeChild(a), a.style.background = "none", c._assignEvents(a, _[555]), a.kobject = null, c.sprite = null, he--)
                };
                c.create = function() {
                    c._pCD = !0;
                    X = c.ishotspot ? 2001 : 3001;
                    c.alturl && (c.url = c.alturl, delete c.alturl);
                    c.altscale && (c.scale = c.altscale, delete c.altscale);
                    c.createLoader();
                    c.ishotspot || c.createSprite();
                    var a = c._parent;
                    a && (c._parent = null, g(a));
                    c._ready = !0
                };
                c.destroy = function() {
                    rb === c && (rb = null);
                    J();
                    c.destroyLoader();
                    c.jsplugin = null;
                    c.loaded = !1;
                    c._destroyed = !0;
                    c.parent = null;
                    var a = c._childs;
                    if (a) {
                        var b, d, a = a.slice();
                        d = a.length;
                        for (b = 0; b < d; b++) a[b].parent = null;
                        c._childs = null
                    }
                    c.destroySprite()
                };
                c.getfullpath = function() {
                    return c._type + "[" + c.name + "]"
                };
                c.changeorigin = function() {
                    var a = arguments,
                        b = null,
                        d = null;
                    if (0 < a.length) {
                        var e = null,
                            f = 0,
                            g = 0,
                            k = 0,
                            h = 0,
                            l = ba,
                            n = Ta / l,
                            p = Ea / l,
                            r = c._parent;
                        r && (r = m(r)) && (0 == c._use_css_scale ? (n = r._pxw * l, p = r._pxh * l) : (n = r.imagewidth * l, p = r.imageheight * l));
                        l = c.imagewidth;
                        r = c.imageheight;
                        b = 0;
                        e = String(F.width);
                        "" != e && null != e && (0 < e.indexOf("%") ? l = parseFloat(e) / 100 * n : "prop" == e.toLowerCase() ? b = 1 : l = e);
                        e = String(F.height);
                        "" != e && null != e && (0 < e.indexOf("%") ? r = parseFloat(e) / 100 * p : "prop" == e.toLowerCase() ? b = 2 : r = e);
                        1 == b ? l = r * c.imagewidth / c.imageheight : 2 == b && (r = l * c.imageheight / c.imagewidth);
                        b = d = G(a[0]);
                        1 < a.length && (d = G(a[1]));
                        var a = String(F.align),
                            t = F.edge ? G(F.edge) : "null";
                        if ("null" == t || _[557] == t) t = a;
                        (e = String(F.x)) && (f = 0 < e.indexOf("%") ? parseFloat(e) / 100 * n : parseFloat(e));
                        isNaN(f) && (f = 0);
                        (e = String(F.y)) && (g = 0 < e.indexOf("%") ? parseFloat(e) / 100 * p : parseFloat(e));
                        isNaN(g) && (g = 0);
                        if (e = a) k = 0 <= e.indexOf("left") ? 0 + f : 0 <= e.indexOf(_[3]) ? n - f : n / 2 + f, h = 0 <= e.indexOf("top") ? 0 + g : 0 <= e.indexOf(_[4]) ? p - g : p / 2 + g;
                        1 != F.scale && (l *= F.scale, r *= F.scale);
                        k = 0 <= t.indexOf("left") ? k + 0 : 0 <= t.indexOf(_[3]) ? k + -l : k + -l / 2;
                        h = 0 <= t.indexOf("top") ? h + 0 : 0 <= t.indexOf(_[4]) ? h + -r : h + -r / 2;
                        e = a = 0;
                        a = 0 <= b.indexOf("left") ? 0 + f : 0 <= b.indexOf(_[3]) ? n - f : n / 2 + f;
                        e = 0 <= b.indexOf("top") ? 0 + g : 0 <= b.indexOf(_[4]) ? p - g : p / 2 + g;
                        a = 0 <= d.indexOf("left") ? a + 0 : 0 <= d.indexOf(_[3]) ? a + -l : a + -l / 2;
                        e = 0 <= d.indexOf("top") ? e + 0 : 0 <= d.indexOf(_[4]) ? e + -r : e + -r / 2;
                        c.align = b;
                        c.edge = d;
                        0 <= b.indexOf(_[3]) ? c.x = String(f + a - k) : c.x = String(f - a + k);
                        0 <= b.indexOf(_[4]) ? c.y = String(g + e - h) : c.y = String(g - e + h)
                    }
                };
                c.requestUpdate = function(a) {
                    c.poschanged = !0;
                    a && (c.renderer_flags |= a);
                    c.GL && ($a = !0)
                };
                c.resetsize = function() {
                    if (c.loaded) {
                        var a = c.imagewidth,
                            b = c.imageheight;
                        F.width = String(a);
                        F.height = String(b);
                        O = 3;
                        var d = F.crop;
                        c.pressed && F.ondowncrop ? d = F.ondowncrop : c.hovering && F.onovercrop && (d = F.onovercrop);
                        d && (C(c, d), a = c.imagewidth, b = c.imageheight);
                        E.w = a;
                        E.h = b;
                        E.flags = E.flags & -16 | 5;
                        c.requestUpdate(ac)
                    }
                };
                c.registersize = function(a, b) {
                    null != a && (F.width = String(a), E.w = Number(a), E.flags = E.flags & -4 | 1);
                    null != b && (F.height = String(b), E.h = Number(b), E.flags = E.flags & -13 | 4);
                    c.requestUpdate(ac)
                };
                c.registercontentsize = function(a, b) {
                    null != a && (c.ishotspot && "SBS" == c.stereo && (a *= .5), c.imagewidth = Number(a), O & 1 && 0 == (c.haschanged_flags & 32) && (F.width = String(a), E.w = Number(a), E.flags = E.flags & -4 | 1));
                    null != b && (c.ishotspot && "TB" == c.stereo && (b *= .5), c.imageheight = Number(b), O & 2 && 0 == (c.haschanged_flags & 64) && (F.height = String(b), E.h = Number(b), E.flags = E.flags & -13 | 4));
                    c.requestUpdate(ac)
                };
                c.process_ondown = function(a) {
                    H.down = !0;
                    H.downLayer = !0;
                    bb(_[349]);
                    a || (a = c);
                    R = !1;
                    a.pressed = !0;
                    a.DATA.ondowncrop && C(a, a.DATA.ondowncrop);
                    Z.isblocked() || Z.callaction(a.ondown, a)
                };
                c.process_onup = function(a, b) {
                    H.downLayer = !1;
                    bb(_[486]);
                    a || (a = c);
                    if (a.pressed) {
                        a.pressed = !1;
                        if (a.DATA.ondowncrop || a.DATA.onovercrop) a.hovering && a.DATA.onovercrop ? C(a, a.DATA.onovercrop) : C(a, a.DATA.crop);
                        Z.callaction(a.onup, a);
                        b || Z.isblocked() || Z.callaction(a.onclick, a)
                    }
                };
                c.updateCrop = C;
                c.processUpdates = function() {
                    if (c.haschanged_flags & 96) {
                        var a = c.haschanged_flags;
                        if (a & 32) {
                            var d = F.width,
                                e = 0,
                                g = _[1] === typeof d,
                                l = parseFloat(d);
                            0 == 0 * l ? (O &= -2, g && 0 < d.indexOf("%") ? (l /= 100, e = 2) : e = 1) : g && "prop" == d.toLowerCase() ? (l = 0, e = 3, O &= -2) : (F.width = null, O |= 1, l = 0);
                            E.w = l;
                            E.flags = E.flags & -4 | e
                        }
                        a & 64 && (a = F.height, d = 0, e = _[1] === typeof a, g = parseFloat(a), 0 == 0 * g ? (O &= -3, e && 0 < a.indexOf("%") ? (g /= 100, d = 8) : d = 4) : e && "prop" == a.toLowerCase() ? (g = 0, d = 12, O &= -3) : (F.height = null, O |= 2, g = 0), E.h = g, E.flags = E.flags & -13 | d);
                        c.requestUpdate(ac);
                        S && y();
                        c.haschanged_flags &= -97
                    }
                    if (c.haschanged_flags & 1) {
                        c.haschanged_flags &= -2;
                        a = F.url;
                        if ("" == a || "null" == a) F.url = a = null;
                        null != a ? B() : (J(), c.jsplugin = null, c.loadedurl = null, c.loadingurl = null, c.loading = !1, c.loaded = !1)
                    }
                    c.haschanged_flags & 2 && (c.haschanged_flags &= -3, h());
                    c.haschanged_flags & 4 && (c.haschanged_flags &= -5, (a = F.visible) && c.ishotspot && ($a = !0), 0 == a && rb === c && (rb = null), c._poly && (c._poly.style.visibility = a ? _[16] : _[7]), c.sprite && (d = !0, c.jsplugin && c.jsplugin.onvisibilitychanged && (d = !0 !== c.jsplugin.onvisibilitychanged(a)), d && (0 == a ? c.sprite.style.display = "none" : c.requestUpdate())));
                    c.haschanged_flags & 16 && (c.haschanged_flags &= -17, c.requestUpdate());
                    c.haschanged_flags & 8 && (c.haschanged_flags &= -9, c.requestUpdate());
                    if (c.haschanged_flags & 256) {
                        c.haschanged_flags &= -257;
                        var a = F.ox,
                            d = F.oy,
                            e = _[1] === typeof a,
                            g = _[1] === typeof d,
                            l = 0,
                            m = parseFloat(a),
                            n = parseFloat(d);
                        0 == 0 * m ? e && 0 < a.indexOf("%") && (m /= 100, l |= 64) : (m = 0, F.ox = null);
                        0 == 0 * n ? g && 0 < d.indexOf("%") && (n /= 100, l |= 128) : (n = 0, F.oy = null);
                        E.ox = m;
                        E.oy = n;
                        E.flags = E.flags & -193 | l;
                        c.requestUpdate(2)
                    }
                    c.haschanged_flags & 512 && (c.haschanged_flags &= -513, a = F.x, d = F.y, e = _[1] === typeof a, g = _[1] === typeof d, l = 0, m = parseFloat(a), n = parseFloat(d), 0 == 0 * m ? e && 0 < a.indexOf("%") && (m /= 100, l |= 16) : (m = 0, F.x = null), 0 == 0 * n ? g && 0 < d.indexOf("%") && (n /= 100, l |= 32) : (n = 0, F.y = null), E.x = m, E.y = n, E.flags = E.flags & -49 | l, c.requestUpdate(2));
                    if (c.haschanged_flags & 1024) {
                        c.haschanged_flags &= -1025;
                        a = F.align;
                        d = F.edge;
                        a && "" != a || (a = _[84]);
                        d && "" != d || (d = a);
                        var a = G(a),
                            d = G(d),
                            g = e = .5,
                            m = l = 1,
                            p = n = .5;
                        0 <= a.indexOf("left") ? e = 0 : 0 <= a.indexOf(_[3]) && (e = 1, l = -1);
                        0 <= a.indexOf("top") ? g = 0 : 0 <= a.indexOf(_[4]) && (g = 1, m = -1);
                        0 <= d.indexOf("left") ? n = 0 : 0 <= d.indexOf(_[3]) && (n = 1);
                        0 <= d.indexOf("top") ? p = 0 : 0 <= d.indexOf(_[4]) && (p = 1);
                        E.ax = e;
                        E.ay = g;
                        E.asx = l;
                        E.asy = m;
                        E.ex = n;
                        E.ey = p;
                        c.requestUpdate(2)
                    }
                    c.haschanged_flags & 2048 && (c.haschanged_flags &= -2049, t());
                    c.haschanged_flags & 4096 && (c.haschanged_flags &= -4097, k());
                    c.haschanged_flags & 8192 && (c.haschanged_flags &= -8193, b());
                    c.haschanged_flags & 32768 && (c.haschanged_flags &= -32769, f());
                    c.haschanged_flags & 16384 && (c.haschanged_flags &= -16385, y());
                    c.haschanged_flags & 65536 && (c.haschanged_flags &= -65537, P = !0, c.requestUpdate());
                    c.ishotspot && c.processUpdatesHS()
                };
                c.updatepluginpos = c.updatepos = function(a) {
                    if (!(1 > hb) && (a = c.sprite)) {
                        var b = ba,
                            e = Ta,
                            f = Ea;
                        0 != c.haschanged_flags && c.processUpdates();
                        var g = c.loader;
                        if (g && 0 == c.loaded) a.style.display = "none";
                        else if (c.poschanged = !1, a && (g || 0 != K)) {
                            K && (g = null);
                            var k = c.ishotspot,
                                h = F.scale,
                                l = c._use_css_scale,
                                n = c.imagewidth,
                                p = c.imageheight;
                            if (g && (0 >= n || 0 >= p)) a.style.display = "none";
                            else {
                                var r = !1,
                                    t = F.crop;
                                c.pressed && F.ondowncrop ? t = F.ondowncrop : c.hovering && F.onovercrop && (t = F.onovercrop);
                                t && (t = String(t).split("|"), 4 == t.length ? (t[0] |= 0, t[1] |= 0, t[2] |= 0, t[3] |= 0) : t = null);
                                var u = c.scale9grid;
                                u && (u = String(u).split("|"), 4 <= u.length ? (u[0] |= 0, u[1] |= 0, u[2] |= 0, u[3] |= 0, l = c._use_css_scale = !1, F.scalechildren = !1) : u = null);
                                k && c.distorted && (b = 1, e = f = 1E3);
                                var v = 1,
                                    x = 1,
                                    w = c._parent,
                                    y = !0;
                                if (w) {
                                    var A = m(w);
                                    A ? (A.poschanged && A.updatepos(c.getfullpath() + _[551]), 0 == l ? (e = A._pxw * b, f = A._pxh * b) : (e = A.imagewidth * b, f = A.imageheight * b), A.DATA.scalechildren ? (v = 0 != A.imagewidth ? e / b / A.imagewidth : 1, x = 0 != A.imageheight ? f / b / A.imageheight : 1) : (v *= A._finalxscale, x *= A._finalyscale), 0 == A.loaded && (y = !1, a.style.display = "none")) : va(3, 'no parent "' + w + '" found')
                                }
                                var B = E.flags,
                                    z = E.w,
                                    C = E.h,
                                    G = E.x,
                                    I = E.y,
                                    w = E.ox,
                                    H = E.oy;
                                0 == (B & 3) ? z = n : 2 == (B & 3) && (z *= e / b / v);
                                0 == (B & 12) ? C = p : 8 == (B & 12) && (C *= f / b / x);
                                z *= b;
                                C *= b;
                                0 > z && (z = e / v + z, 0 > z && (z = 0));
                                0 > C && (C = f / x + C, 0 > C && (C = 0));
                                3 == (B & 3) ? z = 0 != p ? C * n / p : 0 : 12 == (B & 12) && (C = 0 != n ? z * p / n : 0);
                                0 < c.maxwidth && z > b * c.maxwidth && (z = b * c.maxwidth);
                                0 < c.minwidth && z < b * c.minwidth && (z = b * c.minwidth);
                                0 < c.maxheight && C > b * c.maxheight && (C = b * c.maxheight);
                                0 < c.minheight && C < b * c.minheight && (C = b * c.minheight);
                                z = z * v * h;
                                C = C * x * h;
                                k || 0 != c.accuracy || (z = bc(z), C = bc(C));
                                G *= B & 16 ? e : b * v;
                                I *= B & 32 ? f : b * x;
                                h = c._hszscale;
                                w *= B & 64 ? z * h : v * b;
                                H *= B & 128 ? C * h : x * b;
                                c._oxpix = w;
                                c._oypix = H;
                                var R = 0 != n ? z / n : 0,
                                    O = 0 != p ? C / p : 0,
                                    h = R,
                                    B = O,
                                    J = z / b,
                                    N = C / b;
                                if (J != c._pxw || N != c._pxh) c._pxw = J, c._pxh = N, c.pixelwidth = J / v, c.pixelheight = N / x, r = !0;
                                F.scalechildren ? (c._finalxscale = R, c._finalyscale = O) : (c._finalxscale = v, c._finalyscale = x);
                                l ? (a.style.width = n + "px", a.style.height = p + "px", R = O = 1) : (a.style.width = z + "px", a.style.height = C + "px");
                                if (g)
                                    if (u) {
                                        var R = u,
                                            O = z,
                                            J = C,
                                            Q = t,
                                            t = c.sprite,
                                            n = c.loader,
                                            X, N = ba;
                                        5 == R.length && (N *= Number(R[4]));
                                        X = n.naturalWidth;
                                        g = n.naturalHeight;
                                        null == Q && (Q = [0, 0, X, g]);
                                        n = 'url("' + n.src + '")';
                                        if (null == Y)
                                            for (Y = Array(9), u = 0; 9 > u; u++) p = Fa(), p.kobject = c, p.imgurl = null, p.style.position = _[0], p.style.overflow = _[7], Y[u] = p, t.appendChild(p);
                                        for (var u = [Q[0] + 0, Q[0] + R[0], Q[0] + R[0] + R[2], Q[0] + Q[2]], v = [Q[1] + 0, Q[1] + R[1], Q[1] + R[1] + R[3], Q[1] + Q[3]], x = [R[0], R[2], Q[2] - R[0] - R[2]], R = [R[1], R[3], Q[3] - R[1] - R[3]], O = [x[0] * N | 0, O - ((x[0] + x[2]) * N | 0), x[2] * N | 0], S = [R[0] * N | 0, J - ((R[0] + R[2]) * N | 0), R[2] * N | 0], U = [0, O[0], O[0] + O[1]], V = [0, S[0], S[0] + S[1]], W, Ba, Q = 0; 3 > Q; Q++)
                                            for (N = 0; 3 > N; N++) p = Y[3 * Q + N], J = p.style, W = 0 != x[N] ? O[N] / x[N] : 0, Ba = 0 != R[Q] ? S[Q] / R[Q] : 0, p.imgurl != n && (p.imgurl = n, J.backgroundImage = n), p = d.mac && d.firefox ? T.devicePixelRatio : 1, J[Qd] = (X * W * p | 0) / p + "px " + (g * Ba * p | 0) / p + "px", J.backgroundPosition = (-u[N] * W * p | 0) / p + "px " + (-v[Q] * Ba * p | 0) / p + "px", J.left = U[N] + "px", J.top = V[Q] + "px", J.width = O[N] + "px", J.height = S[Q] + "px";
                                        t.style.background = "none"
                                    } else {
                                        if (Y && (n = c.sprite)) {
                                            try {
                                                for (X = 0; 9 > X; X++) Y[X].kobject = null, n.removeChild(Y[X])
                                            } catch (Z) {}
                                            Y = null;
                                            c.loader && (n.style.backgroundImage = 'url("' + c.loader.src + '")')
                                        }
                                        a.style.backgroundPosition = t ? -t[0] * R + "px " + -t[1] * O + "px" : "0 0";
                                        a.style[Qd] = g.naturalWidth * R + "px " + g.naturalHeight * O + "px"
                                    }
                                c.jsplugin && c.jsplugin.onresize && (c._pxw != c.imagewidth || c._pxh != c.imageheight || c.forceresize) && (t = [c.imagewidth, c.imageheight], c.imagewidth = 0 < c._pxw ? c._pxw : 1, c.imageheight = 0 < c._pxh ? c._pxh : 1, c.forceresize = !1, !0 === c.jsplugin.onresize(c._pxw, c._pxh) && (c.imagewidth = t[0], c.imageheight = t[1]));
                                n = "";
                                X = t = 0;
                                0 == k && (k = E.ex * -z, g = E.ey * -C, t = E.ax * e + E.asx * G + k, X = E.ay * f + E.asy * I + g, c.pixelx = (t + w) / b, c.pixely = (X + H) / b, t -= ea[3], X -= ea[0], 0 == c.accuracy && (t = bc(t), X = bc(X)), b = z / 2 + k, e = C / 2 + g, l && (f = l = 1, C = c.imagewidth / 2, z = c.imageheight / 2, I = G = 0, A && 0 == A.DATA.scalechildren && (l /= A.pixelwidth / A.imagewidth, f /= A.pixelheight / A.imageheight, G = -k * (1 - l), I = -g * (1 - f)), n = _[78] + (G - C) + "px," + (I - z) + _[418] + h * l + "," + B * f + _[345] + C + "px," + z + "px) ", 0 != h && (b /= h, w /= h), 0 != B && (e /= B, H /= B)), n = _[78] + t + "px," + X + "px) " + n + _[78] + -b + "px," + -e + _[370] + F.rotate + _[262] + (b + w) + "px," + (e + H) + "px)", yc && 2 > xc && !0 !== d.opera ? n = _[194] + n : d.androidstock && (n = _[217] + n), qb ? a.style[qb] = n : (a.style.left = t + "px", a.style.top = X + "px"), A = F.visible && y ? "" : "none", A != a.style.display && (a.style.display = A));
                                if (r || P) {
                                    if (a = c._childs)
                                        for (A = a.length, r = 0; r < A; r++) a[r].updatepos(c.getfullpath() + _[527] + r + "]");
                                    P = !1
                                }
                            }
                        }
                    }
                }
            },
            Kf = function() {
                function a(a, c, d, e) {
                    r.registerattribute(c, d, function(d) {
                        A[c] != d && (A[c] = d, null != e ? e(c, d) : b(a))
                    }, function() {
                        return A[c]
                    })
                }

                function b(a) {
                    v |= a;
                    r && null == p && (p = setTimeout(l, 0))
                }

                function l() {
                    p = null;
                    if (r) {
                        var a = !1;
                        2 == v && (a = g());
                        0 == a && t();
                        v = 0
                    }
                }

                function f(a) {
                    a && 0 == a.indexOf(_[95]) && ((a = S("data[" + a.slice(5) + _[79])) || (a = ""));
                    return a
                }

                function e(a) {
                    if (a && a.parentNode) try {
                        a.parentNode.removeChild(a)
                    } catch (b) {}
                }

                function k(a) {
                    a && (a.style.left = _[143], a.style.visibility = _[7], V.viewerlayer.appendChild(a), a.childNodes[0].getBoundingClientRect())
                }

                function m(a) {
                    a.ontouchend = function() {
                        a.click()
                    }
                }

                function g() {
                    var a = !1;
                    if (J) {
                        var b = J.childNodes[0];
                        if (b) {
                            var a = b.style,
                                b = la(A.background),
                                c = la(A.border),
                                e = parseInt(A.backgroundcolor),
                                f = parseFloat(A.backgroundalpha);
                            isNaN(f) && (f = 1);
                            var g = parseFloat(A.borderwidth);
                            isNaN(g) && (g = 1);
                            var k = A.bordercolor,
                                k = k ? parseInt(k) : 0,
                                h = parseFloat(A.borderalpha);
                            isNaN(h) && (h = 1);
                            var l = Number(A.shadow);
                            isNaN(l) && (l = 0);
                            var m = Number(A.textshadow);
                            isNaN(m) && (m = 0);
                            var n = d.firefox ? .78 : .8,
                                p = A.shadowangle * W,
                                r = A.textshadowangle * W;
                            a.backgroundColor = b ? ua(e, f) : "";
                            a.borderColor = c && 0 < g ? ua(k, f * h) : "";
                            a.borderRadius = 0 < B[0] + B[1] + B[2] + B[3] ? B.join("px ") + "px" : "";
                            a[Sb] = 0 < l ? Math.round(l * Math.cos(p)) + "px " + Math.round(l * Math.sin(p)) + "px " + n * A.shadowrange + "px " + ua(A.shadowcolor, f * A.shadowalpha) : "";
                            a.textShadow = 0 < m ? Math.round(m * Math.cos(r)) + "px " + Math.round(m * Math.sin(r)) + "px " + n * A.textshadowrange + "px " + ua(A.textshadowcolor, f * A.textshadowalpha) : "";
                            a = !0
                        }
                    }
                    return a
                }

                function t() {
                    if (r) {
                        p && (clearTimeout(p), p = null);
                        0 != r.haschanged_flags && r.processUpdates();
                        var a = 2 == u || 1 == u && 0 == r.haveUserWidth(),
                            b = 2 == n || 1 == n && 0 == r.haveUserHeight(),
                            e = A.html,
                            h = A.css,
                            e = e ? f(e) : "",
                            h = h ? f(h) : "";
                        la(A.background);
                        var l = la(A.border),
                            x = parseFloat(A.borderwidth);
                        isNaN(x) && (x = 1);
                        var e = ue(e),
                            h = h.split("0x").join("#"),
                            w = h.split("}").join("{").split("{");
                        if (1 < w.length) {
                            for (var B = [], h = 1; h < w.length; h += 2) {
                                var E = Qa(w[h - 1]),
                                    q = w[h],
                                    D = "p" == G(E) ? "div" : E,
                                    e = e.split("<" + E).join("<" + D + _[495] + q + "' "),
                                    e = e.split("</" + E + ">").join("</" + D + ">");
                                B.push(w[h])
                            }
                            h = ""
                        }
                        e = _[223] + I[0] + "px " + I[1] + "px " + I[2] + "px " + I[3] + "px;" + h + "'>" + e + _[88];
                        1 == A.vcenter && 0 == b && (e = "<table style='width:100%;height:100%;border-collapse:collapse;text-decoration:inherit;'><tr style='vertical-align:middle;'><td style='padding:0;'>" + e + _[234]);
                        e = e.split("<p").join(_[173]);
                        e = e.split("</p>").join(_[88]);
                        h = _[235];
                        if (1 == a || 0 == la(A.wordwrap)) h += _[226];
                        0 == b && (h += _[358]);
                        C = 1;
                        l && 0 < x ? (C = x * ba, h += _[521] + Math.ceil(x) + _[209]) : C = 0;
                        0 == a && (h += _[584] + r.imagewidth + _[224]);
                        e = unescape(e);
                        e = '<div style="' + h + '">' + e + _[88];
                        J && J.parentNode == r.sprite && (N = J, J = null);
                        null == J && (J = Fa(), O = J.style, la(A.selectable) && (O.webkitUserSelect = O.MozUserSelect = O.msUserSelect = O.oUserSelect = O.userSelect = "text", O.cursor = "text"), O.position = _[0], O.left = O.top = -C + "px", _[5] == r._type && 1 == r.DATA.distorted ? (O.width = "100%", O.height = "100%", O[qb] = "") : (O[Tc] = "0 0", O[qb] = _[151] + ba + ")", O.width = 100 / ba + "%", O.height = 100 / ba + "%"), O.fontSize = "12px", O.fontFamily = "Arial", O.lineHeight = _[58]);
                        J.innerHTML = e;
                        g();
                        a = r.interactivecontent;
                        if (b = J.getElementsByTagName("a"))
                            if (e = b.length, 0 < e)
                                for (a = !0, h = 0; h < e; h++)
                                    if (l = b[h]) x = "" + l.href, _[587] == x.toLowerCase().slice(0, 6) && (l.href = _[183] + V.viewerlayer.id + _[452] + x.slice(6).split("'").join('"') + "','" + r.getfullpath() + "');"), d.touch && m(l);
                        0 < J.getElementsByTagName(_[590]).length && (a = !0);
                        J.style.pointerEvents = a ? "auto" : "none";
                        _[5] == r._type && (r.forceupdate = !0);
                        k(J);
                        y = !1;
                        r.loaded = !0;
                        h = r.DATA.scalechildren;
                        r.DATA.scalechildren = !h;
                        r.scalechildren = h;
                        c = 0;
                        F = hb;
                        null == z && (z = setTimeout(H, 10));
                        v = 0
                    }
                }

                function H() {
                    z = null;
                    y = !1;
                    if (r && J) {
                        var a = 2 == u || 1 == u && 0 == r.haveUserWidth(),
                            b = 2 == n || 1 == n && 0 == r.haveUserHeight();
                        h = !0;
                        var d = J && J.parentNode == r.sprite,
                            f = 0,
                            g = 0;
                        if (0 == a && 0 == b) g = r.imageheight, 1 > g && (g = 1);
                        else {
                            try {
                                if (f = J.childNodes[0].clientWidth, g = J.childNodes[0].clientHeight, 0 == f || 3 > g) g = 0
                            } catch (l) {}
                            if (1 > g && d && J.parentNode && 1 > J.parentNode.clientHeight) {
                                k(J);
                                c = 0;
                                F = hb;
                                null == z && (z = setTimeout(H, 10));
                                h = !1;
                                return
                            }
                        }
                        if (0 < g) {
                            if (d = r.DATA.enabled, r.DATA.enabled = !d, r.enabled = d, O.top = O.left = -C + "px", y = !0, N && N.parentNode == r.sprite ? (O.visibility = _[16], r.sprite.replaceChild(J, N), N = null) : (e(N), N = null, O.visibility = _[16], r.sprite.appendChild(J)), 0 != a || 0 != b)
                                if (f = a ? Math.round(f) : r.imagewidth, g = b ? Math.round(g) : r.imageheight, f != r.DATA.width || g != r.DATA.height) a && b ? r.registersize(f, g) : a ? r.registersize(f, null) : b && r.registersize(null, g), r.updatepluginpos(_[453]), _[5] == r._type && Nd(!0, r.index), r.onautosized && Z.callaction(r.onautosized, r, !0)
                        } else c++, 3 > c || hb < F + 1 ? null == z && (z = setTimeout(H, 20)) : (N && N.parentNode == r.sprite && (r.sprite.replaceChild(J, N), N = null), r.DATA.height = 0);
                        h = !1
                    }
                }
                var r = null,
                    A = {},
                    p = null,
                    v = 0,
                    u = 1,
                    n = 1,
                    y = !1,
                    I = [0, 0, 0, 0],
                    B = [0, 0, 0, 0],
                    C = 1,
                    z = null,
                    h = !1,
                    c = 0,
                    F = 0,
                    E = ba,
                    N = null,
                    J = null,
                    O = null;
                this.registerplugin = function(c, d, e) {
                    r = e;
                    c = r.html;
                    d = r.css;
                    delete r.html;
                    delete r.css;
                    r._istextfield = !0;
                    r.ishotspot && _[25] != r.renderer && (r.renderer = _[25], r.processUpdatesHS(131072), r.haschanged_flags &= -131073);
                    r.accuracy = 0;
                    r.registerattribute(_[456], "auto", function(a) {
                        u = "auto" == G(a) ? 1 : 2 * la(a);
                        b(1)
                    }, function() {
                        return 1 == u ? "auto" : 2 == u ? "true" : _[26]
                    });
                    r.registerattribute(_[393], "auto", function(a) {
                        n = "auto" == G(a) ? 1 : 2 * la(a);
                        b(1)
                    }, function() {
                        return 1 == n ? "auto" : 2 == n ? "true" : _[26]
                    });
                    r.registerattribute(_[236], !1);
                    a(1, _[512], !1);
                    a(1, _[55], "2", function(a, c) {
                        nc(c, 1, " ", I);
                        b(1)
                    });
                    a(2, _[129], !0);
                    a(2, _[264], 1);
                    a(2, _[268], 16777215);
                    a(1, _[86], !1);
                    a(1, _[125], 1);
                    a(2, _[127], 1);
                    a(2, _[123], 0);
                    a(2, _[460], "0", function(a, c) {
                        nc(c, 1, " ", B);
                        b(2)
                    });
                    a(2, _[598], 0);
                    a(2, _[377], 4);
                    a(2, _[374], 45);
                    a(2, _[384], 0);
                    a(2, _[386], 1);
                    a(2, _[400], 0);
                    a(2, _[276], 4);
                    a(2, _[286], 45);
                    a(2, _[283], 0);
                    a(2, _[275], 1);
                    a(1, _[412], !1);
                    a(1, _[487], !0);
                    a(1, _[556], "");
                    r.registerattribute("blur", 0);
                    r.registerattribute(_[482], 0);
                    r.registerattribute(_[479], null, function(a) {
                        null != a && "" != a && "none" != ("" + a).toLowerCase() && (n = 2, b(1))
                    }, function() {
                        return 2 == n ? _[85] : "none"
                    });
                    0 != u && 0 != n || r.registercontentsize(400, 300);
                    r.sprite && (r.sprite.style.color = _[38], r.sprite.style[_[67]] = "none", r.sprite.style.pointerEvents = "none");
                    a(1, "html", c ? c : "");
                    a(1, "css", d ? d : "")
                };
                this.unloadplugin = function() {
                    r && (r.loaded = !1, z && clearTimeout(z), p && clearTimeout(p), e(N), e(J));
                    r = p = z = O = J = N = null
                };
                this.onvisibilitychanged = function(a) {
                    a && _[5] == r._type && (r.forceupdate = !0);
                    return !1
                };
                this.onresize = function(a, b) {
                    if (E != ba) return E = ba, nc(A.padding, 1, " ", I), nc(A.roundedge, 1, " ", B), t(), !1;
                    if (h) return !1;
                    if (r) {
                        var d = 2 == u || 1 == u && 0 == r.haveUserWidth(),
                            e = 2 == n || 1 == n && 0 == r.haveUserHeight();
                        r.registercontentsize(a, b);
                        J && (_[5] != r._type || 1 != r.DATA.distorted ? (O[qb] = _[151] + ba + ")", O.width = 100 / ba + "%", O.height = 100 / ba + "%") : (O[qb] = "", O.width = "100%", O.height = "100%"), y && (O.left = O.top = -C + "px"), 0 == d && (J.childNodes[0].style.width = a + "px"), 0 == e && (J.childNodes[0].style.height = b + "px"), d || e ? (y = !1, r.sprite && (d && (r.sprite.style.width = 0), e && (r.sprite.style.height = 0)), c = 0, F = hb, null == z && (z = setTimeout(H, 10))) : (0 == d && (O.width = a + 2 * C + "px"), 0 == e && (O.height = b + "px")))
                    }
                    return !1
                };
                this.updatehtml = t
            },
            wc = 1,
            Ef = function() {
                function a() {
                    var a = G(l.renderer),
                        f = l.webGL,
                        f = _[25] == a ? !1 : d.webgl;
                    if (l.webGL = f) {
                        if (b.sprite) {
                            try {
                                V.hotspotlayer.removeChild(b.sprite)
                            } catch (m) {}
                            b.destroySprite();
                            $a = b.renderToBitmap = !0
                        }
                    } else b.sprite || (b.renderToBitmap = !1, b.createSprite(), V.hotspotlayer.appendChild(b.sprite), b.videoDOM && b.sprite.appendChild(b.videoDOM), b.posterDOM && b.sprite.appendChild(b.posterDOM), 0 == b._isNE() && b.loaded && (b.sprite.style.backgroundImage = 'url("' + b.loader.src + '")'), $a = !0)
                }
                var b = this;
                b.prototype = Qb;
                this.prototype.call(this);
                b._type = _[5];
                b.ishotspot = !0;
                var l = b.DATA;
                l.webGL = d.webgl;
                l.mx_RR = Ka();
                b.createVars([_[476], l.webGL ? _[65] : _[25], 131072, "ath", 0, 8, "atv", 0, 8, "zoom", !1, 1048576, _[433], !1, 1048576, _[150], "", 8, "depth", 1E3, 2048, _[572], 0, 8, "rx", 0, 262144, "ry", 0, 262144, "rz", 0, 262144, _[267], !1, 262144, "tx", 0, 524288, "ty", 0, 524288, "tz", 0, 524288]);
                b.edge = _[85];
                b.accuracy = 1;
                b.scaleflying = !0;
                b.zorder2 = 0;
                b.forceupdate = !1;
                b.renderToBitmap = d.webgl;
                kd = !0;
                b.point = new ub(null);
                var f = b.create;
                b.create = function() {
                    f();
                    b.createVars([_[142], b.polyline ? la(b.polyline) : !1, 2097152, _[430], b.fillcolor ? Number(b.fillcolor) : 11184810, 2097152, _[428], b.fillalpha ? Number(b.fillalpha) : .5, 2097152, _[125], b.borderwidth ? Number(b.borderwidth) : 3, 2097152, _[123], b.bordercolor ? Number(b.bordercolor) : 11184810, 2097152, _[127], b.borderalpha ? Number(b.borderalpha) : 1, 2097152]);
                    a()
                };
                b.processUpdatesHS = function() {
                    b.haschanged_flags & 131072 && (b.haschanged_flags &= -131073, a());
                    if (b.haschanged_flags & 262144) {
                        b.haschanged_flags &= -262145;
                        var d = l.rx,
                            f = l.ry,
                            m = l.rz,
                            g = b.getparsed();
                        0 != d || 0 != f || 0 != m ? (g.flags |= 1024, we(l.mx_RR, m, f, d, !l.inverserotation)) : g.flags &= -1025;
                        b.requestUpdate()
                    }
                    b.haschanged_flags & 524288 && (b.haschanged_flags &= -524289, d = l.tx, f = l.ty, m = l.tz, g = b.getparsed(), g.flags = 0 != d || 0 != f || 0 != m ? g.flags | 2048 : g.flags & -2049, b.requestUpdate());
                    b.haschanged_flags & 1048576 && (b.haschanged_flags &= -1048577, b.requestUpdate());
                    b.haschanged_flags & 2097152 && (b.haschanged_flags &= -2097153, ae(b), b.requestUpdate())
                };
                b.updatepos = function() {
                    b.requestUpdate()
                };
                b.getcenter = function() {
                    var a = 0,
                        d = 0,
                        f = 25;
                    if (b.DATA.url) a = b.DATA.ath, d = b.DATA.atv, f = 25 * Number(b.DATA.scale);
                    else {
                        for (var g = b.point.getArray(), l = 0, t = g.length, r, x, p, v = 5E4, u = -5E4, n = 5E4, y = -5E4, G = 5E4, B = -5E4, C = 0, z = 0, h = 0, l = 0; l < t; l++) x = g[l], r = Number(x.ath), p = Number(x.atv), x = 0 > r ? r + 360 : r, r < v && (v = r), r > u && (u = r), x < n && (n = x), x > y && (y = x), p < G && (G = p), p > B && (B = p), r = (180 - r) * W, p *= W, C += Math.cos(p) * Math.cos(r), h += Math.cos(p) * Math.sin(r), z += Math.sin(p);
                        0 < t && (C /= t, z /= t, h /= t, a = 90 + Math.atan2(C, h) / W, d = -Math.atan2(-z, Math.sqrt(C * C + h * h)) / W, 180 < a && (a -= 360), r = u - v, p = B - G, 170 < r && (r = y - n), f = r > p ? r : p)
                    }
                    1 > f ? f = 1 : 90 < f && (f = 90);
                    g = new vc;
                    g.x = a;
                    g.y = d;
                    g.z = f;
                    f = arguments;
                    2 == f.length && (Y(f[0], a, !1, this), Y(f[1], d, !1, this));
                    return g
                }
            },
            ye = "",
            Ob = 1,
            Ye = "translate3D(;;px,;;px,0px) ;;rotateX(;;deg) rotateY(;;deg) ;;deg) rotateX(;;deg) scale3D(;;) translateZ(;;px) rotate(;;deg) translate(;;px,;;px) rotate;;deg) rotate;;deg) rotate;;deg) scale(;;,;;) translate(;;px,;;px)".split(";"),
            wf = "translate(;;px,;;px) translate(;;px,;;px) rotate(;;deg) translate(;;px,;;px) scale(;;,;;) translate(;;px,;;px)".split(";"),
            Bf = function() {
                this.fullscreen = d.fullscreensupport;
                this.touch = this.versioninfo = !0;
                this.customstyle = null;
                this.enterfs = _[421];
                this.exitfs = _[288];
                this.item = new ub(function() {
                    this.visible = this.enabled = !0;
                    this.caption = null;
                    this.separator = !1;
                    this.onclick = null
                })
            },
            Ff = function() {
                function a() {
                    f = t.hlookat;
                    k = d.speed;
                    l = 0;
                    d.isrotating = !0;
                    d.ispaused = !1;
                    ya(_[242])
                }

                function b() {
                    d.currentmovingspeed = 0;
                    d.isrotating = !1;
                    d.ispaused = !1;
                    ya(_[248])
                }
                var d = this;
                d.enabled = !1;
                d.waittime = 1.5;
                d.accel = 1;
                d.speed = 10;
                d.horizon = 0;
                d.tofov = Number.NaN;
                d.interruptionevents = "userviewchange|layers|keyboard";
                d.isrotating = !1;
                d.ispaused = !1;
                var f = d.currentmovingspeed = 0,
                    e = 0,
                    k = 1,
                    l = 0,
                    g = !1;
                d.start = function() {
                    d.enabled = !0;
                    e = Ja();
                    a()
                };
                d.stop = function() {
                    d.enabled = !1
                };
                d.pause = function() {
                    d.ispaused = !0
                };
                d.resume = function() {
                    d.ispaused = !1
                };
                d.interrupt = function() {
                    bb(_[219])
                };
                d.checkIdletime = function(w, G) {
                    var r = d.enabled;
                    g != r && (g = r, d.ispaused = !1, ya(_[231]));
                    if (r) {
                        if (!d.isrotating) {
                            if (d.ispaused) return bb(_[222]), !1;
                            (w - G) / 1E3 > d.waittime && (e = w, a())
                        }
                        if (d.isrotating)
                            if (G > e) b();
                            else {
                                if (d.ispaused) return !1;
                                var A = t._hlookat,
                                    p = t._vlookat,
                                    r = t._fov,
                                    v = Math.tan(Math.min(.5 * r, 45) * W),
                                    u = d.accel,
                                    n = d.speed,
                                    y = d.currentmovingspeed,
                                    u = u / 60,
                                    n = n / 60;
                                0 < n ? (y += u * u, y > n && (y = n)) : (y -= u * u, y < n && (y = n));
                                d.currentmovingspeed = y;
                                A += v * y;
                                if (0 < y && 0 > k || 0 > y && 0 < k) k = y, l++;
                                if (360 <= Math.abs(A - f) || 2 == l && (0 < y ? 0 < A : 0 > A)) f = A, l = 0, ya(_[220]);
                                v = Math.abs(v * y);
                                t._hlookat = A;
                                A = parseFloat(d.horizon);
                                isNaN(A) || (A = (A - p) / 60, u = Math.abs(A), 0 < u && (u > v && (A = v * A / u), p += A, t._vlookat = p));
                                p = parseFloat(d.tofov);
                                isNaN(p) || (p < t.fovmin && (p = t.fovmin), p > t.fovmax && (p = t.fovmax), p = (p - r) / 60, A = Math.abs(p), 0 < A && (A > v && (p = v * p / A), t._fov = r + p));
                                return !0
                            }
                    } else d.isrotating && b();
                    return !1
                }
            },
            Yd = function() {
                function a(a) {
                    var b = ja.FRM,
                        d = l.webVR;
                    d && d.enabled && d.requestframe && d.requestframe(a) || (0 == b && k ? k(a) : (0 == b && (b = 60), d = 1E3 / b, b = (new Date).getTime(), d = Math.max(0, d - (b - e)), T.setTimeout(a, d), e = b + d))
                }

                function b() {
                    t && (f(), a(b))
                }
                var t = !0,
                    f = null,
                    e = 0,
                    k = T.requestAnimationFrame || T.webkitRequestAnimationFrame || T.mozRequestAnimationFrame || T.oRequestAnimationFrame || T.msRequestAnimationFrame;
                return {
                    start: function(e) {
                        if (d.ios && 9 > d.iosversion || d.linux && d.chrome || d.desktop && d.safari) k = null;
                        t = !0;
                        f = e;
                        a(b)
                    },
                    stop: function() {
                        t = !1;
                        f = null
                    }
                }
            }();
        oc.init = function(a) {
            oc.so = a;
            d.runDetection(a);
            if (d.css3d || d.webgl) qb = d.browser.css.transform, ze = qb + "Style", Tc = qb + _[92];
            Qd = d.browser.css.backgroundsize;
            Sb = d.browser.css.boxshadow;
            var b = 0;
            d.ios && 0 == d.simulator ? 5 <= d.iosversion && 1 != ee && (b = 4) : d.android ? (xc = 2, b = 4, d.firefox && (b = 0)) : (b = 2, d.desktop && d.safari && (b = 8), d.ie && (b = 8));
            d.browser.css.tileoverlap = b;
            yf();
            if (!V.build(a)) return !1;
            da.layer = V.controllayer;
            da.panoControl = eb;
            da.getMousePos = V.getMousePos;
            ja.htmltarget = V.htmltarget;
            ja.viewerlayer = V.viewerlayer;
            va(1, _[149] + l.version + _[470] + l.build + (l.debugmode ? _[523] : ")"));
            b = !0;
            a.html5 && 0 <= G(a.html5).indexOf(_[25]) && (b = !1);
            fb.setup(d.webgl && b ? 2 : 1);
            va(1, d.infoString + fb.infoString);
            a && a.basepath && "" != a.basepath && (na.swfpath = a.basepath);
            V.onResize(null);
            eb.registerControls(V.controllayer);
            Yd.start(Gf);
            if (!d.css3d && !d.webgl && 0 > G(a.html5).indexOf(_[580])) cb(_[166]);
            else {
                var x, f, e = [],
                    b = !0,
                    k = 0,
                    m = [],
                    g = "360etours.net clickcwb.com.br afu360.com webvr.net webvr.cn aero-scan.ru shambalaland.com littlstar.com d3uo9a4kiyu5sk.cloudfront.net vrvideo.com lapentor.com roundme.com".split(" "),
                    w = _[162].split(" "),
                    H = null,
                    r = null,
                    A = Kb(100),
                    p = G(_[171]).split(";"),
                    v, u;
                if (null != Lc && "" != Lc) {
                    var n = na.b64u8(Lc),
                        y = n.split(";");
                    if (v = y[0] == p[0])
                        if (n = G(n), 0 <= n.indexOf(p[6]) || 0 <= n.indexOf(p[7]) || 0 <= n.indexOf(p[8])) v = !1;
                    var n = Lc = null,
                        n = y.length,
                        n = n - 2,
                        I = y[n],
                        B = 0;
                    0 == I.indexOf("ck=") ? I = I.slice(3) : v = !1;
                    if (v)
                        for (v = 0; v < n; v++) {
                            var C = y[v],
                                z = C.length;
                            for (u = 0; u < z; u++) B += C.charCodeAt(u) & 255;
                            if (!(4 > z) && (u = C.slice(3), "" != u)) switch (_[187].indexOf(C.slice(0, 3)) / 3 | 0) {
                                case 1:
                                    La = parseInt(u);
                                    b = 0 == (La & 1);
                                    break;
                                case 2:
                                    x = u;
                                    e.push(p[1] + "=" + u);
                                    break;
                                case 3:
                                    f = u;
                                    e.push(p[2] + u);
                                    break;
                                case 4:
                                    m.push(u);
                                    e.push(p[3] + "=" + u);
                                    break;
                                case 5:
                                    C = parseInt(u);
                                    H = new Date;
                                    H.setFullYear(C >> 16, (C >> 8 & 15) - 1, C & 63);
                                    break;
                                case 6:
                                    r = u;
                                    break;
                                case 7:
                                    z = C = u.length;
                                    if (128 > C)
                                        for (; 128 > z;) u += u.charAt(z % C), z++;
                                    Pd = u;
                                    break;
                                case 8:
                                    break;
                                case 9:
                                    Va = u.split("|");
                                    4 != Va.length && (Va = null);
                                    break;
                                case 10:
                                    break;
                                default:
                                    e.push(C)
                            }
                        }
                    B != parseInt(I) && (k = 1);
                    v = ca.location;
                    v = G(v.search || v.hash);
                    if (0 < v.indexOf(_[112])) {
                        cb(e.join(", "), G(_[112]).toUpperCase());
                        return
                    }
                    0 < v.indexOf(_[271]) && (null == a.vars && (a.vars = {}), a.vars.consolelog = !0, La = La & 1 | 14);
                    y = null
                }
                Sc = e = G(ca[p[3]]);
                try {
                    throw Error("path");
                } catch (h) {
                    v = "" + h.stack, y = v.indexOf("://"), 0 < y && (y += 3, n = v.indexOf("/", y), v = v.slice(y, n), n = v.indexOf(":"), 0 < n && (v = v.slice(0, n)), Sc = v)
                }
                0 == e.indexOf(_[601]) && (e = e.slice(4));
                p = "" == e || _[444] == e || _[445] == e || 0 == e.indexOf(p[4]);
                d.browser.domain = p ? null : e;
                if (0 == (La & 2) && p) k = 3;
                else if (!p) {
                    v = e.indexOf(".") + 1;
                    0 > e.indexOf(".", v) && (v = 0);
                    p = e;
                    e = e.slice(v);
                    0 == e.indexOf(_[547]) && _[128] != e && (k = 2);
                    for (v = 0; v < g.length; v++)
                        if (g[v] == e) {
                            k = 2;
                            break
                        }
                    if (0 == k && 0 < m.length)
                        for (k = 2, v = 0; v < m.length; v++)
                            if (e == m[v] || sd(m[v], p)) {
                                k = 0;
                                break
                            }
                }
                if (x || f)
                    for (f = ("." + x + "." + f).toLowerCase(), v = 0; v < w.length; v++) 0 <= f.indexOf(w[v]) && (k = 1);
                if (null != H && new Date > H) cb(_[291]), null != r && setTimeout(function() {
                    T.location = r
                }, 500);
                else if (0 < k) cb(_[120] + ["", _[282], _[240]][k - 1]);
                else {
                    Va && (La &= -129, va(1, Va[0]));
                    0 == b && (x ? va(1, _[294] + x) : b = !0);
                    (b || 0 == (La & 1)) && V.log(A);
                    x = null;
                    a.xml && (x = a.xml);
                    a.vars && (a.vars.xml && (x = a.vars.xml), x || (x = a.vars.pano));
                    0 == (La & 4) && (a.vars = null);
                    La & 16 && (l[Pb[0]] = l[Pb[1]] = !1);
                    f = V.viewerlayer;
                    La & 8 ? (f.get = Mb(S), f.set = Mb(Y), f.call = Qe) : (f.set = function() {
                        va(2, _[191])
                    }, f.get = Va ? Mb(S) : f.set, f.call = Mb(Z.SAcall));
                    f.screentosphere = t.screentosphere;
                    f.spheretoscreen = t.spheretoscreen;
                    f.unload = Re;
                    a.initvars && Xd(a.initvars);
                    Z.loadpano(x, a.vars);
                    if (a.onready) a.onready(f);
                    return !0
                }
            }
        }
    }

    var _ = ["absolute", "string", "mouseup", "right", "bottom", "hotspot", "default", "hidden", "mousedown", "mousemove", "pointer", "action", "pointerover", "transparent", "pointerout", "function", "visible", "height", "moveto", "mouse", "sans-serif", "mouseover", "container", "mouseout", "color", "css3d", "false", "translateZ(+2000000000000px)", " - xml parsing failed!", "visibilitychange", "Courier New", "contextmenu", "parsererror", "onmouseup", "px solid ", "cylinder", "text/xml", "position", "#000000", "onclick", "cursor", "error", "-webkit-tap-highlight-color", "Invalid expression", "MSPointerOver", "MSPointerOut", "onmousedown", "touchstart", "touchmove", "cubestrip", "touchend", "pagehide", "fontSize", "boolean", "#FFFFFF", "padding", "mobile", "krpano", "normal", "linear", "sphere", "iphone", "plugin", "layer", "width", "webgl", "align", "-webkit-text-size-adjust", "sh,ch,aa,mx,ot,tm", "webkitUserSelect", "mozUserSelect", "image.level[", "translate3D(", "onmousewheel", "<container>", "easeoutquad", "userSelect", "fontFamily", "translate(", "].content", "onresize", "fisheye", "display", "keydown", "lefttop", "center", "border", "object", "</div>", "webkit", "LOOKTO", "scene[", "Origin", "vx,tx", "abort", "data:", "image", "keyup", "1px solid rgba(0,255,0,0.5)", "http://www.w3.org/2000/svg", "webkitvisibilitychange", " - loading failed! (", "mozvisibilitychange", "msvisibilitychange", "experimental-webgl", "]]]]\\x3e<![CDATA[>", "orientationchange", "uniform vec3 cc;", "deg) translateZ(", "Unknown action: ", "MSGestureChange", "text/javascript", "showlicenseinfo", "get:calc:data:", "MSGestureStart", "DOMMouseScroll", "onloadcomplete", "MSInertiaStart", "WebGL-Error: ", "opacity 0.25s", "LICENSE ERROR", "px) rotateZ(", "MSGestureEnd", "bordercolor", "preserve-3d", "borderwidth", "scene.count", "borderalpha", "krpano.com", "background", "mousewheel", "fullscreen", "undefined", "underline", "moz-webgl", "webkit-3d", "</krpano>", "marginTop", "relative", "<krpano>", "rotateY(", "offrange", "polyline", "-10000px", "include", "#0FFF00", "plugin[", "lambert", "onkeyup", "krpano ", "stereo", "scale(", "resize", " edge/", "opaque", "Chrome", "iPhone", "tablet", "layer[", "scroll", "parent", "&nbsp;", "panofree freeuser figgler teameat eatusebuy no-mail chen44 .lestra. gfreidinger an37almk jornmagnus ihrinternetservice alexandermett mail@mail.ru hiteks.fr lilyandtommy roundme", "There is already a blocking lookto() action, the current call will be skipped!", "gl_FragColor=vec4(texture2D(sm,(tx-ct)/mix(1.0,zf,1.0-aa)+ct).rgb,aa);", "gl_FragColor=vec4(mix(texture2D(sm,tx).rgb,cc,2.0*(1.0-aa)),aa*2.0);", "A HTML5 Browser with WebGL or CSS-3D-Transforms support is required!", " - invalid name! Names need to begin with an alphabetic character!", "abs acos asin atan ceil cos exp floor log round sin sqrt tan", "gl_FragColor=vec4(texture2D(sm,tx).rgb+(1.0-aa)*cc,aa);", "uniform sampler2D sm;varying vec2 tx;uniform float aa;", "kr;user;mail=;domain;file:;id;chen4490;teameat;figgler", "delayedcall(interval_%1,%2,setinterval(%1,%2,%3);%3);", "<div style='padding-top:2.5px; padding-bottom:5px;' ", "uniform vec2 ap;uniform float zf;uniform float bl;", "if(%1,%2;delayedcall(0,asyncloop(%1,%2,%3));,%3);", "there is already a html element with this id: ", "<div style='padding:8px; text-align:center;'>", "-webkit-radial-gradient(circle, white, black)", "gl_FragColor=vec4(texture2D(sm,tx).rgb,aa);", "", "if(%1,%2,delayedcall(0,callwhen(%1,%2)));", "there is no html element with this id: ", "javascript:document.getElementById('", "left front right back up down cube", "uniform vec3 fp;uniform float bl;", "uniform vec2 ct;uniform float zf;", "xx=lz=rg=ma=dm=ed=eu=ek=rd=pt=id=", "c.a*=1.0-length(mod(tt,1.0)-tt);", "1px solid rgba(255,255,255,0.5)", "color:#FF0000;font-weight:bold;", "Javascript Interface disabled!", " - loading or parsing failed!", "1px solid rgba(255,255,0,0.5)", "translateZ(+1000000000000px) ", "No compatible pano image...", ".idlecheck.mouse.down+moved", "Calling deprecated action: ", "loading or parsing failed!", "' is not a krpano plugin!", "krpano embedding error: ", " (not a cubestrip image)", "precision mediump float;", "webkitRequestFullscreen", "architecturalonlymiddle", "webkitRequestFullScreen", "hotspot css3d distorted", "(-webkit-transform-3d)", " - invalid encryption!", "px solid transparent;", " skipped flash file: ", "preservedrawingbuffer", " - wrong encryption!", "hotspot css3d normal", " - style not found: ", "mozRequestFullScreen", "<span style='color:#", "translateZ(+1000px) ", "unlock viewing range", "autorotate.interrupt", "onautorotateoneround", "px,0px) translateY(", "autorotate.ispaused", "<div style='margin:", "px;overflow:hidden;", "xml parsing failed!", "white-space:nowrap;", "0px 0px 8px #FFFFFF", "addlayer/addplugin(", "msRequestFullscreen", "-webkit-box-shadow", "onautorotatechange", "-ms-overflow-style", "preview.striporder", "</td></tr></table>", "position:absolute;", "interactivecontent", "Internet Explorer", "distortionfovlink", "http://krpano.com", " - NO LOCAL USAGE", "onenterfullscreen", "onautorotatestart", "<krpano></krpano>", "WebkitPerspective", "Microsoft.XMLHTTP", "requestFullscreen", "onpreviewcomplete", "onautorotatestop", "__defineGetter__", "framebufferscale", "actions overflow", "FullscreenChange", "onexitfullscreen", " loading error: ", "layer.touchstart", "movetoaccelerate", "access permitted", "fullscreenchange", "rgba(0,0,0,0.01)", "px) perspective(", "__defineSetter__", "deg) translate(", "pano.mousewheel", "backgroundalpha", "4px 4px 0px 4px", "backgroundColor", "inverserotation", "backgroundcolor", "krpanoSWFObject", " <small>(build ", "consolelog=true", "mouseaccelerate", "0px 4px 4px 4px", "layer.mousedown", "textshadowalpha", "textshadowrange", "pano.multitouch", "pano.touchstart", "events.dispatch", "-moz-box-shadow", "ignoring image ", " - WRONG DOMAIN", "textshadowcolor", "caseinsensitive", "movetoyfriction", "textshadowangle", "Android Browser", "Exit Fullscreen", "1px solid white", "WebkitBoxShadow", "LICENSE EXPIRED", "able autorotate", "MSPointerCancel", "Registered to: ", "color:#333333;", "userviewchange", "translateZ(0) ", "backgroundSize", "movetofriction", "visiblePainted", "pointer-events", ")</small><br/>", "color:#007700;", "color:#AA7700;", "mouseyfriction", "Microsoft Edge", "pano.touchmove", "pointercancel", " FATAL ERROR:", "scalechildren", "deg) rotateZ(", "pointerEvents", "mobile safari", "onviewchanged", "MSPointerDown", "touchfriction", "MSPointerMove", "for(,%1,,%2);", "windows phone", "gesturechange", "return false;", "deg) rotateX(", "easeInOutSine", "#FFF 0px 0px ", "stereographic", "EventListener", "deg) rotateY(", "mousefriction", "HTML5/Desktop", "textfield.swf", " translate3D(", "paddingBottom", " not allowed!", "onxmlcomplete", "maskchildren", "&nbsp;</div>", "loading of '", "Amazon Silk ", "MozBoxShadow", "pano.mouseup", "perspective(", "paddingRight", "onremovepano", "removescenes", ") translate(", "dragfriction", "stroke-width", "</encrypted>", "layer.ondown", "hlookatrange", "keephotspots", "gesturestart", "vlookatrange", "image.tablet", "onviewchange", "image.mobile", "px) rotateX(", "height:100%;", "actioncaller", "preview.type", "easeincubic", "touchcancel", "<encrypted>", "perspective", "keepplugins", "versioninfo", "paddingLeft", "pointerdown", "MSPointerUp", "px) rotate(", "bgroundedge", "stageheight", "translateZ(", "shadowangle", "addhotspot(", "preview.url", "shadowrange", "easeInCubic", "pointermove", "movetospeed", "BlackBerry ", "easeoutsine", "setinterval", "shadowcolor", "onloaderror", "shadowalpha", "blackberry", "box-shadow", "rim tablet", "stagewidth", "%FIRSTXML%", "gestureend", "autoheight", "onnewscene", "FATALERROR", "keepscenes", "showerrors", "ondowncrop", "LIGHTBLEND", "textshadow", "onovercrop", "2016-09-09", "mousespeed", "handcursor", "stagescale", "px #FFFFFF", "yesontrue1", "1px solid ", "' failed: ", "COLORBLEND", "CURRENTXML", "selectable", "keepmoving", "the file '", "whiteSpace", " Simulator", "ignorekeep", "px) scale(", "paddingTop", "distortion", "全屏", "SLIDEBLEND", "layer.move", "javascript", "descending", "bgcapture", "textAlign", "fillalpha", "timertick", "fillcolor", "parsing '", "__swfpath", "distorted", "</center>", "frameloop", "onkeydown", "onnewpano", "autoalpha", "fullrange", "Viewer...", "interval_", "asyncloop", "].onstart", "localhost", "127.0.0.1", "keepimage", "encrypted", "mousetype", "transform", "boxShadow", "touchtype", "').call('", "textfield", "framerate", "' failed!", "autowidth", "<![CDATA[", "nopreview", "pointerup", "roundedge", "ZOOMBLEND", "useragent", " (Chrome)", "OPENBLEND", "pageshow", "HOTSPOTS", "keyboard", "bgborder", "bgshadow", " (build ", "pre-line", "overflow", "__fte1__", "0px 0px ", "</small>", "renderer", "<center>", "SAMSUNG ", "autosize", "Calling ", "distance", "textblur", "Panorama", "asyncfor", "callwhen", "layer.up", "wordwrap", "ap,zf,bl", "00000000", "breakall", "Firefox ", "1.19-pr7", "iemobile", "scale3D(", " style='", "<=>=!===", "panotour", "videourl", " - WebGL", " - CSS3D", "HTMLPATH", "FIRSTXML", "jsplugin", "keepview", "__fte2__", "</span> ", "keepbase", "keepall", "actions", "bglayer", "numeric", "vcenter", "SWFPATH", "BASEDIR", "preinit", "onstart", "preview", "WARNING", "current", "protect", "border:", "devices", " debug)", "BGLAYER", "webkit/", "Tablet ", ".child[", "polygon", "plugin:", "bgcolor", "Mobile ", "bgalpha", "fovtype", "lighter", "opacity", "action(", "trident", "android", "<small>", "Firefox", " - iOS:", "Android", "pannini", "action[", "stopall", "integer", "krpano.", "].value", "Chrome ", "Version", ".parent", "enabled", "50% 50%", "desktop", "remove", "effect", "origin", "Safari", "smooth", "Opera ", "_blank", "delete", "Mobile", "onidle", "switch", "Tablet", "zorder", "rotate", "points", " Build", "Gecko/", "flying", "style[", "lfrbud", "Webkit", "logkey", "LAYERS", "lookto", "image.", "always", "layers", "canvas", "stagey", "width:", "0FFF00", "AACCFF", "event:", "&apos;", "&quot;", "iframe", "FFFF00", "stagex", "]]\\x3e", "number", "blend(", "drag2d", "random", "shadow", "CriOS/", "stroke", "www."];
    Lc = "";
    _ && _[132] != typeof krpanoJS && (new sd).init(Wd)
};

function embedpanoJS(p) {

    embedhtml5(p, "")
};