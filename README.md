Alloy UIKit
===========

A draft UIKit for Alloy inspired by Square UI - http://designmodo.com/square/

Quick Previews:

http://www.screencast.com/t/W68yBrcP
http://www.screencast.com/t/e3tjeNmyCy

# Requirements
* Titanium and Alloy
* Latest version of Alloy from Github (as of 3/29 you'll need to pull from master since that has support for selecting sub controllers in a widget).

# Things to Note
## `alloy.js` - override
You'll notice that this file overrides the default createWidget method.  This is to allow for styling outside of the widget like styling from an app level .tss file or a theme folder.  Widget style overrides are namespaced with `uikit_styles`.

#### Styling Widget Examples:
Programmatically:

`Alloy.createWidget("uikit", "someWidget", { uikit_styles: {} });`

TSS:
`<Widget id="myWidget" src="uikit" name="textfield" />`

	"#myWidget": {
		uikit_styles: {
			// Any UI elements in the widget can be targeted here
			textfield: {
				width: 300,
				top: 5,
				bottom: 5,
				left: 0,
	            hintText: "overriden textfield",
	            backgroundColor: "#111",
	            color: "#eee"
			}
		}
	}

You can see more examples in the /app/folder

# Talking Points
I'm not completly happy with how some of this is implemented.  I like how easy it is for the user (e.g. `<Widget id="spinner" src="uikit" name="spinner" />`) but allowing for dynamic styling and toggling styling inside the widget is a pain (e.g. https://github.com/rblalock/alloy_uikit/blob/master/app/widgets/uikit/controllers/spinner.js).  I've taken a few test approaches in the widgets thus far so there is not one set way to create a widget for UIKit yet (I'm still working on it).

Maybe a better way for styling is allow for config.json to have a UIKit style object.  If anyone has ideas on how to best manage this so it's still easy for the developer while being easy to maintain...I'm all ears.