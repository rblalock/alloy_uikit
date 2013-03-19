/**
 * Params for this instance
 * @type {Object}
 * {
 *      style: {Object} Object of objects for styling UI by ID (can be used in .tss)
 *      textfieldFocused: {Object} UITextfield properties when TF is focused
 * }
 * @example
 * {
 *      style: {
 *          "textfield": { backgroundColor: "#333", hintText: "textfield!" }
 *      },
 *      textfieldFocused: { backgroundColor: "white", color: "red" }
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
		textfieldFocusedBackgroundColor: "#333",
		textfieldFocusedColor: "#1f7f5c",
		textfieldDefaultBackgroundColor: "#232323",
		textfieldDefaultColor: "#eee"
	},
	dark: {
		textfieldFocusedBackgroundColor: "#333",
		textfieldFocusedColor: "#1f7f5c",
		textfieldDefaultBackgroundColor: "#232323",
		textfieldDefaultColor: "#eee"
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

	$.textfield.backgroundColor = $.selectedTheme.textfieldDefaultBackgroundColor;
	$.textfield.color = $.selectedTheme.textfieldDefaultColor;
};

/**
 * Init logic
 */
$.params.textfieldFocused = $.params.textfieldFocused || {};

// Setup events for this instance
$.textfield.addEventListener("focus", function() {
	$.textfield.backgroundColor = $.params.textfieldFocused.backgroundColor || $.selectedTheme.textfieldFocusedBackgroundColor;
	$.textfield.color = $.params.textfieldFocused.color || $.selectedTheme.textfieldFocusedColor;
});
$.textfield.addEventListener("blur", function() {
	$.textfield.backgroundColor = $.params.styles.textfield.backgroundColor || $.selectedTheme.textfieldDefaultBackgroundColor;
	$.textfield.color = $.params.styles.textfield.color || $.selectedTheme.textfieldDefaultColor;
});