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

function handleSelect(e){
  e.preventDefault();
  var type = $(this).attr('id');
  console.log(type);

  var idNumber = 0;
  var url = "/json/"+idNumber;
  console.log(url);

  //render the corresponding ingredients
  $.get(url, function(result) {
    console.log(JSON.stringify(result));

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
    console.log(JSON.stringify(ingredients))
    $("ul.ingredients").text(JSON.stringify(ingredients));
    

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


