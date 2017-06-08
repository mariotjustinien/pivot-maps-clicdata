var size = 0;

var styleCache_Limite_Com_Distr_Ifanadiana4={}
var style_Limite_Com_Distr_Ifanadiana4 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    var value = ""
    var size = 0;
    var style = [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(245,248,42,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 2}), fill: new ol.style.Fill({color: 'rgba(203,191,201,0.0)'})
    })];
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
        if (!styleCache_Limite_Com_Distr_Ifanadiana4[key]){
            var text = new ol.style.Text({
                  font: '10.725px \'Segoe UI\', sans-serif',
                  text: labelText,
                  textAlign: "center",
                  fill: new ol.style.Fill({
                    color: 'rgba(18, 27, 0, 1)'
                  }),
                });
            styleCache_Limite_Com_Distr_Ifanadiana4[key] = new ol.style.Style({"text": text})
        }
    } else {
        if (feature.get("LIB_COM") !== null && resolution > 0 && resolution < 84) {
            labelText = String(feature.get("LIB_COM"));
        } else {
            labelText = ""
        }
        var key = value + "_" + labelText
        if (!styleCache_Limite_Com_Distr_Ifanadiana4[key]){
            var text = new ol.style.Text({
                    font: '10.725px \'Segoe UI\', sans-serif',
                    text: labelText,
                    textBaseline: "center",
                    textAlign: "left",
                    offsetX: 5,
                    offsetY: 3,
                    fill: new ol.style.Fill({
                      color: 'rgba(18, 27, 0, 1)'
                    }),
                });
            styleCache_Limite_Com_Distr_Ifanadiana4[key] = new ol.style.Style({"text": text})
        }
    }
    var allStyles = [styleCache_Limite_Com_Distr_Ifanadiana4[key]];
    allStyles.push.apply(allStyles, style);
    return allStyles;
};