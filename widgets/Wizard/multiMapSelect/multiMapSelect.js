define(["dojo/_base/declare", "dijit/_WidgetBase", "dijit/_TemplatedMixin", "dijit/_WidgetsInTemplateMixin", "dojo/text!./templates/multiMapSelect.html", "esri/geometry/Point", "esri/geometry/Circle",
        "esri/map", "esri/graphic", "dijit/form/Button", "dojo/_base/array", "dojo/on", "dojo/dom-construct", "dojo/topic", "dojo/_base/lang", "esri/geometry/Extent", "esri/layers/FeatureLayer"],
    function(declare, _WidgetBase, _TemplatedMixin, _WidgetsInTemplateMixin, templateString, Point, Circle,
        map, Graphic, Button, array, on, domConstruct, topic, lang, Extent, FeatureLayer) {
        var multiMapSelect = declare([_WidgetBase, _TemplatedMixin, _WidgetsInTemplateMixin], {
            widgetsInTemplate: true,
            templateString: templateString,
            _totalMaps: 0,
            startup: function() {
                var me = this, getLayers;
                var leng=this.selections;
                getLayers=setInterval(function(){
                    topic.publish("get/layer/MainFLayer", "getting");
                }, 2000);
                while(leng--){
                    (function(num){
                            var removeMe=topic.subscribe("return/layer/MainFLayer", function(FeatureCollection, features){
                            clearInterval(getLayers);
                            removeMe.remove();
                            new me._map({FC:FeatureCollection, features:features, leng:num}).placeAt(me.mapContainer);
                        });
                    })(leng);
                }
                
            },
            _map: declare([_WidgetBase], {
                _initExt: null,
                constructor: function() {
                    this.domNode = domConstruct.create("div", {
                        style: "display:inline-block; padding-right:5px; margin-bottom:5px;"
                    });
                },
                postCreate: function() {
                    var mapSize = 200;
                    this.mapContainer = domConstruct.create("div", null, this.domNode);
                    //create Map
                    this.map = new map(this.mapContainer, {
                        basemap: "dark-gray",
                        center: [-82.441, 35.612],
                        zoom: 16,
                        logo: false,
                        slider: false,
                        showAttribution: false
                    });
                    this.map.attr("style", "height:" + mapSize + "px; width:" + mapSize + "px; display:inline-block;");

                    //Create Button to Select Map
                    this.selectButton = new Button({
                        label: "Select",
                        style: "display:block; text-align:center;"
                    }).placeAt(this.domNode);
                    //Setup On Load Handler
                    on.once(this.map, "load", lang.hitch(this, function() {
                        //this.map.addLayer(layer);
                        //this.map.graphics.add(this.gphc);
                        var size=this.buildFeatureLayer(this.FC, this.features, this.map, this.leng);
                        this.map.resize();
                        this.map.reposition();
                        setTimeout(lang.hitch(this, function() {
                            this._initHandlers();
                        }), 2000);
                        on(this.selectButton, "click", function(){
                            topic.publish("MainFLayer/Selection", size);
                        });
                    }));
                },
                buildFeatureLayer:function(FeatureCollection, features, map, itr){
                    var fLayer = new FeatureLayer(FeatureCollection, {
                        mode: FeatureLayer.MODE_SNAPSHOT,
                        orderByFields: ["GroundArea DESC"],
                        outFields: ["Cmn_Name", "GroundArea", "Sci_Name", "Height", "C_Seq"]
                    });
                    var options=["radius", "diameter", "area", "width", "distance"];
                    var valUnits=["inches", "centimeters", "feet", "meters", "miles"];
                    while(itr>options.length){
                        itr-=options.length;
                    }
                    var sizeInfo = {
                      field:"GroundArea",
                      valueUnit:valUnits[itr],
                      valueRepresentation:options[itr]
                    };
                    fLayer.renderer.setSizeInfo(sizeInfo);
                    on.once(map, "layer-add-result", function(layer){
                        fLayer.applyEdits(array.map(features, function(feature){
                            var geometry = new Point(lang.mixin(feature.geometry, {spatialReference:FeatureCollection.layerDefinition.spatialReference}));
                              var graphic = new Graphic(geometry);
                              graphic.setAttributes(feature.attributes);
                              return graphic;
                        }), null, null);
                    });
                    
                    map.addLayer(fLayer);
                    return sizeInfo;
                },
                _initHandlers: function() {
                    //Attach Broadcaster
                    var mapPausable = on.pausable(this.map, "extent-change", function() {
                        topic.publish("multiMapSelect/extent-change", {
                            id: this.id,
                            extent: this.extent
                        });
                    });

                    //Attach Listener
                    topic.subscribe("multiMapSelect/extent-change", lang.hitch(this, function(data) {
                        if (this.map.id !== data.id && this.map.extent !== data.extent) {
                            mapPausable.pause();
                            this.map.setExtent(data.extent).then(lang.hitch(this, function() {
                                mapPausable.resume();
                            }));
                        }
                    }));
                }
            })
        });
        return multiMapSelect;
    });