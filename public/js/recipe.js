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
 //child elements of this class
  $(".dropdown-content > a").click(handleSelect);
}

// when dropdown button clicked, show and hide content
function clickDropdown(e){
  e.preventDefault();
	document.getElementById("myDropdown").classList.toggle("show");
}


//change ingredients based on user selection
function handleSelect(e){
  e.preventDefault();
  var type = $(this).attr('id');

  var idNumber = 0;
  var url = "/json/"+idNumber;

  //render the corresponding ingredients
  $.get(url, function(result) {

    var recipe = result;
    var dietIndex = 0; //default to first type if no JSON exists for this diet
    var i;
    //find which type this is
    for(i = 0; i < recipe.ingredients.length; i++) {
      if (recipe.ingredients[i].name == type) {
        dietIndex = i;
      }
    }

    var ingredients = recipe.ingredients[dietIndex].ingredients;
    console.log(ingredients)
    //change html to display dietary ingredients
		for(i = 0; i < ingredients.length; i++) {

			if (i == 0){
				$("ul.ingredients").html("<li>"+ingredients[i].ingredient+"</li>");
			}
			else{
				$("ul.ingredients").append("<li>"+ingredients[i].ingredient+"</li>");
			}
		}



  });
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
