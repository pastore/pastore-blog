(function(window) {
    var pastoreBind = {};
    var defaultDataBindAttribute = "data-pastore";
    var arrayDataBindHandlers = ["text", "value", "foreach"];
    var subscribers = {};


    pastoreBind.applyBindings = function (viewModelContext, rootNode) {
        if (rootNode && rootNode.nodeType !== 1) {
            throw new Error("Second parameter should be a DOM node");
        }
        rootNode = rootNode || window.document.body;
        var tagName;
        var elements = rootNode.querySelector("[" + defaultDataBindAttribute + "]");
        for (var i = 0; i < elements.length; i++) {
            tagName = elements[i].tagName.toLowerCase();
        }
        for (var item in viewModelContext) {
            
        }
    };
    var changeHandler = function(event) {
        var target = event.target,
            dataAttr = target.getAttribute(defaultDataBindAttribute),
            splitDataAttrArray = dataAttr.split(":");
        

    };
    document.addEventListener("change", changeHandler);

    window.pastoreBind = pastoreBind;
})(window)

