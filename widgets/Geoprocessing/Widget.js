//>>built
require({
    cache: {
        "widgets/Geoprocessing/editorManager": function() {
            define("dojo/_base/declare dijit/_WidgetBase dojo/_base/lang dojo/_base/array dojo/_base/html dojo/on dojo/aspect dojo/Deferred dojo/promise/all dijit/form/NumberTextBox dijit/form/Select dijit/form/TextBox dijit/form/DateTextBox dijit/form/TimeTextBox esri/symbols/jsonUtils jimu/dijit/CheckBox jimu/dijit/URLInput ./editors/simpleEditors ./editors/FeatureSetEditorChooser ./editors/FeatureSetRendererEditor ./editors/FeatureSetResultEditor ./editors/SelectFeatureSetFromLayer".split(" "),
                function(d, h, l, f, a, b, c, q, k, n, v, m, r, x, w, u, e, t, B, F, C, D) {
                    function y(g, e, b) {
                        if (g.editorName && 0 > g.dataType.indexOf("GPMultiValue")) return g.editorName;
                        if ("input" === e) return "GPMultiValue:GPFeatureRecordSetLayer" === g.dataType ? "UnsupportEditor" : -1 < g.dataType.indexOf("GPMultiValue") && g.choiceList && 0 < g.choiceList.length ? "MultiValueChooser" : -1 < g.dataType.indexOf("GPMultiValue") && (!g.choiceList || 0 === g.choiceList.length) ? "MultiValueEditor" : "GPLong" === g.dataType || "GPDouble" === g.dataType ? "NumberTextBox" : "GPString" ===
                            g.dataType ? g.choiceList && 0 < g.choiceList.length ? "Select" : "TextBox" : "GPBoolean" === g.dataType ? "CheckBox" : "GPLinearUnit" === g.dataType ? "LinerUnitEditor" : "GPDate" === g.dataType ? "DateTimeEditor" : "GPDataFile" === g.dataType ? "ObjectUrlEditor" : "GPRasterDataLayer" === g.dataType ? "ObjectUrlEditor" : "GPRecordSet" === g.dataType ? "ObjectUrlEditor" : "GPFeatureRecordSetLayer" === g.dataType ? "setting" === b ? "FeatureSetEditorChooser" : "draw" === g.featureSetMode ? "SelectFeatureSetFromDraw" : "layers" === g.featureSetMode ? "SelectFeatureSetFromLayer" :
                            "url" === g.featureSetMode ? "SelectFeatureSetFromUrl" : "UnsupportEditor" : "UnsupportEditor";
                        g = "GPFeatureRecordSetLayer" === g.dataType ? "FeatureSetResultEditor" : "ShowMessage";
                        return g
                    }
                    var s = {},
                        z, g = [],
                        A;
                    s.createEditor = function(p, k, a) {
                        var d;
                        k = y(p, k, a);
                        a = {
                            param: p,
                            map: z,
                            nls: A,
                            context: a,
                            editorManager: s,
                            style: {
                                width: "100%"
                            }
                        };
                        if ("UnsupportEditor" === k) a.message = "type " + p.dataType + " is not supported for now.", d = new t.UnsupportEditor(a);
                        else if ("ShowMessage" === k) a.message = "GPRecordSet" === p.dataType ? "table" : "GPDataFile" ===
                            p.dataType || "GPRasterDataLayer" === p.dataType ? "link" : "text", d = new t.UnsupportEditor(a);
                        else if ("MultiValueChooser" === k) d = new t.MultiValueChooser(a);
                        else if ("MultiValueEditor" === k) d = new t.MultiValueEditor(a);
                        else if ("NumberTextBox" === k) a.gEditor = new n({
                            value: void 0 === p.defaultValue ? "" : p.defaultValue
                        }), d = new t.GeneralEditorWrapperEditor(a);
                        else if ("Select" === k) a.gEditor = new v({
                            options: f.map(p.choiceList, function(g) {
                                return {
                                    label: g,
                                    value: g
                                }
                            }),
                            value: void 0 === p.defaultValue ? "" : p.defaultValue
                        }), d = new t.GeneralEditorWrapperEditor(a);
                        else if ("TextBox" === k) a.gEditor = new m({
                            value: void 0 === p.defaultValue ? "" : p.defaultValue
                        }), d = new t.GeneralEditorWrapperEditor(a);
                        else if ("CheckBox" === k) a.gEditor = new u({
                            checked: void 0 === p.defaultValue ? !1 : p.defaultValue
                        }), d = new t.GeneralEditorWrapperEditor(a);
                        else if ("LinerUnitEditor" === k) d = new t.LinerUnitEditor(a);
                        else if ("DateTimeEditor" === k) d = new t.DateTimeEditor(a);
                        else if ("URLInput" === k) a.gEditor = new e({
                            value: void 0 === p.defaultValue ? "" : p.defaultValue
                        }), d = new t.GeneralEditorWrapperEditor(a);
                        else if ("ObjectUrlEditor" ===
                            k) p.defaultValue && "string" === typeof p.defaultValue && (a.value = p.defaultValue), d = new t.ObjectUrlEditor(a);
                        else if ("SelectFeatureSetFromDraw" === k)
                            if (void 0 === p.defaultValue) a.message = "No defaultValue property.", d = new t.UnsupportEditor(a);
                            else {
                                var r = p.defaultValue.geometryType.substr(12, p.defaultValue.geometryType.length).toLowerCase();
                                a.types = [r];
                                a.showClear = !0;
                                p.symbol && (a[r + "Symbol"] = w.fromJson(p.symbol));
                                d = new t.SelectFeatureSetFromDraw(a)
                            }
                        else "SelectFeatureSetFromLayer" === k ? (p.defaultValue && p.defaultValue.geometryType &&
                            (a.geometryType = p.defaultValue.geometryType), p.defaultValue && (a.value = p.defaultValue), d = new D(a)) : "SelectFeatureSetFromUrl" === k ? (a.querySetting = p.defaultValue, a.value = p.featureSetUrl, d = new t.SelectFeatureSetFromUrl(a)) : "FeatureSetEditorChooser" === k ? d = new B(a) : "LayerFieldChooser" === k ? (p.defaultValue && (a.value = p.defaultValue), d = new t.LayerFieldChooser(a)) : "FeatureSetResultEditor" === k ? d = new C(a) : "GetUrlObjectFromLayer" === k ? (p.defaultValue && (a.value = p.defaultValue), d = new t.GetUrlObjectFromLayer(a)) : (a.message =
                            "wrong editorName." + k, d = new t.UnsupportEditor(a));
                        p.editorDependParamName && (d.dependParam = p.editorDependParamName);
                        c.before(d, "destroy", function() {
                            g.splice(g.indexOf(d), 1)
                        });
                        d.dependParam && f.forEach(g, function(g) {
                            g.param.name === d.dependParam && d.update(g.getValue())
                        });
                        "SelectFeatureSetFromLayer" === k && b(d, "change", function() {
                            f.forEach(g, function(g) {
                                g.dependParam === p.name && g.update(d.getValue())
                            })
                        });
                        g.push(d);
                        return d
                    };
                    s.setMap = function(g) {
                        z = g
                    };
                    s.setNls = function(g) {
                        A = g
                    };
                    return s
                })
        },
        "dijit/form/DateTextBox": function() {
            define(["dojo/_base/declare",
                "../Calendar", "./_DateTimeTextBox"
            ], function(d, h, l) {
                return d("dijit.form.DateTextBox", l, {
                    baseClass: "dijitTextBox dijitComboBox dijitDateTextBox",
                    popupClass: h,
                    _selector: "date",
                    maxHeight: Infinity,
                    value: new Date("")
                })
            })
        },
        "dijit/Calendar": function() {
            define("dojo/_base/array dojo/date dojo/date/locale dojo/_base/declare dojo/dom-attr dojo/dom-class dojo/dom-construct dojo/_base/kernel dojo/keys dojo/_base/lang dojo/on dojo/sniff ./CalendarLite ./_Widget ./_CssStateMixin ./_TemplatedMixin ./form/DropDownButton".split(" "),
                function(d, h, l, f, a, b, c, q, k, n, v, m, r, x, w, u, e) {
                    var t = f("dijit.Calendar", [r, x, w], {
                        baseClass: "dijitCalendar",
                        cssStateNodes: {
                            decrementMonth: "dijitCalendarArrow",
                            incrementMonth: "dijitCalendarArrow",
                            previousYearLabelNode: "dijitCalendarPreviousYear",
                            nextYearLabelNode: "dijitCalendarNextYear"
                        },
                        setValue: function(e) {
                            q.deprecated("dijit.Calendar:setValue() is deprecated.  Use set('value', ...) instead.", "", "2.0");
                            this.set("value", e)
                        },
                        _createMonthWidget: function() {
                            return new t._MonthDropDownButton({
                                id: this.id + "_mddb",
                                tabIndex: -1,
                                onMonthSelect: n.hitch(this, "_onMonthSelect"),
                                lang: this.lang,
                                dateLocaleModule: this.dateLocaleModule
                            }, this.monthNode)
                        },
                        postCreate: function() {
                            this.inherited(arguments);
                            this.own(v(this.domNode, "keydown", n.hitch(this, "_onKeyDown")), v(this.dateRowsNode, "mouseover", n.hitch(this, "_onDayMouseOver")), v(this.dateRowsNode, "mouseout", n.hitch(this, "_onDayMouseOut")), v(this.dateRowsNode, "mousedown", n.hitch(this, "_onDayMouseDown")), v(this.dateRowsNode, "mouseup", n.hitch(this, "_onDayMouseUp")))
                        },
                        _onMonthSelect: function(e) {
                            var a =
                                new this.dateClassObj(this.currentFocus);
                            a.setDate(1);
                            a.setMonth(e);
                            e = this.dateModule.getDaysInMonth(a);
                            var k = this.currentFocus.getDate();
                            a.setDate(Math.min(k, e));
                            this._setCurrentFocusAttr(a)
                        },
                        _onDayMouseOver: function(e) {
                            if ((e = b.contains(e.target, "dijitCalendarDateLabel") ? e.target.parentNode : e.target) && (e.dijitDateValue && !b.contains(e, "dijitCalendarDisabledDate") || e == this.previousYearLabelNode || e == this.nextYearLabelNode)) b.add(e, "dijitCalendarHoveredDate"), this._currentNode = e
                        },
                        _onDayMouseOut: function(e) {
                            this._currentNode &&
                                !(e.relatedTarget && e.relatedTarget.parentNode == this._currentNode) && (e = "dijitCalendarHoveredDate", b.contains(this._currentNode, "dijitCalendarActiveDate") && (e += " dijitCalendarActiveDate"), b.remove(this._currentNode, e), this._currentNode = null)
                        },
                        _onDayMouseDown: function(e) {
                            if ((e = e.target.parentNode) && e.dijitDateValue && !b.contains(e, "dijitCalendarDisabledDate")) b.add(e, "dijitCalendarActiveDate"), this._currentNode = e
                        },
                        _onDayMouseUp: function(e) {
                            (e = e.target.parentNode) && e.dijitDateValue && b.remove(e, "dijitCalendarActiveDate")
                        },
                        handleKey: function(e) {
                            var a = -1,
                                b, c = this.currentFocus;
                            switch (e.keyCode) {
                                case k.RIGHT_ARROW:
                                    a = 1;
                                case k.LEFT_ARROW:
                                    b = "day";
                                    this.isLeftToRight() || (a *= -1);
                                    break;
                                case k.DOWN_ARROW:
                                    a = 1;
                                case k.UP_ARROW:
                                    b = "week";
                                    break;
                                case k.PAGE_DOWN:
                                    a = 1;
                                case k.PAGE_UP:
                                    b = e.ctrlKey || e.altKey ? "year" : "month";
                                    break;
                                case k.END:
                                    c = this.dateModule.add(c, "month", 1), b = "day";
                                case k.HOME:
                                    c = new this.dateClassObj(c);
                                    c.setDate(1);
                                    break;
                                default:
                                    return !0
                            }
                            b && (c = this.dateModule.add(c, b, a));
                            this._setCurrentFocusAttr(c);
                            return !1
                        },
                        _onKeyDown: function(e) {
                            this.handleKey(e) ||
                                (e.stopPropagation(), e.preventDefault())
                        },
                        onValueSelected: function() {},
                        onChange: function(e) {
                            this.onValueSelected(e)
                        },
                        getClassForDate: function() {}
                    });
                    t._MonthDropDownButton = f("dijit.Calendar._MonthDropDownButton", e, {
                        onMonthSelect: function() {},
                        postCreate: function() {
                            this.inherited(arguments);
                            this.dropDown = new t._MonthDropDown({
                                id: this.id + "_mdd",
                                onChange: this.onMonthSelect
                            })
                        },
                        _setMonthAttr: function(e) {
                            var a = this.dateLocaleModule.getNames("months", "wide", "standAlone", this.lang, e);
                            this.dropDown.set("months",
                                a);
                            this.containerNode.innerHTML = (6 == m("ie") ? "" : "<div class='dijitSpacer'>" + this.dropDown.domNode.innerHTML + "</div>") + "<div class='dijitCalendarMonthLabel dijitCalendarCurrentMonthLabel'>" + a[e.getMonth()] + "</div>"
                        }
                    });
                    t._MonthDropDown = f("dijit.Calendar._MonthDropDown", [x, u, w], {
                        months: [],
                        baseClass: "dijitCalendarMonthMenu dijitMenu",
                        templateString: "<div data-dojo-attach-event='onclick:_onClick'></div>",
                        _setMonthsAttr: function(e) {
                            this.domNode.innerHTML = "";
                            d.forEach(e,
                                function(e, a) {
                                    c.create("div", {
                                        className: "dijitCalendarMonthLabel",
                                        month: a,
                                        innerHTML: e
                                    }, this.domNode)._cssState = "dijitCalendarMonthLabel"
                                }, this)
                        },
                        _onClick: function(e) {
                            this.onChange(a.get(e.target, "month"))
                        },
                        onChange: function() {}
                    });
                    return t
                })
        },
        "dijit/CalendarLite": function() {
            define("dojo/_base/array dojo/_base/declare dojo/cldr/supplemental dojo/date dojo/date/locale dojo/date/stamp dojo/dom dojo/dom-class dojo/_base/lang dojo/on dojo/sniff dojo/string ./_WidgetBase ./_TemplatedMixin dojo/text!./templates/Calendar.html ./a11yclick ./hccss".split(" "),
                function(d, h, l, f, a, b, c, q, k, n, v, m, r, x, w) {
                    var u = h("dijit.CalendarLite", [r, x], {
                        templateString: w,
                        dowTemplateString: '<th class="dijitReset dijitCalendarDayLabelTemplate" role="columnheader" scope="col"><span class="dijitCalendarDayLabel">${d}</span></th>',
                        dateTemplateString: '<td class="dijitReset" role="gridcell" data-dojo-attach-point="dateCells"><span class="dijitCalendarDateLabel" data-dojo-attach-point="dateLabels"></span></td>',
                        weekTemplateString: '<tr class="dijitReset dijitCalendarWeekTemplate" role="row">${d}${d}${d}${d}${d}${d}${d}</tr>',
                        value: new Date(""),
                        datePackage: "",
                        dayWidth: "narrow",
                        tabIndex: "0",
                        currentFocus: new Date,
                        _setSummaryAttr: "gridNode",
                        baseClass: "dijitCalendar dijitCalendarLite",
                        _isValidDate: function(e) {
                            return e && !isNaN(e) && "object" == typeof e && e.toString() != this.constructor.prototype.value.toString()
                        },
                        _getValueAttr: function() {
                            var e = this._get("value");
                            if (e && !isNaN(e)) {
                                var a = new this.dateClassObj(e);
                                a.setHours(0, 0, 0, 0);
                                a.getDate() < e.getDate() && (a = this.dateModule.add(a, "hour", 1));
                                return a
                            }
                            return null
                        },
                        _setValueAttr: function(e, a) {
                            "string" == typeof e && (e = b.fromISOString(e));
                            e = this._patchDate(e);
                            if (this._isValidDate(e) && !this.isDisabledDate(e, this.lang)) {
                                if (this._set("value", e), this.set("currentFocus", e), this._markSelectedDates([e]), this._created && (a || "undefined" == typeof a)) this.onChange(this.get("value"))
                            }
                            else this._set("value", null), this._markSelectedDates([])
                        },
                        _patchDate: function(e) {
                            e && (e = new this.dateClassObj(e),
                                e.setHours(1, 0, 0, 0));
                            return e
                        },
                        _setText: function(e, a) {
                            for (; e.firstChild;) e.removeChild(e.firstChild);
                            e.appendChild(e.ownerDocument.createTextNode(a))
                        },
                        _populateGrid: function() {
                            var e = new this.dateClassObj(this.currentFocus);
                            e.setDate(1);
                            var e = this._patchDate(e),
                                a = e.getDay(),
                                b = this.dateModule.getDaysInMonth(e),
                                c = this.dateModule.getDaysInMonth(this.dateModule.add(e, "month", -1)),
                                k = new this.dateClassObj,
                                m = l.getFirstDayOfWeek(this.lang);
                            m > a && (m -= 7);
                            if (!this.summary) {
                                var r = this.dateLocaleModule.getNames("months",
                                    "wide", "standAlone", this.lang, e);
                                this.gridNode.setAttribute("summary", r[e.getMonth()])
                            }
                            this._date2cell = {};
                            d.forEach(this.dateCells, function(s, z) {
                                var g = z + m,
                                    A = new this.dateClassObj(e),
                                    p = "dijitCalendar",
                                    d = 0;
                                g < a ? (g = c - a + g + 1, d = -1, p += "Previous") : g >= a + b ? (g = g - a - b + 1, d = 1, p += "Next") : (g = g - a + 1, p += "Current");
                                d && (A = this.dateModule.add(A, "month", d));
                                A.setDate(g);
                                this.dateModule.compare(A, k, "date") || (p = "dijitCalendarCurrentDate " + p);
                                this.isDisabledDate(A, this.lang) ? (p = "dijitCalendarDisabledDate " + p, s.setAttribute("aria-disabled",
                                    "true")) : (p = "dijitCalendarEnabledDate " + p, s.removeAttribute("aria-disabled"), s.setAttribute("aria-selected", "false"));
                                (d = this.getClassForDate(A, this.lang)) && (p = d + " " + p);
                                s.className = p + "Month dijitCalendarDateTemplate";
                                p = A.valueOf();
                                0 == z && console.log("setting date2cell[" + p + "]");
                                this._date2cell[p] = s;
                                s.dijitDateValue = p;
                                this._setText(this.dateLabels[z], A.getDateLocalized ? A.getDateLocalized(this.lang) : A.getDate())
                            }, this)
                        },
                        _populateControls: function() {
                            var e = new this.dateClassObj(this.currentFocus);
                            e.setDate(1);
                            this.monthWidget.set("month", e);
                            var a = e.getFullYear() - 1,
                                b = new this.dateClassObj;
                            d.forEach(["previous", "current", "next"], function(e) {
                                b.setFullYear(a++);
                                this._setText(this[e + "YearLabelNode"], this.dateLocaleModule.format(b, {
                                    selector: "year",
                                    locale: this.lang
                                }))
                            }, this)
                        },
                        goToToday: function() {
                            this.set("value", new this.dateClassObj)
                        },
                        constructor: function(e) {
                            this.dateModule = e.datePackage ? k.getObject(e.datePackage, !1) : f;
                            this.dateClassObj = this.dateModule.Date || Date;
                            this.dateLocaleModule = e.datePackage ? k.getObject(e.datePackage +
                                ".locale", !1) : a
                        },
                        _createMonthWidget: function() {
                            return u._MonthWidget({
                                id: this.id + "_mddb",
                                lang: this.lang,
                                dateLocaleModule: this.dateLocaleModule
                            }, this.monthNode)
                        },
                        buildRendering: function() {
                            var e = this.dowTemplateString,
                                a = this.dateLocaleModule.getNames("days", this.dayWidth, "standAlone", this.lang),
                                b = l.getFirstDayOfWeek(this.lang);
                            this.dayCellsHtml = m.substitute([e, e, e, e, e, e, e].join(""), {
                                d: ""
                            }, function() {
                                return a[b++ % 7]
                            });
                            e = m.substitute(this.weekTemplateString, {
                                d: this.dateTemplateString
                            });
                            this.dateRowsHtml = [e, e, e, e, e, e].join("");
                            this.dateCells = [];
                            this.dateLabels = [];
                            this.inherited(arguments);
                            c.setSelectable(this.domNode, !1);
                            e = new this.dateClassObj(this.currentFocus);
                            this.monthWidget = this._createMonthWidget();
                            this.set("currentFocus", e, !1)
                        },
                        postCreate: function() {
                            this.inherited(arguments);
                            this._connectControls()
                        },
                        _connectControls: function() {
                            var e = k.hitch(this, function(e, a, b) {
                                return n(this[e], "click", k.hitch(this, function() {
                                    this._setCurrentFocusAttr(this.dateModule.add(this.currentFocus, a, b))
                                }))
                            });
                            this.own(e("incrementMonth",
                                "month", 1), e("decrementMonth", "month", -1), e("nextYearLabelNode", "year", 1), e("previousYearLabelNode", "year", -1))
                        },
                        _setCurrentFocusAttr: function(e, a) {
                            var b = this.currentFocus,
                                c = this._getNodeByDate(b);
                            e = this._patchDate(e);
                            this._set("currentFocus", e);
                            if (!this._date2cell || 0 != this.dateModule.difference(b, e, "month")) this._populateGrid(), this._populateControls(), this._markSelectedDates([this.value]);
                            b = this._getNodeByDate(e);
                            b.setAttribute("tabIndex", this.tabIndex);
                            (this.focused || a) && b.focus();
                            c && c != b && (v("webkit") ?
                                c.setAttribute("tabIndex", "-1") : c.removeAttribute("tabIndex"))
                        },
                        focus: function() {
                            this._setCurrentFocusAttr(this.currentFocus, !0)
                        },
                        _onDayClick: function(e) {
                            e.stopPropagation();
                            e.preventDefault();
                            for (e = e.target; e && !e.dijitDateValue; e = e.parentNode);
                            e && !q.contains(e, "dijitCalendarDisabledDate") && this.set("value", e.dijitDateValue)
                        },
                        _getNodeByDate: function(e) {
                            return (e = this._patchDate(e)) && this._date2cell ? this._date2cell[e.valueOf()] : null
                        },
                        _markSelectedDates: function(e) {
                            function a(e, b) {
                                q.toggle(b, "dijitCalendarSelectedDate",
                                    e);
                                b.setAttribute("aria-selected", e ? "true" : "false")
                            }
                            d.forEach(this._selectedCells || [], k.partial(a, !1));
                            this._selectedCells = d.filter(d.map(e, this._getNodeByDate, this), function(e) {
                                return e
                            });
                            d.forEach(this._selectedCells, k.partial(a, !0))
                        },
                        onChange: function() {},
                        isDisabledDate: function() {},
                        getClassForDate: function() {}
                    });
                    u._MonthWidget = h("dijit.CalendarLite._MonthWidget", r, {
                        _setMonthAttr: function(e) {
                            var a = this.dateLocaleModule.getNames("months", "wide", "standAlone", this.lang, e),
                                b = 6 == v("ie") ? "" : "<div class='dijitSpacer'>" +
                                d.map(a, function(e) {
                                    return "<div>" + e + "</div>"
                                }).join("") + "</div>";
                            this.domNode.innerHTML = b + "<div class='dijitCalendarMonthLabel dijitCalendarCurrentMonthLabel'>" + a[e.getMonth()] + "</div>"
                        }
                    });
                    return u
                })
        },
        "dijit/form/_DateTimeTextBox": function() {
            define("dojo/date dojo/date/locale dojo/date/stamp dojo/_base/declare dojo/_base/lang ./RangeBoundTextBox ../_HasDropDown dojo/text!./templates/DropDownBox.html".split(" "), function(d, h, l, f, a, b, c, q) {
                new Date("X");
                return f("dijit.form._DateTimeTextBox", [b, c], {
                    templateString: q,
                    hasDownArrow: !0,
                    cssStateNodes: {
                        _buttonNode: "dijitDownArrowButton"
                    },
                    _unboundedConstraints: {},
                    pattern: h.regexp,
                    datePackage: "",
                    postMixInProperties: function() {
                        this.inherited(arguments);
                        this._set("type", "text")
                    },
                    compare: function(a, b) {
                        var c = this._isInvalidDate(a),
                            m = this._isInvalidDate(b);
                        if (c || m) return c && m ? 0 : !c ? 1 : -1;
                        var c = this.format(a, this._unboundedConstraints),
                            m = this.format(b, this._unboundedConstraints),
                            r = this.parse(c, this._unboundedConstraints),
                            f = this.parse(m, this._unboundedConstraints);
                        return c == m ? 0 : d.compare(r, f, this._selector)
                    },
                    autoWidth: !0,
                    format: function(a, b) {
                        return !a ? "" : this.dateLocaleModule.format(a, b)
                    },
                    parse: function(a, b) {
                        return this.dateLocaleModule.parse(a, b) || (this._isEmpty(a) ? null : void 0)
                    },
                    serialize: function(a, b) {
                        a.toGregorian && (a = a.toGregorian());
                        return l.toISOString(a, b)
                    },
                    dropDownDefaultValue: new Date,
                    value: new Date(""),
                    _blankValue: null,
                    popupClass: "",
                    _selector: "",
                    constructor: function(b) {
                        this.dateModule = b.datePackage ? a.getObject(b.datePackage, !1) : d;
                        this.dateClassObj =
                            this.dateModule.Date || Date;
                        this.dateLocaleModule = b.datePackage ? a.getObject(b.datePackage + ".locale", !1) : h;
                        this._set("pattern", this.dateLocaleModule.regexp);
                        this._invalidDate = this.constructor.prototype.value.toString()
                    },
                    buildRendering: function() {
                        this.inherited(arguments);
                        this.hasDownArrow || (this._buttonNode.style.display = "none");
                        this.hasDownArrow || (this._buttonNode = this.domNode, this.baseClass += " dijitComboBoxOpenOnClick")
                    },
                    _setConstraintsAttr: function(b) {
                        b.selector = this._selector;
                        b.fullYear = !0;
                        var c =
                            l.fromISOString;
                        "string" == typeof b.min && (b.min = c(b.min));
                        "string" == typeof b.max && (b.max = c(b.max));
                        this.inherited(arguments);
                        this._unboundedConstraints = a.mixin({}, this.constraints, {
                            min: null,
                            max: null
                        })
                    },
                    _isInvalidDate: function(a) {
                        return !a || isNaN(a) || "object" != typeof a || a.toString() == this._invalidDate
                    },
                    _setValueAttr: function(a, b, c) {
                        void 0 !== a && ("string" == typeof a && (a = l.fromISOString(a)), this._isInvalidDate(a) && (a = null), a instanceof Date && !(this.dateClassObj instanceof Date) && (a = new this.dateClassObj(a)));
                        this.inherited(arguments);
                        this.value instanceof Date && (this.filterString = "");
                        this.dropDown && this.dropDown.set("value", a, !1)
                    },
                    _set: function(a, b) {
                        var c = this._get("value");
                        "value" == a && c instanceof Date && 0 == this.compare(b, c) || this.inherited(arguments)
                    },
                    _setDropDownDefaultValueAttr: function(a) {
                        this._isInvalidDate(a) && (a = new this.dateClassObj);
                        this._set("dropDownDefaultValue", a)
                    },
                    openDropDown: function(b) {
                        this.dropDown && this.dropDown.destroy();
                        var c = a.isString(this.popupClass) ? a.getObject(this.popupClass, !1) : this.popupClass,
                            d = this,
                            m = this.get("value");
                        this.dropDown = new c({
                            onChange: function(a) {
                                d.set("value", a, !0)
                            },
                            id: this.id + "_popup",
                            dir: d.dir,
                            lang: d.lang,
                            value: m,
                            textDir: d.textDir,
                            currentFocus: !this._isInvalidDate(m) ? m : this.dropDownDefaultValue,
                            constraints: d.constraints,
                            filterString: d.filterString,
                            datePackage: d.params.datePackage,
                            isDisabledDate: function(a) {
                                return !d.rangeCheck(a, d.constraints)
                            }
                        });
                        this.inherited(arguments)
                    },
                    _getDisplayedValueAttr: function() {
                        return this.textbox.value
                    },
                    _setDisplayedValueAttr: function(a,
                        b) {
                        this._setValueAttr(this.parse(a, this.constraints), b, a)
                    }
                })
            })
        },
        "dijit/form/TimeTextBox": function() {
            define(["dojo/_base/declare", "dojo/keys", "dojo/_base/lang", "../_TimePicker", "./_DateTimeTextBox"], function(d, h, l, f, a) {
                return d("dijit.form.TimeTextBox", a, {
                    baseClass: "dijitTextBox dijitComboBox dijitTimeTextBox",
                    popupClass: f,
                    _selector: "time",
                    value: new Date(""),
                    maxHeight: -1,
                    _onKey: function(a) {
                        if (!this.disabled && !this.readOnly) switch (this.inherited(arguments), a.keyCode) {
                            case h.ENTER:
                            case h.TAB:
                            case h.ESCAPE:
                            case h.DOWN_ARROW:
                            case h.UP_ARROW:
                                break;
                            default:
                                this.defer(function() {
                                    var a = this.get("displayedValue");
                                    this.filterString = a && !this.parse(a, this.constraints) ? a.toLowerCase() : "";
                                    this._opened && this.closeDropDown();
                                    this.openDropDown()
                                })
                        }
                    }
                })
            })
        },
        "dijit/_TimePicker": function() {
            define("dojo/_base/array dojo/date dojo/date/locale dojo/date/stamp dojo/_base/declare dojo/dom-class dojo/dom-construct dojo/_base/kernel dojo/keys dojo/_base/lang dojo/sniff dojo/query dojo/mouse dojo/on ./_WidgetBase ./form/_ListMouseMixin".split(" "), function(d, h, l, f,
                a, b, c, q, k, n, v, m, r, x, w, u) {
                return a("dijit._TimePicker", [w, u], {
                    baseClass: "dijitTimePicker",
                    clickableIncrement: "T00:15:00",
                    visibleIncrement: "T01:00:00",
                    value: new Date,
                    _visibleIncrement: 2,
                    _clickableIncrement: 1,
                    _totalIncrements: 10,
                    constraints: {},
                    serialize: f.toISOString,
                    buildRendering: function() {
                        this.inherited(arguments);
                        this.timeMenu = this.containerNode = this.domNode
                    },
                    setValue: function(a) {
                        q.deprecated("dijit._TimePicker:setValue() is deprecated.  Use set('value', ...) instead.", "", "2.0");
                        this.set("value",
                            a)
                    },
                    _setValueAttr: function(a) {
                        this._set("value", a);
                        this._showText()
                    },
                    _setFilterStringAttr: function(a) {
                        this._set("filterString", a);
                        this._showText()
                    },
                    isDisabledDate: function() {
                        return !1
                    },
                    _getFilteredNodes: function(a, b, c, d) {
                        a = [];
                        for (b = 0; b < this._maxIncrement; b++)(c = this._createOption(b)) && a.push(c);
                        return a
                    },
                    _showText: function() {
                        var a = f.fromISOString;
                        this.domNode.innerHTML = "";
                        this._clickableIncrementDate = a(this.clickableIncrement);
                        this._visibleIncrementDate = a(this.visibleIncrement);
                        var b = 3600 * this._clickableIncrementDate.getHours() +
                            60 * this._clickableIncrementDate.getMinutes() + this._clickableIncrementDate.getSeconds(),
                            c = 3600 * this._visibleIncrementDate.getHours() + 60 * this._visibleIncrementDate.getMinutes() + this._visibleIncrementDate.getSeconds();
                        (this.value || this.currentFocus).getTime();
                        this._refDate = a("T00:00:00");
                        this._refDate.setFullYear(1970, 0, 1);
                        this._clickableIncrement = 1;
                        this._visibleIncrement = c / b;
                        this._maxIncrement = 86400 / b;
                        a = this._getFilteredNodes();
                        d.forEach(a, function(a) {
                            this.domNode.appendChild(a)
                        }, this);
                        !a.length && this.filterString &&
                            (this.filterString = "", this._showText())
                    },
                    constructor: function() {
                        this.constraints = {}
                    },
                    postMixInProperties: function() {
                        this.inherited(arguments);
                        this._setConstraintsAttr(this.constraints)
                    },
                    _setConstraintsAttr: function(a) {
                        for (var b in {
                                clickableIncrement: 1,
                                visibleIncrement: 1
                            }) b in a && (this[b] = a[b]);
                        a.locale || (a.locale = this.lang)
                    },
                    _createOption: function(a) {
                        var d = new Date(this._refDate),
                            k = this._clickableIncrementDate;
                        d.setHours(d.getHours() + k.getHours() * a, d.getMinutes() + k.getMinutes() * a, d.getSeconds() + k.getSeconds() *
                            a);
                        "time" == this.constraints.selector && d.setFullYear(1970, 0, 1);
                        k = l.format(d, this.constraints);
                        if (this.filterString && 0 !== k.toLowerCase().indexOf(this.filterString)) return null;
                        var m = this.ownerDocument.createElement("div");
                        m.className = this.baseClass + "Item";
                        m.date = d;
                        m.idx = a;
                        c.create("div", {
                            "class": this.baseClass + "ItemInner",
                            innerHTML: k
                        }, m);
                        1 > a % this._visibleIncrement && -1 < a % this._visibleIncrement ? b.add(m, this.baseClass + "Marker") : a % this._clickableIncrement || b.add(m, this.baseClass + "Tick");
                        this.isDisabledDate(d) &&
                            b.add(m, this.baseClass + "ItemDisabled");
                        this.value && !h.compare(this.value, d, this.constraints.selector) && (m.selected = !0, b.add(m, this.baseClass + "ItemSelected"), this._selectedDiv = m, b.contains(m, this.baseClass + "Marker") ? b.add(m, this.baseClass + "MarkerSelected") : b.add(m, this.baseClass + "TickSelected"), this._highlightOption(m, !0));
                        return m
                    },
                    onOpen: function() {
                        this.inherited(arguments);
                        this.set("selected", this._selectedDiv)
                    },
                    _onOptionSelected: function(a) {
                        if ((a = a.target.date || a.target.parentNode.date) && !this.isDisabledDate(a)) this._highlighted_option =
                            null, this.set("value", a), this.onChange(a)
                    },
                    onChange: function() {},
                    _highlightOption: function(a, c) {
                        if (a) {
                            if (c) this._highlighted_option && this._highlightOption(this._highlighted_option, !1), this._highlighted_option = a;
                            else {
                                if (this._highlighted_option !== a) return;
                                this._highlighted_option = null
                            }
                            b.toggle(a, this.baseClass + "ItemHover", c);
                            b.contains(a, this.baseClass + "Marker") ? b.toggle(a, this.baseClass + "MarkerHover", c) : b.toggle(a, this.baseClass + "TickHover", c)
                        }
                    },
                    handleKey: function(a) {
                        if (a.keyCode == k.DOWN_ARROW) return this.selectNextNode(),
                            a.stopPropagation(), a.preventDefault(), !1;
                        if (a.keyCode == k.UP_ARROW) return this.selectPreviousNode(), a.stopPropagation(), a.preventDefault(), !1;
                        if (a.keyCode == k.ENTER || a.keyCode === k.TAB) {
                            if (!this._keyboardSelected && a.keyCode === k.TAB) return !0;
                            this._highlighted_option && this._onOptionSelected({
                                target: this._highlighted_option
                            });
                            return a.keyCode === k.TAB
                        }
                    },
                    onHover: function(a) {
                        this._highlightOption(a, !0)
                    },
                    onUnhover: function(a) {
                        this._highlightOption(a, !1)
                    },
                    onSelect: function(a) {
                        this._highlightOption(a, !0)
                    },
                    onDeselect: function(a) {
                        this._highlightOption(a, !1)
                    },
                    onClick: function(a) {
                        this._onOptionSelected({
                            target: a
                        })
                    }
                })
            })
        },
        "widgets/Geoprocessing/editors/simpleEditors": function() {
            define("dojo/_base/declare dojo/_base/lang dojo/_base/array dojo/_base/html dojo/on dojo/Deferred dojo/promise/all dijit/form/NumberTextBox dijit/form/Select dijit/form/TextBox dijit/form/DateTextBox dijit/form/TimeTextBox jimu/dijit/CheckBox jimu/dijit/URLInput jimu/dijit/DrawBox jimu/dijit/LayerChooserFromMap esri/SpatialReference esri/tasks/LinearUnit esri/tasks/FeatureSet esri/layers/FeatureLayer esri/tasks/query esri/tasks/QueryTask esri/request ../BaseEditor".split(" "),
                function(d, h, l, f, a, b, c, q, k, n, v, m, r, x, w, u, e, t, B, F, C, D, y, s) {
                    n = {};
                    n.UnsupportEditor = d(s, {
                        baseClass: "jimu-gp-editor-base jimu-gp-editor-unsupport",
                        postCreate: function() {
                            this.inherited(arguments);
                            f.setAttr(this.domNode, "innerHTML", this.message)
                        },
                        getValue: function() {
                            return null
                        }
                    });
                    n.ShowMessage = d(s, {
                        baseClass: "jimu-gp-editor-base jimu-gp-editor-message",
                        postCreate: function() {
                            this.inherited(arguments);
                            f.setAttr(this.domNode, "innerHTML", this.message)
                        },
                        getValue: function() {
                            return null
                        }
                    });
                    n.GeneralEditorWrapperEditor =
                        d(s, {
                            baseClass: "jimu-gp-editor-base jimu-gp-editor-wrapper",
                            postCreate: function() {
                                this.inherited(arguments);
                                f.setStyle(this.gEditor.domNode, "width", "100%");
                                this.gEditor.placeAt(this.domNode)
                            },
                            getValue: function() {
                                return this.gEditor.getValue()
                            }
                        });
                    n.MultiValueChooser = d(s, {
                        baseClass: "jimu-gp-editor-base jimu-gp-editor-multivalue-chooser",
                        postCreate: function() {
                            this.inherited(arguments);
                            this.checkBoxs = [];
                            l.forEach(this.param.choiceList, function(a) {
                                a = new r({
                                    label: a,
                                    checked: this.param.defaultValue && -1 < this.param.defaultValue.indexOf(a) ?
                                        !0 : !1
                                });
                                a.placeAt(this.domNode);
                                this.checkBoxs.push(a)
                            }, this)
                        },
                        getValue: function() {
                            var a = [];
                            l.forEach(this.checkBoxs, function(g) {
                                g.checked && a.push(g.label)
                            }, this);
                            return a
                        }
                    });
                    n.MultiValueEditor = d(s, {
                        baseClass: "jimu-gp-editor-base jimu-gp-editor-multivalue",
                        postCreate: function() {
                            this.inherited(arguments);
                            this.editors = [];
                            var a = f.create("div", {
                                    "class": "input-list"
                                }, this.domNode),
                                g = h.clone(this.param, a);
                            g.dataType = this.param.dataType.substr(13, this.param.dataType.length);
                            g.originParam = this.param;
                            setTimeout(h.hitch(this,
                                this._initChildEditors, g, a), 100);
                            this._createAddInputNode(g, a)
                        },
                        _initChildEditors: function(a, g) {
                            this.param.defaultValue && 0 < this.param.defaultValue.length ? l.forEach(this.param.defaultValue, function(b) {
                                a.defaultValue = b;
                                this._createSingleInputContainerNode(a, g)
                            }, this) : (delete a.defaultValue, this._createSingleInputContainerNode(a, g))
                        },
                        getValue: function() {
                            var a = [];
                            l.forEach(this.editors, function(g) {
                                a.push(g.getValue())
                            }, this);
                            return a
                        },
                        getGPValue: function() {
                            var a = new b,
                                g = [];
                            l.forEach(this.editors, function(a) {
                                    g.push(a.getGPValue())
                                },
                                this);
                            c(g).then(function(g) {
                                a.resolve(g)
                            }, function(g) {
                                a.reject(g)
                            });
                            return a
                        },
                        destroy: function() {
                            l.forEach(this.editors, function(a) {
                                a.destroy()
                            });
                            this.editors = [];
                            this.inherited(arguments)
                        },
                        _createSingleInputContainerNode: function(a, g) {
                            var b = f.create("div", {
                                    "class": "single-input"
                                }, g),
                                c = this.editorManager.createEditor(a, "input", this.context),
                                e = f.getContentBox(this.domNode).w - 30 - 3;
                            f.setStyle(c.domNode, {
                                display: "inline-block",
                                width: e + "px"
                            });
                            c.placeAt(b);
                            this._createRemoveInputNode(b);
                            b.inputEditor = c;
                            this.editors.push(c);
                            return b
                        },
                        _createRemoveInputNode: function(b) {
                            var g = f.create("div", {
                                "class": "remove",
                                innerHTML: "-"
                            }, b);
                            this.own(a(g, "click", h.hitch(this, function() {
                                this.editors.splice(this.editors.indexOf(b.inputEditor), 1);
                                b.inputEditor.destroy();
                                f.destroy(b)
                            })));
                            return g
                        },
                        _createAddInputNode: function(b, g) {
                            var c = f.create("div", {
                                    "class": "add-input"
                                }, this.domNode),
                                e = f.create("div", {
                                    "class": "add-btn",
                                    innerHTML: "+"
                                }, c);
                            this.own(a(e, "click", h.hitch(this, function() {
                                this._createSingleInputContainerNode(b,
                                    g)
                            })));
                            return c
                        }
                    });
                    n.LinerUnitEditor = d(s, {
                        baseClass: "jimu-gp-editor-base jimu-gp-editor-liner-unit",
                        postCreate: function() {
                            this.inherited(arguments);
                            this.distance = void 0 === this.param.defaultValue ? "" : this.param.defaultValue.distance;
                            this.units = void 0 === this.param.defaultValue ? "" : this.param.defaultValue.units;
                            void 0 === this.distance && (this.distance = 0);
                            void 0 === this.units && (this.units = "esriMeters");
                            this.inputDijit = new q({
                                value: this.distance
                            });
                            this.selectDijit = new k({
                                value: this.units,
                                options: [{
                                    label: "Meters",
                                    value: "esriMeters"
                                }, {
                                    label: "Kilometers",
                                    value: "esriKilometers"
                                }, {
                                    label: "Feet",
                                    value: "esriFeet"
                                }, {
                                    label: "Miles",
                                    value: "esriMiles"
                                }, {
                                    label: "NauticalMiles",
                                    value: "esriNauticalMiles"
                                }, {
                                    label: "Yards",
                                    value: "esriYards"
                                }]
                            });
                            this.inputDijit.placeAt(this.domNode);
                            this.selectDijit.placeAt(this.domNode)
                        },
                        getValue: function() {
                            var a = new t;
                            a.distance = this.inputDijit.getValue();
                            a.units = this.selectDijit.getValue();
                            return a
                        }
                    });
                    n.DateTimeEditor = d(s, {
                        baseClass: "jimu-gp-editor-base jimu-gp-editor-datatime",
                        postCreate: function() {
                            var a =
                                new Date,
                                g = new Date(this.param.defaultValue);
                            this.value = this.param.defaultValue ? new Date(g.getFullYear(), g.getMonth(), g.getDay(), g.getHours(), g.getMinutes(), g.getSeconds()) : new Date(a.getFullYear(), a.getMonth(), a.getDay(), a.getHours(), a.getMinutes(), a.getSeconds());
                            this.inherited(arguments);
                            this.dateDijit = new v({
                                value: this.value,
                                style: {
                                    width: "60%"
                                },
                                constraints: {
                                    datePattern: "yyyy-MM-dd"
                                }
                            });
                            this.timeDijit = new m({
                                value: this.value,
                                style: {
                                    width: "40%"
                                },
                                constraints: {
                                    timePattern: "HH:mm:ss",
                                    clickableIncrement: "T00:15:00",
                                    visibleIncrement: "T00:15:00"
                                }
                            });
                            this.dateDijit.placeAt(this.domNode);
                            this.timeDijit.placeAt(this.domNode)
                        },
                        startup: function() {
                            this.dateDijit.startup();
                            this.timeDijit.startup()
                        },
                        getValue: function() {
                            var a = new Date,
                                g = this.dateDijit.getValue(),
                                b = this.timeDijit.getValue();
                            a.setFullYear(g.getFullYear());
                            a.setMonth(g.getMonth());
                            a.setDate(g.getDate());
                            a.setHours(b.getHours());
                            a.setMinutes(b.getMinutes());
                            a.setSeconds(b.getSeconds());
                            return a.getTime()
                        }
                    });
                    n.SelectFeatureSetFromDraw = d([s, w], {
                        constructor: function(a) {
                            this.drawLayerId =
                                a.param.name
                        },
                        postCreate: function() {
                            this.inherited(arguments);
                            f.addClass(this.domNode, "jimu-gp-editor-draw");
                            f.addClass(this.domNode, "jimu-gp-editor-base");
                            this.startup()
                        },
                        getValue: function() {
                            if (this.drawLayer) {
                                var a = new B;
                                a.features = this.drawLayer.graphics;
                                return a
                            }
                            return null
                        }
                    });
                    n.SelectFeatureSetFromLayer = d([s, u], {
                        postCreate: function() {
                            this.multiple = !1;
                            this.createMapResponse = this.map.webMapResponse;
                            this.showLayerTypes = ["FeatureLayer"];
                            this.inherited(arguments);
                            f.addClass(this.domNode, "jimu-gp-editor-sffl");
                            f.addClass(this.domNode, "jimu-gp-editor-base")
                        },
                        getValue: function() {
                            return this.value
                        },
                        getGPValue: function() {
                            var a = this.map.getLayer(this.value);
                            if (a.url) {
                                var g = new C;
                                g.where = "1=1";
                                return a.queryFeatures(g)
                            }
                            g = new B;
                            g.features = a.graphics;
                            return this.wrapValueToDeferred(g)
                        }
                    });
                    n.GetUrlObjectFromLayer = d([s, k], {
                        postCreate: function() {
                            this.options = [];
                            l.forEach(this.map.graphicsLayerIds, function(a) {
                                a = this.map.getLayer(a);
                                if ("esri.layers.FeatureLayer" === a.declaredClass && (!this.geometryType || a.geometryType ===
                                        this.geometryType)) this.options.push({
                                    label: a.label || a.title || a.name || a.id,
                                    value: a.id
                                })
                            }, this);
                            this.inherited(arguments);
                            this.setValue(this.value);
                            f.addClass(this.domNode, "jimu-gp-editor-sffl");
                            f.addClass(this.domNode, "jimu-gp-editor-base")
                        },
                        getValue: function() {
                            return this.value
                        },
                        getGPValue: function() {
                            var a, g;
                            l.forEach(this.map.graphicsLayerIds, function(g) {
                                var b = this.map.getLayer(g);
                                g === this.getValue() && (a = b.url)
                            }, this);
                            g = {
                                url: a
                            };
                            g = this.wrapGPValue(g);
                            return this.wrapValueToDeferred(g)
                        }
                    });
                    n.SelectFeatureSetFromUrl =
                        d([s, x], {
                            postCreate: function() {
                                this.inherited(arguments);
                                f.addClass(this.domNode, "jimu-gp-editor-sffu");
                                f.addClass(this.domNode, "jimu-gp-editor-base");
                                this.queryTask = new D(this.value)
                            },
                            getValue: function() {
                                return this.value
                            },
                            getGPValue: function() {
                                var a = new C;
                                a.where = "1=1";
                                a.returnGeometry = !0;
                                a.outFields = l.map(this.querySetting.fields, function(a) {
                                    return a.name
                                }, this);
                                a.outSpatialReference = new e(this.querySetting.spatialReference.wkid);
                                return this.queryTask.execute(a)
                            }
                        });
                    n.ObjectUrlEditor = d([s, x], {
                        postCreate: function() {
                            this.inherited(arguments);
                            f.addClass(this.domNode, "jimu-gp-editor-ourl");
                            f.addClass(this.domNode, "jimu-gp-editor-base")
                        },
                        getValue: function() {
                            return this.value
                        },
                        getGPValue: function() {
                            var a = {
                                    url: this.getValue()
                                },
                                a = this.wrapGPValue(a);
                            return this.wrapValueToDeferred(a)
                        }
                    });
                    n.LayerFieldChooser = d([s, k], {
                        postCreate: function() {
                            this.options = [];
                            this.inherited(arguments);
                            this.setValue(this.value);
                            f.addClass(this.domNode, "jimu-gp-editor-lfc");
                            f.addClass(this.domNode, "jimu-gp-editor-base")
                        },
                        update: function(a) {
                            this.inherited(arguments);
                            var g = [],
                                b;
                            this.set("options", []);
                            this.set("value", "");
                            l.some(this.map.graphicsLayerIds, function(g) {
                                if (g === a) return b = this.map.getLayer(a), !0
                            }, this);
                            b && this._requestLayerInfo(b.url).then(h.hitch(this, function(a) {
                                a && a.fields && (a = l.filter(a.fields, function(a) {
                                    return "esriFieldTypeOID" !== a.type && "esriFieldTypeGeometry" !== a.type
                                }), g = l.map(a, function(a) {
                                    return {
                                        label: a.alias || a.name,
                                        value: a.name
                                    }
                                }, this), this.set("options", g))
                            }))
                        },
                        _requestLayerInfo: function(a) {
                            return y({
                                url: a,
                                content: {
                                    f: "json"
                                },
                                handleAs: "json",
                                callbackParamName: "callback"
                            })
                        }
                    });
                    return n
                })
        },
        "jimu/dijit/LayerChooserFromMap": function() {
            define("dojo/_base/declare dijit/_WidgetBase dijit/_TemplatedMixin ./_BasicLayerChooserFromMap dojo/text!./templates/_TreeNode.html jimu/dijit/_Tree jimu/dijit/LoadingIndicator dojo/store/Memory dojo/Deferred dojo/store/Observable dijit/tree/ObjectStoreModel dojo/promise/all dojo/_base/lang dojo/_base/html dojo/_base/array dojo/query dojo/on jimu/utils".split(" "), function(d,
                h, l, f, a, b, c, q, k, n, v, m, r, x, w, u, e, t) {
                var B = d([b], {
                    postCreate: function() {
                        this.inherited(arguments)
                    },
                    isLeafItem: function(a) {
                        return a && a.layerInfo && 0 < a.layerInfo.getSubLayers().length ? !1 : !0
                    }
                });
                return d([f], {
                    templateString: '<div style="width:100%;height:100%"><div class="error-tip-section"><span class="error-icon"></span><span class="error-tip" data-dojo-attach-point="errTip">${nls.noLayersTip}</span></div></div>',
                    createMapResponse: null,
                    multiple: !0,
                    showLayerTypes: [],
                    geometryTypes: [],
                    postCreate: function() {
                        this.inherited(arguments)
                    },
                    _onLayerInfosChanged: function(a, b) {
                        this._buildTree(this.layerInfosObj)
                    },
                    _isLayerTypeSupported: function(a) {
                        return !0
                    },
                    _isLayerTypeSupportedForSublayers: function(a) {
                        var b = new k,
                            c = [];
                        for (a.traversal(function(a) {
                                c.push(a.getLayerType())
                            }); a;) c.push(a.getLayerType()), a = a.parentLayerInfo;
                        m(c).then(r.hitch(this, function(a) {
                            if (!this.showLayerTypes || 0 === this.showLayerTypes.length) b.resolve(!0);
                            else {
                                for (var c = 0; c < a.length; c++)
                                    for (var e =
                                            0; e < this.showLayerTypes.length; e++)
                                        if (a[c] === this.showLayerTypes[e]) {
                                            b.resolve(!0);
                                            return
                                        }
                                b.resolve(!1)
                            }
                        }));
                        return b
                    },
                    _isLayerTypeSupportedForParentsLayers: function(a) {
                        for (var b = new k, c = []; !a;) c.push(a.getLayerType()), a = a.parentLayerInfo;
                        m(c).then(r.hitch(this, function(a) {
                            for (var c = 0; c < a.length; c++)
                                for (var e = 0; e < this.showLayerTypes.length; e++) a[c] === this.showLayerTypes[e] && b.resolve(!0);
                            b.resolve(!1)
                        }));
                        return b
                    },
                    _isGeoTypeSupported: function(a, b) {
                        var c = a.layerObject;
                        return "FeatureLayer" === b && 0 < this.geometryTypes.length ?
                            0 <= w.indexOf(this.geometryTypes, c.geometryType) : !0
                    },
                    _validateBeforeAddItem: function(a) {
                        a = new k;
                        a.resolve(!0);
                        return a
                    },
                    _mayHaveChildren: function(a) {
                        return "root" === a.type ? !0 : a.layerInfo && 0 < a.layerInfo.getSubLayers().length ? !0 : !1
                    },
                    _addItem: function(a, b) {
                        var c = null,
                            e = b.getLayerType(),
                            d = this._isLayerTypeSupportedForSublayers(b),
                            k = this._validateBeforeAddItem(b);
                        m({
                            layerType: e,
                            isLayerTypeSupported: d,
                            valid: k
                        }).then(r.hitch(this, function(g) {
                            g.isLayerTypeSupported && (g.valid && this._isGeoTypeSupported(b, g.layerType)) &&
                                (this._id++, c = {
                                    name: b.title,
                                    parent: a,
                                    layerInfo: b,
                                    type: g.layerType,
                                    layerClass: b.layerObject.declaredClass,
                                    id: this._id.toString()
                                }, this._store.add(c))
                        }));
                        return c
                    },
                    _createTree: function() {
                        var a = this._getRootItem(),
                            a = new q({
                                data: [a],
                                getChildren: function(a) {
                                    return this.query({
                                        parent: a.id
                                    })
                                }
                            });
                        this._store = new n(a);
                        a = new v({
                            store: this._store,
                            query: {
                                id: "root"
                            },
                            mayHaveChildren: r.hitch(this, this._mayHaveChildren)
                        });
                        this.tree = new B({
                            multiple: this.multiple,
                            model: a,
                            showRoot: !1,
                            leafType: this._leafType,
                            style: {
                                width: "100%"
                            },
                            onOpen: r.hitch(this, function(a, b) {
                                "root" !== a.id && this._onTreeOpen(a, b)
                            }),
                            onClick: r.hitch(this, function(a, b, c) {
                                this._onTreeClick(a, b, c);
                                this.emit("tree-click", a, b, c)
                            }),
                            getIconStyle: r.hitch(this, function(a, b) {
                                var c = null;
                                if (!a || "root" === a.id) return null;
                                var e = {
                                        width: "20px",
                                        height: "20px",
                                        backgroundRepeat: "no-repeat",
                                        backgroundPosition: "center center",
                                        backgroundImage: ""
                                    },
                                    d = window.location.protocol + "//" + window.location.host + require.toUrl("jimu"),
                                    g = this._getIconImageName(a, b);
                                g && (e.backgroundImage = "url(" +
                                    d + "/css/images/" + g + ")", c = e);
                                return c
                            })
                        });
                        x.addClass(this.tree.domNode, this._treeClass);
                        this.tree.placeAt(this.shelter.domNode, "before")
                    },
                    _getIconImageName: function(a, b) {
                        var c = "";
                        if ("ArcGISDynamicMapServiceLayer" === a.type || "ArcGISTiledMapServiceLayer" === a.type) c = b ? "mapserver_open.png" : "mapserver_close.png";
                        else if ("GroupLayer" === a.type) c = b ? "group_layer2.png" : "group_layer1.png";
                        else if ("FeatureLayer" === a.type) {
                            var e = t.getTypeByGeometryType(a.layerInfo.layerObject.geometryType);
                            "point" === e ? c = "point_layer1.png" :
                                "polyline" === e ? c = "line_layer1.png" : "polygon" === e && (c = "polygon_layer1.png")
                        }
                        else c = b ? "mapserver_open.png" : "mapserver_close.png";
                        return c
                    },
                    _onTreeOpen: function(a, b) {
                        var c = [],
                            e = [],
                            c = a.layerInfo.getSubLayers();
                        a.checked || (this.shelter.show(), e = w.map(c, r.hitch(this, function(a) {
                            return a.getLayerObject()
                        })), m(e).then(r.hitch(this, function() {
                            this.domNode && (w.forEach(c, r.hitch(this, function(b) {
                                this._addItem(a.id, b)
                            })), a.checked = !0, this.shelter.hide())
                        }), r.hitch(this, function(a) {
                            console.error(a);
                            this.shelter.hide()
                        })))
                    }
                })
            })
        },
        "jimu/dijit/_BasicLayerChooserFromMap": function() {
            define("dojo/_base/declare dijit/_WidgetBase dijit/_TemplatedMixin dijit/_WidgetsInTemplateMixin dojo/Evented dojo/_base/lang dojo/_base/html dojo/_base/array dojo/query dojo/on dojo/Deferred dojo/promise/all dojo/store/Memory dojo/store/Observable dijit/tree/ObjectStoreModel jimu/dijit/_Tree dijit/registry esri/request jimu/dijit/Message jimu/dijit/LoadingIndicator jimu/LayerInfos/LayerInfos".split(" "), function(d, h, l, f, a, b, c, q, k, n, v, m, r, x, w, u, e,
                t, B, F, C) {
                return d([h, l, f, a], {
                    templateString: '<div style="width:100%;"><div class="error-tip-section"><span class="error-icon"></span><span class="error-tip" data-dojo-attach-point="errTip">${nls.noLayersTip}</span></div></div>',
                    _store: null,
                    _id: 0,
                    _treeClass: "layer-chooser-tree",
                    _leafType: "",
                    _layerTypes: [],
                    createMapResponse: null,
                    multiple: !1,
                    postMixInProperties: function() {
                        this.nls = window.jimuNls.basicLayerChooserFromMap
                    },
                    postCreate: function() {
                        this.inherited(arguments);
                        c.addClass(this.domNode, "jimu-basic-layer-chooser-from-map");
                        this.multiple = !!this.multiple;
                        this.shelter = new F({
                            hidden: !0
                        });
                        this.shelter.placeAt(this.domNode);
                        this.shelter.startup();
                        this._createTree();
                        this.createMapResponse && this.setCreateMapResponse(this.createMapResponse)
                    },
                    getSelectedItems: function() {
                        return this.tree.getSelectedItems()
                    },
                    setCreateMapResponse: function(a) {
                        this.createMapResponse = a;
                        C.getInstance(this.createMapResponse.map, this.createMapResponse.itemInfo).then(b.hitch(this, function(a) {
                            this.layerInfosObj =
                                a;
                            this.own(n(this.layerInfosObj, "layerInfosChanged", b.hitch(this, this._onLayerInfosChanged)));
                            this._buildTree(this.layerInfosObj)
                        }))
                    },
                    _onLayerInfosChanged: function(a, b) {
                        a && ("added" === b ? this._addDirectLayerInfo(a) : "removed" === b && this._removeDirectLayerInfo(a))
                    },
                    _addDirectLayerInfo: function(a) {
                        a && a.getLayerObject().then(b.hitch(this, function() {
                            this._isLayerTypeSupported(a.layerObject.declaredClass) && this._addItem("root", a)
                        }), b.hitch(this, function(a) {
                            console.error(a)
                        }))
                    },
                    _removeDirectLayerInfo: function(a) {
                        if (a) {
                            var c =
                                a.id;
                            a = this.tree.getAllTreeNodeWidgets();
                            a = q.filter(a, b.hitch(this, function(a) {
                                return "root" === a.item.id ? !1 : c === a.item.layerInfo.id
                            }));
                            0 < a.length && (a = q.map(a, b.hitch(this, function(a) {
                                return a.item.id
                            })), q.forEach(a, b.hitch(this, function(a) {
                                this.tree.removeItem(a)
                            })))
                        }
                    },
                    _buildTree: function(a) {
                        this._clear();
                        a = a.getLayerInfoArray();
                        0 !== a.length && q.forEach(a, b.hitch(this, function(a) {
                            this._addDirectLayerInfo(a)
                        }))
                    },
                    _getRestInfo: function(a) {
                        return t({
                            url: a,
                            content: {
                                f: "json"
                            },
                            handleAs: "json",
                            callbackParamName: "callback",
                            timeout: 2E4
                        })
                    },
                    _clear: function() {
                        var a = this._store.query({
                            parent: "root"
                        });
                        q.forEach(a, b.hitch(this, function(a) {
                            a && "root" !== a.id && this._store.remove(a.id)
                        }))
                    },
                    _isLayerTypeSupported: function(a) {
                        return 0 <= q.indexOf(this._layerTypes, a)
                    },
                    _validateBeforeAddItem: function(a) {
                        return !!a
                    },
                    _addItem: function(a, b) {
                        var c = null;
                        this._validateBeforeAddItem(b) && (this._id++, c = {
                            name: b.title,
                            parent: a,
                            layerInfo: b,
                            type: b.layerObject.type || "UNKNOWN",
                            layerClass: b.layerObject.declaredClass
                        }, c.id = this._id.toString(), this._store.add(c));
                        return c
                    },
                    _getRootItem: function() {
                        return {
                            id: "root",
                            name: "Map Root",
                            type: "root"
                        }
                    },
                    _createTree: function() {
                        var a = this._getRootItem(),
                            a = new r({
                                data: [a],
                                getChildren: function(a) {
                                    return this.query({
                                        parent: a.id
                                    })
                                }
                            });
                        this._store = new x(a);
                        a = new w({
                            store: this._store,
                            query: {
                                id: "root"
                            },
                            mayHaveChildren: b.hitch(this, this._mayHaveChildren)
                        });
                        this.tree = new u({
                            multiple: this.multiple,
                            model: a,
                            showRoot: !1,
                            leafType: this._leafType,
                            style: {
                                width: "100%"
                            },
                            onOpen: b.hitch(this, function(a, b) {
                                "root" !== a.id && this._onTreeOpen(a,
                                    b)
                            }),
                            onClick: b.hitch(this, function(a, b, c) {
                                this._onTreeClick(a, b, c);
                                this.emit("tree-click", a, b, c)
                            }),
                            getIconStyle: b.hitch(this, function(a, b) {
                                var c = null;
                                if (!a || "root" === a.id) return null;
                                var g = {
                                        width: "20px",
                                        height: "20px",
                                        backgroundRepeat: "no-repeat",
                                        backgroundPosition: "center center",
                                        backgroundImage: ""
                                    },
                                    e = window.location.protocol + "//" + window.location.host + require.toUrl("jimu"),
                                    d = this._getIconImageName(a, b);
                                d && (g.backgroundImage = "url(" + e + "/css/images/" + d + ")", c = g);
                                return c
                            })
                        });
                        c.addClass(this.tree.domNode,
                            this._treeClass);
                        this.tree.placeAt(this.shelter.domNode, "before")
                    },
                    _getIconImageName: function(a, b) {},
                    _mayHaveChildren: function(a) {
                        return a.type !== this._leafType
                    },
                    _onTreeOpen: function(a, b) {},
                    _onTreeClick: function(a, b, c) {},
                    destroy: function() {
                        this.shelter && (this.shelter.destroy(), this.shelter = null);
                        this.inherited(arguments)
                    }
                })
            })
        },
        "dojo/store/Observable": function() {
            define(["../_base/kernel", "../_base/lang", "../when", "../_base/array"], function(d, h, l, f) {
                d = function(a) {
                    function b(b, c) {
                        var d = a[b];
                        d && (a[b] =
                            function(k) {
                                var f;
                                "put" === b && (f = a.getIdentity(k));
                                if (n) return d.apply(this, arguments);
                                n = !0;
                                try {
                                    var u = d.apply(this, arguments);
                                    l(u, function(a) {
                                        c("object" == typeof a && a || k, f)
                                    });
                                    return u
                                }
                                finally {
                                    n = !1
                                }
                            })
                    }
                    var c = [],
                        d = 0;
                    a = h.delegate(a);
                    a.notify = function(a, b) {
                        d++;
                        for (var k = c.slice(), f = 0, h = k.length; f < h; f++) k[f](a, b)
                    };
                    var k = a.query;
                    a.query = function(b, m) {
                        m = m || {};
                        var r = k.apply(this, arguments);
                        if (r && r.forEach) {
                            var n = h.mixin({}, m);
                            delete n.start;
                            delete n.count;
                            var w = a.queryEngine && a.queryEngine(b, n),
                                u = d,
                                e = [],
                                t;
                            r.observe =
                                function(b, k) {
                                    1 == e.push(b) && c.push(t = function(b, c) {
                                        l(r, function(s) {
                                            var h = s.length != m.count,
                                                g, A;
                                            if (++u != d) throw Error("Query is out of date, you must observe() the query prior to any data modifications");
                                            var p, r = -1,
                                                n = -1;
                                            if (void 0 !== c) {
                                                g = 0;
                                                for (A = s.length; g < A; g++) {
                                                    var l = s[g];
                                                    if (a.getIdentity(l) == c) {
                                                        p = l;
                                                        r = g;
                                                        (w || !b) && s.splice(g, 1);
                                                        break
                                                    }
                                                }
                                            }
                                            if (w) {
                                                if (b && (w.matches ? w.matches(b) : w([b]).length)) g = -1 < r ? r : s.length, s.splice(g, 0, b), n = f.indexOf(w(s), b), s.splice(g, 1), m.start && 0 == n || !h && n == s.length ? n = -1 : s.splice(n,
                                                    0, b)
                                            }
                                            else b && (void 0 !== c ? n = r : m.start || (n = a.defaultIndex || 0, s.splice(n, 0, b)));
                                            if ((-1 < r || -1 < n) && (k || !w || r != n)) {
                                                h = e.slice();
                                                for (g = 0; s = h[g]; g++) s(b || p, r, n)
                                            }
                                        })
                                    });
                                    var h = {};
                                    h.remove = h.cancel = function() {
                                        var a = f.indexOf(e, b); - 1 < a && (e.splice(a, 1), e.length || c.splice(f.indexOf(c, t), 1))
                                    };
                                    return h
                                }
                        }
                        return r
                    };
                    var n;
                    b("put", function(b, c) {
                        a.notify(b, c)
                    });
                    b("add", function(b) {
                        a.notify(b)
                    });
                    b("remove", function(b) {
                        a.notify(void 0, b)
                    });
                    return a
                };
                h.setObject("dojo.store.Observable", d);
                return d
            })
        },
        "dijit/tree/ObjectStoreModel": function() {
            define("dojo/_base/array dojo/aspect dojo/_base/declare dojo/Deferred dojo/_base/lang dojo/when ../Destroyable".split(" "),
                function(d, h, l, f, a, b, c) {
                    return l("dijit.tree.ObjectStoreModel", c, {
                        store: null,
                        labelAttr: "name",
                        labelType: "text",
                        root: null,
                        query: null,
                        constructor: function(b) {
                            a.mixin(this, b);
                            this.childrenCache = {}
                        },
                        getRoot: function(c, d) {
                            if (this.root) c(this.root);
                            else {
                                var f = this.store.query(this.query);
                                f.then && this.own(f);
                                b(f, a.hitch(this, function(b) {
                                    if (1 != b.length) throw Error("dijit.tree.ObjectStoreModel: root query returned " + b.length + " items, but must return exactly one");
                                    this.root = b[0];
                                    c(this.root);
                                    f.observe && f.observe(a.hitch(this,
                                        function(a) {
                                            this.onChange(a)
                                        }), !0)
                                }), d)
                            }
                        },
                        mayHaveChildren: function() {
                            return !0
                        },
                        getChildren: function(c, d, f) {
                            var h = this.store.getIdentity(c);
                            if (this.childrenCache[h]) b(this.childrenCache[h], d, f);
                            else {
                                var m = this.childrenCache[h] = this.store.getChildren(c);
                                m.then && this.own(m);
                                m.observe && this.own(m.observe(a.hitch(this, function(d, k, f) {
                                    this.onChange(d);
                                    k != f && b(m, a.hitch(this, "onChildrenChange", c))
                                }), !0));
                                b(m, d, f)
                            }
                        },
                        isItem: function() {
                            return !0
                        },
                        getIdentity: function(a) {
                            return this.store.getIdentity(a)
                        },
                        getLabel: function(a) {
                            return a[this.labelAttr]
                        },
                        newItem: function(a, b, c, d) {
                            return this.store.put(a, {
                                parent: b,
                                before: d
                            })
                        },
                        pasteItem: function(b, c, h, l, m, r) {
                            var x = new f;
                            if (c === h && !l && !r) return x.resolve(!0), x;
                            c && !l ? this.getChildren(c, a.hitch(this, function(a) {
                                a = [].concat(a);
                                var m = d.indexOf(a, b);
                                a.splice(m, 1);
                                this.onChildrenChange(c, a);
                                x.resolve(this.store.put(b, {
                                    overwrite: !0,
                                    parent: h,
                                    oldParent: c,
                                    before: r
                                }))
                            })) : x.resolve(this.store.put(b, {
                                overwrite: !0,
                                parent: h,
                                oldParent: c,
                                before: r
                            }));
                            return x
                        },
                        onChange: function() {},
                        onChildrenChange: function() {},
                        onDelete: function() {}
                    })
                })
        },
        "jimu/dijit/_Tree": function() {
            define("dojo/_base/declare dijit/_WidgetBase dijit/_TemplatedMixin dojo/text!./templates/_TreeNode.html dojo/_base/lang dojo/_base/html dojo/_base/array dojo/_base/event dojo/query dojo/on dojo/Evented dijit/registry dijit/Tree jimu/utils".split(" "), function(d, h, l, f, a, b, c, q, k, n, v, m, r, x) {
                var w = d([r._TreeNode, v], {
                    templateString: f,
                    declaredClass: "jimu._TreeNode",
                    isLeaf: !1,
                    groupId: "",
                    postCreate: function() {
                        this.inherited(arguments);
                        b.addClass(this.domNode, "jimu-tree-node");
                        this.isLeaf = !!this.isLeaf;
                        this.groupId ? (this.checkNode = b.toDom('<input type="radio" />'), this.checkNode.name = this.groupId) : this.checkNode = b.toDom('<input type="checkbox" />');
                        b.addClass(this.checkNode, "jimu-tree-check-node");
                        b.place(this.checkNode, this.contentNode, "first");
                        this.own(n(this.checkNode, "click", a.hitch(this, this._onClick)));
                        this.isLeaf ? b.setStyle(this.checkNode, "display", "inline") : b.setStyle(this.checkNode, "display", "none")
                    },
                    select: function() {
                        this.isLeaf && (this.checkNode.checked = !0)
                    },
                    unselect: function() {
                        this.isLeaf && (this.checkNode.checked = !1)
                    },
                    _onClick: function(a) {
                        (a.target || a.srcElement) === this.checkNode ? this.tree._onCheckNodeClick(this, this.checkNode.checked, a) : this.tree._onClick(this, a)
                    },
                    _onChange: function() {
                        this.isLeaf && setTimeout(a.hitch(this, function() {
                            this.checkNode.checked ? this.emit("tn-select", this) : this.emit("tn-unselect", this)
                        }), 100)
                    },
                    destroy: function() {
                        delete this.tree;
                        this.inherited(arguments)
                    }
                });
                return d([r, v], {
                    declaredClass: "jimu._Tree",
                    leafType: "",
                    multiple: !0,
                    uniqueId: "",
                    postMixInProperties: function() {
                        this.inherited(arguments);
                        this.uniqueId = "tree_" + x.getRandomString()
                    },
                    postCreate: function() {
                        this.inherited(arguments);
                        b.addClass(this.domNode, "jimu-tree")
                    },
                    removeItem: function(a) {
                        this.model.store.remove(a)
                    },
                    getAllItems: function() {
                        var b = this.getAllTreeNodeWidgets();
                        return c.map(b, a.hitch(this, function(b) {
                            var c = a.mixin({}, b.item);
                            c.selected = b.checkNode.checked;
                            return c
                        }))
                    },
                    getSelectedItems: function() {
                        var b = this.getAllTreeNodeWidgets(),
                            b = c.filter(b, a.hitch(this,
                                function(a) {
                                    return a.checkNode.checked
                                }));
                        return c.map(b, a.hitch(this, function(a) {
                            return a.item
                        }))
                    },
                    getFilteredItems: function(b) {
                        var e = this.getAllTreeNodeWidgets(),
                            e = c.map(e, a.hitch(this, function(b) {
                                var c = a.mixin({}, b.item);
                                c.selected = b.checkNode.checked;
                                return c
                            }));
                        return c.filter(e, a.hitch(this, function(a) {
                            return b(a)
                        }))
                    },
                    getTreeNodeByItemId: function(a) {
                        for (var b = this._getAllTreeNodeDoms(), c = 0; c < b.length; c++) {
                            var d = m.byNode(b[c]);
                            if (d.item.id.toString() === a.toString()) return d
                        }
                        return null
                    },
                    selectItem: function(a) {
                        (a =
                            this.getTreeNodeByItemId(a)) && a.isLeaf && a.select()
                    },
                    unselectItem: function(a) {
                        (a = this.getTreeNodeByItemId(a)) && a.isLeaf && a.unselect()
                    },
                    getAllLeafTreeNodeWidgets: function() {
                        var b = this.getAllTreeNodeWidgets();
                        return c.filter(b, a.hitch(this, function(a) {
                            return a.isLeaf
                        }))
                    },
                    getAllTreeNodeWidgets: function() {
                        var b = this._getAllTreeNodeDoms();
                        return c.map(b, a.hitch(this, function(a) {
                            return m.byNode(a)
                        }))
                    },
                    isLeafItem: function(a) {
                        return a && a.type === this.leafType
                    },
                    _getAllTreeNodeDoms: function() {
                        return k(".dijitTreeNode",
                            this.domNode)
                    },
                    _createTreeNode: function(a) {
                        a.isLeaf = this.isLeafItem(a.item);
                        this.multiple || (a.groupId = this.uniqueId);
                        return new w(a)
                    },
                    _onTreeNodeSelect: function(b) {
                        b = {
                            item: a.mixin({}, b.item),
                            treeNode: b
                        };
                        this.emit("item-select", b)
                    },
                    _onTreeNodeUnselect: function(b) {
                        b = {
                            item: a.mixin({}, b.item),
                            treeNode: b
                        };
                        this.emit("item-unselect", b)
                    },
                    _onCheckNodeClick: function(b, c, d) {
                        !this.multiple && c && this._uncheckAllCheckboxes();
                        q.stop(d);
                        this.focusNode(b);
                        setTimeout(a.hitch(this, function() {
                            b.checkNode.checked = c;
                            this.onClick(b.item,
                                b, d)
                        }), 0)
                    },
                    _uncheckAllCheckboxes: function() {
                        var b = k(".jimu-tree-check-node", this.domNode);
                        c.forEach(b, a.hitch(this, function(a) {
                            a.checked = !1
                        }))
                    }
                })
            })
        },
        "dijit/Tree": function() {
            define("dojo/_base/array dojo/aspect dojo/cookie dojo/_base/declare dojo/Deferred dojo/promise/all dojo/dom dojo/dom-class dojo/dom-geometry dojo/dom-style dojo/errors/create dojo/fx dojo/has dojo/_base/kernel dojo/keys dojo/_base/lang dojo/on dojo/topic dojo/touch dojo/when ./a11yclick ./focus ./registry ./_base/manager ./_Widget ./_TemplatedMixin ./_Container ./_Contained ./_CssStateMixin ./_KeyNavMixin dojo/text!./templates/TreeNode.html dojo/text!./templates/Tree.html ./tree/TreeStoreModel ./tree/ForestStoreModel ./tree/_dndSelector dojo/query!css2".split(" "),
                function(d, h, l, f, a, b, c, q, k, n, v, m, r, x, w, u, e, t, B, F, C, D, y, s, z, g, A, p, I, J, K, L, O, M, N) {
                    function E(a) {
                        return u.delegate(a.promise || a, {
                            addCallback: function(a) {
                                this.then(a)
                            },
                            addErrback: function(a) {
                                this.otherwise(a)
                            }
                        })
                    }
                    var H = f("dijit._TreeNode", [z, g, A, p, I], {
                        item: null,
                        isTreeNode: !0,
                        label: "",
                        _setLabelAttr: function(a) {
                            this.labelNode["html" == this.labelType ? "innerHTML" : "innerText" in this.labelNode ? "innerText" : "textContent"] = a;
                            this._set("label", a)
                        },
                        labelType: "text",
                        isExpandable: null,
                        isExpanded: !1,
                        state: "NotLoaded",
                        templateString: K,
                        baseClass: "dijitTreeNode",
                        cssStateNodes: {
                            rowNode: "dijitTreeRow"
                        },
                        _setTooltipAttr: {
                            node: "rowNode",
                            type: "attribute",
                            attribute: "title"
                        },
                        buildRendering: function() {
                            this.inherited(arguments);
                            this._setExpando();
                            this._updateItemClasses(this.item);
                            this.isExpandable && this.labelNode.setAttribute("aria-expanded", this.isExpanded);
                            this.setSelected(!1)
                        },
                        _setIndentAttr: function(a) {
                            var b = Math.max(a, 0) * this.tree._nodePixelIndent + "px";
                            n.set(this.domNode, "backgroundPosition", b + " 0px");
                            n.set(this.rowNode,
                                this.isLeftToRight() ? "paddingLeft" : "paddingRight", b);
                            d.forEach(this.getChildren(), function(b) {
                                b.set("indent", a + 1)
                            });
                            this._set("indent", a)
                        },
                        markProcessing: function() {
                            this.state = "Loading";
                            this._setExpando(!0)
                        },
                        unmarkProcessing: function() {
                            this._setExpando(!1)
                        },
                        _updateItemClasses: function(a) {
                            var b = this.tree,
                                g = b.model;
                            b._v10Compat && a === g.root && (a = null);
                            this._applyClassAndStyle(a, "icon", "Icon");
                            this._applyClassAndStyle(a, "label", "Label");
                            this._applyClassAndStyle(a, "row", "Row");
                            this.tree._startPaint(!0)
                        },
                        _applyClassAndStyle: function(a, b, g) {
                            var c = "_" + b + "Class";
                            b += "Node";
                            var e = this[c];
                            this[c] = this.tree["get" + g + "Class"](a, this.isExpanded);
                            q.replace(this[b], this[c] || "", e || "");
                            n.set(this[b], this.tree["get" + g + "Style"](a, this.isExpanded) || {})
                        },
                        _updateLayout: function() {
                            var a = this.getParent(),
                                a = !a || !a.rowNode || "none" == a.rowNode.style.display;
                            q.toggle(this.domNode, "dijitTreeIsRoot", a);
                            q.toggle(this.domNode, "dijitTreeIsLast", !a && !this.getNextSibling())
                        },
                        _setExpando: function(a) {
                            var b = ["dijitTreeExpandoLoading",
                                "dijitTreeExpandoOpened", "dijitTreeExpandoClosed", "dijitTreeExpandoLeaf"
                            ];
                            a = a ? 0 : this.isExpandable ? this.isExpanded ? 1 : 2 : 3;
                            q.replace(this.expandoNode, b[a], b);
                            this.expandoNodeText.innerHTML = ["*", "-", "+", "*"][a]
                        },
                        expand: function() {
                            if (this._expandDeferred) return E(this._expandDeferred);
                            this._collapseDeferred && (this._collapseDeferred.cancel(), delete this._collapseDeferred);
                            this.isExpanded = !0;
                            this.labelNode.setAttribute("aria-expanded", "true");
                            (this.tree.showRoot || this !== this.tree.rootNode) && this.containerNode.setAttribute("role",
                                "group");
                            q.add(this.contentNode, "dijitTreeContentExpanded");
                            this._setExpando();
                            this._updateItemClasses(this.item);
                            this == this.tree.rootNode && this.tree.showRoot && this.tree.domNode.setAttribute("aria-expanded", "true");
                            var b = m.wipeIn({
                                    node: this.containerNode,
                                    duration: s.defaultDuration
                                }),
                                g = this._expandDeferred = new a(function() {
                                    b.stop()
                                });
                            h.after(b, "onEnd", function() {
                                g.resolve(!0)
                            }, !0);
                            b.play();
                            return E(g)
                        },
                        collapse: function() {
                            if (this._collapseDeferred) return E(this._collapseDeferred);
                            this._expandDeferred &&
                                (this._expandDeferred.cancel(), delete this._expandDeferred);
                            this.isExpanded = !1;
                            this.labelNode.setAttribute("aria-expanded", "false");
                            this == this.tree.rootNode && this.tree.showRoot && this.tree.domNode.setAttribute("aria-expanded", "false");
                            q.remove(this.contentNode, "dijitTreeContentExpanded");
                            this._setExpando();
                            this._updateItemClasses(this.item);
                            var b = m.wipeOut({
                                    node: this.containerNode,
                                    duration: s.defaultDuration
                                }),
                                g = this._collapseDeferred = new a(function() {
                                    b.stop()
                                });
                            h.after(b, "onEnd", function() {
                                g.resolve(!0)
                            }, !0);
                            b.play();
                            return E(g)
                        },
                        indent: 0,
                        setChildItems: function(a) {
                            var g = this.tree,
                                e = g.model,
                                p = [],
                                m = g.focusedChild,
                                k = this.getChildren();
                            d.forEach(k, function(a) {
                                A.prototype.removeChild.call(this, a)
                            }, this);
                            this.defer(function() {
                                d.forEach(k, function(a) {
                                    if (!a._destroyed && !a.getParent()) {
                                        g.dndController.removeTreeNode(a);
                                        var b = function(a) {
                                            var c = e.getIdentity(a.item),
                                                p = g._itemNodesMap[c];
                                            1 == p.length ? delete g._itemNodesMap[c] : (c = d.indexOf(p, a), -1 != c && p.splice(c, 1));
                                            d.forEach(a.getChildren(), b)
                                        };
                                        b(a);
                                        if (g.persist) {
                                            var p =
                                                d.map(a.getTreePath(), function(a) {
                                                    return g.model.getIdentity(a)
                                                }).join("/"),
                                                k;
                                            for (k in g._openedNodes) k.substr(0, p.length) == p && delete g._openedNodes[k];
                                            g._saveExpandedNodes()
                                        }
                                        g.lastFocusedChild && !c.isDescendant(g.lastFocusedChild, g.domNode) && delete g.lastFocusedChild;
                                        m && !c.isDescendant(m, g.domNode) && g.focus();
                                        a.destroyRecursive()
                                    }
                                })
                            });
                            this.state = "Loaded";
                            a && 0 < a.length ? (this.isExpandable = !0, d.forEach(a, function(a) {
                                    var b = e.getIdentity(a),
                                        c = g._itemNodesMap[b],
                                        d;
                                    if (c)
                                        for (var k = 0; k < c.length; k++)
                                            if (c[k] &&
                                                !c[k].getParent()) {
                                                d = c[k];
                                                d.set("indent", this.indent + 1);
                                                break
                                            }
                                    d || (d = this.tree._createTreeNode({
                                        item: a,
                                        tree: g,
                                        isExpandable: e.mayHaveChildren(a),
                                        label: g.getLabel(a),
                                        labelType: g.model && g.model.labelType || "text",
                                        tooltip: g.getTooltip(a),
                                        ownerDocument: g.ownerDocument,
                                        dir: g.dir,
                                        lang: g.lang,
                                        textDir: g.textDir,
                                        indent: this.indent + 1
                                    }), c ? c.push(d) : g._itemNodesMap[b] = [d]);
                                    this.addChild(d);
                                    (this.tree.autoExpand || this.tree._state(d)) && p.push(g._expandNode(d))
                                }, this), d.forEach(this.getChildren(), function(a) {
                                    a._updateLayout()
                                })) :
                                this.isExpandable = !1;
                            this._setExpando && this._setExpando(!1);
                            this._updateItemClasses(this.item);
                            a = b(p);
                            this.tree._startPaint(a);
                            return E(a)
                        },
                        getTreePath: function() {
                            for (var a = this, b = []; a && a !== this.tree.rootNode;) b.unshift(a.item), a = a.getParent();
                            b.unshift(this.tree.rootNode.item);
                            return b
                        },
                        getIdentity: function() {
                            return this.tree.model.getIdentity(this.item)
                        },
                        removeChild: function(a) {
                            this.inherited(arguments);
                            var b = this.getChildren();
                            0 == b.length && (this.isExpandable = !1, this.collapse());
                            d.forEach(b, function(a) {
                                a._updateLayout()
                            })
                        },
                        makeExpandable: function() {
                            this.isExpandable = !0;
                            this._setExpando(!1)
                        },
                        setSelected: function(a) {
                            this.labelNode.setAttribute("aria-selected", a ? "true" : "false");
                            q.toggle(this.rowNode, "dijitTreeRowSelected", a)
                        },
                        focus: function() {
                            D.focus(this.focusNode)
                        }
                    });
                    r("dojo-bidi") && H.extend({
                        _setTextDirAttr: function(a) {
                            if (a && (this.textDir != a || !this._created)) this._set("textDir", a), this.applyTextDir(this.labelNode), d.forEach(this.getChildren(), function(b) {
                                b.set("textDir", a)
                            }, this)
                        }
                    });
                    var G = f("dijit.Tree", [z, J, g, I], {
                        baseClass: "dijitTree",
                        store: null,
                        model: null,
                        query: null,
                        label: "",
                        showRoot: !0,
                        childrenAttr: ["children"],
                        paths: [],
                        path: [],
                        selectedItems: null,
                        selectedItem: null,
                        openOnClick: !1,
                        openOnDblClick: !1,
                        templateString: L,
                        persist: !1,
                        autoExpand: !1,
                        dndController: N,
                        dndParams: "onDndDrop itemCreator onDndCancel checkAcceptance checkItemAcceptance dragThreshold betweenThreshold".split(" "),
                        onDndDrop: null,
                        itemCreator: null,
                        onDndCancel: null,
                        checkAcceptance: null,
                        checkItemAcceptance: null,
                        dragThreshold: 5,
                        betweenThreshold: 0,
                        _nodePixelIndent: 19,
                        _publish: function(a,
                            b) {
                            t.publish(this.id, u.mixin({
                                tree: this,
                                event: a
                            }, b || {}))
                        },
                        postMixInProperties: function() {
                            this.tree = this;
                            this.autoExpand && (this.persist = !1);
                            this._itemNodesMap = {};
                            !this.cookieName && this.id && (this.cookieName = this.id + "SaveStateCookie");
                            this.expandChildrenDeferred = new a;
                            this.pendingCommandsPromise = this.expandChildrenDeferred.promise;
                            this.inherited(arguments)
                        },
                        postCreate: function() {
                            this._initState();
                            var a = this;
                            this.own(e(this.containerNode, e.selector(".dijitTreeNode", B.enter), function(b) {
                                a._onNodeMouseEnter(y.byNode(this),
                                    b)
                            }), e(this.containerNode, e.selector(".dijitTreeNode", B.leave), function(b) {
                                a._onNodeMouseLeave(y.byNode(this), b)
                            }), e(this.containerNode, e.selector(".dijitTreeRow", C.press), function(b) {
                                a._onNodePress(y.getEnclosingWidget(this), b)
                            }), e(this.containerNode, e.selector(".dijitTreeRow", C), function(b) {
                                a._onClick(y.getEnclosingWidget(this), b)
                            }), e(this.containerNode, e.selector(".dijitTreeRow", "dblclick"), function(b) {
                                a._onDblClick(y.getEnclosingWidget(this), b)
                            }));
                            this.model || this._store2model();
                            this.own(h.after(this.model,
                                "onChange", u.hitch(this, "_onItemChange"), !0), h.after(this.model, "onChildrenChange", u.hitch(this, "_onItemChildrenChange"), !0), h.after(this.model, "onDelete", u.hitch(this, "_onItemDelete"), !0));
                            this.inherited(arguments);
                            if (this.dndController) {
                                u.isString(this.dndController) && (this.dndController = u.getObject(this.dndController));
                                for (var b = {}, g = 0; g < this.dndParams.length; g++) this[this.dndParams[g]] && (b[this.dndParams[g]] = this[this.dndParams[g]]);
                                this.dndController = new this.dndController(this, b)
                            }
                            this._load();
                            this.onLoadDeferred = E(this.pendingCommandsPromise);
                            this.onLoadDeferred.then(u.hitch(this, "onLoad"))
                        },
                        _store2model: function() {
                            this._v10Compat = !0;
                            x.deprecated("Tree: from version 2.0, should specify a model object rather than a store/query");
                            var a = {
                                id: this.id + "_ForestStoreModel",
                                store: this.store,
                                query: this.query,
                                childrenAttrs: this.childrenAttr
                            };
                            this.params.mayHaveChildren && (a.mayHaveChildren = u.hitch(this, "mayHaveChildren"));
                            this.params.getItemChildren && (a.getChildren = u.hitch(this, function(a, b, g) {
                                this.getItemChildren(this._v10Compat &&
                                    a === this.model.root ? null : a, b, g)
                            }));
                            this.model = new M(a);
                            this.showRoot = Boolean(this.label)
                        },
                        onLoad: function() {},
                        _load: function() {
                            this.model.getRoot(u.hitch(this, function(a) {
                                    var b = this.rootNode = this.tree._createTreeNode({
                                        item: a,
                                        tree: this,
                                        isExpandable: !0,
                                        label: this.label || this.getLabel(a),
                                        labelType: this.model.labelType || "text",
                                        textDir: this.textDir,
                                        indent: this.showRoot ? 0 : -1
                                    });
                                    this.showRoot ? (this.domNode.setAttribute("aria-multiselectable", !this.dndController.singular), this.rootLoadingIndicator.style.display =
                                        "none") : (b.rowNode.style.display = "none", this.domNode.setAttribute("role", "presentation"), this.domNode.removeAttribute("aria-expanded"), this.domNode.removeAttribute("aria-multiselectable"), this["aria-label"] ? (b.containerNode.setAttribute("aria-label", this["aria-label"]), this.domNode.removeAttribute("aria-label")) : this["aria-labelledby"] && (b.containerNode.setAttribute("aria-labelledby", this["aria-labelledby"]), this.domNode.removeAttribute("aria-labelledby")), b.labelNode.setAttribute("role", "presentation"),
                                        b.containerNode.setAttribute("role", "tree"), b.containerNode.setAttribute("aria-expanded", "true"), b.containerNode.setAttribute("aria-multiselectable", !this.dndController.singular));
                                    this.containerNode.appendChild(b.domNode);
                                    a = this.model.getIdentity(a);
                                    this._itemNodesMap[a] ? this._itemNodesMap[a].push(b) : this._itemNodesMap[a] = [b];
                                    b._updateLayout();
                                    this._expandNode(b).then(u.hitch(this, function() {
                                        this._destroyed || (this.rootLoadingIndicator.style.display = "none", this.expandChildrenDeferred.resolve(!0))
                                    }))
                                }),
                                u.hitch(this, function(a) {
                                    console.error(this, ": error loading root: ", a)
                                }))
                        },
                        getNodesByItem: function(a) {
                            if (!a) return [];
                            a = u.isString(a) ? a : this.model.getIdentity(a);
                            return [].concat(this._itemNodesMap[a])
                        },
                        _setSelectedItemAttr: function(a) {
                            this.set("selectedItems", [a])
                        },
                        _setSelectedItemsAttr: function(a) {
                            var b = this;
                            return this.pendingCommandsPromise = this.pendingCommandsPromise.always(u.hitch(this, function() {
                                var g = d.map(a, function(a) {
                                        return !a || u.isString(a) ? a : b.model.getIdentity(a)
                                    }),
                                    c = [];
                                d.forEach(g, function(a) {
                                    c =
                                        c.concat(b._itemNodesMap[a] || [])
                                });
                                this.set("selectedNodes", c)
                            }))
                        },
                        _setPathAttr: function(a) {
                            return a.length ? E(this.set("paths", [a]).then(function(a) {
                                return a[0]
                            })) : E(this.set("paths", []).then(function(a) {
                                return a[0]
                            }))
                        },
                        _setPathsAttr: function(a) {
                            function g(a, b) {
                                var e = a.shift(),
                                    p = d.filter(b, function(a) {
                                        return a.getIdentity() == e
                                    })[0];
                                if (p) return a.length ? c._expandNode(p).then(function() {
                                    return g(a, p.getChildren())
                                }) : p;
                                throw new G.PathError("Could not expand path at " + e);
                            }
                            var c = this;
                            return E(this.pendingCommandsPromise =
                                this.pendingCommandsPromise.always(function() {
                                    return b(d.map(a, function(a) {
                                        a = d.map(a, function(a) {
                                            return u.isString(a) ? a : c.model.getIdentity(a)
                                        });
                                        if (a.length) return g(a, [c.rootNode]);
                                        throw new G.PathError("Empty path");
                                    }))
                                }).then(function(a) {
                                    c.set("selectedNodes", a);
                                    return c.paths
                                }))
                        },
                        _setSelectedNodeAttr: function(a) {
                            this.set("selectedNodes", [a])
                        },
                        _setSelectedNodesAttr: function(a) {
                            this.dndController.setSelection(a)
                        },
                        expandAll: function() {
                            function a(c) {
                                return g._expandNode(c).then(function() {
                                    var g = d.filter(c.getChildren() || [], function(a) {
                                        return a.isExpandable
                                    });
                                    return b(d.map(g, a))
                                })
                            }
                            var g = this;
                            return E(a(this.rootNode))
                        },
                        collapseAll: function() {
                            function a(c) {
                                var e = d.filter(c.getChildren() || [], function(a) {
                                        return a.isExpandable
                                    }),
                                    e = b(d.map(e, a));
                                return !c.isExpanded || c == g.rootNode && !g.showRoot ? e : e.then(function() {
                                    return g._collapseNode(c)
                                })
                            }
                            var g = this;
                            return E(a(this.rootNode))
                        },
                        mayHaveChildren: function() {},
                        getItemChildren: function() {},
                        getLabel: function(a) {
                            return this.model.getLabel(a)
                        },
                        getIconClass: function(a, b) {
                            return !a ||
                                this.model.mayHaveChildren(a) ? b ? "dijitFolderOpened" : "dijitFolderClosed" : "dijitLeaf"
                        },
                        getLabelClass: function() {},
                        getRowClass: function() {},
                        getIconStyle: function() {},
                        getLabelStyle: function() {},
                        getRowStyle: function() {},
                        getTooltip: function() {
                            return ""
                        },
                        _onDownArrow: function(a, b) {
                            var g = this._getNext(b);
                            g && g.isTreeNode && this.focusNode(g)
                        },
                        _onUpArrow: function(a, b) {
                            var g = b.getPreviousSibling();
                            if (g)
                                for (b = g; b.isExpandable && b.isExpanded && b.hasChildren();) g = b.getChildren(), b = g[g.length - 1];
                            else if (g = b.getParent(),
                                this.showRoot || g !== this.rootNode) b = g;
                            b && b.isTreeNode && this.focusNode(b)
                        },
                        _onRightArrow: function(a, b) {
                            b.isExpandable && !b.isExpanded ? this._expandNode(b) : b.hasChildren() && (b = b.getChildren()[0]) && b.isTreeNode && this.focusNode(b)
                        },
                        _onLeftArrow: function(a, b) {
                            if (b.isExpandable && b.isExpanded) this._collapseNode(b);
                            else {
                                var g = b.getParent();
                                g && (g.isTreeNode && (this.showRoot || g !== this.rootNode)) && this.focusNode(g)
                            }
                        },
                        focusLastChild: function() {
                            var a = this._getLast();
                            a && a.isTreeNode && this.focusNode(a)
                        },
                        _getFirst: function() {
                            return this.showRoot ?
                                this.rootNode : this.rootNode.getChildren()[0]
                        },
                        _getLast: function() {
                            for (var a = this.rootNode; a.isExpanded;) {
                                var b = a.getChildren();
                                if (!b.length) break;
                                a = b[b.length - 1]
                            }
                            return a
                        },
                        _getNext: function(a) {
                            if (a.isExpandable && a.isExpanded && a.hasChildren()) return a.getChildren()[0];
                            for (; a && a.isTreeNode;) {
                                var b = a.getNextSibling();
                                if (b) return b;
                                a = a.getParent()
                            }
                            return null
                        },
                        childSelector: ".dijitTreeRow",
                        isExpandoNode: function(a, b) {
                            return c.isDescendant(a, b.expandoNode) || c.isDescendant(a, b.expandoNodeText)
                        },
                        _onNodePress: function(a,
                            b) {
                            this.focusNode(a)
                        },
                        __click: function(a, b, g, c) {
                            var e = this.isExpandoNode(b.target, a);
                            a.isExpandable && (g || e) ? this._onExpandoClick({
                                node: a
                            }) : (this._publish("execute", {
                                item: a.item,
                                node: a,
                                evt: b
                            }), this[c](a.item, a, b), this.focusNode(a));
                            b.stopPropagation();
                            b.preventDefault()
                        },
                        _onClick: function(a, b) {
                            this.__click(a, b, this.openOnClick, "onClick")
                        },
                        _onDblClick: function(a, b) {
                            this.__click(a, b, this.openOnDblClick, "onDblClick")
                        },
                        _onExpandoClick: function(a) {
                            a = a.node;
                            this.focusNode(a);
                            a.isExpanded ? this._collapseNode(a) :
                                this._expandNode(a)
                        },
                        onClick: function() {},
                        onDblClick: function() {},
                        onOpen: function() {},
                        onClose: function() {},
                        _getNextNode: function(a) {
                            x.deprecated(this.declaredClass + "::_getNextNode(node) is deprecated. Use _getNext(node) instead.", "", "2.0");
                            return this._getNext(a)
                        },
                        _getRootOrFirstNode: function() {
                            x.deprecated(this.declaredClass + "::_getRootOrFirstNode() is deprecated. Use _getFirst() instead.", "", "2.0");
                            return this._getFirst()
                        },
                        _collapseNode: function(a) {
                            a._expandNodeDeferred && delete a._expandNodeDeferred;
                            if ("Loading" != a.state && a.isExpanded) {
                                var b = a.collapse();
                                this.onClose(a.item, a);
                                this._state(a, !1);
                                this._startPaint(b);
                                return b
                            }
                        },
                        _expandNode: function(b) {
                            if (b._expandNodeDeferred) return b._expandNodeDeferred;
                            var g = this.model,
                                c = b.item,
                                e = this;
                            b._loadDeferred || (b.markProcessing(), b._loadDeferred = new a, g.getChildren(c, function(a) {
                                b.unmarkProcessing();
                                b.setChildItems(a).then(function() {
                                    b._loadDeferred.resolve(a)
                                })
                            }, function(a) {
                                console.error(e, ": error loading " + b.label + " children: ", a);
                                b._loadDeferred.reject(a)
                            }));
                            g = b._loadDeferred.then(u.hitch(this, function() {
                                var a = b.expand();
                                this.onOpen(b.item, b);
                                this._state(b, !0);
                                return a
                            }));
                            this._startPaint(g);
                            return g
                        },
                        focusNode: function(a) {
                            var b = this.domNode.scrollLeft;
                            this.focusChild(a);
                            this.domNode.scrollLeft = b
                        },
                        _onNodeMouseEnter: function() {},
                        _onNodeMouseLeave: function() {},
                        _onItemChange: function(a) {
                            var b = this.model.getIdentity(a);
                            if (b = this._itemNodesMap[b]) {
                                var g = this.getLabel(a),
                                    c = this.getTooltip(a);
                                d.forEach(b, function(b) {
                                    b.set({
                                        item: a,
                                        label: g,
                                        tooltip: c
                                    });
                                    b._updateItemClasses(a)
                                })
                            }
                        },
                        _onItemChildrenChange: function(a, b) {
                            var g = this.model.getIdentity(a);
                            (g = this._itemNodesMap[g]) && d.forEach(g, function(a) {
                                a.setChildItems(b)
                            })
                        },
                        _onItemDelete: function(a) {
                            a = this.model.getIdentity(a);
                            var b = this._itemNodesMap[a];
                            b && (d.forEach(b, function(a) {
                                this.dndController.removeTreeNode(a);
                                var b = a.getParent();
                                b && b.removeChild(a);
                                this.lastFocusedChild && !c.isDescendant(this.lastFocusedChild, this.domNode) && delete this.lastFocusedChild;
                                this.focusedChild && !c.isDescendant(this.focusedChild, this.domNode) &&
                                    this.focus();
                                a.destroyRecursive()
                            }, this), delete this._itemNodesMap[a])
                        },
                        _initState: function() {
                            this._openedNodes = {};
                            if (this.persist && this.cookieName) {
                                var a = l(this.cookieName);
                                a && d.forEach(a.split(","), function(a) {
                                    this._openedNodes[a] = !0
                                }, this)
                            }
                        },
                        _state: function(a, b) {
                            if (!this.persist) return !1;
                            var g = d.map(a.getTreePath(), function(a) {
                                return this.model.getIdentity(a)
                            }, this).join("/");
                            if (1 === arguments.length) return this._openedNodes[g];
                            b ? this._openedNodes[g] = !0 : delete this._openedNodes[g];
                            this._saveExpandedNodes()
                        },
                        _saveExpandedNodes: function() {
                            if (this.persist && this.cookieName) {
                                var a = [],
                                    b;
                                for (b in this._openedNodes) a.push(b);
                                l(this.cookieName, a.join(","), {
                                    expires: 365
                                })
                            }
                        },
                        destroy: function() {
                            this._curSearch && (this._curSearch.timer.remove(), delete this._curSearch);
                            this.rootNode && this.rootNode.destroyRecursive();
                            this.dndController && !u.isString(this.dndController) && this.dndController.destroy();
                            this.rootNode = null;
                            this.inherited(arguments)
                        },
                        destroyRecursive: function() {
                            this.destroy()
                        },
                        resize: function(a) {
                            a && k.setMarginBox(this.domNode,
                                a);
                            this._nodePixelIndent = k.position(this.tree.indentDetector).w || this._nodePixelIndent;
                            this.expandChildrenDeferred.then(u.hitch(this, function() {
                                this.rootNode.set("indent", this.showRoot ? 0 : -1);
                                this._adjustWidths()
                            }))
                        },
                        _outstandingPaintOperations: 0,
                        _startPaint: function(a) {
                            this._outstandingPaintOperations++;
                            this._adjustWidthsTimer && (this._adjustWidthsTimer.remove(), delete this._adjustWidthsTimer);
                            var b = u.hitch(this, function() {
                                this._outstandingPaintOperations--;
                                0 >= this._outstandingPaintOperations && (!this._adjustWidthsTimer &&
                                    this._started) && (this._adjustWidthsTimer = this.defer("_adjustWidths"))
                            });
                            F(a, b, b)
                        },
                        _adjustWidths: function() {
                            this._adjustWidthsTimer && (this._adjustWidthsTimer.remove(), delete this._adjustWidthsTimer);
                            this.containerNode.style.width = "auto";
                            this.containerNode.style.width = this.domNode.scrollWidth > this.domNode.offsetWidth ? "auto" : "100%"
                        },
                        _createTreeNode: function(a) {
                            return new H(a)
                        },
                        focus: function() {
                            this.lastFocusedChild ? this.focusNode(this.lastFocusedChild) : this.focusFirstChild()
                        }
                    });
                    r("dojo-bidi") && G.extend({
                        _setTextDirAttr: function(a) {
                            a &&
                                this.textDir != a && (this._set("textDir", a), this.rootNode.set("textDir", a))
                        }
                    });
                    G.PathError = v("TreePathError");
                    G._TreeNode = H;
                    return G
                })
        },
        "dijit/tree/TreeStoreModel": function() {
            define(["dojo/_base/array", "dojo/aspect", "dojo/_base/declare", "dojo/_base/lang"], function(d, h, l, f) {
                return l("dijit.tree.TreeStoreModel", null, {
                    store: null,
                    childrenAttrs: ["children"],
                    newItemIdAttr: "id",
                    labelAttr: "",
                    root: null,
                    query: null,
                    deferItemLoadingUntilExpand: !1,
                    constructor: function(a) {
                        f.mixin(this, a);
                        this.connects = [];
                        a = this.store;
                        if (!a.getFeatures()["dojo.data.api.Identity"]) throw Error("dijit.tree.TreeStoreModel: store must support dojo.data.Identity");
                        a.getFeatures()["dojo.data.api.Notification"] && (this.connects = this.connects.concat([h.after(a, "onNew", f.hitch(this, "onNewItem"), !0), h.after(a, "onDelete", f.hitch(this, "onDeleteItem"), !0), h.after(a, "onSet", f.hitch(this, "onSetItem"), !0)]))
                    },
                    destroy: function() {
                        for (var a; a = this.connects.pop();) a.remove()
                    },
                    getRoot: function(a, b) {
                        this.root ? a(this.root) : this.store.fetch({
                            query: this.query,
                            onComplete: f.hitch(this, function(b) {
                                if (1 != b.length) throw Error("dijit.tree.TreeStoreModel: root query returned " + b.length + " items, but must return exactly one");
                                this.root = b[0];
                                a(this.root)
                            }),
                            onError: b
                        })
                    },
                    mayHaveChildren: function(a) {
                        return d.some(this.childrenAttrs, function(b) {
                            return this.store.hasAttribute(a, b)
                        }, this)
                    },
                    getChildren: function(a, b, c) {
                        var h = this.store;
                        if (h.isItemLoaded(a)) {
                            for (var k = [], n = 0; n < this.childrenAttrs.length; n++) var l = h.getValues(a, this.childrenAttrs[n]),
                                k = k.concat(l);
                            var m = 0;
                            this.deferItemLoadingUntilExpand || d.forEach(k, function(a) {
                                h.isItemLoaded(a) || m++
                            });
                            0 == m ? b(k) : d.forEach(k, function(a, d) {
                                h.isItemLoaded(a) || h.loadItem({
                                    item: a,
                                    onItem: function(a) {
                                        k[d] = a;
                                        0 == --m && b(k)
                                    },
                                    onError: c
                                })
                            })
                        }
                        else {
                            var r = f.hitch(this, arguments.callee);
                            h.loadItem({
                                item: a,
                                onItem: function(a) {
                                    r(a, b, c)
                                },
                                onError: c
                            })
                        }
                    },
                    isItem: function(a) {
                        return this.store.isItem(a)
                    },
                    fetchItemByIdentity: function(a) {
                        this.store.fetchItemByIdentity(a)
                    },
                    getIdentity: function(a) {
                        return this.store.getIdentity(a)
                    },
                    getLabel: function(a) {
                        return this.labelAttr ?
                            this.store.getValue(a, this.labelAttr) : this.store.getLabel(a)
                    },
                    newItem: function(a, b, c) {
                        var d = {
                                parent: b,
                                attribute: this.childrenAttrs[0]
                            },
                            k;
                        this.newItemIdAttr && a[this.newItemIdAttr] ? this.fetchItemByIdentity({
                            identity: a[this.newItemIdAttr],
                            scope: this,
                            onItem: function(f) {
                                f ? this.pasteItem(f, null, b, !0, c) : (k = this.store.newItem(a, d)) && void 0 != c && this.pasteItem(k, b, b, !1, c)
                            }
                        }) : (k = this.store.newItem(a, d)) && void 0 != c && this.pasteItem(k, b, b, !1, c)
                    },
                    pasteItem: function(a, b, c, f, k) {
                        var h = this.store,
                            l = this.childrenAttrs[0];
                        b && d.forEach(this.childrenAttrs, function(c) {
                            if (h.containsValue(b, c, a)) {
                                if (!f) {
                                    var k = d.filter(h.getValues(b, c), function(b) {
                                        return b != a
                                    });
                                    h.setValues(b, c, k)
                                }
                                l = c
                            }
                        });
                        if (c)
                            if ("number" == typeof k) {
                                var m = h.getValues(c, l).slice();
                                m.splice(k, 0, a);
                                h.setValues(c, l, m)
                            }
                            else h.setValues(c, l, h.getValues(c, l).concat(a))
                    },
                    onChange: function() {},
                    onChildrenChange: function() {},
                    onDelete: function() {},
                    onNewItem: function(a, b) {
                        b && this.getChildren(b.item, f.hitch(this, function(a) {
                            this.onChildrenChange(b.item, a)
                        }))
                    },
                    onDeleteItem: function(a) {
                        this.onDelete(a)
                    },
                    onSetItem: function(a, b) {
                        if (-1 != d.indexOf(this.childrenAttrs, b)) this.getChildren(a, f.hitch(this, function(b) {
                            this.onChildrenChange(a, b)
                        }));
                        else this.onChange(a)
                    }
                })
            })
        },
        "dijit/tree/ForestStoreModel": function() {
            define(["dojo/_base/array", "dojo/_base/declare", "dojo/_base/kernel", "dojo/_base/lang", "./TreeStoreModel"], function(d, h, l, f, a) {
                return h("dijit.tree.ForestStoreModel", a, {
                    rootId: "$root$",
                    rootLabel: "ROOT",
                    query: null,
                    constructor: function(a) {
                        this.root = {
                            store: this,
                            root: !0,
                            id: a.rootId,
                            label: a.rootLabel,
                            children: a.rootChildren
                        }
                    },
                    mayHaveChildren: function(a) {
                        return a === this.root || this.inherited(arguments)
                    },
                    getChildren: function(a, c, d) {
                        a === this.root ? this.root.children ? c(this.root.children) : this.store.fetch({
                            query: this.query,
                            onComplete: f.hitch(this, function(a) {
                                this.root.children = a;
                                c(a)
                            }),
                            onError: d
                        }) : this.inherited(arguments)
                    },
                    isItem: function(a) {
                        return a === this.root ? !0 : this.inherited(arguments)
                    },
                    fetchItemByIdentity: function(a) {
                        if (a.identity == this.root.id) {
                            var c = a.scope || l.global;
                            a.onItem && a.onItem.call(c,
                                this.root)
                        }
                        else this.inherited(arguments)
                    },
                    getIdentity: function(a) {
                        return a === this.root ? this.root.id : this.inherited(arguments)
                    },
                    getLabel: function(a) {
                        return a === this.root ? this.root.label : this.inherited(arguments)
                    },
                    newItem: function(a, c, d) {
                        return c === this.root ? (this.onNewRootItem(a), this.store.newItem(a)) : this.inherited(arguments)
                    },
                    onNewRootItem: function() {},
                    pasteItem: function(a, c, d, k, f) {
                        if (c === this.root && !k) this.onLeaveRoot(a);
                        this.inherited(arguments, [a, c === this.root ? null : c, d === this.root ? null : d, k,
                            f
                        ]);
                        if (d === this.root) this.onAddToRoot(a)
                    },
                    onAddToRoot: function(a) {
                        console.log(this, ": item ", a, " added to root")
                    },
                    onLeaveRoot: function(a) {
                        console.log(this, ": item ", a, " removed from root")
                    },
                    _requeryTop: function() {
                        var a = this.root.children || [];
                        this.store.fetch({
                            query: this.query,
                            onComplete: f.hitch(this, function(c) {
                                this.root.children = c;
                                if (a.length != c.length || d.some(a, function(a, b) {
                                        return c[b] != a
                                    })) this.onChildrenChange(this.root, c)
                            })
                        })
                    },
                    onNewItem: function(a, c) {
                        this._requeryTop();
                        this.inherited(arguments)
                    },
                    onDeleteItem: function(a) {
                        -1 != d.indexOf(this.root.children, a) && this._requeryTop();
                        this.inherited(arguments)
                    },
                    onSetItem: function(a, c, d, k) {
                        this._requeryTop();
                        this.inherited(arguments)
                    }
                })
            })
        },
        "dijit/tree/_dndSelector": function() {
            define("dojo/_base/array dojo/_base/declare dojo/_base/kernel dojo/_base/lang dojo/dnd/common dojo/dom dojo/mouse dojo/on dojo/touch ../a11yclick ./_dndContainer".split(" "), function(d, h, l, f, a, b, c, q, k, n, v) {
                return h("dijit.tree._dndSelector", v, {
                    constructor: function() {
                        this.selection = {};
                        this.anchor = null;
                        this.events.push(q(this.tree.domNode, k.press, f.hitch(this, "onMouseDown")), q(this.tree.domNode, k.release, f.hitch(this, "onMouseUp")), q(this.tree.domNode, k.move, f.hitch(this, "onMouseMove")), q(this.tree.domNode, n.press, f.hitch(this, "onClickPress")), q(this.tree.domNode, n.release, f.hitch(this, "onClickRelease")))
                    },
                    singular: !1,
                    getSelectedTreeNodes: function() {
                        var a = [],
                            b = this.selection,
                            c;
                        for (c in b) a.push(b[c]);
                        return a
                    },
                    selectNone: function() {
                        this.setSelection([]);
                        return this
                    },
                    destroy: function() {
                        this.inherited(arguments);
                        this.selection = this.anchor = null
                    },
                    addTreeNode: function(a, b) {
                        this.setSelection(this.getSelectedTreeNodes().concat([a]));
                        b && (this.anchor = a);
                        return a
                    },
                    removeTreeNode: function(a) {
                        var c = d.filter(this.getSelectedTreeNodes(), function(c) {
                            return !b.isDescendant(c.domNode, a.domNode)
                        });
                        this.setSelection(c);
                        return a
                    },
                    isTreeNodeSelected: function(a) {
                        return a.id && !!this.selection[a.id]
                    },
                    setSelection: function(a) {
                        var b = this.getSelectedTreeNodes();
                        d.forEach(this._setDifference(b, a), f.hitch(this, function(a) {
                            a.setSelected(!1);
                            this.anchor == a && delete this.anchor;
                            delete this.selection[a.id]
                        }));
                        d.forEach(this._setDifference(a, b), f.hitch(this, function(a) {
                            a.setSelected(!0);
                            this.selection[a.id] = a
                        }));
                        this._updateSelectionProperties()
                    },
                    _setDifference: function(a, b) {
                        d.forEach(b, function(a) {
                            a.__exclude__ = !0
                        });
                        var c = d.filter(a, function(a) {
                            return !a.__exclude__
                        });
                        d.forEach(b, function(a) {
                            delete a.__exclude__
                        });
                        return c
                    },
                    _updateSelectionProperties: function() {
                        var a = this.getSelectedTreeNodes(),
                            b = [],
                            c = [];
                        d.forEach(a, function(a) {
                            var d = a.getTreePath();
                            c.push(a);
                            b.push(d)
                        }, this);
                        a = d.map(c, function(a) {
                            return a.item
                        });
                        this.tree._set("paths", b);
                        this.tree._set("path", b[0] || []);
                        this.tree._set("selectedNodes", c);
                        this.tree._set("selectedNode", c[0] || null);
                        this.tree._set("selectedItems", a);
                        this.tree._set("selectedItem", a[0] || null)
                    },
                    onClickPress: function(b) {
                        if (!this.current || !this.current.isExpandable || !this.tree.isExpandoNode(b.target, this.current)) {
                            "mousedown" == b.type && c.isLeft(b) && b.preventDefault();
                            var d = "keydown" == b.type ? this.tree.focusedChild : this.current;
                            if (d) {
                                var k = a.getCopyKeyState(b),
                                    f = d.id;
                                !this.singular && !b.shiftKey && this.selection[f] ? this._doDeselect = !0 : (this._doDeselect = !1, this.userSelect(d, k, b.shiftKey))
                            }
                        }
                    },
                    onClickRelease: function(b) {
                        this._doDeselect && (this._doDeselect = !1, this.userSelect("keyup" == b.type ? this.tree.focusedChild : this.current, a.getCopyKeyState(b), b.shiftKey))
                    },
                    onMouseMove: function() {
                        this._doDeselect = !1
                    },
                    onMouseDown: function() {},
                    onMouseUp: function() {},
                    _compareNodes: function(a, b) {
                        if (a === b) return 0;
                        if ("sourceIndex" in document.documentElement) return a.sourceIndex -
                            b.sourceIndex;
                        if ("compareDocumentPosition" in document.documentElement) return a.compareDocumentPosition(b) & 2 ? 1 : -1;
                        if (document.createRange) {
                            var c = doc.createRange();
                            c.setStartBefore(a);
                            var d = doc.createRange();
                            d.setStartBefore(b);
                            return c.compareBoundaryPoints(c.END_TO_END, d)
                        }
                        throw Error("dijit.tree._compareNodes don't know how to compare two different nodes in this browser");
                    },
                    userSelect: function(a, b, c) {
                        if (this.singular) this.anchor == a && b ? this.selectNone() : (this.setSelection([a]), this.anchor = a);
                        else if (c &&
                            this.anchor) {
                            b = this._compareNodes(this.anchor.rowNode, a.rowNode);
                            c = this.anchor;
                            0 > b ? b = c : (b = a, a = c);
                            for (c = []; b != a;) c.push(b), b = this.tree._getNext(b);
                            c.push(a);
                            this.setSelection(c)
                        }
                        else this.selection[a.id] && b ? this.removeTreeNode(a) : b ? this.addTreeNode(a, !0) : (this.setSelection([a]), this.anchor = a)
                    },
                    getItem: function(a) {
                        return {
                            data: this.selection[a],
                            type: ["treeNode"]
                        }
                    },
                    forInSelectedItems: function(a, b) {
                        b = b || l.global;
                        for (var c in this.selection) a.call(b, this.getItem(c), c, this)
                    }
                })
            })
        },
        "dijit/tree/_dndContainer": function() {
            define("dojo/aspect dojo/_base/declare dojo/dom-class dojo/_base/lang dojo/on dojo/touch".split(" "),
                function(d, h, l, f, a, b) {
                    return h("dijit.tree._dndContainer", null, {
                        constructor: function(c, h) {
                            this.tree = c;
                            this.node = c.domNode;
                            f.mixin(this, h);
                            this.containerState = "";
                            l.add(this.node, "dojoDndContainer");
                            this.events = [a(this.node, b.enter, f.hitch(this, "onOverEvent")), a(this.node, b.leave, f.hitch(this, "onOutEvent")), d.after(this.tree, "_onNodeMouseEnter", f.hitch(this, "onMouseOver"), !0), d.after(this.tree, "_onNodeMouseLeave", f.hitch(this, "onMouseOut"), !0), a(this.node, "dragstart, selectstart", function(a) {
                                a.preventDefault()
                            })]
                        },
                        destroy: function() {
                            for (var a; a = this.events.pop();) a.remove();
                            this.node = this.parent = null
                        },
                        onMouseOver: function(a) {
                            this.current = a
                        },
                        onMouseOut: function() {
                            this.current = null
                        },
                        _changeState: function(a, b) {
                            var d = "dojoDnd" + a,
                                f = a.toLowerCase() + "State";
                            l.replace(this.node, d + b, d + this[f]);
                            this[f] = b
                        },
                        _addItemClass: function(a, b) {
                            l.add(a, "dojoDndItem" + b)
                        },
                        _removeItemClass: function(a, b) {
                            l.remove(a, "dojoDndItem" + b)
                        },
                        onOverEvent: function() {
                            this._changeState("Container", "Over")
                        },
                        onOutEvent: function() {
                            this._changeState("Container",
                                "")
                        }
                    })
                })
        },
        "esri/tasks/LinearUnit": function() {
            define(["dojo/_base/declare", "dojo/_base/lang", "dojo/has", "../kernel"], function(d, h, l, f) {
                return d(null, {
                    declaredClass: "esri.tasks.LinearUnit",
                    constructor: function(a) {
                        a && h.mixin(this, a)
                    },
                    distance: 0,
                    units: null,
                    toJson: function() {
                        var a = {};
                        this.distance && (a.distance = this.distance);
                        this.units && (a.units = this.units);
                        return a
                    }
                })
            })
        },
        "widgets/Geoprocessing/BaseEditor": function() {
            define("dojo/_base/declare dojo/_base/lang dojo/_base/html dojo/Deferred dijit/_WidgetBase dijit/_TemplatedMixin".split(" "),
                function(d, h, l, f, a) {
                    return d([a], {
                        baseClass: "jimu-gp-editor-base",
                        editorName: "BaseEditor",
                        dependParam: "",
                        postCreate: function() {
                            this.inherited(arguments)
                        },
                        getValue: function() {},
                        getGPValue: function() {
                            var a = new f;
                            a.resolve(this.getValue());
                            return a
                        },
                        wrapGPValue: function(a) {
                            a.toJson || (a.toJson = function() {
                                return a
                            });
                            return a
                        },
                        wrapValueToDeferred: function(a) {
                            var c = new f;
                            c.resolve(a);
                            return c
                        },
                        update: function(a) {}
                    })
                })
        },
        "widgets/Geoprocessing/editors/FeatureSetEditorChooser": function() {
            define("dojo/_base/declare dojo/_base/lang dojo/_base/html dojo/_base/array dojo/on dojo/text!./FeatureSetEditorChooser.html dijit/_TemplatedMixin dijit/_WidgetsInTemplateMixin dijit/form/RadioButton jimu/dijit/SymbolChooser esri/symbols/jsonUtils ../BaseEditor".split(" "),
                function(d, h, l, f, a, b, c, q, k, n, v, m) {
                    return d([m, c, q], {
                        baseClass: "jimu-gp-editor-base jimu-gp-editor-fsec",
                        templateString: b,
                        postCreate: function() {
                            this.inherited(arguments);
                            this.value = {};
                            this.param.featureSetMode && (l.setAttr(this[this.param.featureSetMode + "Mode"], "checked", !0), a.emit(this[this.param.featureSetMode + "Mode"], "click", {
                                cancelable: !0,
                                bubble: !0
                            }));
                            "url" === this.param.featureSetMode && this.param.featureSetUrl && this.featureSetUrl.setValue(this.param.featureSetUrl)
                        },
                        getValue: function() {
                            this.featureSetUrl.value &&
                                (this.value.featureSetUrl = this.featureSetUrl.value);
                            this.symbolChooser && "block" === l.getStyle(this.symbolChooserSection, "display") && (this.value.symbol = this.symbolChooser.getSymbol().toJson());
                            return this.value
                        },
                        _getSymbolType: function() {
                            switch (this.param.defaultValue.geometryType) {
                                case "esriGeometryPoint":
                                    return "marker";
                                case "esriGeometryPolyline":
                                    return "line";
                                case "esriGeometryPolygon":
                                    return "fill"
                            }
                        },
                        _onDrawModeSelect: function() {
                            if (!this.symbolChooser) {
                                var a = {};
                                this.param.symbol ? a.symbol = v.fromJson(this.param.symbol) :
                                    a.type = this._getSymbolType();
                                this.symbolChooser = new n(a, this.symbolChooserNode);
                                this.symbolChooser.startup()
                            }
                            l.setStyle(this.symbolChooserSection, "display", "block");
                            this.featureSetUrl.set("disabled", !0);
                            this.value.featureSetMode = "draw"
                        },
                        _onLayersModeSelect: function() {
                            l.setStyle(this.symbolChooserSection, "display", "none");
                            this.featureSetUrl.set("disabled", !0);
                            this.value.featureSetMode = "layers"
                        },
                        _onUrlModeSelect: function() {
                            l.setStyle(this.symbolChooserSection, "display", "none");
                            this.featureSetUrl.set("disabled", !1);
                            this.value.featureSetMode = "url"
                        }
                    })
                })
        },
        "dijit/form/RadioButton": function() {
            define(["dojo/_base/declare", "./CheckBox", "./_RadioButtonMixin"], function(d, h, l) {
                return d("dijit.form.RadioButton", [h, l], {
                    baseClass: "dijitRadio"
                })
            })
        },
        "dijit/form/_RadioButtonMixin": function() {
            define("dojo/_base/array dojo/_base/declare dojo/dom-attr dojo/_base/lang dojo/query!css2 ../registry".split(" "), function(d, h, l, f, a, b) {
                return h("dijit.form._RadioButtonMixin", null, {
                    type: "radio",
                    _getRelatedWidgets: function() {
                        var c = [];
                        a("input[type=radio]", this.focusNode.form || this.ownerDocument).forEach(f.hitch(this, function(a) {
                            a.name == this.name && a.form == this.focusNode.form && (a = b.getEnclosingWidget(a)) && c.push(a)
                        }));
                        return c
                    },
                    _setCheckedAttr: function(a) {
                        this.inherited(arguments);
                        this._created && a && d.forEach(this._getRelatedWidgets(), f.hitch(this, function(a) {
                            a != this && a.checked && a.set("checked", !1)
                        }))
                    },
                    _getSubmitValue: function(a) {
                        return null == a ? "on" : a
                    },
                    _onClick: function(a) {
                        return this.checked || this.disabled ? (a.stopPropagation(),
                            a.preventDefault(), !1) : this.readOnly ? (a.stopPropagation(), a.preventDefault(), d.forEach(this._getRelatedWidgets(), f.hitch(this, function(a) {
                            l.set(this.focusNode || this.domNode, "checked", a.checked)
                        })), !1) : this.inherited(arguments)
                    }
                })
            })
        },
        "widgets/Geoprocessing/editors/FeatureSetRendererEditor": function() {
            define("dojo/_base/declare dojo/_base/lang dojo/_base/array dojo/_base/html esri/renderers/jsonUtils jimu/dijit/RendererChooser ../BaseEditor ./simpleEditors".split(" "), function(d, h, l, f, a, b, c, q) {
                return d([c], {
                    baseClass: "jimu-gp-editor-base jimu-gp-editor-fsre",
                    postCreate: function() {
                        this.inherited(arguments);
                        var c = {};
                        if (this.param.renderer) c.renderer = a.fromJson(this.param.renderer);
                        else if (c.type = this._getSymbolType(), !c.type) {
                            (new q.UnsupportEditor({
                                message: "Can not set renderer because we do not know the geometry type."
                            })).placeAt(this.domNode);
                            return
                        }
                        c.fields = l.map(this.param.defaultValue.fields, function(a) {
                            return a.name
                        });
                        this.renderer = new b(c);
                        this.renderer.placeAt(this.domNode)
                    },
                    getValue: function() {
                        return this.renderer ? {
                            renderer: this.renderer.getRenderer().toJson()
                        } : null
                    },
                    _getSymbolType: function() {
                        switch (this.param.defaultValue.geometryType) {
                            case "esriGeometryPoint":
                                return "marker";
                            case "esriGeometryPolyline":
                                return "line";
                            case "esriGeometryPolygon":
                                return "fill"
                        }
                    }
                })
            })
        },
        "jimu/dijit/RendererChooser": function() {
            define("dojo/_base/declare dijit/_WidgetBase dijit/_TemplatedMixin dijit/_WidgetsInTemplateMixin dojo/text!./templates/RendererChooser.html dojo/_base/lang dojo/_base/html dojo/_base/array dojo/on dojo/query dojox/gfx dojo/_base/Color dijit/form/Select dijit/form/ComboBox dijit/form/NumberSpinner dijit/form/NumberTextBox jimu/dijit/SymbolChooser jimu/symbolUtils jimu/rendererUtils esri/request esri/renderers/SimpleRenderer esri/renderers/UniqueValueRenderer esri/renderers/ClassBreaksRenderer esri/symbols/jsonUtils esri/symbols/SimpleMarkerSymbol".split(" "),
                function(d, h, l, f, a, b, c, q, k, n, v, m, r, x, w, u, e, t, B, F, C, D, y, s, z) {
                    return d([h, l, f], {
                        templateString: a,
                        baseClass: "jimu-renderer-chooser",
                        renderer: null,
                        type: null,
                        nls: null,
                        fields: [],
                        _uniqueColors: {
                            color1: "#fce138 #fff799 #fcd27e #f1983c #a553b7 #b1a9d0 #6ecffc #4c81cd #fc6f84 #fc3e5a #69f488 #48885c".split(" "),
                            color2: "#102432 #144d59 #ffc754 #ea9010 #a54e1d #661510 #d8341a #b31515 #4a0932 #8c213f #18382e #2c6954".split(" "),
                            color3: "#be9626 #607100 #00734c #704489 #01acca #024e76 #f09100 #ea311f #c6004b #7570b3 #666666 #333333".split(" "),
                            color4: "#fffa00 #f5cb11 #9fd40c #46e29c #32b8a6 #7ff2fa #ad00f2 #c461ea #eb7200 #e8a784 #bf2e2e #6c7000".split(" "),
                            color5: "#191921 #11495c #78b1c2 #454f4b #8f8f82 #99dbbc #87b051 #f7ec88 #ebdcc1 #dbb658 #c43541 #75351e".split(" "),
                            color6: "#332424 #751555 #d47013 #d68989 #211173 #82aad6 #7bfaeb #6ec9a8 #6b6408 #e9da40 #ccc54a #1fc235".split(" ")
                        },
                        _classBreaksColors: {
                            color1: ["#eaf0fd", "#03519e"],
                            color2: ["#ebf9e7", "#046e2e"],
                            color3: ["#f5f5f5", "#2a2a2a"],
                            color4: ["#ffeddd", "#a83a00"],
                            color5: ["#f2eef6",
                                "#582890"
                            ],
                            color6: ["#ffe3d7", "#a71713"],
                            color7: ["#ecf7fb", "#006d2a"],
                            color8: ["#edf8fa", "#83067e"],
                            color9: ["#eef9e8", "#0167af"],
                            color10: ["#fff1d7", "#b80201"],
                            color11: ["#f0eef6", "#015b90"],
                            color12: ["#f5eff7", "#006dfa"],
                            color13: ["#f1eef7", "#9c0042"],
                            color14: ["#ffebe2", "#7d0078"],
                            color15: ["#ffffc9", "#016a35"],
                            color16: ["#ffffcb", "#253197"],
                            color17: ["#fffed1", "#9e3601"],
                            color18: ["#ffffad", "#c20120"],
                            color19: ["#a9620d", "#038772"],
                            color20: ["#d3168c", "#46ae1b"],
                            color21: ["#7c2d96", "#048936"],
                            color22: ["#eb6300",
                                "#603b9b"
                            ],
                            color23: ["#cc0117", "#0471b2"],
                            color24: ["#ce0118", "#424242"],
                            color25: ["#db1a10", "#287cba"],
                            color26: ["#da1baf", "#03983e"],
                            color27: ["#db1a10", "#2483bb"]
                        },
                        _selectedUniqueValueTr: null,
                        _selectedClassBreakTr: null,
                        _isDrawing: !1,
                        _jimuUrl: window.location.protocol + "//" + window.location.host + require.toUrl("jimu"),
                        postMixInProperties: function() {
                            this.nls = window.jimuNls.rendererChooser
                        },
                        postCreate: function() {
                            this.inherited(arguments);
                            this._initFields();
                            this.own(k(this.rendererSelect, "change", b.hitch(this,
                                this._onRendererSelectChange)));
                            this.own(k(this.btnDefaultSym, "click", b.hitch(this, this._showDefaultSymbol)));
                            this.own(k(this.selectedSymbolChooser, "Change", b.hitch(this, this._onSelectedSymbolChange)));
                            this._bindUniqueSettingEvents();
                            this._bindClassBreaksEvents();
                            this.renderer ? this.showByRenderer(this.renderer) : this.type && this.showByType(this.type);
                            this._onRendererSelectChange()
                        },
                        getRenderer: function() {
                            var a = null,
                                b = this.rendererSelect.get("value");
                            if ("simple" === b) a = this._getSimpleRenderer();
                            else if ("unique" ===
                                b) a = this._getUniqueValueRenderer();
                            else if ("color" === b || "size" === b) a = this._getClassBreaksRenderer();
                            return a
                        },
                        reset: function() {
                            this.type = this.renderer = null;
                            c.setStyle(this.domNode, "display", "none")
                        },
                        showByRenderer: function(a) {
                            this.reset();
                            c.setStyle(this.domNode, "display", "block");
                            this.renderer = a;
                            this.type = null;
                            this._setDefaultSymbol(this.renderer && (this.renderer.defaultSymbol || this.renderer.symbol));
                            this._updateRendererSelect();
                            B.isSimpleRenderer(this.renderer) ? this.rendererSelect.set("value", "simple") :
                                B.isUniqueValueRenderer(this.renderer) ? this._showUniqueValueRenderer(this.renderer) : B.isClassBreaksRenderer(this.renderer) ? this._showClassBreaksRenderer(this.renderer) : this.showByType(this.type)
                        },
                        showByType: function(a) {
                            this.reset();
                            this.type = this.renderer = null;
                            "marker" !== a && "line" !== a && "fill" !== a || (c.setStyle(this.domNode, "display", "block"), this.type = a, this.defaultSymbolChooser.showByType(a), this._updateRendererSelect())
                        },
                        _setDefaultSymbol: function(a) {
                            this.type = null;
                            a && (t.isSimpleMarkerSymbol(a) ||
                                t.isPictureMarkerSymbol(a) ? this.type = "marker" : t.isSimpleLineSymbol(a) ? this.type = "line" : t.isSimpleFillSymbol(a) && (this.type = "fill"), this.type && this.defaultSymbolChooser.showBySymbol(a))
                        },
                        _updateRendererSelect: function() {
                            var a = this.rendererSelect.getOptions("size");
                            "marker" === this.type ? a || this.rendererSelect.addOption({
                                value: "size",
                                label: "Size"
                            }) : ("line" === this.type || "fill" === this.type) && a && this.rendererSelect.removeOption(a)
                        },
                        _initFields: function() {
                            if (this.fields && 0 < this.fields.length) {
                                var a = "";
                                q.forEach(this.fields,
                                    b.hitch(this, function(b) {
                                        b && "string" === typeof b && (a || (a = b), this._addField(b))
                                    }));
                                a && !this.fieldComboBox.get("displayedValue") && this.fieldComboBox.set("displayedValue", a)
                            }
                        },
                        _addField: function(a) {
                            this.fieldComboBox.get("store").add({
                                name: a
                            })
                        },
                        _onRendererSelectChange: function() {
                            var a = this.rendererSelect.get("value");
                            "simple" === a ? (c.setStyle(this.fieldSelectTr, "display", "none"), c.setStyle(this.colorBlockTr, "display", "none"), c.setStyle(this.colorBarTr, "display", "none"), c.setStyle(this.domainTr, "display",
                                "none"), c.setStyle(this.classCountTr, "display", "none"), c.setStyle(this.uniqueSetting, "display", "none"), c.setStyle(this.classBreaksSetting, "display", "none"), c.setStyle(this.btnDefaultSym, "display", "none"), c.setStyle(this.symbolSizeDomainTr, "display", "none")) : "unique" === a ? (c.setStyle(this.fieldSelectTr, "display", "table-row"), c.setStyle(this.colorBlockTr, "display", "table-row"), c.setStyle(this.colorBarTr, "display", "none"), c.setStyle(this.domainTr, "display", "none"), c.setStyle(this.classCountTr, "display",
                                "none"), c.setStyle(this.uniqueSetting, "display", "block"), c.setStyle(this.classBreaksSetting, "display", "none"), c.setStyle(this.btnDefaultSym, "display", "inline-block"), c.setStyle(this.symbolSizeDomainTr, "display", "none"), this._updateUniqueValueDivVisibility()) : "color" === a ? (c.setStyle(this.fieldSelectTr, "display", "table-row"), c.setStyle(this.colorBlockTr, "display", "none"), c.setStyle(this.classCountTr, "display", "table-row"), c.setStyle(this.domainTr, "display", "table-row"), c.setStyle(this.colorBarTr, "display",
                                "table-row"), c.setStyle(this.uniqueSetting, "display", "none"), c.setStyle(this.btnDefaultSym, "display", "inline-block"), c.setStyle(this.symbolSizeDomainTr, "display", "none"), this._updateClassBreaksSettingVisibility()) : "size" === a && (c.setStyle(this.fieldSelectTr, "display", "table-row"), c.setStyle(this.colorBlockTr, "display", "none"), c.setStyle(this.colorBarTr, "display", "none"), c.setStyle(this.domainTr, "display", "table-row"), c.setStyle(this.classCountTr, "display", "table-row"), c.setStyle(this.uniqueSetting,
                                "display", "none"), c.setStyle(this.btnDefaultSym, "display", "inline-block"), c.setStyle(this.symbolSizeDomainTr, "display", "table-row"), this._updateClassBreaksSettingVisibility())
                        },
                        _showDefaultSymbol: function() {
                            c.setStyle(this.defaultSymSection, "display", "block");
                            c.setStyle(this.selectedSymSection, "display", "none")
                        },
                        _showSelectedSymbol: function(a) {
                            c.setStyle(this.defaultSymSection, "display", "none");
                            c.setStyle(this.selectedSymSection, "display", "block");
                            var b = this.rendererSelect.get("value");
                            if ("simple" ===
                                b) c.setStyle(this.uniqueSelectedSymInfoSet, "display", "none"), c.setStyle(this.classBreaksSelectedInfoSet, "display", "none");
                            else if ("unique" === b) c.setStyle(this.uniqueSelectedSymInfoSet, "display", "block"), c.setStyle(this.classBreaksSelectedInfoSet, "display", "none");
                            else if ("color" === b || "size" === b) c.setStyle(this.uniqueSelectedSymInfoSet, "display", "none"), c.setStyle(this.classBreaksSelectedInfoSet, "display", "block");
                            this.selectedSymbolChooser.showBySymbol(a)
                        },
                        _onSelectedSymbolChange: function(a) {
                            var b =
                                this.rendererSelect.get("value");
                            "unique" === b ? this._onUniqueSelectedSymbolChange(a) : "color" === b ? this._onClassBreakSelectedSymbolChange(a) : "size" === b && this._onClassBreakSelectedSymbolChange(a)
                        },
                        _cloneSymbol: function(a) {
                            if (!a) return null;
                            a = a.toJson();
                            return s.fromJson(a)
                        },
                        _drawSymbolPreview: function(a, d) {
                            var e = this._cloneSymbol(d);
                            c.empty(a);
                            var f = 80,
                                k = 30;
                            if ("simplemarkersymbol" === e.type) k = f = Math.min(e.size + 12, 125);
                            else if ("picturemarkersymbol" === e.type) {
                                if (!e.url || "http://" === e.url || -1 === e.url.indexOf("http://") &&
                                    -1 === e.url.indexOf("https://") && -1 === e.url.indexOf("data:")) return;
                                k = f = Math.min(Math.max(e.width, e.height), 125)
                            }
                            else if ("simplelinesymbol" === e.type || "cartographiclinesymbol" === e.type) f = 190, k = 20;
                            60 < f && (f = 60);
                            var h = v.createSurface(a, f, k);
                            if ("vml" === v.renderer) {
                                var m = h.getEventSource();
                                c.setStyle(m, "position", "relative");
                                c.setStyle(m.parentNode, "position", "relative")
                            }
                            var m = null,
                                m = s.getShapeDescriptors(e),
                                l;
                            try {
                                l = h.createShape(m.defaultShape).setFill(m.fill).setStroke(m.stroke)
                            }
                            catch (n) {
                                h.clear();
                                h.destroy();
                                return
                            }
                            var e = h.getDimensions(),
                                e = {
                                    dx: e.width / 2,
                                    dy: e.height / 2
                                },
                                z = l.getBoundingBox(),
                                m = z.width,
                                z = z.height;
                            if (m > f || z > k) f = ((f < k ? f : k) - 5) / (m > z ? m : z), b.mixin(e, {
                                xx: f,
                                yy: f
                            });
                            l.applyTransform(e);
                            return h
                        },
                        _getSimpleRenderer: function() {
                            var a = this.defaultSymbolChooser.getSymbol();
                            return new C(a)
                        },
                        _bindUniqueSettingEvents: function() {
                            this.own(k(this.btnAddUniqueValue, "click", b.hitch(this, this._onAddUniqueValue)));
                            this.own(k(this.uniqueSelectedValue, "change", b.hitch(this, this._onUniqueSelectedValueChange)));
                            this.own(k(this.uniqueSelectedLabel,
                                "change", b.hitch(this, this._onUniqueSelectedLabelChange)));
                            this.own(k(this.uniqueColorSelect, "change", b.hitch(this, this._onUniqueColorSelectChange)))
                        },
                        _showUniqueValueRenderer: function(a) {
                            this.rendererSelect.set("value", "unique");
                            this.fieldComboBox.set("displayedValue", a.attributeField);
                            c.empty(this.uniqueSysTbody);
                            q.forEach(a.infos, b.hitch(this, function(a) {
                                this._addUniqueValueTr(a.symbol, a.value, a.label || a.value)
                            }))
                        },
                        _getUniqueValueRenderer: function() {
                            var a = this.defaultSymbolChooser.getSymbol(),
                                c = this.fieldComboBox.get("value"),
                                e = new D(a, c),
                                a = n(".unique-symbol-tr", this.uniqueSysTbody);
                            q.forEach(a, b.hitch(this, function(a) {
                                e.addValue({
                                    value: a.value,
                                    symbol: a.symbol,
                                    label: a.label,
                                    description: a.label
                                })
                            }));
                            return e
                        },
                        _onUniqueColorSelectChange: function() {
                            var a = this._getSelectedUniqueColors(),
                                c = n(".unique-symbol-tr", this.uniqueSysTbody);
                            q.forEach(c, b.hitch(this, function(b, c) {
                                if (b.symbol && !t.isPictureMarkerSymbol(b.symbol)) {
                                    b.symbol.setColor(a[c % a.length]);
                                    var e = n(".symbol-div", b)[0];
                                    this._drawSymbolPreview(e,
                                        b.symbol);
                                    this._selectedUniqueValueTr === b && this._showSelectedSymbol(b.symbol)
                                }
                            }))
                        },
                        _onUniqueSelectedValueChange: function() {
                            var a = this._selectedUniqueValueTr;
                            a && (a.value = this.uniqueSelectedValue.value, a.label = this.uniqueSelectedLabel.value, n(".label-div", a)[0].innerHTML = a.label)
                        },
                        _onUniqueSelectedLabelChange: function() {
                            var a = this._selectedUniqueValueTr;
                            a && (a.label = this.uniqueSelectedLabel.value, n(".label-div", a)[0].innerHTML = a.label)
                        },
                        _onUniqueSelectedSymbolChange: function(a) {
                            var b = this._selectedUniqueValueTr;
                            b && (b.symbol = a, (b = n(".symbol-div", b)[0]) && this._drawSymbolPreview(b, a))
                        },
                        _onAddUniqueValue: function() {
                            var a = b.trim(this.uniqueEditValue.value);
                            if (a) {
                                var c = n(".unique-symbol-tr", this.uniqueSysTbody),
                                    e = this._getSelectedUniqueColors(),
                                    c = this._getUniqueSymbol(e[c.length % e.length]);
                                this._addUniqueValueTr(c, a, a)
                            }
                            this.uniqueEditValue.value = ""
                        },
                        _addUniqueValueTr: function(a, e, d) {
                            e = b.trim(e);
                            var f = c.toDom('<tr class="unique-symbol-tr"><td class="symbol-td"><div class="symbol-div"></div></td><td class="edit-td"><div wrap class="label-div"></div></td><td class="delete-td"><div class="delete-div"></div></td></tr>');
                            c.place(f, this.uniqueSysTbody);
                            this._updateUniqueSymTableStyle();
                            var h = n(".symbol-div", f)[0],
                                s = n(".label-div", f)[0],
                                m = n(".delete-div", f)[0];
                            s.innerHTML = e;
                            this.own(k(f, "click", b.hitch(this, function() {
                                this._selectUniqueValueTr(f)
                            })));
                            this.own(k(m, "click", b.hitch(this, function(a) {
                                a.stopPropagation();
                                this._selectedUniqueValueTr === f && (this._selectedUniqueValueTr = null);
                                c.destroy(f);
                                this._updateUniqueSymTableStyle();
                                this._updateUniqueValueDivVisibility()
                            })));
                            this._drawSymbolPreview(h, a);
                            f.symbol = a;
                            f.value =
                                e;
                            f.label = d;
                            this._selectUniqueValueTr(f);
                            c.setStyle(this.uniqueValueDiv, "display", "block")
                        },
                        _selectUniqueValueTr: function(a) {
                            n(".unique-symbol-tr", this.uniqueSysTbody).removeClass("selected");
                            c.addClass(a, "selected");
                            this._selectedUniqueValueTr = a;
                            this.uniqueSelectedValue.value = a.value;
                            this.uniqueSelectedLabel.value = a.label;
                            this._showSelectedSymbol(a.symbol)
                        },
                        _updateUniqueSymTableStyle: function() {},
                        _getSelectedUniqueColors: function() {
                            var a = this.uniqueColorSelect.get("value");
                            return q.map(this._uniqueColors[a],
                                b.hitch(this, function(a) {
                                    return new m(a)
                                }))
                        },
                        _getUniqueSymbol: function(a) {
                            var b = null;
                            if ("marker" === this.type) b = new z({
                                style: "esriSMSCircle",
                                color: [0, 0, 128, 128],
                                name: "Circle",
                                outline: {
                                    color: [191, 151, 39, 255],
                                    width: 1
                                },
                                type: "esriSMS",
                                size: 18
                            }), b.setColor(a);
                            else if ("line" === this.type || "fill" === this.type) b = this.defaultSymbolChooser.getSymbol(), b = s.fromJson(b.toJson()), b.setColor(a);
                            return b
                        },
                        _updateUniqueValueDivVisibility: function() {
                            var a = 0 === n(".unique-symbol-tr", this.uniqueSysTbody).length ? "none" : "block";
                            c.setStyle(this.uniqueValueDiv, "display", a)
                        },
                        _bindClassBreaksEvents: function() {
                            this.own(k(this.minDomain, "change", b.hitch(this, this._updateClassBreaksTable)));
                            this.own(k(this.maxDomain, "change", b.hitch(this, this._updateClassBreaksTable)));
                            this.own(k(this.classCount, "change", b.hitch(this, this._updateClassBreaksTable)));
                            this.own(k(this.selectedFrom, "change", b.hitch(this, this._onSelectedRangeChange)));
                            this.own(k(this.selectedTo, "change", b.hitch(this, this._onSelectedRangeChange)));
                            this.own(k(this.classBreakSelectedLabel,
                                "change", b.hitch(this, this._onClassBreakSelectedLabelChange)));
                            this.own(k(this.classBreaksColorSelect, "change", b.hitch(this, this._updateClassBreaksTable)));
                            this.own(k(this.minSymbolSize, "change", b.hitch(this, this._updateClassBreaksTable)));
                            this.own(k(this.maxSymbolSize, "change", b.hitch(this, this._updateClassBreaksTable)))
                        },
                        _showClassBreaksRenderer: function(a) {
                            this._isDrawing = !0;
                            this.rendererSelect.set("value", "color");
                            var e = Infinity,
                                d = -Infinity;
                            this.fieldComboBox.set("displayedValue", a.attributeField);
                            this.classCount.set("value", a.infos.length);
                            c.empty(this.classBreaksTbody);
                            q.forEach(a.infos, b.hitch(this, function(a) {
                                var b = a.minValue,
                                    c = a.maxValue;
                                this._addClassBreaksTr(a.symbol, b, c, a.label ? a.label : a.minValue + " —— " + a.maxValue);
                                e = Math.min(e, b);
                                d = Math.max(d, c)
                            }));
                            this.minDomain.set("value", e);
                            this.maxDomain.set("value", d);
                            if ("marker" === this.type) {
                                var f = Infinity,
                                    k = -Infinity;
                                q.forEach(a.infos, b.hitch(this, function(a) {
                                    a = a.symbol;
                                    a = t.isPictureMarkerSymbol(a) ? a.width : a.size;
                                    f = Math.min(a, f);
                                    k = Math.max(a, k)
                                }));
                                this.minSymbolSize.set("value", f);
                                this.maxSymbolSize.set("value", k);
                                this.minSymSize !== this.maxSymSize && this.rendererSelect.set("value", "size")
                            }
                            var h = this;
                            setTimeout(function() {
                                h._isDrawing = !1
                            }, 1E3)
                        },
                        _getClassBreaksRenderer: function() {
                            var a = this.defaultSymbolChooser.getSymbol(),
                                c = this.fieldComboBox.get("value"),
                                e = new y(a, c),
                                a = n(".class-breaks-tr", this.classBreaksTbody);
                            q.forEach(a, b.hitch(this, function(a) {
                                e.addBreak({
                                    minValue: a.from,
                                    maxValue: a.to,
                                    symbol: a.symbol,
                                    label: a.label
                                })
                            }));
                            return e
                        },
                        _onClassBreakSelectedSymbolChange: function(a) {
                            var b = this._selectedClassBreakTr;
                            b && (b.symbol = a, b = n(".symbol-div", b)[0], this._drawSymbolPreview(b, a))
                        },
                        _onSelectedRangeChange: function() {
                            var a = parseFloat(this.selectedFrom.get("value")),
                                b = parseFloat(this.selectedTo.get("value"));
                            if (a > b) {
                                var c = a,
                                    a = b,
                                    b = c;
                                this.selectedFrom.set("value", a);
                                this.selectedTo.set("value", b)
                            }
                            if (c = this._selectedClassBreakTr) c.from = a, c.to = b, a = a + " — " + b, c.label = a, this.classBreakSelectedLabel.value = a, n(".label-div", c)[0].innerHTML =
                                a
                        },
                        _onClassBreakSelectedLabelChange: function() {
                            var a = this._selectedClassBreakTr;
                            if (a) {
                                var b = this.classBreakSelectedLabel.value;
                                a.label = b;
                                n(".label-div", a)[0].innerHTML = b
                            }
                        },
                        _updateClassBreaksTable: function() {
                            if (!this._isDrawing) {
                                c.setStyle(this.classBreaksSetting, "display", "none");
                                c.empty(this.classBreaksTbody);
                                var a = parseFloat(this.minDomain.get("value")),
                                    b = parseFloat(this.maxDomain.get("value"));
                                if (a > b) {
                                    var e = a,
                                        a = b,
                                        b = e;
                                    this.minDomain.set("value", a);
                                    this.maxDomain.set("value", b)
                                }
                                else if (a === b) return;
                                var d = parseFloat(this.minSymbolSize.get("value")),
                                    f = parseFloat(this.maxSymbolSize.get("value"));
                                d > f && (e = d, d = f, f = e, this.minSymbolSize.set("value", d), this.maxSymbolSize.set("value", f));
                                var e = parseInt(this.classCount.get("value"), 10),
                                    k = (b - a) / e,
                                    b = [],
                                    h;
                                for (h = 0; h <= e; h++) {
                                    var s = a + k * h,
                                        s = parseFloat(s.toFixed(4));
                                    b.push(s)
                                }
                                h = this.rendererSelect.get("value");
                                a = [];
                                "color" === h ? a = this._createColorClassBreaksSymbols(e) : "size" === h && (a = this._createSizeClassBreaksSymbols(e, d, f));
                                for (h = 0; h < e; h++) d = b[h], f = b[h + 1], this._addClassBreaksTr(a[h],
                                    d, f, d + " — " + f);
                                this._updateClassBreaksSettingVisibility()
                            }
                        },
                        _selectClassBreaksTr: function(a) {
                            n(".class-breaks-tr", this.classBreaksTbody).removeClass("selected");
                            c.addClass(a, "selected");
                            this._selectedClassBreakTr = a;
                            var b = a.symbol,
                                e = parseFloat(a.from),
                                d = parseFloat(a.to);
                            a = a.label;
                            this.selectedFrom.set("value", e);
                            this.selectedTo.set("value", d);
                            this.classBreakSelectedLabel.value = a;
                            this._showSelectedSymbol(b)
                        },
                        _addClassBreaksTr: function(a, e, d, f) {
                            var h = c.toDom('<tr class="class-breaks-tr"><td class="symbol-td"><div class="symbol-div"></div></td><td class="label-td"><div wrap class="label-div"></div></td><td class="delete-td"><div class="delete-div"></div></td></tr>');
                            c.place(h, this.classBreaksTbody);
                            h.symbol = a;
                            h.from = e;
                            h.to = d;
                            h.label = f;
                            e = n(".symbol-div", h)[0];
                            d = n(".label-div", h)[0];
                            var s = n(".delete-div", h)[0];
                            this._drawSymbolPreview(e, a);
                            d.innerHTML = f;
                            this.own(k(h, "click", b.hitch(this, function() {
                                this._selectClassBreaksTr(h)
                            })));
                            this.own(k(s, "click", b.hitch(this, function(a) {
                                a.stopPropagation();
                                this._selectClassBreaksTr === h && (this._selectClassBreaksTr = null);
                                c.destroy(h);
                                this._updateClassBreaksSettingVisibility()
                            })));
                            this._updateClassBreaksTableStyle();
                            this._showDefaultSymbol();
                            c.setStyle(this.classBreaksSetting, "display", "block")
                        },
                        _updateClassBreaksTableStyle: function() {},
                        _updateClassBreaksSettingVisibility: function() {
                            var a = 0 === n(".class-breaks-tr", this.classBreaksTbody).length ? "none" : "block";
                            c.setStyle(this.classBreaksSetting, "display", a)
                        },
                        _createColorClassBreaksSymbols: function(a) {
                            for (var b = [], c = this._createClassBreaksColors(a), e = 0; e < a; e++) {
                                var d = c[e],
                                    f = null;
                                if ("marker" === this.type) f = new z({
                                    style: "esriSMSCircle",
                                    color: [0, 0, 128, 128],
                                    name: "Circle",
                                    outline: {
                                        color: [191, 151,
                                            39, 255
                                        ],
                                        width: 1
                                    },
                                    type: "esriSMS",
                                    size: 18
                                }), f.setColor(d);
                                else if ("line" === this.type || "fill" === this.type) f = this.defaultSymbolChooser.getSymbol(), f = s.fromJson(f.toJson()), f.setColor(d);
                                b.push(f)
                            }
                            return b
                        },
                        _createClassBreaksColors: function(a) {
                            for (var b = [], c = this.classBreaksColorSelect.get("value"), e = this._classBreaksColors[c], c = new m(e[0]), d = new m(e[1]), e = Math.floor((d.r - c.r) / a), f = Math.floor((d.g - c.g) / a), d = Math.floor((d.b - c.b) / a), h = 0; h < a; h++) {
                                var k = new m([c.r + e * h, c.g + f * h, c.b + d * h, 255]);
                                b.push(k)
                            }
                            return b
                        },
                        _createSizeClassBreaksSymbols: function(a, b, c) {
                            var e = this.defaultSymbolChooser.getSymbol(),
                                d = [];
                            c = (c - b) / (a - 1);
                            for (var f = 0; f < a; f++) {
                                var h = Math.round(b + c * f),
                                    k = e.toJson(),
                                    k = s.fromJson(k);
                                t.isPictureMarkerSymbol(k) ? (k.setWidth(h), k.setHeight(h)) : k.setSize(h);
                                d.push(k)
                            }
                            return d
                        }
                    })
                })
        },
        "jimu/rendererUtils": function() {
            define(["esri/renderers/jsonUtils"], function(d) {
                return {
                    cloneRenderer: function(h) {
                        if (!h) return null;
                        var l = null;
                        try {
                            var f = h.toJson(),
                                l = d.fromJson(f)
                        }
                        catch (a) {
                            console.error(a)
                        }
                        return l
                    },
                    isSimpleRenderer: function(d) {
                        return d &&
                            "esri.renderer.SimpleRenderer" === d.declaredClass
                    },
                    isUniqueValueRenderer: function(d) {
                        return d && "esri.renderer.UniqueValueRenderer" === d.declaredClass
                    },
                    isClassBreaksRenderer: function(d) {
                        return d && "esri.renderer.ClassBreaksRenderer" === d.declaredClass
                    },
                    isDotDensityRenderer: function(d) {
                        return d && "esri.renderer.DotDensityRenderer" === d.declaredClass
                    },
                    isScaleDependentRenderer: function(d) {
                        return d && "esri.renderer.ScaleDependentRenderer" === d.declaredClass
                    },
                    isTemporalRenderer: function(d) {
                        return d && "esri.renderer.TemporalRenderer" ===
                            d.declaredClass
                    }
                }
            })
        },
        "widgets/Geoprocessing/editors/FeatureSetResultEditor": function() {
            define("dojo/_base/declare dojo/_base/lang dojo/_base/array dojo/_base/html dojo/text!./FeatureSetResultEditor.html dijit/_TemplatedMixin ../BaseEditor ./FeatureSetRendererEditor jimu/dijit/PopupConfig jimu/dijit/TabContainer jimu/dijit/CheckBox".split(" "), function(d, h, l, f, a, b, c, q, k, n, v) {
                return d([c, b], {
                    baseClass: "jimu-gp-editor-base jimu-gp-editor-fsrse",
                    templateString: a,
                    featureSetRendererEditor: null,
                    popupConfig: null,
                    tab: null,
                    args: null,
                    constructor: function(a) {
                        this.args = h.mixin({}, a)
                    },
                    postCreate: function() {
                        this.inherited(arguments);
                        this.tab = new n({
                            tabs: [{
                                title: this.nls.renderer,
                                content: this.rendererTab
                            }, {
                                title: this.nls.popup,
                                content: this.popupConfigTab
                            }],
                            isNested: !0
                        });
                        this.tab.placeAt(this.domNode);
                        this.tab.startup();
                        this.featureSetRendererEditor = new q(this.args);
                        this.featureSetRendererEditor.placeAt(this.rendererTab);
                        this.featureSetRendererEditor.startup();
                        var a = {};
                        if (this.args && this.args.param) {
                            this.args.param.defaultValue &&
                                (a.fields = this.args.param.defaultValue.fields);
                            var b = this.args.param.popup;
                            if (b) {
                                var c = l.map(b.fields, function(a) {
                                    return a.name
                                });
                                a.fields = l.map(a.fields, function(a) {
                                    var b = 0 <= l.indexOf(c, a.name);
                                    a.visible = b;
                                    return a
                                });
                                a.title = b.title
                            }
                        }
                        this.popupConfig = new k(a);
                        this.popupConfig.placeAt(this.popupConfigTab);
                        this.popupConfig.startup();
                        this.enablePopup = new v({
                            checked: !this.args.param.popup || this.args.param.popup && this.args.param.popup.enablePopup
                        }, this.enablePopupNode);
                        this.enablePopup.startup()
                    },
                    destroy: function() {
                        this.featureSetRendererEditor &&
                            (this.featureSetRendererEditor.destroy(), this.featureSetRendererEditor = null);
                        this.popupConfig && (this.popupConfig.destroy(), this.popupConfig = null);
                        this.inherited(arguments)
                    },
                    getValue: function() {
                        var a = {
                            renderer: null,
                            popup: this.popupConfig.getConfig()
                        };
                        a.popup.enablePopup = this.enablePopup.checked ? !0 : !1;
                        var b = this.featureSetRendererEditor.getValue();
                        b && (a.renderer = b.renderer);
                        return a
                    }
                })
            })
        },
        "jimu/dijit/PopupConfig": function() {
            define("dojo/_base/declare dijit/_WidgetBase dijit/_TemplatedMixin dijit/_WidgetsInTemplateMixin dojo/text!./templates/PopupConfig.html dojo/_base/lang dojo/_base/html dojo/_base/array esri/request jimu/dijit/SimpleTable dijit/form/TextBox dijit/form/DropDownButton dijit/TooltipDialog dijit/Menu dijit/MenuItem".split(" "),
                function(d, h, l, f, a, b, c, q, k, n, v, m, r, x, w) {
                    return d([h, l, f], {
                        _def: null,
                        baseClass: "jimu-dijit-popup-config",
                        templateString: a,
                        url: null,
                        title: null,
                        fields: null,
                        config: null,
                        postMixInProperties: function() {
                            this.nls = window.jimuNls.popupConfig
                        },
                        postCreate: function() {
                            this.inherited(arguments);
                            this.clear();
                            this.title && this.titleTextBox.set("value", this.title);
                            this.fields ? this.setFields(this.fields) : this.url && this.setUrl(this.url)
                        },
                        getConfig: function() {
                            var a = {
                                    title: b.trim(this.titleTextBox.get("value")),
                                    fields: []
                                },
                                c = this.fieldsTable.getRows();
                            q.forEach(c, b.hitch(this, function(b) {
                                var c = this.fieldsTable.getRowData(b);
                                c.visibility && a.fields.push({
                                    name: c.name,
                                    alias: c.alias,
                                    type: b.fieldType
                                })
                            }));
                            return a
                        },
                        setUrl: function(a) {
                            if ("string" === typeof a) return this.url = a = b.trim(a), this.clear(), this._requestLayerInfo(a)
                        },
                        setFields: function(a) {
                            a instanceof Array && this._setFields(a)
                        },
                        clear: function() {
                            this.fieldsTable.clear();
                            this._resetMenu();
                            this._addEmptyMenuItem()
                        },
                        _resetMenu: function() {
                            var a = this.menu.getChildren();
                            q.forEach(a,
                                b.hitch(this, function(a) {
                                    this.menu.removeChild(a)
                                }))
                        },
                        _addEmptyMenuItem: function() {
                            var a = new w({
                                label: this.nls.noField,
                                onClick: b.hitch(this, function() {
                                    var a = this.menu.getParent();
                                    c.setStyle(a.domNode.parentNode, "display", "none")
                                })
                            });
                            this.menu.addChild(a)
                        },
                        _setFields: function(a) {
                            this._resetMenu();
                            this.fields = q.filter(a, function(a) {
                                return "esriFieldTypeGeometry" !== a.type
                            });
                            0 < this.fields.length ? q.forEach(this.fields, b.hitch(this, function(a) {
                                this._addMenuItem(a);
                                this._addRow(a)
                            })) : this._addEmptyMenuItem()
                        },
                        _requestLayerInfo: function(a) {
                            this._def && this._def.cancel();
                            this._def = k({
                                url: a,
                                content: {
                                    f: "json"
                                },
                                handleAs: "json",
                                callbackParamName: "callback"
                            });
                            this._def.then(b.hitch(this, function(a) {
                                a && a.fields && this._setFields(a.fields)
                            }), b.hitch(this, function(a) {
                                console.error("request layer info failed", a)
                            }));
                            return this._def
                        },
                        _addMenuItem: function(a) {
                            var d = new w({
                                label: a.name + " {" + a.name + "}",
                                onClick: b.hitch(this, function() {
                                    var b = this.titleTextBox.get("value") + "${" + a.name + "}";
                                    this.titleTextBox.set("value", b);
                                    b = this.menu.getParent();
                                    c.setStyle(b.domNode.parentNode, "display", "none")
                                })
                            });
                            this.menu.addChild(d)
                        },
                        _addRow: function(a) {
                            var b = this.fieldsTable.addRow({
                                visibility: !1 !== a.visible,
                                name: a.name,
                                alias: a.alias || a.name
                            });
                            b.success && (b.tr.fieldType = a.type)
                        }
                    })
                })
        },
        "widgets/Geoprocessing/editors/SelectFeatureSetFromLayer": function() {
            define("dojo/_base/declare dojo/_base/lang dojo/_base/array dojo/_base/html dojo/on dijit/_TemplatedMixin jimu/dijit/LayerChooserFromMap esri/tasks/FeatureSet esri/tasks/query ../BaseEditor dojo/text!./SelectFeatureSetFromLayer.html".split(" "),
                function(d, h, l, f, a, b, c, q, k, n, v) {
                    return d([n, b], {
                        templateString: v,
                        postCreate: function() {
                            this.inherited(arguments);
                            this.selectedLayer = null;
                            this.layerChooserFromMap = new c({
                                multiple: !1,
                                createMapResponse: this.map.webMapResponse,
                                showLayerTypes: ["FeatureLayer"],
                                geometryTypes: [this.param.defaultValue.geometryType]
                            });
                            this.layerChooserFromMap.placeAt(this.layerChooseNode);
                            this.layerChooserFromMap.startup();
                            this.own(a(this.layerChooserFromMap, "tree-click", h.hitch(this, this._onTreeClick)));
                            f.addClass(this.domNode,
                                "jimu-gp-editor-sffl");
                            f.addClass(this.domNode, "jimu-gp-editor-base")
                        },
                        _onDropDownClick: function() {
                            "none" === f.getStyle(this.layerChooseNode, "display") ? this._openLayerChooser() : this._closeLayerChooser()
                        },
                        _openLayerChooser: function() {
                            f.setStyle(this.layerChooseNode, "display", "")
                        },
                        _closeLayerChooser: function() {
                            f.setStyle(this.layerChooseNode, "display", "none")
                        },
                        _onTreeClick: function() {
                            var a = !1;
                            l.forEach(this.layerChooserFromMap.getSelectedItems(), function(b) {
                                this.layerNameNode.innerHTML = b.layerInfo.title;
                                this.selectedLayer = b.layerInfo.layerObject;
                                a = !0
                            }, this);
                            a && this._closeLayerChooser()
                        },
                        getValue: function() {
                            return this.selectedLayer
                        },
                        getGPValue: function() {
                            var a = this.selectedLayer;
                            if (null === a) return this.wrapValueToDeferred(null);
                            if (a.url) {
                                var b = new k;
                                b.where = "1=1";
                                return a.queryFeatures(b)
                            }
                            b = new q;
                            b.features = a.graphics;
                            return this.wrapValueToDeferred(b)
                        }
                    })
                })
        },
        "widgets/Geoprocessing/resultRendererManager": function() {
            define("dojo/_base/declare dijit/_WidgetBase dojo/_base/lang dojo/_base/array dojo/_base/html dojo/on ./resultrenderers/simpleResultRenderers".split(" "),
                function(d, h, l, f, a, b, c) {
                    d = {};
                    var q, k, n;
                    d.createResultRenderer = function(a, b) {
                        var d;
                        d = "GPFeatureRecordSetLayer" === a.dataType ? "DrawResultFeatureSet" : "GPRecordSet" === a.dataType ? "RecordSetTable" : "error" === a ? "Error" : "SimpleResultRenderer";
                        var f = {
                            param: a,
                            map: q,
                            nls: k,
                            config: n
                        };
                        if ("DrawResultFeatureSet" === d) f.value = b.value, d = new c.DrawResultFeatureSet(f);
                        else if ("RecordSetTable" === d) f.value = b.value, d = new c.RecordSetTable(f);
                        else if ("SimpleResultRenderer" === d) {
                            var h;
                            if (-1 < ["GPLong", "GPDouble", "GPString", "GPBoolean",
                                    "GPMultiValue"
                                ].indexOf(a.dataType)) h = b.value;
                            else if ("GPLinearUnit" === a.dataType) h = b.value.distance + "&nbsp;" + b.value.units;
                            else if ("GPDate" === a.dataType) h = (new Date(b.value)).toLocaleTimeString();
                            else if ("GPRecordSet" === a.dataType) h = "table";
                            else if ("GPDataFile" === a.dataType || "GPRasterDataLayer" === a.dataType) h = '<a target="_blank" href="' + b.value.url + '">' + b.value.url + "</a>";
                            f.message = h;
                            d = new c.SimpleResultRenderer(f)
                        }
                        else "UnsupportRenderer" === d ? (f.message = "type " + a.dataType + " is not supported for now.",
                            d = new c.UnsupportRenderer(f)) : "Error" === d ? (f.message = k.error, d = new c.ErrorResultRenderer(f)) : (f.message = "unknown renderer name: " + d, d = new c.UnsupportRenderer(f));
                        return d
                    };
                    d.setMap = function(a) {
                        q = a
                    };
                    d.setNls = function(a) {
                        k = a
                    };
                    d.setConfig = function(a) {
                        n = a
                    };
                    return d
                })
        },
        "widgets/Geoprocessing/resultrenderers/simpleResultRenderers": function() {
            define("dojo/_base/declare dojo/_base/lang dojo/_base/array dojo/_base/html dojo/on dojo/store/Memory dgrid/OnDemandGrid esri/layers/GraphicsLayer esri/layers/FeatureLayer esri/graphicsUtils esri/renderers/SimpleRenderer esri/symbols/SimpleMarkerSymbol esri/symbols/SimpleLineSymbol esri/symbols/SimpleFillSymbol esri/renderers/jsonUtils esri/InfoTemplate ../BaseResultRenderer".split(" "),
                function(d, h, l, f, a, b, c, q, k, n, v, m, r, x, w, u, e) {
                    var t = {};
                    t.UnsupportRenderer = d(e, {
                        baseClass: "jimu-gp-resultrenderer-base jimu-gp-renderer-unsupport",
                        postCreate: function() {
                            this.inherited(arguments);
                            f.setAttr(this.domNode, "innerHTML", this.message)
                        }
                    });
                    t.SimpleResultRenderer = d(e, {
                        baseClass: "jimu-gp-resultrenderer-base jimu-gp-renderer-simple",
                        postCreate: function() {
                            this.inherited(arguments);
                            f.setAttr(this.domNode, "innerHTML", this.message)
                        }
                    });
                    t.ErrorResultRenderer = d(e, {
                        baseClass: "jimu-gp-resultrenderer-base jimu-gp-renderer-error",
                        postCreate: function() {
                            this.inherited(arguments);
                            f.setAttr(this.domNode, "innerHTML", this.message)
                        }
                    });
                    t.RecordSetTable = d([e], {
                        baseClass: "jimu-gp-resultrenderer-base jimu-gp-renderer-table",
                        postCreate: function() {
                            this.inherited(arguments);
                            var a = [];
                            if (this.value.fields) a = this.value.fields;
                            else if (this.value.features && 0 < this.value.features.length)
                                for (var d in this.value.features[0].attributes) a.push({
                                    name: d
                                });
                            a = l.map(a, function(a) {
                                return {
                                    label: a.name,
                                    field: a.name
                                }
                            });
                            d = l.map(this.value.features, function(a) {
                                return a.attributes
                            });
                            d = new b({
                                data: d
                            });
                            this.table = new c({
                                columns: a,
                                store: d
                            }, this.domNode)
                        },
                        startup: function() {
                            this.inherited(arguments);
                            this.table.startup()
                        }
                    });
                    t.DrawResultFeatureSet = d(e, {
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
                            f.create("span", {
                                innerHTML: this.nls.drawnOnMap,
                                style: {
                                    marginLeft: "15px"
                                }
                            }, this.domNode);
                            var b = f.create("a", {
                                innerHTML: this.nls.clear,
                                href: "#",
                                style: {
                                    "float": "right"
                                }
                            }, this.domNode);
                            this.own(a(b, "click", h.hitch(this, function() {
                                this.resultLayer && this.map.removeLayer(this.resultLayer)
                            })))
                        },
                        _drawResultFeature: function(a, b) {
                            if (this.config.shareResults) {
                                if (!a.defaultValue || !a.defaultValue.geometryType) throw Error("Output parameter default value does not provide enough information to draw feature layer.");
                                a.defaultValue.name =
                                    a.name;
                                this.resultLayer = new k({
                                    layerDefinition: a.defaultValue,
                                    featureSet: null
                                }, {
                                    id: a.name
                                })
                            }
                            else this.resultLayer = new q({
                                id: a.name
                            });
                            this.map.addLayer(this.resultLayer);
                            a.popup || (a.popup = {
                                enablePopup: !0,
                                title: "",
                                fields: []
                            });
                            var c = b.features.length,
                                d = a.renderer;
                            d ? d = w.fromJson(d) : "esriGeometryPoint" === b.geometryType ? d = new v(new m) : "esriGeometryPolyline" === b.geometryType ? d = new v(new r) : "esriGeometryPolygon" === b.geometryType && (d = new v(new x));
                            var e;
                            a.popup.enablePopup && (e = new u(a.popup.title, this._generatePopupContent()));
                            for (var f = 0; f < c; f++) e && b.features[f].setInfoTemplate(e), this.resultLayer.add(b.features[f]);
                            this.resultLayer.setRenderer(d);
                            try {
                                var h = n.graphicsExtent(b.features);
                                h && (this.resultLayer.fullExtent = h.expand(1.4))
                            }
                            catch (g) {
                                console.error(g)
                            }
                        },
                        _generatePopupContent: function() {
                            var a = "";
                            l.forEach(this.param.popup.fields, function(b) {
                                a = a + "<b>" + b.alias + ": </b>${" + b.name + "}<br>"
                            });
                            return a
                        }
                    });
                    return t
                })
        },
        "widgets/Geoprocessing/BaseResultRenderer": function() {
            define(["dojo/_base/declare", "dojo/_base/lang",
                "dojo/_base/html", "dijit/_WidgetBase"
            ], function(d, h, l, f) {
                return d([f], {
                    baseClass: "jimu-gp-resultrenderer-base",
                    postCreate: function() {
                        this.inherited(arguments)
                    }
                })
            })
        },
        "esri/tasks/Geoprocessor": function() {
            define("dojo/_base/declare dojo/_base/lang dojo/_base/array dojo/_base/Deferred dojo/_base/json dojo/has dojo/io-query ../kernel ../request ../deferredUtils ../geometry/normalizeUtils ./Task ./FeatureSet ./JobInfo ./GPMessage ./LinearUnit ./DataFile ./RasterData ./Date ./ParameterValue ./GPResultImageLayer ../layers/ArcGISDynamicMapServiceLayer ../layers/MapImage".split(" "),
                function(d, h, l, f, a, b, c, q, k, n, v, m, r, x, w, u, e, t, B, F, C, D, y) {
                    d = d(m, {
                        declaredClass: "esri.tasks.Geoprocessor",
                        _eventMap: {
                            "execute-complete": ["results", "messages"],
                            "get-result-data-complete": ["result"],
                            "get-result-image-complete": ["mapImage"],
                            "get-result-image-layer-complete": ["layer"],
                            "job-cancel": ["jobInfo"],
                            "job-complete": ["jobInfo"],
                            "status-update": ["jobInfo"]
                        },
                        constructor: function(a) {
                            this._jobUpdateHandler = h.hitch(this, this._jobUpdateHandler);
                            this._getJobStatus = h.hitch(this, this._getJobStatus);
                            this._getResultDataHandler =
                                h.hitch(this, this._getResultDataHandler);
                            this._getResultImageHandler = h.hitch(this, this._getResultImageHandler);
                            this._executeHandler = h.hitch(this, this._executeHandler);
                            this._updateTimers = [];
                            this.registerConnectEvents()
                        },
                        updateDelay: 1E3,
                        processSpatialReference: null,
                        outputSpatialReference: null,
                        outSpatialReference: null,
                        setUpdateDelay: function(a) {
                            this.updateDelay = a
                        },
                        setProcessSpatialReference: function(a) {
                            this.processSpatialReference = a
                        },
                        setOutputSpatialReference: function(a) {
                            this._setOutSR(a)
                        },
                        setOutSpatialReference: function(a) {
                            this._setOutSR(a)
                        },
                        __msigns: [{
                            n: "execute",
                            c: 3,
                            a: [{
                                i: 0,
                                p: ["*"]
                            }],
                            e: 2,
                            f: 1
                        }, {
                            n: "submitJob",
                            c: 4,
                            a: [{
                                i: 0,
                                p: ["*"]
                            }],
                            e: 3
                        }],
                        _setOutSR: function(a) {
                            this.outSpatialReference = this.outputSpatialReference = a
                        },
                        _getOutSR: function() {
                            return this.outSpatialReference || this.outputSpatialReference
                        },
                        _gpEncode: function(b, c, d) {
                            for (var e in b) {
                                var f = b[e];
                                h.isArray(f) ? b[e] = a.toJson(l.map(f, function(a) {
                                    return this._gpEncode({
                                        item: a
                                    }, !0).item
                                }, this)) : f instanceof Date && (b[e] = f.getTime())
                            }
                            return this._encode(b, c, d)
                        },
                        _decode: function(a) {
                            var b = a.dataType,
                                c = new F(a);
                            if (-1 !== l.indexOf(["GPBoolean", "GPDouble", "GPLong", "GPString"], b)) return c;
                            if ("GPLinearUnit" === b) c.value = new u(c.value);
                            else if ("GPFeatureRecordSetLayer" === b || "GPRecordSet" === b) c.value = new r(c.value);
                            else if ("GPDataFile" === b) c.value = new e(c.value);
                            else if ("GPDate" === b) a = c.value, h.isString(a) ? c.value = new B({
                                date: a
                            }) : c.value = new Date(a);
                            else if ("GPRasterData" === b || "GPRasterDataLayer" === b) a = a.value.mapImage, c.value = a ? new y(a) : new t(c.value);
                            else if (-1 !== b.indexOf("GPMultiValue:")) {
                                var d = b.split(":")[1];
                                a = c.value;
                                c.value = l.map(a, function(a) {
                                    return this._decode({
                                        paramName: "_name",
                                        dataType: d,
                                        value: a
                                    }).value
                                }, this)
                            }
                            else console.log(this.declaredClass + " : GP Data type not handled. : " + c.dataType), c = null;
                            return c
                        },
                        submitJob: function(b, c, d, e, f) {
                            var l = this._getOutSR(),
                                m = f.assembly;
                            b = this._gpEncode(h.mixin({}, this._url.query, {
                                f: "json",
                                "env:outSR": l ? l.wkid || a.toJson(l.toJson()) : null,
                                "env:processSR": this.processSpatialReference ? this.processSpatialReference.wkid || a.toJson(this.processSpatialReference.toJson()) : null
                            }, b), null, m && m[0]);
                            var n = this._jobUpdateHandler,
                                y = this._errorHandler;
                            return k({
                                url: this._url.path + "/submitJob",
                                content: b,
                                callbackParamName: "callback",
                                load: function(a, b) {
                                    n(a, b, !1, c, d, f.dfd)
                                },
                                error: function(a) {
                                    y(a, e, f.dfd)
                                }
                            })
                        },
                        _jobUpdateHandler: function(a, b, c, d, e, f) {
                            var h = a.jobId;
                            b = new x(a);
                            this._successHandler([b], "onStatusUpdate", e, c && f);
                            if (!c) switch (clearTimeout(this._updateTimers[h]), this._updateTimers[h] = null, f && f.progress(b), a.jobStatus) {
                                case x.STATUS_SUBMITTED:
                                case x.STATUS_EXECUTING:
                                case x.STATUS_WAITING:
                                case x.STATUS_NEW:
                                    var k =
                                        this._getJobStatus;
                                    this._updateTimers[h] = setTimeout(function() {
                                        k(h, c, d, e, f)
                                    }, this.updateDelay);
                                    break;
                                default:
                                    this._successHandler([b], "onJobComplete", d, f)
                            }
                        },
                        _getJobStatus: function(a, b, c, d, e) {
                            var f = this._jobUpdateHandler;
                            k({
                                url: this._url.path + "/jobs/" + a,
                                content: h.mixin({}, this._url.query, {
                                    f: "json"
                                }),
                                callbackParamName: "callback",
                                load: function(a, h) {
                                    f(a, h, b, c, d, e)
                                },
                                error: this._errorHandler
                            })
                        },
                        _getResultDataHandler: function(a, b, c, d, e) {
                            try {
                                var f = this._decode(a);
                                this._successHandler([f], "onGetResultDataComplete",
                                    c, e)
                            }
                            catch (h) {
                                this._errorHandler(h, d, e)
                            }
                        },
                        getResultData: function(a, b, c, d) {
                            var e = this._getResultDataHandler,
                                l = this._errorHandler,
                                m = new f(n._dfdCanceller);
                            m._pendingDfd = k({
                                url: this._url.path + "/jobs/" + a + "/results/" + b,
                                content: h.mixin({}, this._url.query, {
                                    f: "json",
                                    returnType: "data"
                                }),
                                callbackParamName: "callback",
                                load: function(a, b) {
                                    e(a, b, c, d, m)
                                },
                                error: function(a) {
                                    l(a, d, m)
                                }
                            });
                            return m
                        },
                        checkJobStatus: function(a, b, c) {
                            var d = this._jobUpdateHandler,
                                e = this._errorHandler,
                                l = new f(n._dfdCanceller);
                            l._pendingDfd =
                                k({
                                    url: this._url.path + "/jobs/" + a,
                                    content: h.mixin({}, this._url.query, {
                                        f: "json"
                                    }),
                                    callbackParamName: "callback",
                                    load: function(a, c) {
                                        d(a, c, !0, null, b, l)
                                    },
                                    error: function(a) {
                                        e(a, c, l)
                                    }
                                });
                            return l
                        },
                        cancelJob: function(a, b, c) {
                            var d = this._errorHandler,
                                e = new f(n._dfdCanceller);
                            e._pendingDfd = k({
                                url: this._url.path + "/jobs/" + a + "/cancel",
                                content: h.mixin({}, this._url.query, {
                                    f: "json"
                                }),
                                callbackParamName: "callback",
                                load: h.hitch(this, function(a, c) {
                                    this._successHandler([a], "onJobCancel", b, e)
                                }),
                                error: function(a) {
                                    d(a, c, e)
                                }
                            });
                            return e
                        },
                        execute: function(b, c, d, e) {
                            var f = this._getOutSR(),
                                l = e.assembly;
                            b = this._gpEncode(h.mixin({}, this._url.query, {
                                f: "json",
                                "env:outSR": f ? f.wkid || a.toJson(f.toJson()) : null,
                                "env:processSR": this.processSpatialReference ? this.processSpatialReference.wkid || a.toJson(this.processSpatialReference.toJson()) : null
                            }, b), null, l && l[0]);
                            var m = this._executeHandler,
                                n = this._errorHandler;
                            return k({
                                url: this._url.path + "/execute",
                                content: b,
                                callbackParamName: "callback",
                                load: function(a, b) {
                                    m(a, b, c, d, e.dfd)
                                },
                                error: function(a) {
                                    n(a,
                                        d, e.dfd)
                                }
                            })
                        },
                        _executeHandler: function(a, b, c, d, e) {
                            try {
                                var f = a.results,
                                    h, k, l = a.messages;
                                h = 0;
                                for (k = f.length; h < k; h++) f[h] = this._decode(f[h]);
                                h = 0;
                                for (k = l.length; h < k; h++) l[h] = new w(l[h]);
                                this._successHandler([f, l], "onExecuteComplete", c, e)
                            }
                            catch (m) {
                                this._errorHandler(m, d, e)
                            }
                        },
                        _getResultImageHandler: function(a, b, c, d, e) {
                            try {
                                var f = this._decode(a);
                                this._successHandler([f], "onGetResultImageComplete", c, e)
                            }
                            catch (h) {
                                this._errorHandler(h, d, e)
                            }
                        },
                        getResultImage: function(a, b, c, d, e) {
                            var l = this._getResultImageHandler,
                                m = this._errorHandler;
                            c = this._gpEncode(h.mixin({}, this._url.query, {
                                f: "json"
                            }, c.toJson()));
                            var y = new f(n._dfdCanceller);
                            y._pendingDfd = k({
                                url: this._url.path + "/jobs/" + a + "/results/" + b,
                                content: c,
                                callbackParamName: "callback",
                                load: function(a, b) {
                                    l(a, b, d, e, y)
                                },
                                error: function(a) {
                                    m(a, e, y)
                                }
                            });
                            return y
                        },
                        cancelJobStatusUpdates: function(a) {
                            clearTimeout(this._updateTimers[a]);
                            this._updateTimers[a] = null
                        },
                        getResultImageLayer: function(a, b, d, e) {
                            if (null == b) {
                                var f = this._url.path.indexOf("/GPServer/");
                                a = this._url.path.substring(0,
                                    f) + "/MapServer/jobs/" + a
                            }
                            else a = this._url.path + "/jobs/" + a + "/results/" + b;
                            this._url.query && (a += "?" + c.objectToQuery(this._url.query));
                            b = null == b ? new D(a, {
                                imageParameters: d
                            }) : new C(a, {
                                imageParameters: d
                            }, !0);
                            this.onGetResultImageLayerComplete(b);
                            e && e(b);
                            return b
                        },
                        onStatusUpdate: function() {},
                        onJobComplete: function() {},
                        onExecuteComplete: function() {},
                        onGetResultDataComplete: function() {},
                        onGetResultImageComplete: function() {},
                        onGetResultImageLayerComplete: function() {},
                        onJobCancel: function() {}
                    });
                    v._createWrappers(d);
                    return d
                })
        },
        "esri/tasks/JobInfo": function() {
            define(["dojo/_base/declare", "dojo/_base/lang", "dojo/has", "../kernel", "./GPMessage"], function(d, h, l, f, a) {
                d = d(null, {
                    declaredClass: "esri.tasks.JobInfo",
                    constructor: function(b) {
                        this.messages = [];
                        h.mixin(this, b);
                        b = this.messages;
                        var c, d = b.length;
                        for (c = 0; c < d; c++) b[c] = new a(b[c])
                    },
                    jobId: "",
                    jobStatus: ""
                });
                h.mixin(d, {
                    STATUS_CANCELLED: "esriJobCancelled",
                    STATUS_CANCELLING: "esriJobCancelling",
                    STATUS_DELETED: "esriJobDeleted",
                    STATUS_DELETING: "esriJobDeleting",
                    STATUS_EXECUTING: "esriJobExecuting",
                    STATUS_FAILED: "esriJobFailed",
                    STATUS_NEW: "esriJobNew",
                    STATUS_SUBMITTED: "esriJobSubmitted",
                    STATUS_SUCCEEDED: "esriJobSucceeded",
                    STATUS_TIMED_OUT: "esriJobTimedOut",
                    STATUS_WAITING: "esriJobWaiting"
                });
                return d
            })
        },
        "esri/tasks/GPMessage": function() {
            define(["dojo/_base/declare", "dojo/_base/lang", "dojo/has", "../kernel"], function(d, h, l, f) {
                d = d(null, {
                    declaredClass: "esri.tasks.GPMessage",
                    constructor: function(a) {
                        h.mixin(this, a)
                    }
                });
                h.mixin(d, {
                    TYPE_INFORMATIVE: "esriJobMessageTypeInformative",
                    TYPE_PROCESS_DEFINITION: "esriJobMessageTypeProcessDefinition",
                    TYPE_PROCESS_START: "esriJobMessageTypeProcessStart",
                    TYPE_PROCESS_STOP: "esriJobMessageTypeProcessStop",
                    TYPE_WARNING: "esriJobMessageTypeWarning",
                    TYPE_ERROR: "esriJobMessageTypeError",
                    TYPE_EMPTY: "esriJobMessageTypeEmpty",
                    TYPE_ABORT: "esriJobMessageTypeAbort"
                });
                return d
            })
        },
        "esri/tasks/DataFile": function() {
            define(["dojo/_base/declare", "dojo/_base/lang", "dojo/has", "../kernel"], function(d, h, l, f) {
                return d(null, {
                    declaredClass: "esri.tasks.DataFile",
                    constructor: function(a) {
                        a && h.mixin(this, a)
                    },
                    url: null,
                    itemID: null,
                    toJson: function() {
                        var a = {};
                        this.url && (a.url = this.url);
                        this.itemID && (a.itemID = this.itemID);
                        return a
                    }
                })
            })
        },
        "esri/tasks/RasterData": function() {
            define(["dojo/_base/declare", "dojo/_base/lang", "dojo/has", "../kernel"], function(d, h, l, f) {
                return d(null, {
                    declaredClass: "esri.tasks.RasterData",
                    constructor: function(a) {
                        a && h.mixin(this, a)
                    },
                    url: null,
                    format: null,
                    itemID: null,
                    toJson: function() {
                        var a = {};
                        this.url && (a.url = this.url);
                        this.format && (a.format = this.format);
                        this.itemID && (a.itemID = this.itemID);
                        return a
                    }
                })
            })
        },
        "esri/tasks/Date": function() {
            define(["dojo/_base/declare",
                "dojo/_base/lang", "dojo/date/locale", "dojo/has", "../kernel"
            ], function(d, h, l, f, a) {
                return d(null, {
                    declaredClass: "esri.tasks.Date",
                    constructor: function(a) {
                        a && (a.format && (this.format = a.format), this.date = l.parse(a.date, {
                            selector: "date",
                            datePattern: this.format
                        }))
                    },
                    date: new Date,
                    format: "EEE MMM dd HH:mm:ss zzz yyyy",
                    toJson: function() {
                        return {
                            date: l.format(this.date, {
                                selector: "date",
                                datePattern: this.format
                            }),
                            format: this.format
                        }
                    }
                })
            })
        },
        "esri/tasks/ParameterValue": function() {
            define(["dojo/_base/declare", "dojo/_base/lang",
                "dojo/has", "../kernel"
            ], function(d, h, l, f) {
                return d(null, {
                    declaredClass: "esri.tasks.ParameterValue",
                    constructor: function(a) {
                        h.mixin(this, a)
                    }
                })
            })
        },
        "esri/tasks/GPResultImageLayer": function() {
            define("dojo/_base/declare dojo/_base/lang dojo/_base/json dojo/has dojo/io-query ../kernel ../layers/ArcGISDynamicMapServiceLayer".split(" "), function(d, h, l, f, a, b, c) {
                return d(c, {
                    declaredClass: "esri.tasks._GPResultImageLayer",
                    constructor: function(a, b) {
                        b && (b.imageParameters && b.imageParameters.extent) && (this.initialExtent =
                            this.fullExtent = b.imageParameters.extent, this.spatialReference = this.initialExtent.spatialReference);
                        this.getImageUrl = h.hitch(this, this.getImageUrl);
                        this.loaded = !0;
                        this.onLoad(this)
                    },
                    getImageUrl: function(b, c, d, f) {
                        var m = b.spatialReference.wkid;
                        f(this._url.path + "?" + a.objectToQuery(h.mixin(this._params, {
                            f: "image",
                            bbox: l.toJson(b.toJson()),
                            bboxSR: m,
                            imageSR: m,
                            size: c + "," + d
                        })))
                    }
                })
            })
        },
        "widgets/Geoprocessing/_build-generate_module": function() {
            define(["dojo/text!./Widget.html", "dojo/text!./css/style.css", "dojo/i18n!./nls/strings",
                "dojo/text!./config.json"
            ], function() {})
        },
        "url:dijit/templates/Calendar.html": '<table cellspacing="0" cellpadding="0" class="dijitCalendarContainer" role="grid" aria-labelledby="${id}_mddb ${id}_year" data-dojo-attach-point="gridNode">\n\t<thead>\n\t\t<tr class="dijitReset dijitCalendarMonthContainer" valign="top">\n\t\t\t<th class=\'dijitReset dijitCalendarArrow\' data-dojo-attach-point="decrementMonth" scope="col">\n\t\t\t\t<span class="dijitInline dijitCalendarIncrementControl dijitCalendarDecrease" role="presentation"></span>\n\t\t\t\t<span data-dojo-attach-point="decreaseArrowNode" class="dijitA11ySideArrow">-</span>\n\t\t\t</th>\n\t\t\t<th class=\'dijitReset\' colspan="5" scope="col">\n\t\t\t\t<div data-dojo-attach-point="monthNode">\n\t\t\t\t</div>\n\t\t\t</th>\n\t\t\t<th class=\'dijitReset dijitCalendarArrow\' scope="col" data-dojo-attach-point="incrementMonth">\n\t\t\t\t<span class="dijitInline dijitCalendarIncrementControl dijitCalendarIncrease" role="presentation"></span>\n\t\t\t\t<span data-dojo-attach-point="increaseArrowNode" class="dijitA11ySideArrow">+</span>\n\t\t\t</th>\n\t\t</tr>\n\t\t<tr role="row">\n\t\t\t${!dayCellsHtml}\n\t\t</tr>\n\t</thead>\n\t<tbody data-dojo-attach-point="dateRowsNode" data-dojo-attach-event="ondijitclick: _onDayClick" class="dijitReset dijitCalendarBodyContainer">\n\t\t\t${!dateRowsHtml}\n\t</tbody>\n\t<tfoot class="dijitReset dijitCalendarYearContainer">\n\t\t<tr>\n\t\t\t<td class=\'dijitReset\' valign="top" colspan="7" role="presentation">\n\t\t\t\t<div class="dijitCalendarYearLabel">\n\t\t\t\t\t<span data-dojo-attach-point="previousYearLabelNode" class="dijitInline dijitCalendarPreviousYear" role="button"></span>\n\t\t\t\t\t<span data-dojo-attach-point="currentYearLabelNode" class="dijitInline dijitCalendarSelectedYear" role="button" id="${id}_year"></span>\n\t\t\t\t\t<span data-dojo-attach-point="nextYearLabelNode" class="dijitInline dijitCalendarNextYear" role="button"></span>\n\t\t\t\t</div>\n\t\t\t</td>\n\t\t</tr>\n\t</tfoot>\n</table>\n',
        "url:jimu/dijit/templates/_TreeNode.html": '<div class="dijitTreeNode" role="presentation">\n\t<div data-dojo-attach-point="rowNode" class="dijitTreeRow" role="presentation">\n\t\t<span data-dojo-attach-point="expandoNode" class="dijitInline dijitTreeExpando" role="presentation"></span>\n\t\t<span data-dojo-attach-point="expandoNodeText" class="dijitExpandoText" role="presentation"></span>\n\t\t<span data-dojo-attach-point="contentNode" class="dijitTreeContent" role="presentation">\n\t\t\t<span role="presentation" class="dijitInline dijitIcon dijitTreeIcon" data-dojo-attach-point="iconNode"></span>\n\t\t\t<span data-dojo-attach-point="labelNode,focusNode" class="dijitTreeLabel" role="treeitem" tabindex="-1" aria-selected="false"></span>\n\t\t</span>\n\t</div>\n\t<div data-dojo-attach-point="containerNode" class="dijitTreeNodeContainer" role="presentation" style="display: none;"></div>\n</div>',
        "url:dijit/templates/TreeNode.html": '<div class="dijitTreeNode" role="presentation"\n\t><div data-dojo-attach-point="rowNode" class="dijitTreeRow" role="presentation"\n\t\t><span data-dojo-attach-point="expandoNode" class="dijitInline dijitTreeExpando" role="presentation"></span\n\t\t><span data-dojo-attach-point="expandoNodeText" class="dijitExpandoText" role="presentation"></span\n\t\t><span data-dojo-attach-point="contentNode"\n\t\t\tclass="dijitTreeContent" role="presentation">\n\t\t\t<span role="presentation" class="dijitInline dijitIcon dijitTreeIcon" data-dojo-attach-point="iconNode"></span\n\t\t\t><span data-dojo-attach-point="labelNode,focusNode" class="dijitTreeLabel" role="treeitem"\n\t\t\t\t   tabindex="-1" aria-selected="false" id="${id}_label"></span>\n\t\t</span\n\t></div>\n\t<div data-dojo-attach-point="containerNode" class="dijitTreeNodeContainer" role="presentation"\n\t\t style="display: none;" aria-labelledby="${id}_label"></div>\n</div>\n',
        "url:dijit/templates/Tree.html": '<div role="tree">\n\t<div class="dijitInline dijitTreeIndent" style="position: absolute; top: -9999px" data-dojo-attach-point="indentDetector"></div>\n\t<div class="dijitTreeExpando dijitTreeExpandoLoading" data-dojo-attach-point="rootLoadingIndicator"></div>\n\t<div data-dojo-attach-point="containerNode" class="dijitTreeContainer" role="presentation">\n\t</div>\n</div>\n',
        "url:widgets/Geoprocessing/editors/FeatureSetEditorChooser.html": '<div>\n\t<div class="field">\n    <input name="mode" type="radio" data-dojo-attach-point="drawMode" data-dojo-props="" data-dojo-attach-event="onclick: _onDrawModeSelect" style="margin-left: 100px;"><label style="margin-left: 5px; width: auto;">${nls.drawOnMap}</label>\n  </div>\n  <div class="field">\n    <input name="mode" type="radio" data-dojo-attach-point="layersMode" style="margin-left: 100px;" data-dojo-attach-event="onclick: _onLayersModeSelect"><label style="margin-left: 5px; width: auto;">${nls.selectLayer}</label>\n  </div>\n  <div class="field" style="height: 30px;">\n    <input name="mode" type="radio" data-dojo-attach-point="urlMode" style="margin-left: 100px;" data-dojo-attach-event="onclick: _onUrlModeSelect"><label style="margin-left: 5px; width: auto">${nls.url}</label>\n    <input name="mode" data-dojo-type="jimu/dijit/URLInput" data-dojo-attach-point="featureSetUrl" data-dojo-props="placeholder: \'feature set URL\'">\n  </div>\n  <div data-dojo-attach-point="symbolChooserSection">\n    <label>${nls.symbol}:</label>\n    <div data-dojo-attach-point="symbolChooserNode"></div>\n  </div>\n</div>\n',
        "url:jimu/dijit/templates/RendererChooser.html": '<div>\n\t<table>\n\t\t<tbody>\n\t\t\t<tr>\n\t\t\t\t<td style="vertical-align:top;border-right:1px solid #ccc;">\n\t\t\t\t\t<div class="setting-section" style="display:inline-block;width:263px;">\n\t\t\t\t\t\t<table class="renderer-setting-table" style="width:100%;margin-bottom:10px;">\n\t\t\t\t\t\t\t<tbody>\n\t\t\t\t\t\t\t\t<tr data-dojo-attach-point="rendererSelectTr">\n\t\t\t\t\t\t\t\t\t<td nowrap>\n\t\t\t\t\t\t\t\t\t\t<span>${nls.use}:</span>\n\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t<td style="width:180px;">\n\t\t\t\t\t\t\t\t\t\t<select data-dojo-attach-point="rendererSelect" data-dojo-type="dijit/form/Select" style="width:100%;height:30px;">\n\t\t\t\t\t\t\t\t\t\t\t<option value="simple" selected=true>${nls.singleSymbol}</option>\n\t\t\t\t\t\t\t\t\t\t\t<option value="unique">${nls.uniqueSymbol}</option>\n\t\t\t\t\t\t\t\t\t\t\t<option value="color">${nls.color}</option>\n\t\t\t\t\t\t\t\t\t\t\t<option value="size">${nls.size}</option>\n\t\t\t\t\t\t\t\t\t\t</select>\n\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t<tr data-dojo-attach-point="fieldSelectTr" style="display:none;">\n\t\t\t\t\t\t\t\t\t<td nowrap>\n\t\t\t\t\t\t\t\t\t\t<span>${nls.toShow}:</span>\n\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t<td class="field-combobox-td" style="width:180px;">\n\t\t\t\t\t\t\t\t\t\t<div data-dojo-attach-point="fieldComboBox" data-dojo-type="dijit/form/ComboBox" class="dijit-form-CombBox" style="width:100%;">\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t<tr data-dojo-attach-point="colorBlockTr" style="display:none;">\n\t\t\t\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t\t\t\t<span>${nls.colors}:</span>\n\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t\t\t\t<div data-dojo-attach-point="uniqueColorSelect" data-dojo-type="dijit/form/Select" style="width:100%;height:30px;">\n\t\t\t\t\t\t\t\t\t\t\t<span data-dojo-value=\'color1\'>\n\t\t\t\t\t\t\t\t\t\t\t\t<img  style="width:150px;height:20px;vertical-align: middle;margin-top: 1px;margin-bottom:1px;" src="${_jimuUrl}/css/images/symbol/c1.png" />\n\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t<span data-dojo-value=\'color2\'>\n\t\t\t\t\t\t\t\t\t\t\t\t<img  style="width:150px;height:20px;vertical-align: middle;margin-top: 1px;margin-bottom:1px;" src="${_jimuUrl}/css/images/symbol/c2.png" />\t\n\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t<span data-dojo-value=\'color3\'>\n\t\t\t\t\t\t\t\t\t\t\t\t<img  style="width:150px;height:20px;vertical-align: middle;margin-top: 1px;margin-bottom:1px;" src="${_jimuUrl}/css/images/symbol/c3.png" />\n\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t<span data-dojo-value=\'color4\'>\n\t\t\t\t\t\t\t\t\t\t\t\t<img  style="width:150px;height:20px;vertical-align: middle;margin-top: 1px;margin-bottom:1px;" src="${_jimuUrl}/css/images/symbol/c4.png" />\n\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t<span data-dojo-value=\'color5\'>\n\t\t\t\t\t\t\t\t\t\t\t\t<img  style="width:150px;height:20px;vertical-align: middle;margin-top: 1px;margin-bottom:1px;" src="${_jimuUrl}/css/images/symbol/c5.png" />\n\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t<span data-dojo-value=\'color6\'>\n\t\t\t\t\t\t\t\t\t\t\t\t<img  style="width:150px;height:20px;vertical-align: middle;margin-top: 1px;margin-bottom:1px;" src="${_jimuUrl}/css/images/symbol/c6.png" />\n\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t<tr data-dojo-attach-point="domainTr" style="display:none;">\n\t\t\t\t\t\t\t\t\t<td nowrap>\n\t\t\t\t\t\t\t\t\t\t<span>${nls.domain}:</span>\n\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t<td style="width:180px;">\n\t\t\t\t\t\t\t\t\t\t<input data-dojo-attach-point="minDomain" type="text" data-dojo-type="dijit/form/NumberTextBox" required="true" value="0"\n\t\t\t\t\t\t\t\t\t\t style="width:60px;" />\n\t\t\t\t\t\t\t\t\t\t<span>  —  </span>\n\t\t\t\t\t\t\t\t\t\t<input data-dojo-attach-point="maxDomain" type="text" data-dojo-type="dijit/form/NumberTextBox" required="true" value="0"\n\t\t\t\t\t\t\t\t\t\t style="width:60px;" />\n\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t<tr data-dojo-attach-point="classCountTr" style="display:none;">\n\t\t\t\t\t\t\t\t\t<td nowrap>\n\t\t\t\t\t\t\t\t\t\t<span>${nls.classes}:</span>\n\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t<td style="width:180px;">\n\t\t\t\t\t\t\t\t\t\t<input data-dojo-attach-point="classCount" data-dojo-type="dijit/form/NumberSpinner" style="display:inline-block;width:100px;"\n\t\t\t\t\t\t\t\t\t\tdata-dojo-props=\'value:5,smallDelta:1,constraints:{min:2,max:20},intermediateChanges:true\' />\n\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t<tr data-dojo-attach-point="colorBarTr" style="display:none;">\n\t\t\t\t\t\t\t\t\t<td nowrap>\n\t\t\t\t\t\t\t\t\t\t<span>${nls.colors}:</span>\n\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t<td style="width:180px;">\n\t\t\t\t\t\t\t\t\t\t<div data-dojo-attach-point="classBreaksColorSelect" data-dojo-type="dijit/form/Select" style="width:100%;height:30px;">\n\t\t\t\t\t\t\t\t\t\t\t<span data-dojo-value="color1">\n\t\t\t\t\t\t\t\t\t\t\t\t<img style="width:150px;height:20px;vertical-align: middle;margin-top: 1px;margin-bottom:1px;" src="${_jimuUrl}/css/images/symbol/cb1.png" />\n\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t<span data-dojo-value="color2">\n\t\t\t\t\t\t\t\t\t\t\t\t<img style="width:150px;height:20px;vertical-align: middle;margin-top: 1px;margin-bottom:1px;" src="${_jimuUrl}/css/images/symbol/cb2.png" />\n\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t<span data-dojo-value="color3">\n\t\t\t\t\t\t\t\t\t\t\t\t<img style="width:150px;height:20px;vertical-align: middle;margin-top: 1px;margin-bottom:1px;" src="${_jimuUrl}/css/images/symbol/cb3.png" />\n\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t<span data-dojo-value="color4">\n\t\t\t\t\t\t\t\t\t\t\t\t<img style="width:150px;height:20px;vertical-align: middle;margin-top: 1px;margin-bottom:1px;" src="${_jimuUrl}/css/images/symbol/cb4.png" />\n\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t<span data-dojo-value="color5">\n\t\t\t\t\t\t\t\t\t\t\t\t<img style="width:150px;height:20px;vertical-align: middle;margin-top: 1px;margin-bottom:1px;" src="${_jimuUrl}/css/images/symbol/cb5.png" />\n\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t<span data-dojo-value="color6">\n\t\t\t\t\t\t\t\t\t\t\t\t<img style="width:150px;height:20px;vertical-align: middle;margin-top: 1px;margin-bottom:1px;" src="${_jimuUrl}/css/images/symbol/cb6.png" />\n\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t<span data-dojo-value="color7">\n\t\t\t\t\t\t\t\t\t\t\t\t<img style="width:150px;height:20px;vertical-align: middle;margin-top: 1px;margin-bottom:1px;" src="${_jimuUrl}/css/images/symbol/cb7.png" />\n\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t<span data-dojo-value="color8">\n\t\t\t\t\t\t\t\t\t\t\t\t<img style="width:150px;height:20px;vertical-align: middle;margin-top: 1px;margin-bottom:1px;" src="${_jimuUrl}/css/images/symbol/cb8.png" />\n\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t<span data-dojo-value="color9">\n\t\t\t\t\t\t\t\t\t\t\t\t<img style="width:150px;height:20px;vertical-align: middle;margin-top: 1px;margin-bottom:1px;" src="${_jimuUrl}/css/images/symbol/cb9.png" />\n\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t<span data-dojo-value="color10">\n\t\t\t\t\t\t\t\t\t\t\t\t<img style="width:150px;height:20px;vertical-align: middle;margin-top: 1px;margin-bottom:1px;" src="${_jimuUrl}/css/images/symbol/cb10.png" />\n\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t<span data-dojo-value="color11">\n\t\t\t\t\t\t\t\t\t\t\t\t<img style="width:150px;height:20px;vertical-align: middle;margin-top: 1px;margin-bottom:1px;" src="${_jimuUrl}/css/images/symbol/cb11.png" />\n\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t<span data-dojo-value="color12">\n\t\t\t\t\t\t\t\t\t\t\t\t<img style="width:150px;height:20px;vertical-align: middle;margin-top: 1px;margin-bottom:1px;" src="${_jimuUrl}/css/images/symbol/cb12.png" />\n\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t<span data-dojo-value="color13">\n\t\t\t\t\t\t\t\t\t\t\t\t<img style="width:150px;height:20px;vertical-align: middle;margin-top: 1px;margin-bottom:1px;" src="${_jimuUrl}/css/images/symbol/cb13.png" />\n\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t<span data-dojo-value="color14">\n\t\t\t\t\t\t\t\t\t\t\t\t<img style="width:150px;height:20px;vertical-align: middle;margin-top: 1px;margin-bottom:1px;" src="${_jimuUrl}/css/images/symbol/cb14.png" />\n\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t<span data-dojo-value="color15">\n\t\t\t\t\t\t\t\t\t\t\t\t<img style="width:150px;height:20px;vertical-align: middle;margin-top: 1px;margin-bottom:1px;" src="${_jimuUrl}/css/images/symbol/cb15.png" />\n\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t<span data-dojo-value="color16">\n\t\t\t\t\t\t\t\t\t\t\t\t<img style="width:150px;height:20px;vertical-align: middle;margin-top: 1px;margin-bottom:1px;" src="${_jimuUrl}/css/images/symbol/cb16.png" />\n\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t<span data-dojo-value="color17">\n\t\t\t\t\t\t\t\t\t\t\t\t<img style="width:150px;height:20px;vertical-align: middle;margin-top: 1px;margin-bottom:1px;" src="${_jimuUrl}/css/images/symbol/cb17.png" />\n\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t<span data-dojo-value="color18">\n\t\t\t\t\t\t\t\t\t\t\t\t<img style="width:150px;height:20px;vertical-align: middle;margin-top: 1px;margin-bottom:1px;" src="${_jimuUrl}/css/images/symbol/cb18.png" />\n\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t<span data-dojo-value="color19">\n\t\t\t\t\t\t\t\t\t\t\t\t<img style="width:150px;height:20px;vertical-align: middle;margin-top: 1px;margin-bottom:1px;" src="${_jimuUrl}/css/images/symbol/cb19.png" />\n\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t<span data-dojo-value="color20">\n\t\t\t\t\t\t\t\t\t\t\t\t<img style="width:150px;height:20px;vertical-align: middle;margin-top: 1px;margin-bottom:1px;" src="${_jimuUrl}/css/images/symbol/cb20.png" />\n\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t<span data-dojo-value="color21">\n\t\t\t\t\t\t\t\t\t\t\t\t<img style="width:150px;height:20px;vertical-align: middle;margin-top: 1px;margin-bottom:1px;" src="${_jimuUrl}/css/images/symbol/cb21.png" />\n\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t<span data-dojo-value="color22">\n\t\t\t\t\t\t\t\t\t\t\t\t<img style="width:150px;height:20px;vertical-align: middle;margin-top: 1px;margin-bottom:1px;" src="${_jimuUrl}/css/images/symbol/cb22.png" />\n\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t<span data-dojo-value="color23">\n\t\t\t\t\t\t\t\t\t\t\t\t<img style="width:150px;height:20px;vertical-align: middle;margin-top: 1px;margin-bottom:1px;" src="${_jimuUrl}/css/images/symbol/cb23.png" />\n\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t<span data-dojo-value="color24">\n\t\t\t\t\t\t\t\t\t\t\t\t<img style="width:150px;height:20px;vertical-align: middle;margin-top: 1px;margin-bottom:1px;" src="${_jimuUrl}/css/images/symbol/cb24.png" />\n\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t<span data-dojo-value="color25">\n\t\t\t\t\t\t\t\t\t\t\t\t<img style="width:150px;height:20px;vertical-align: middle;margin-top: 1px;margin-bottom:1px;" src="${_jimuUrl}/css/images/symbol/cb25.png" />\n\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t<span data-dojo-value="color26">\n\t\t\t\t\t\t\t\t\t\t\t\t<img style="width:150px;height:20px;vertical-align: middle;margin-top: 1px;margin-bottom:1px;" src="${_jimuUrl}/css/images/symbol/cb26.png" />\n\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t<span data-dojo-value="color27">\n\t\t\t\t\t\t\t\t\t\t\t\t<img style="width:150px;height:20px;vertical-align: middle;margin-top: 1px;margin-bottom:1px;" src="${_jimuUrl}/css/images/symbol/cb27.png" />\n\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t<tr data-dojo-attach-point="symbolSizeDomainTr" style="display:none;">\n\t\t\t\t\t\t\t\t\t<td nowrap>\n\t\t\t\t\t\t\t\t\t\t<span>${nls.symbolSize}:</span>\n\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t\t\t\t<input data-dojo-attach-point="minSymbolSize" type="text" data-dojo-type="dijit/form/NumberTextBox" required="true" value="5" data-dojo-props="constraints:{min:1,max:50,places:0}" style="width:60px;" />\n\t\t\t\t\t\t\t\t\t\t<span>  —  </span>\n\t\t\t\t\t\t\t\t\t\t<input data-dojo-attach-point="maxSymbolSize" type="text" data-dojo-type="dijit/form/NumberTextBox" required="true" value="30" data-dojo-props="constraints:{min:1,max:50,places:0}"  style="width:60px;" />\n\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t</tbody>\n\t\t\t\t\t\t</table>\n\t\t\t\t\t\t<div data-dojo-attach-point="uniqueSetting" style="display:none;">\n\t\t\t\t\t\t\t<div data-dojo-attach-point="uniqueValueDiv" class="unique-value-div">\n\t\t\t\t\t\t\t\t<table class="unique-symbol-table" style="width:100%;">\n\t\t\t\t\t\t\t\t\t<tbody data-dojo-attach-point="uniqueSysTbody">\n\t\t\t\t\t\t\t\t\t</tbody>\n\t\t\t\t\t\t\t\t</table>\n\t\t\t\t\t\t\t</div>\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t<div>\n\t\t\t\t\t\t\t\t<span>${nls.addValue}:</span>\n\t\t\t\t\t\t\t\t<div>\n\t\t\t\t\t\t\t\t\t<input data-dojo-attach-point="uniqueEditValue" type="text" />\n\t\t\t\t\t\t\t\t\t<span data-dojo-attach-point="btnAddUniqueValue"  style=\'display:inline-block;width:14px;height:14px;cursor:pointer;background:no-repeat center center url(${_jimuUrl}/css/images/btn_add.png)\'></span>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class="class-breaks-div" data-dojo-attach-point="classBreaksSetting" style="display:none;">\n\t\t\t\t\t\t\t<table class="class-breaks-table" style="width:100%;">\n\t\t\t\t\t\t\t\t<tbody data-dojo-attach-point="classBreaksTbody">\n\t\t\t\t\t\t\t\t</tbody>\n\t\t\t\t\t\t\t</table>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div data-dojo-attach-point="btnDefaultSym" class="jimu-btn" style="display:none;margin-top:10px;margin-left:5px;">${nls.setDefaultSymbol}</div>\n\t\t\t\t\t</div>\n\t\t\t\t</td>\n\t\t\t\t<td style="vertical-align:top;">\n\t\t\t\t\t<div class="symbol-section" style="display:inline-block;">\n\t\t\t\t\t\t<div data-dojo-attach-point="defaultSymSection">\n\t\t\t\t\t\t\t<div>${nls.defaultSymbol}</div>\n\t\t\t\t\t\t\t<div data-dojo-attach-point="defaultSymbolChooser" data-dojo-type="jimu/dijit/SymbolChooser"></div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div data-dojo-attach-point="selectedSymSection" style="display:none;">\n\t\t\t\t\t\t\t<div>${nls.selectedSymbol}</div>\n\t\t\t\t\t\t\t<div data-dojo-attach-point="uniqueSelectedSymInfoSet" style="display:none;">\n\t\t\t\t\t\t\t\t<table style="width:100%;">\n\t\t\t\t\t\t\t\t\t<tbody>\n\t\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t\t\t\t\t\t<span>${nls.value}:</span>\n\t\t\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t\t\t\t\t\t<input data-dojo-attach-point="uniqueSelectedValue" type="text" />\n\t\t\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t\t\t\t\t\t<span>${nls.label}:</span>\n\t\t\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t\t\t\t\t\t<input data-dojo-attach-point="uniqueSelectedLabel" type="text" />\n\t\t\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t\t</tr>\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t</tbody>\n\t\t\t\t\t\t\t\t</table>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div data-dojo-attach-point="classBreaksSelectedInfoSet" style="display:none;">\n\t\t\t\t\t\t\t\t<table style="width:100%;margin-top:10px;">\n\t\t\t\t\t\t\t\t\t<tbody>\n\t\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t\t\t\t\t\t<span>${nls.range}:</span>\n\t\t\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t\t\t\t\t\t<input data-dojo-attach-point="selectedFrom" type="text" data-dojo-type="dijit/form/NumberTextBox" required="true" value="0" style="width:60px;" />\n\t\t\t\t\t\t\t\t\t\t\t\t<span>  —  </span>\n\t\t\t\t\t\t\t\t\t\t\t\t<input data-dojo-attach-point="selectedTo" type="text" data-dojo-type="dijit/form/NumberTextBox" required="true" value="0"  style="width:60px;" />\n\t\t\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t\t\t\t\t\t<span>${nls.label}:</span>\n\t\t\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t\t\t\t\t\t<input data-dojo-attach-point="classBreakSelectedLabel" type="text" />\n\t\t\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t</tbody>\n\t\t\t\t\t\t\t\t</table>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div data-dojo-attach-point="selectedSymbolChooser" data-dojo-type="jimu/dijit/SymbolChooser"></div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</td>\n\t\t\t</tr>\n\t\t</tbody>\n\t</table>\n</div>',
        "url:widgets/Geoprocessing/editors/FeatureSetResultEditor.html": '<div>\n\t<div data-dojo-attach-point="rendererTab"></div>\n\t<div data-dojo-attach-point="popupConfigTab">\n    <div style="margin: 10px">\n      <div data-dojo-attach-point="enablePopupNode"></div> <label>Enable popup</label>\n    </div>\n  </div>\n</div>',
        "url:jimu/dijit/templates/PopupConfig.html": '<div style="width:560px;">\n\t<table class="popup-config-layout" style="width:100%;">\n\t\t<tbody>\n\t\t\t<tr>\n\t\t\t\t<td nowrap>\n\t\t\t\t\t<span>${nls.title}</span>\n\t\t\t\t</td>\n\t\t\t\t<td>\n\t\t\t\t\t<input data-dojo-attach-point="titleTextBox" data-dojo-type="dijit/form/TextBox" style="width:370px;" />\n\t\t\t\t</td>\n\t\t\t\t<td style="width:70px;">\n\t\t\t\t\t<div data-dojo-attach-point="btnAdd" data-dojo-type="dijit/form/DropDownButton">\n\t\t\t\t\t\t<span>${nls.add}</span>\n\t\t\t\t\t\t<div data-dojo-type="dijit/TooltipDialog">\n\t\t\t\t\t\t\t<div data-dojo-attach-point="menu" data-dojo-type="dijit/Menu"></div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</td>\n\t\t\t</tr>\n\t\t\t<tr>\n\t\t\t\t<td nowrap>\n\t\t\t\t\t<span>${nls.fields}</span>\n\t\t\t\t</td>\n\t\t\t\t<td colspan="2">\n\t\t\t\t\t<div data-dojo-attach-point="fieldsTable" data-dojo-type="jimu/dijit/SimpleTable" data-dojo-props=\'fields:[{name:"visibility",title:"${nls.visibility}",type:"checkbox"},{name:"name",title:"${nls.name}",type:"text",editable:false},{name:"alias",title:"${nls.alias}",type:"text",editable:true},{name:"actions",title:"${nls.actions}",type:"actions",actions:["up","down"]}]\'></div>\n\t\t\t\t</td>\n\t\t\t</tr>\n\t\t</tbody>\n\t</table>\n</div>',
        "url:widgets/Geoprocessing/editors/SelectFeatureSetFromLayer.html": '<div>\n\t<div class="layer-name" data-dojo-attach-point="layerNameNode" data-dojo-attach-event="onclick: _onDropDownClick"></div>\n\t<div class="drop-select" data-dojo-attach-point="dropArrowNode" data-dojo-attach-event="onclick: _onDropDownClick"></div>\n  <div class="layer-chooser" data-dojo-attach-point="layerChooseNode" style="display: none"></div>\n</div>',
        "url:widgets/Geoprocessing/Widget.html": '<div>\n  <div class="input-pane" data-dojo-attach-point="inputPaneNode">\n    <div class="section" data-dojo-attach-point="inputSectionNode"></div>\n    <div class="section jimu-r-row opts" data-dojo-attach-point="optsSectionNode">\n      <div class="col-1-2">\n        <a class="help" data-dojo-attach-point="helpLinkNode" target="_blank">${nls.help}</a>\n      </div>\n      <div class="col-1-2">\n        <div class="jimu-btn" data-dojo-attach-point="exeNode" data-dojo-attach-event="onclick: _onExecuteClick">${nls.execute}</div>\n      </div>\n    </div>\n  </div>\n  <div class="output-pane" data-dojo-attach-point="outputPaneNode">\n    <div class="section info" data-dojo-attach-point="infoNode">\n      <div data-dojo-attach-point="loadingNode" class="loading"></div>\n      <div data-dojo-attach-point="infoTextNode" class="text"></div>\n    </div>\n    <div class="section" data-dojo-attach-point="outputSectionNode"></div>\n  </div>\n</div>\n',
        "url:widgets/Geoprocessing/css/style.css": '.jimu-gp-editor-base{display: inline-block;}.jimu-gp-editor-multivalue{}.jimu-gp-editor-multivalue .single-input{margin-top: 5px;}.jimu-gp-editor-multivalue .remove{background-color: #24B9F0; width: 20px; height: 20px; border-radius: 10px; color: white; font-size: 20px; font-weight: bold; line-height: 19px; margin-left: 10px; display: inline-block; cursor: pointer; text-align: center;}.jimu-gp-editor-multivalue .add-input{text-align: right;}.jimu-gp-editor-multivalue .add-input .add-btn{background-color: #24B9F0; width: 20px; height: 20px; border-radius: 10px; color: white; font-size: 20px; font-weight: bold; line-height: 19px; margin-left: 10px; display: inline-block; cursor: pointer; text-align: center;}.jimu-gp-editor-sffl{height: 30px; position: relative;}.jimu-gp-editor-sffl .layer-name{height: 30px; line-height: 30px; width: 100%; border: solid 1px rgba(0,0,0,0.1); cursor: pointer;}.jimu-gp-editor-sffl .drop-select{position: absolute; right: 0; top: 0; width: 30px; height: 30px; background: center center no-repeat url("../images/v01.png"); cursor: pointer;}.jimu-gp-editor-sffl .drop-select:hover{background: center center no-repeat url("../images/v02.png");}.jimu-gp-editor-sffl .layer-chooser{position: absolute; width: 100%; top: 30px; left: 0; height: 200px; z-index: 1000; overflow: auto; border: 1px solid rgba(0,0,0,0.2);}.jimu-widget-geoprocessing{height: 100%; margin: -14px; font-size: 14px;}.jimu-widget-geoprocessing .jimu-viewstack{padding: 14px;}.jimu-widget-geoprocessing .section{overflow: visible;}.jimu-widget-geoprocessing .opts [class*="col"]{height: 45px;}.jimu-widget-geoprocessing .opts a.help{line-height: 45px;}.jimu-widget-geoprocessing .section.opts{margin-top: 20px;}.jimu-widget-geoprocessing .section .jimu-btn{float: none; margin: auto; width: 150px;}.jimu-widget-geoprocessing .info{display: none; height: 80px; position: relative;}.jimu-widget-geoprocessing .info .text{text-align: center; width: 100%; bottom: 0; position: absolute;}.jimu-widget-geoprocessing .input-node, .jimu-widget-geoprocessing .output-node{overflow: visible; margin-top: 10px;}.jimu-widget-geoprocessing .input-node>.input-label, .jimu-widget-geoprocessing .output-node>.output-label{overflow: hidden; font-size: 14px; color: #686868;}.jimu-widget-geoprocessing .input-node>.editor-container, .jimu-widget-geoprocessing .output-node>.renderer-container{margin-top: 5px; width: 100%;}.jimu-widget-geoprocessing .jimu-draw-box .drawings-clear{position: absolute; right: 5px; top: 27px;}.TabTheme .jimu-widget-geoprocessing .jimu-tab>.control>.tab.jimu-state-selected{border-top: 0;}',
        "url:widgets/Geoprocessing/config.json": "{}",
        "*now": function(d) {
            d(['dojo/i18n!*preload*widgets/Geoprocessing/nls/Widget*["ar","cs","da","de","en","es","et","fi","fr","he","it","ja","ko","lt","lv","nb","nl","pl","pt-br","pt-pt","ro","ru","sv","th","tr","zh-cn","ROOT"]'])
        }
    }
});
define("dojo/_base/declare dojo/_base/lang dojo/_base/array dojo/_base/html dojo/on dojo/Deferred dojo/promise/all dojo/store/Memory dijit/_WidgetBase dijit/form/Select jimu/BaseWidget jimu/dijit/TabContainer jimu/dijit/LoadingIndicator jimu/dijit/Message ./editorManager ./resultRendererManager esri/tasks/Geoprocessor esri/tasks/JobInfo esri/layers/ImageParameters esri/request esri/geometry/Extent esri/graphicsUtils ./addFC".split(" "),
function(d, h, l, f, a, b, c, q, k, n, v, m, r, x, w, u, e, t, B, F, C, D, addFC) {
    return d([v], {
        baseClass: "jimu-widget-geoprocessing",
        name: "Geoprocessing",
        startup: function() {
            this.config.taskUrl ? (this.inputNodes = [], this.resultNodes = [], this.resultLayers = [], w.setMap(this.map), w.setNls(this.nls), u.setMap(this.map), u.setNls(this.nls), u.setConfig(this.config), this.gp = new e(this.config.taskUrl), this.gp.setOutSpatialReference(this.map.spatialReference), this.config.updateDelay && this.gp.setUpdateDelay(this.config.updateDelay), this.tab = new m({
                    tabs: [{
                        title: this.nls.input,
                        content: this.inputPaneNode
                    }, {
                        title: this.nls.output,
                        content: this.outputPaneNode
                    }],
                    selected: this.nls.input
                }), this.tab.placeAt(this.domNode), this.tab.startup(), this.loading = new r({
                    hidden: !0
                }, this.loadingNode),
                this.loading.startup(),
                this.own(a(this.gp, 
                "execute-complete",
                h.hitch(this, this.onExecuteComplete))),
                this.own(a(this.gp, 
                "job-complete",
                h.hitch(this, this.onJobComplete))),
                this.own(a(this.gp, "job-cancel",
                h.hitch(this, this.onJonCancel))),
                this.own(a(this.gp, "status-update",
                h.hitch(this, this.onStatusUpdate))),
                this.own(a(this.gp, 
                "get-result-data-complete",
                h.hitch(this, this.onGetResultDataComplate))),
                this.own(a(this.gp, "get-result-image-layer-complete",
                h.hitch(this, this.onGetResultImageLayerComplate))),
                this.own(a(this.gp, "error", h.hitch(this, this.onError))),
                f.setAttr(this.helpLinkNode, "href", this.config.helpUrl),
                this._createInputNodes()) : f.setStyle(this.domNode, "display", "none")
        },
        executeGP: function() {
            this._clearLastResult();
            this._getInputParamValues().then(h.hitch(this, function(a) {
                this._showLoading();
                f.addClass(this.exeNode, "jimu-state-disabled");
                this.config.isSynchronous ? this.gp.execute(a) : this.gp.submitJob(a);
                this.tab.selectTab(this.nls.output)
            }))
        },
        onExecuteComplete: function(a) {
            this._hideLoading();
            this._createOutputNodes(a.results);
            f.removeClass(this.exeNode, "jimu-state-disabled")
        },
        onJobComplete: function(a) {
            this._hideLoading();
            this.jobId = "";
            f.removeClass(this.exeNode, "jimu-state-disabled");
            if (this.config.useResultMapServer) {
                var b = new B({
                    imageSpatialReference: this.map.spatialReference
                });
                l.forEach(this.config.outputParams, function(c) {
                    -1 < ["GPFeatureRecordSetLayer", "GPRasterDataLayer", "GPRecordSet"].indexOf(c.dataType) &&
                        this.gp.getResultImageLayer(a.jobInfo.jobId, c.name, b)
                }, this);
                l.forEach(this.config.outputParams, function(b) {
                    -1 >= ["GPFeatureRecordSetLayer", "GPRasterDataLayer", "GPRecordSet"].indexOf(b.dataType) && this.gp.getResultData(a.jobInfo.jobId, b.name)
                }, this)
            }
            else l.forEach(this.config.outputParams, function(b) {
                this.gp.getResultData(a.jobInfo.jobId, b.name)
            }, this)
        },
        onJonCancel: function() {
            this.loading.hide();
            this.infoTextNode.innerHTML = "Canceled";
            f.removeClass(this.exeNode, "jimu-state-disabled");
            this.jobId = ""
        },
        onStatusUpdate: function(a) {
            this.jobId = a.jobInfo.jobId;
            a.jobInfo.jobStatus === t.STATUS_SUCCEEDED ? this._hideLoading() : this._showLoading(a.jobInfo.jobStatus)
        },
        onGetResultDataComplate: function(a) {
            this._createOutputNode(this._getOutputParamByName(a.result.paramName), a.result)
        },
        onGetResultImageLayerComplate: function(a) {
            this.resultLayers.push(a.layer);
            this.map.addLayer(a.layer);
            a.layer.fullExtent ? this.map.setExtent(a.layer.fullExtent) : F({
                url: a.layer.url,
                content: {
                    f: "json",
                    imageSR: this.map.spatialReference.wkid
                },
                handleAs: "json",
                callbackParamName: "callback"
            }).then(h.hitch(this, function(a) {
                a.value.mapImage.extent && this.map.setExtent(new C(a.value.mapImage.extent))
            }))
        },
        onError: function(a) {
            this.loading.hide();
            this.infoTextNode.innerHTML = a.error.message;
            f.removeClass(this.exeNode, "jimu-state-disabled");
            this.jobId = ""
        },
        destroy: function() {
            this._clearLastInput();
            this._clearLastResult();
            this.inherited(arguments)
        },
        _showLoading: function(a) {
            this.loading.show();
            f.setStyle(this.infoNode, "display", "block");
            this.infoTextNode.innerHTML =
                a ? a : this.nls.executing
        },
        _hideLoading: function() {
            f.setStyle(this.infoNode, "display", "none");
            this.loading.hide()
        },
        _getOutputParamByName: function(a) {
            for (var b = 0; b < this.config.outputParams.length; b++)
                if (this.config.outputParams[b].name === a) return this.config.outputParams[b]
        },
        _getInputParamValues: function() {
            var a = new b,
                d = {},
                e = [],
                f, k = "";
            l.forEach(this.inputNodes, function(a) {
                f = a.inputEditor.getGPValue();
                f.param = a.param;
                e.push(f)
            }, this);
            c(e).then(h.hitch(this, function(b) {
                for (var c = 0; c < b.length; c++) {
                    if (e[c].param.required &&
                        (null === b[c] || void 0 === b[c])) {
                        k = e[c].param.label + " " + this.nls.requiredInfo;
                        new x({
                            message: k
                        });
                        a.reject(k);
                        return
                    }
                    d[e[c].param.name] = b[c]
                }
                a.resolve(d)
            }));
            return a
        },
        _createInputNodes: function() {
            l.forEach(this.config.inputParams, function(a) {
                !1 !== a.visible && this._createInputNode(a)
            }, this)
        },
        _clearLastInput: function() {
            l.forEach(this.inputNodes, function(a) {
                a.inputEditor.clear && h.isFunction(a.inputEditor.clear) && a.inputEditor.clear()
            }, this)
        },
        _clearLastResult: function() {
            l.forEach(this.resultNodes, function(a) {
                f.destroy(a.labelNode);
                a.resultRenderer.destroy();
                f.destroy(a)
            });
            l.forEach(this.resultLayers, function(a) {
                this.map.removeLayer(a)
            }, this);
            this.resultNodes = [];
            this.resultLayers = []
        },
        _createOutputNodes: function(a) {
            l.forEach(this.config.outputParams, function(b, c) {
                this._createOutputNode(b, a[c])
            }, this);
            var b = [];
            l.forEach(a, h.hitch(this, function(a) {
                "GPFeatureRecordSetLayer" === a.dataType && (a = a.value && a.value.features) && 0 < a.length && (b = b.concat(a))
            }));
            if (0 < b.length) try {
                var c = D.graphicsExtent(b);
                c && this.map.setExtent(c.expand(1.4))
            }
            catch (d) {
                console.error(d)
            }
        },
        _onExecuteClick: function() {
            f.hasClass(this.exeNode, "jimu-state-disabled") || this.executeGP()
        },
        _createInputNode: function(a) {
            var b = f.create("div", {
                    "class": "input-node"
                }, this.inputSectionNode),
                c = f.create("div", {
                    "class": "input-label",
                    title: a.tooltip || a.label || ""
                }, b);
            f.create("span", {
                "class": "label-text",
                innerHTML: a.label
            }, c);
            a.required && f.create("span", {
                "class": "label-star",
                innerHTML: "*"
            }, c);
            var c = f.create("div", {
                    "class": "editor-container"
                }, b),
                d = w.createEditor(a, "input", "widget");
            d.placeAt(c);
            b.param = a;
            b.inputEditor = d;
            this.inputNodes.push(b);
            !1 === a.visible && f.setStyle(b, "display", "none");
            return b
        },
        _createOutputNode: function(a, b) {
            var c = f.create("div", {
                "class": "output-node"
            }, this.outputSectionNode);
            this.resultNodes.push(c);
            var d = f.create("div", {
                "class": "output-label",
                title: a.tooltip || a.label || "",
                innerHTML: a.label
            }, c);
            c.param = a;
            c.labelNode = d;
            var d = f.create("div", {
                    "class": "renderer-container"
                }, c),
                e;
            try {
                e = u.createResultRenderer(a, b, "widget");
                //HERE IS WHERE WE ADD IN THE BUTTON!!!!
                //We want to attach it to e.domNode as the Last item, should be an "a" with a click event to save to Portal
                new addFC({target:e.domNode, results:b, map:this.map, portalUrl:this.appConfig.portalUrl});
            }
            catch (h) {
                console.error(h), e = u.createResultRenderer("error",
                    b, "widget")
            }
            e.placeAt(d);
            e.startup();
            c.resultRenderer = e;
            this._reorderLayer();
            return c
        },
        _reorderLayer: function() {
            if (this.config.layerOrder && 0 !== this.config.layerOrder.length) {
                var a = this.config.layerOrder.indexOf("Operational Layers"),
                    b = this.map.graphicsLayerIds.length - 1,
                    c, d;
                for (c = a - 1; 0 <= c; c--)(d = this.map.getLayer(this.config.layerOrder[c])) && this.map.reorderLayer(d, b);
                for (c = a + 1; c < this.config.layerOrder.length; c++)(d = this.map.getLayer(this.config.layerOrder[c])) && this.map.reorderLayer(d, 0)
            }
        }
    })
});