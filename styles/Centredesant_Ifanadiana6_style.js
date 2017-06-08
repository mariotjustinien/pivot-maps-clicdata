var size = 0;
var ranges_Centredesant_Ifanadiana6 = [[0.000000, 15.000000, [ new ol.style.Style({
        image: new ol.style.Circle({radius: 4.0 + size,
            stroke: new ol.style.Stroke({color: 'rgba(0,0,0,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0}), fill: new ol.style.Fill({color: 'rgba(166,206,227,1.0)'})})
    })]],
[15.000000, 60.000000, [ new ol.style.Style({
        image: new ol.style.Circle({radius: 9.0 + size,
            stroke: new ol.style.Stroke({color: 'rgba(0,0,0,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0}), fill: new ol.style.Fill({color: 'rgba(166,206,227,1.0)'})})
    })]],
[60.000000, 100.000000, [ new ol.style.Style({
        image: new ol.style.Circle({radius: 14.0 + size,
            stroke: new ol.style.Stroke({color: 'rgba(0,0,0,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0}), fill: new ol.style.Fill({color: 'rgba(166,206,227,1.0)'})})
    })]],
[100.000000, 200.000000, [ new ol.style.Style({
        image: new ol.style.Circle({radius: 19.0 + size,
            stroke: new ol.style.Stroke({color: 'rgba(0,0,0,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0}), fill: new ol.style.Fill({color: 'rgba(166,206,227,1.0)'})})
    })]],
[200.000000, 700.000000, [ new ol.style.Style({
        image: new ol.style.Circle({radius: 24.0 + size,
            stroke: new ol.style.Stroke({color: 'rgba(0,0,0,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0}), fill: new ol.style.Fill({color: 'rgba(166,206,227,1.0)'})})
    })]]];
var styleCache_Centredesant_Ifanadiana6={}
var style_Centredesant_Ifanadiana6 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    var value = feature.get("Nb_referen");
    var style = ranges_Centredesant_Ifanadiana6[0][2];
    for (i = 0; i < ranges_Centredesant_Ifanadiana6.length; i++){
        var range = ranges_Centredesant_Ifanadiana6[i];
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
        if (!styleCache_Centredesant_Ifanadiana6[key]){
            var text = new ol.style.Text({
                  font: '10.725px \'MS Shell Dlg 2\', sans-serif',
                  text: labelText,
                  textAlign: "center",
                  fill: new ol.style.Fill({
                    color: 'rgba(0, 0, 0, 1)'
                  }),
                });
            styleCache_Centredesant_Ifanadiana6[key] = new ol.style.Style({"text": text})
        }
    } else {
        if (feature.get("Ref_2") !== null) {
            labelText = String(feature.get("Ref_2"));
        } else {
            labelText = ""
        }
        var key = value + "_" + labelText
        if (!styleCache_Centredesant_Ifanadiana6[key]){
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
            styleCache_Centredesant_Ifanadiana6[key] = new ol.style.Style({"text": text})
        }
    }
    var allStyles = [styleCache_Centredesant_Ifanadiana6[key]];
    allStyles.push.apply(allStyles, style);
    return allStyles;
};