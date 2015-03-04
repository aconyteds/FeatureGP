define(['dojo/_base/declare','dijit/_WidgetBase','dijit/_TemplatedMixin','dijit/_WidgetsInTemplateMixin', "dojo/Stateful", "dojo/topic", "dojo/_base/lang", "dojo/dom-construct", "dojo/on", "esri/geometry/Circle",
"dojox/form/Uploader", "dijit/form/Form", "dijit/form/Button", "dijit/form/Select", "dijit/form/TextBox", "dojo/request/xhr", "esri/layers/FeatureLayer", "esri/geometry/Point", "esri/graphic", "dojo/_base/array",
'dojo/text!./templates/wizard.html', 'dojo/text!./templates/page1.html', 'dojo/text!./templates/page2.html', 'dojo/text!./templates/page3.html', 'dojo/text!./templates/page4.html',
'dojo/text!./templates/page5.html', 'dojo/text!./templates/page6.html', "./multiMapSelect/multiMapSelect"],
    function(declare, _WidgetBase, _TemplatedMixin, _WidgetsInTemplateMixin, Stateful, topic, lang, domConstruct, on, Circle,
    Uploader, Form, Button,  Select, TextBox, xhr, FeatureLayer, Point, Graphic, array,
    wizardTemplate, page1Template, page2Template, page3Template, page4Template, 
    page5Template, page6Template, multiMapSelect){
        var WizardDijit=declare([_WidgetBase, _TemplatedMixin,  Stateful],{
            templateString: wizardTemplate,
            _currPage:0,
            _pages:[page1Template, page2Template, page3Template, page4Template, page5Template, page6Template],
            _subscriptions:[],
            postCreate:function(){
                var me=this;
                var testLayer=new FeatureLayer("http://services.arcgis.com/V6ZHFr6zdgNZuVG0/arcgis/rest/services/Warren_College_Trees/FeatureServer/0");
                this.map.addLayer(testLayer);
                xhr("widgets/Wizard/layer.json", {
                    handleAs: "json"
                }).then(function(data) {
                    var FeatureCollection={
                        layerDefinition:data.layerDefinition,
                        featureSet:{
                            features:[],
                            geometryType:data.layerDefinition.geometryType
                        }
                    }
                    var fLayer = new FeatureLayer(FeatureCollection, {
                        mode: FeatureLayer.MODE_SNAPSHOT,
                        orderByFields: ["GroundArea DESC"],
                        outFields: ["Cmn_Name", "GroundArea", "Sci_Name", "Height", "C_Seq"]
                    });
                    on.once(me.map, "layer-add-result", function(layer){
                        fLayer.applyEdits(array.map(data.features, function(feature){
                            var geometry = new Point(lang.mixin(feature.geometry, {spatialReference:FeatureCollection.layerDefinition.spatialReference}));
                              var graphic = new Graphic(geometry);
                              graphic.setAttributes(feature.attributes);
                              return graphic;
                        }), null, null);
                    });
                    me.map.addLayer(fLayer);
                    topic.subscribe("get/layer/MainFLayer", function(value){
                        topic.publish("return/layer/MainFLayer", FeatureCollection, data.features);
                    });
                    
                    topic.subscribe("MainFLayer/Selection", function(sizeInfo){
                        fLayer.renderer.setSizeInfo(sizeInfo);
                        fLayer.redraw();
                    });
                });
                this.watch("_currPage", function(name, oldValue, value){
                    this._changePage();
                });
                this._subscriptions.push(topic.subscribe("wizard/Next", lang.hitch(this, this._next)));
                this._subscriptions.push(topic.subscribe("wizard/Exit", lang.hitch(this, this._exit)));
            },
            startup:function(){
                this._changePage();
            },
            _next:function(){
                var _currPage=parseInt(this.get("_currPage"));
                _currPage++;
                this.set("_currPage", _currPage);
            },
            _exit:function(){
                if(this._currPage!==0){
                    var _currPage=parseInt(this.get("_currPage"));
                    _currPage--;
                    this.set("_currPage", _currPage);
                }
            },
            _changePage:function(){
                var newPage=new this._newPage({templateString:this._pages[this.get("_currPage")], nls:this.nls});
                domConstruct.empty(this.domNode);
                newPage.placeAt(this.domNode);
                newPage.startup();
            },
            _currPageSetter:function(value){
                this._currPage=value;
            },
            _currPageGetter:function(){
                return this._currPage;
            },
            _newPage:declare([_WidgetBase, _TemplatedMixin, _WidgetsInTemplateMixin],{
                widgetsInTemplate:true,
                _next:function(){
                    topic.publish("wizard/Next", this);
                },
                _exit:function(){
                    topic.publish("wizard/Exit", this);
                }
            }),
            destroy:function(){
                for(var i in this._subscriptions){
                    this._subscriptions[i].remove();
                }
            }
        });
        return WizardDijit;
    }
);