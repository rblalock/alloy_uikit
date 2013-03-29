/**
 * Params for this instance
 * @type {Object}
 * @example
 * {
		id: {Mixed},
		read: {Boolean},
		from: {String},
		subject: {String},
		date: {String}
 * }
 */
$.params = arguments[0];

$.row.id = $.params.id;
$.from.text = $.params.from || "";

if($.params.read) {
	$.readWrapper.backgroundColor = "#227C5B";
	$.wrapper.opacity = 0.5;
}

if(Alloy.isTablet) {
	$.subject.text = $.params.subject || "";
	$.date.text = $.params.date || "";
}

// TODO read icon color and stuff
//$.readIcon