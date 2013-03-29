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
 * Message rows controller reference
 * @type {Array}
 */
$.rowControllers = [];
/**
 * Data for this instance
 * @type {Array}
 */
$.messages = [];
/**
 * The last record in the visible set
 * @type {Number}
 */
$.lastRecord = 0;
/**
 * Set the data for this object
 * @param {Object} _data Name value pairs matching any of the objects
 *                  in this widget
 * @example
 * {
	title: {String},
	pageSize: {Number},
	totalRecords: {Number},
	previousCallback: {Function},
	nextCallback: {Function},
	messages: {Array}
	[
		{
			id: {Mixed},
			read: {Boolean},
			from: {String},
			subject: {String},
			date: {String}
		}
	]
 * }
 */
$.setData = function(_data) {
	$.title.text = _data.title;

	$.renderRows(_data.messages);

	// For data pagination
	$.messages = _data.messages;
	$.lastRecord = _data.pageSize;
	$.resultCount.text = "1-" + _data.pageSize + " of " + _data.totalRecords;
	$.pageSize = _data.pageSize;
	$.totalRecords = _data.totalRecords;
	$.nextCallback = _data.nextCallback;
	$.previousCallback = _data.previousCallback;
};
/**
 * Render rows for this widget
 * @param {Array} _data
 */
$.renderRows = function(_data) {
	// Rows controller references
	$.rowControllers = [];
	// temp. row array for table
	var rows = [];

	_data.forEach(function(_message) {
		var messageRow = Alloy.createWidget("uikit", "ui/messageGridRows",  _message);
		$.rowControllers.push( messageRow );
		rows.push( messageRow.row );
	});

	$.table.setData( rows );
};
/**
 * Handle going to the next page
 */
$.handleNext = function() {
	// TODO lots to do here like check if max records are reached, etc.
	$.messages = $.nextCallback( $.lastRecord );

	$.renderRows( $.messages );

	// TODO set last record here, result count label, etc.
};
/**
 * Handle going to the previous page
 */
$.handlePrevious= function() {
	// TODO lots to do here like check if max records are reached, etc.
	$.messages = $.previousCallback( $.lastRecord );

	$.renderRows( $.messages );

	// TODO set last record here, result count label, etc.
};

$.previousBtn.addEventListener("click", $.handlePrevious);
$.nextBtn.addEventListener("click", $.handleNext);