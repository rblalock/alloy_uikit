$.table.addEventListener("click", function(_event) {
	var id = _event.row.id;
	var controller = Alloy.createController(id);
	controller.window.open();
});

$.window.open();