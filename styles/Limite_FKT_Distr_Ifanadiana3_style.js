var size = 0;
var ranges_Limite_FKT_Distr_Ifanadiana3 = [[0.000000, 666.023166, [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(0,0,0,0.498039)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0}), fill: new ol.style.Fill({color: 'rgba(255,245,240,0.498039)'})
    })]],
[666.023166, 821.000000, [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(0,0,0,0.498039)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0}), fill: new ol.style.Fill({color: 'rgba(254,221,205,0.498039)'})
    })]],
[821.000000, 1091.000000, [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(0,0,0,0.498039)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0}), fill: new ol.style.Fill({color: 'rgba(252,179,152,0.498039)'})
    })]],
[1091.000000, 1520.000000, [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(0,0,0,0.498039)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0}), fill: new ol.style.Fill({color: 'rgba(252,134,102,0.498039)'})
    })]],
[1520.000000, 2057.000000, [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(0,0,0,0.498039)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0}), fill: new ol.style.Fill({color: 'rgba(247,87,62,0.498039)'})
    })]],
[2057.000000, 3142.000000, [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(0,0,0,0.498039)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0}), fill: new ol.style.Fill({color: 'rgba(222,41,36,0.498039)'})
    })]],
[3142.000000, 4584.942085, [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(0,0,0,0.498039)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0}), fill: new ol.style.Fill({color: 'rgba(179,18,23,0.498039)'})
    })]],
[4584.942085, 4650.000000, [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(0,0,0,0.498039)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0}), fill: new ol.style.Fill({color: 'rgba(103,0,13,0.498039)'})
    })]]];
var styleCache_Limite_FKT_Distr_Ifanadiana3={}
var style_Limite_FKT_Distr_Ifanadiana3 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    var value = feature.get("Population per fokontany_Population");
    var style = ranges_Limite_FKT_Distr_Ifanadiana3[0][2];
    for (i = 0; i < ranges_Limite_FKT_Distr_Ifanadiana3.length; i++){
        var range = ranges_Limite_FKT_Distr_Ifanadiana3[i];
        if (value > range[0] && value<=range[1]){
            style =  range[2];
        }
    };
    var labelText = "";
    var currentFeature = feature;
    clusteredFeatures = feature.get("features");
    if (typeof clusteredFeatures !== "undefined") {
        if (size >= 2) {
            labelText = size.toString()
        } else {
            labelText = ""
        }
        var key = value + "_" + labelText
        if (!styleCache_Limite_FKT_Distr_Ifanadiana3[key]){
            var text = new ol.style.Text({
                  font: '10.725px \'MS Shell Dlg 2\', sans-serif',
                  text: labelText,
                  textAlign: "center",
                  fill: new ol.style.Fill({
                    color: 'rgba(0, 0, 0, 1)'
                  }),
                });
            styleCache_Limite_FKT_Distr_Ifanadiana3[key] = new ol.style.Style({"text": text})
        }
    } else {
        if ("" !== null) {
            labelText = String("");
        } else {
            labelText = ""
        }
        var key = value + "_" + labelText
        if (!styleCache_Limite_FKT_Distr_Ifanadiana3[key]){
            var text = new ol.style.Text({
                    font: '10.725px \'MS Shell Dlg 2\', sans-serif',
                    text: labelText,
                    textBaseline: "center",
                    textAlign: "left",
                    offsetX: 5,
                    offsetY: 3,
                    fill: new ol.style.Fill({
                      color: 'rgba(0, 0, 0, 1)'
                    }),
                });
            styleCache_Limite_FKT_Distr_Ifanadiana3[key] = new ol.style.Style({"text": text})
        }
    }
    var allStyles = [styleCache_Limite_FKT_Distr_Ifanadiana3[key]];
    allStyles.push.apply(allStyles, style);
    return allStyles;
};