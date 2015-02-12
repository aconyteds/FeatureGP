//>>built
define("dojo/_base/declare dojo/_base/lang dojo/_base/array dojo/_base/html dojo/on dojo/store/Memory dgrid/OnDemandGrid esri/layers/GraphicsLayer esri/layers/FeatureLayer esri/graphicsUtils esri/renderers/SimpleRenderer esri/symbols/SimpleMarkerSymbol esri/symbols/SimpleLineSymbol esri/symbols/SimpleFillSymbol esri/renderers/jsonUtils esri/InfoTemplate ../BaseResultRenderer".split(" "), function(d, l, h, c, m, n, p, q, r, s, k, t, u, v, w, x, e) {
    var f = {};
    f.UnsupportRenderer = d(e, {
        baseClass: "jimu-gp-resultrenderer-base jimu-gp-renderer-unsupport",
        postCreate: function() {
            this.inherited(arguments);
            c.setAttr(this.domNode, "innerHTML", this.message)
        }
    });
    f.SimpleResultRenderer = d(e, {
        baseClass: "jimu-gp-resultrenderer-base jimu-gp-renderer-simple",
        postCreate: function() {
            this.inherited(arguments);
            c.setAttr(this.domNode, "innerHTML", this.message)
        }
    });
    f.ErrorResultRenderer = d(e, {
        baseClass: "jimu-gp-resultrenderer-base jimu-gp-renderer-error",
        postCreate: function() {
            this.inherited(arguments);
            c.setAttr(this.domNode, "innerHTML", this.message)
        }
    });
    f.RecordSetTable = d([e], {
        baseClass: "jimu-gp-resultrenderer-base jimu-gp-renderer-table",
        postCreate: function() {
            this.inherited(arguments);
            var a = [];
            if (this.value.fields) a = this.value.fields;
            else if (this.value.features && 0 < this.value.features.length)
                for (var b in this.value.features[0].attributes) a.push({
                    name: b
                });
            a = h.map(a, function(a) {
                return {
                    label: a.name,
                    field: a.name
                }
            });
            b = h.map(this.value.features, function(a) {
                return a.attributes
            });
            b = new n({
                data: b
            });
            this.table = new p({
                columns: a,
                store: b
            }, this.domNode)
        },
        startup: function() {
            this.inherited(arguments);
            this.table.startup()
        }
    });
    f.DrawResultFeatureSet = d(e, {
        baseClass: "jimu-gp-resultrenderer-base jimu-gp-renderer-draw-feature",
        postCreate: function() {
            this.inherited(arguments);
            this._createDisplayText();
            this._drawResultFeature(this.param, this.value)
        },
        destroy: function() {
            this.resultLayer && this.map.removeLayer(this.resultLayer);
            this.inherited(arguments)
        },
        _createDisplayText: function() {
            c.create("span", {
                innerHTML: this.nls.drawnOnMap,
                style: {
                    marginLeft: "15px"
                }
            }, this.domNode);
            var a = c.create("a", {
                innerHTML: this.nls.clear,
                href: "#",
                style: {
                    "float": "right"
                }
            }, this.domNode);
            this.own(m(a, "click", l.hitch(this, function() {
                this.resultLayer && this.map.removeLayer(this.resultLayer)
            })))
        },
        _drawResultFeature: function(a, b) {
            if (this.config.shareResults) {
                if (!a.defaultValue || !a.defaultValue.geometryType) throw Error("Output parameter default value does not provide enough information to draw feature layer.");
                a.defaultValue.name = a.name;
                this.resultLayer = new r({
                    layerDefinition: a.defaultValue,
                    featureSet: null
                }, {
                    id: a.name
                })
            }
            else this.resultLayer =
                new q({
                    id: a.name
                });
            this.map.addLayer(this.resultLayer);
            a.popup || (a.popup = {
                enablePopup: !0,
                title: "",
                fields: []
            });
            var f = b.features.length,
                g = a.renderer;
            g ? g = w.fromJson(g) : "esriGeometryPoint" === b.geometryType ? g = new k(new t) : "esriGeometryPolyline" === b.geometryType ? g = new k(new u) : "esriGeometryPolygon" === b.geometryType && (g = new k(new v));
            var d;
            a.popup.enablePopup && (d = new x(a.popup.title, this._generatePopupContent()));
            for (var c = 0; c < f; c++) d && b.features[c].setInfoTemplate(d), this.resultLayer.add(b.features[c]);
            this.resultLayer.setRenderer(g);
            try {
                var e = s.graphicsExtent(b.features);
                e && (this.resultLayer.fullExtent = e.expand(1.4))
            }
            catch (h) {
                console.error(h)
            }
        },
        _generatePopupContent: function() {
            var a = "";
            h.forEach(this.param.popup.fields, function(b) {
                a = a + "<b>" + b.alias + ": </b>${" + b.name + "}<br>"
            });
            return a
        }
    });
    return f
});