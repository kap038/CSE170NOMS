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

	var recipe = $(".get-recipe-id").attr("id");
	console.log(recipe);

	//add recipe to completed list
	var completed = JSON.parse(localStorage.getItem("completed"));


	//can't push to a null
	if(completed === null) {
		completed = [];
	}
	var index = completed.indexOf(recipe)
	//we want no duplicates, but want this to be at the top of list
	if(index != -1){
		completed.splice(index, 1); //remove the existing element
	}

  	completed.push(recipe)
  	localStorage.setItem("completed", JSON.stringify(completed))
  	console.log(localStorage.getItem("completed"))


}

/*
var completed = localStorage.getItem("completed");
  completed.push(recipe)
  localStorage.setItem("completed", completed)
  console.log(localStorage.getItem("completed"))


*/
