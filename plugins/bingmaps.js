/*
	krpano 1.19-pr7 Bing Maps Plugin (build 2016-09-09)
	http://krpano.com/plugins/bingmaps/
*/
var krpanoplugin = function () {
    // 激活点
    function activeSpotEnabled(a) {
        return "boolean" == typeof a ? a : 0 <= "yesontrue1".indexOf(String(a).toLowerCase())
    }
    // 设置RGB颜色
    function setRGB(a) {
        return "rgb(" + (a >> 16 & 255) + "," + (a >> 8 & 255) + "," + (a & 255) + ")"
    }
    // 设置视野范围标记
    function setViewerStroke(a, c) {
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
    // 显示DEMO标记
    function showDemoText() {
        var a = document.createElement("div");
        a.style.position = "absolute";
        a.style.left = "50%";
        a.style.top = "50%";
        a.style.width = "100%";
        a.style.zIndex = 999998;
        a.style.color = "#FFFFFF";
        a.style.opacity = .67;
        a.style.fontSize = _krpanointerface.isphone ? "10px" : "16px";
        a.style["-webkit-text-size-adjust"] = "none";
        a.style.display = "block";
        a.style.cursor = "none";
        a.style.pointerEvents = "none";
        var c = document.createElement("div");
        c.style.position = "relative";
        c.style.left = "-50%";
        c.style.top = _krpanointerface.isphone ? "-64px" : "-46px";
        c.style.fontFamily = "sans-serif";
        c.style.textShadow = "#000000 1px 1px 2px";
        c.innerHTML = "<center><i><b>krpano Bing Maps Plugin<br/>DEMO MODE</b></i></center>";
        a.appendChild(c);
        _pluginobject && _pluginobject.sprite && _pluginobject.sprite.appendChild(a)
    }
    // 创建图片要素
    function createImgElement(a, c) {
        var b = document.createElement("img");
        b.addEventListener("error", function () {
            _krpanointerface && _pluginobject && _krpanointerface.trace(3, _pluginobject._type + "[" + _pluginobject.name + "] loading error: " +
              a)
        }, true);
        b.addEventListener("load", function () {
            _krpanointerface && _pluginobject && c(b)
        }, false);
        b.src = _krpanointerface.parsePath(a)
    }
    // 重新加载必应地图
    function reinitBingMap() {
        null != _krpano_bmap_cb_var && (window[_krpano_bmap_cb_var] = null, delete window[_krpano_bmap_cb_var], _krpano_bmap_cb_var = null);
        _krpanointerface && _pluginobject && setTimeout(initBingMap, 10)
    }
    // 设置背景色
    function setBGColor() {
        if (_pluginobject) {
            var a = Number(_pluginobject.bgcolor),
              c = Number(_pluginobject.bgalpha);
            _document_div && _document_div.childNodes && _document_div.childNodes[0] && _document_div.childNodes[0].style && (_document_div.childNodes[0].style.backgroundColor = "rgba(" + (a >> 16 & 255) + "," + (a >> 8 & 255) + "," + (a & 255) + "," + c + ")")
        }
    }
    // 初始化必应地图
    function initBingMap() {
        var a = window._krpano_bmap_loadedcallbacks_;
        if (a) {
            window._krpano_bmap_loadedcallbacks_ = null;
            delete window._krpano_bmap_loadedcallbacks_;
            var c = a.length,
              b;
            if (0 < c && 99 > c)
                for (b = 0; b < c; b++) setTimeout(a[b], 10 + 5 * b)
        }
        if (_krpanointerface && _pluginobject) {
            _pluginobject._use_css_scale = false;
            _pluginobject.poschanged = true;
            _pluginobject.updatepos();
            a = Math.floor(_pluginobject.pixelwidth * _krpanointerface.stagescale);
            c = Math.floor(_pluginobject.pixelheight * _krpanointerface.stagescale);
            b = _pluginobject.key;
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
            "TEST" == b ? (aa = true, b = null) : "" != b &&
              null != b || _krpanointerface.trace(2, "bingmaps plugin - no API key!");
            a = {
                credentials: b,
                mapTypeId: roadaerial(D),
                labelOverlay: showMAPS(D),
                center: new Microsoft.Maps.Location(_pluginobject.lat, _pluginobject.lng),
                zoom: r,
                enableSearchLogo: false,
                enableClickableLogo: false,
                showMapTypeSelector: false,
                showDashboard: false,
                showScalebar: false,
                disableKeyboardInput: true,
                fixedMapPosition: true,
                width: a,
                height: c
            };
            _document_div_maps = new Microsoft.Maps.Map(_document_div, a);
            setBGColor();
            _document_div && _document_div.childNodes && _document_div.childNodes[0] && _document_div.childNodes[0].childNodes && _document_div.childNodes[0].childNodes[0] && "BUTTON" == _document_div.childNodes[0].childNodes[0].nodeName && _document_div.childNodes[0].removeChild(_document_div.childNodes[0].childNodes[0]);
            Microsoft.Maps.Events.addHandler(_document_div_maps, "mousewheel", ya);
            _document_div.addEventListener("gesturestart", ba, false);
            _document_div.addEventListener("gesturechange", ba, false);
            _document_div.addEventListener("gestureend", ba, false);
            null == _timers && (_timers = setInterval(za, 1E3 / 60));
            t = new Aa;
            updateSpots();
            scaleSpotArray();
            Ba();
            S = true;
            _krpanointerface.call(_pluginobject.onmapready, _pluginobject);
            Microsoft.Maps.Events.addHandler(_document_div_maps, "imagerychanged", changeMaps);
            Microsoft.Maps.Events.addHandler(_document_div_maps, "viewchange", na)
        }
    }

    function stopActions(a) {
        a && (a.preventDefault(), a.stopPropagation())
    }

    function ya(a) {
        a && (_krpanointerface && _krpanointerface.control && true === _krpanointerface.control.disablewheel ? a.handled = true : a.originalEvent && (a.originalEvent.preventDefault(), a.originalEvent.stopPropagation()))
    }
    // 切换地图
    function changeMaps() {
        if (_document_div_maps) {
            var a = _document_div_maps.getOptions(),
              c = _document_div_maps.getImageryId(),
              b = "satellite";
            "Road" == c ? b = "normal" : "Aerial" == c && (b = 1 == a.labelOverlay ? "satellite" : "hybrid");
            if (b != D) {
                D = b;
                if (C) C.onMapTypeChanged(D);
                _krpanointerface.call(_pluginobject.onmaptypechanged, _pluginobject)
            }
        }
    }

    function na() {
        if (_document_div_maps) {
            var a = _document_div_maps.getCenter();
            if (y != a.latitude || w != a.longitude) y = a.latitude, w = a.longitude, _krpanointerface.call(_pluginobject.onmapmoved, _pluginobject);
            a = _document_div_maps.getZoom();
            r != a && (t && (t.needredraw = true), r = a, _krpanointerface.call(_pluginobject.onmapzoomed,
              _pluginobject), t && t.updatehandler(), scaleSpotArray())
        }
    }
    // 
    function scaleSpotArray() {
        var a = _pluginobject.spot.getArray(),
          c = null,
          b, f;
        f = a.length;
        for (b = 0; b < f; b++) a[b] && (c = a[b].internalObject) && c.zoomwithmap && c.scalespot(Math.pow(2, r) / Math.pow(2, c.zoombaselevel))
    }

    function za(a) {
        aa && (a = _document_div) && (a = a.firstChild) && (a = a.lastChild) && (a = a.lastChild) && 0 < ("" + a.textContent).indexOf("invalid") && (a.style.display = "none", aa = false);
        if (S) {
            H && updateControls();
            if (N) {
                N = false;
                a = _pluginobject.spot.getArray();
                var c = null,
                  b, f;
                f = a.length;
                for (b = 0; b < f; b++) c = a[b].internalObject, c.needdom && c.try_dom_access(), c.needupdate &&
                  c.processupdate()
            }
            t && t.updatehandler();
            E && 0 == ((_krpanointerface.display.frame | 0) & 1) && (a = E.onhover, null != a && "" != a && _krpanointerface.call(a, E))
        }
    }

    function Ba() {
        _pluginobject.createobject("positioncontrol");
        _pluginobject.createobject("zoomcontrol");
        _maptypecontrol = _pluginobject.createobject("maptypecontrol");
        _pluginobject.createobject("navigationcontrol");
        _pluginobject.createobject("overviewmapcontrol");
        _maptypecontrol.registerattribute("visible", false, function (a) {
            _maptypecontrol._visible = activeSpotEnabled(a);
            H = true
        }, function () {
            return _maptypecontrol._visible
        });
        _maptypecontrol.registerattribute("align", "rightbottom", function (a) {
            _maptypecontrol._align = String(a).toLowerCase();
            H = true
        }, function () {
            return _maptypecontrol._align
        });
        _maptypecontrol.registerattribute("anchor", _maptypecontrol._align, function (a) {
            _maptypecontrol._align = String(a).toLowerCase();
            H = true
        }, function () {
            return _maptypecontrol._align
        });
        _maptypecontrol.registerattribute("x", 2, function (a) {
            a = Number(a);
            _maptypecontrol._x = isNaN(a) ? 2 : a;
            H = true
        }, function () {
            return _maptypecontrol._x
        });
        _maptypecontrol.registerattribute("y", 2, function (a) {
            a = Number(a);
            _maptypecontrol._y = isNaN(a) ? 2 : a;
            H = true
        }, function () {
            return _maptypecontrol._y
        });
        updateControls()
    }
    // 刷新控件
    function updateControls() {
        if (S) {
            var a = _document_div;
            _maptypecontrol._visible ? (null == C && (C = new Ca(_maptypecontrol), a.appendChild(C.dom)), C.setControlPosition(_maptypecontrol._align, Number(_maptypecontrol._x), Number(_maptypecontrol._y))) : null != C && (a.removeChild(C.dom), C = null);
            H = false
        }
    }
    // 创建点样式集合
    function createSpotsStyle() {
        _pluginobject.createarray("spotstyle");
        _pluginobject.spotstyle.createItem("default");
        var a = _pluginobject.spotstyle.getArray(),
          c = null,
          b, f;
        f = a.length;
        for (b = 0; b < f; b++) c = a[b], c.internalObject = new oa(c)
    }
    // 创建点集合
    function createSpots() {
        _pluginobject.createarray("spot");
        var a = _pluginobject.spot.getArray(),
          c = null,
          b, f;
        f = a.length;
        for (b = 0; b < f; b++) c = a[b], c.internalObject = new spotClass(c)
    }
    // 添加点样式
    function addSpotstyle() {
        var a = arguments;
        if (1 <= a.length) {
            var c = String(a[0]).toLowerCase(),
              c = _pluginobject.spotstyle.createItem(c);
            1 < a.length && (c.url = a[1]);
            2 < a.length && (c.overurl = a[2]);
            3 < a.length && (c.activeurl = a[3]);
            4 < a.length && (c.edge = a[4]);
            5 < a.length && (c.x = a[5]);
            6 < a.length && (c.y = a[6]);
            7 < a.length && (c.shadow = a[7]);
            c.internalObject = new oa(c)
        } else _krpanointerface.trace(3, "bingmaps plugin - addspotstyle() syntax error!")
    }
    // 添加点
    function addSpot() {
        var a = arguments;
        if (3 <= a.length) {
            var c = String(a[0]).toLowerCase(),
              b = null,
              f = null,
              b = _pluginobject.spot.getItem(c);
            null != b && removeSpot(c);
            b = _pluginobject.spot.createItem(c);
            b.lat = a[1];
            b.lng = a[2];
            3 < a.length && (b.heading = a[3]);
            4 < a.length && (b.active = a[4]);
            5 < a.length && (b.onclick = a[5]);
            6 < a.length && (b.onhover = a[6]);
            7 < a.length && (b.onover =
              a[7]);
            8 < a.length && (b.onout = a[8]);
            f = new spotClass(b);
            f.update();
            b.internalObject = f;
            f.active && activateSpot(c)
        } else _krpanointerface.trace(3, "bingmaps plugin - addspot() syntax error!")
    }
    // 添加样式点
    function addStylespot() {
        var a = arguments;
        if (5 <= a.length) {
            var c = String(a[0]).toLowerCase(),
              b = null,
              f = null,
              b = _pluginobject.spot.getItem(c);
            null != b && removeSpot(c);
            b = _pluginobject.spot.createItem(c);
            b.lat = a[1];
            b.lng = a[2];
            b.heading = a[3];
            b.spotstyle = a[4];
            5 < a.length && (b.active = a[5]);
            6 < a.length && (b.onclick = a[6]);
            7 < a.length && (b.onhover = a[7]);
            8 < a.length && (b.onover = a[8]);
            9 < a.length && (b.onout = a[9]);
            f = new spotClass(b);
            f.update();
            b.internalObject = f;
            f.active && activateSpot(c)
        } else _krpanointerface.trace(3, "bingmaps plugin - addstylespot() syntax error!")
    }
    // 添加图像点
    function addImagespot() {
        var a = arguments;
        if (6 <= a.length) {
            var c = String(a[0]).toLowerCase(),
              b = null,
              f = null,
              b = _pluginobject.spot.getItem(c);
            null != b && removeSpot(c);
            b = _pluginobject.spot.createItem(c);
            b.lat = a[1];
            b.lng = a[2];
            b.heading = a[3];
            b.spotstyle = a[4];
            b.url = a[5];
            6 < a.length && (b.onclick = a[6]);
            7 < a.length && (b.onhover = a[7]);
            8 < a.length && (b.onover = a[8]);
            9 < a.length && (b.onout = a[9]);
            f = new spotClass(b);
            f.update();
            b.internalObject = f
        } else _krpanointerface.trace(3, "bingmaps plugin - addimagespot() syntax error!")
    }
    // 移出点
    function removeSpot() {
        var a = arguments;
        if (1 == a.length) {
            var a = String(a[0]).toLowerCase(),
              c = null,
              b = null;
            (c = _pluginobject.spot.getItem(a)) ? (b = c.internalObject, t && t.bmspot == b && (t.bmspot = null), b && b.destroy(), c.internalObject = null, _pluginobject.spot.removeItem(a)) : _krpanointerface.trace(3, "bingmaps plugin - removespot() - spot[" + a + "] not found!")
        } else _krpanointerface.trace(3, "bingmaps plugin - removespot() syntax error!")
    }
    // 移除所有点
    function removeAllspots() {
        var a = _pluginobject.spot.getArray(),
          c = null,
          b = null,
          f, h;
        h = a.length;
        for (f = 0; f < h; f++) c = a[f], (b = c.internalObject) && b.destroy(), c.internalObject = null;
        _pluginobject.spot.count = 0;
        t && (t.bmspot = null)
    }
    // 更新点
    function updateSpots() {
        var a = _pluginobject.spot.getArray(),
          c = null,
          b = c = null,
          f, h;
        h = a.length;
        for (f = 0; f < h; f++) c = a[f], c = c.internalObject, c.processupdate(), c.active && (b = c);
        b && t && (t.bmspot = b, t.update())
    }
    // 激活点
    function activateSpot() {
        var a = arguments;
        if (1 == a.length) {
            var a = String(a[0]).toLowerCase(),
              c = _pluginobject.spot.getArray(),
              b = null,
              f = null,
              u = null,
              e, k;
            k = c.length;
            for (e = 0; e < k; e++) b = c[e], f = b.internalObject, String(b.name).toLowerCase() == a ? (0 == f.active && (f.active = true, f.update(1)), u = f) : 0 != f.active && (f.active = false, f.update(1));
            u && (0 == K && u.xmlobject == E && (E.event_out(null), E = null), t && (t.bmspot = u, t.update()))
        } else _krpanointerface.trace(3, "bingmaps plugin - activatespot() syntax error!")
    }
    // 地图并缩放到位置和等级
    function updateMaps() {
        if (_document_div_maps) {
            var a = new Microsoft.Maps.Location(y, w);
            _document_div_maps.setView({
                animate: false,
                center: a,
                zoom: r
            })
        }
    }
    // 显示路网或空中
    function roadaerial(a) {
        a = a.toLowerCase();
        return "satellite" != a && "normal" == a ? Microsoft.Maps.MapTypeId.road : Microsoft.Maps.MapTypeId.aerial
    }
    // 显示或隐藏地图
    function showMAPS(a) {
        a = a.toLowerCase();
        return "satellite" == a || "normal" != a && "hybrid" != a ? Microsoft.Maps.LabelOverlay.hidden : Microsoft.Maps.LabelOverlay.visible
    }
    // 设置地图种类SETMAPTYPE
    function setMaptype() {
        var a = arguments;
        1 == a.length ? (a = String(a[0]).toLowerCase(), "satellite" != a && "normal" != a && "hybrid" != a && (a = "satellite"), _document_div_maps ? (_document_div_maps.setMapType(roadaerial(a)), _document_div_maps.setOptions({
            labelOverlay: showMAPS(a)
        }), setBGColor(), changeMaps()) : D = a) : _krpanointerface.trace(3, "bingmaps plugin - setmaptype() syntax error!")
    }
    // 设置地图等级SETZOOM
    function setZoom() {
        if (_document_div_maps) {
            var a = arguments;
            if (1 <= a.length) {
                var c = Number(a[0]),
                  b = false;
                1 < a.length && (b = activeSpotEnabled(a[1]));
                r = c;
                a = new Microsoft.Maps.Location(y, w);
                _document_div_maps.setView({
                    animate: b,
                    center: a,
                    zoom: r
                })
            } else _krpanointerface.trace(3, "bingmaps plugin - setzoom() syntax error!")
        }
    }
    // 设置地图中心SETCENTER
    function setCenter() {
        if (_document_div_maps) {
            var a =
              arguments;
            if (3 == a.length) {
                var c = Number(a[2]),
                  a = new Microsoft.Maps.Location(Number(a[0]), Number(a[1]));
                _document_div_maps.setView({
                    animate: false,
                    center: a,
                    zoom: c
                })
            } else _krpanointerface.trace(3, "bingmaps plugin - setcenter() syntax error!")
        }
    }
    // 放大
    function zoomIn() {
        if (_document_div_maps) {
            var a = arguments,
              c = null;
            if (2 <= a.length) {
                var b = a[0],
                  f = a[1];
                null != b && void 0 != b && "" != b && "null" != b && null != f && void 0 != f && "" != f && "null" != f && (c = new Microsoft.Maps.Location(Number(b), Number(f)))
            }
            2 < a.length && activeSpotEnabled(a[2]);
            3 < a.length && activeSpotEnabled(a[3]);
            a = r;
            32 > a && (a += 1);
            r = a;
            c && (y = c.latitude, w = c.longitude);
            c = new Microsoft.Maps.Location(y, w);
            _document_div_maps.setView({
                animate: true,
                center: c,
                zoom: r
            })
        }
    }
    // 缩小
    function zoomOut() {
        if (_document_div_maps) {
            var a = arguments,
              c = null;
            if (2 <= a.length) {
                var b = a[0],
                  f = a[1];
                null != b && void 0 != b && "" != b && "null" != b && null != f && void 0 != f && "" != f && "null" != f && (c = new Microsoft.Maps.Location(Number(b), Number(f)))
            }
            2 < a.length && activeSpotEnabled(a[2]);
            a = r;
            --a;
            .5 > a && (a = .5);
            r = a;
            c && (y = c.latitude, w = c.longitude);
            c = new Microsoft.Maps.Location(y, w);
            _document_div_maps.setView({
                animate: true,
                center: c,
                zoom: r
            })
        }
    }
    // 缩放到点范围
    function zoomTospotsextent() {
        if (_document_div_maps) {
            var a, c, b, f, h, e, q, g = _pluginobject.spot.getArray();
            e = g.length;
            if (!(1 > e))
                if (1 == e) q = g[0].internalObject, setCenter(q.lat, q.lng, r);
                else {
                    q = g[0].internalObject;
                    a = b = q.lat;
                    c = f = q.lng;
                    for (h = 1; h < e; h++) q = g[h].internalObject, q.lat < a && (a = q.lat), q.lat > b && (b = q.lat), q.lng < c && (c = q.lng), q.lng > f && (f = q.lng);
                    a = new Microsoft.Maps.LocationRect.fromCorners(new Microsoft.Maps.Location(b, c), new Microsoft.Maps.Location(a, f));
                    _document_div_maps.setView({
                        animate: false,
                        bounds: a
                    });
                    na()
                }
        }
    }
    // 平移到点
    function panTospot() {
        if (_document_div_maps) {
            var a = arguments;
            if (1 == a.length) {
                var c = String(a[0]),
                  a = _pluginpath + ".spot[" + c + "]";
                _krpanointerface.get(a) ? (c = Number(_krpanointerface.get(a + ".lat")), a = Number(_krpanointerface.get(a +
                  ".lng")), isNaN(c) || isNaN(a) || (a = new Microsoft.Maps.Location(c, a), _document_div_maps.setView({
                      animate: true,
                      center: a
                  }))) : _krpanointerface.trace(3, "bingmaps plugin - pantospot() - spot[" + c + "] not found!")
            } else _krpanointerface.trace(3, "bingmaps plugin - pantospot() syntax error!")
        }
    }
    // 平移
    function panTo() {
        if (_document_div_maps) {
            var a = arguments;
            2 == a.length ? (a = new Microsoft.Maps.Location(Number(a[0]), Number(a[1])), _document_div_maps.setView({
                animate: true,
                center: a
            })) : _krpanointerface.trace(3, "bingmaps plugin - panto() syntax error!")
        }
    }
    // 取消飞行到
    function cancelFlyto() { }
    // 飞到点
    function flyTospot() {
        if (_document_div_maps) {
            var a = arguments;
            if (1 <= a.length) {
                var c = _pluginpath + ".spot[" +
                  String(a[0]) + "].",
                  b = Number(_krpanointerface.get(c + "lat")),
                  f = Number(_krpanointerface.get(c + "lng"));
                isNaN(b) || isNaN(f) || (c = _document_div_maps.getZoom(), 2 <= a.length && (c = Number(a[1])), a = new Microsoft.Maps.Location(b, f), _document_div_maps.setView({
                    animate: true,
                    center: a,
                    zoom: c
                }))
            } else _krpanointerface.trace(3, "bingmaps plugin - flytospot() syntax error!")
        }
    }
    // 飞到
    function flyTo() {
        if (_document_div_maps) {
            var a = arguments,
              c = true;
            if (2 <= a.length) {
                var b = Number(a[0]),
                  f = Number(a[1]);
                if (2 == a.length) a = new Microsoft.Maps.Location(b, f), _document_div_maps.setView({
                    animate: true,
                    center: a
                }), c = false;
                else {
                    var d = Number(a[2]);
                    3 == a.length ? (a = new Microsoft.Maps.Location(b,
                      f), _document_div_maps.setView({
                          animate: true,
                          center: a,
                          zoom: d
                      }), c = false) : 6 <= a.length && (6 == a.length ? (a = new Microsoft.Maps.Location(b, f), _document_div_maps.setView({
                          animate: true,
                          center: a,
                          zoom: d
                      }), c = false) : 7 == a.length && (a = new Microsoft.Maps.Location(b, f), _document_div_maps.setView({
                          animate: true,
                          center: a,
                          zoom: d
                      }), c = false))
                }
            }
            c && _krpanointerface.trace(3, "bingmaps plugin - flyto() syntax error!")
        }
    }
    // 平移方式
    function panBy() {
        if (_document_div_maps) {
            var a = arguments;
            if (2 == a.length) {
                var c = Number(a[0]),
                  a = Number(a[1]),
                  b = _document_div_maps.tryLocationToPixel(new Microsoft.Maps.Location(y, w));
                b && (b.x += c, b.y += a, (c = _document_div_maps.tryPixelToLocation(b)) &&
                  _document_div_maps.setView({
                      animate: true,
                      center: c,
                      zoom: r
                  }))
            } else _krpanointerface.trace(3, "bingmaps plugin - panby() syntax error!")
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
            g && (b.style[_pluginpath_backgroundsize] = p[0] + "px " + 3 * p[1] + "px");
            b.innerHTML = "<div style='vertical-align:middle;padding-top:" + p[3] + "px;'><center>" + a + "</center></div>";
            return b
        }

        function b(a, b, c) {
            a.style.border =
              c ? "1px solid rgba(100,100,100,0.3)" : "1px solid #acafb8";
            a.style.color = c ? "#ffffff" : "#4f5459";
            a.style.textShadow = c ? "#4f5459 0px -1px 1px" : "#f2f3f5 0px 1px 1px";
            var f = _pluginpath_prefix;
            if ("Microsoft Internet Explorer" == navigator.appName || 0 <= navigator.userAgent.indexOf("MSIE ") || 0 <= navigator.userAgent.indexOf("Trident")) f = "ms";
            "" != f && (f = "-" + f + "-");
            a.style.backgroundImage = "webkit" == _pluginpath_prefix ? c ? "-webkit-gradient(linear, 0% 0%, 0% 100%, from(#b0b4ba), to(#6d7580))" : "-webkit-gradient(linear, 0% 0%, 0% 100%, from(#f3f4f5), to(#bdc0ca))" :
              "-ms-" == f ? c ? f + "linear-gradient(top, #b0b4ba, #6d7580)" : f + "linear-gradient(top, #f3f4f5, #bdc0ca)" : c ? f + "linear-gradient(to bottom, #b0b4ba, #6d7580)" : f + "linear-gradient(to bottom, #f3f4f5, #bdc0ca)";
            g && (a.style.backgroundPosition = "0px " + -(b - 1) * p[1] + "px")
        }

        function f(a) {
            a && (a.stopPropagation(), a.preventDefault(), a.stopImmediatePropagation())
        }

        function k(a) {
            a && (f(a), setMaptype("normal"));
            b(m, 1, true);
            b(x, 2, false);
            b(r, 3, false)
        }

        function e(a) {
            a && (f(a), setMaptype("satellite"));
            b(m, 1, false);
            b(x, 2, true);
            b(r, 3, false)
        }

        function q(a) {
            a && (f(a), setMaptype("hybrid"));
            b(m, 1, false);
            b(x, 2, false);
            b(r, 3, true)
        }
        var g = "v" == String(a.buttonalign).toLowerCase(),
          l = Number(a.scale),
          n = String(a.buttontexts).split("|");
        3 != n.length && (n = ["Map", "Satellite", "Hybrid"]);
        isNaN(l) && (l = 1);
        _krpanointerface.ismobile && (l *= .5);
        var l = l * _krpanointerface_device_pixelratio,
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
            var f = Math.floor(_pluginobject.pixelwidth *
                _krpanointerface.stagescale),
              e = Math.floor(_pluginobject.pixelheight * _krpanointerface.stagescale),
              k = g ? p[0] : 3 * p[0],
              u = g ? 3 * p[1] : p[1],
              k = k + t[0],
              u = u + t[1],
              l = 0 <= a.indexOf("left") && 0 > a.indexOf("right");
            a = 0 <= a.indexOf("top") && 0 > a.indexOf("bottom");
            b = b * _krpanointerface.stagescale * _krpanointerface_device_pixelratio;
            c = c * _krpanointerface.stagescale * _krpanointerface_device_pixelratio;
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
            _krpanointerface_events.mouse && (m.addEventListener("mousedown", k), m.addEventListener("mouseup", f));
            _krpanointerface_events.touch && (m.addEventListener(_krpanointerface_events_touchstart, k), m.addEventListener(_krpanointerface_events_touchend, f));
            _krpanointerface_events.mouse && (x.addEventListener("mousedown", e), x.addEventListener("mouseup", f));
            _krpanointerface_events.touch && (x.addEventListener(_krpanointerface_events_touchstart, e), x.addEventListener(_krpanointerface_events_touchend, f));
            _krpanointerface_events.mouse && (r.addEventListener("mousedown", q), r.addEventListener("mouseup", f));
            _krpanointerface_events.touch && (r.addEventListener(_krpanointerface_events_touchstart, q), r.addEventListener(_krpanointerface_events_touchend, f));
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
            e.dragable && (m = true, f(c), _krpanointerface_events.mouse && (window.addEventListener("mousemove", f, true), window.addEventListener("mouseup", b, true)), _krpanointerface_events.touch && (window.addEventListener(_krpanointerface_events_touchmove, f, true), window.addEventListener(_krpanointerface_events_touchcancel, b, true), window.addEventListener(_krpanointerface_events_touchend, b, true)), a(c))
        }

        function b(c) {
            _krpanointerface_events.mouse && (window.removeEventListener("mousemove", f, true), window.removeEventListener("mouseup", b, true));
            _krpanointerface_events.touch && (window.removeEventListener(_krpanointerface_events_touchmove, f, true), window.removeEventListener(_krpanointerface_events_touchcancel, b, true), window.removeEventListener(_krpanointerface_events_touchend,
              b, true));
            a(c)
        }

        function f(a) {
            if (null == _krpanointerface) b(a);
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
                _krpanointerface_events && _krpanointerface_events.touch ? (a = a.changedTouches ? a.changedTouches : [a], 0 < a.length && (d = a[0], f = Math.round(d.clientX - I.left), d = Math.round(d.clientY - I.top))) : (f = Math.round(a.clientX - I.left), d = Math.round(a.clientY - I.top));
                c = 180 * Math.atan2(d - c.y, f - c.x) / Math.PI;
                c -= e.bmspot.heading;
                if (1 == m) r = c - Number(_krpanointerface.view.hlookat), m = false;
                else {
                    for (c -= r; 180 < c;) c -= 360;
                    for (; -180 > c;) c += 360;
                    _krpanointerface.view.hlookat = c
                }
                e.needredraw = true
            }
        }

        function u() {
            e.needredraw = true;
            g && (g.path.setAttribute("stroke", setRGB(e.linecolor)), g.path.setAttribute("stroke-width", e.linewidth), g.path.setAttribute("stroke-opacity", e.linealpha * e.alpha), g.path.setAttribute("fill", setRGB(e.fillcolor)), g.path.setAttribute("fill-opacity", e.fillalpha * e.alpha))
        }
        var e = this,
          q = null,
          g = null;
        e.visible = false;
        e.dragable = true;
        e.size = 100;
        e.zoomwithmap = false;
        e.alpha = .5;
        e.fillcolor = 16777215;
        e.fillalpha = 1;
        e.linewidth = 0;
        e.linecolor = 16777215;
        e.linealpha = 0;
        e.glow = true;
        e.glowcolor = 16777215;
        e.glowwidth = 4;
        e.glowstrength = 3;
        e.headingoffset = 90;
        e.bmspot = null;
        e.needredraw = true;
        var l = null,
          n = null,
          m = false,
          r = 0,
          t = null,
          y = 0,
          p = 0,
          w = -1E3,
          I = -1E3,
          sa = -1,
          q = _pluginobject.radar;
        q || (_krpanointerface.set(_pluginpath + ".radar.visible", false), q = _pluginobject.radar);
        e.destroy = function () {
            e.bmspot = null;
            n && _document_div_maps.entities.remove(n);
            l && _document_div_maps.entities.remove(l);
            n = l = null
        };
        e.update = function () {
            e.needredraw = true
        };
        e.updatehandler = function () {
            if (_document_div_maps && (null == l && null != e.bmspot && (l = new Microsoft.Maps.Pushpin(new Microsoft.Maps.Location(e.bmspot.lat, e.bmspot.lng), {
                icon: otherPoint.src,
                anchor: {
                x: 0,
                y: 0
            },
                width: 64,
                height: 64,
                zIndex: 0
            }), _document_div_maps.entities.push(l)), null != l)) {
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
                    if (null == l._krpdom) return; g = setViewerStroke(500, 500); u(); l._krpimg.style.display = "none"; l._krpdom.style.overflow = "visible"; l._krpdom.appendChild(g.svg); _krpanointerface_events.mouse && g.path.addEventListener("mousedown", c, true); _krpanointerface_events.touch && g.path.addEventListener(_krpanointerface_events_touchstart, c, true)
                }
                if (null ==
                  e.bmspot || 0 == e.visible) g && g.hide();
                else {
                    g && g.show();
                    a = Number(_krpanointerface.view.hlookat);
                    b = Number(_krpanointerface.view.hfov);
                    a += e.bmspot.heading;
                    a += e.headingoffset;
                    if (w != e.bmspot.lat || I != e.bmspot.lng) w = e.bmspot.lat, I = e.bmspot.lng, l.setLocation(new Microsoft.Maps.Location(e.bmspot.lat, e.bmspot.lng));
                    if (e.bmspot != t || a != y || b != p) t = e.bmspot, y = a, p = b, e.needredraw = true;
                    if (e.needredraw) {
                        l && l._krpdom && (l._krpdom.style.overflow = "visible");
                        var f = e.zoomwithmap ? Math.pow(2, _document_div_maps.getZoom()) / 1E4 : 1,
                          f = 1 * e.size * f * _krpanointerface_device_pixelratio;
                        2800 < f && (f = 2800);
                        if (g) {
                            var d = 16 *
                              (Math.floor(2 * f / 16) + 1) + 16;
                            d != sa && (sa = d, g.svg.setAttribute("width", d), g.svg.setAttribute("height", d), g.svg.style.left = -d / 2 + "px", g.svg.style.top = -d / 2 + "px", g.centerx = d / 2, g.centery = d / 2);
                            g.drawpie(d / 2, d / 2, f, a - .5 * b, a + .5 * b)
                        }
                    }
                    e.needredraw = false
                }
            }
        };
        (function () {
            q.registerattribute("visible", e.visible, function (a) {
                e.visible = activeSpotEnabled(a);
                e.update()
            }, function () {
                return e.visible
            });
            q.registerattribute("dragable", e.dragable, function (a) {
                e.dragable = activeSpotEnabled(a)
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
                e.zoomwithmap = activeSpotEnabled(a);
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
              a && (a = false);
            var c = b.xmlobject.name,
              e = _pluginobject.spot.getArray(),
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
        b.shadow = true;
        b.scale = 1;
        b.xmlobject = null;
        b.url_bitmapdata = null;
        b.overurl_bitmapdata = null;
        b.activeurl_bitmapdata = null;
        b.url_bitmapdata = otherPoint;
        b.overurl_bitmapdata = null;
        b.activeurl_bitmapdata = currentPoint;
        b.xmlobject = a;
        a.registerattribute("url", b.url, function (a) {
            if ("" == a || "null" ==
              a) a = null;
            a != b.url && (b.url = a, null != b.url ? createImgElement(b.url, function (a) {
                b.url_bitmapdata = a;
                c()
            }) : (b.url_bitmapdata = otherPoint, c()))
        }, function () {
            return b.url
        });
        a.registerattribute("overurl", b.overurl, function (a) {
            if ("" == a || "null" == a) a = null;
            a != b.overurl && (b.overurl = a, null != b.overurl ? createImgElement(b.overurl, function (a) {
                b.overurl_bitmapdata = a
            }) : b.overurl_bitmapdata = null)
        }, function () {
            return b.overurl
        });
        a.registerattribute("activeurl", b.activeurl, function (a) {
            if ("" == a || "null" == a) a = null;
            a != b.activeurl && (b.activeurl = a, null != b.activeurl ? createImgElement(b.activeurl,
              function (a) {
                  b.activeurl_bitmapdata = a;
                  c(true)
              }) : (b.activeurl_bitmapdata = currentPoint, c(true)))
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
            b.shadow = activeSpotEnabled(a)
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
    // 标记点类
    function spotClass(a) {
        function c() {
            var a = _pluginobject.spotstyle.getItem(_this_G.spotstyle),
              b = null;
            return null == a ? (a = "bingmaps plugin - spot[" + l.name + '] - spotstyle "' + _this_G.spotstyle + '" not found!', a != y && (y = a, _krpanointerface.trace(3, a)), null) : b = a.internalObject
        }

        function b(a, b) {
            x = a;
            b || (b = _this_G.zoomwithmap ? Math.pow(2, r) / Math.pow(2, _this_G.zoombaselevel) : 1);
            var d = x,
              e = d ? d.naturalWidth : 12,
              f = d ? d.naturalHeight : 12,
              h = Math.floor(e / 2),
              k = Math.floor(f / 2),
              l = c(),
              m = 1 * b * _krpanointerface_device_pixelratio;
            l && x && (m = Number(l.scale) * b * _krpanointerface_device_pixelratio, d && void 0 !== d.naturalScale &&
              (m *= d.naturalScale), e *= m, f *= m, h = l.edge, k = l.x, l = l.y, 0 <= h.indexOf("left") || (k = 0 <= h.indexOf("right") ? k + e : k + Math.floor(e / 2)), 0 <= h.indexOf("top") || (l = 0 <= h.indexOf("bottom") ? l + f : l + Math.floor(f / 2)), h = k, k = l);
            w = {
                icon: d.src,
                anchor: {
                    x: h,
                    y: k
                },
                width: e,
                height: f,
                zIndex: _this_G.active ? 2 : 1,
                typeName: "_krp_bingmaps_pin_cursor"
            };
            _pushpin && (_pushpin.setOptions(w), _pushpin._krpimg && (_pushpin._krpimg.style[_pluginpath_transform + "Origin"] = "0 0", _pushpin._krpimg.style[_pluginpath_transform] = "scale(" + m + "," + m + ")"));
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
            _this_G.active && 0 == K || (a = l.onclick, null != a && "" != a && _krpanointerface.call(a, l))
        }

        function e(a) {
            _this_G.active && 0 == K || (null == t && (a = c()) && a.overurl_bitmapdata && b(a.overurl_bitmapdata), E = l, a = l.onover, null != a && "" != a && _krpanointerface.call(a, l))
        }

        function n(a) {
            E = null;
            null != a && _this_G.active && 0 == K || (null == t && (a = c()) && (_this_G.active && a.activeurl_bitmapdata ? b(a.activeurl_bitmapdata) : a.url_bitmapdata && b(a.url_bitmapdata)), a = l.onout, null != a && "" != a && _krpanointerface.call(a, l))
        }
        var _this_G = this;
        _this_G.spotstyle = "default";
        _this_G.url = null;
        _this_G.lat = Number.NaN;
        _this_G.lng = Number.NaN;
        _this_G.heading = 0;
        _this_G.active = false;
        _this_G.needdom = false;
        _this_G.zoomwithmap = false;
        _this_G.zoombaselevel = 10;
        _this_G.needupdate = false;
        var l = null,
          m = 0,
          t = null,
          v = null,
          x = null,
          y = null,
          _pushpin = null,      // 图钉
          w = null,
          l = a;
        _this_G.xmlobject = l;
        _this_G.update = function (a) {
            void 0 === a && (a = 0);
            _this_G.needupdate = true;
            m |= a;
            N = true
        };
        _this_G.processupdate = function () {
            if (null != l) {
                if (2 == (m & 2)) {
                    var a = false;
                    if (_document_div_maps) {
                        var d = !isNaN(_this_G.lat) && !isNaN(_this_G.lng),
                          h = d ? new Microsoft.Maps.Location(_this_G.lat, _this_G.lng) : new Microsoft.Maps.Location(0, 0);
                        null == _pushpin && d ? (d = c(), a =
                            _this_G.active ? d.activeurl_bitmapdata : d.url_bitmapdata, _pushpin = null, w = b(a), _pushpin = new Microsoft.Maps.Pushpin(h, w), _document_div_maps.entities.push(_pushpin), f(_pushpin), h = d.scale, void 0 !== a.naturalScale && (h *= a.naturalScale), _this_G.zoomwithmap && (h *= Math.pow(2, r) / Math.pow(2, _this_G.zoombaselevel)), h *= _krpanointerface_device_pixelratio, _pushpin._krpimg ? (_pushpin._krpimg.style[_pluginpath_transform + "Origin"] = "0 0", _pushpin._krpimg.style[_pluginpath_transform] = "scale(" + h + "," + h + ")") : N = _this_G.needdom = true, Microsoft.Maps.Events.addHandler(_pushpin, "click", u), Microsoft.Maps.Events.addHandler(_pushpin, "mouseover", e), Microsoft.Maps.Events.addHandler(_pushpin, "mouseout", n), a = true) : _pushpin && d &&
                          (_pushpin.setLocation(h), a = true)
                    }
                    a && (m &= -3)
                }
                1 == (m & 1) && _this_G.updateimage() && (m &= -2);
                0 == m && (_this_G.needupdate = false)
            }
        };
        _this_G.updateimage = function () {
            if ("" == _this_G.url || "null" == _this_G.url) _this_G.url = null;
            if (_this_G.url) _this_G.url != t && (t = _this_G.url, createImgElement(_this_G.url, function (a) {
                v = a;
                b(a)
            }));
            else {
                v = t = null;
                var a = c();
                a && (a = _this_G.active ? a.activeurl_bitmapdata : a.url_bitmapdata, x != a && b(a))
            }
            return true
        };
        _this_G.scalespot = function (a) {
            b(x, a)
        };
        _this_G.try_dom_access = function () {
            if (_pushpin)
                if (f(_pushpin), _pushpin._krpimg) {
                    var a = c();
                    b(t ? v : _this_G.active ? a.activeurl_bitmapdata : a.url_bitmapdata);
                    _this_G.needdom = false
                } else N = _this_G.needdom = true
        };
        _this_G.destroy = function () {
            _pushpin && _document_div_maps && _document_div_maps.entities.remove(_pushpin);
            x = l = w = _pushpin = null
        };
        l.event_out = n;
        (function () {
            a.registerattribute("spotstyle", _this_G.spotstyle, function (a) {
                if (null == a || "" == a) a = "default";
                _this_G.spotstyle = String(a).toLowerCase();
                _this_G.update(1)
            }, function () {
                return _this_G.spotstyle
            });
            a.registerattribute("url", _this_G.url, function (a) {
                a != _this_G.url && (_this_G.url = String(a), _this_G.update(1))
            }, function () {
                return _this_G.url
            });
            a.registerattribute("lat", _this_G.lat, function (a) {
                _this_G.lat = Number(a);
                _this_G.update(2)
            }, function () {
                return _this_G.lat
            });
            a.registerattribute("lng", _this_G.lng,
              function (a) {
                  _this_G.lng = Number(a);
                  _this_G.update(2)
              },
              function () {
                  return _this_G.lng
              });
            a.registerattribute("heading", _this_G.heading, function (a) {
                _this_G.heading = Number(a)
            }, function () {
                return _this_G.heading
            });
            a.registerattribute("active", _this_G.active, function (a) {
                _this_G.active = activeSpotEnabled(a);
                _this_G.update(1)
            }, function () {
                return _this_G.active
            });
            a.registerattribute("zoomwithmap", _this_G.zoomwithmap, function (a) {
                _this_G.zoomwithmap = activeSpotEnabled(a);
                _this_G.update(2)
            }, function () {
                return _this_G.zoomwithmap
            });
            a.registerattribute("zoombaselevel", _this_G.zoombaselevel, function (a) {
                _this_G.zoombaselevel = Number(a);
                _this_G.update(2)
            },
              function () {
                  return _this_G.zoombaselevel
              });
            a.registerattribute("onover", null);
            a.registerattribute("onhover", null);
            a.registerattribute("onout", null);
            a.registerattribute("onclick", null);
            a.activatespot = function () {
                activateSpot(l.name)
            };
            a.pantospot = function () {
                panTospot(l.name)
            }
        })()
    }
    // 其他点
    var otherPoint = {
        src: "data:image/png;base64,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",
        naturalWidth: 64,
        naturalHeight: 64,
        naturalScale: .5
    },
    // 当前点
        currentPoint = {
          src: "data:image/png;base64,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",
          naturalWidth: 64,
          naturalHeight: 64,
          naturalScale: .5
      },
      _krpanointerface = null,
      _pluginobject = null,
      _pluginpath = null,
      _krpanointerface_device = null,
      _timers = null,
      _pluginpath_prefix = "webkit",
      _pluginpath_transform = "webkitTransform",
      _pluginpath_backgroundsize = "-webkit-background-size",
      _krpanointerface_events = null,
      _krpanointerface_events_touchstart = "touchstart",
      _krpanointerface_events_touchmove = "touchmove",
      _krpanointerface_events_touchend = "touchend",
      _krpanointerface_events_touchcancel = "touchcancel",
      _krpanointerface_device_pixelratio = 1,
      _krpano_bmap_cb_var = null,
      _document_div = null,
      _document_div_maps = null,
      S = false,
      N = false,
      H = true,
      t = null,
      E = null,
      aa = false,
      C = null,
      _maptypecontrol = null,
      D, ua, y, w, r, K;
    // 安装插件 registerplugin
    // registerplugin - startup point for the plugin (required)
    // - krpanointerface = krpano interface object
    // - pluginpath = the fully qualified plugin name (e.g. "plugin[name]")
    // - pluginobject = the xml plugin object itself
    this.registerplugin = function (krpanointerface, pluginpath, pluginobject) {
        debugger;
        function f() {
            var a = document.createElement("style");
            a.type = "text/css";
            a.innerHTML = "._krp_bingmaps_pin_cursor{cursor:pointer!important;}";
            document.getElementsByTagName("head")[0].appendChild(a)
        }
        _krpanointerface = krpanointerface;
        _pluginobject = pluginobject;
        _pluginpath = pluginpath;
        if ("1.18" > _krpanointerface.version || 0 == _krpanointerface.hasOwnProperty("haveLicense")) _krpanointerface.trace(3, "Bingmaps Plugin - too old krpano version (min. version 1.18)");
        else {
            _krpanointerface_device = _krpanointerface.device;
            _krpanointerface_device.androidstock && (_krpanointerface_device_pixelratio = _krpanointerface_device.pixelratio);
            krpanointerface = _krpanointerface.device.browser;
            pluginpath = krpanointerface.css;
            _krpanointerface_events = krpanointerface.events;
            _krpanointerface_events_touchstart = _krpanointerface_events.touchstart;
            _krpanointerface_events_touchmove = _krpanointerface_events.touchmove;
            _krpanointerface_events_touchend = _krpanointerface_events.touchend;
            _krpanointerface_events_touchcancel = _krpanointerface_events.touchcancel;
            _pluginpath_prefix = pluginpath.prefix;
            _pluginpath_transform = pluginpath.transform;
            _pluginpath_backgroundsize = pluginpath.backgroundsize;
            _pluginpath_prefix = void 0 === _pluginpath_prefix || null === _pluginpath_prefix ? "webkit" : String(_pluginpath_prefix).toLowerCase();
            if (void 0 === _pluginpath_transform || null === _pluginpath_transform) _pluginpath_transform = "webkitTransform";
            if (void 0 === _pluginpath_backgroundsize || null === _pluginpath_backgroundsize) _pluginpath_backgroundsize = "-webkit-background-size";
            f();
            _pluginobject.maskchildren = true;
            _pluginobject.registerattribute("key", null);
            _pluginobject.registerattribute("maptype", "satellite", function (a) {
                setMaptype(a)
            }, function () {
                return D
            });
            _pluginobject.registerattribute("maptypes", "normal|satellite|hybrid", function (a) {
                ua = String(a)
            }, function () {
                return ua
            });
            _pluginobject.registerattribute("lat", 0, function (a) {
                y = Number(a);
                updateMaps()
            }, function () {
                return y
            });
            _pluginobject.registerattribute("lng", 0, function (a) {
                w = Number(a);
                updateMaps()
            }, function () {
                return w
            });
            _pluginobject.registerattribute("zoom", 1, function (a) {
                r = Number(a);
                updateMaps()
            }, function () {
                return r
            });
            _pluginobject.registerattribute("activespotenabled", false, function (a) {
                K = activeSpotEnabled(a)
            }, function () {
                return K
            });
            _pluginobject.registerattribute("bgcolor", 0);
            _pluginobject.registerattribute("bgalpha", 0);
            _pluginobject.registerattribute("mapsapi", "");
            _pluginobject.registerattribute("onmapready", null);
            _pluginobject.registerattribute("onmapmoved", null);
            _pluginobject.registerattribute("onmapzoomed", null);
            _pluginobject.registerattribute("onmaptypechanged", null);
            _pluginobject.setzoom = setZoom;
            _pluginobject.setcenter = setCenter;
            _pluginobject.setmaptype = setMaptype;
            _pluginobject.addspot = addSpot;
            _pluginobject.addstylespot = addStylespot;
            _pluginobject.addimagespot = addImagespot;
            _pluginobject.removespot = removeSpot;
            _pluginobject.removeallspots = removeAllspots;
            _pluginobject.activatespot = activateSpot;
            _pluginobject.addspotstyle = addSpotstyle;
            _pluginobject.panto = panTo;
            _pluginobject.pantospot = panTospot;
            _pluginobject.panby = panBy;
            _pluginobject.flyto = flyTo;
            _pluginobject.flytospot = flyTospot;
            _pluginobject.cancelflyto = cancelFlyto;
            _pluginobject.zoomin = zoomIn;
            _pluginobject.zoomout = zoomOut;
            _pluginobject.zoomtospotsextent = zoomTospotsextent;
            _pluginobject.resetspots = removeAllspots;
            _pluginobject.updatespots = updateSpots;
            _pluginobject.updatecontrols = updateControls;
            createSpotsStyle();
            createSpots();
            0 == _krpanointerface.haveLicense("maps") && setTimeout(showDemoText, 100);
            _pluginobject.registercontentsize(400, 300);
            krpanointerface = Math.floor(_pluginobject.pixelwidth * _krpanointerface.stagescale);
            pluginpath = Math.floor(_pluginobject.pixelheight * _krpanointerface.stagescale);
            _document_div = document.createElement("div");
            _document_div.style.position = "absolute";
            _document_div.style.left = 0;
            _document_div.style.top = 0;
            _document_div.style.width = krpanointerface + "px";
            _document_div.style.height = pluginpath + "px";
            _document_div.style.overflow = "hidden";
            _document_div.style.fontFamily = "Arial";
            _document_div.style.fontSize =
              9 * _krpanointerface.stagescale + "px";
            _document_div.style.fontSize = 9 * _krpanointerface.stagescale + "px";
            _document_div.style.webkitUserSelect = "none";
            _document_div.style.MozUserSelect = "none";
            _pluginobject.sprite.appendChild(_document_div);
            if (window.Microsoft && window.Microsoft.Maps) setTimeout(initBingMap, 10);
            else if (window._krpano_bmap_loadedcallbacks_) window._krpano_bmap_loadedcallbacks_.push(initBingMap);
            else {
                window._krpano_bmap_loadedcallbacks_ = [];
                _krpano_bmap_cb_var = "_krpano_bmap_cb_";
                for (krpanointerface = 0; 16 > krpanointerface; krpanointerface++) _krpano_bmap_cb_var += String.fromCharCode(65 + 32 * Math.round(Math.random()) + Math.floor(25 * Math.random()));
                window[_krpano_bmap_cb_var] = reinitBingMap;
                krpanointerface = "";
                _pluginobject.culturecode && (krpanointerface = "&mkt=" +
                  _pluginobject.culturecode);
                (pluginpath = _pluginobject.mapsapi) && "" != pluginpath || (pluginpath = 0 == ("" + window.location.href).toLowerCase().indexOf("https:") ? "https://ecn.dev.virtualearth.net/mapcontrol/mapcontrol.ashx?v=7.0&s=1" : "http://ecn.dev.virtualearth.net/mapcontrol/mapcontrol.ashx?v=7.0");
                pluginobject = document.createElement("script");
                pluginobject.type = "text/javascript";
                pluginobject.src = pluginpath + krpanointerface + "&onscriptload=" + _krpano_bmap_cb_var;
                debugger;
                document.body.appendChild(pluginobject)
            }
        }
    };
    // 卸载插件
    this.unloadplugin = function () {
        S = false;
        null != _timers && (clearInterval(_timers), _timers = null);
        _krpanointerface = _pluginobject = _document_div_maps = _document_div = null
    };
    // 窗口改变
    this.onresize = function (a, c) {
        var b = Math.floor(a * _krpanointerface.stagescale),
          d = Math.floor(c * _krpanointerface.stagescale);
        _document_div && (_document_div.style.width = b + "px", _document_div.style.height = d + "px");
        _document_div_maps && (_document_div_maps.setOptions({
            height: d,
            width: b
        }), setBGColor());
        updateControls();
        return false
    }
};