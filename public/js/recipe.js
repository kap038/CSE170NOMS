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
  $("button.dropbtn").click(clickDropdown);
  $("#vegan").click(clickVegan);
}

// when dropdown button clicked, show and hide content
function clickDropdown(e){
  e.preventDefault();
	document.getElementById("myDropdown").classList.toggle("show");
}

function clickVegan(e){
  e.preventDefault();
  var ingredients = $(this).attr('value');
  //ingredients = JSON.parse(ingredients);
  ingredients = JSON.parse(ingredients);
   
  var i;
  for(i = 0; i < ingredients.length; i++){
    console.log("ingredient: "+ingredients[i].ingredient);
  }
  console.log("Ingredients: "+ingredients);
  console.log("clicked vegan") 
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}
