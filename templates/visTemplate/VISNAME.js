visualizationFunctions.VISNAME = function(element, data, opts) {
    var context = this;
    context.config = context.CreateBaseConfig();
    context.SVG = context.config.easySVG(element[0])
    context.VisFunc = function() {
    	
    }
    return context;
}
