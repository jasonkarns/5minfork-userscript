// ==UserScript==
// @name       5 min fork
// @namespace  http://5minfork.com/
// @version    1.0.0
// @description  Adds a button to GitHub pages so with one click you can host the content of the repo with 5minfork.com
// @include    http*://*github.com/*
// ==/UserScript==

var pageHeaderMatches = document.querySelectorAll(".pagehead-actions");
if(pageHeaderMatches && pageHeaderMatches.length)
{
	var pageHeader = pageHeaderMatches[0];

	var fiveMinForkButtonAnchor = document.createElement("a");
	fiveMinForkButtonAnchor.className ="minibutton";
	fiveMinForkButtonAnchor.href = document.location.href.replace("github.com", "5minfork.com").replace("https://", "http://");
	fiveMinForkButtonAnchor.target = "_blank";
	fiveMinForkButtonAnchor.appendChild(document.createTextNode("5 min fork"));

	var fiveMinForkButtonListItem = document.createElement("li");
	fiveMinForkButtonListItem.appendChild(fiveMinForkButtonAnchor);

	pageHeader.insertBefore(fiveMinForkButtonListItem, pageHeader.childNodes[0]);
}
