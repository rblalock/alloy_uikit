/**
 * Params for this instance
 * @type {Object}
 */
$.params = arguments[0] || {};
/**
 * Initialize the widget contents
 */
$.init = function() {
	$.params.textfieldFocused = $.params.textfieldFocused || {};
};

// Initialize the widget contents
$.init();

// Setup events for this instance
$.textfield.addEventListener("focus", function() {
	$.textfield.backgroundColor = $.params.textfieldFocused.backgroundColor || "#ddd8ce";
	$.textfield.color = $.params.textfieldFocused.color || "#1f7f5c";
});
$.textfield.addEventListener("blur", function() {
	$.textfield.backgroundColor = $.params.styles.textfield.backgroundColor || "#fff";
	$.textfield.color = $.params.styles.textfield.color || "#111";
});