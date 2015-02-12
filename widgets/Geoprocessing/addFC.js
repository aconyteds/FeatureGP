define(["dojo/_base/declare", "dijit/_WidgetBase", 'dijit/_TemplatedMixin', 'dijit/_WidgetsInTemplateMixin', "dojo/text!./editors/FeatureCollectionEditor.html", "dijit/form/Form", "dijit/form/TextBox",
        "dojo/topic", "esri/request", "dojo/on", "dijit/form/Button", "dojo/dom-construct", "dojo/_base/lang", "dijit/Dialog", "dojo/_base/array", "esri/arcgis/Portal"
    ],
    function(declare, _WidgetBase, _TemplatedMixin, _WidgetsInTemplateMixin, templateString, Form, TextBox,
        topic, esriRequest, on, Button, domConstruct, lang, Dialog, array, arcgisPortal) {
        var FCHandler = declare([_WidgetBase], {
            postCreate: function() {
                this.inherited(arguments);
                this.domNode = domConstruct.create("a", {
                    innerHTML: "Save",
                    style: "float:right; margin-right:5px;",
                    href: "#"
                });
                domConstruct.place(this.domNode, this.target, "last");
                on(this.domNode, "click", lang.hitch(this, this._handleClick));
            },
            _handleClick: function() {
                new this._addFC({
                    results: this.results,
                    map: this.map,
                    portalUrl:this.portalUrl,
                    outRenderer:this.renderer
                });
            },
            _addFC: declare([_WidgetBase, _TemplatedMixin, _WidgetsInTemplateMixin], {
                widgetsInTemplate: true,
                templateString: templateString,
                postMixInProperties: function() {
                    this.resultLayer = this.map.getLayer(this.results.paramName);
                },
                postCreate: function() {
                    this.inherited(arguments);
                    //console.log(this);
                    this.dialogNode.show();
                    on(this.dialogNode, "hide",lang.hitch(this, function(){
                        //when we hide the dialog we want to destroy this object
                        this.destroy();
                    }));
                    on(this.form, "submit", lang.hitch(this, function(evt) {
                        evt.preventDefault();
                        evt.stopPropagation();
                        var itemInfo = this.form.get("value");
                        lang.hitch(this, this.saveItem( this._makeAGOLItem(itemInfo, this.resultLayer)));
                    }));
                },
                saveItem:function(item){
                    console.log([item ,this]);
                    var me=this;
                    new arcgisPortal.Portal(this.portalUrl).signIn().then(function(portalData){
                        console.log(portalData);
                        item.token=portalData.credential.token;
                        esriRequest({
                            url: portalData.userContentUrl + "/addItem?f=json",
                            content:item
                        },{
                            usePost:true
                        }).then(function(resp){
                            console.log("RESPONSE:", resp);
                            me._hideDialog();
                        },function(err){
                            console.log("ERROR:", err);
                            alert("There was a problem adding the item to Portal. Please try changing the title to a unique name and try again. If issues persist, please contact your portal administrator.");
                        });
                    });
                },
                _makeAGOLItem: function(itemInfo, result) {
                    return lang.mixin(itemInfo, {
                        type: "Feature Collection",
                        spatialReference: result.spatialReference,
                        text:JSON.stringify(_makeFeatureCollection())
                    });
                    
                    function _makeFeatureCollection(){
                        var fcoll={
                            featureCollection:{
                                layers:[],
                                showLegend:true
                            }
                        }
                        fcoll.featureCollection.layers.push({
                            layerDefinition:_makeLayerDefinition(),
                            featureSet:_makeFeatureSet()
                        });
                        console.log("fcoll", fcoll);
                        return fcoll;
                        
                        function _makeLayerDefinition(){
                            return {
                                geometryType:result.geometryType,
                                objectIdField:result.objectIdField,
                                type:"Feature Layer",
                                fields:result.fields,
                                name:result.name,
                                drawingInfo:{
                                    renderer:result.renderer.toJson()
                                }
                            }
                        }
                        function _makeFeatureSet(){
                            return {
                                geometryType:result.geometryType,
                                features:array.map(result.graphics, function(graphic){
                                    return graphic.toJson();
                                })
                            }
                        }
                    }
                },
                _hideDialog: function() {
                    //Function will hide the dialog box
                    this.dialogNode.hide();
                }
            })
        });
        return FCHandler;
    });