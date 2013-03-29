/**
 * Params for this instance
 * @type {Object}
 * {
 *      uikit_styles: {Object} Object of objects for styling UI by ID (can be used in .tss)
 * }
 * @example
 * {
 *      uikit_styles: {
 *
 *      },
 * }
 */
$.params = arguments[0] || {};
/**
 * Theme defaults available for this widget
 * @type {Object}
 * TODO how can this be abstracted out?  Either via Alloy or manually?
 * Right now putting this in it's own JS file crashes in Alloy 1.1.0 (master)
 */
$.theme = {
	light: {
	},
	dark: {
	}
};
/**
 * The selected theme for this instance
 * @type {String}
 */
$.selectedTheme = "";
/**
 * Set the defaults for this instance
 * @note This is set before it's possibly changed by the application / tss styles
 */
$.setUIKitDefaults = function() {
	$.selectedTheme = ($.params.theme) ? $.theme[$.params.theme] : $.theme.light;
};
/**
 * Set the data for this object
 * @param {Object} _data Name value pairs matching any of the objects
 *                  in this widget
 * @example
 * {
 *	    image: {Object},
 *	    price: {Object},
 *	    title: {Object},
 *	    description: {Object}
 *	    etc...
 * }
 */
$.setData = function(_data) {
	for(var prop in _data) {
		if($[prop]) {
			$[prop].applyProperties(_data[prop]);
		}
	}
};

/**
 * Init logic
 */