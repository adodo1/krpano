/*
	krpano 1.19-pr7 Google Maps Plugin (build 2016-09-09)
	http://krpano.com/plugins/googlemaps/
*/
var krpanoplugin = function () {
    function x(a) {
        return "boolean" == typeof a ? a : 0 <= "yesontrue1".indexOf(String(a).toLowerCase())
    }

    function M(a) {
        return "rgb(" + (a >> 16 & 255) + "," + (a >> 8 & 255) + "," + (a & 255) + ")"
    }

    function Y() {
        null != z && (window[z] = null, delete window[z], z = null);
        f && google && google.maps && f.trace(0, "Google Maps API Version: " + google.maps.version);
        var a = window._krpano_gmap_loadedcallbacks_;
        if (a) {
            window._krpano_gmap_loadedcallbacks_ = null;
            delete window._krpano_gmap_loadedcallbacks_;
            var d = a.length,
				b;
            if (0 < d && 99 > d)
                for (b =
					0; b < d; b++) setTimeout(a[b], 10 + 5 * b)
        }
        f && e && (k = document.createElement("div"), k.style.position = "absolute", k.style.width = "100%", k.style.height = "100%", q.android && q.firefox && (k.style.opacity = .99), e.sprite.appendChild(k), a = {
            mapTypeId: ea(G),
            center: new google.maps.LatLng(e.lat, e.lng),
            zoom: v,
            tilt: N,
            heading: O,
            keyboardShortcuts: !1,
            noClear: !0
        }, f.control && !0 === f.control.disablewheel && (a.scrollwheel = !1), a = Z(a), google.maps.visualRefresh = !0, h = new google.maps.Map(k, a), q.touchdeviceNS && (k.addEventListener(q.browser.events.touchstart,
			wa, !0), k.addEventListener(q.browser.events.touchend, fa, !0), k.addEventListener(q.browser.events.touchcancel, fa, !0)), k.addEventListener("DOMMouseScroll", xa, !0), null == H && (H = setInterval(ya, 1E3 / 60)), u = new za, ga(), ha = !0, f.call(e.onmapready, e), google.maps.event.addListener(h, "maptypeid_changed", Aa), google.maps.event.addListener(h, "center_changed", ia), google.maps.event.addListener(h, "zoom_changed", ia))
    }

    function ja(a, d) {
        var b = document.createElementNS("http://www.w3.org/2000/svg", "svg");
        b.setAttribute("width",
			a);
        b.setAttribute("height", d);
        b.style.position = "absolute";
        b.style.left = -a / 2 + "px";
        b.style.top = -d / 2 + "px";
        var g = document.createElementNS("http://www.w3.org/2000/svg", "path");
        g.style.pointerEvents = "visiblePainted";
        g.style.cursor = "pointer";
        g.setAttribute("stroke", "rgba(255,0,0,1.0)");
        g.setAttribute("stroke-width", 2);
        g.setAttribute("fill", "rgba(0,255,0,0.5)");
        b.appendChild(g);
        var e = {};
        e.svg = b;
        e.path = g;
        e.centerx = a / 2;
        e.centery = d / 2;
        var f = -1;
        e.hide = function () {
            0 != f && (f = 0, b.style.display = "none")
        };
        e.show = function () {
            1 !=
				f && (f = 1, b.style.display = "")
        };
        e.drawpie = function (a, b, d, e, f) {
            var h, p;
            e > f && (h = f, f = e, e = h);
            e = e * Math.PI / 180;
            f = f * Math.PI / 180;
            p = f - e;
            h = (e + f) / 2;
            var y = p > Math.PI ? 1 : 0;
            p >= 2 * Math.PI && (p = 2 * Math.PI - .01);
            e = h - p / 2;
            f = h + p / 2;
            h = a + d * Math.sin(e);
            e = b - d * Math.cos(e);
            p = a + d * Math.sin(f);
            f = b - d * Math.cos(f);
            g.setAttribute("d", "M " + a + "," + b + " L " + h + "," + e + " A " + d + "," + d + " 0 " + y + " 1 " + p + "," + f + " Z")
        };
        return e
    }

    function Ba() {
        var a = document.createElement("div");
        a.style.position = "absolute";
        a.style.left = "50%";
        a.style.top = "50%";
        a.style.width =
			"100%";
        a.style.zIndex = 999998;
        a.style.color = "#FFFFFF";
        a.style.opacity = .67;
        a.style.fontSize = f.isphone ? "10px" : "16px";
        a.style["-webkit-text-size-adjust"] = "none";
        a.style.display = "block";
        a.style.cursor = "default";
        a.style.pointerEvents = "none";
        var d = document.createElement("div");
        d.style.position = "relative";
        d.style.left = "-50%";
        d.style.top = f.isphone ? "-64px" : "-46px";
        d.style.pointerEvents = "none";
        d.style.fontFamily = "sans-serif";
        d.style.textShadow = "#000000 1px 1px 2px";
        d.innerHTML = "<center><i><b>krpano Google Maps Plugin<br/>DEMO MODE</b></i></center>";
        a.appendChild(d);
        e && e.sprite && e.sprite.appendChild(a)
    }

    function wa(a) {
        f && (f.control.preventTouchEvents = !1)
    }

    function fa(a) {
        setTimeout(function () {
            f && (f.control.preventTouchEvents = !0)
        }, 50)
    }

    function xa(a) {
        f && a.stopPropagation()
    }

    function P(a, d) {
        var b = document.createElement("img");
        b.addEventListener("error", function () {
            f && e && f.trace(3, e._type + "[" + e.name + "] loading error: " + a)
        }, !0);
        b.addEventListener("load", function () {
            f && e && d(b)
        }, !1);
        b.src = f.parsePath(a)
    }

    function Aa() {
        if (h) {
            var a = "" + h.getMapTypeId();
            a != G &&
				(G = a, f.call(e.onmaptypechanged, e))
        }
    }

    function ia() {
        if (h) {
            var a = h.getCenter();
            if (n != a.lat() || t != a.lng()) n = a.lat(), t = a.lng(), f.call(e.onmapmoved, e);
            a = h.getZoom();
            v != a && (u && (u.needredraw = !0), v = a, f.call(e.onmapzoomed, e), u && u.updatehandler())
        }
    }

    function I(a) {
        return h && k ? (a = k.clientHeight, (a = 0 < k.clientWidth && 0 < a) ? 0 == aa && (aa = f.timertick) : aa = 0, a) : !1
    }

    function Q(a, d) {
        n = a;
        t = d;
        I("setCenter") ? h.setCenter(new google.maps.LatLng(a, d)) : (w = !0, J = n, K = t)
    }

    function A(a) {
        v = a;
        I("setZoom") ? h.setZoom(Math.round(v)) : D = !0
    }

    function E(a, d) {
        I("panTo") ? h.panTo(new google.maps.LatLng(a, d)) : (n = a, t = d, J = n, K = t, w = !0)
    }

    function ba(a) {
        if (h) {
            var d = v;
            a & 1 && Q(n, t);
            a & 2 && A(d)
        }
    }

    function la() {
        h && (h.setTilt(N), h.setHeading(O))
    }

    function Z(a) {
        a.styles = ca ? [] : [{
            featureType: "poi",
            elementType: "labels",
            stylers: [{
                visibility: "off"
            }]
        }];
        var d = ("|" + da + "|").toLowerCase();
        a.zoomControl = 0 <= d.indexOf("|zoom|");
        a.mapTypeControl = 0 <= d.indexOf("|maptype|");
        a.scaleControl = 0 <= d.indexOf("|scale|");
        a.streetViewControl = 0 <= d.indexOf("|streetview|");
        return a
    }

    function ea(a) {
        a =
			a.toLowerCase();
        if ("satellite" != a) {
            if ("normal" == a) return google.maps.MapTypeId.ROADMAP;
            if ("hybrid" == a) return google.maps.MapTypeId.HYBRID;
            if ("terrain" == a) return google.maps.MapTypeId.TERRAIN
        }
        return google.maps.MapTypeId.SATELLITE
    }

    function ma() {
        var a = arguments;
        1 == a.length ? (a = String(a[0]).toLowerCase(), "satellite" != a && "normal" != a && "hybrid" != a && "terrain" != a && (a = "satellite"), h ? h.setMapTypeId(ea(a)) : G = a) : f.trace(3, "googlemaps plugin - setmaptype() syntax error!")
    }

    function Ca() {
        if (h) {
            var a = arguments;
            if (1 <=
				a.length) {
                var d = Number(a[0]);
                1 < a.length && x(a[1]);
                A(d)
            } else f.trace(3, "googlemaps plugin - setzoom() syntax error!")
        }
    }

    function na() {
        if (h) {
            var a = arguments;
            if (3 == a.length) {
                var d = Number(a[2]);
                Q(Number(a[0]), Number(a[1]));
                A(d)
            } else f.trace(3, "googlemaps plugin - setcenter() syntax error!")
        }
    }

    function Da() {
        if (h) {
            var a = arguments,
				d = null;
            if (2 <= a.length) {
                var b = a[0],
					e = a[1];
                null != b && void 0 != b && "" != b && "null" != b && null != e && void 0 != e && "" != e && "null" != e && (d = new google.maps.LatLng(Number(b), Number(e)))
            }
            2 < a.length && x(a[2]);
            3 < a.length && x(a[3]);
            a = v;
            32 > a && (a += 1);
            v = a;
            d && (n = d.lat(), t = d.lng());
            d = n;
            b = t;
            A(a);
            Q(d, b)
        }
    }

    function Ea() {
        if (h) {
            var a = arguments,
				d = null;
            if (2 <= a.length) {
                var b = a[0],
					e = a[1];
                null != b && void 0 != b && "" != b && "null" != b && null != e && void 0 != e && "" != e && "null" != e && (d = new google.maps.LatLng(Number(b), Number(e)))
            }
            2 < a.length && x(a[2]);
            a = v;
            --a;
            .5 > a && (a = .5);
            v = a;
            d && (n = d.lat(), t = d.lng());
            d = n;
            b = t;
            A(a);
            Q(d, b)
        }
    }

    function oa() {
        if (h)
            if (0 == I("zoomtospotsextent")) w = D = !1, L = !0;
            else {
                w = !1;
                var a, d, b, g = e.spot.getArray();
                d = g.length;
                if (!(1 > d))
                    if (1 ==
						d) b = g[0].internalObject, na(b.lat, b.lng, v);
                    else {
                        var f = new google.maps.LatLngBounds;
                        for (a = 0; a < d; a++) b = g[a].internalObject, f.extend(new google.maps.LatLng(b.lat, b.lng));
                        h.fitBounds(f)
                    }
            }
        else w = D = !1, L = !0
    }

    function pa() {
        if (h) {
            var a = arguments;
            if (1 == a.length) {
                var d = String(a[0]),
					a = R + ".spot[" + d + "]";
                f.get(a) ? (d = Number(f.get(a + ".lat")), a = Number(f.get(a + ".lng")), isNaN(d) || isNaN(a) || E(d, a)) : f.trace(3, "googlemaps plugin - pantospot() - spot[" + d + "] not found!")
            } else f.trace(3, "googlemaps plugin - pantospot() syntax error!")
        }
    }

    function Fa() {
        if (h) {
            var a = arguments;
            2 == a.length ? E(Number(a[0]), Number(a[1])) : f.trace(3, "googlemaps plugin - panto() syntax error!")
        }
    }

    function Ga() { }

    function Ha() {
        if (h) {
            var a = arguments;
            if (1 <= a.length) {
                var d = R + ".spot[" + String(a[0]) + "].",
					b = Number(f.get(d + "lat")),
					d = Number(f.get(d + "lng"));
                isNaN(b) || isNaN(d) || (h.getZoom(), 2 <= a.length && A(v), E(b, d))
            } else f.trace(3, "googlemaps plugin - flytospot() syntax error!")
        }
    }

    function Ia() {
        if (h) {
            var a = arguments,
				d = !0;
            if (2 <= a.length) {
                var b = Number(a[0]),
					e = Number(a[1]);
                if (2 ==
					a.length) a = new google.maps.LatLng(b, e), h.setView({
					    animate: !0,
					    center: a
					}), d = !1;
                else {
                    var y = Number(a[2]);
                    3 == a.length ? (A(y), E(b, e), d = !1) : 6 <= a.length && (6 == a.length ? (A(y), E(b, e), d = !1) : 7 == a.length && (A(y), E(b, e), d = !1))
                }
            }
            d && f.trace(3, "googlemaps plugin - flyto() syntax error!")
        }
    }

    function Ja() {
        if (h) {
            var a = arguments;
            2 == a.length ? h.panBy(Number(a[0]), Number(a[1])) : f.trace(3, "googlemaps plugin - panby() syntax error!")
        }
    }

    function ya(a) {
        if (ha) {
            a = [0, 0];
            if (h && k) {
                var d = k.clientHeight;
                a[0] = k.clientWidth;
                a[1] = d
            }
            d = !1;
            if (a[0] !=
				S[0] || a[1] != S[1]) S[0] = a[0], S[1] = a[1], d = !0;
            (d || w || D || L) && I(null) && (google.maps.event.trigger(h, "resize"), L && (L = !1, oa()), D && (D = !1, h.setZoom(v)), w && (n = J, t = K, w = !1, h.setCenter(new google.maps.LatLng(n, t))));
            if (T) {
                T = !1;
                a = e.spot.getArray();
                var b = null,
					g;
                g = a.length;
                for (d = 0; d < g; d++) (b = a[d]) && (b = b.internalObject) && b.needupdate && b.processupdate()
            }
            u && u.updatehandler();
            C && 0 == ((f.display.frame | 0) & 1) && (a = C.onhover, null != a && "" != a && f.call(a, C))
        }
    }

    function Ka() {
        e.createarray("spotstyle");
        e.spotstyle.createItem("default");
        var a = e.spotstyle.getArray(),
			d = null,
			b, g;
        g = a.length;
        for (b = 0; b < g; b++) d = a[b], d.internalObject = new qa(d)
    }

    function La() {
        e.createarray("spot");
        var a = e.spot.getArray(),
			d = null,
			b, g;
        g = a.length;
        for (b = 0; b < g; b++) d = a[b], d.internalObject = new U(d)
    }

    function Ma() {
        var a = arguments;
        if (1 <= a.length) {
            var d = String(a[0]).toLowerCase(),
				d = e.spotstyle.createItem(d);
            1 < a.length && (d.url = a[1]);
            2 < a.length && (d.overurl = a[2]);
            3 < a.length && (d.activeurl = a[3]);
            4 < a.length && (d.edge = a[4]);
            5 < a.length && (d.x = a[5]);
            6 < a.length && (d.y = a[6]);
            7 < a.length &&
				(d.shadow = a[7]);
            d.internalObject = new qa(d)
        } else f.trace(3, "googlemaps plugin - addspotstyle() syntax error!")
    }

    function Na() {
        var a = arguments;
        if (3 <= a.length) {
            var d = String(a[0]).toLowerCase(),
				b = null,
				g = null,
				b = e.spot.getItem(d);
            null != b && V(d);
            b = e.spot.createItem(d);
            b.lat = a[1];
            b.lng = a[2];
            3 < a.length && (b.heading = a[3]);
            4 < a.length && (b.active = a[4]);
            5 < a.length && (b.onclick = a[5]);
            6 < a.length && (b.onhover = a[6]);
            7 < a.length && (b.onover = a[7]);
            8 < a.length && (b.onout = a[8]);
            g = new U(b);
            g.update();
            b.internalObject = g;
            g.active &&
				W(d)
        } else f.trace(3, "googlemaps plugin - addspot() syntax error!")
    }

    function Oa() {
        var a = arguments;
        if (5 <= a.length) {
            var d = String(a[0]).toLowerCase(),
				b = null,
				g = null,
				b = e.spot.getItem(d);
            null != b && V(d);
            b = e.spot.createItem(d);
            b.lat = a[1];
            b.lng = a[2];
            b.heading = a[3];
            b.spotstyle = a[4];
            5 < a.length && (b.active = a[5]);
            6 < a.length && (b.onclick = a[6]);
            7 < a.length && (b.onhover = a[7]);
            8 < a.length && (b.onover = a[8]);
            9 < a.length && (b.onout = a[9]);
            g = new U(b);
            g.update();
            b.internalObject = g;
            g.active && W(d)
        } else f.trace(3, "googlemaps plugin - addstylespot() syntax error!")
    }

    function Pa() {
        var a = arguments;
        if (6 <= a.length) {
            var d = String(a[0]).toLowerCase(),
				b = null,
				g = null,
				b = e.spot.getItem(d);
            null != b && V(d);
            b = e.spot.createItem(d);
            b.lat = a[1];
            b.lng = a[2];
            b.heading = a[3];
            b.spotstyle = a[4];
            b.url = a[5];
            6 < a.length && (b.onclick = a[6]);
            7 < a.length && (b.onhover = a[7]);
            8 < a.length && (b.onover = a[8]);
            9 < a.length && (b.onout = a[9]);
            g = new U(b);
            g.update();
            b.internalObject = g
        } else f.trace(3, "googlemaps plugin - addimagespot() syntax error!")
    }

    function V() {
        var a = arguments;
        if (1 == a.length) {
            var a = String(a[0]).toLowerCase(),
				d = null,
				b = null;
            (d = e.spot.getItem(a)) ? (b = d.internalObject, u && u.bmspot == b && (u.bmspot = null), b && b.destroy(), d.internalObject = null, e.spot.removeItem(a)) : f.trace(3, "googlemaps plugin - removespot() - spot[" + a + "] not found!")
        } else f.trace(3, "googlemaps plugin - removespot() syntax error!")
    }

    function ra() {
        var a = e.spot.getArray(),
			d = null,
			b = null,
			g, f;
        f = a.length;
        for (g = 0; g < f; g++) d = a[g], (b = d.internalObject) && b.destroy(), d.internalObject = null;
        e.spot.count = 0;
        u && (u.bmspot = null)
    }

    function ga() {
        var a = e.spot.getArray(),
			d = null,
			b = d = null,
			g, f;
        f = a.length;
        for (g = 0; g < f; g++) d = a[g], d = d.internalObject, d.processupdate(), d.active && (b = d);
        b && u && (u.bmspot = b, u.update())
    }

    function W() {
        var a = arguments;
        if (1 == a.length) {
            var a = String(a[0]).toLowerCase(),
				d = e.spot.getArray(),
				b = null,
				g = null,
				h = null,
				p, c;
            c = d.length;
            for (p = 0; p < c; p++) b = d[p], g = b.internalObject, String(b.name).toLowerCase() == a ? (0 == g.active && (g.active = !0, g.update(1)), h = g) : 0 != g.active && (g.active = !1, g.update(1));
            h && (0 == F && h.xmlobject == C && (C.event_out(null), C = null), u && (u.bmspot = h, u.update()))
        } else f.trace(3,
			"googlemaps plugin - activatespot() syntax error!")
    }

    function za() {
        function a(a, c) {
            function d(a, b) {
                this.latlng_ = a;
                this.setMap(b)
            }
            d.prototype = new google.maps.OverlayView;
            d.prototype.draw = function () {
                var a = this.getPanes();
                if (a && a.overlayImage) {
                    var c = this._krpdom,
						d = this._krpdom2;
                    c || (c = this._krpdom = document.createElement("DIV"), c.style.border = "none", c.style.position = "absolute", c.style.cursor = "pointer", d = this._krpdom2 = document.createElement("DIV"), d.style.border = "none", d.style.position = "absolute", d.style.cursor =
						"pointer", l = ja(500, 500), r = ja(500, 500), p(), c.style.overflow = "visible", c.appendChild(l.svg), d.style.opacity = 0, d.style.overflow = "visible", d.appendChild(r.svg), q.browser.events.mouse && r.path.addEventListener("mousedown", b, !0), q.browser.events.touch && r.path.addEventListener(q.browser.events.touchstart, b, !0), a.overlayImage.appendChild(d), a.markerLayer.appendChild(c));
                    if (a = this.getProjection().fromLatLngToDivPixel(this.latlng_)) c.style.left = a.x + "px", c.style.top = a.y + "px", d.style.left = a.x + "px", d.style.top =
						a.y + "px"
                }
            };
            d.prototype.remove = function () {
                this.div_ && (this.div_.parentNode.removeChild(this.div_), this.div_ = null)
            };
            d.prototype.getPosition = function () {
                return this.latlng_
            };
            d.prototype.setPosition = function (a) {
                this.latlng_ = a;
                this.draw()
            };
            return new d(a, c)
        }

        function d(a) {
            a && (a.preventDefault(), a.stopImmediatePropagation(), a.stopPropagation())
        }

        function b(a) {
            c.dragable && (u = !0, y(a), q.browser.events.mouse && (window.addEventListener("mousemove", y, !0), window.addEventListener("mouseup", g, !0)), q.browser.events.touch &&
				(window.addEventListener(q.browser.events.touchmove, y, !0), window.addEventListener(q.browser.events.touchcancel, g, !0), window.addEventListener(q.browser.events.touchend, g, !0)), d(a))
        }

        function g(a) {
            q.browser.events.mouse && (window.removeEventListener("mousemove", y, !0), window.removeEventListener("mouseup", g, !0));
            q.browser.events.touch && (window.removeEventListener(q.browser.events.touchmove, y, !0), window.removeEventListener(q.browser.events.touchcancel, g, !0), window.removeEventListener(q.browser.events.touchend,
				g, !0));
            d(a)
        }

        function y(a) {
            if (null == f) g(a);
            else if (null != l && null != c.bmspot) {
                d(a);
                var b;
                b = null;
                var e = 0,
					B = 0;
                b = {
                    x: 0,
                    y: 0
                };
                var h = r.svg.parentNode.getBoundingClientRect();
                q.browser.events && q.browser.events.touch ? (a = a.changedTouches ? a.changedTouches : [a], 0 < a.length && (B = a[0], e = Math.round(B.clientX - h.left), B = Math.round(B.clientY - h.top))) : (e = Math.round(a.clientX - h.left), B = Math.round(a.clientY - h.top));
                b = 180 * Math.atan2(B - b.y, e - b.x) / Math.PI;
                b -= c.bmspot.heading;
                if (1 == u) ka = b - Number(f.view.hlookat), u = !1;
                else {
                    for (b -=
						ka; 180 < b;) b -= 360;
                    for (; -180 > b;) b += 360;
                    f.view.hlookat = b
                }
                c.needredraw = !0
            }
        }

        function p() {
            c.needredraw = !0;
            l && (l.path.setAttribute("stroke", M(c.linecolor)), l.path.setAttribute("stroke-width", c.linewidth), l.path.setAttribute("stroke-opacity", c.linealpha * c.alpha), l.path.setAttribute("fill", M(c.fillcolor)), l.path.setAttribute("fill-opacity", c.fillalpha * c.alpha));
            r && (r.path.setAttribute("stroke", M(c.linecolor)), r.path.setAttribute("stroke-width", c.linewidth), r.path.setAttribute("stroke-opacity", c.linealpha *
				c.alpha), r.path.setAttribute("fill", M(c.fillcolor)), r.path.setAttribute("fill-opacity", c.fillalpha * c.alpha))
        }
        var c = this,
			m = null,
			l = null,
			r = null;
        c.visible = !1;
        c.dragable = !0;
        c.size = 100;
        c.zoomwithmap = !1;
        c.alpha = .5;
        c.fillcolor = 16777215;
        c.fillalpha = 1;
        c.linewidth = 0;
        c.linecolor = 16777215;
        c.linealpha = 0;
        c.glow = !0;
        c.glowcolor = 16777215;
        c.glowwidth = 4;
        c.glowstrength = 3;
        c.headingoffset = 90;
        c.bmspot = null;
        c.needredraw = !0;
        var k = null,
			u = !1,
			ka = 0,
			v = null,
			B = 0,
			n = 0,
			t = -1E3,
			w = -1E3,
			sa = -1,
			m = e.radar;
        m || (f.set(R + ".radar.visible", !1),
			m = e.radar);
        c.destroy = function () {
            c.bmspot = null;
            k && k.setMap(null);
            k = null
        };
        c.update = function () {
            c.needredraw = !0
        };
        c.updatehandler = function () {
            if (h)
                if (null == k && null != c.bmspot && (k = a(new google.maps.LatLng(c.bmspot.lat, c.bmspot.lng), h)), null == c.bmspot || 0 == c.visible) l && l.hide(), r && r.hide();
                else {
                    l && l.show();
                    r && r.show();
                    var b = Number(f.view.hlookat),
						d = Number(f.view.hfov),
						b = b + c.bmspot.heading,
						b = b + c.headingoffset;
                    if (t != c.bmspot.lat || w != c.bmspot.lng) t = c.bmspot.lat, w = c.bmspot.lng, k.setPosition(new google.maps.LatLng(c.bmspot.lat,
						c.bmspot.lng));
                    if (c.bmspot != v || b != B || d != n) v = c.bmspot, B = b, n = d, c.needredraw = !0;
                    if (c.needredraw) {
                        var e = c.zoomwithmap ? Math.pow(2, h.getZoom()) / 1E4 : 1,
							e = 1 * c.size * e * X;
                        2800 < e && (e = 2800);
                        var g = 16 * (Math.floor(2 * e / 16) + 1) + 16;
                        l && g != sa && (sa = g, l && (l.svg.setAttribute("width", g), l.svg.setAttribute("height", g), l.svg.style.left = -g / 2 + "px", l.svg.style.top = -g / 2 + "px", l.centerx = g / 2, l.centery = g / 2), r && (r.svg.setAttribute("width", g), r.svg.setAttribute("height", g), r.svg.style.left = -g / 2 + "px", r.svg.style.top = -g / 2 + "px", r.centerx =
							g / 2, r.centery = g / 2));
                        l && l.drawpie(g / 2, g / 2, e, b - .5 * d, b + .5 * d);
                        r && r.drawpie(g / 2, g / 2, e, b - .5 * d, b + .5 * d)
                    }
                    c.needredraw = !1
                }
        };
        (function () {
            m.registerattribute("visible", c.visible, function (a) {
                c.visible = x(a);
                c.update()
            }, function () {
                return c.visible
            });
            m.registerattribute("dragable", c.dragable, function (a) {
                c.dragable = x(a)
            }, function () {
                return c.dragable
            });
            m.registerattribute("size", c.size, function (a) {
                c.size = Number(a);
                c.update()
            }, function () {
                return c.size
            });
            m.registerattribute("zoomwithmap", c.zoomwithmap, function (a) {
                c.zoomwithmap =
					x(a);
                c.update()
            }, function () {
                return c.zoomwithmap
            });
            m.registerattribute("alpha", c.alpha, function (a) {
                c.alpha = Number(a);
                p()
            }, function () {
                return c.alpha
            });
            m.registerattribute("fillcolor", c.fillcolor, function (a) {
                c.fillcolor = Number(a);
                p()
            }, function () {
                return c.fillcolor
            });
            m.registerattribute("fillalpha", c.fillalpha, function (a) {
                c.fillalpha = Number(a);
                p()
            }, function () {
                return c.fillalpha
            });
            m.registerattribute("linewidth", c.linewidth, function (a) {
                c.linewidth = Number(a);
                p()
            }, function () {
                return c.linewidth
            });
            m.registerattribute("linecolor",
				c.linecolor,
				function (a) {
				    c.linecolor = Number(a);
				    p()
				},
				function () {
				    return c.linecolor
				});
            m.registerattribute("linealpha", c.linealpha, function (a) {
                c.linealpha = Number(a);
                p()
            }, function () {
                return c.linealpha
            });
            m.registerattribute("headingoffset", c.headingoffset, function (a) {
                c.headingoffset = Number(a);
                c.update()
            }, function () {
                return c.headingoffset
            });
            p()
        })()
    }

    function qa(a) {
        function d(a) {
            void 0 === a && (a = !1);
            var d = b.xmlobject.name,
				f = e.spot.getArray(),
				c = null,
				h, l;
            l = f.length;
            for (h = 0; h < l; h++) c = f[h].internalObject, c.spotstyle ==
				d && (0 == a || c.active) && c.update(1)
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
        b.url_bitmapdata = ta;
        b.overurl_bitmapdata = null;
        b.activeurl_bitmapdata = ua;
        b.xmlobject = a;
        a.registerattribute("url", b.url, function (a) {
            if ("" == a || "null" == a) a = null;
            a != b.url && (b.url = a, null != b.url ? P(b.url, function (a) {
                b.url_bitmapdata = a;
                d()
            }) : (b.url_bitmapdata = ta, d()))
        }, function () {
            return b.url
        });
        a.registerattribute("overurl", b.overurl, function (a) {
            if ("" == a || "null" == a) a = null;
            a != b.overurl && (b.overurl = a, null != b.overurl ? P(b.overurl, function (a) {
                b.overurl_bitmapdata = a
            }) : b.overurl_bitmapdata = null)
        }, function () {
            return b.overurl
        });
        a.registerattribute("activeurl", b.activeurl, function (a) {
            if ("" == a || "null" == a) a = null;
            a != b.activeurl && (b.activeurl = a, null != b.activeurl ? P(b.activeurl, function (a) {
                b.activeurl_bitmapdata = a;
                d(!0)
            }) : (b.activeurl_bitmapdata = ua, d(!0)))
        }, function () {
            return b.activeurl
        });
        a.registerattribute("edge",
			b.edge,
			function (a) {
			    b.edge = String(a)
			},
			function () {
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
            b.shadow = x(a)
        }, function () {
            return b.shadow
        });
        a.registerattribute("scale", b.scale, function (a) {
            b.scale = Number(a)
        }, function () {
            return b.scale
        })
    }

    function U(a) {
        function d() {
            var a = e.spotstyle.getItem(c.spotstyle),
				b = null;
            return null == a ? (a =
				"googlemaps plugin - spot[" + m.name + '] - spotstyle "' + c.spotstyle + '" not found!', a != u && (u = a, f.trace(3, a)), null) : b = a.internalObject
        }

        function b(a, b) {
            q = a;
            b || (b = c.zoomwithmap ? Math.pow(2, v) / Math.pow(2, c.zoombaselevel) : 1);
            var e = q,
				f = e ? e.naturalWidth : 12,
				g = e ? e.naturalHeight : 12,
				p = Math.floor(f / 2),
				l = Math.floor(g / 2),
				k = d(),
				m = 1 * b * X;
            k && q && (m = Number(k.scale) * b * X, e && void 0 !== e.naturalScale && (m *= e.naturalScale), f *= m, g *= m, p = k.edge, l = k.x, k = k.y, 0 <= p.indexOf("left") || (l = 0 <= p.indexOf("right") ? l + f : l + Math.floor(f / 2)), 0 <= p.indexOf("top") ||
				(k = 0 <= p.indexOf("bottom") ? k + g : k + Math.floor(g / 2)), p = l, l = k);
            t = {
                map: h,
                icon: {
                    url: e.src,
                    origin: new google.maps.Point(0, 0),
                    anchor: new google.maps.Point(p, l),
                    size: new google.maps.Size(f, g),
                    scaledSize: new google.maps.Size(f, g)
                },
                flat: !0,
                optimized: !1,
                zIndex: c.active ? 2 : 1
            };
            n && n.setOptions(t);
            return t
        }

        function g(a) {
            c.active && 0 == F || (a = m.onclick, null != a && "" != a && f.call(a, m))
        }

        function k(a) {
            c.active && 0 == F || (null == r && (a = d()) && a.overurl_bitmapdata && b(a.overurl_bitmapdata), C = m, a = m.onover, null != a && "" != a && f.call(a, m))
        }

        function p(a) {
            C = null;
            null != a && c.active && 0 == F || (null == r && (a = d()) && (c.active && a.activeurl_bitmapdata ? b(a.activeurl_bitmapdata) : a.url_bitmapdata && b(a.url_bitmapdata)), a = m.onout, null != a && "" != a && f.call(a, m))
        }
        var c = this;
        c.spotstyle = "default";
        c.url = null;
        c.lat = Number.NaN;
        c.lng = Number.NaN;
        c.heading = 0;
        c.active = !1;
        c.needdom = !1;
        c.zoomwithmap = !1;
        c.zoombaselevel = 10;
        c.needupdate = !1;
        var m = null,
			l = 0,
			r = null,
			q = null,
			u = null,
			n = null,
			t = null,
			m = a;
        c.xmlobject = m;
        c.update = function (a) {
            void 0 === a && (a = 0);
            c.needupdate = !0;
            l |= a;
            T = !0
        };
        c.processupdate = function () {
            if (null != m) {
                if (2 == (l & 2)) {
                    var a = !1;
                    if (h) {
                        var e = !isNaN(c.lat) && !isNaN(c.lng),
							f = e ? new google.maps.LatLng(c.lat, c.lng) : new google.maps.LatLng(0, 0);
                        null == n && e ? (a = d(), a = c.active ? a.activeurl_bitmapdata : a.url_bitmapdata, n = null, t = b(a), t.position = f, n = new google.maps.Marker(t), c.zoomwithmap && (Math.pow(2, v), Math.pow(2, c.zoombaselevel)), google.maps.event.addListener(n, "click", g), google.maps.event.addListener(n, "mouseover", k), google.maps.event.addListener(n, "mouseout", p), a = !0) : n && e &&
							(n.setPosition(f), a = !0)
                    }
                    a && (l &= -3)
                }
                1 == (l & 1) && c.updateimage() && (l &= -2);
                0 == l && (c.needupdate = !1)
            }
        };
        c.updateimage = function () {
            if ("" == c.url || "null" == c.url) c.url = null;
            if (c.url) c.url != r && (r = c.url, P(c.url, function (a) {
                b(a)
            }));
            else {
                r = null;
                var a = d();
                a && (a = c.active ? a.activeurl_bitmapdata : a.url_bitmapdata, q != a && b(a))
            }
            return !0
        };
        c.scalespot = function (a) {
            b(q, a)
        };
        c.try_dom_access = function () {
            if (n)
                if (n._krpimg) {
                    var a = d();
                    b(c.active ? a.activeurl_bitmapdata : a.url_bitmapdata);
                    c.needdom = !1
                } else T = c.needdom = !0
        };
        c.destroy = function () {
            n &&
				h && n.setMap(null);
            q = m = t = n = null
        };
        m.event_out = p;
        (function () {
            a.registerattribute("spotstyle", c.spotstyle, function (a) {
                if (null == a || "" == a) a = "default";
                c.spotstyle = String(a).toLowerCase();
                c.update(1)
            }, function () {
                return c.spotstyle
            });
            a.registerattribute("url", c.url, function (a) {
                a != c.url && (c.url = String(a), c.update(1))
            }, function () {
                return c.url
            });
            a.registerattribute("lat", c.lat, function (a) {
                c.lat = Number(a);
                c.update(2)
            }, function () {
                return c.lat
            });
            a.registerattribute("lng", c.lng, function (a) {
                c.lng = Number(a);
                c.update(2)
            },
				function () {
				    return c.lng
				});
            a.registerattribute("heading", c.heading, function (a) {
                c.heading = Number(a)
            }, function () {
                return c.heading
            });
            a.registerattribute("active", c.active, function (a) {
                c.active = x(a);
                c.update(1)
            }, function () {
                return c.active
            });
            a.registerattribute("zoomwithmap", c.zoomwithmap, function (a) {
                c.zoomwithmap = x(a);
                c.update(2)
            }, function () {
                return c.zoomwithmap
            });
            a.registerattribute("zoombaselevel", c.zoombaselevel, function (a) {
                c.zoombaselevel = Number(a);
                c.update(2)
            }, function () {
                return c.zoombaselevel
            });
            a.registerattribute("onover",
				null);
            a.registerattribute("onhover", null);
            a.registerattribute("onout", null);
            a.registerattribute("onclick", null);
            a.activatespot = function () {
                W(m.name)
            };
            a.pantospot = function () {
                pa(m.name)
            }
        })()
    }
    var f = null,
		e = null,
		R = null,
		q = null,
		H = null,
		X = 1,
		z = null,
		k = null,
		h = null,
		ha = !1,
		aa = 0,
		T = !1,
		L = !1,
		w = !1,
		D = !1,
		J = 0,
		K = 0,
		u = null,
		C = null,
		G, va, n, t, v, N, O, da, ca, F;
    this.registerplugin = function (a, d, b) {
        f = a;
        e = b;
        R = d;
        if ("1.18" > f.version || 0 == f.hasOwnProperty("haveLicense")) f.trace(3, "Googlemaps Plugin - too old krpano version, min. version is 1.18!");
        else if (q = f.device, q.androidstock && (X = q.pixelratio), e.registerattribute("key", null), e.registerattribute("maptype", "satellite", function (a) {
				ma(a)
        }, function () {
				return G
        }), e.registerattribute("maptypes", "normal|satellite|hybrid|terrain", function (a) {
				va = String(a)
        }, function () {
				return va
        }), e.registerattribute("lat", 0, function (a) {
				n = Number(a);
				ba(1)
        }, function () {
				return n
        }), e.registerattribute("lng", 0, function (a) {
				t = Number(a);
				ba(1)
        }, function () {
				return t
        }), e.registerattribute("zoom", 1, function (a) {
					v = Number(a);
					ba(2)
        },
				function () {
					return v
        }), e.registerattribute("tilt", 0, function (a) {
				N = Number(a);
				la()
        }, function () {
				return N
        }), e.registerattribute("heading", 0, function (a) {
				O = Number(a);
				la()
        }, function () {
				return O
        }), e.registerattribute("controls", "zoom|maptype", function (a) {
				da = a;
				h && h.setOptions(Z({}))
        }, function () {
				return da
        }), e.registerattribute("poi", !1, function (a) {
				ca = x(a);
				h && h.setOptions(Z({}))
        }, function () {
				return ca
        }), e.registerattribute("mapsapi", ""), e.registerattribute("activespotenabled", !1, function (a) {
				F = x(a)
        }, function () {
				return F
        }),
			e.registerattribute("bgcolor", 0), e.registerattribute("bgalpha", 0), e.registerattribute("onmapready", null), e.registerattribute("onmapmoved", null), e.registerattribute("onmapzoomed", null), e.registerattribute("onmaptypechanged", null), e.setzoom = Ca, e.setcenter = na, e.setmaptype = ma, e.addspot = Na, e.addstylespot = Oa, e.addimagespot = Pa, e.removespot = V, e.removeallspots = ra, e.activatespot = W, e.addspotstyle = Ma, e.panto = Fa, e.pantospot = pa, e.panby = Ja, e.flyto = Ia, e.flytospot = Ha, e.cancelflyto = Ga, e.zoomin = Da, e.zoomout = Ea, e.zoomtospotsextent =
			oa, e.resetspots = ra, e.updatespots = ga, e.updatecontrols = function () { }, Ka(), La(), 0 == f.haveLicense("maps") && setTimeout(Ba, 100), e.registercontentsize(400, 300), window.google && window.google.maps) setTimeout(Y, 10);
        else if (window._krpano_gmap_loadedcallbacks_) window._krpano_gmap_loadedcallbacks_.push(Y);
        else {
            window._krpano_gmap_loadedcallbacks_ = [];
            z = "_krpano_gmap_cb_";
            for (a = 0; 16 > a; a++) z += String.fromCharCode(65 + 32 * Math.round(Math.random()) + Math.floor(25 * Math.random()));
            window[z] = Y;
            (a = e.mapsapi) && "" != a || (a = 0 ==
				("" + window.location.href).toLowerCase().indexOf("https:") ? "https://maps.google.cn" : "http://maps.google.cn");
            d = "";
            e.key && (d = "&key=" + e.key);
            b = "";
            e.language && (b = "&language=" + e.language);
            var g = "";
            e.region && (g = "&region=" + e.region);
            var k = document.createElement("script");
            k.type = "text/javascript";
            k.async = !0;
            k.src = a + "/maps/api/js?v=3.23" + d + b + g + "&callback=" + z;
            document.body.appendChild(k)
        }
    };
    this.unloadplugin = function () {
        null != H && (clearInterval(H), H = null);
        q = f = e = null
    };
    this.onresize = function (a, d) {
        h && (e.sprite &&
			(k.style.width = e.sprite.style.width, k.style.height = e.sprite.style.height), 0 == w && (w = !0, J = n, K = t), google.maps.event.trigger(h, "resize"));
        return !0
    };
    this.onvisibilitychanged = function (a) {
        return h ? (1 == a ? (e.poschanged = !0, e.sprite.style.display = "", e.sprite.appendChild(k), k.style.left = "0", k.style.pointerEvents = "auto", 0 == w && (w = !0, J = n, K = t), google.maps.event.trigger(h, "resize")) : (e.sprite.style.display = "none", k.style.left = "-10000px", k.style.pointerEvents = "none", f.display.viewerlayer.appendChild(k)), !0) : !1
    };
    var S =
		[0, 0],
		ta = {
		    src: "data:image/png;base64,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",
		    naturalWidth: 64,
		    naturalHeight: 64,
		    naturalScale: .5
		},
		ua = {
		    src: "data:image/png;base64,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",
		    naturalWidth: 64,
		    naturalHeight: 64,
		    naturalScale: .5
		}
};