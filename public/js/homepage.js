'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
})

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
	console.log("Javascript connected!");
	$("a.recipe-link").click(projectClick);
}

function projectClick(e){
	// prevent the page from reloading      
    //e.preventDefault();
    var recipeId = $(this).attr('id');
    console.log(recipeId)
	if (typeof(Storage) !== "undefined") {
		// Store
	 	localStorage.setItem("curr_recipe", recipeId);
	  	// Retrieve
	 	 //document.getElementById("result").innerHTML = localStorage.getItem("lastname");
	 	 console.log("Curr recipe: "+localStorage.getItem("curr_recipe"));
	} else {
	 	document.getElementById("result").innerHTML = "Sorry, your browser does not support Web Storage...";
}
    /*
// Check browser support
if (typeof(Storage) !== "undefined") {
  // Store
  localStorage.setItem("lastname", "Smith");
  // Retrieve
  document.getElementById("result").innerHTML = localStorage.getItem("lastname");
} else {
  document.getElementById("result").innerHTML = "Sorry, your browser does not support Web Storage...";
}*/

    /*
    var anagram = anagrammedName(name);
    console.log(anagram);
    $(this).text(anagram);
    */
}
