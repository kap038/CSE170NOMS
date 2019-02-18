//responsible for a search bar that takes user input
'use strict';
// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
})

function initializePage() {
	console.log("Javascript connected!");
	$('#searchform').submit(handleSearch);
}


function handleSearch(e) {
	e.preventDefault();
	var input = $('input#searchbox').val();
	console.log(input)
}