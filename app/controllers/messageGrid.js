$.messageGrid.setData({
	title: "Messages",
	pageSize: 4,
	totalRecords: 300,
	nextCallback: nextCallback,
	previousCallback: previousCallback,
	messages: [
		{
			id: 1,
			read: false,
			from: "Dribble.com",
			subject: "Lorem ipsum dolor text for testing hazmet chemicals here.  Lorem dolor ipsum text can go here too!",
			date: "Today, 10:15 PM"
		},
		{
			id: 2,
			read: false,
			from: "Behance",
			subject: "Lorem ipsum dolor text",
			date: "Jan 31st"
		},
		{
			id: 3,
			read: true,
			from: "Appcelerator",
			subject: "Lorem ipsum dolor text for testing hazmet chemicals here.",
			date: "Jan 31st"
		},
		{
			id: 4,
			read: false,
			from: "Apple",
			subject: "Lorem ipsum dolor text",
			date: "Jan 31st"
		}
	]
});

$.messageGrid.table.addEventListener("click", function(_event) {
	alert(_event.row.id);
});

function nextCallback(_lastRecord) {
	return [
		{
			id: 1,
			read: false,
			from: "Dribble.com",
			subject: "Lorem ipsum dolor text for testing hazmet chemicals here.  Lorem dolor ipsum text can go here too!",
			date: "Today, 10:15 PM"
		},
		{
			id: 2,
			read: false,
			from: "Behance",
			subject: "Lorem ipsum dolor text",
			date: "Jan 31st"
		}
	];
}

function previousCallback(_lastRecord) {
	return [
		{
			id: 1,
			read: false,
			from: "Dribble.com",
			subject: "Lorem ipsum dolor text for testing hazmet chemicals here.  Lorem dolor ipsum text can go here too!",
			date: "Today, 10:15 PM"
		},
		{
			id: 2,
			read: false,
			from: "Behance",
			subject: "Lorem ipsum dolor text",
			date: "Jan 31st"
		},
		{
			id: 3,
			read: true,
			from: "Appcelerator",
			subject: "Lorem ipsum dolor text for testing hazmet chemicals here.",
			date: "Jan 31st"
		},
		{
			id: 4,
			read: false,
			from: "Apple",
			subject: "Lorem ipsum dolor text",
			date: "Jan 31st"
		}
	];
}