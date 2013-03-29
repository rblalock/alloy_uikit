/**
 * Override createWidget until widget styling is possible in Alloy
 */
Alloy.createWidget = function(id, name, args) {
    if ("undefined" != typeof name && null !== name && _.isObject(name) && !_.isString(name)) {
        args = name;
        name = DEFAULT_WIDGET;
    }

	var widget = new (require("alloy/widgets/" + id + "/controllers/" + (name || DEFAULT_WIDGET)))(args);

	// For UIKit controllers
	if(widget.setUIKitDefaults) {
		widget.setUIKitDefaults();
	}
	
	// Workaround for styling widgets until the feature is implemented in Alloy
	if (args.uikit_styles) {
		for(var property in args.uikit_styles) {
			var value = args.uikit_styles[property];
			if (typeof value === 'object') {
				widget[property].applyProperties(value);
			}
		}
	}

    return widget;
};