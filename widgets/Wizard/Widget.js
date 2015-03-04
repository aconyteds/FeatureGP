define(['dojo/_base/declare','jimu/BaseWidget','jimu/portalUtils','dojo/_base/lang','dojo/Deferred',"jimu/dijit/Message",'jimu/dijit/LoadingShelter','./Wizard',"esri/request",'dojo/json','jimu/portalUrlUtils'],
  function(declare, BaseWidget, portalUtils, lang, Deferred,Message, LoadingShelter,  Wizard, esriRequest, dojoJSON, portalUrlUtils){
      return declare([BaseWidget], {
          baseClass: "jimu-widget-wizard",
          name: "Wizard",
          className: "esri.widgets.Wizard",
          postCreate: function() {
              this.inherited(arguments);
              this.shelter = new LoadingShelter({
                  hidden: true
              });
              this.shelter.placeAt(this.domNode);
              this.shelter.startup();
          },
      
          startup: function() {
              this.inherited(arguments);
              this.shelter.show();
              this._initWizard();
          },
      
          _initWizard: function() {
              this.wizard = new Wizard({
                  map: this.map,
                  nls:this.nls
              });
              this.wizard.placeAt(this.wizardNode);
              this.wizard.startup();
              this.shelter.hide();
          }
      });
  }
);