var size = 0;
function categories_Ifanadiana_roads5(feature, value) {
                switch(value) {case 'Road':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(243,231,238,1.0)', lineDash: null, lineCap: 'round', lineJoin: 'round', width: 7}),
    }),new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(153,147,151,1.0)', lineDash: null, lineCap: 'round', lineJoin: 'round', width: 5}),
    })];
                    break;
case 'Trail':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(25,11,2,1.0)', lineDash: null, lineCap: 'round', lineJoin: 'round', width: 2}),
    }),new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(255,255,255,1.0)', lineDash: [1,5], lineCap: 'round', lineJoin: 'round', width: 2}),
    })];
                    break;
default:
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(130,230,140,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 2}),
    })];
                    break;}};
var styleCache_Ifanadiana_roads5={}
var style_Ifanadiana_roads5 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    var value = feature.get("F_CODE_DES");
    var style = categories_Ifanadiana_roads5(feature, value);
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
        if (!styleCache_Ifanadiana_roads5[key]){
            var text = new ol.style.Text({
                  font: '10.725px \'MS Shell Dlg 2\', sans-serif',
                  text: labelText,
                  textAlign: "center",
                  fill: new ol.style.Fill({
                    color: 'rgba(0, 0, 0, 1)'
                  }),
                });
            styleCache_Ifanadiana_roads5[key] = new ol.style.Style({"text": text})
        }
    } else {
        if ("" !== null) {
            labelText = String("");
        } else {
            labelText = ""
        }
        var key = value + "_" + labelText
        if (!styleCache_Ifanadiana_roads5[key]){
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
            styleCache_Ifanadiana_roads5[key] = new ol.style.Style({"text": text})
        }
    }
    var allStyles = [styleCache_Ifanadiana_roads5[key]];
    allStyles.push.apply(allStyles, style);
    return allStyles;
};