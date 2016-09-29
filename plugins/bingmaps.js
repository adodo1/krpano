/*
	krpano 1.19-pr7 Bing Maps Plugin (build 2016-09-09)
	http://krpano.com/plugins/bingmaps/
*/
var krpanoplugin = function () {
    function A(a) {
        return "boolean" == typeof a ? a : 0 <= "yesontrue1".indexOf(String(a).toLowerCase())
    }

    function ha(a) {
        return "rgb(" + (a >> 16 & 255) + "," + (a >> 8 & 255) + "," + (a & 255) + ")"
    }

    function va(a, c) {
        var b = document.createElementNS("http://www.w3.org/2000/svg", "svg");
        b.setAttribute("width", a);
        b.setAttribute("height", c);
        b.style.position = "absolute";
        b.style.left = -a / 2 + "px";
        b.style.top = -c / 2 + "px";
        var f = document.createElementNS("http://www.w3.org/2000/svg", "path");
        f.style.pointerEvents = "visiblePainted";
        f.style.cursor = "pointer";
        f.setAttribute("stroke", "rgba(255,0,0,1.0)");
        f.setAttribute("stroke-width", 2);
        f.setAttribute("fill", "rgba(0,255,0,0.5)");
        b.appendChild(f);
        var d = {};
        d.svg = b;
        d.path = f;
        d.centerx = a / 2;
        d.centery = c / 2;
        var e = -1;
        d.hide = function () {
            0 != e && (e = 0, b.style.display = "none")
        };
        d.show = function () {
            1 != e && (e = 1, b.style.display = "")
        };
        d.drawpie = function (a, b, c, e, d) {
            var h, u;
            e > d && (h = d, d = e, e = h);
            e = e * Math.PI / 180;
            d = d * Math.PI / 180;
            u = d - e;
            h = (e + d) / 2;
            var k = u > Math.PI ? 1 : 0;
            u >= 2 * Math.PI && (u = 2 * Math.PI - .01);
            e = h - u / 2;
            d = h + u /
              2;
            h = a + c * Math.sin(e);
            e = b - c * Math.cos(e);
            u = a + c * Math.sin(d);
            d = b - c * Math.cos(d);
            f.setAttribute("d", "M " + a + "," + b + " L " + h + "," + e + " A " + c + "," + c + " 0 " + k + " 1 " + u + "," + d + " Z")
        };
        return d
    }

    function wa() {
        var a = document.createElement("div");
        a.style.position = "absolute";
        a.style.left = "50%";
        a.style.top = "50%";
        a.style.width = "100%";
        a.style.zIndex = 999998;
        a.style.color = "#FFFFFF";
        a.style.opacity = .67;
        a.style.fontSize = h.isphone ? "10px" : "16px";
        a.style["-webkit-text-size-adjust"] = "none";
        a.style.display = "block";
        a.style.cursor = "none";
        a.style.pointerEvents = "none";
        var c = document.createElement("div");
        c.style.position = "relative";
        c.style.left = "-50%";
        c.style.top = h.isphone ? "-64px" : "-46px";
        c.style.fontFamily = "sans-serif";
        c.style.textShadow = "#000000 1px 1px 2px";
        c.innerHTML = "<center><i><b>krpano Bing Maps Plugin<br/>DEMO MODE</b></i></center>";
        a.appendChild(c);
        d && d.sprite && d.sprite.appendChild(a)
    }

    function R(a, c) {
        var b = document.createElement("img");
        b.addEventListener("error", function () {
            h && d && h.trace(3, d._type + "[" + d.name + "] loading error: " +
              a)
        }, !0);
        b.addEventListener("load", function () {
            h && d && c(b)
        }, !1);
        b.src = h.parsePath(a)
    }

    function xa() {
        null != B && (window[B] = null, delete window[B], B = null);
        h && d && setTimeout(Y, 10)
    }

    function Z() {
        if (d) {
            var a = Number(d.bgcolor),
              c = Number(d.bgalpha);
            n && n.childNodes && n.childNodes[0] && n.childNodes[0].style && (n.childNodes[0].style.backgroundColor = "rgba(" + (a >> 16 & 255) + "," + (a >> 8 & 255) + "," + (a & 255) + "," + c + ")")
        }
    }

    function Y() {
        var a = window._krpano_bmap_loadedcallbacks_;
        if (a) {
            window._krpano_bmap_loadedcallbacks_ = null;
            delete window._krpano_bmap_loadedcallbacks_;
            var c = a.length,
              b;
            if (0 < c && 99 > c)
                for (b = 0; b < c; b++) setTimeout(a[b], 10 + 5 * b)
        }
        if (h && d) {
            d._use_css_scale = !1;
            d.poschanged = !0;
            d.updatepos();
            a = Math.floor(d.pixelwidth * h.stagescale);
            c = Math.floor(d.pixelheight * h.stagescale);
            b = d.key;
            var f = document.domain;
            0 == f.indexOf("www.") && (f = f.slice(4));
            if (null != b && 0 < b.indexOf("|")) {
                var u = b.split("|");
                b = null;
                var e = u.length;
                if (2 <= e) {
                    if (null == f || "" == f) f = "local";
                    for (var q = 0; q < e; q += 2) {
                        var g = String(u[q]).toLowerCase(),
                          l = u[q + 1];
                        if (g == f) {
                            b = l;
                            break
                        }
                    }
                }
            }
            "TEST" == b ? (aa = !0, b = null) : "" != b &&
              null != b || h.trace(2, "bingmaps plugin - no API key!");
            a = {
                credentials: b,
                mapTypeId: ia(D),
                labelOverlay: ja(D),
                center: new Microsoft.Maps.Location(d.lat, d.lng),
                zoom: r,
                enableSearchLogo: !1,
                enableClickableLogo: !1,
                showMapTypeSelector: !1,
                showDashboard: !1,
                showScalebar: !1,
                disableKeyboardInput: !0,
                fixedMapPosition: !0,
                width: a,
                height: c
            };
            k = new Microsoft.Maps.Map(n, a);
            Z();
            n && n.childNodes && n.childNodes[0] && n.childNodes[0].childNodes && n.childNodes[0].childNodes[0] && "BUTTON" == n.childNodes[0].childNodes[0].nodeName && n.childNodes[0].removeChild(n.childNodes[0].childNodes[0]);
            Microsoft.Maps.Events.addHandler(k, "mousewheel", ya);
            n.addEventListener("gesturestart", ba, !1);
            n.addEventListener("gesturechange", ba, !1);
            n.addEventListener("gestureend", ba, !1);
            null == M && (M = setInterval(za, 1E3 / 60));
            t = new Aa;
            ka();
            la();
            Ba();
            S = !0;
            h.call(d.onmapready, d);
            Microsoft.Maps.Events.addHandler(k, "imagerychanged", ma);
            Microsoft.Maps.Events.addHandler(k, "viewchange", na)
        }
    }

    function ba(a) {
        a && (a.preventDefault(), a.stopPropagation())
    }

    function ya(a) {
        a && (h && h.control && !0 === h.control.disablewheel ? a.handled = !0 : a.originalEvent && (a.originalEvent.preventDefault(), a.originalEvent.stopPropagation()))
    }

    function ma() {
        if (k) {
            var a = k.getOptions(),
              c = k.getImageryId(),
              b = "satellite";
            "Road" == c ? b = "normal" : "Aerial" == c && (b = 1 == a.labelOverlay ? "satellite" : "hybrid");
            if (b != D) {
                D = b;
                if (C) C.onMapTypeChanged(D);
                h.call(d.onmaptypechanged, d)
            }
        }
    }

    function na() {
        if (k) {
            var a = k.getCenter();
            if (y != a.latitude || w != a.longitude) y = a.latitude, w = a.longitude, h.call(d.onmapmoved, d);
            a = k.getZoom();
            r != a && (t && (t.needredraw = !0), r = a, h.call(d.onmapzoomed,
              d), t && t.updatehandler(), la())
        }
    }

    function la() {
        var a = d.spot.getArray(),
          c = null,
          b, f;
        f = a.length;
        for (b = 0; b < f; b++) a[b] && (c = a[b].internalObject) && c.zoomwithmap && c.scalespot(Math.pow(2, r) / Math.pow(2, c.zoombaselevel))
    }

    function za(a) {
        aa && (a = n) && (a = a.firstChild) && (a = a.lastChild) && (a = a.lastChild) && 0 < ("" + a.textContent).indexOf("invalid") && (a.style.display = "none", aa = !1);
        if (S) {
            H && T();
            if (N) {
                N = !1;
                a = d.spot.getArray();
                var c = null,
                  b, f;
                f = a.length;
                for (b = 0; b < f; b++) c = a[b].internalObject, c.needdom && c.try_dom_access(), c.needupdate &&
                  c.processupdate()
            }
            t && t.updatehandler();
            E && 0 == ((h.display.frame | 0) & 1) && (a = E.onhover, null != a && "" != a && h.call(a, E))
        }
    }

    function Ba() {
        d.createobject("positioncontrol");
        d.createobject("zoomcontrol");
        m = d.createobject("maptypecontrol");
        d.createobject("navigationcontrol");
        d.createobject("overviewmapcontrol");
        m.registerattribute("visible", !1, function (a) {
            m._visible = A(a);
            H = !0
        }, function () {
            return m._visible
        });
        m.registerattribute("align", "rightbottom", function (a) {
            m._align = String(a).toLowerCase();
            H = !0
        }, function () {
            return m._align
        });
        m.registerattribute("anchor", m._align, function (a) {
            m._align = String(a).toLowerCase();
            H = !0
        }, function () {
            return m._align
        });
        m.registerattribute("x", 2, function (a) {
            a = Number(a);
            m._x = isNaN(a) ? 2 : a;
            H = !0
        }, function () {
            return m._x
        });
        m.registerattribute("y", 2, function (a) {
            a = Number(a);
            m._y = isNaN(a) ? 2 : a;
            H = !0
        }, function () {
            return m._y
        });
        T()
    }

    function T() {
        if (S) {
            var a = n;
            m._visible ? (null == C && (C = new Ca(m), a.appendChild(C.dom)), C.setControlPosition(m._align, Number(m._x), Number(m._y))) : null != C && (a.removeChild(C.dom), C = null);
            H = !1
        }
    }

    function Da() {
        d.createarray("spotstyle");
        d.spotstyle.createItem("default");
        var a = d.spotstyle.getArray(),
          c = null,
          b, f;
        f = a.length;
        for (b = 0; b < f; b++) c = a[b], c.internalObject = new oa(c)
    }

    function Ea() {
        d.createarray("spot");
        var a = d.spot.getArray(),
          c = null,
          b, f;
        f = a.length;
        for (b = 0; b < f; b++) c = a[b], c.internalObject = new U(c)
    }

    function Fa() {
        var a = arguments;
        if (1 <= a.length) {
            var c = String(a[0]).toLowerCase(),
              c = d.spotstyle.createItem(c);
            1 < a.length && (c.url = a[1]);
            2 < a.length && (c.overurl = a[2]);
            3 < a.length && (c.activeurl = a[3]);
            4 < a.length && (c.edge = a[4]);
            5 < a.length && (c.x = a[5]);
            6 < a.length && (c.y = a[6]);
            7 < a.length && (c.shadow = a[7]);
            c.internalObject = new oa(c)
        } else h.trace(3, "bingmaps plugin - addspotstyle() syntax error!")
    }

    function Ga() {
        var a = arguments;
        if (3 <= a.length) {
            var c = String(a[0]).toLowerCase(),
              b = null,
              f = null,
              b = d.spot.getItem(c);
            null != b && V(c);
            b = d.spot.createItem(c);
            b.lat = a[1];
            b.lng = a[2];
            3 < a.length && (b.heading = a[3]);
            4 < a.length && (b.active = a[4]);
            5 < a.length && (b.onclick = a[5]);
            6 < a.length && (b.onhover = a[6]);
            7 < a.length && (b.onover =
              a[7]);
            8 < a.length && (b.onout = a[8]);
            f = new U(b);
            f.update();
            b.internalObject = f;
            f.active && W(c)
        } else h.trace(3, "bingmaps plugin - addspot() syntax error!")
    }

    function Ha() {
        var a = arguments;
        if (5 <= a.length) {
            var c = String(a[0]).toLowerCase(),
              b = null,
              f = null,
              b = d.spot.getItem(c);
            null != b && V(c);
            b = d.spot.createItem(c);
            b.lat = a[1];
            b.lng = a[2];
            b.heading = a[3];
            b.spotstyle = a[4];
            5 < a.length && (b.active = a[5]);
            6 < a.length && (b.onclick = a[6]);
            7 < a.length && (b.onhover = a[7]);
            8 < a.length && (b.onover = a[8]);
            9 < a.length && (b.onout = a[9]);
            f = new U(b);
            f.update();
            b.internalObject = f;
            f.active && W(c)
        } else h.trace(3, "bingmaps plugin - addstylespot() syntax error!")
    }

    function Ia() {
        var a = arguments;
        if (6 <= a.length) {
            var c = String(a[0]).toLowerCase(),
              b = null,
              f = null,
              b = d.spot.getItem(c);
            null != b && V(c);
            b = d.spot.createItem(c);
            b.lat = a[1];
            b.lng = a[2];
            b.heading = a[3];
            b.spotstyle = a[4];
            b.url = a[5];
            6 < a.length && (b.onclick = a[6]);
            7 < a.length && (b.onhover = a[7]);
            8 < a.length && (b.onover = a[8]);
            9 < a.length && (b.onout = a[9]);
            f = new U(b);
            f.update();
            b.internalObject = f
        } else h.trace(3, "bingmaps plugin - addimagespot() syntax error!")
    }

    function V() {
        var a = arguments;
        if (1 == a.length) {
            var a = String(a[0]).toLowerCase(),
              c = null,
              b = null;
            (c = d.spot.getItem(a)) ? (b = c.internalObject, t && t.bmspot == b && (t.bmspot = null), b && b.destroy(), c.internalObject = null, d.spot.removeItem(a)) : h.trace(3, "bingmaps plugin - removespot() - spot[" + a + "] not found!")
        } else h.trace(3, "bingmaps plugin - removespot() syntax error!")
    }

    function pa() {
        var a = d.spot.getArray(),
          c = null,
          b = null,
          f, h;
        h = a.length;
        for (f = 0; f < h; f++) c = a[f], (b = c.internalObject) && b.destroy(), c.internalObject = null;
        d.spot.count = 0;
        t && (t.bmspot = null)
    }

    function ka() {
        var a = d.spot.getArray(),
          c = null,
          b = c = null,
          f, h;
        h = a.length;
        for (f = 0; f < h; f++) c = a[f], c = c.internalObject, c.processupdate(), c.active && (b = c);
        b && t && (t.bmspot = b, t.update())
    }

    function W() {
        var a = arguments;
        if (1 == a.length) {
            var a = String(a[0]).toLowerCase(),
              c = d.spot.getArray(),
              b = null,
              f = null,
              u = null,
              e, k;
            k = c.length;
            for (e = 0; e < k; e++) b = c[e], f = b.internalObject, String(b.name).toLowerCase() == a ? (0 == f.active && (f.active = !0, f.update(1)), u = f) : 0 != f.active && (f.active = !1, f.update(1));
            u && (0 == K && u.xmlobject == E && (E.event_out(null), E = null), t && (t.bmspot = u, t.update()))
        } else h.trace(3, "bingmaps plugin - activatespot() syntax error!")
    }

    function ca() {
        if (k) {
            var a = new Microsoft.Maps.Location(y, w);
            k.setView({
                animate: !1,
                center: a,
                zoom: r
            })
        }
    }

    function ia(a) {
        a = a.toLowerCase();
        return "satellite" != a && "normal" == a ? Microsoft.Maps.MapTypeId.road : Microsoft.Maps.MapTypeId.aerial
    }

    function ja(a) {
        a = a.toLowerCase();
        return "satellite" == a || "normal" != a && "hybrid" != a ? Microsoft.Maps.LabelOverlay.hidden : Microsoft.Maps.LabelOverlay.visible
    }

    function O() {
        var a = arguments;
        1 == a.length ? (a = String(a[0]).toLowerCase(), "satellite" != a && "normal" != a && "hybrid" != a && (a = "satellite"), k ? (k.setMapType(ia(a)), k.setOptions({
            labelOverlay: ja(a)
        }), Z(), ma()) : D = a) : h.trace(3, "bingmaps plugin - setmaptype() syntax error!")
    }

    function Ja() {
        if (k) {
            var a = arguments;
            if (1 <= a.length) {
                var c = Number(a[0]),
                  b = !1;
                1 < a.length && (b = A(a[1]));
                r = c;
                a = new Microsoft.Maps.Location(y, w);
                k.setView({
                    animate: b,
                    center: a,
                    zoom: r
                })
            } else h.trace(3, "bingmaps plugin - setzoom() syntax error!")
        }
    }

    function qa() {
        if (k) {
            var a =
              arguments;
            if (3 == a.length) {
                var c = Number(a[2]),
                  a = new Microsoft.Maps.Location(Number(a[0]), Number(a[1]));
                k.setView({
                    animate: !1,
                    center: a,
                    zoom: c
                })
            } else h.trace(3, "bingmaps plugin - setcenter() syntax error!")
        }
    }

    function Ka() {
        if (k) {
            var a = arguments,
              c = null;
            if (2 <= a.length) {
                var b = a[0],
                  f = a[1];
                null != b && void 0 != b && "" != b && "null" != b && null != f && void 0 != f && "" != f && "null" != f && (c = new Microsoft.Maps.Location(Number(b), Number(f)))
            }
            2 < a.length && A(a[2]);
            3 < a.length && A(a[3]);
            a = r;
            32 > a && (a += 1);
            r = a;
            c && (y = c.latitude, w = c.longitude);
            c = new Microsoft.Maps.Location(y, w);
            k.setView({
                animate: !0,
                center: c,
                zoom: r
            })
        }
    }

    function La() {
        if (k) {
            var a = arguments,
              c = null;
            if (2 <= a.length) {
                var b = a[0],
                  f = a[1];
                null != b && void 0 != b && "" != b && "null" != b && null != f && void 0 != f && "" != f && "null" != f && (c = new Microsoft.Maps.Location(Number(b), Number(f)))
            }
            2 < a.length && A(a[2]);
            a = r;
            --a;
            .5 > a && (a = .5);
            r = a;
            c && (y = c.latitude, w = c.longitude);
            c = new Microsoft.Maps.Location(y, w);
            k.setView({
                animate: !0,
                center: c,
                zoom: r
            })
        }
    }

    function Ma() {
        if (k) {
            var a, c, b, f, h, e, q, g = d.spot.getArray();
            e = g.length;
            if (!(1 > e))
                if (1 == e) q = g[0].internalObject, qa(q.lat, q.lng, r);
                else {
                    q = g[0].internalObject;
                    a = b = q.lat;
                    c = f = q.lng;
                    for (h = 1; h < e; h++) q = g[h].internalObject, q.lat < a && (a = q.lat), q.lat > b && (b = q.lat), q.lng < c && (c = q.lng), q.lng > f && (f = q.lng);
                    a = new Microsoft.Maps.LocationRect.fromCorners(new Microsoft.Maps.Location(b, c), new Microsoft.Maps.Location(a, f));
                    k.setView({
                        animate: !1,
                        bounds: a
                    });
                    na()
                }
        }
    }

    function ra() {
        if (k) {
            var a = arguments;
            if (1 == a.length) {
                var c = String(a[0]),
                  a = X + ".spot[" + c + "]";
                h.get(a) ? (c = Number(h.get(a + ".lat")), a = Number(h.get(a +
                  ".lng")), isNaN(c) || isNaN(a) || (a = new Microsoft.Maps.Location(c, a), k.setView({
                      animate: !0,
                      center: a
                  }))) : h.trace(3, "bingmaps plugin - pantospot() - spot[" + c + "] not found!")
            } else h.trace(3, "bingmaps plugin - pantospot() syntax error!")
        }
    }

    function Na() {
        if (k) {
            var a = arguments;
            2 == a.length ? (a = new Microsoft.Maps.Location(Number(a[0]), Number(a[1])), k.setView({
                animate: !0,
                center: a
            })) : h.trace(3, "bingmaps plugin - panto() syntax error!")
        }
    }

    function Oa() { }

    function Pa() {
        if (k) {
            var a = arguments;
            if (1 <= a.length) {
                var c = X + ".spot[" +
                  String(a[0]) + "].",
                  b = Number(h.get(c + "lat")),
                  f = Number(h.get(c + "lng"));
                isNaN(b) || isNaN(f) || (c = k.getZoom(), 2 <= a.length && (c = Number(a[1])), a = new Microsoft.Maps.Location(b, f), k.setView({
                    animate: !0,
                    center: a,
                    zoom: c
                }))
            } else h.trace(3, "bingmaps plugin - flytospot() syntax error!")
        }
    }

    function Qa() {
        if (k) {
            var a = arguments,
              c = !0;
            if (2 <= a.length) {
                var b = Number(a[0]),
                  f = Number(a[1]);
                if (2 == a.length) a = new Microsoft.Maps.Location(b, f), k.setView({
                    animate: !0,
                    center: a
                }), c = !1;
                else {
                    var d = Number(a[2]);
                    3 == a.length ? (a = new Microsoft.Maps.Location(b,
                      f), k.setView({
                          animate: !0,
                          center: a,
                          zoom: d
                      }), c = !1) : 6 <= a.length && (6 == a.length ? (a = new Microsoft.Maps.Location(b, f), k.setView({
                          animate: !0,
                          center: a,
                          zoom: d
                      }), c = !1) : 7 == a.length && (a = new Microsoft.Maps.Location(b, f), k.setView({
                          animate: !0,
                          center: a,
                          zoom: d
                      }), c = !1))
                }
            }
            c && h.trace(3, "bingmaps plugin - flyto() syntax error!")
        }
    }

    function Ra() {
        if (k) {
            var a = arguments;
            if (2 == a.length) {
                var c = Number(a[0]),
                  a = Number(a[1]),
                  b = k.tryLocationToPixel(new Microsoft.Maps.Location(y, w));
                b && (b.x += c, b.y += a, (c = k.tryPixelToLocation(b)) &&
                  k.setView({
                      animate: !0,
                      center: c,
                      zoom: r
                  }))
            } else h.trace(3, "bingmaps plugin - panby() syntax error!")
        }
    }

    function Ca(a) {
        function c(a) {
            var b = document.createElement("div");
            b.style.position = "absolute";
            b.style.width = p[0] + "px";
            b.style.height = p[1] + "px";
            b.style.fontFamily = "Arial";
            b.style.fontSize = p[2] + "px";
            b.style.fontWeight = "bold";
            g && (b.style[P] = p[0] + "px " + 3 * p[1] + "px");
            b.innerHTML = "<div style='vertical-align:middle;padding-top:" + p[3] + "px;'><center>" + a + "</center></div>";
            return b
        }

        function b(a, b, c) {
            a.style.border =
              c ? "1px solid rgba(100,100,100,0.3)" : "1px solid #acafb8";
            a.style.color = c ? "#ffffff" : "#4f5459";
            a.style.textShadow = c ? "#4f5459 0px -1px 1px" : "#f2f3f5 0px 1px 1px";
            var f = J;
            if ("Microsoft Internet Explorer" == navigator.appName || 0 <= navigator.userAgent.indexOf("MSIE ") || 0 <= navigator.userAgent.indexOf("Trident")) f = "ms";
            "" != f && (f = "-" + f + "-");
            a.style.backgroundImage = "webkit" == J ? c ? "-webkit-gradient(linear, 0% 0%, 0% 100%, from(#b0b4ba), to(#6d7580))" : "-webkit-gradient(linear, 0% 0%, 0% 100%, from(#f3f4f5), to(#bdc0ca))" :
              "-ms-" == f ? c ? f + "linear-gradient(top, #b0b4ba, #6d7580)" : f + "linear-gradient(top, #f3f4f5, #bdc0ca)" : c ? f + "linear-gradient(to bottom, #b0b4ba, #6d7580)" : f + "linear-gradient(to bottom, #f3f4f5, #bdc0ca)";
            g && (a.style.backgroundPosition = "0px " + -(b - 1) * p[1] + "px")
        }

        function f(a) {
            a && (a.stopPropagation(), a.preventDefault(), a.stopImmediatePropagation())
        }

        function k(a) {
            a && (f(a), O("normal"));
            b(m, 1, !0);
            b(x, 2, !1);
            b(r, 3, !1)
        }

        function e(a) {
            a && (f(a), O("satellite"));
            b(m, 1, !1);
            b(x, 2, !0);
            b(r, 3, !1)
        }

        function q(a) {
            a && (f(a), O("hybrid"));
            b(m, 1, !1);
            b(x, 2, !1);
            b(r, 3, !0)
        }
        var g = "v" == String(a.buttonalign).toLowerCase(),
          l = Number(a.scale),
          n = String(a.buttontexts).split("|");
        3 != n.length && (n = ["Map", "Satellite", "Hybrid"]);
        isNaN(l) && (l = 1);
        h.ismobile && (l *= .5);
        var l = l * F,
          z = document.createElement("div");
        z.style.position = "absolute";
        this.dom = z;
        var m = null,
          x = null,
          r = null,
          p = [80 * l, 26 * l, 12 * l, 6 * l],
          t = [0, 0];
        this.onMapTypeChanged = function (a) {
            "normal" == a ? k() : "satellite" == a ? e() : "hybrid" == a && q()
        };
        this.setControlPosition = function (a, b, c) {
            var f = Math.floor(d.pixelwidth *
                h.stagescale),
              e = Math.floor(d.pixelheight * h.stagescale),
              k = g ? p[0] : 3 * p[0],
              u = g ? 3 * p[1] : p[1],
              k = k + t[0],
              u = u + t[1],
              l = 0 <= a.indexOf("left") && 0 > a.indexOf("right");
            a = 0 <= a.indexOf("top") && 0 > a.indexOf("bottom");
            b = b * h.stagescale * F;
            c = c * h.stagescale * F;
            l || (b = f - k - b);
            a || (c = e - u - c);
            z.style.left = b + "px";
            z.style.top = c + "px"
        };
        (function () {
            z.style.borderRadius = 7 * l + "px";
            z.style.borderBottom = "2px solid rgba(100,100,100,0.5)";
            z.style.boxShadow = z.style.MozBoxShadow = z.style.webkitBoxShadow = "2px 2px 4px rgba(0,0,0,0.5)";
            g ? (z.style.width =
              p[0] + "px", z.style.height = 3 * p[1] + 1 + "px") : (z.style.width = 3 * p[0] + "px", z.style.height = p[1] + 1 + "px");
            m = c(n[0]);
            x = c(n[1]);
            r = c(n[2]);
            var a = 5 * l + "px";
            g ? (m.style.borderRadius = a + " " + a + " 0px 0px", r.style.borderRadius = "0px 0px " + a + " " + a, t = [4, 4], m.style.top = "0px", x.style.top = p[1] + "px", r.style.top = 2 * p[1] + "px") : (m.style.borderRadius = a + " 0px 0px " + a, r.style.borderRadius = "0px " + a + " " + a + " 0px", t = [4, 4], m.style.left = "0px", x.style.left = p[0] + "px", r.style.left = 2 * p[0] + "px");
            z.appendChild(m);
            z.appendChild(x);
            z.appendChild(r);
            v.mouse && (m.addEventListener("mousedown", k), m.addEventListener("mouseup", f));
            v.touch && (m.addEventListener(Q, k), m.addEventListener(L, f));
            v.mouse && (x.addEventListener("mousedown", e), x.addEventListener("mouseup", f));
            v.touch && (x.addEventListener(Q, e), x.addEventListener(L, f));
            v.mouse && (r.addEventListener("mousedown", q), r.addEventListener("mouseup", f));
            v.touch && (r.addEventListener(Q, q), r.addEventListener(L, f));
            a = D;
            "normal" == a ? k() : "satellite" == a ? e() : "hybrid" == a && q()
        })()
    }

    function Aa() {
        function a(a) {
            a && (a.preventDefault(),
              a.stopImmediatePropagation(), a.stopPropagation())
        }

        function c(c) {
            e.dragable && (m = !0, f(c), v.mouse && (window.addEventListener("mousemove", f, !0), window.addEventListener("mouseup", b, !0)), v.touch && (window.addEventListener(da, f, !0), window.addEventListener(ea, b, !0), window.addEventListener(L, b, !0)), a(c))
        }

        function b(c) {
            v.mouse && (window.removeEventListener("mousemove", f, !0), window.removeEventListener("mouseup", b, !0));
            v.touch && (window.removeEventListener(da, f, !0), window.removeEventListener(ea, b, !0), window.removeEventListener(L,
              b, !0));
            a(c)
        }

        function f(a) {
            if (null == h) b(a);
            else if (null != g && null != e.bmspot) {
                var c;
                c = null;
                var f = 0,
                  d = 0;
                c = {
                    x: 0,
                    y: 0
                };
                var I = g.svg.parentNode.getBoundingClientRect();
                v && v.touch ? (a = a.changedTouches ? a.changedTouches : [a], 0 < a.length && (d = a[0], f = Math.round(d.clientX - I.left), d = Math.round(d.clientY - I.top))) : (f = Math.round(a.clientX - I.left), d = Math.round(a.clientY - I.top));
                c = 180 * Math.atan2(d - c.y, f - c.x) / Math.PI;
                c -= e.bmspot.heading;
                if (1 == m) r = c - Number(h.view.hlookat), m = !1;
                else {
                    for (c -= r; 180 < c;) c -= 360;
                    for (; -180 > c;) c += 360;
                    h.view.hlookat = c
                }
                e.needredraw = !0
            }
        }

        function u() {
            e.needredraw = !0;
            g && (g.path.setAttribute("stroke", ha(e.linecolor)), g.path.setAttribute("stroke-width", e.linewidth), g.path.setAttribute("stroke-opacity", e.linealpha * e.alpha), g.path.setAttribute("fill", ha(e.fillcolor)), g.path.setAttribute("fill-opacity", e.fillalpha * e.alpha))
        }
        var e = this,
          q = null,
          g = null;
        e.visible = !1;
        e.dragable = !0;
        e.size = 100;
        e.zoomwithmap = !1;
        e.alpha = .5;
        e.fillcolor = 16777215;
        e.fillalpha = 1;
        e.linewidth = 0;
        e.linecolor = 16777215;
        e.linealpha = 0;
        e.glow = !0;
        e.glowcolor = 16777215;
        e.glowwidth = 4;
        e.glowstrength = 3;
        e.headingoffset = 90;
        e.bmspot = null;
        e.needredraw = !0;
        var l = null,
          n = null,
          m = !1,
          r = 0,
          t = null,
          y = 0,
          p = 0,
          w = -1E3,
          I = -1E3,
          sa = -1,
          q = d.radar;
        q || (h.set(X + ".radar.visible", !1), q = d.radar);
        e.destroy = function () {
            e.bmspot = null;
            n && k.entities.remove(n);
            l && k.entities.remove(l);
            n = l = null
        };
        e.update = function () {
            e.needredraw = !0
        };
        e.updatehandler = function () {
            if (k && (null == l && null != e.bmspot && (l = new Microsoft.Maps.Pushpin(new Microsoft.Maps.Location(e.bmspot.lat, e.bmspot.lng), {
                icon: fa.src,
                anchor: {
                x: 0,
                y: 0
            },
                width: 64,
                height: 64,
                zIndex: 0
            }), k.entities.push(l)), null != l)) {
                if (null == l._krpdom) {
                    a: {
                        var a = l,
                          b;
                        for (b in a)
                            if (a[b] && "object" === typeof a[b] && a[b].dom && a[b].dom.childNodes && a[b].dom.childNodes[0]) {
                                a._krpdom = a[b].dom;
                                a._krpimg = a[b].dom.childNodes[0];
                                break a
                            }
                    }
                    if (null == l._krpdom) return; g = va(500, 500); u(); l._krpimg.style.display = "none"; l._krpdom.style.overflow = "visible"; l._krpdom.appendChild(g.svg); v.mouse && g.path.addEventListener("mousedown", c, !0); v.touch && g.path.addEventListener(Q, c, !0)
                }
                if (null ==
                  e.bmspot || 0 == e.visible) g && g.hide();
                else {
                    g && g.show();
                    a = Number(h.view.hlookat);
                    b = Number(h.view.hfov);
                    a += e.bmspot.heading;
                    a += e.headingoffset;
                    if (w != e.bmspot.lat || I != e.bmspot.lng) w = e.bmspot.lat, I = e.bmspot.lng, l.setLocation(new Microsoft.Maps.Location(e.bmspot.lat, e.bmspot.lng));
                    if (e.bmspot != t || a != y || b != p) t = e.bmspot, y = a, p = b, e.needredraw = !0;
                    if (e.needredraw) {
                        l && l._krpdom && (l._krpdom.style.overflow = "visible");
                        var f = e.zoomwithmap ? Math.pow(2, k.getZoom()) / 1E4 : 1,
                          f = 1 * e.size * f * F;
                        2800 < f && (f = 2800);
                        if (g) {
                            var d = 16 *
                              (Math.floor(2 * f / 16) + 1) + 16;
                            d != sa && (sa = d, g.svg.setAttribute("width", d), g.svg.setAttribute("height", d), g.svg.style.left = -d / 2 + "px", g.svg.style.top = -d / 2 + "px", g.centerx = d / 2, g.centery = d / 2);
                            g.drawpie(d / 2, d / 2, f, a - .5 * b, a + .5 * b)
                        }
                    }
                    e.needredraw = !1
                }
            }
        };
        (function () {
            q.registerattribute("visible", e.visible, function (a) {
                e.visible = A(a);
                e.update()
            }, function () {
                return e.visible
            });
            q.registerattribute("dragable", e.dragable, function (a) {
                e.dragable = A(a)
            }, function () {
                return e.dragable
            });
            q.registerattribute("size", e.size, function (a) {
                e.size =
                  Number(a);
                e.update()
            }, function () {
                return e.size
            });
            q.registerattribute("zoomwithmap", e.zoomwithmap, function (a) {
                e.zoomwithmap = A(a);
                e.update()
            }, function () {
                return e.zoomwithmap
            });
            q.registerattribute("alpha", e.alpha, function (a) {
                e.alpha = Number(a);
                u()
            }, function () {
                return e.alpha
            });
            q.registerattribute("fillcolor", e.fillcolor, function (a) {
                e.fillcolor = Number(a);
                u()
            }, function () {
                return e.fillcolor
            });
            q.registerattribute("fillalpha", e.fillalpha, function (a) {
                e.fillalpha = Number(a);
                u()
            }, function () {
                return e.fillalpha
            });
            q.registerattribute("linewidth", e.linewidth, function (a) {
                e.linewidth = Number(a);
                u()
            }, function () {
                return e.linewidth
            });
            q.registerattribute("linecolor", e.linecolor, function (a) {
                e.linecolor = Number(a);
                u()
            }, function () {
                return e.linecolor
            });
            q.registerattribute("linealpha", e.linealpha, function (a) {
                e.linealpha = Number(a);
                u()
            }, function () {
                return e.linealpha
            });
            q.registerattribute("headingoffset", e.headingoffset, function (a) {
                e.headingoffset = Number(a);
                e.update()
            }, function () {
                return e.headingoffset
            });
            u()
        })()
    }

    function oa(a) {
        function c(a) {
            void 0 ===
              a && (a = !1);
            var c = b.xmlobject.name,
              e = d.spot.getArray(),
              h = null,
              g, k;
            k = e.length;
            for (g = 0; g < k; g++) h = e[g].internalObject, h.spotstyle == c && (0 == a || h.active) && h.update(1)
        }
        var b = this;
        b.url = null;
        b.overurl = null;
        b.activeurl = null;
        b.edge = "center";
        b.x = 0;
        b.y = 0;
        b.shadow = !0;
        b.scale = 1;
        b.xmlobject = null;
        b.url_bitmapdata = null;
        b.overurl_bitmapdata = null;
        b.activeurl_bitmapdata = null;
        b.url_bitmapdata = fa;
        b.overurl_bitmapdata = null;
        b.activeurl_bitmapdata = ta;
        b.xmlobject = a;
        a.registerattribute("url", b.url, function (a) {
            if ("" == a || "null" ==
              a) a = null;
            a != b.url && (b.url = a, null != b.url ? R(b.url, function (a) {
                b.url_bitmapdata = a;
                c()
            }) : (b.url_bitmapdata = fa, c()))
        }, function () {
            return b.url
        });
        a.registerattribute("overurl", b.overurl, function (a) {
            if ("" == a || "null" == a) a = null;
            a != b.overurl && (b.overurl = a, null != b.overurl ? R(b.overurl, function (a) {
                b.overurl_bitmapdata = a
            }) : b.overurl_bitmapdata = null)
        }, function () {
            return b.overurl
        });
        a.registerattribute("activeurl", b.activeurl, function (a) {
            if ("" == a || "null" == a) a = null;
            a != b.activeurl && (b.activeurl = a, null != b.activeurl ? R(b.activeurl,
              function (a) {
                  b.activeurl_bitmapdata = a;
                  c(!0)
              }) : (b.activeurl_bitmapdata = ta, c(!0)))
        }, function () {
            return b.activeurl
        });
        a.registerattribute("edge", b.edge, function (a) {
            b.edge = String(a)
        }, function () {
            return b.edge
        });
        a.registerattribute("x", b.x, function (a) {
            b.x = Number(a)
        }, function () {
            return b.x
        });
        a.registerattribute("y", b.y, function (a) {
            b.y = Number(a)
        }, function () {
            return b.y
        });
        a.registerattribute("shadow", b.shadow, function (a) {
            b.shadow = A(a)
        }, function () {
            return b.shadow
        });
        a.registerattribute("scale", b.scale, function (a) {
            b.scale =
              Number(a)
        }, function () {
            return b.scale
        })
    }

    function U(a) {
        function c() {
            var a = d.spotstyle.getItem(g.spotstyle),
              b = null;
            return null == a ? (a = "bingmaps plugin - spot[" + l.name + '] - spotstyle "' + g.spotstyle + '" not found!', a != y && (y = a, h.trace(3, a)), null) : b = a.internalObject
        }

        function b(a, b) {
            x = a;
            b || (b = g.zoomwithmap ? Math.pow(2, r) / Math.pow(2, g.zoombaselevel) : 1);
            var d = x,
              e = d ? d.naturalWidth : 12,
              f = d ? d.naturalHeight : 12,
              h = Math.floor(e / 2),
              k = Math.floor(f / 2),
              l = c(),
              m = 1 * b * F;
            l && x && (m = Number(l.scale) * b * F, d && void 0 !== d.naturalScale &&
              (m *= d.naturalScale), e *= m, f *= m, h = l.edge, k = l.x, l = l.y, 0 <= h.indexOf("left") || (k = 0 <= h.indexOf("right") ? k + e : k + Math.floor(e / 2)), 0 <= h.indexOf("top") || (l = 0 <= h.indexOf("bottom") ? l + f : l + Math.floor(f / 2)), h = k, k = l);
            w = {
                icon: d.src,
                anchor: {
                    x: h,
                    y: k
                },
                width: e,
                height: f,
                zIndex: g.active ? 2 : 1,
                typeName: "_krp_bingmaps_pin_cursor"
            };
            p && (p.setOptions(w), p._krpimg && (p._krpimg.style[G + "Origin"] = "0 0", p._krpimg.style[G] = "scale(" + m + "," + m + ")"));
            return w
        }

        function f(a) {
            for (var b in a)
                if (a[b] && "object" === typeof a[b] && a[b].dom && a[b].dom.childNodes &&
                  a[b].dom.childNodes[0]) {
                    a._krpdom = a[b].dom;
                    a._krpimg = a[b].dom.childNodes[0];
                    break
                }
        }

        function u(a) {
            g.active && 0 == K || (a = l.onclick, null != a && "" != a && h.call(a, l))
        }

        function e(a) {
            g.active && 0 == K || (null == t && (a = c()) && a.overurl_bitmapdata && b(a.overurl_bitmapdata), E = l, a = l.onover, null != a && "" != a && h.call(a, l))
        }

        function n(a) {
            E = null;
            null != a && g.active && 0 == K || (null == t && (a = c()) && (g.active && a.activeurl_bitmapdata ? b(a.activeurl_bitmapdata) : a.url_bitmapdata && b(a.url_bitmapdata)), a = l.onout, null != a && "" != a && h.call(a, l))
        }
        var g =
          this;
        g.spotstyle = "default";
        g.url = null;
        g.lat = Number.NaN;
        g.lng = Number.NaN;
        g.heading = 0;
        g.active = !1;
        g.needdom = !1;
        g.zoomwithmap = !1;
        g.zoombaselevel = 10;
        g.needupdate = !1;
        var l = null,
          m = 0,
          t = null,
          v = null,
          x = null,
          y = null,
          p = null,
          w = null,
          l = a;
        g.xmlobject = l;
        g.update = function (a) {
            void 0 === a && (a = 0);
            g.needupdate = !0;
            m |= a;
            N = !0
        };
        g.processupdate = function () {
            if (null != l) {
                if (2 == (m & 2)) {
                    var a = !1;
                    if (k) {
                        var d = !isNaN(g.lat) && !isNaN(g.lng),
                          h = d ? new Microsoft.Maps.Location(g.lat, g.lng) : new Microsoft.Maps.Location(0, 0);
                        null == p && d ? (d = c(), a =
                            g.active ? d.activeurl_bitmapdata : d.url_bitmapdata, p = null, w = b(a), p = new Microsoft.Maps.Pushpin(h, w), k.entities.push(p), f(p), h = d.scale, void 0 !== a.naturalScale && (h *= a.naturalScale), g.zoomwithmap && (h *= Math.pow(2, r) / Math.pow(2, g.zoombaselevel)), h *= F, p._krpimg ? (p._krpimg.style[G + "Origin"] = "0 0", p._krpimg.style[G] = "scale(" + h + "," + h + ")") : N = g.needdom = !0, Microsoft.Maps.Events.addHandler(p, "click", u), Microsoft.Maps.Events.addHandler(p, "mouseover", e), Microsoft.Maps.Events.addHandler(p, "mouseout", n), a = !0) : p && d &&
                          (p.setLocation(h), a = !0)
                    }
                    a && (m &= -3)
                }
                1 == (m & 1) && g.updateimage() && (m &= -2);
                0 == m && (g.needupdate = !1)
            }
        };
        g.updateimage = function () {
            if ("" == g.url || "null" == g.url) g.url = null;
            if (g.url) g.url != t && (t = g.url, R(g.url, function (a) {
                v = a;
                b(a)
            }));
            else {
                v = t = null;
                var a = c();
                a && (a = g.active ? a.activeurl_bitmapdata : a.url_bitmapdata, x != a && b(a))
            }
            return !0
        };
        g.scalespot = function (a) {
            b(x, a)
        };
        g.try_dom_access = function () {
            if (p)
                if (f(p), p._krpimg) {
                    var a = c();
                    b(t ? v : g.active ? a.activeurl_bitmapdata : a.url_bitmapdata);
                    g.needdom = !1
                } else N = g.needdom = !0
        };
        g.destroy = function () {
            p && k && k.entities.remove(p);
            x = l = w = p = null
        };
        l.event_out = n;
        (function () {
            a.registerattribute("spotstyle", g.spotstyle, function (a) {
                if (null == a || "" == a) a = "default";
                g.spotstyle = String(a).toLowerCase();
                g.update(1)
            }, function () {
                return g.spotstyle
            });
            a.registerattribute("url", g.url, function (a) {
                a != g.url && (g.url = String(a), g.update(1))
            }, function () {
                return g.url
            });
            a.registerattribute("lat", g.lat, function (a) {
                g.lat = Number(a);
                g.update(2)
            }, function () {
                return g.lat
            });
            a.registerattribute("lng", g.lng,
              function (a) {
                  g.lng = Number(a);
                  g.update(2)
              },
              function () {
                  return g.lng
              });
            a.registerattribute("heading", g.heading, function (a) {
                g.heading = Number(a)
            }, function () {
                return g.heading
            });
            a.registerattribute("active", g.active, function (a) {
                g.active = A(a);
                g.update(1)
            }, function () {
                return g.active
            });
            a.registerattribute("zoomwithmap", g.zoomwithmap, function (a) {
                g.zoomwithmap = A(a);
                g.update(2)
            }, function () {
                return g.zoomwithmap
            });
            a.registerattribute("zoombaselevel", g.zoombaselevel, function (a) {
                g.zoombaselevel = Number(a);
                g.update(2)
            },
              function () {
                  return g.zoombaselevel
              });
            a.registerattribute("onover", null);
            a.registerattribute("onhover", null);
            a.registerattribute("onout", null);
            a.registerattribute("onclick", null);
            a.activatespot = function () {
                W(l.name)
            };
            a.pantospot = function () {
                ra(l.name)
            }
        })()
    }
    var fa = {
        src: "data:image/png;base64,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",
        naturalWidth: 64,
        naturalHeight: 64,
        naturalScale: .5
    },
      ta = {
          src: "data:image/png;base64,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",
          naturalWidth: 64,
          naturalHeight: 64,
          naturalScale: .5
      },
      h = null,
      d = null,
      X = null,
      ga = null,
      M = null,
      J = "webkit",
      G = "webkitTransform",
      P = "-webkit-background-size",
      v = null,
      Q = "touchstart",
      da = "touchmove",
      L = "touchend",
      ea = "touchcancel",
      F = 1,
      B = null,
      n = null,
      k = null,
      S = !1,
      N = !1,
      H = !0,
      t = null,
      E = null,
      aa = !1,
      C = null,
      m = null,
      D, ua, y, w, r, K;
    this.registerplugin = function (a, c, b) {
        function f() {
            var a = document.createElement("style");
            a.type = "text/css";
            a.innerHTML = "._krp_bingmaps_pin_cursor{cursor:pointer!important;}";
            document.getElementsByTagName("head")[0].appendChild(a)
        }
        h = a;
        d = b;
        X = c;
        if ("1.18" > h.version || 0 == h.hasOwnProperty("haveLicense")) h.trace(3, "Bingmaps Plugin - too old krpano version (min. version 1.18)");
        else {
            ga = h.device;
            ga.androidstock && (F = ga.pixelratio);
            a = h.device.browser;
            c = a.css;
            v = a.events;
            Q = v.touchstart;
            da = v.touchmove;
            L = v.touchend;
            ea = v.touchcancel;
            J = c.prefix;
            G = c.transform;
            P = c.backgroundsize;
            J = void 0 === J || null === J ? "webkit" : String(J).toLowerCase();
            if (void 0 === G || null === G) G = "webkitTransform";
            if (void 0 === P || null === P) P = "-webkit-background-size";
            f();
            d.maskchildren = !0;
            d.registerattribute("key", null);
            d.registerattribute("maptype", "satellite", function (a) {
                O(a)
            }, function () {
                return D
            });
            d.registerattribute("maptypes", "normal|satellite|hybrid", function (a) {
                ua = String(a)
            }, function () {
                return ua
            });
            d.registerattribute("lat", 0, function (a) {
                y = Number(a);
                ca()
            }, function () {
                return y
            });
            d.registerattribute("lng", 0, function (a) {
                w = Number(a);
                ca()
            }, function () {
                return w
            });
            d.registerattribute("zoom", 1, function (a) {
                r = Number(a);
                ca()
            }, function () {
                return r
            });
            d.registerattribute("activespotenabled", !1, function (a) {
                K = A(a)
            }, function () {
                return K
            });
            d.registerattribute("bgcolor", 0);
            d.registerattribute("bgalpha", 0);
            d.registerattribute("mapsapi", "");
            d.registerattribute("onmapready", null);
            d.registerattribute("onmapmoved", null);
            d.registerattribute("onmapzoomed", null);
            d.registerattribute("onmaptypechanged", null);
            d.setzoom = Ja;
            d.setcenter = qa;
            d.setmaptype = O;
            d.addspot = Ga;
            d.addstylespot = Ha;
            d.addimagespot = Ia;
            d.removespot = V;
            d.removeallspots = pa;
            d.activatespot = W;
            d.addspotstyle = Fa;
            d.panto = Na;
            d.pantospot = ra;
            d.panby =
              Ra;
            d.flyto = Qa;
            d.flytospot = Pa;
            d.cancelflyto = Oa;
            d.zoomin = Ka;
            d.zoomout = La;
            d.zoomtospotsextent = Ma;
            d.resetspots = pa;
            d.updatespots = ka;
            d.updatecontrols = T;
            Da();
            Ea();
            0 == h.haveLicense("maps") && setTimeout(wa, 100);
            d.registercontentsize(400, 300);
            a = Math.floor(d.pixelwidth * h.stagescale);
            c = Math.floor(d.pixelheight * h.stagescale);
            n = document.createElement("div");
            n.style.position = "absolute";
            n.style.left = 0;
            n.style.top = 0;
            n.style.width = a + "px";
            n.style.height = c + "px";
            n.style.overflow = "hidden";
            n.style.fontFamily = "Arial";
            n.style.fontSize =
              9 * h.stagescale + "px";
            n.style.fontSize = 9 * h.stagescale + "px";
            n.style.webkitUserSelect = "none";
            n.style.MozUserSelect = "none";
            d.sprite.appendChild(n);
            if (window.Microsoft && window.Microsoft.Maps) setTimeout(Y, 10);
            else if (window._krpano_bmap_loadedcallbacks_) window._krpano_bmap_loadedcallbacks_.push(Y);
            else {
                window._krpano_bmap_loadedcallbacks_ = [];
                B = "_krpano_bmap_cb_";
                for (a = 0; 16 > a; a++) B += String.fromCharCode(65 + 32 * Math.round(Math.random()) + Math.floor(25 * Math.random()));
                window[B] = xa;
                a = "";
                d.culturecode && (a = "&mkt=" +
                  d.culturecode);
                (c = d.mapsapi) && "" != c || (c = 0 == ("" + window.location.href).toLowerCase().indexOf("https:") ? "https://ecn.dev.virtualearth.net/mapcontrol/mapcontrol.ashx?v=7.0&s=1" : "http://ecn.dev.virtualearth.net/mapcontrol/mapcontrol.ashx?v=7.0");
                b = document.createElement("script");
                b.type = "text/javascript";
                b.src = c + a + "&onscriptload=" + B;
                debugger;
                document.body.appendChild(b)
            }
        }
    };
    this.unloadplugin = function () {
        S = !1;
        null != M && (clearInterval(M), M = null);
        h = d = k = n = null
    };
    this.onresize = function (a, c) {
        var b = Math.floor(a * h.stagescale),
          d = Math.floor(c * h.stagescale);
        n && (n.style.width = b + "px", n.style.height = d + "px");
        k && (k.setOptions({
            height: d,
            width: b
        }), Z());
        T();
        return !1
    }
};