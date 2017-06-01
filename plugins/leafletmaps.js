/*
    krpano 1.19-pr7 Bing Maps Plugin (build 2016-09-09)
    http://krpano.com/plugins/bingmaps/
*/
var krpanoplugin = function () {
    // 激活点 激活的点是否可接收鼠标事件 也就是说是否能有鼠标点击或悬停？
    function activeSpotEnabled(a) {
        //pass
        return "boolean" == typeof a ? a : 0 <= "yesontrue1".indexOf(String(a).toLowerCase())
    }
    // 设置RGB颜色
    function setRGB(color) {
        //pass
        return "rgb(" + (color >> 16 & 255) + "," + (color >> 8 & 255) + "," + (color & 255) + ")"
    }
    // 设置视野范围标记SVG
    function setViewRadarSVG(dwidth, dheight) {
        var svgNode = document.createElementNS("http://www.w3.org/2000/svg", "svg");
        svgNode.setAttribute("width", dwidth);
        svgNode.setAttribute("height", dheight);
        svgNode.style.position = "absolute";
        svgNode.style.left = -dwidth / 2 + "px";
        svgNode.style.top = -dheight / 2 + "px";
        svgNode.style.zIndex = 999;

        var pathNode = document.createElementNS("http://www.w3.org/2000/svg", "path");
        pathNode.style.pointerEvents = "visiblePainted";
        pathNode.style.cursor = "pointer";
        pathNode.setAttribute("stroke", "rgba(255,0,0,1.0)");
        pathNode.setAttribute("stroke-width", 2);
        pathNode.setAttribute("fill", "rgba(0,255,0,0.5)");
        svgNode.appendChild(pathNode);
        
        var svgOBJ = {};
        svgOBJ.svg = svgNode;
        svgOBJ.path = pathNode;
        svgOBJ.centerx = dwidth / 2;
        svgOBJ.centery = dheight / 2;
        var unknow_flag_e = -1;
        svgOBJ.hide = function () {
            0 != unknow_flag_e && (unknow_flag_e = 0, svgNode.style.display = "none")
        };
        svgOBJ.show = function () {
            1 != unknow_flag_e && (unknow_flag_e = 1, svgNode.style.display = "")
        };
        // 圆点X 圆点Y 半径 边线角度1 边线角度2
        svgOBJ.drawpie = function (centorxx, centoryy, rradius, edge1, edge2) {
            var h, u;
            edge1 > edge2 && (h = edge2, edge2 = edge1, edge1 = h);
            edge1 = edge1 * Math.PI / 180;
            edge2 = edge2 * Math.PI / 180;
            u = edge2 - edge1;
            h = (edge1 + edge2) / 2;
            var k = u > Math.PI ? 1 : 0;
            u >= 2 * Math.PI && (u = 2 * Math.PI - .01);
            edge1 = h - u / 2;
            edge2 = h + u / 2;
            h = centorxx + rradius * Math.sin(edge1);
            edge1 = centoryy - rradius * Math.cos(edge1);
            u = centorxx + rradius * Math.sin(edge2);
            edge2 = centoryy - rradius * Math.cos(edge2);
            pathNode.setAttribute("d", "M " + centorxx + "," + centoryy + " L " + h + "," + edge1 + " A " + rradius + "," + rradius + " 0 " + k + " 1 " + u + "," + edge2 + " Z");
            
        };
        return svgOBJ;
    }
    // 显示DEMO标记
    function showDemoText() {
        //pass
        //debugger;
        // var a = document.createElement("div");
        // a.style.position = "absolute";
        // a.style.left = "50%";
        // a.style.top = "50%";
        // a.style.width = "100%";
        // a.style.zIndex = 999998;
        // a.style.color = "#FFFFFF";
        // a.style.opacity = .67;
        // a.style.fontSize = _krpanointerface.isphone ? "10px" : "16px";
        // a.style["-webkit-text-size-adjust"] = "none";
        // a.style.display = "block";
        // a.style.cursor = "none";
        // a.style.pointerEvents = "none";
        // var c = document.createElement("div");
        // c.style.position = "relative";
        // c.style.left = "-50%";
        // c.style.top = _krpanointerface.isphone ? "-64px" : "-46px";
        // c.style.fontFamily = "sans-serif";
        // c.style.textShadow = "#000000 1px 1px 2px";
        // c.innerHTML = "<center><i><b>krpano Bing Maps Plugin<br/>DEMO MODE</b></i></center>";
        // a.appendChild(c);

        // _pluginobject_xml &&
        // _pluginobject_xml.sprite &&
        // _pluginobject_xml.sprite.appendChild(a)
    }
    // 创建图片要素
    // url: 图片地址
    // func: 图片加载回调函数    
    function createImgElement(url, funccallback) {
        //pass
        debugger;
        var b = document.createElement("img");
        b.addEventListener("error", function () {
            _krpanointerface && _pluginobject_xml &&
            _krpanointerface.trace(3, _pluginobject_xml._type + "[" + _pluginobject_xml.name + "] loading error: " + url)
        }, true);
        b.addEventListener("load", function () {
                _krpanointerface && _pluginobject_xml && funccallback(b)
            }, false);
        b.src = _krpanointerface.parsePath(url)
    }
    // 重新加载必应地图 其实就是做一个回调加载地图
    function reinitBingMap() {
        //pass
        // 这里删掉变量值 可以删掉
        if (null != _krpano_bmap_cb_var ) {
            window[_krpano_bmap_cb_var] = null;
            delete window[_krpano_bmap_cb_var];
            _krpano_bmap_cb_var = null;
        }
        if (_krpanointerface && _pluginobject_xml)
            setTimeout(initBingMap, 10);
    }
    // 设置背景色
    function setBGColor() {
        //pass
        if (_pluginobject_xml) {
            var bcolor = Number(_pluginobject_xml.bgcolor);
            var trans = Number(_pluginobject_xml.bgalpha);
            _document_div &&
            _document_div.childNodes &&
            _document_div.childNodes[0] &&
            _document_div.childNodes[0].style &&
            (_document_div.childNodes[0].style.backgroundColor = 
            "rgba(" + (bcolor >> 16 & 255) + "," + (bcolor >> 8 & 255) + "," + (bcolor & 255) + "," + trans + ")")
        }
    }
    // 初始化必应地图
    function initBingMap() {
        debugger;
        // 不知道
        var map_callbacks = window._krpano_bmap_loadedcallbacks_;
        if (map_callbacks) {
            window._krpano_bmap_loadedcallbacks_ = null;
            delete window._krpano_bmap_loadedcallbacks_;
            var bingmap_key;
            if (0 < map_callbacks.length && 99 > map_callbacks.length)
                for (bingmap_key = 0; bingmap_key < map_callbacks.length; bingmap_key++)
                    setTimeout(map_callbacks[bingmap_key], 10 + 5 * bingmap_key)
        }
        // 
        if (_krpanointerface && _pluginobject_xml) {
            _pluginobject_xml._use_css_scale = false;
            _pluginobject_xml.poschanged = true;
            _pluginobject_xml.updatepos();
            // 地图的宽度和高度
            var mapwidth = Math.floor(_pluginobject_xml.pixelwidth * _krpanointerface.stagescale);
            var mapheight = Math.floor(_pluginobject_xml.pixelheight * _krpanointerface.stagescale);
            bingmap_key = _pluginobject_xml.key;
            // 域名
            var doc_domain = document.domain;
            0 == doc_domain.indexOf("www.") && (doc_domain = doc_domain.slice(4));
            // KEY含有"|"
            if (null != bingmap_key && 0 < bingmap_key.indexOf("|")) {
                var u = bingmap_key.split("|");
                bingmap_key = null;
                var e = u.length;
                if (2 <= e) {
                    if (null == doc_domain || "" == doc_domain) doc_domain = "local";
                    for (var q = 0; q < e; q += 2) {
                        var g = String(u[q]).toLowerCase(),
                          l = u[q + 1];
                        if (g == doc_domain) {
                            bingmap_key = l;
                            break
                        }
                    }
                }
            }
            // KEY为TEST
            "TEST" == bingmap_key ?
                (_redarwmap_bool = true, bingmap_key = null) :
                "" != bingmap_key && null != bingmap_key ||
                _krpanointerface.trace(2, "bingmaps plugin - no API key!");
            debugger;
            // 地图参数
            var parameters = {
                // credentials: bingmap_key,               // 地图KEY
                // mapTypeId: roadaerial(_mapTypeString),  // 地图类型
                // labelOverlay: showMAPS(_mapTypeString), // 显示或隐藏地图
                // center: L.latLng(_pluginobject_xml.lat, _pluginobject_xml.lng),  // 地图中心点
                // zoom: _map_zoom,                // 缩放等级
                // enableSearchLogo: false,
                // enableClickableLogo: false,
                // showMapTypeSelector: false,
                // showDashboard: false,
                // showScalebar: false,
                // disableKeyboardInput: true,
                // fixedMapPosition: true,
                // width: mapwidth,
                // height: mapheight
            };
            // 创建地图
            debugger;
            var center = new L.latLng(_pluginobject_xml.lat, _pluginobject_xml.lng);  // 地图中心点
            var zoom = _map_zoom;	// 缩放等级
            _document_div_maps = new L.map(_document_div).setView(center, _map_zoom);

            // L.tileLayer('http://mt1.google.cn/vt/lyrs=s&hl=en&x={x}&y={y}&z={z}', {
            //     maxZoom: 22
            // }).addTo(_document_div_maps);

            

            setBGColor();
            
            // 删除地图控件里的按钮
            _document_div &&
            _document_div.childNodes &&
            _document_div.childNodes[0] &&
            _document_div.childNodes[0].childNodes &&
            _document_div.childNodes[0].childNodes[0] &&
            "BUTTON" == _document_div.childNodes[0].childNodes[0].nodeName &&
            _document_div.childNodes[0].removeChild(_document_div.childNodes[0].childNodes[0]);
            
            // 添加鼠标滚轮事件
            // Microsoft.Maps.Events.addHandler(_document_div_maps, "mousewheel", mousewheelEvents);
            // _document_div.addEventListener("gesturestart", ba, false);      // 当有两根或多根手指放到屏幕上的时候触发
            // _document_div.addEventListener("gesturechange", ba, false);     // 当有两根或多根手指在屏幕上，并且有手指移动的时候触发
            // _document_div.addEventListener("gestureend", ba, false);        // 当倒数第二根手指提起的时候触发，结束gesture
            null == _timers && (_timers = setInterval(redrawMAP, 1E3 / 60));    // 周期执行刷新地图 单位毫秒 每秒60帧

            // 
            _viewRadarOBJECT = new viewRadarClass;
            updateSpots();      // 刷新每一个点
            scaleSpotArray();   // 缩放到所有点
            initMapView();      // 初始化地图控件XML

            _has_init = true;
            _krpanointerface.call(_pluginobject_xml.onmapready, _pluginobject_xml);                 // 调用地图载入完成事件
            //Microsoft.Maps.Events.addHandler(_document_div_maps, "imagerychanged", changeMaps);     // 切换地图事件
            //Microsoft.Maps.Events.addHandler(_document_div_maps, "viewchange", updateEnve)          // 地图范围刷新事件

            _document_div_maps.on('move', updateEnve);
            

        }
    }
    // 停止阻 止事件继续传递
    function stopActions(ev) {
        //pass
        if (ev != null) {
            // ev.preventDefault();
            // ev.stopPropagation();

            L.DomEvent.stop(ev);
        }
    }
    // 鼠标滚动
    function mousewheelEvents(ev) {
        //pass
        if (ev) {
            if (_krpanointerface && _krpanointerface.control) {
                if (true === _krpanointerface.control.disablewheel) {
                    ev.handled = true;
                } else {
                    if (ev.originalEvent) {
                        // ev.originalEvent.preventDefault();
                        // ev.originalEvent.stopPropagation();

                        L.DomEvent.stop(ev.originalEvent);
                    }
                }
            }
        }
    }
    // 切换地图
    function changeMaps() {
        debugger;
        // // 获取新地图参数 > 切换地图 > 调用xml绑定的切换地图事件
        // if (_document_div_maps) {
        //     var map_options = _document_div_maps.getOptions(),
        //       map_img_id = _document_div_maps.getImageryId(),
        //       map_type_string = "satellite";

        //     "Road" == map_img_id ?
        //     map_type_string = "normal" :
        //     "Aerial" == map_img_id &&
        //     (map_type_string = 1 == map_options.labelOverlay ?
        //     "satellite" : "hybrid");

        //     if (map_type_string != _mapTypeString) {
        //         _mapTypeString = map_type_string;
        //         if (_mapTypeChangeOBJ) _mapTypeChangeOBJ.onMapTypeChanged(_mapTypeString);
        //         _krpanointerface.call(_pluginobject_xml.onmaptypechanged, _pluginobject_xml)
        //     }
        // }
    }
    // 地图的位置或比例发生变化的时候 通知插件
    function updateEnve() {
        if (_document_div_maps) {
            // 通知插件地图已经移动
            var center = _document_div_maps.getCenter();
            if (_map_lat != center.latitude || _map_lng != center.longitude) {
                _map_lat = center.latitude;
                _map_lng = center.longitude;
                _krpanointerface.call(_pluginobject_xml.onmapmoved, _pluginobject_xml);
            }
            // 通知插件地图比例已经更新
            var zoom = _document_div_maps.getZoom();
            if (_map_zoom != zoom) {
                if(_viewRadarOBJECT) {
                    _viewRadarOBJECT.needredraw = true;
                    _map_zoom = zoom;
                    _krpanointerface.call(_pluginobject_xml.onmapzoomed, _pluginobject_xml);
                    _viewRadarOBJECT.updatehandler();
                    scaleSpotArray();
                }
            }
        }
    }
    // 缩放到点集合范围
    function scaleSpotArray() {
        //debugger;
        var a = _pluginobject_xml.spot.getArray();
        var c = null;
        for (var ii = 0; ii < a.length; ii++) {
            if(a[ii]) {
                c = a[ii].internalObject;
                if (c != null && c.zoomwithmap) {
                    c.scalespot(Math.pow(2, _map_zoom) / Math.pow(2, c.zoombaselevel));
                }
            }
        }
    }
    // 地图重绘 不停的被调用
    function redrawMAP(a) {
        //debugger;
        // 是否需要重绘地图
        _redarwmap_bool &&
        (a = _document_div) &&
        (a = a.firstChild) &&
        (a = a.lastChild) &&
        (a = a.lastChild) &&
        0 < ("" + a.textContent).indexOf("invalid") &&
        (a.style.display = "none", _redarwmap_bool = false);

        if (_has_init) {
            // 刷新控件
            if (_redraw_mapcontrol) updateMapControls();

            // 刷新点
            if (_spot_need_redraw) {
                _spot_need_redraw = false;
                var spotlist = _pluginobject_xml.spot.getArray();
                for (var ii = 0; ii < spotlist.length; ii++) {
                    var ooo = spotlist[ii].internalObject;
                    if (ooo.needdom) ooo.try_dom_access();
                    if (ooo.needupdate) ooo.processupdate();
                }
            }

            // 刷新雷达图
            if (_viewRadarOBJECT) _viewRadarOBJECT.updatehandler();
            // 刷新图钉 当鼠标悬停在未激活的点上的时候 交给回掉函数重绘图钉
            if (_pushpinOBJ) {
                if (0 == ((_krpanointerface.display.frame | 0) & 1)) {
                var pinonhover = _pushpinOBJ.onhover;
                if (null != pinonhover && "" != pinonhover)
                    _krpanointerface.call(pinonhover, _pushpinOBJ);
                }
            }
        }
    }
    // 初始化地图控件
    function initMapView() {
        debugger;
        // 不好理解 这里的object从哪来
        _pluginobject_xml.createobject("positioncontrol");
        _pluginobject_xml.createobject("zoomcontrol");
        _maptypecontrol = _pluginobject_xml.createobject("maptypecontrol");
        _pluginobject_xml.createobject("navigationcontrol");
        _pluginobject_xml.createobject("overviewmapcontrol");

        _maptypecontrol.registerattribute("visible", false, function (a) {
            _maptypecontrol._visible = activeSpotEnabled(a);
            _redraw_mapcontrol = true
        }, function () {
            return _maptypecontrol._visible
        });
        _maptypecontrol.registerattribute("align", "rightbottom", function (a) {
            _maptypecontrol._align = String(a).toLowerCase();
            _redraw_mapcontrol = true
        }, function () {
            return _maptypecontrol._align
        });
        _maptypecontrol.registerattribute("anchor", _maptypecontrol._align, function (a) {
            _maptypecontrol._align = String(a).toLowerCase();
            _redraw_mapcontrol = true
        }, function () {
            return _maptypecontrol._align
        });
        _maptypecontrol.registerattribute("x", 2, function (a) {
            a = Number(a);
            _maptypecontrol._x = isNaN(a) ? 2 : a;
            _redraw_mapcontrol = true
        }, function () {
            return _maptypecontrol._x
        });
        _maptypecontrol.registerattribute("y", 2, function (a) {
            a = Number(a);
            _maptypecontrol._y = isNaN(a) ? 2 : a;
            _redraw_mapcontrol = true
        }, function () {
            return _maptypecontrol._y
        });
        updateMapControls()
    }
    // 刷新地图控件
    function updateMapControls() {
        //pass
        // if (_has_init) {
        //     var a = _document_div;
        //     // 其实就是加上一个 地图切换的控件 没有太大的作用
        //     if (_maptypecontrol._visible) {
        //         if (null == _mapTypeChangeOBJ) {
        //             _mapTypeChangeOBJ = new mapTypeChangeClass(_maptypecontrol);
        //             a.appendChild(_mapTypeChangeOBJ.dom);
        //         }
        //         _mapTypeChangeOBJ.setControlPosition(_maptypecontrol._align, Number(_maptypecontrol._x), Number(_maptypecontrol._y));
        //     }
        //     else {
        //         if (null != _mapTypeChangeOBJ) {
        //             a.removeChild(_mapTypeChangeOBJ.dom);
        //             _mapTypeChangeOBJ = null
        //         }
        //     }

        //     _redraw_mapcontrol = false
        // }
    }
    // 创建点样式集合
    function createSpotsStyle() {
        //pass
        _pluginobject_xml.createarray("spotstyle");         // 在XML里创建点样式
        _pluginobject_xml.spotstyle.createItem("default");  // 样式中创建一个Item
        var a = _pluginobject_xml.spotstyle.getArray();     // XML里读取所有样式
        for (var ii = 0; ii < a.length; ii++) {
            var c = a[ii];                                  // 第ii个样式
            c.internalObject = new mapSpotClass(c);         // 给第ii个样式赋值
        }
    }
    // 创建点集合
    function createSpots() {
        //pass
        _pluginobject_xml.createarray("spot");              // XML里创建一个新点SPOT
        var spotlist = _pluginobject_xml.spot.getArray();   // 读取XML里所有的点
        for (var ii = 0; ii < spotlist.length; ii++) {
            var c = spotlist[ii];                        	// 第ii个点
            c.internalObject = new spotClass(c);            // 重新生成该点
        }
    }
    // addspotstyle(name, url, overurl, activeurl, edge, x, y)
    // 增加一个新的spotstyle。
    // name = 新的样式的名字。
    // url = 默认图像的路径。 (可选)
    // overurl = 鼠标悬停时图像的路径。 (可选)
    // activeurl = 激活图像的路径。 (可选)
    // edge = 点图像的对齐点。 (可选)
    // x / y = 从对齐点的偏移值。 (可选)
    function addSpotstyle() {
        //pass
        var args = arguments;
        if (1 <= args.length) {
            var c = String(args[0]).toLowerCase();
            var c = _pluginobject_xml.spotstyle.createItem(c);

            1 < args.length && (c.url = args[1]);
            2 < args.length && (c.overurl = args[2]);
            3 < args.length && (c.activeurl = args[3]);
            4 < args.length && (c.edge = args[4]);
            5 < args.length && (c.x = args[5]);
            6 < args.length && (c.y = args[6]);
            7 < args.length && (c.shadow = args[7]);

            c.internalObject = new mapSpotClass(c);
        } else _krpanointerface.trace(3, "bingmaps plugin - addspotstyle() syntax error!")
    }
    // addspot(name, lat, lng, heading, active, onclick, onhover, onover, onout)
    // 增加一个新的点 (按照默认的样式).
    // name = 新的点的名字。
    // lat / lng = 点的地理坐标。
    // heading = 对应点的全景方向。
    // active = 是否激活点？ (可选)
    // onclick, onhover, onover, onout = 对应点的鼠标事件。 (可选)
    function addSpot() {
        // pass
        var a = arguments;
        if (3 <= a.length) {
            var c = String(a[0]).toLowerCase();
            var b = _pluginobject_xml.spot.getItem(c);

            null != b && removeSpot(c);
            b = _pluginobject_xml.spot.createItem(c);
            b.lat = a[1];
            b.lng = a[2];
            3 < a.length && (b.heading = a[3]);
            4 < a.length && (b.active = a[4]);
            5 < a.length && (b.onclick = a[5]);
            6 < a.length && (b.onhover = a[6]);
            7 < a.length && (b.onover = a[7]);
            8 < a.length && (b.onout = a[8]);
            
            var f = new spotClass(b);
            f.update();
            b.internalObject = f;
            f.active && activateSpot(c);
        } else _krpanointerface.trace(3, "bingmaps plugin - addspot() syntax error!")
    }
    // addstylespot(name, lat, lng, heading, style, active, onclick, onhover, onover, onout)
    // 以自定义的样式增加一个新的点。.
    // name = 新的点的名字。
    // lat / lng = 点的地理坐标。
    // heading = 对应点的全景方向。
    // style = 对应点的spotstyle。
    // active = 是否激活点？ (可选)
    // onclick, onhover, onover, onout = 对应点的鼠标事件。 (可选)
    function addStylespot() {
        //pass
        var a = arguments;
        if (5 <= a.length) {
            var c = String(a[0]).toLowerCase();
            var b = _pluginobject_xml.spot.getItem(c);

            null != b && removeSpot(c);
            b = _pluginobject_xml.spot.createItem(c);
            b.lat = a[1];
            b.lng = a[2];
            b.heading = a[3];
            b.spotstyle = a[4];
            5 < a.length && (b.active = a[5]);
            6 < a.length && (b.onclick = a[6]);
            7 < a.length && (b.onhover = a[7]);
            8 < a.length && (b.onover = a[8]);
            9 < a.length && (b.onout = a[9]);

            var f = new spotClass(b);
            f.update();
            b.internalObject = f;
            f.active && activateSpot(c);
        } else _krpanointerface.trace(3, "bingmaps plugin - addstylespot() syntax error!")
    }
    // 以自定义的图像增加一个新的点。
    // addimagespot(name, lat, lng, heading, style, url, onclick, onhover, onover, onout)
    // name = 新的点的名字。
    // lat / lng = 点的地理坐标。
    // heading = 对应点的全景方向。
    // style = 对应点的spotstyle。
    // url = 对应点的图像路径。
    // onclick, onhover, onover, onout = 对应点的鼠标事件。 (可选)
    function addImagespot() {
        //pass
        var a = arguments;
        if (6 <= a.length) {
            var c = String(a[0]).toLowerCase();
            var b = _pluginobject_xml.spot.getItem(c);

            null != b && removeSpot(c);
            b = _pluginobject_xml.spot.createItem(c);
            b.lat = a[1];
            b.lng = a[2];
            b.heading = a[3];
            b.spotstyle = a[4];
            b.url = a[5];
            6 < a.length && (b.onclick = a[6]);
            7 < a.length && (b.onhover = a[7]);
            8 < a.length && (b.onover = a[8]);
            9 < a.length && (b.onout = a[9]);

            var f = new spotClass(b);
            f.update();
            b.internalObject = f;
        } else _krpanointerface.trace(3, "bingmaps plugin - addimagespot() syntax error!")
    }
    // removespot(name)
    // 移除指定的点。
    // name = 需要移除的点的名字。
    function removeSpot() {
        //pass
        var args = arguments;
        if (1 == args.length) {
            var args = String(args[0]).toLowerCase();

            var c = _pluginobject_xml.spot.getItem(args);
            if (c) {
                var b = c.internalObject;
                if (_viewRadarOBJECT && _viewRadarOBJECT.bmspot == b)
                     _viewRadarOBJECT.bmspot = null;
                if (b) b.destroy();
                c.internalObject = null;
                _pluginobject_xml.spot.removeItem(args);
            }
            else _krpanointerface.trace(3, "bingmaps plugin - removespot() - spot[" + args + "] not found!");

        } else _krpanointerface.trace(3, "bingmaps plugin - removespot() syntax error!")
    }
    // removeallspots()
    // 从地图上移除所有点。
    function removeAllspots() {
        //pass
        var spotlist = _pluginobject_xml.spot.getArray();

        for (var ii = 0; ii < spotlist.length; ii++) {
            var c = spotlist[ii];
            var b = c.internalObject;
            if (b) b.destroy();
            c.internalObject = null;
        }
        _pluginobject_xml.spot.count = 0;
        if (_viewRadarOBJECT) _viewRadarOBJECT.bmspot = null;
    }
    // 更新点
    function updateSpots() {
        //pass
        var a = _pluginobject_xml.spot.getArray();  // XML里读取所有点
        var b = null;
        for (var ii = 0; ii < a.length; ii++) {
            var c = a[ii];
            c = c.internalObject;
            c.processupdate();
            if (c.active) (b = c);      // 该点是否是激活状态
        }
        // 如果有激活点 并且有雷达图
        if (b && _viewRadarOBJECT) {
            _viewRadarOBJECT.bmspot = b;
            _viewRadarOBJECT.update();
        }
    }
    // activatespot(name)
    // 按照指定的名字激活对应的点，激活当前点。
    // 这就是说点会显示为激活的样式图像（如果没有设置路径）同时会在点的位置上显示雷达。
    function activateSpot() {
        debugger;
        var args = arguments;
        if (1 == args.length) {
            var args = String(args[0]).toLowerCase();
            var spotlist = _pluginobject_xml.spot.getArray();
            var b = null;
            var f = null;
            var u = null;

            for (var ii = 0; ii < spotlist.length; ii++) {
                b = spotlist[ii];
                f = b.internalObject;

                if (String(b.name).toLowerCase() == args) {
                    if (0 == f.active) {f.active = true; f.update(1);}
                    u = f;
                } else {
                    if (0 != f.active) {f.active = false; f.update(1);}
                }
            }

            if (u) {
                if (0 == _bool_activeSpotEnabled && u.xmlobject == _pushpinOBJ) {
                    _pushpinOBJ.event_out(null);
                    _pushpinOBJ = null;
                }
                if (_viewRadarOBJECT) {
                    _viewRadarOBJECT.bmspot = u;
                    _viewRadarOBJECT.update();
                }
            }
        } else _krpanointerface.trace(3, "bingmaps plugin - activatespot() syntax error!")
    }
    // 地图并缩放到位置和等级
    function updateMaps() {
        //pass
        if (_document_div_maps) {
            var center = new L.latLng(_map_lat, _map_lng);
            _document_div_maps.setView(center, _map_zoom);
        }
    }
    // 显示路网或空中
    function roadaerial(a) {
        //pass
        // debugger;
        // return 1;
        // a = a.toLowerCase();
        // return "satellite" != a &&
        //        "normal" == a ?
        //        Microsoft.Maps.MapTypeId.road :
        //        Microsoft.Maps.MapTypeId.aerial
    }
    // 显示或隐藏地图
    function showMAPS(name) {
        // debugger;
        // name = name.toLowerCase();
        // return 1;
        // return "satellite" == name ||
        //        "normal" != name &&
        //        "hybrid" != name ?
        //        Microsoft.Maps.LabelOverlay.hidden :
        //        Microsoft.Maps.LabelOverlay.visible
    }
    // setmaptype(maptype)
    // 设置地图种类SETMAPTYPE
    function setMaptype() {
        // debugger;
        // return;
        // console.log('todo: setMaptype');
        // var a = arguments;
        // 1 == a.length ?
        //     (a = String(a[0]).toLowerCase(),
        //     "satellite" != a &&
        //     "normal" != a &&
        //     "hybrid" != a &&
        //     (a = "satellite"),
        //     _document_div_maps ?
        //     (_document_div_maps.setMapType(roadaerial(a)),
        //     _document_div_maps.setOptions({
        //         labelOverlay: showMAPS(a)
        //     }),
        //     setBGColor(),
        //     changeMaps()) :
        //     _mapTypeString = a) :
        //     _krpanointerface.trace(3, "bingmaps plugin - setmaptype() syntax error!")
    }
    // setzoom(zoom)
    // 对地图设置一个新的缩放级别。
    function setZoom() {
        //pass
        if (_document_div_maps) {
            var args = arguments;
            if (1 <= args.length) {
                var c = Number(args[0]);
                var b = false;

                1 < args.length && (b = activeSpotEnabled(args[1]));
                _map_zoom = c;
                var center = new L.latLng(_map_lat, _map_lng);

                _document_div_maps.setView({
                    animate: b,
                    center: center,
                    zoom: _map_zoom
                });
            } else _krpanointerface.trace(3, "bingmaps plugin - setzoom() syntax error!")
        }
    }
    // setcenter(lat,lng)
    // 对地图设置一个新的中心。
    // lat / lng = 地图中心坐标。
    function setCenter() {
        //pass
        if (_document_div_maps) {
            var args = arguments;
            if (3 == args.length) {
                var zoom = Number(args[2]);
                var center = new L.latLng(Number(args[0]), Number(args[1]));

                _document_div_maps.setView({
                    animate: false,
                    center: center,
                    zoom: zoom
                })
            } else _krpanointerface.trace(3, "bingmaps plugin - setcenter() syntax error!")
        }
    }
    // zoomin(lat, lng, center)
    // 以一个缩放级别进行地图放大。
    // 可用于自定义的控制。
    // lat / lng = 缩放到指定的坐标。 (可选)
    // zoom = 设置为true，将地图以对应的经纬度进行置中。(可选)
    function zoomIn() {
        //pass
        if (_document_div_maps) {
            var args = arguments;
            var center = null;
            if (2 <= args.length) {
                var lat = args[0];
                var lng = args[1];

                if (lat && lng)
                    center = new L.latLng(Number(lat), Number(lng));
            }
            2 < args.length && activeSpotEnabled(args[2]);
            3 < args.length && activeSpotEnabled(args[3]);
            var zoom = _map_zoom;
            23 > zoom && (zoom += 1);
            _map_zoom = zoom;

            if (center) {
                _map_lat = center.latitude;
                _map_lng = center.longitude;
            }

            center = new L.latLng(_map_lat, _map_lng);
            _document_div_maps.setView({
                animate: true,
                center: center,
                zoom: _map_zoom
            });
        }
    }
    // zoomout(lat, lng)
    // 以一个缩放级别进行地图缩小。
    // 可用于自定义的控制。
    // lat / lng = 缩放到指定的坐标。 (可选)
    function zoomOut() {
        //pass
        if (_document_div_maps) {
            var args = arguments;
            var center = null;
            if (2 <= args.length) {
                var lat = args[0];
                var lng = args[1];
                if (lat && lng) {
                    center = new L.latLng(Number(lat), Number(lng));
                }
            }

            2 < args.length && activeSpotEnabled(args[2]);

            var zoom = _map_zoom - 1;
            0 > zoom && (zoom = 0);
            _map_zoom = zoom;

            center && (_map_lat = center.latitude, _map_lng = center.longitude);
            center = new L.latLng(_map_lat, _map_lng);
            _document_div_maps.setView({
                animate: true,
                center: center,
                zoom: _map_zoom
            })
        }
    }
    // zoomtospotsextent()
    // 自动横移和缩放地图以展示全部点。
    function zoomTospotsextent() {
        //pass
        if (_document_div_maps) {
            var lng_min, lat_max, lat_min, lng_max, q;
            var spotlist = _pluginobject_xml.spot.getArray();
            var e = spotlist.length;

            if (e >= 1)
                if (1 == e) {
                    q = spotlist[0].internalObject;
                    setCenter(q.lat, q.lng, _map_zoom);
                }
                else {
                    q = spotlist[0].internalObject;

                    lat_min = lat_max = q.lat;
                    lng_min = lng_max = q.lng;

                    for (var ii = 1; ii < e; ii++) {
                        q = spotlist[ii].internalObject;
                        if (q.lat < lat_min) lat_min = q.lat;
                        if (q.lng < lng_min) lng_min = q.lng;
                        if (q.lat > lat_max) lat_max = q.lat;
                        if (q.lng > lng_max) lng_max = q.lng;
                    }
                    alert("缩放到范围");

                    // var locationRect = new Microsoft.Maps.LocationRect.fromCorners(new Microsoft.Maps.Location(lat1, lng1), new Microsoft.Maps.Location(lat2, lng2));
                    // _document_div_maps.setView({
                    //     animate: false,
                    //     bounds: locationRect
                    // });
                    updateEnve()
                }
        }
    }
    // pantospot(name)
    // 平移到指定点的坐标。
    // name = 点的名字。
    function panTospot() {
        //pass
        if (_document_div_maps) {
            var args = arguments;
            if (1 == args.length) {
                var c = String(args[0]);
                var pathstr = _pluginpath + ".spot[" + c + "]";

                if (_krpanointerface.get(pathstr)) {
                    var lat = Number(_krpanointerface.get(pathstr + ".lat"));
                    var lng = Number(_krpanointerface.get(pathstr + ".lng"));
                    if (lat && lng) {
                        center = new L.latLng(lat, lng);
                        _document_div_maps.setView({
                            animate: true,
                            center: center
                        });
                    }
                } else {
                    _krpanointerface.trace(3, "bingmaps plugin - pantospot() - spot[" + c + "] not found!");
                }
            } else _krpanointerface.trace(3, "bingmaps plugin - pantospot() syntax error!");
        }
    }
    // panto(lat,lng)
    // 平移到指定
    // lat / lng = 地图坐标。
    function panTo() {
        //pass
        if (_document_div_maps) {
            var args = arguments;
            if (2 == args.length) {
                var center = new L.latLng(Number(args[0]), Number(args[1]));
                _document_div_maps.setView({
                    animate: true,
                    center: center
                });
            } else _krpanointerface.trace(3, "bingmaps plugin - panto() syntax error!");
        }
    }
    // 取消飞行到
    function cancelFlyto() { }
    // 飞到点
    function flyTospot() {
        //pass
        if (_document_div_maps) {
            var args = arguments;
            if (1 <= args.length) {
                var pathstr = _pluginpath + ".spot[" + String(args[0]) + "].";
                var lat = Number(_krpanointerface.get(pathstr + "lat"));
                var lng = Number(_krpanointerface.get(pathstr + "lng"));

                if (lat && lng) {
                    var zoom = _document_div_maps.getZoom();
                    if (2 <= args.length) {zoom = Number(args[1]);}
                    var center = new L.latLng(lat, lng);
                    _document_div_maps.setView({
                        animate: true,
                        center: center,
                        zoom: zoom
                    });
                }
            } else _krpanointerface.trace(3, "bingmaps plugin - flytospot() syntax error!")
        }
    }
    // 飞到
    function flyTo() {
        //pass
        if (_document_div_maps) {
            var args = arguments;
            var unsuccess = true;

            if (2 <= args.length) {
                var lat = Number(args[0]);
                var lng = Number(args[1]);

                if (2 == args.length) {
                    var center = new L.latLng(lat, lng);
                    _document_div_maps.setView({
                        animate: true,
                        center: center
                    });
                    unsuccess = false;
                }
                else {
                    var zoom = Number(args[2]);
                    if (3 == args.length) {
                        var center = new L.latLng(lat, lng);
                        _document_div_maps.setView({
                            animate: true,
                            center: center,
                            zoom: zoom
                        });
                        unsuccess = false; 
                    } else {
                        if (6 <= args.length) {
                            if (6 == args.length) {
                                var center = new L.latLng(lat, lng);
                                 _document_div_maps.setView({
                                    animate: true,
                                    center: center,
                                    zoom: zoom
                                });
                                unsuccess = false;
                            }
                            else if (7 == args.length) {
                                var center = new L.latLng(lat, lng);
                                _document_div_maps.setView({
                                    animate: true,
                                    center: center,
                                    zoom: zoom
                                });
                                unsuccess = false;
                            }
                        }
                    }
                }
            }
            if (unsuccess) _krpanointerface.trace(3, "bingmaps plugin - flyto() syntax error!")
        }
    }
    // panby(dx,dy)
    // 平移地图。
    // dx / dy = 以像素为单位，平移的距离。
    function panBy() {
        //pass
        if (_document_div_maps) {
            var args = arguments;
            if (2 == args.length) {
                var dx = Number(args[0]);
                var dy = Number(args[1]);
                var point = _document_div_maps.tryLocationToPixel(new L.latLng(_map_lat, _map_lng));
                if (point) {
                    point.x += dx;
                    point.y += dy;
                    var center = _document_div_maps.tryPixelToLocation(point);
                    _document_div_maps.setView({
                        animate: true,
                        center: center,
                        zoom: _map_zoom
                    });
                }

            } else _krpanointerface.trace(3, "bingmaps plugin - panby() syntax error!")
        }
    }
    // 地图类型切换
    function mapTypeChangeClass(a) {
        
        // // 地图切换的3个按钮
        // function mapTypeButton(a) {
        //     var b = document.createElement("div");
        //     b.style.position = "absolute";
        //     b.style.width = p[0] + "px";
        //     b.style.height = p[1] + "px";
        //     b.style.fontFamily = "Arial";
        //     b.style.fontSize = p[2] + "px";
        //     b.style.fontWeight = "bold";
        //     g && (b.style[_pluginpath_backgroundsize] = p[0] + "px " + 3 * p[1] + "px");
        //     b.innerHTML = "<div style='vertical-align:middle;padding-top:" + p[3] + "px;'><center>" + a + "</center></div>";
        //     return b
        // }
        // // 地图切换按钮的边框
        // function mapTypeButtonStyle(a, b, c) {
        //     a.style.border =
        //       c ? "1px solid rgba(100,100,100,0.3)" : "1px solid #acafb8";
        //     a.style.color = c ? "#ffffff" : "#4f5459";
        //     a.style.textShadow = c ? "#4f5459 0px -1px 1px" : "#f2f3f5 0px 1px 1px";
        //     var f = _pluginpath_prefix;
        //     if ("Microsoft Internet Explorer" == navigator.appName || 0 <= navigator.userAgent.indexOf("MSIE ") || 0 <= navigator.userAgent.indexOf("Trident")) f = "ms";
        //     "" != f && (f = "-" + f + "-");
        //     a.style.backgroundImage = "webkit" == _pluginpath_prefix ? c ? "-webkit-gradient(linear, 0% 0%, 0% 100%, from(#b0b4ba), to(#6d7580))" : "-webkit-gradient(linear, 0% 0%, 0% 100%, from(#f3f4f5), to(#bdc0ca))" :
        //       "-ms-" == f ? c ? f + "linear-gradient(top, #b0b4ba, #6d7580)" : f + "linear-gradient(top, #f3f4f5, #bdc0ca)" : c ? f + "linear-gradient(to bottom, #b0b4ba, #6d7580)" : f + "linear-gradient(to bottom, #f3f4f5, #bdc0ca)";
        //     g && (a.style.backgroundPosition = "0px " + -(b - 1) * p[1] + "px")
        // }
        // // 鼠标抬起事件处理
        // function mouseupEventsMAP(ev) {
        //     if (ev != null) {
        //         ev.stopPropagation();
        //         ev.preventDefault();
        //         ev.stopImmediatePropagation();
        //     }
        // }
        // // 切换普通地图
        // function setMAP_normal(a) {
        //     a && (mouseupEventsMAP(a), setMaptype("normal"));
        //     mapTypeButtonStyle(m, 1, true);
        //     mapTypeButtonStyle(x, 2, false);
        //     mapTypeButtonStyle(r, 3, false)
        // }
        // // 切换街景图
        // function setMAP_satellite(a) {
        //     a && (mouseupEventsMAP(a), setMaptype("satellite"));
        //     mapTypeButtonStyle(m, 1, false);
        //     mapTypeButtonStyle(x, 2, true);
        //     mapTypeButtonStyle(r, 3, false)
        // }
        // // 切换混合地图
        // function setMAP_hybrid(a) {
        //     a && (mouseupEventsMAP(a), setMaptype("hybrid"));
        //     mapTypeButtonStyle(m, 1, false);
        //     mapTypeButtonStyle(x, 2, false);
        //     mapTypeButtonStyle(r, 3, true)
        // }
        // var g = "v" == String(a.buttonalign).toLowerCase(),
        //   l = Number(a.scale),
        //   n = String(a.buttontexts).split("|");
        // 3 != n.length && (n = ["Map", "Satellite", "Hybrid"]);
        // isNaN(l) && (l = 1);
        // _krpanointerface.ismobile && (l *= .5);
        // var l = l * _krpanointerface_device_pixelratio,
        //   z = document.createElement("div");
        // z.style.position = "absolute";
        // this.dom = z;
        // var m = null,
        //   x = null,
        //   r = null,
        //   p = [80 * l, 26 * l, 12 * l, 6 * l],
        //   t = [0, 0];
        // this.onMapTypeChanged = function (a) {
        //     "normal" == a ?
        //         setMAP_normal() :
        //         "satellite" == a ?
        //             setMAP_satellite() :
        //             "hybrid" == a &&
        //     setMAP_hybrid()
        // };
        // // 
        // this.setControlPosition = function (a, b, c) {
        //     var f = Math.floor(_pluginobject_xml.pixelwidth * _krpanointerface.stagescale),
        //         e = Math.floor(_pluginobject_xml.pixelheight * _krpanointerface.stagescale),
        //       k = g ? p[0] : 3 * p[0],
        //       u = g ? 3 * p[1] : p[1],
        //       k = k + t[0],
        //       u = u + t[1],
        //       l = 0 <= a.indexOf("left") && 0 > a.indexOf("right");
        //     a = 0 <= a.indexOf("top") && 0 > a.indexOf("bottom");
        //     b = b * _krpanointerface.stagescale * _krpanointerface_device_pixelratio;
        //     c = c * _krpanointerface.stagescale * _krpanointerface_device_pixelratio;
        //     l || (b = f - k - b);
        //     a || (c = e - u - c);
        //     z.style.left = b + "px";
        //     z.style.top = c + "px"
        // };
        // (function () {
        //     z.style.borderRadius = 7 * l + "px";
        //     z.style.borderBottom = "2px solid rgba(100,100,100,0.5)";
        //     z.style.boxShadow = z.style.MozBoxShadow = z.style.webkitBoxShadow = "2px 2px 4px rgba(0,0,0,0.5)";
        //     g ? (z.style.width =
        //       p[0] + "px", z.style.height = 3 * p[1] + 1 + "px") : (z.style.width = 3 * p[0] + "px", z.style.height = p[1] + 1 + "px");
        //     m = mapTypeButton(n[0]);
        //     x = mapTypeButton(n[1]);
        //     r = mapTypeButton(n[2]);
        //     var a = 5 * l + "px";
        //     g ? (m.style.borderRadius = a + " " + a + " 0px 0px", r.style.borderRadius = "0px 0px " + a + " " + a, t = [4, 4], m.style.top = "0px", x.style.top = p[1] + "px", r.style.top = 2 * p[1] + "px") : (m.style.borderRadius = a + " 0px 0px " + a, r.style.borderRadius = "0px " + a + " " + a + " 0px", t = [4, 4], m.style.left = "0px", x.style.left = p[0] + "px", r.style.left = 2 * p[0] + "px");
        //     z.appendChild(m);
        //     z.appendChild(x);
        //     z.appendChild(r);
        //     _krpanointerface_events.mouse && (m.addEventListener("mousedown", setMAP_normal), m.addEventListener("mouseup", mouseupEventsMAP));
        //     _krpanointerface_events.touch && (m.addEventListener(_krpanointerface_events_touchstart, setMAP_normal), m.addEventListener(_krpanointerface_events_touchend, mouseupEventsMAP));
        //     _krpanointerface_events.mouse && (x.addEventListener("mousedown", setMAP_satellite), x.addEventListener("mouseup", mouseupEventsMAP));
        //     _krpanointerface_events.touch && (x.addEventListener(_krpanointerface_events_touchstart, setMAP_satellite), x.addEventListener(_krpanointerface_events_touchend, mouseupEventsMAP));
        //     _krpanointerface_events.mouse && (r.addEventListener("mousedown", setMAP_hybrid), r.addEventListener("mouseup", mouseupEventsMAP));
        //     _krpanointerface_events.touch && (r.addEventListener(_krpanointerface_events_touchstart, setMAP_hybrid), r.addEventListener(_krpanointerface_events_touchend, mouseupEventsMAP));
        //     a = _mapTypeString;
        //     "normal" == a ?
        //     setMAP_normal() :
        //     "satellite" == a ?
        //     setMAP_satellite() :
        //     "hybrid" == a &&
        //     setMAP_hybrid()
        // })()


    }
    // 视野范围类视野雷达
    function viewRadarClass() {
        
        // 停止事件继续传递
        function stopEventFun(ev) {
            //pass
            if (ev != null) {
                //ev.preventDefault();                // 阻止事件默认的动作发生
                //ev.stopImmediatePropagation();
                //ev.stopPropagation();               // 停止事件向父元素传播

                // // leaflet 事件处理
                // L.DomEvent.preventDefault();
                // L.DomEvent.stopPropagation();
                L.DomEvent.stop(ev);
                L.DomEvent.stop(ev.target);
                //console.log("stopEventFun-----" + ev.type);
            }
        }
        // 鼠标按下
        function stroke_MouseDownEvent(ev) {
            //pass
            if (_this_viewRadar.dragable) {
                start_draging = true;
                stroke_MouseMoveEvent(ev);
                if (_krpanointerface_events.mouse) {
                    window.addEventListener("mousemove", stroke_MouseMoveEvent, true);
                    window.addEventListener("mouseup", stroke_MouseUpEvent, true);
                }
                if (_krpanointerface_events.touch) {
                    window.addEventListener(_krpanointerface_events_touchmove, stroke_MouseMoveEvent, true);
                    window.addEventListener(_krpanointerface_events_touchcancel, stroke_MouseUpEvent, true);
                    window.addEventListener(_krpanointerface_events_touchend, stroke_MouseUpEvent, true);
                }
                stopEventFun(ev);
            }
        }
        // 鼠标抬起
        function stroke_MouseUpEvent(ev) {
            //pass
            if (_krpanointerface_events.mouse) {
                window.removeEventListener("mousemove", stroke_MouseMoveEvent, true);
                window.removeEventListener("mouseup", stroke_MouseUpEvent, true);
            }
            if (_krpanointerface_events.touch) {
                window.removeEventListener(_krpanointerface_events_touchmove, stroke_MouseMoveEvent, true);
                window.removeEventListener(_krpanointerface_events_touchcancel, stroke_MouseUpEvent, true);
                window.removeEventListener(_krpanointerface_events_touchend, stroke_MouseUpEvent, true);
            }
            stopEventFun(ev);
        }
        // 鼠标移动
        function stroke_MouseMoveEvent(ev) {
            //pass
            if (null == _krpanointerface) stroke_MouseUpEvent(ev);
            else if (null != radarSVG && null != _this_viewRadar.bmspot) {
                var xxxx = 0, yyyy = 0;
                var view_hlookat_ = { x: 0, y: 0 };
                var I = radarSVG.svg.parentNode.getBoundingClientRect();

                if (_krpanointerface_events && _krpanointerface_events.touch) {
                    (ev = ev.changedTouches ?
                    ev.changedTouches :
                    [ev], 0 < ev.length &&
                    (yyyy = ev[0],
                    xxxx = Math.round(yyyy.clientX - I.left),
                    yyyy = Math.round(yyyy.clientY - I.top)));
                }
                else {
                    xxxx = Math.round(ev.clientX - I.left);
                    yyyy = Math.round(ev.clientY - I.top);
                }

                view_hlookat_ = 180 * Math.atan2(yyyy - view_hlookat_.y, xxxx - view_hlookat_.x) / Math.PI;
                view_hlookat_ -= _this_viewRadar.bmspot.heading;
                if (true == start_draging)
                    unknow_var_r = view_hlookat_ - Number(_krpanointerface.view.hlookat),
                    start_draging = false;
                else {
                    for (view_hlookat_ -= unknow_var_r; 180 < view_hlookat_;) view_hlookat_ -= 360;
                    for (; -180 > view_hlookat_;) view_hlookat_ += 360;
                    _krpanointerface.view.hlookat = view_hlookat_
                }
                
                _this_viewRadar.needredraw = true;
            }
        }
        // 初始化视野范围样式
        function initViewRadar() {
            _this_viewRadar.needredraw = true;
            if (radarSVG) {
                radarSVG.path.setAttribute("stroke", setRGB(_this_viewRadar.linecolor));
                radarSVG.path.setAttribute("stroke-width", _this_viewRadar.linewidth);
                radarSVG.path.setAttribute("stroke-opacity", _this_viewRadar.linealpha * _this_viewRadar.alpha);
                radarSVG.path.setAttribute("fill", setRGB(_this_viewRadar.fillcolor));
                radarSVG.path.setAttribute("fill-opacity", _this_viewRadar.fillalpha * _this_viewRadar.alpha);
            }
        }

        var radarSVG = null;
        var _this_viewRadar = this;
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
        _this_inner_mapdiv = null;

        var marker = null;
        var unknow_var_n = null;
        var start_draging = false;
        var unknow_var_r = 0;
        var unknow_var_t = null;
        var unknow_var_y = 0;
        var unknow_var_p = 0;
        var _bmspot_lat = -1000;
        var _bmspot_lng = -1000;
        var sa = -1;
        var _radarOBJ = _pluginobject_xml.radar;

        if (_radarOBJ == null) {
            // plugin[map].radar.visible = false
            _krpanointerface.set(_pluginpath + ".radar.visible", false);
            _radarOBJ = _pluginobject_xml.radar;
        }

        // 雷达销毁
        _this_viewRadar.destroy = function () {
            _this_viewRadar.bmspot = null;
            unknow_var_n && _document_div_maps.entities.remove(unknow_var_n);
            marker && _document_div_maps.entities.remove(marker);
            unknow_var_n = marker = null
        };
        // 雷达更新
        _this_viewRadar.update = function () {
            _this_viewRadar.needredraw = true
        };
        var _isinit = false;
        // 刷新视野雷达函数
        _this_viewRadar.updatehandler = function () {

            if (_document_div_maps) {
                _this_inner_mapdiv = _document_div_maps;

                if(null == marker && null != _this_viewRadar.bmspot) {
                    var icon = L.divIcon({className: 'svg-icon', iconSize: [0, 0] });
                    var position = new L.latLng(_this_viewRadar.bmspot.lat, _this_viewRadar.bmspot.lng);
                    marker = new L.marker(position, { icon: icon });
                    _document_div_maps.addLayer(marker);
                }
            }

            // 这里这里代码需要梳理
            if (_document_div_maps && null != marker) {
                //if (0 == marker._icon.childNodes.length) {
                // 初始化
                if (_isinit == false) {
                    _isinit = true;
                    // 因为marker里也没有_krpimg属性所以这里都是废代码
                    // a: {
                    //     var markero = marker;

                    //     for (var item in markero) {
                    //         if (markero[item] &&
                    //             typeof markero[item] === "object" &&
                    //             markero[item].dom &&
                    //             markero[item].dom.childNodes &&
                    //             markero[item].dom.childNodes[0])
                    //         {
                    //             markero._krpdom = markero[item].dom;
                    //             markero._krpimg = markero[item].dom.childNodes[0];
                    //             break a
                    //         }
                    //     }
                    // };
                    //
                    //if (null == marker._krpdom) return;

                    // 查找

                    debugger;
                    
                    console.log("%%%%%%%%%%%%%%%%%%%");
                    radarSVG = setViewRadarSVG(500, 500);
                    initViewRadar();
                    //marker._krpimg.style.display = "none";
                    marker._icon.style.overflow = "visible";
                    //marker.getPane().appendChild(radarSVG.svg);
                    marker._icon.appendChild(radarSVG.svg);         // 这是关键 把雷达加到图上
                    //marker._icon.appendChild(radarSVG.svg);

                    // 关键3行代码
                    var draggable = new L.Draggable(radarSVG.path);     // 把路径设为可拖拽
                    draggable.enable();                                 // 设置可拖拽
                    draggable._onMove = function(e) {                   // 把原来的moMove函数屏蔽掉
                        L.DomEvent.preventDefault(e);
                    };

                    if (_krpanointerface_events.mouse)
                        radarSVG.path.addEventListener("mousedown", stroke_MouseDownEvent, true);
                    if (_krpanointerface_events.touch)
                        radarSVG.path.addEventListener(_krpanointerface_events_touchstart, stroke_MouseDownEvent, true)

                }


                if (null == _this_viewRadar.bmspot || 0 == _this_viewRadar.visible) {
                    if (radarSVG) radarSVG.hide();
                }
                else {
                    if (radarSVG) radarSVG.show();
                    var d_lookat = Number(_krpanointerface.view.hlookat);       // 朝向
                    var d_fov = Number(_krpanointerface.view.hfov);             // 视角大小
                    d_lookat += _this_viewRadar.bmspot.heading;
                    d_lookat += _this_viewRadar.headingoffset;
                    // 
                    if (_bmspot_lat != _this_viewRadar.bmspot.lat ||
                        _bmspot_lng != _this_viewRadar.bmspot.lng) {
                        _bmspot_lat = _this_viewRadar.bmspot.lat;
                        _bmspot_lng = _this_viewRadar.bmspot.lng;
                        marker.setLatLng(new L.latLng(_this_viewRadar.bmspot.lat, _this_viewRadar.bmspot.lng));
                    }
                    // 
                    if (_this_viewRadar.bmspot != unknow_var_t || d_lookat != unknow_var_y || d_fov != unknow_var_p) {
                        unknow_var_t = _this_viewRadar.bmspot;
                        unknow_var_y = d_lookat;
                        unknow_var_p = d_fov;
                        _this_viewRadar.needredraw = true;
                    }
                    // 
                    if (_this_viewRadar.needredraw) {
                        //
                        if (marker && marker._icon)
                            marker._icon.style.overflow = "visible";
                        //
                        var radar_radius = _this_viewRadar.zoomwithmap ?
                            Math.pow(2, _document_div_maps.getZoom()) / 1E4 : 1;
                        //
                        radar_radius = 1 * _this_viewRadar.size * radar_radius * _krpanointerface_device_pixelratio;
                        if (2800 < radar_radius) radar_radius = 2800;

                        // 有一块SVG的正方形画布
                        // 画布里 1/2 中心点有一个PATH的圆弧
                        // 绘制出来的雷达位于地图的左上角 0,0 点
                        if (radarSVG) {
                            var extsize = 16 * (Math.floor(2 * radar_radius / 16) + 1) + 16;

                            if (extsize != sa) {
                                sa = extsize;
                                radarSVG.svg.setAttribute("width", extsize);
                                radarSVG.svg.setAttribute("height", extsize);
                                radarSVG.svg.style.left = -extsize / 2 + "px";
                                radarSVG.svg.style.top = -extsize / 2 + "px";

                                radarSVG.centerx = extsize / 2,
                                radarSVG.centery = extsize / 2;
                            }


                            // 圆点X 圆点Y 半径 边线角度1 边线角度2
                            radarSVG.drawpie(extsize / 2, extsize / 2, radar_radius, d_lookat - .5 * d_fov, d_lookat + .5 * d_fov);
                            
                        }
                    }
                    _this_viewRadar.needredraw = false
                }
            }
        };
        // 读取属性
        (function () {
            //pass
            // visible
            // 显示或隐藏雷达。
            // dragable
            // 雷达扇形部分是否能被鼠标拖拽？
            // size
            // 雷达扇形的尺寸。
            // zoomwithmap
            // 雷达扇形是否跟随地图缩放一同缩放。
            // headingoffset
            // 针对点的 heading 数值的偏移值。
            // headingoffset的默认值为90，也就是默认下heading=0对着东方。如果headingoffset=0则heading=0对着北。
            // alpha
            // 整个雷达元素的透明度。
            // fillcolor / fillalpha
            // 雷达扇形的颜色和透明度。
            // linewidth / linecolor / linealpha
            // 雷达扇形线条的宽度、颜色和透明度。
            // glow / glowcolor / glowwidth / glowstrength (仅支持Flash)
            // 为雷达扇形添加和定义发光效果。
            _radarOBJ.registerattribute("visible", _this_viewRadar.visible, function (a) {
                _this_viewRadar.visible = activeSpotEnabled(a);
                _this_viewRadar.update()
            }, function () {
                return _this_viewRadar.visible
            });
            _radarOBJ.registerattribute("dragable", _this_viewRadar.dragable, function (a) {
                _this_viewRadar.dragable = activeSpotEnabled(a)
            }, function () {
                return _this_viewRadar.dragable
            });
            _radarOBJ.registerattribute("size", _this_viewRadar.size, function (a) {
                _this_viewRadar.size = Number(a);
                _this_viewRadar.update()
            }, function () {
                return _this_viewRadar.size
            });
            _radarOBJ.registerattribute("zoomwithmap", _this_viewRadar.zoomwithmap, function (a) {
                _this_viewRadar.zoomwithmap = activeSpotEnabled(a);
                _this_viewRadar.update()
            }, function () {
                return _this_viewRadar.zoomwithmap
            });
            _radarOBJ.registerattribute("alpha", _this_viewRadar.alpha, function (a) {
                _this_viewRadar.alpha = Number(a);
                initViewRadar()
            }, function () {
                return _this_viewRadar.alpha
            });
            _radarOBJ.registerattribute("fillcolor", _this_viewRadar.fillcolor, function (a) {
                _this_viewRadar.fillcolor = Number(a);
                initViewRadar()
            }, function () {
                return _this_viewRadar.fillcolor
            });
            _radarOBJ.registerattribute("fillalpha", _this_viewRadar.fillalpha, function (a) {
                _this_viewRadar.fillalpha = Number(a);
                initViewRadar()
            }, function () {
                return _this_viewRadar.fillalpha
            });
            _radarOBJ.registerattribute("linewidth", _this_viewRadar.linewidth, function (a) {
                _this_viewRadar.linewidth = Number(a);
                initViewRadar()
            }, function () {
                return _this_viewRadar.linewidth
            });
            _radarOBJ.registerattribute("linecolor", _this_viewRadar.linecolor, function (a) {
                _this_viewRadar.linecolor = Number(a);
                initViewRadar()
            }, function () {
                return _this_viewRadar.linecolor
            });
            _radarOBJ.registerattribute("linealpha", _this_viewRadar.linealpha, function (a) {
                _this_viewRadar.linealpha = Number(a);
                initViewRadar()
            }, function () {
                return _this_viewRadar.linealpha
            });
            _radarOBJ.registerattribute("headingoffset", _this_viewRadar.headingoffset, function (a) {
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

        function updateSpotCCC(a) {
            void 0 === a && (a = false);

            var spotstylename = this_spot.xmlobject.name;
            var spotlist = _pluginobject_xml.spot.getArray();

            for (var ii = 0; ii < spotlist.length; ii++) {
                var h = spotlist[ii].internalObject;
                if (h.spotstyle == spotstylename && (0 == a || h.active))
                    h.update(1);
            }
        }
        // <spotstyle> 属性
        // name
        // 地图点样式的名字。
        // 在spot的style属性中使用该名字。
        // url
        // 应用在地图点上的图像的路径。
        // 没有定义时，则使用默认图像（一个蓝色的点）。
        // overurl
        // 当鼠标悬停在地图点时地图点的图像路径。
        // 没有定义时，则使用默认图像（一个蓝色的点）。
        // activeurl
        // 当点被激活时地图点的图像路径。
        // 没有定义时，则使用默认图像（一个绿色的点）。
        // edge
        // 点图像的对齐点。
        // 可设置的值： lefttop, left, leftbottom, top, center, bottom, righttop, right, rightbottom。
        // x / y
        // 以像素为单位，图像从对齐点开始的偏移值。
        // scale
        // 地图点样式的图像的缩放。
        // 在ipad 3 retina屏幕中可使用更多像素的图像。使用大图像，然后scale=”0.5″在ipad3上获取1比1比例的图像。
        var this_spot = this;
        this_spot.url = null;
        this_spot.overurl = null;
        this_spot.activeurl = null;
        this_spot.edge = "center";
        this_spot.x = 0;
        this_spot.y = 0;
        this_spot.shadow = true;
        this_spot.scale = 1;
        this_spot.xmlobject = null;
        this_spot.url_bitmapdata = null;
        this_spot.overurl_bitmapdata = null;
        this_spot.activeurl_bitmapdata = null;
        this_spot.url_bitmapdata = otherPoint;
        this_spot.overurl_bitmapdata = null;
        this_spot.activeurl_bitmapdata = currentPoint;
        this_spot.xmlobject = a;

        // 注册属性 SET GET
        a.registerattribute("url", this_spot.url, function (a) {
            if ("" == a || "null" == a) a = null;
            a != this_spot.url &&
            (this_spot.url = a, null != this_spot.url ?
                createImgElement(this_spot.url, function (a) {
                    this_spot.url_bitmapdata = a;
                    updateSpotCCC()
                }) :
                (this_spot.url_bitmapdata = otherPoint, updateSpotCCC()))
        }, function () {
            return this_spot.url
        });
        // 注册属性 
        a.registerattribute("overurl", this_spot.overurl, function (a) {
            if ("" == a || "null" == a) a = null;
            a != this_spot.overurl &&
            (this_spot.overurl = a, null != this_spot.overurl ?
            createImgElement(this_spot.overurl, function (a) {
                this_spot.overurl_bitmapdata = a
            }) :
            this_spot.overurl_bitmapdata = null)
        }, function () {
            return this_spot.overurl
        });
        // 注册属性 
        a.registerattribute("activeurl", this_spot.activeurl, function (a) {
            if ("" == a || "null" == a) a = null;
            a != this_spot.activeurl &&
            (this_spot.activeurl = a,
            null != this_spot.activeurl ?
            createImgElement(this_spot.activeurl,
              function (a) {
                  this_spot.activeurl_bitmapdata = a;
                  updateSpotCCC(true)
              }) :
              (this_spot.activeurl_bitmapdata = currentPoint, updateSpotCCC(true)))
        }, function () {
            return this_spot.activeurl
        });
        // 注册属性 
        a.registerattribute("edge", this_spot.edge, function (a) {
            this_spot.edge = String(a)
        }, function () {
            return this_spot.edge
        });
        // 注册属性 
        a.registerattribute("x", this_spot.x, function (a) {
            this_spot.x = Number(a)
        }, function () {
            return this_spot.x
        });
        // 注册属性 
        a.registerattribute("y", this_spot.y, function (a) {
            this_spot.y = Number(a)
        }, function () {
            return this_spot.y
        });
        // 注册属性 
        a.registerattribute("shadow", this_spot.shadow, function (a) {
            this_spot.shadow = activeSpotEnabled(a)
        }, function () {
            return this_spot.shadow
        });
        // 注册属性 
        a.registerattribute("scale", this_spot.scale, function (a) {
            this_spot.scale = Number(a)
        }, function () {
            return this_spot.scale
        })
    }
    // 标记点类
    function spotClass(inpushPin) {
        // 使用<spotstyle>子元素，可定义地图点的样式。
        // 地图点的样式可使用style属性。
        // 预定义的样式的名字为 “DEFAULT”。

        // 初始化样式
        function initSpotStyle() {
            var this_spot_spotstyle = _pluginobject_xml.spotstyle.getItem(_this_Spot.spotstyle);
            if (null == this_spot_spotstyle) {
                // 不存在样式 跑出异常
                this_spot_spotstyle = "bingmaps plugin - spot[" + _pushpin_last.name + '] - spotstyle "' + _this_Spot.spotstyle + '" not found!';
                if (this_spot_spotstyle != _spot_spotstyle_name) {
                    _spot_spotstyle_name = this_spot_spotstyle;
                    _krpanointerface.trace(3, this_spot_spotstyle);
                }
                return null;
            }
            else { return this_spot_spotstyle.internalObject; }
        }

        // 对图片处理 比如按比例缩放
        function dealWithIMG(img, scale) {
            x = img;

            if (!scale) {
                if (_this_Spot.zoomwithmap) scale = Math.pow(2, _map_zoom) / Math.pow(2, _this_Spot.zoombaselevel);
                else scale = 1;
            }

            var d = x,
              e = d ? d.naturalWidth : 12,
              f = d ? d.naturalHeight : 12,
              h = Math.floor(e / 2),
              k = Math.floor(f / 2),
              l = initSpotStyle(),
              m = 1 * scale * _krpanointerface_device_pixelratio;
            l &&
            x &&
            (m = Number(l.scale) * scale * _krpanointerface_device_pixelratio, d &&
            void 0 !== d.naturalScale &&
            (m *= d.naturalScale),
            e *= m,
            f *= m,
            h = l.edge,
            k = l.x,
            l = l.y,
            0 <= h.indexOf("left") ||
            (k = 0 <= h.indexOf("right") ?
            k + e :
            k + Math.floor(e / 2)),
            0 <= h.indexOf("top") ||
            (l = 0 <= h.indexOf("bottom") ?
            l + f :
            l + Math.floor(f / 2)),
            h = k,
            k = l);
            _pushpin_image = {
                icon: d.src,
                anchor: { x: h, y: k },
                width: e,
                height: f,
                zIndex: _this_Spot.active ? 2 : 1,
                typeName: "_krp_bingmaps_pin_cursor"
            };
            _pushpin &&
            (_pushpin.setOptions(_pushpin_image),
             _pushpin._krpimg &&
             (_pushpin._krpimg.style[_pluginpath_transform + "Origin"] = "0 0",
             _pushpin._krpimg.style[_pluginpath_transform] = "scale(" + m + "," + m + ")"));
            return _pushpin_image
        }
        // 这个函数不明白暂定这个名称 作用是补全图钉图标如果注释掉只出现1/4个图标
        function drawPushPinOnMAP(a) {
            //debugger;
            for (var b in a)
                if (a[b] && "object" === typeof a[b] &&
                    a[b].dom && a[b].dom.childNodes &&
                    a[b].dom.childNodes[0]) {
                    a._krpdom = a[b].dom;
                    a._krpimg = a[b].dom.childNodes[0];
                    break
                }
        }
        // 图钉被点击
        function pushpinClick(a) {
            debugger;
            _this_Spot.active &&
            0 == _bool_activeSpotEnabled ||
            (a = _pushpin_last.onclick,
            null != a &&
            "" != a &&
            _krpanointerface.call(a, _pushpin_last))
        }
        // 鼠标悬停在图钉上
        function pushpinMouseOver(a) {
            debugger;
            _this_Spot.active &&
            0 == _bool_activeSpotEnabled ||
            (null == t &&
            (a = initSpotStyle()) &&
            a.overurl_bitmapdata &&
            dealWithIMG(a.overurl_bitmapdata),
            _pushpinOBJ = _pushpin_last,
            a = _pushpin_last.onover,
            null != a &&
            "" != a &&
            _krpanointerface.call(a, _pushpin_last))
        }
        // 鼠标从图钉移开
        function pushpinMouseOut(a) {
            debugger;
            _pushpinOBJ = null;
            null != a &&
            _this_Spot.active &&
            0 == _bool_activeSpotEnabled ||
            (null == t &&
            (a = initSpotStyle()) &&
            (_this_Spot.active &&
            a.activeurl_bitmapdata ?
            dealWithIMG(a.activeurl_bitmapdata) :
            a.url_bitmapdata &&
            dealWithIMG(a.url_bitmapdata)),
            a = _pushpin_last.onout,
            null != a &&
            "" != a &&
            _krpanointerface.call(a, _pushpin_last))
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
        var spot_updatetype = 0;
        var t = null;
        var unknow_imagee = null;
        var x = null;
        var _spot_spotstyle_name = null;
        var _pushpin = null;                // 图钉
        var  _pushpin_image = null;
        var _pushpin_last = inpushPin;      // 上次选中的图钉
        _this_Spot.xmlobject = _pushpin_last;

        // 
        _this_Spot.update = function (updatetype) {
            void 0 === updatetype && (updatetype = 0);
            _this_Spot.needupdate = true;
            spot_updatetype |= updatetype;
            _spot_need_redraw = true
        };
        
        _this_Spot.processupdate = function () {
            debugger;
            if (null != _pushpin_last) {
                if (2 == (spot_updatetype & 2)) {
                    var unknow_var1 = false;
                    if (_document_div_maps) {

                        var d = !isNaN(_this_Spot.lat) && !isNaN(_this_Spot.lng);
                        var pushpin_latlng = d ?
                            new L.latLng(_this_Spot.lat, _this_Spot.lng) :
                            new L.latLng(0, 0);

                        if (null == _pushpin && d) {
                            d = initSpotStyle();
                            unknow_var1 = _this_Spot.active ?
                                d.activeurl_bitmapdata :
                                d.url_bitmapdata;

                            _pushpin = null;
                            _pushpin_image = dealWithIMG(unknow_var1);
                            //_pushpin = new L.marker(pushpin_latlng, _pushpin_image),
                            _pushpin = new L.marker(pushpin_latlng);
                            _document_div_maps.addLayer(_pushpin);
                            //drawPushPinOnMAP(_pushpin),
                            pushpin_latlng = d.scale;
                            if (void 0 !== unknow_var1.naturalScale) { pushpin_latlng *= unknow_var1.naturalScale; }
                            if (_this_Spot.zoomwithmap) { pushpin_latlng *= Math.pow(2, _map_zoom) / Math.pow(2, _this_Spot.zoombaselevel); }
                            pushpin_latlng *= _krpanointerface_device_pixelratio;
                            if (_pushpin._krpimg) {
                                _pushpin._krpimg.style[_pluginpath_transform + "Origin"] = "0 0";
                                _pushpin._krpimg.style[_pluginpath_transform] = "scale(" + pushpin_latlng + "," + pushpin_latlng + ")";
                            }
                            else _spot_need_redraw = _this_Spot.needdom = true;
                            // 这里需要完成图钉的事件响应
                            //Microsoft.Maps.Events.addHandler(_pushpin, "click", pushpinClick),
                            //Microsoft.Maps.Events.addHandler(_pushpin, "mouseover", pushpinMouseOver),
                            //Microsoft.Maps.Events.addHandler(_pushpin, "mouseout", pushpinMouseOut),
                            unknow_var1 = true;
                        }
                        else {
                            if (_pushpin && d) {
                                _pushpin.setLatLng(pushpin_latlng);
                                unknow_var1 = true;
                            }
                        }
                    }

                    if (unknow_var1) { spot_updatetype &= -3; }
                }
                if (1 == (spot_updatetype & 1) &&
                    _this_Spot.updateimage())
                    spot_updatetype &= -2;

                if (0 == spot_updatetype)
                	_this_Spot.needupdate = false;
            }
        };
        _this_Spot.updateimage = function () {
            debugger;
            if ("" == _this_Spot.url || "null" == _this_Spot.url)
                _this_Spot.url = null;

            if (_this_Spot.url) {
                if (_this_Spot.url != t) {
                    t = _this_Spot.url;
                    createImgElement(_this_Spot.url, function (a) {
                        unknow_imagee = a;
                        dealWithIMG(a);
                    });
                }
            }
            else {
                unknow_imagee = t = null;
                var a = initSpotStyle();
                if (a) {
                    a = _this_Spot.active ?
                      a.activeurl_bitmapdata :
                      a.url_bitmapdata;
                    if (x != a) dealWithIMG(a);
                }
            }
            return true
        };
        _this_Spot.scalespot = function (a) {
            dealWithIMG(x, a)
        };
        _this_Spot.try_dom_access = function () {
            if (_pushpin)
                if (drawPushPinOnMAP(_pushpin), _pushpin._krpimg) {
                    var a = initSpotStyle();
                    dealWithIMG(t ? unknow_imagee :
                                _this_Spot.active ?
                                a.activeurl_bitmapdata :
                                a.url_bitmapdata);
                    _this_Spot.needdom = false
                } else _spot_need_redraw = _this_Spot.needdom = true
        };
        _this_Spot.destroy = function () {
            _pushpin && _document_div_maps && _document_div_maps.entities.remove(_pushpin);
            x = _pushpin_last = _pushpin_image = _pushpin = null;
        };
        _pushpin_last.event_out = pushpinMouseOut;

        (function () {
            // <spot> 属性
            // name
            // 当前点的名字t (查看 xml name 注意事项)。
            // style
            // 该点要应用的 spotstyle 的名字。
            // url
            // 该点要应用的图像路径。
            // 如无定义，则使用spotstyle的设置。
            // lat / lng
            // 从Google Maps 或 Bing Maps 页面获取
            // 或者: Google Maps Get Lat Lon 或 Bing Maps Lat/Long Finder.
            // 这两个页面能够非常方便和容易地得到坐标。注意谷歌地图和必应地图的坐标是兼容的。
            // 经纬度。
            // 点的地理坐标。
            // 如何获取？
            // heading
            // 以角度为单位，全景的方向，需要与地图的雷达方位对齐。
            // 查看radar headingoffset获取详细信息。
            // active
            // 点的状态。当设置为true时，点会被激活。这就是说点会显示为激活的样式图像（如果没有设置路径）同时会在点的位置上显示雷达。
            // 使用activatespot()动作动态激活雷达。
            inpushPin.registerattribute("spotstyle", _this_Spot.spotstyle, function (a) {
                if (null == a || "" == a) a = "default";
                _this_Spot.spotstyle = String(a).toLowerCase();
                _this_Spot.update(1)
            }, function () {
                return _this_Spot.spotstyle
            });
            inpushPin.registerattribute("url", _this_Spot.url, function (a) {
                a != _this_Spot.url && (_this_Spot.url = String(a), _this_Spot.update(1))
            }, function () {
                return _this_Spot.url
            });
            inpushPin.registerattribute("lat", _this_Spot.lat, function (a) {
                _this_Spot.lat = Number(a);
                _this_Spot.update(2)
            }, function () {
                return _this_Spot.lat
            });
            inpushPin.registerattribute("lng", _this_Spot.lng,
              function (a) {
                  _this_Spot.lng = Number(a);
                  _this_Spot.update(2)
              },
              function () {
                  return _this_Spot.lng
              });
            inpushPin.registerattribute("heading", _this_Spot.heading, function (a) {
                _this_Spot.heading = Number(a)
            }, function () {
                return _this_Spot.heading
            });
            inpushPin.registerattribute("active", _this_Spot.active, function (a) {
                _this_Spot.active = activeSpotEnabled(a);
                _this_Spot.update(1)
            }, function () {
                return _this_Spot.active
            });
            inpushPin.registerattribute("zoomwithmap", _this_Spot.zoomwithmap, function (a) {
                _this_Spot.zoomwithmap = activeSpotEnabled(a);
                _this_Spot.update(2)
            }, function () {
                return _this_Spot.zoomwithmap
            });
            inpushPin.registerattribute("zoombaselevel", _this_Spot.zoombaselevel, function (a) {
                _this_Spot.zoombaselevel = Number(a);
                _this_Spot.update(2)
            },
            function () {
                return _this_Spot.zoombaselevel
            });
            // <spot> 事件
            // onover
            // 当鼠标悬停在点元素上时调用的动作。
            // onhover
            // 当鼠标悬停在点元素上时持续调用的动作（一秒多次）。
            // onout
            // 当鼠标移动离开点元素时调用的动作。
            // onclick
            // 当鼠标点击点元素时调用的动作。
            inpushPin.registerattribute("onover", null);
            inpushPin.registerattribute("onhover", null);
            inpushPin.registerattribute("onout", null);
            inpushPin.registerattribute("onclick", null);
            // <spot> 动作
            // activatespot()
            // 激活当前点。
            // pantospot()
            // 横移地图中心至当前点。
            // getstagepos(xvar,yvar) (仅Flash)
            // 将Flash stage的点的当前位置保存到指定的krpano变量。
            inpushPin.activatespot = function () {
                activateSpot(_pushpin_last.name)
            };
            inpushPin.pantospot = function () {
                panTospot(_pushpin_last.name)
            }
        })()
    }
    // 其他点
    var otherPoint = {
        src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAKRklEQVR42u2ZDXBU1RmGT0JoSpXbARur9QaHX+EKKD8NN3SAKrhTBjrFYbGiOEPXCgjY2SnQoQR2BMOkNstYSJRxRVEMQ4C0dSBEGyNTZBnKj4wTjFqBNgVESMIWKJAETn++97v3bO6uCyRxb4C6d+Ydstl7z/e+z/eds5tBjBhTJL7OEikAKQApACkAKQApACkAKQApACkAbmuVQfINH7UqRAoPGbmqmlRrK0y/K6X3AyQP3a/9vwCg0EV+BB40okhC3x8bkj9+dLOcMv2P8vEZ5Sy8fnDSZjloZIjvARQCEaRnPTcrAJ0UoiByUO5LMnf8BjlrXpVcs/4zuf/DBnn8xEV5sq5ZNkQuyZP1zfz640Pn5ZbKOrmkYDcDGTbKggF4boJI9oIaOkfBIwiO7m586zCHQ9iz/5LR0Kw6W/XN0fchANm1t55hDH/gNQZB61bYE3XDAkDXK2AWHUS3EYQDU8hjnze1Wuo5qHJHPU8PgNI00NYo8t6IANAZ7jrMouPo6pF/XGQdrm1qs9SzakoAFNOAbUW1fDcSAJNUiwMMI6uMAwJU81lju6XWgDAV2E44T2wIgRsBAMa+FgcWwiuzH3zU5IoAFhCGjSvBdpDJ2A5f8cArCqvDDsFxwu8+0JhYH15uu+LWwPqoEyw+wB+ZOWNelPYEXhcAgZwfWh9x6ApO7ff3nGNV7W5OqtS6SgAxfe57DAFNuB4AdAofgYFZC/ezKZzW0LYdl12TqoF6OBTvH/26RBPoI9Lf0QBK8Y0OexFG8AUG2rjtPGtDRVNSpdaFVC1ozMPlDAGfQPZ51CEADOw9FIaBdb+vi2rtW5dclYKwaetJBoDpu3dUiT0F7ftobA8AP7qPwpNm7uHgL62vZxWVNrouVQt1C4o/lYPGlfH3g/aeBW262fzBSkHdr0ZBAEAHYCb/5VPy+dcvRFWwtjGpcq6thLoAMHzC27wVMQXkz3QVwLAJa3j8URDkAQDhFxU1sPJWX3RdqKcUA4B8DZnyRpu/HAnR2Ng6/eeSuPt32/1EmQv297wtp/yyRs5f8UVUc1843yY9s/JCm4XnnDUBAM3Al7H7fBvC8NnqTFBbANz7TFmI/0ylggCAM+CpglNRTS8857qc9WYsPSyNiVXRc2Cod21tRsNZzRUAaecvCBqxMP95agMwH98rHwkcZ/30uTpLBefclV0HNTGBDGDiFp5KOpwj3/j8tHsA7n9sXbUCgML9Ju+UDy34m/zRklNRjVv6z6jGLjvDin/dHqk1VB0AyJn9cQwAOqMAQHcTQC0DoIIKAEwAwoi8U1HlLI24otxnG1iogZp9p/6FPTgAyA4DMGDKdjbQx3eQDfX79QlpLGmIUX8ynSw512XIBF4BGDh5mxw6YX2HAKjmj8A4AN+b8ykDuGPxSVbWstOuCGujDnTX7BrZ07eXPTgAuLcFxOVmfApU4FsgCvaf9h4bgBEAgLnMwBes9OUNrghro863F33CNXs8/QH7UADokHbvU0D899+i1/OVgUQAYAjmxHPHo2bFb10QrQ91WXxEZs2vYQB9fh6WA6duZQD0PaAak+oagNveOegxH1wtB0/dxAB6zQ2zERhic4XHLaOrTrfoxUjs66sJ9zoV/36hBSA9/whDdwLA/u83r6zUvS9CtAWwv/BlIyGAQhuAChI6bWlN5Bo6cwU57gk5QBa2ANAX7JH9Zr7LADCZ3924z4dGuQPA/jZI2yCEcTOeLGcAty2qYUMcvuh4S+gSmoSSM0lSg7XmK1aNeABoCDXGOgCpUe4AaG5iALQNvBg3BeD2Jftkxm/+KkXxIctgNDxp89lYlbVR6jm1ng0A9QD+7gU72QcdfpL+Tgly+OYmFw5BLFxfJ8Sxo1rG4aM6DpshT2xk+uiCtnx/CwBltqzBCrHFofJzrZPzGYbhAEB1AADgFQDqvuy66xOTPdbXadyspAI4dlSIcFiIQ4c0/Iy9BuoDZ29hE7EAjlmGt9a3hH63nVIw4gEUfsQA+syvlNyIeWUVtjdN7Nur0c9tANCaa9MmIar+BAgai4qgKIrDBG8DMsUQnACgyobYUDuuIee9lfY6DIDWffUQ1wBwgEcDaBoj33xnl8nBLW9ClLwpknvl51sQSt7U6F+NYGi3vrHVi+Iw0Wvhn1um4NU4CApAfNBdcYp/f/tpB4Bj1pq0fucVB+RdS3ZGu/+d4KYA/LAvy58QxcVJBuDzCbE4D9LEihUaFdCpmE7F/QRBGvPK2RTMiZdryOwRy7QCgDDvR1q061xiqfcThSewacUHZTf6HyiEv2/mH2Sv+RsqyIchXgnp7Cs/XxMLFlhek3oNHSrSJnuFmDZNE3PmoIhOxQwqatwxf3UIZmAqa3n4yxDKT1hhrgbC+TsVHs/h+Y1/jwnfO6+KR7/3L9ZVU32TfSzO09mXz6exz9Gjkps/rXNnhkALa2K8B0V0KoaiKG4CApsic1+CgACJQCSSCq7C4/m48Ji23nNeq85Y9KyXGmGKWU8Z1Bhd/GSSJh4YrYmcHJGelSWSfnXq2lWk9+2rpQ0erImRuTqBQFEUhwnP7TMKQvTHkrznVxVSX7ZDfiu4l40nBHEl4X1HcDwLmICqwmc/XRwm8F5qgIcaYYqJEwxqjE4N0tIGDNA69egh3LnS0kRG9+5aRna2RiBQUCcQhnhoLEx4yYz31p/NC1J3agFBTUMMCD4gbRjxwu+dwVce4K4DJtYD3CzfslIC7iPwXmqAh4Kb5MOg4Hqnnj21jDvv1Hha3bpoca1Tt25aRlaWTqR1AmHQRJg0dh4aP5jyEQg/GQ2raXCCQCjAiAJxCL/D+7hPBXd0vTbz0SeDBNpHwH0E3kvBPRTcoOAGBdfRnPQuXTTh8qUxhK5dUVAnEAaBMAmEh0B4CYSPuuInk34CEez+xMIwHVYR3rcUBqEgAIEQFMLP6j3cB3D0PUPStqqm4CEKHiDAfgruo+BeCu6h4CYFN7gZ3brpdnj3ASgI6bfcohMIg0CgAyaB8BAIL4GASZiF6QCZD1KICkwFOgkgCIeQSnhNH2kRvI/QBK6CAIYIZICABgisH+tScC8F91I9DwU3KbiBZqRnZuq0RTsOAENIT+fCBAImTALhgTEC4SUQMOtnEDk5VgiEGe8J0v4NZjzyWAidJZVCeM2BCRbfB3AAaAX301o+O7iXgnsouAn41HWDmqE7fYkOuFqKpaVZEDIzDQJhOkB46bBUIHwIYcOwJgNAIASF1OuRudY9dC+ew/MA6gjuQQ0ER000gXzoHRlexNFmAzBCnUBHTBuEh0GQaZi3p8LLMCwgiWWFtsacACYIbnJwqgX4ceE7DEBCCDAEYwzCMREYVxuEpexsbBNLPXtasl9H78H93btbz185+HULnwhCLAg1EQBB44r9ygIMCoYDLEb4HQJbe9va33S28PPXDn5dwl8JguYwqUCwomeFE4hDHFjtbfsZ3uNXD35dw18LxJWnwwFGBW1l2BsueHtgfBXd1NfXJmjqSl030fU/lYyyalriYOIAAAAASUVORK5CYII=",
        naturalWidth: 64,
        naturalHeight: 64,
        naturalScale: .5
    };
    // 当前点
    var currentPoint = {
          src: "data:image/png;base64,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",
          naturalWidth: 64,
          naturalHeight: 64,
          naturalScale: .5
      };
    var _krpanointerface = null,
      _pluginobject_xml = null,
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
      _has_init = false,
      _spot_need_redraw = false,
      _redraw_mapcontrol = true,
      _viewRadarOBJECT = null,
      _pushpinOBJ = null,
      _redarwmap_bool = false,
      _mapTypeChangeOBJ = null,
      _maptypecontrol = null,
      _mapTypeString,
      _mapTypesString,
      _map_lat,
      _map_lng,
      _map_zoom,
      _bool_activeSpotEnabled;
    // 安装插件 registerplugin
    // registerplugin - startup point for the plugin (required)
    // - krpanointerface = krpano interface object
    // - pluginpath = the fully qualified plugin name (e.g. "plugin[name]")
    // - pluginobject = the xml plugin object itself
    this.registerplugin = function (krpanointerface, pluginpath, pluginobject) {
        // 插件属性
        // key
        // 可以使用多个域名密钥配对作为key的属性来对应不同的域名使用不同的密钥。
        // 使用 | 分隔符来隔开不同的域名和密钥。
        // 如果要本地测试使用某个密钥，可使用特殊的域名名字 “local”。
        // 语法示例：
        // key=”yourdomain1.com|key1|yourdomain2.com|key2|local|key1″
        // 必应地图API的密钥。
        // 需要必应地图的API密钥才能够使用必应地图服务！
        // 注意 – 必应地图API密钥不限制域名！
        // 登陆获取必应地图API密钥…
        // 多域名密钥配对
        // maptype
        // satellite (默认)
        // normal
        // hybrid
        // 选择地图类型：
        // culturecode
        // HTML5: http://msdn.microsoft.com/en-us/library/gg427600.aspx
        // Flash: http://msdn.microsoft.com/en-us/library/hh441729.aspx
        // 选择地图标签的语言
        // 查看支持的culture codes：
        // 注意 – culturecode设置必须在启动插件时进行，在之后进行更改是不可能的！
        // lat / lng
        // 从Google Maps 或 Bing Maps 页面获取
        // 或者: Google Maps Get Lat Lon 或 Bing Maps Lat/Long Finder.
        // 这两个页面能够非常方便和容易地得到坐标。注意谷歌地图和必应地图的坐标是兼容的。
        // 经纬度
        // 当前地图中心点的地理坐标。
        // 如何获取？
        // zoom
        // 设置地图的缩放级别。
        // 可从1到25。
        // activespotenabled
        // 激活的点是否可接收鼠标事件
        // 也就是说是否能有鼠标点击或悬停？
        // maphandcursor (仅支持Flash)
        // 是否在鼠标悬停在地图上时显示手型。
        // dragging (仅支持Flash)
        // 是否可以鼠标拖拽地图？
        // scrollwheel (仅支持Flash)
        // 是否能用鼠标滚轮缩放地图？
        // dbclicking (仅支持Flash)
        // 是否支持双击放大？
        // bgcolor / bgalpha
        // 地图背景的颜色和透明度。
        // mapsapi (仅支持HTML5)
        // 为必应地图API手动设置其它路径。
        // 为完全路径，需要设置protocol以及API版本。
        // 如果不设置，则使用默认路径：
        // http://ecn.dev.virtualearth.net/mapcontrol/mapcontrol.ashx?v=7.0
        // 使用 https，使用下面的地址：
        // https://ecn.dev.virtualearth.net/mapcontrol/mapcontrol.ashx?v=7.0&amp;s=1

        // 插件子元素：
        // Spotstyle
        // Spot
        // Radar
        // Controls

        // 创建样式 在head里添加样式
        function createPinCursorStyle() {
            var a = document.createElement("style");
            a.type = "text/css";
            a.innerHTML = "._krp_bingmaps_pin_cursor{cursor:pointer!important;}";
            document.getElementsByTagName("head")[0].appendChild(a)
        };

        _krpanointerface = krpanointerface;     // krpano.js 对象
        _pluginobject_xml = pluginobject;       // bingmaps.xml 对象
        _pluginpath = pluginpath;
        if ("1.18" > _krpanointerface.version || 0 == _krpanointerface.hasOwnProperty("haveLicense"))
            _krpanointerface.trace(3, "Bingmaps Plugin - too old krpano version (min. version 1.18)");
        else {
            _krpanointerface_device = _krpanointerface.device;
            _krpanointerface_device.androidstock &&
            (_krpanointerface_device_pixelratio = _krpanointerface_device.pixelratio);
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
            _pluginpath_prefix = void 0 === _pluginpath_prefix ||
            null === _pluginpath_prefix ?
                "webkit" :
                String(_pluginpath_prefix).toLowerCase();
            if (void 0 === _pluginpath_transform || null === _pluginpath_transform)
                _pluginpath_transform = "webkitTransform";
            if (void 0 === _pluginpath_backgroundsize || null === _pluginpath_backgroundsize)
                _pluginpath_backgroundsize = "-webkit-background-size";
            createPinCursorStyle();
            _pluginobject_xml.maskchildren = true;
            _pluginobject_xml.registerattribute("key", null);
            _pluginobject_xml.registerattribute("maptype", "satellite", function (a) {
                setMaptype(a)
            }, function () {
                return _mapTypeString
            });
            _pluginobject_xml.registerattribute("maptypes", "normal|satellite|hybrid", function (a) {
                _mapTypesString = String(a)
            }, function () {
                return _mapTypesString
            });
            _pluginobject_xml.registerattribute("lat", 0, function (a) {
                _map_lat = Number(a);
                updateMaps()
            }, function () {
                return _map_lat
            });
            _pluginobject_xml.registerattribute("lng", 0, function (a) {
                _map_lng = Number(a);
                updateMaps()
            }, function () {
                return _map_lng
            });
            _pluginobject_xml.registerattribute("zoom", 1, function (a) {
                _map_zoom = Number(a);
                updateMaps()
            }, function () {
                return _map_zoom
            });
            _pluginobject_xml.registerattribute("activespotenabled", false, function (a) {
                _bool_activeSpotEnabled = activeSpotEnabled(a)
            }, function () {
                return _bool_activeSpotEnabled
            });

            // 插件属性 – 事件
            // onmapready
            // 当必应地图插件载入结束可供使用时响应。
            // onmaptypechanged
            // 当地图类型改变时响应。
            // onmapmoved
            // 当地图被移除时响应。
            // onmapzoomed
            // 当地图缩放时响应。

            _pluginobject_xml.registerattribute("bgcolor", 0);
            _pluginobject_xml.registerattribute("bgalpha", 0);
            _pluginobject_xml.registerattribute("mapsapi", "");
            _pluginobject_xml.registerattribute("onmapready", null);
            _pluginobject_xml.registerattribute("onmapmoved", null);
            _pluginobject_xml.registerattribute("onmapzoomed", null);
            _pluginobject_xml.registerattribute("onmaptypechanged", null);
            _pluginobject_xml.setzoom = setZoom;
            _pluginobject_xml.setcenter = setCenter;
            _pluginobject_xml.setmaptype = setMaptype;
            _pluginobject_xml.addspot = addSpot;
            _pluginobject_xml.addstylespot = addStylespot;
            _pluginobject_xml.addimagespot = addImagespot;
            _pluginobject_xml.removespot = removeSpot;
            _pluginobject_xml.removeallspots = removeAllspots;
            _pluginobject_xml.activatespot = activateSpot;
            _pluginobject_xml.addspotstyle = addSpotstyle;
            _pluginobject_xml.panto = panTo;
            _pluginobject_xml.pantospot = panTospot;
            _pluginobject_xml.panby = panBy;
            _pluginobject_xml.flyto = flyTo;
            _pluginobject_xml.flytospot = flyTospot;
            _pluginobject_xml.cancelflyto = cancelFlyto;
            _pluginobject_xml.zoomin = zoomIn;
            _pluginobject_xml.zoomout = zoomOut;
            _pluginobject_xml.zoomtospotsextent = zoomTospotsextent;
            _pluginobject_xml.resetspots = removeAllspots;
            _pluginobject_xml.updatespots = updateSpots;
            _pluginobject_xml.updatecontrols = updateMapControls;
            createSpotsStyle();
            createSpots();
            //绘制Demo不需要
            //0 == _krpanointerface.haveLicense("maps") && setTimeout(showDemoText, 100);
            _pluginobject_xml.registercontentsize(400, 300);
            krpanointerface = Math.floor(_pluginobject_xml.pixelwidth * _krpanointerface.stagescale);
            pluginpath = Math.floor(_pluginobject_xml.pixelheight * _krpanointerface.stagescale);
            _document_div = document.createElement("div");
            _document_div.style.position = "absolute";
            _document_div.style.left = 0;
            _document_div.style.top = 0;
            _document_div.style.width = krpanointerface + "px";
            _document_div.style.height = pluginpath + "px";
            _document_div.style.overflow = "hidden";
            _document_div.style.fontFamily = "Arial";
            _document_div.style.fontSize = 9 * _krpanointerface.stagescale + "px";
            _document_div.style.webkitUserSelect = "none";
            _document_div.style.MozUserSelect = "none";
            _pluginobject_xml.sprite.appendChild(_document_div);
            // 初始化地图
            if (window.Microsoft && window.Microsoft.Maps) {
                // 网页里已经有地图控件
                setTimeout(initBingMap, 10); }
            else if (window._krpano_bmap_loadedcallbacks_) {
                // 利用回调函数初始化
                window._krpano_bmap_loadedcallbacks_.push(initBingMap); }
            else {
                // 啥都没有的情况下
                window._krpano_bmap_loadedcallbacks_ = [];
                _krpano_bmap_cb_var = "_krpano_bmap_cb_";
                // 生成随机的URL标识 并将地图刷新函数放到 window[_krpano_bmap_cb_var]
                for (krpanointerface = 0; 16 > krpanointerface; krpanointerface++)
                    _krpano_bmap_cb_var += String.fromCharCode(65 + 32 * Math.round(Math.random()) + Math.floor(25 * Math.random()));
                window[_krpano_bmap_cb_var] = reinitBingMap;
                krpanointerface = "";
                _pluginobject_xml.culturecode &&
                (krpanointerface = "&mkt=" + _pluginobject_xml.culturecode);
                // 必应API地址
                (pluginpath = _pluginobject_xml.mapsapi) &&
                "" != pluginpath ||
                (pluginpath = 0 == ("" + window.location.href).toLowerCase().indexOf("https:") ?
                "https://ecn.dev.virtualearth.net/mapcontrol/mapcontrol.ashx?v=7.0&s=1" :
                "http://ecn.dev.virtualearth.net/mapcontrol/mapcontrol.ashx?v=7.0");

                // var scriptobject = document.createElement("script");
                // scriptobject.type = "text/javascript";
                // scriptobject.src = pluginpath + krpanointerface + "&onscriptload=" + _krpano_bmap_cb_var;
                // document.body.appendChild(scriptobject);

                // 将 reinitBingMap 函数放到全局变量里window[_krpano_bmap_cb_var]
                // 当加载脚本完成后回调 reinitBingMap 并且把全局变量删除掉
                
                // 插入leaflet类库 DoDo
                // var scriptobject = document.createElement("script");
                // scriptobject.type = "text/javascript";
                // scriptobject.src = "http://unpkg.com/leaflet@1.0.1/dist/leaflet.js";
                // document.body.appendChild(scriptobject);
                
                // 插入CSS
                var linkobject = document.createElement('link');
                linkobject.setAttribute('rel','stylesheet');
                linkobject.setAttribute('media','all');
                linkobject.setAttribute('href','http://unpkg.com/leaflet@1.0.3/dist/leaflet.css');
                document.body.appendChild(linkobject);
                // 插入JS
                loadScript("http://unpkg.com/leaflet@1.0.3/dist/leaflet.js", reinitBingMap)
            }
        }
    };
    //
    function loadScript(url, callback) {
        var script = document.createElement("script");
        script.type = "text/javascript";
        if (script.readyState) {
            // IE
            script.onreadystatechange = function () {
                if (script.readyState == "loaded" || script.readyState == "complete") {
                    script.onreadystatechange = null;
                    callback();
                }
            };
        } else {
            // others
            script.onload = function () {
                callback();
            };
        }
        script.src = url;
        document.body.appendChild(script);
    };
    // 卸载插件
    this.unloadplugin = function () {
        _has_init = false;
        null != _timers && (clearInterval(_timers), _timers = null);
        _krpanointerface = _pluginobject_xml = _document_div_maps = _document_div = null
    };
    // 窗口改变
    this.onresize = function (a, c) {
        var b = Math.floor(a * _krpanointerface.stagescale),
          d = Math.floor(c * _krpanointerface.stagescale);
        _document_div && 
        (_document_div.style.width = b + "px",
        _document_div.style.height = d + "px");
        _document_div_maps && 
        (
        // _document_div_maps.setOptions({
        //     height: d,
        //     width: b
        // }), 
        
        setBGColor());
        updateMapControls();
        return false;
    }
};

// 1.setMaptype
// 2.updateMaps
// 3.createSpotsStyle
// 4.mapSpotClass
// 5.createSpots
// 6.spotClass
// 7.updateControls
// 8.reinitBingMap
// 9.showDemoText
// 10.initBingMap
// 11.roadaerial
// 12.showMAPS
// 13.setBGColor
// 14.viewRadarClass
// 15.updateSpots
// 16.processupdate
// 17.initSpotStyle
// 18.dealWithIMG
// 19.initSpotStyle
// 20.drawPushPinOnMAP
// 21.updateimage
// 22.scaleSpotArray
// 23.initMapView
// 24.updateControls
// 25.redrawMAP
// 26.updateControls
// 27.mapTypeChangeClass
// 28.setViewRadarSVG

