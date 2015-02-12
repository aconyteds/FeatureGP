//>>built
define(["dojo/_base/declare", "dojo/_base/array", "dojo/Deferred"], function(g, e, f) {
    return {
        promisifyGetValue: function(b) {
            var a = b.getValue;
            b.getValue = function() {
                var c = a.apply(b);
                if (null !== c && c.then) return c;
                var d = new f;
                d.resolve(c);
                return d
            }
        },
        allowShareResult: function(b) {
            return 0 === e.filter(b.outputParams, function(a) {
                return "GPFeatureRecordSetLayer" === a.dataType && (!a.defaultValue || a.defaultValue && !a.defaultValue.geometryType)
            }).length ? !0 : !1
        }
    }
});