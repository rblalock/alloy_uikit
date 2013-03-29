// Private properties
var touchStartY = 0;

/**
 * Params for this instance
 * @type {Object}
 * {
 *      uikit_styles: {Object} Object of objects for styling UI by ID (can be used in .tss)
 *      textfieldFocused: {Object} UITextfield properties when TF is focused
 *      stepperWrapperFocused: {Object} UIView properties
 * }
 * @example
 * {
 *      uikit_styles: {
 *          "textfield": { backgroundColor: "#333", hintText: "textfield!" }
 *      },
 *      textfieldFocused: { backgroundColor: "white", color: "red" },
 *      stepperWrapperFocused: { backgroundColor: "green" }
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
		textfieldDefaultColor: "#eee",
		stepperWrapperFocusedBackgroundColor: "#232323",
		stepperWrapperDefaultBackgroundColor: "#1f7f5c"
	},
	dark: {
		textfieldFocusedBackgroundColor: "#333",
		textfieldFocusedColor: "#1f7f5c",
		textfieldDefaultBackgroundColor: "#232323",
		textfieldDefaultColor: "#eee",
		stepperWrapperFocusedBackgroundColor: "#232323",
		stepperWrapperDefaultBackgroundColor: "#1f7f5c"
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
	$.stepperWrapper.backgroundColor = $.selectedTheme.stepperWrapperDefaultBackgroundColor;
};
/**
 * Handle incrementing / decrementing taps
 * @param {Object} _event
 */
$.incDecHandler = function(_event) {
	var value = parseInt($.textfield.value.toString()); // for weird android issue
	var tapPoint = _event.y; // Relative tap point
	var threshold = $.stepperWrapper.size.height / 2; // Middle point for increment / decrement taps

	if(tapPoint < threshold) {
		$.textfield.value = (parseFloat(value) + 1);
	} else if(tapPoint > threshold && value > 0) {
		$.textfield.value = (parseFloat(value) - 1);
	}
};
/**
 * Touch start handler
 * @param {Object} _event
 */
$.touchStartHandler = function(_event) {
	touchStartY = parseInt(_event.y);
};
/**
 * Touch move handler
 * @param {Object} _event
 */
$.touchMoveHandler = function(_event) {
	var coordinates = parseInt(_event.y);
	var value = parseInt($.textfield.value.toString()); // for weird android bug

	if(coordinates < touchStartY && coordinates > 0) {
		$.textfield.value = (parseFloat(value) + coordinates);
	} else if(coordinates > touchStartY && coordinates < $.stepperWrapper.size.height && value > 0) {
		$.textfield.value = (parseFloat(value) - coordinates);
	}

	if(value < 0) {
		$.textfield.value = 0;
	}
};

/**
 * Init logic
 */
$.params.textfieldFocused = $.params.textfieldFocused || {};
$.params.uikit_styles.textfield = $.params.uikit_styles.textfield || {};
$.params.uikit_styles.stepperWrapper = $.params.uikit_styles.stepperWrapper || {};
$.params.stepperWrapperFocused = $.params.stepperWrapperFocused || {};

// Setup events for this instance
$.textfield.addEventListener("focus", function() {
	$.textfield.backgroundColor = $.params.textfieldFocused.backgroundColor || $.selectedTheme.textfieldFocusedBackgroundColor;
	$.textfield.color = $.params.textfieldFocused.color || $.selectedTheme.textfieldFocusedColor;
	$.stepperWrapper.backgroundColor = $.params.stepperWrapperFocused.backgroundColor || $.selectedTheme.stepperWrapperFocusedBackgroundColor
});
$.textfield.addEventListener("blur", function() {
	$.textfield.backgroundColor = $.params.uikit_styles.textfield.backgroundColor || $.selectedTheme.textfieldDefaultBackgroundColor;
	$.textfield.color = $.params.uikit_styles.textfield.color || $.selectedTheme.textfieldDefaultColor;
	$.stepperWrapper.backgroundColor = $.params.uikit_styles.stepperWrapper.backgroundColor || $.selectedTheme.stepperWrapperDefaultBackgroundColor
});
$.stepperWrapper.addEventListener("click", $.incDecHandler);
$.stepperWrapper.addEventListener("touchstart", $.touchStartHandler);
$.stepperWrapper.addEventListener("touchmove", $.touchMoveHandler);