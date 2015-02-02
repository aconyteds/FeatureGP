//this file describes the format of the config.json

{
  //optional, if not set, do not load theme
  "theme": {
    "name": "FoldableTheme",

    //this property stores all of the theme's styles, the app will display the first style by default
    "styles": [],
  },

  //optional, if not set, do not use proxy
  "httpProxy": {
    //optional, default to true, if false all requests will not use proxy.
    //if true, if the request match proxy rule, use proxy;
    //         if the request doesn't match proxy rule but need proxy(cross domain, i.e.), use proxy url;
    //         if the request neither match proxy rule nor the request doesn't need proxy, framework will check "alwaysUseProxy";
    //            if alwaysUseProxy=true, the request uses proxy url, or the request doesn't use proxy.
    "useProxy": true,

    //optional, default to false. If true, all requests will use proxy.
    "alwaysUseProxy": false,

    //optional, this property will be set to esriConfig.defaults.io.proxyUrl
    "url": "",
    //optional, these rules will be added to urlUtils proxyRule
    "rules": [{
      "urlPrefix": "",
      "proxyUrl": ""
    }]
  },

  //optional, the portal URL. If empty, use the URL that the the app is hosted
  "portalUrl": "http://mypc.com/arcgis/",

  //optional, whether the portal uses webtier authentication, default to false
  "isWebTier": false,

  //optional, if the portal URL is arcgis.com, the appid is required for OAuth2 signin
  "appId": "",

  //optional, the URL of the geometry service used by widgets and the webmap. If not set, read from portal
  "geometryService": "",

  //If using Bing Maps for maps or geocoding, you need to provide the Bing key
  bingMapsKey: "",

  //optional, the logo/title/subtitle of app. default value is default logo/"HTML5 app"/"A configurable web application"
  "logo": "",
  "title": "ArcGIS Web Application",
  "subtitle": "A configurable web application",

  //optional, app can contain some links.
  "links":[
    {
      "url": "http://www.arcgis.com",
      "label": "ArcGIS Online"
    }
  ],

  "widgetOnScreen": {
    //widgets(not in group) will be opened in this panel
    "panel": {
      "uri": "jimu/PanelType1"
    },

    "widgets": [{
      //required, the widget main class
      "uri": "widgets/Header/Widget",

      //optional, if not set, use the icon in the widget folder
      "icon": "",

      //optional, if not set, use widget name
      "label": "",

      //optional, value can be: map or browser. if not set, default value is "map"
      "positionRelativeTo": "map",

      //optional, if not set, default value is left=0, top=0. 
      //If panel is set, this means panel's position or widget position.
      //If widget is closeable, this means widget icon's position or widget position.
      //The framework uses 6 properties to position widget: left, top, bottom, right, width and height.
      //Four properties  should be enough to position the widget. This position method is the same as the HTML.
      "position": {
        "left": 0,
        "top": 0,
        "right": 0,
        "bottom": 30,
        "width": 100,
        "height": 100
      },

      //optional, whether the widget will open at app start, the default value is false.
      //Only valid for in-panel widget.
      //If more than one widget in widgetOnScreenare set to true, the first one will open.
      //If more than one widget in widget pool are set to true, it's the controller's job to define how to open.
      "openAtStart": true,

      //optional, object or url. If  object, it means widget's config object;
      //if url, it means the location of the config file.
      //if not set, the framework will check "hasConfig" property to decide the widget config.
      "config": {}
    }],

    //group has position properties
    "groups": [{
      //optional, if set, all widgets in this group will be displayed in this panel.
      //if not set, all widgets in this group will be displayed in the default panel.
      "panel": {
        "uri": "jimu/PanelType1",
        "positionRelativeTo": "map",
        "position": {
          "left": 0,
          "top": 0,
          "right": 0,
          "bottom": 30,
          "width": 100,
          "height": 100
        }
      },

      //widgets in group has no position properties.
      "widgets": [{
        "uri": "widgets/Header/Widget",
        "icon": "",
        "label": ""
      }]
    }]
  },

  "map": {
    //optional, if both 2D and 3D are not set, a 2D map is created by default.
    //if 3D is true and 2D is false, it's a 3D app
    //if 3D is false and 2D is true, it's a 2D app
    //if both 3D and 2D is true, it's an app with the ability of switching 2D and 3D,
    //the default map is 2D.
    "3D": true,
    "2D": true,

    //optional, the url where webmap is hosted. If not set, use the app's portalUrl property.
    "portalUrl": "",

    //optional, webmap id or webscene id
    //if set, framework will use this property and ignore basemaps
    "itemId": "",

    //the same as the fix position widget
    "position": {
      "left": 0,
      "top": 0,
      "right": 0,
      "bottom": 30,
      "width": 100,
      "height": 100
    },

    "mapOptions": {
      //these properties are the same as the map API
      "extent": {
        "xmin": 20, "xmax": 30, "ymin": 40, "ymax": 50, "spatialReference" { "wkid": 4326}
      },
      "center": "",
      "level": 3
    }
  },

  //widgets in this section will not be loaded by the app, but are controlled by the widget(controller widget)
  "widgetPool": {
    //optional, if set, widgets in this container will display in this panel, or in the default panel.
    "panel": {
      "uri": "jimu/PanelType1",
      "positionRelativeTo": "map",
      "position": {
        "left": 0,
        "top": 0,
        "right": 0,
        "bottom": 30,
        "width": 100,
        "height": 100
      }
    },

    "groups": [{
      //can be one or more widgets,
      "widgets": [{
        "uri": "widgets/Bookmark/Widget",
        "icon": "",
        "label": "" 
      }],

      //optional, if only one widget, this property is ignored
      "label": "",

      //optional, the sequence of the group/widget
      "index": 1,

      //optional, if not set, use widget container's panel;
      //if set, will override the container's panel
      "panel": {
        "uri": "jimu/PanelType1",
        "positionRelativeTo": "map",
        "position": {
          "left": 0,
          "top": 0,
          "right": 0,
          "bottom": 30,
          "width": 100,
          "height": 100
        }
      }
    }],

    "widgets": [{
      "index": 2,
      "uri": "widgets/Header/Widget",
      "icon": "",
      "label": ""
    }]
  },

  "version": "1.0"
}