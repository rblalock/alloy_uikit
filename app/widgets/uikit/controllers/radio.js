// Private properties
var touchStartY = 0;

/**
 * Params for this instance
 * @type {Object}
 * {
 *      style: {Object} Object of objects for styling UI by ID (can be used in .tss)
 *      radioType: {String} multiple || single - Type of radio list
 * }
 * @example
 * {
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
 * Reference to radio buttons
 * @type {Array}
 */
$.radios = [];
/**
 * Set the defaults for this instance
 * @note This is set before it's possibly changed by the application / tss styles
 */
$.setUIKitDefaults = function() {
	$.selectedTheme = ($.params.theme) ? $.theme[$.params.theme] : $.theme.light;
};
/**
 * Set the data for this radio field
 * @param {Array} _data
 * [
 *      { title: {String}, selected: {Boolean}, id: {Mixed}, etc. }
 * ]
 */
$.setData = function(_data) {
	_data.forEach(function(_item, _index) {
		var wrapper = Ti.UI.createView({
			layout: "horizontal",
			height: Ti.UI.SIZE,
			bottom: 5,
			selected: _item.selected || false,
			id: _item.id || _index
		});
		var radio = Ti.UI.createView({
			borderRadius: 10,
			width: 22,
			height: 22,
			touchEnabled: false,
			borderColor: "#1f7f5c",
			borderWidth: 1
		});
		var label = Ti.UI.createLabel({
			text: _item.title,
			width: Ti.UI.SIZE,
			height: Ti.UI.SIZE,
			left: 5,
			font: { fontSize: 11 },
			touchEnabled: false
		});

		wrapper.add(radio);
		wrapper.add(label);
		wrapper.applyProperties(_item);

		// Reference to radios
		$.radios.push(wrapper);

		$.wrapper.add(wrapper);
	});
};
/**
 * Return selected radios
 * @return {Array}
 */
$.getSelected = function() {
	var selected = [];
	$.radios.forEach(function(_radio) {
		if(_radio.selected) {
			selected.push(_radio.id);
		}
	});

	return selected;
};
/**
 * Handle the click event
 */
$.handleClick = function(_event) {
	var source = _event.source;
	var radio = _event.source.children[0];

	if(radio) {
		// handle multiple choice vs. one choice scenarios
		if($.params.radioType === "multiple") {
			if(source.selected) {
				radio.backgroundColor = "transparent";
				source.selected = false;
			} else {
				radio.backgroundColor = "#1f7f5c";
				source.selected = true;
			}
		} else {
			$.radios.forEach(function(_radio) {
				_radio.children[0].backgroundColor = "transparent";
				_radio.selected = false;
			});

			radio.backgroundColor = "#1f7f5c";
			source.selected = true;
		}
	}
};

/**
 * Init logic
 */
$.params.radioFocused = $.params.radioFocused || {};

// Setup events for this instance
$.wrapper.addEventListener("click", $.handleClick);