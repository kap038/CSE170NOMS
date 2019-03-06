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

  //set ingredients to the user's dietary pref
  var type = localStorage.getItem("diet");
  changeRecipe(type)

  $("button.dropbtn").click(clickDropdown);
 //child elements of this class
  $(".dropdown-content > a").click(handleSelect);
	//complete a recipe
	$("#complete-button").click(handleComplete);
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
  changeRecipe(type)
}

function handleComplete(e){
	e.preventDefault();
	//push recipe into completed recipes
	var recipe = $(".id-getter").attr("id");
	var completed = JSON.parse(localStorage.getItem("completed"));

	//no recipes completed yet
	if(completed == null){
		completed = [];
	}

	//removes duplicates
	var index = completed.indexOf(recipe)
	if(index != -1){
		completed.splice(index, 1);
	}

	completed.push(recipe)
	localStorage.setItem("completed", JSON.stringify(completed))
	console.log(localStorage.getItem("completed"))

}


function changeRecipe(type){
  var id = $('.id-getter').attr('id');
  var url = "/json/"+id;
  //render the corresponding ingredients
  $.get(url, function(result) {

    var recipe = result;
    var dietIndex = -1; //default to first type if no JSON exists for this diet
    var i;
    //find which type this is
    for(i = 0; i < recipe.ingredients.length; i++) {
      if (recipe.ingredients[i].name == type) {
        dietIndex = i;
      }
    }

    //if dietary mode for this exists
    if(dietIndex != -1) {

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

      var instructions = [];
      for(i = 0; i < recipe.instructions.length; i++){

        //find an alternative instruction matching mode
        var alt = (recipe.instructions[i].alt) || '[]'
        //search alts for thing to add
        var j;
        var found = false;
        for(j = 0; j < alt.length; j++){
          if(alt[j].name === type){
            instructions.push(alt[j].instruction)
            found = true;
          }
        }
        if(!found){
           instructions.push(recipe.instructions[i].instruction)
        }
      }

      //render instructions
      for(i = 0; i < instructions.length; i++) {

        if (i == 0){
          $("ol.instructions").html("<li>"+instructions[i]+"</li>");
        }
        else{
          $("ol.instructions").append("<li>"+instructions[i]+"</li>");
        }
     }

      //change start url
    $("a#start-button").attr("href", recipe.id+"/"+type+"/1");

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
