/*
    krpano 1.19-pr7 Google Maps Plugin (build 2016-09-09)
    http://krpano.com/plugins/googlemaps/
*/
var krpanoplugin = function () {
    // 判断是否为真
    function getBoolean(a) {
        return "boolean" == typeof a ? a : 0 <= "yesontrue1".indexOf(String(a).toLowerCase())
    }
    // 设置RGB颜色
    function setRGB(a) {
        return "rgb(" + (a >> 16 & 255) + "," + (a >> 8 & 255) + "," + (a & 255) + ")"
    }
    // 初始化谷歌地图
    function initGoogleMap() {
        null != _krpano_gmap_cb_var && (window[_krpano_gmap_cb_var] = null, delete window[_krpano_gmap_cb_var], _krpano_gmap_cb_var = null);
        _krpanointerface && google && google.maps && _krpanointerface.trace(0, "Google Maps API Version: " + google.maps.version);
        var mapparame = window._krpano_gmap_loadedcallbacks_;
        if (mapparame) {
            window._krpano_gmap_loadedcallbacks_ = null;
            delete window._krpano_gmap_loadedcallbacks_;
            var d = mapparame.length, b;
            if (0 < d && 99 > d)
                for (b = 0; b < d; b++)
                setTimeout(mapparame[b], 10 + 5 * b)
        }
        _krpanointerface && _pluginobject &&
        (_map_div = document.createElement("div"),
         _map_div.style.position = "absolute",
         _map_div.style.width = "100%",
         _map_div.style.height = "100%",
         _krpanointerface_device.android &&
         _krpanointerface_device.firefox &&
         (_map_div.style.opacity = .99),
         _pluginobject.sprite.appendChild(_map_div),
         mapparame = {
            mapTypeId: getMaptype(mapTYPE),
            center: new google.maps.LatLng(_pluginobject.lat, _pluginobject.lng),
            zoom: map_zoom,
            tilt: map_tilt,
            heading: map_heading,
            keyboardShortcuts: false,
            noClear: true
        }, _krpanointerface.control &&
           true === _krpanointerface.control.disablewheel &&
           (mapparame.scrollwheel = false),
           mapparame = mapParameters(mapparame),
           google.maps.visualRefresh = true,
           _google_map = new google.maps.Map(_map_div, mapparame),
           _krpanointerface_device.touchdeviceNS &&
           (_map_div.addEventListener(_krpanointerface_device.browser.events.touchstart,touchStartEvent, true),
            _map_div.addEventListener(_krpanointerface_device.browser.events.touchend, touchEndEvent, true),
            _map_div.addEventListener(_krpanointerface_device.browser.events.touchcancel, touchEndEvent, true)),
            _map_div.addEventListener("DOMMouseScroll", domMouseScrollEvent, true),
            null == _timers &&
            (_timers = setInterval(redrawMAP, 1E3 / 60)),     // 周期执行刷新地图 单位毫秒 每秒60帧
            viewRadarOBJ = new viewRadarClass,
            updateSpots(),
            ha = true,
            _krpanointerface.call(_pluginobject.onmapready, _pluginobject),
            google.maps.event.addListener(_google_map, "maptypeid_changed", mapTypeidChanged),
            google.maps.event.addListener(_google_map, "center_changed", refreshGoogleMap),
            google.maps.event.addListener(_google_map, "zoom_changed", refreshGoogleMap))
    }
    // 设置视野范围标记SVG
    function setViewRadarSmart(dwidth, dheight) {
        var b = document.createElementNS("http://www.w3.org/2000/svg", "svg");
        b.setAttribute("width", dwidth);
        b.setAttribute("height", dheight);
        b.style.position = "absolute";
        b.style.left = -dwidth / 2 + "px";
        b.style.top = -dheight / 2 + "px";
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
        e.centerx = dwidth / 2;
        e.centery = dheight / 2;
        var f = -1;
        e.hide = function () {
            0 != f && (f = 0, b.style.display = "none")
        };
        e.show = function () {
            1 != f && (f = 1, b.style.display = "")
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
    // 显示DEMO标记
    function showDemoText() {
        var demoTextFrameDiv = document.createElement("div");
        demoTextFrameDiv.style.position = "absolute";
        demoTextFrameDiv.style.left = "50%";
        demoTextFrameDiv.style.top = "50%";
        demoTextFrameDiv.style.width = "100%";
        demoTextFrameDiv.style.zIndex = 999998;
        demoTextFrameDiv.style.color = "#FFFFFF";
        demoTextFrameDiv.style.opacity = .67;
        demoTextFrameDiv.style.fontSize = _krpanointerface.isphone ? "10px" : "16px";
        demoTextFrameDiv.style["-webkit-text-size-adjust"] = "none";
        demoTextFrameDiv.style.display = "block";
        demoTextFrameDiv.style.cursor = "default";
        demoTextFrameDiv.style.pointerEvents = "none";
        var demoTextDiv = document.createElement("div");
        demoTextDiv.style.position = "relative";
        demoTextDiv.style.left = "-50%";
        demoTextDiv.style.top = _krpanointerface.isphone ? "-64px" : "-46px";
        demoTextDiv.style.pointerEvents = "none";
        demoTextDiv.style.fontFamily = "sans-serif";
        demoTextDiv.style.textShadow = "#000000 1px 1px 2px";
        demoTextDiv.innerHTML = "<center><i><b>krpano Google Maps Plugin<br/>DEMO MODE</b></i></center>";
        demoTextFrameDiv.appendChild(demoTextDiv);
        _pluginobject && _pluginobject.sprite && _pluginobject.sprite.appendChild(demoTextFrameDiv)
    }
    // 触屏开始
    function touchStartEvent(a) {
        _krpanointerface && (_krpanointerface.control.preventTouchEvents = false)
    }
    // 触屏结束
    function touchEndEvent(a) {
        setTimeout(function () {
            _krpanointerface && (_krpanointerface.control.preventTouchEvents = true)
        }, 50)
    }
    // 鼠标滚动
    function domMouseScrollEvent(a) {
        _krpanointerface && a.stopPropagation()
    }
    // 加载图片作为标记
    function loadPics(picUrl, loadedFun) {
        var b = document.createElement("img");
        b.addEventListener("error", function () {
            _krpanointerface &&
            _pluginobject &&
            _krpanointerface.trace(3, _pluginobject._type + "[" + _pluginobject.name + "] loading error: " + picUrl)
        }, true);
        b.addEventListener("load", function () {
            _krpanointerface &&
            _pluginobject &&
            loadedFun(b)
        }, false);
        b.src = _krpanointerface.parsePath(picUrl)
    }
    // 地图切换
    function mapTypeidChanged() {
        if (_google_map) {
            var a = "" + _google_map.getMapTypeId();
            a != mapTYPE &&
                (mapTYPE = a, _krpanointerface.call(_pluginobject.onmaptypechanged, _pluginobject))
        }
    }
    // 刷新谷歌地图
    function refreshGoogleMap() {
        if (_google_map) {
            var a = _google_map.getCenter();
            if (map_lat != a.lat() || map_lng != a.lng())
                map_lat = a.lat(),
                map_lng = a.lng(),
                _krpanointerface.call(_pluginobject.onmapmoved, _pluginobject);
            a = _google_map.getZoom();
            map_zoom != a && (
                viewRadarOBJ &&
                (viewRadarOBJ.needredraw = true),
                map_zoom = a,
                _krpanointerface.call(_pluginobject.onmapzoomed, _pluginobject),
                viewRadarOBJ &&
                viewRadarOBJ.updatehandler())
        }
    }
    // 地图是否初始化 有没有指定的方法
    function hasMethod(methodName) {
        return _google_map && _map_div ?
            (methodName = _map_div.clientHeight,
             (methodName = 0 < _map_div.clientWidth && 0 < methodName) ?
              0 == aa &&
              (aa = _krpanointerface.timertick) :
             aa = 0, methodName) : false
    }
    // 缩放到位置
    function zoomToPoint(a, d) {
        map_lat = a;
        map_lng = d;
        hasMethod("setCenter") ?
        _google_map.setCenter(new google.maps.LatLng(a, d)) :
        (w = true, J = map_lat, K = map_lng)
    }
    // 缩放到级别
    function zoomToLevel(a) {
        map_zoom = a;
        hasMethod("setZoom") ? _google_map.setZoom(Math.round(map_zoom)) : D = true
    }
    // 平移到点
    function panToPoint(a, d) {
        hasMethod("panTo") ?
        _google_map.panTo(new google.maps.LatLng(a, d)) :
        (map_lat = a, map_lng = d, J = map_lat, K = map_lng, w = true)
    }
    // 更新地图1:平移到经纬度 2:缩放地图
    function updateMaps(a) {
        if (_google_map) {
            var d = map_zoom;
            a & 1 && zoomToPoint(map_lat, map_lng);
            a & 2 && zoomToLevel(d)
        }
    }
    // 设置地图倾斜和朝向
    function setTiltHeading() {
        _google_map && (_google_map.setTilt(map_tilt), _google_map.setHeading(map_heading))
    }
    // 地图参数
    function mapParameters(a) {
        a.styles = map_poi ? [] : [{
            featureType: "poi",
            elementType: "labels",
            stylers: [{
                visibility: "off"
            }]
        }];
        var d = ("|" + map_controls + "|").toLowerCase();
        a.zoomControl = 0 <= d.indexOf("|zoom|");
        a.mapTypeControl = 0 <= d.indexOf("|maptype|");
        a.scaleControl = 0 <= d.indexOf("|scale|");
        a.streetViewControl = 0 <= d.indexOf("|streetview|");
        return a
    }
    // 获取地图类型SETMAPTYPE
    function getMaptype(a) {
        a = a.toLowerCase();
        if ("satellite" != a) {
            if ("normal" == a) return google.maps.MapTypeId.ROADMAP;
            if ("hybrid" == a) return google.maps.MapTypeId.HYBRID;
            if ("terrain" == a) return google.maps.MapTypeId.TERRAIN
        }
        return google.maps.MapTypeId.SATELLITE
    }
    // 设置地图种类SETMAPTYPE
    function setMaptype() {
        var a = arguments;
        1 == a.length ?
         (a = String(a[0]).toLowerCase(),
         "satellite" != a &&
         "normal" != a &&
         "hybrid" != a &&
         "terrain" != a &&
         (a = "satellite"),
         _google_map ?
          _google_map.setMapTypeId(getMaptype(a)) : mapTYPE = a) :
          _krpanointerface.trace(3, "googlemaps plugin - setmaptype() syntax error!")
    }
    // 设置地图等级SETZOOM
    function setZoom() {
        if (_google_map) {
            var a = arguments;
            if (1 <=
                a.length) {
                var d = Number(a[0]);
                1 < a.length && getBoolean(a[1]);
                zoomToLevel(d)
            } else _krpanointerface.trace(3, "googlemaps plugin - setzoom() syntax error!")
        }
    }
    // 设置地图中心SETCENTER
    function setCenter() {
        if (_google_map) {
            var a = arguments;
            if (3 == a.length) {
                var d = Number(a[2]);
                zoomToPoint(Number(a[0]), Number(a[1]));
                zoomToLevel(d)
            } else _krpanointerface.trace(3, "googlemaps plugin - setcenter() syntax error!")
        }
    }
    // 放大
    function zoomIn() {
        if (_google_map) {
            var a = arguments,
                d = null;
            if (2 <= a.length) {
                var b = a[0],
                    e = a[1];
                null != b && void 0 != b && "" != b && "null" != b && null != e && void 0 != e && "" != e && "null" != e && (d = new google.maps.LatLng(Number(b), Number(e)))
            }
            2 < a.length && getBoolean(a[2]);
            3 < a.length && getBoolean(a[3]);
            a = map_zoom;
            32 > a && (a += 1);
            map_zoom = a;
            d && (map_lat = d.lat(), map_lng = d.lng());
            d = map_lat;
            b = map_lng;
            zoomToLevel(a);
            zoomToPoint(d, b)
        }
    }
    // 缩小
    function zoomOut() {
        if (_google_map) {
            var a = arguments,
                d = null;
            if (2 <= a.length) {
                var b = a[0],
                    e = a[1];
                null != b && void 0 != b && "" != b && "null" != b && null != e && void 0 != e && "" != e && "null" != e && (d = new google.maps.LatLng(Number(b), Number(e)))
            }
            2 < a.length && getBoolean(a[2]);
            a = map_zoom;
            --a;
            .5 > a && (a = .5);
            map_zoom = a;
            d && (map_lat = d.lat(), map_lng = d.lng());
            d = map_lat;
            b = map_lng;
            zoomToLevel(a);
            zoomToPoint(d, b)
        }
    }
    // 缩放到点范围
    function zoomTospotsextent() {
        if (_google_map)
            if (0 == hasMethod("zoomtospotsextent")) w = D = false, L = true;
            else {
                w = false;
                var a, d, b, g = _pluginobject.spot.getArray();
                d = g.length;
                if (!(1 > d))
                    if (1 ==
                        d) b = g[0].internalObject, setCenter(b.lat, b.lng, map_zoom);
                    else {
                        var f = new google.maps.LatLngBounds;
                        for (a = 0; a < d; a++) b = g[a].internalObject, f.extend(new google.maps.LatLng(b.lat, b.lng));
                        _google_map.fitBounds(f)
                    }
            }
        else w = D = false, L = true
    }
    // 平移到点
    function panTospot() {
        if (_google_map) {
            var a = arguments;
            if (1 == a.length) {
                var d = String(a[0]),
                    a = _pluginpath + ".spot[" + d + "]";
                _krpanointerface.get(a) ?
                (d = Number(_krpanointerface.get(a + ".lat")),
                a = Number(_krpanointerface.get(a + ".lng")),
                isNaN(d) ||
                isNaN(a) ||
                panToPoint(d, a)) :
                _krpanointerface.trace(3, "googlemaps plugin - pantospot() - spot[" + d + "] not found!")
            } else _krpanointerface.trace(3, "googlemaps plugin - pantospot() syntax error!")
        }
    }
    // 平移
    function panTo() {
        if (_google_map) {
            var a = arguments;
            2 == a.length ? panToPoint(Number(a[0]), Number(a[1])) : _krpanointerface.trace(3, "googlemaps plugin - panto() syntax error!")
        }
    }
    // 取消飞行到
    function cancelFlyto() { }
    // 飞到点
    function flyTospot() {
        if (_google_map) {
            var a = arguments;
            if (1 <= a.length) {
                var d = _pluginpath + ".spot[" + String(a[0]) + "].",
                    b = Number(_krpanointerface.get(d + "lat")),
                    d = Number(_krpanointerface.get(d + "lng"));
                isNaN(b) || isNaN(d) || (_google_map.getZoom(), 2 <= a.length && zoomToLevel(map_zoom), panToPoint(b, d))
            } else _krpanointerface.trace(3, "googlemaps plugin - flytospot() syntax error!")
        }
    }
    // 飞到
    function flyTo() {
        if (_google_map) {
            var a = arguments,
                d = true;
            if (2 <= a.length) {
                var b = Number(a[0]),
                    e = Number(a[1]);
                if (2 ==
                    a.length) a = new google.maps.LatLng(b, e), _google_map.setView({
                        animate: true,
                        center: a
                    }), d = false;
                else {
                    var y = Number(a[2]);
                    3 == a.length ? (zoomToLevel(y), panToPoint(b, e), d = false) : 6 <= a.length && (6 == a.length ? (zoomToLevel(y), panToPoint(b, e), d = false) : 7 == a.length && (zoomToLevel(y), panToPoint(b, e), d = false))
                }
            }
            d && _krpanointerface.trace(3, "googlemaps plugin - flyto() syntax error!")
        }
    }
    // 平移方式
    function panBy() {
        if (_google_map) {
            var a = arguments;
            2 == a.length ? _google_map.panBy(Number(a[0]), Number(a[1])) : _krpanointerface.trace(3, "googlemaps plugin - panby() syntax error!")
        }
    }
    // 地图重绘
    function redrawMAP(map_div_size) {
        if (ha) {
            map_div_size = [0, 0];
            if (_google_map && _map_div) {
                var d = _map_div.clientHeight;
                map_div_size[0] = _map_div.clientWidth;
                map_div_size[1] = d
            }
            d = false;
            if (map_div_size[0] != S[0] || map_div_size[1] != S[1])
                S[0] = map_div_size[0], S[1] = map_div_size[1], d = true;
            (d || w || D || L) &&
            hasMethod(null) &&
            (google.maps.event.trigger(_google_map, "resize"),
            L &&
            (L = false, zoomTospotsextent()),
            D &&
            (D = false, _google_map.setZoom(map_zoom)),
            w &&
            (map_lat = J,
             map_lng = K,
             w = false,
             _google_map.setCenter(new google.maps.LatLng(map_lat, map_lng))));
            if (T) {
                T = false;
                map_div_size = _pluginobject.spot.getArray();
                var b = null, g;
                g = map_div_size.length;
                for (d = 0; d < g; d++)
                    (b = map_div_size[d]) &&
                    (b = b.internalObject) &&
                    b.needupdate &&
                    b.processupdate()
            }
            viewRadarOBJ && viewRadarOBJ.updatehandler();
            C && 0 == ((_krpanointerface.display.frame | 0) & 1) &&
            (map_div_size = C.onhover, null != map_div_size && "" != map_div_size && _krpanointerface.call(map_div_size, C))
        }
    }
    // 创建点样式集合
    function createSpotsStyle() {
        _pluginobject.createarray("spotstyle");
        _pluginobject.spotstyle.createItem("default");
        var a = _pluginobject.spotstyle.getArray(),
            d = null,
            b, g;
        g = a.length;
        for (b = 0; b < g; b++)
            d = a[b],
            d.internalObject = new mapSpotClass(d)
    }
    // 创建点集合
    function createSpots() {
        _pluginobject.createarray("spot");
        var a = _pluginobject.spot.getArray(),
            d = null,
            b, g;
        g = a.length;
        for (b = 0; b < g; b++)
            d = a[b],
            d.internalObject = new spotClass(d)
    }
    // 添加点样式
    function addSpotstyle() {
        var a = arguments;
        if (1 <= a.length) {
            var d = String(a[0]).toLowerCase(),
                d = _pluginobject.spotstyle.createItem(d);
            1 < a.length && (d.url = a[1]);
            2 < a.length && (d.overurl = a[2]);
            3 < a.length && (d.activeurl = a[3]);
            4 < a.length && (d.edge = a[4]);
            5 < a.length && (d.x = a[5]);
            6 < a.length && (d.y = a[6]);
            7 < a.length &&
                (d.shadow = a[7]);
            d.internalObject = new mapSpotClass(d)
        } else _krpanointerface.trace(3, "googlemaps plugin - addspotstyle() syntax error!")
    }
    // 添加点
    function addSpot() {
        var a = arguments;
        if (3 <= a.length) {
            var d = String(a[0]).toLowerCase(),
                b = null,
                g = null,
                b = _pluginobject.spot.getItem(d);
            null != b && removeSpot(d);
            b = _pluginobject.spot.createItem(d);
            b.lat = a[1];
            b.lng = a[2];
            3 < a.length && (b.heading = a[3]);
            4 < a.length && (b.active = a[4]);
            5 < a.length && (b.onclick = a[5]);
            6 < a.length && (b.onhover = a[6]);
            7 < a.length && (b.onover = a[7]);
            8 < a.length && (b.onout = a[8]);
            g = new spotClass(b);
            g.update();
            b.internalObject = g;
            g.active &&
            activateSpot(d)
        } else _krpanointerface.trace(3, "googlemaps plugin - addspot() syntax error!")
    }
    // 添加样式点
    function addStylespot() {
        var a = arguments;
        if (5 <= a.length) {
            var d = String(a[0]).toLowerCase(),
                b = null,
                g = null,
                b = _pluginobject.spot.getItem(d);
            null != b && removeSpot(d);
            b = _pluginobject.spot.createItem(d);
            b.lat = a[1];
            b.lng = a[2];
            b.heading = a[3];
            b.spotstyle = a[4];
            5 < a.length && (b.active = a[5]);
            6 < a.length && (b.onclick = a[6]);
            7 < a.length && (b.onhover = a[7]);
            8 < a.length && (b.onover = a[8]);
            9 < a.length && (b.onout = a[9]);
            g = new spotClass(b);
            g.update();
            b.internalObject = g;
            g.active && activateSpot(d)
        } else _krpanointerface.trace(3, "googlemaps plugin - addstylespot() syntax error!")
    }
    // 添加图像点
    function addImagespot() {
        var a = arguments;
        if (6 <= a.length) {
            var d = String(a[0]).toLowerCase(),
                b = null,
                spotOBJ = null,
                b = _pluginobject.spot.getItem(d);
            null != b && removeSpot(d);
            b = _pluginobject.spot.createItem(d);
            b.lat = a[1];
            b.lng = a[2];
            b.heading = a[3];
            b.spotstyle = a[4];
            b.url = a[5];
            6 < a.length && (b.onclick = a[6]);
            7 < a.length && (b.onhover = a[7]);
            8 < a.length && (b.onover = a[8]);
            9 < a.length && (b.onout = a[9]);
            spotOBJ = new spotClass(b);
            spotOBJ.update();
            b.internalObject = spotOBJ
        } else _krpanointerface.trace(3, "googlemaps plugin - addimagespot() syntax error!")
    }
    // 移出点
    function removeSpot() {
        var a = arguments;
        if (1 == a.length) {
            var a = String(a[0]).toLowerCase(),
                d = null,
                b = null;
            (d = _pluginobject.spot.getItem(a)) ?
             (b = d.internalObject,
             viewRadarOBJ &&
             viewRadarOBJ.bmspot == b &&
             (viewRadarOBJ.bmspot = null),
             b &&
             b.destroy(),
             d.internalObject = null,
             _pluginobject.spot.removeItem(a)) :
            _krpanointerface.trace(3, "googlemaps plugin - removespot() - spot[" + a + "] not found!")
        } else _krpanointerface.trace(3, "googlemaps plugin - removespot() syntax error!")
    }
    // 移除所有点
    function removeAllspots() {
        var a = _pluginobject.spot.getArray(),
            d = null,
            b = null,
            g, f;
        f = a.length;
        for (g = 0; g < f; g++)
            d = a[g],
            (b = d.internalObject) &&
            b.destroy(),
            d.internalObject = null;
        _pluginobject.spot.count = 0;
        viewRadarOBJ && (viewRadarOBJ.bmspot = null)
    }
    // 更新点
    function updateSpots() {
        var a = _pluginobject.spot.getArray(),
            d = null,
            b = d = null,
            g, f;
        f = a.length;
        for (g = 0; g < f; g++)
            d = a[g],
            d = d.internalObject,
            d.processupdate(),
            d.active &&
            (b = d);
        b && viewRadarOBJ && (viewRadarOBJ.bmspot = b, viewRadarOBJ.update())
    }
    // 激活点
    function activateSpot() {
        var a = arguments;
        if (1 == a.length) {
            var a = String(a[0]).toLowerCase(),
                d = _pluginobject.spot.getArray(),
                b = null,
                g = null,
                h = null,
                p, c;
            c = d.length;
            for (p = 0; p < c; p++)
                b = d[p],
                g = b.internalObject,
                String(b.name).toLowerCase() == a ?
                 (0 == g.active &&
                 (g.active = true,
                 g.update(1)),
                 h = g) :
                 0 != g.active &&
                 (g.active = false, g.update(1));
            h && (0 == map_mapsapi &&
                  h.xmlobject == C &&
                  (C.event_out(null),
                  C = null), viewRadarOBJ &&
                (viewRadarOBJ.bmspot = h, viewRadarOBJ.update()))
        } else _krpanointerface.trace(3, "googlemaps plugin - activatespot() syntax error!")
    }
    // 视野范围类视野雷达
    function viewRadarClass() {
        // 
        function a(a, c) {
            function d(clatlng, maptypeitem) {
                this.latlng_ = clatlng;
                this.setMap(maptypeitem)
            }
            d.prototype = new google.maps.OverlayView;
            d.prototype.draw = function () {
                var a = this.getPanes();
                if (a && a.overlayImage) {
                    var c = this._krpdom,
                        d = this._krpdom2;
                    c || (c = this._krpdom = document.createElement("DIV"),
                    c.style.border = "none",
                    c.style.position = "absolute",
                    c.style.cursor = "pointer",
                    d = this._krpdom2 = document.createElement("DIV"),
                    d.style.border = "none",
                    d.style.position = "absolute",
                    d.style.cursor = "pointer",
                    radarSVG1 = setViewRadarSmart(500, 500),
                    radarSVG2 = setViewRadarSmart(500, 500),
                    initViewRadar(),
                    c.style.overflow = "visible",
                    c.appendChild(radarSVG1.svg),
                    d.style.opacity = 0,
                    d.style.overflow = "visible",
                    d.appendChild(radarSVG2.svg),
                    _krpanointerface_device.browser.events.mouse &&
                    radarSVG2.path.addEventListener("mousedown", radarMouseDown, true),
                    _krpanointerface_device.browser.events.touch &&
                    radarSVG2.path.addEventListener(_krpanointerface_device.browser.events.touchstart, radarMouseDown, true),
                    a.overlayImage.appendChild(d), a.markerLayer.appendChild(c));
                    if (a = this.getProjection().fromLatLngToDivPixel(this.latlng_))
                        c.style.left = a.x + "px",
                        c.style.top = a.y + "px",
                        d.style.left = a.x + "px",
                        d.style.top = a.y + "px"
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
            debugger;
            a && (a.preventDefault(), a.stopImmediatePropagation(), a.stopPropagation())
        }
        // 雷达图鼠标按下
        function radarMouseDown(a) {
            _this_viewRadar.dragable && (u = true, windowMouseMove(a),
                _krpanointerface_device.browser.events.mouse &&
                (window.addEventListener("mousemove", windowMouseMove, true),
                window.addEventListener("mouseup", windowMouseUP, true)),
                _krpanointerface_device.browser.events.touch &&
                (window.addEventListener(_krpanointerface_device.browser.events.touchmove, windowMouseMove, true),
                window.addEventListener(_krpanointerface_device.browser.events.touchcancel, windowMouseUP, true),
                window.addEventListener(_krpanointerface_device.browser.events.touchend, windowMouseUP, true)),
                d(a))
        }
        // 鼠标抬起
        function windowMouseUP(a) {
            debugger;
            _krpanointerface_device.browser.events.mouse && (
                window.removeEventListener("mousemove", windowMouseMove, true),
                window.removeEventListener("mouseup", windowMouseUP, true));
            _krpanointerface_device.browser.events.touch && (
                window.removeEventListener(_krpanointerface_device.browser.events.touchmove, windowMouseMove, true),
                window.removeEventListener(_krpanointerface_device.browser.events.touchcancel, windowMouseUP, true),
                window.removeEventListener(_krpanointerface_device.browser.events.touchend, windowMouseUP, true));
            d(a)
        }
        // 鼠标在窗口中移动
        function windowMouseMove(a) {
            if (null == _krpanointerface) windowMouseUP(a);
            else if (null != radarSVG1 && null != _this_viewRadar.bmspot) {
                d(a);
                var b;
                b = null;
                var e = 0, B = 0;
                b = { x: 0, y: 0 };
                var h = radarSVG2.svg.parentNode.getBoundingClientRect();
                _krpanointerface_device.browser.events &&
                _krpanointerface_device.browser.events.touch ?
                (a = a.changedTouches ?
                 a.changedTouches : [a],
                 0 < a.length &&
                 (B = a[0],
                  e = Math.round(B.clientX - h.left),
                  B = Math.round(B.clientY - h.top))) :
                (e = Math.round(a.clientX - h.left),
                B = Math.round(a.clientY - h.top));
                b = 180 * Math.atan2(B - b.y, e - b.x) / Math.PI;
                b -= _this_viewRadar.bmspot.heading;
                if (1 == u) ka = b - Number(_krpanointerface.view.hlookat), u = false;
                else {
                    for (b -= ka; 180 < b;) b -= 360;
                    for (; -180 > b;) b += 360;
                    _krpanointerface.view.hlookat = b
                }
                _this_viewRadar.needredraw = true
            }
        }
        // 初始化视野范围样式
        function initViewRadar() {
            _this_viewRadar.needredraw = true;
            radarSVG1 &&
            (radarSVG1.path.setAttribute("stroke", setRGB(_this_viewRadar.linecolor)),
            radarSVG1.path.setAttribute("stroke-width", _this_viewRadar.linewidth),
            radarSVG1.path.setAttribute("stroke-opacity", _this_viewRadar.linealpha * _this_viewRadar.alpha),
            radarSVG1.path.setAttribute("fill", setRGB(_this_viewRadar.fillcolor)),
            radarSVG1.path.setAttribute("fill-opacity", _this_viewRadar.fillalpha * _this_viewRadar.alpha));
            radarSVG2 &&
            (radarSVG2.path.setAttribute("stroke", setRGB(_this_viewRadar.linecolor)),
            radarSVG2.path.setAttribute("stroke-width", _this_viewRadar.linewidth),
            radarSVG2.path.setAttribute("stroke-opacity", _this_viewRadar.linealpha * _this_viewRadar.alpha),
            radarSVG2.path.setAttribute("fill", setRGB(_this_viewRadar.fillcolor)),
            radarSVG2.path.setAttribute("fill-opacity", _this_viewRadar.fillalpha * _this_viewRadar.alpha))
        }
        var _this_viewRadar = this,
            m = null,
            radarSVG1 = null,
            radarSVG2 = null;
        _this_viewRadar.visible = false;
        _this_viewRadar.dragable = true;
        _this_viewRadar.size = 100;
        _this_viewRadar.zoomwithmap = false;
        _this_viewRadar.alpha = .5;
        _this_viewRadar.fillcolor = 16777215;
        _this_viewRadar.fillalpha = 1;
        _this_viewRadar.linewidth = 0;
        _this_viewRadar.linecolor = 16777215;
        _this_viewRadar.linealpha = 0;
        _this_viewRadar.glow = true;
        _this_viewRadar.glowcolor = 16777215;
        _this_viewRadar.glowwidth = 4;
        _this_viewRadar.glowstrength = 3;
        _this_viewRadar.headingoffset = 90;
        _this_viewRadar.bmspot = null;
        _this_viewRadar.needredraw = true;
        var k = null,
            u = false,
            ka = 0,
            v = null,
            B = 0,
            n = 0,
            t = -1E3,
            w = -1E3,
            sa = -1,
            m = _pluginobject.radar;
        m || (_krpanointerface.set(_pluginpath + ".radar.visible", false),
            m = _pluginobject.radar);
        _this_viewRadar.destroy = function () {
            _this_viewRadar.bmspot = null;
            k && k.setMap(null);
            k = null
        };
        _this_viewRadar.update = function () {
            _this_viewRadar.needredraw = true
        };
        _this_viewRadar.updatehandler = function () {
            if (_google_map)
                if (null == k &&
                    null != _this_viewRadar.bmspot &&
                    (k = a(new google.maps.LatLng(_this_viewRadar.bmspot.lat, _this_viewRadar.bmspot.lng),
                     _google_map)),
                    null == _this_viewRadar.bmspot ||
                    0 == _this_viewRadar.visible)
                    radarSVG1 && radarSVG1.hide(),
                    radarSVG2 && radarSVG2.hide();
                else {
                    radarSVG1 && radarSVG1.show();
                    radarSVG2 && radarSVG2.show();
                    var b = Number(_krpanointerface.view.hlookat),
                        d = Number(_krpanointerface.view.hfov),
                        b = b + _this_viewRadar.bmspot.heading,
                        b = b + _this_viewRadar.headingoffset;
                    if (t != _this_viewRadar.bmspot.lat ||
                        w != _this_viewRadar.bmspot.lng)
                        t = _this_viewRadar.bmspot.lat,
                        w = _this_viewRadar.bmspot.lng,
                        k.setPosition(new google.maps.LatLng(_this_viewRadar.bmspot.lat, _this_viewRadar.bmspot.lng));
                    if (_this_viewRadar.bmspot != v || b != B || d != n)
                        v = _this_viewRadar.bmspot,
                        B = b,
                        n = d,
                        _this_viewRadar.needredraw = true;
                    if (_this_viewRadar.needredraw) {
                        var e = _this_viewRadar.zoomwithmap ?
                            Math.pow(2, _google_map.getZoom()) / 1E4 : 1,
                            e = 1 * _this_viewRadar.size * e * _krpanointerface_device_pixelratio;
                        2800 < e && (e = 2800);
                        var g = 16 * (Math.floor(2 * e / 16) + 1) + 16;
                        radarSVG1 &&
                        g != sa &&
                        (sa = g,
                         radarSVG1 &&
                         (radarSVG1.svg.setAttribute("width", g),
                         radarSVG1.svg.setAttribute("height", g),
                         radarSVG1.svg.style.left = -g / 2 + "px",
                         radarSVG1.svg.style.top = -g / 2 + "px",
                         radarSVG1.centerx = g / 2,
                         radarSVG1.centery = g / 2),
                         radarSVG2 &&
                         (radarSVG2.svg.setAttribute("width", g),
                         radarSVG2.svg.setAttribute("height", g),
                         radarSVG2.svg.style.left = -g / 2 + "px",
                         radarSVG2.svg.style.top = -g / 2 + "px",
                         radarSVG2.centerx = g / 2,
                         radarSVG2.centery = g / 2));
                        radarSVG1 && radarSVG1.drawpie(g / 2, g / 2, e, b - .5 * d, b + .5 * d);
                        radarSVG2 && radarSVG2.drawpie(g / 2, g / 2, e, b - .5 * d, b + .5 * d)
                    }
                    _this_viewRadar.needredraw = false
                }
        };
        (function () {
            m.registerattribute("visible", _this_viewRadar.visible, function (a) {
                _this_viewRadar.visible = getBoolean(a);
                _this_viewRadar.update()
            }, function () {
                return _this_viewRadar.visible
            });
            m.registerattribute("dragable", _this_viewRadar.dragable, function (a) {
                _this_viewRadar.dragable = getBoolean(a)
            }, function () {
                return _this_viewRadar.dragable
            });
            m.registerattribute("size", _this_viewRadar.size, function (a) {
                _this_viewRadar.size = Number(a);
                _this_viewRadar.update()
            }, function () {
                return _this_viewRadar.size
            });
            m.registerattribute("zoomwithmap", _this_viewRadar.zoomwithmap, function (a) {
                _this_viewRadar.zoomwithmap =
                    getBoolean(a);
                _this_viewRadar.update()
            }, function () {
                return _this_viewRadar.zoomwithmap
            });
            m.registerattribute("alpha", _this_viewRadar.alpha, function (a) {
                _this_viewRadar.alpha = Number(a);
                initViewRadar()
            }, function () {
                return _this_viewRadar.alpha
            });
            m.registerattribute("fillcolor", _this_viewRadar.fillcolor, function (a) {
                _this_viewRadar.fillcolor = Number(a);
                initViewRadar()
            }, function () {
                return _this_viewRadar.fillcolor
            });
            m.registerattribute("fillalpha", _this_viewRadar.fillalpha, function (a) {
                _this_viewRadar.fillalpha = Number(a);
                initViewRadar()
            }, function () {
                return _this_viewRadar.fillalpha
            });
            m.registerattribute("linewidth", _this_viewRadar.linewidth, function (a) {
                _this_viewRadar.linewidth = Number(a);
                initViewRadar()
            }, function () {
                return _this_viewRadar.linewidth
            });
            m.registerattribute("linecolor",
                _this_viewRadar.linecolor,
                function (a) {
                    _this_viewRadar.linecolor = Number(a);
                    initViewRadar()
                },
                function () {
                    return _this_viewRadar.linecolor
                });
            m.registerattribute("linealpha", _this_viewRadar.linealpha, function (a) {
                _this_viewRadar.linealpha = Number(a);
                initViewRadar()
            }, function () {
                return _this_viewRadar.linealpha
            });
            m.registerattribute("headingoffset", _this_viewRadar.headingoffset, function (a) {
                _this_viewRadar.headingoffset = Number(a);
                _this_viewRadar.update()
            }, function () {
                return _this_viewRadar.headingoffset
            });
            initViewRadar()
        })()
    }
    // 地图坐标点类
    function mapSpotClass(a) {
        function d(a) {
            void 0 === a && (a = false);
            var d = _this_map_spot.xmlobject.name,
                f = _pluginobject.spot.getArray(),
                c = null,
                h, l;
            l = f.length;
            for (h = 0; h < l; h++) c = f[h].internalObject,
            c.spotstyle == d && (0 == a || c.active) && c.update(1)
        }
        var _this_map_spot = this;
        _this_map_spot.url = null;
        _this_map_spot.overurl = null;
        _this_map_spot.activeurl = null;
        _this_map_spot.edge = "center";
        _this_map_spot.x = 0;
        _this_map_spot.y = 0;
        _this_map_spot.shadow = true;
        _this_map_spot.scale = 1;
        _this_map_spot.xmlobject = null;
        _this_map_spot.url_bitmapdata = null;
        _this_map_spot.overurl_bitmapdata = null;
        _this_map_spot.activeurl_bitmapdata = null;
        _this_map_spot.url_bitmapdata = otherPoint;
        _this_map_spot.overurl_bitmapdata = null;
        _this_map_spot.activeurl_bitmapdata = currentPoint;
        _this_map_spot.xmlobject = a;
        a.registerattribute("url", _this_map_spot.url, function (a) {
            if ("" == a || "null" == a) a = null;
            a != _this_map_spot.url &&
            (_this_map_spot.url = a,
            null != _this_map_spot.url ?
            loadPics(_this_map_spot.url, function (a) {
                _this_map_spot.url_bitmapdata = a;
                d()
            }) : (_this_map_spot.url_bitmapdata = otherPoint, d()))
        }, function () {
            return _this_map_spot.url
        });
        a.registerattribute("overurl", _this_map_spot.overurl, function (a) {
            if ("" == a || "null" == a) a = null;
            a != _this_map_spot.overurl &&
            (_this_map_spot.overurl = a,
            null != _this_map_spot.overurl ?
            loadPics(_this_map_spot.overurl, function (a) {
                _this_map_spot.overurl_bitmapdata = a
            }) : _this_map_spot.overurl_bitmapdata = null)
        }, function () {
            return _this_map_spot.overurl
        });
        a.registerattribute("activeurl", _this_map_spot.activeurl, function (a) {
            if ("" == a || "null" == a) a = null;
            a != _this_map_spot.activeurl &&
            (_this_map_spot.activeurl = a,
            null != _this_map_spot.activeurl ?
            loadPics(_this_map_spot.activeurl, function (a) {
                _this_map_spot.activeurl_bitmapdata = a;
                d(true)
            }) : (_this_map_spot.activeurl_bitmapdata = currentPoint, d(true)))
        }, function () {
            return _this_map_spot.activeurl
        });
        a.registerattribute("edge",
            _this_map_spot.edge,
            function (a) {
                _this_map_spot.edge = String(a)
            },
            function () {
                return _this_map_spot.edge
            });
        a.registerattribute("x", _this_map_spot.x, function (a) {
            _this_map_spot.x = Number(a)
        }, function () {
            return _this_map_spot.x
        });
        a.registerattribute("y", _this_map_spot.y, function (a) {
            _this_map_spot.y = Number(a)
        }, function () {
            return _this_map_spot.y
        });
        a.registerattribute("shadow", _this_map_spot.shadow, function (a) {
            _this_map_spot.shadow = getBoolean(a)
        }, function () {
            return _this_map_spot.shadow
        });
        a.registerattribute("scale", _this_map_spot.scale, function (a) {
            _this_map_spot.scale = Number(a)
        }, function () {
            return _this_map_spot.scale
        })
    }
    // 标记点类
    function spotClass(a) {
        // 初始化样式
        function initSpotStyle() {
            var a = _pluginobject.spotstyle.getItem(_this_Spot.spotstyle),
                b = null;
            return null == a ? 
                (a = "googlemaps plugin - spot[" + m.name + '] - spotstyle "' + _this_Spot.spotstyle + '" not found!',
                a != u &&
                (u = a, _krpanointerface.trace(3, a)), null) :
                b = a.internalObject
        }
        // 初始化
        function initSPOT(a, b) {
            q = a;
            b || (b = _this_Spot.zoomwithmap ? Math.pow(2, map_zoom) / Math.pow(2, _this_Spot.zoombaselevel) : 1);
            var e = q,
                _nWidth = e ? e.naturalWidth : 12,
                _nHeight = e ? e.naturalHeight : 12,
                _centerX = Math.floor(_nWidth / 2),
                _centerY = Math.floor(_nHeight / 2),
                _spotstyles = initSpotStyle(),
                m = 1 * b * _krpanointerface_device_pixelratio;
            _spotstyles && q && (m = Number(_spotstyles.scale) * b * _krpanointerface_device_pixelratio, e &&
             void 0 !== e.naturalScale &&
             (m *= e.naturalScale),
             _nWidth *= m, _nHeight *= m, _centerX = _spotstyles.edge,
             _centerY = _spotstyles.x, _spotstyles = _spotstyles.y,
             0 <= _centerX.indexOf("left") ||
             (_centerY = 0 <= _centerX.indexOf("right") ?
             _centerY + _nWidth : _centerY + Math.floor(_nWidth / 2)),
             0 <= _centerX.indexOf("top") ||
             (_spotstyles = 0 <= _centerX.indexOf("bottom") ?
             _spotstyles + _nHeight : _spotstyles + Math.floor(_nHeight / 2)),
             _centerX = _centerY, _centerY = _spotstyles);
            _markerOpean = {
                map: _google_map,
                icon: {
                    url: e.src,
                    origin: new google.maps.Point(0, 0),
                    anchor: new google.maps.Point(_centerX, _centerY),
                    size: new google.maps.Size(_nWidth, _nHeight),
                    scaledSize: new google.maps.Size(_nWidth, _nHeight)
                },
                flat: true,
                optimized: false,
                zIndex: _this_Spot.active ? 2 : 1
            };
            _marker && _marker.setOptions(_markerOpean);
            return _markerOpean
        }
        // 鼠标单击标记点
        function mouseClickMarker(a) {
            _this_Spot.active &&
            0 == map_mapsapi ||
            (a = m.onclick, null != a &&
            "" != a && _krpanointerface.call(a, m))
        }
        // 鼠标停留在标记上
        function mouseOverMarker(a) {
            _this_Spot.active &&
            0 == map_mapsapi ||
            (null == r && (a = initSpotStyle()) &&
            a.overurl_bitmapdata &&
            initSPOT(a.overurl_bitmapdata),
            C = m, a = m.onover,
            null != a &&
            "" != a && _krpanointerface.call(a, m))
        }
        // 鼠标从标记上移开
        function mouseOutMarker(a) {
            C = null;
            null != a && _this_Spot.active &&
                    0 == map_mapsapi ||
                    (null == r &&
                     (a = initSpotStyle()) &&
                     (_this_Spot.active &&
                      a.activeurl_bitmapdata ?
                      initSPOT(a.activeurl_bitmapdata) :
                      a.url_bitmapdata && initSPOT(a.url_bitmapdata)),
                     a = m.onout,
                     null != a &&
                     "" != a && _krpanointerface.call(a, m))
        }
        var _this_Spot = this;
        _this_Spot.spotstyle = "default";
        _this_Spot.url = null;
        _this_Spot.lat = Number.NaN;
        _this_Spot.lng = Number.NaN;
        _this_Spot.heading = 0;
        _this_Spot.active = false;
        _this_Spot.needdom = false;
        _this_Spot.zoomwithmap = false;
        _this_Spot.zoombaselevel = 10;
        _this_Spot.needupdate = false;
        var m = null,
            l = 0,
            r = null,
            q = null,
            u = null,
            _marker = null,
            _markerOpean = null,
            m = a;
        _this_Spot.xmlobject = m;
        _this_Spot.update = function (a) {
            void 0 === a && (a = 0);
            _this_Spot.needupdate = true;
            l |= a;
            T = true
        };
        _this_Spot.processupdate = function () {
            if (null != m) {
                if (2 == (l & 2)) {
                    var a = false;
                    if (_google_map) {
                        var e = !isNaN(_this_Spot.lat) && !isNaN(_this_Spot.lng),
                            f = e ? new google.maps.LatLng(_this_Spot.lat, _this_Spot.lng) : new google.maps.LatLng(0, 0);
                        null == _marker && e ?
                            (a = initSpotStyle(), a = _this_Spot.active ?
                             a.activeurl_bitmapdata :
                             a.url_bitmapdata,
                             _marker = null,
                             _markerOpean = initSPOT(a),
                             _markerOpean.position = f,
                             _marker = new google.maps.Marker(_markerOpean),
                             _this_Spot.zoomwithmap &&
                             (Math.pow(2, map_zoom), Math.pow(2, _this_Spot.zoombaselevel)),
                             google.maps.event.addListener(_marker, "click", mouseClickMarker),
                             google.maps.event.addListener(_marker, "mouseover", mouseOverMarker),
                             google.maps.event.addListener(_marker, "mouseout", mouseOutMarker),
                             a = true) : _marker && e &&
                             (_marker.setPosition(f), a = true)
                    }
                    a && (l &= -3)
                }
                1 == (l & 1) && _this_Spot.updateimage() && (l &= -2);
                0 == l && (_this_Spot.needupdate = false)
            }
        };
        _this_Spot.updateimage = function () {
            if ("" == _this_Spot.url || "null" == _this_Spot.url) _this_Spot.url = null;
            if (_this_Spot.url) _this_Spot.url != r && (r = _this_Spot.url, loadPics(_this_Spot.url, function (a) {
                initSPOT(a)
            }));
            else {
                r = null;
                var a = initSpotStyle();
                a && (a = _this_Spot.active ? a.activeurl_bitmapdata : a.url_bitmapdata, q != a && initSPOT(a))
            }
            return true
        };
        _this_Spot.scalespot = function (a) {
            initSPOT(q, a)
        };
        _this_Spot.try_dom_access = function () {
            if (_marker)
                if (_marker._krpimg) {
                    var a = initSpotStyle();
                    initSPOT(_this_Spot.active ? a.activeurl_bitmapdata : a.url_bitmapdata);
                    _this_Spot.needdom = false
                } else T = _this_Spot.needdom = true
        };
        // 销毁
        _this_Spot.destroy = function () {
            _marker && _google_map && _marker.setMap(null);
            q = m = _markerOpean = _marker = null
        };
        m.event_out = mouseOutMarker;
        (function () {
            a.registerattribute("spotstyle", _this_Spot.spotstyle, function (a) {
                if (null == a || "" == a) a = "default";
                _this_Spot.spotstyle = String(a).toLowerCase();
                _this_Spot.update(1)
            }, function () {
                return _this_Spot.spotstyle
            });
            a.registerattribute("url", _this_Spot.url, function (a) {
                a != _this_Spot.url && (_this_Spot.url = String(a), _this_Spot.update(1))
            }, function () {
                return _this_Spot.url
            });
            a.registerattribute("lat", _this_Spot.lat, function (a) {
                _this_Spot.lat = Number(a);
                _this_Spot.update(2)
            }, function () {
                return _this_Spot.lat
            });
            a.registerattribute("lng", _this_Spot.lng, function (a) {
                _this_Spot.lng = Number(a);
                _this_Spot.update(2)
            },
                function () {
                    return _this_Spot.lng
                });
            a.registerattribute("heading", _this_Spot.heading, function (a) {
                _this_Spot.heading = Number(a)
            }, function () {
                return _this_Spot.heading
            });
            a.registerattribute("active", _this_Spot.active, function (a) {
                _this_Spot.active = getBoolean(a);
                _this_Spot.update(1)
            }, function () {
                return _this_Spot.active
            });
            a.registerattribute("zoomwithmap", _this_Spot.zoomwithmap, function (a) {
                _this_Spot.zoomwithmap = getBoolean(a);
                _this_Spot.update(2)
            }, function () {
                return _this_Spot.zoomwithmap
            });
            a.registerattribute("zoombaselevel", _this_Spot.zoombaselevel, function (a) {
                _this_Spot.zoombaselevel = Number(a);
                _this_Spot.update(2)
            }, function () {
                return _this_Spot.zoombaselevel
            });
            a.registerattribute("onover",
                null);
            a.registerattribute("onhover", null);
            a.registerattribute("onout", null);
            a.registerattribute("onclick", null);
            a.activatespot = function () {
                activateSpot(m.name)
            };
            a.pantospot = function () {
                panTospot(m.name)
            }
        })()
    }
    var _krpanointerface = null,
        _pluginobject = null,
        _pluginpath = null,
        _krpanointerface_device = null,
        _timers = null,
        _krpanointerface_device_pixelratio = 1,
        _krpano_gmap_cb_var = null,
        _map_div = null,                // 放置地图的DIV容器
        _google_map = null,             // 谷歌地图对象
        ha = false,
        aa = 0,
        T = false,
        L = false,
        w = false,
        D = false,
        J = 0,
        K = 0,
        viewRadarOBJ = null,
        C = null,
        mapTYPE, mapTypeString, map_lat, map_lng, map_zoom, map_tilt, map_heading, map_controls, map_poi, map_mapsapi;
    this.registerplugin = function (krpanointerface, pluginpath, pluginobject) {
        _krpanointerface = krpanointerface;
        _pluginobject = pluginobject;
        _pluginpath = pluginpath;
        if ("1.18" > _krpanointerface.version || 0 == _krpanointerface.hasOwnProperty("haveLicense"))
            { _krpanointerface.trace(3, "Googlemaps Plugin - too old krpano version, min. version is 1.18!"); }
        else if (_krpanointerface_device = _krpanointerface.device,
        _krpanointerface_device.androidstock && (_krpanointerface_device_pixelratio = _krpanointerface_device.pixelratio),
        _pluginobject.registerattribute("key", null),
        _pluginobject.registerattribute("maptype", "satellite", function (a) {
                setMaptype(a)
        }, function () {
                return mapTYPE
        }), _pluginobject.registerattribute("maptypes", "normal|satellite|hybrid|terrain", function (a) {
                mapTypeString = String(a)
        }, function () {
                return mapTypeString
        }), _pluginobject.registerattribute("lat", 0, function (a) {
                map_lat = Number(a);
                updateMaps(1)
        }, function () {
                return map_lat
        }), _pluginobject.registerattribute("lng", 0, function (a) {
                map_lng = Number(a);
                updateMaps(1)
        }, function () {
                return map_lng
        }), _pluginobject.registerattribute("zoom", 1, function (a) {
                map_zoom = Number(a);
                updateMaps(2)
        },function () {
                return map_zoom
        }), _pluginobject.registerattribute("tilt", 0, function (a) {
                map_tilt = Number(a);
                setTiltHeading()
        }, function () {
                return map_tilt
        }), _pluginobject.registerattribute("heading", 0, function (a) {
                map_heading = Number(a);
                setTiltHeading()
        }, function () {
                return map_heading
        }), _pluginobject.registerattribute("controls", "zoom|maptype", function (a) {
                map_controls = a;
                _google_map && _google_map.setOptions(mapParameters({}))
        }, function () {
                return map_controls
        }), _pluginobject.registerattribute("poi", false, function (a) {
                map_poi = getBoolean(a);
                _google_map && _google_map.setOptions(mapParameters({}))
        }, function () {
                return map_poi
        }), _pluginobject.registerattribute("mapsapi", ""),
            _pluginobject.registerattribute("activespotenabled", false, function (a) {
                map_mapsapi = getBoolean(a)
        }, function () {
                return map_mapsapi
        }),
            _pluginobject.registerattribute("bgcolor", 0),
            _pluginobject.registerattribute("bgalpha", 0),
            _pluginobject.registerattribute("onmapready", null),
            _pluginobject.registerattribute("onmapmoved", null),
            _pluginobject.registerattribute("onmapzoomed", null),
            _pluginobject.registerattribute("onmaptypechanged", null),
            _pluginobject.setzoom = setZoom,
            _pluginobject.setcenter = setCenter,
            _pluginobject.setmaptype = setMaptype,
            _pluginobject.addspot = addSpot,
            _pluginobject.addstylespot = addStylespot,
            _pluginobject.addimagespot = addImagespot,
            _pluginobject.removespot = removeSpot,
            _pluginobject.removeallspots = removeAllspots,
            _pluginobject.activatespot = activateSpot,
            _pluginobject.addspotstyle = addSpotstyle,
            _pluginobject.panto = panTo,
            _pluginobject.pantospot = panTospot,
            _pluginobject.panby = panBy,
            _pluginobject.flyto = flyTo,
            _pluginobject.flytospot = flyTospot,
            _pluginobject.cancelflyto = cancelFlyto,
            _pluginobject.zoomin = zoomIn,
            _pluginobject.zoomout = zoomOut,
            _pluginobject.zoomtospotsextent = zoomTospotsextent,
            _pluginobject.resetspots = removeAllspots,
            _pluginobject.updatespots = updateSpots,
            _pluginobject.updatecontrols = function () { },
            createSpotsStyle(),
            createSpots(),
            0 == _krpanointerface.haveLicense("maps") && setTimeout(showDemoText, 100),
            _pluginobject.registercontentsize(400, 300),
            window.google && window.google.maps)
            setTimeout(initGoogleMap, 10);
        else if (window._krpano_gmap_loadedcallbacks_) window._krpano_gmap_loadedcallbacks_.push(initGoogleMap);
        else {
            window._krpano_gmap_loadedcallbacks_ = [];
            _krpano_gmap_cb_var = "_krpano_gmap_cb_";
            for (krpanointerface = 0; 16 > krpanointerface; krpanointerface++)
                _krpano_gmap_cb_var += String.fromCharCode(65 + 32 * Math.round(Math.random()) + Math.floor(25 * Math.random()));
            window[_krpano_gmap_cb_var] = initGoogleMap;
            (krpanointerface = _pluginobject.mapsapi) && "" != krpanointerface || (krpanointerface = 0 ==
                ("" + window.location.href).toLowerCase().indexOf("https:") ? "https://maps.google.cn" : "http://maps.google.cn");
            pluginpath = "";
            _pluginobject.key && (pluginpath = "&key=" + _pluginobject.key);
            pluginobject = "";
            _pluginobject.language && (pluginobject = "&language=" + _pluginobject.language);
            var g = "";
            _pluginobject.region && (g = "&region=" + _pluginobject.region);
            var kss = document.createElement("script");
            kss.type = "text/javascript";
            kss.async = true;
            kss.src = krpanointerface + "/maps/api/js?v=3.23" + pluginpath + pluginobject + g + "&callback=" + _krpano_gmap_cb_var;
            document.body.appendChild(kss)
        }
    };
    // 卸载插件
    this.unloadplugin = function () {
        null != _timers && (clearInterval(_timers), _timers = null);
        _krpanointerface_device = _krpanointerface = _pluginobject = null
    };
    // 窗口改变
    this.onresize = function (a, d) {
        _google_map && (_pluginobject.sprite &&
            (_map_div.style.width = _pluginobject.sprite.style.width,
             _map_div.style.height = _pluginobject.sprite.style.height),
             0 == w &&
             (w = true, J = map_lat,
              K = map_lng),
             google.maps.event.trigger(_google_map, "resize"));
        return true
    };
    // 视图可见改变
    this.onvisibilitychanged = function (a) {
        return _google_map ? (1 == a ? (_pluginobject.poschanged = true,
                              _pluginobject.sprite.style.display = "",
                              _pluginobject.sprite.appendChild(_map_div),
                              _map_div.style.left = "0",
                              _map_div.style.pointerEvents = "auto",
                              0 == w && (w = true, J = map_lat, K = map_lng),
                              google.maps.event.trigger(_google_map, "resize")) :
                              (_pluginobject.sprite.style.display = "none",
                              _map_div.style.left = "-10000px", _map_div.style.pointerEvents = "none",
                              _krpanointerface.display.viewerlayer.appendChild(_map_div)), true) : false
    };
    var S = [0, 0],
        // 其他点
        otherPoint = {
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
        }
};