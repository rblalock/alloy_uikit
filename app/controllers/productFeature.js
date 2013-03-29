// First featured product object
$.productFeature.setData({
	button: { id: 1 },
	image: {
		height: 115,
		image: "http://placeholdit.com?width=180&height=115"
	},
	price: { text: "$4.99" },
	title: { text: "Nice Shirt" },
	description: { text: "Lorem ipsum dolor hazmat suits required here." }
});

$.productFeature.button.addEventListener("click", function(_event) {
	alert( _event.source.id + " clicked" );
});