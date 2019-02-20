'use strict';
// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initPage();
})

function initPage() {
	console.log("Javascript connected!sfsa");
	var recipe = $("a.favorites-button").attr("id");
	colorButton(recipe);
	$("a.favorites-button").click(handleFavorite);
}

//color button if this is already a favorite
function colorButton(recipe){
	var favorites = JSON.parse(localStorage.getItem("favorites") || '[]');
	var index = favorites.indexOf(recipe)

	//if it isn't in list, use empty star
	if(index == -1){
		$("img.favorites-button").attr("src", "/images/star-empty.png")
	} else {
		$("img.favorites-button").attr("src", "/images/star.png")
	}
}	

function handleFavorite(e) {
	console.log(this);
	var recipe = this.id;
	var favorites = JSON.parse(localStorage.getItem("favorites") || '[]');

	var index = favorites.indexOf(recipe)

	//if it is already favorites, unfavorite it
	if(index != -1){
		favorites.splice(index, 1); //remove the existing element
		$("img.favorites-button").attr("src", "/images/star-empty.png")
	} else {
		//add this to favorites
		favorites.push(recipe);
		$("img.favorites-button").attr("src", "/images/star.png")
	}
	localStorage.setItem("favorites", JSON.stringify(favorites))
	console.log(localStorage.getItem("favorites"))
}
