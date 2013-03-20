// For tracking the current controller (used for tablets)
var currentController = null;

// Handle navigation
$.indexList.table.addEventListener("click", function(_event) {
	var id = _event.row.id;
	var controller = Alloy.createController(id, {
		navgroup: $.navgroup // Pass the navgroup for iOS handheld use
	});

	// Handhelds will open in a window.  Tablets will add to the detail view
	if(Alloy.isHandheld) {
		var window = Ti.UI.createWindow({
			title: _event.row.title,
			backgroundColor: "#ebe7df",
			barColor: "#232323"
		});
		window.add(controller.wrapper);

		if(OS_IOS) {
			$.navgroup.open(window);
		} else {
			window.open();
		}
	} else {
		if(currentController) {
			$.detail.remove(currentController.wrapper);
		}
		$.detail.add(controller.wrapper);
	}

	// Make sure we have a reference to the current controller
	currentController = controller;
});

$.window.open();