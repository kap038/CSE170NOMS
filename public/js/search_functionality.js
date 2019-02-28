//responsible for a search bar that takes user input
'use strict';
// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	$('.backbutton').hide();
	initializePage();
	//hide back button
})

function initializePage() {
	console.log("Javascript connected!");
	shouldShowType();
	$('#searchform').submit(handleSearch);
	$('#foryou').click(handleForYou);
	$('#completed').click(handleCompleted);
	$('#favorites').click(handleFavorites);
}

//if user redirected from profile, show favorites or completed
function shouldShowType(){
	var type = $('.type-getter').attr('id');

	if(type === 'favorites'){
		favoritesLogic();
	} else if (type === 'completed'){
		completedLogic();
	} else {
		console.log(type)
	}
}

function handleFavorites(e){
	e.preventDefault();
	favoritesLogic();

}

function favoritesLogic(){
	var input = (localStorage.getItem("favorites") || '[]'); //if null, init to []

	//show back button
	$('.backbutton').show();

	//hide other buttons
	$('.small-recipes').hide();
	$('.search-container').hide();

	//get the json of all recipes
	var url = "/json/"
  	$.get(url, function(result) {
		//add corresponding recipes to match the names
		var i;
		var matches = []
		for(i = 0; i < result.length; i++){
			if(input.includes(result[i].id)) {
				matches.push(result[i]);
			}
		}
		console.log(matches)
  		//add any recipes that match the user's keyword
 		displayList(matches)

  	});
}

function handleForYou(e){
	e.preventDefault();

	//show back button
	$('.backbutton').show();
	//hide other buttons
	$('.small-recipes').hide();
	$('.search-container').hide();

	var input = localStorage.getItem("diet")
	console.log(input)

	//get the json of all recipes
	var url = "/json/"
  	$.get(url, function(result) {
		//console.log(JSON.stringify(result));
  		var matches = getMatches(input, result);

  		//add any recipes that match the user's keyword
 		displayList(matches)

  	});

}

function handleCompleted(e){
	e.preventDefault();
	completedLogic();

}

function completedLogic() {
	var input = (localStorage.getItem("completed") || '[]'); //if null, init to []

	//show back button
	$('.backbutton').show();
	//hide other buttons
	$('.small-recipes').hide();
	$('.search-container').hide();

	//get the json of all recipes

	var url = "/json/"
  	$.get(url, function(result) {
		//add corresponding recipes to match the names
		var i;
		var matches = []
		for(i = 0; i < result.length; i++){
			if(input.includes(result[i].id)) {
				matches.push(result[i]);
			}
		}
		console.log(matches)
  		//add any recipes that match the user's keyword
 		displayList(matches)

  	});
}

//change displayed recipes to match search results
function handleSearch(e) {
	e.preventDefault();

	//show back button
	$('.backbutton').show();
	//hide other buttons
	$('.small-recipes').hide();
	$('.search-container').hide();

	var input = $('input#searchbox').val();
	//case insensitive
	input = input.toLowerCase();
	//console.log(input)

	//get the json of all recipes
	var url = "/json/"
  	$.get(url, function(result) {
		//console.log(JSON.stringify(result));
  		var matches = getMatches(input, result);

  		//add any recipes that match the user's keyword
 		displayList(matches)

  	});
}

//find recipes that match user's input. Input json to search thru.
function getMatches(input, json) {


	var recipes = json;
	var matches = [];
	var i;

	//all recipes have normal
	if(input === "normal"){
		return recipes;
	}

	for(i = 0; i < recipes.length; i++) {
		var strName = JSON.stringify(recipes[i].name).toLowerCase();
		//check name, tags, difficulty, and length
		if(strName.includes(input) || recipes[i].tags.includes(input) ||
			 recipes[i].difficulty.includes(input) || recipes[i].time.startsWith(input)){
			matches.push(recipes[i])
		}
	}
	return matches;
}

//display a given array of recipes matching category
function displayList(matches){
	 	if(matches.length == 0){
  			var html = "<div>Sorry, no matches found.</div>";
  			$("#available-recipes").html(html);
  		} else {
  			var i;
  			var j;
  			var version = $(".version-getter").attr('id');
	  		//render matching results
	  		for(i = 0; i < matches.length; i++){
	  			//$("ul.ingredients").html("<li>"+matches[i].ingredient+"</li>");
	  			var match = matches[i];
	  			var tags = [];
	  			//create tags string
	  			for(j = 0; j < match.tags.length; j++){
	  				tags += '<p class="tag" class="recipe-tag"><em>#'+match.tags[j]+'</em></p>'
	  			}
	  			var html = '<div id='+match.id+' class="recipe-list">'+
					'<div class="recipe">'+
						'<a class="recipe-link" id="'+match.id+'" href='+version+'/recipe/'+match.id+'>'+
						'<img src='+match.imageURL+' class="img-responsive recipe-img">'+
						'<h5>'+match.name+'</h5>'+
						'<div class="recipe-tags">'+ tags +'</div>'+
						 '<div class="recipe-details"><p class="detail">'+
									'<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="18" height="18" viewBox="0 0 224 224" class="svg-style">'+
										'<g id="original-icon" fill="#666666"><path class="weight-icon"></path></g></svg>'+
									match.difficulty+
									'</p><p class="detail" id="time">'+
									'<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="18" height="18" viewBox="0 0 224 224" class="svg-style">'+
										'<g fill="#666666"><path class="time-icon"></path></g></svg>'+
									match.time+
									'</p></div>'

				//first item needs to replace existing html
	  			if(i == 0) {
	  				$(".available-recipes").html(html);
	  			} else {
	  				$(".available-recipes").append(html);
	  			}
	  		}
  		}
}

/*
<div id={{id}} class="recipe-list">
				<div class="recipe">
					<a class="recipe-link" id={{id}} href="recipe/{{id}}">
					<h3>{{name}}</h3>
					<img src={{imageURL}} class="img-responsive">
					<p>Difficulty: {{difficulty}}</p>
					<p>Time: {{time}}</p>
					</a>
					<hr>
				</div>
			</div>
*/
