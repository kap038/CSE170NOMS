var data = require('../data.json');

exports.view = function(req, res){

  var id = req.params.id;

  //loop thru and find the recipe matching this name
  index = 0;
  for(i = 0; i < data.recipes.length; i++){
  	if(data.recipes[i].id == id){
  		index = i;
  		break
  	}
  }
  //index = recipe number


  res.render('recipe', {
    'recipeName': data.recipes[index].name,
    'recipe': data.recipes[index],
    'instructions':data.recipes[index].instructions,
    'ingredients': data.recipes[index].ingredients,
    'defaultIngredients': data.recipes[index].ingredients[0].ingredients //change this index based on user given pref
  });
};

/**
'ingredients-string-reg': stringed,
    'normalingredients': data.recipes[index].normalingredients, //list of normal ingredients
    'glutenfreeingredients': data.recipes[index].glutenfreeingredients, //list of gluten free ingredients
    'veganingredients': data.recipes[index].veganingredients, //list of normal ingredients
    'nutfreeingredients': data.recipes[index].nutfreeingredients, //list of gluten free ingredients
    'instructions':data.recipes[index].instructions  //list of instructions
**/

//render the json
exports.recipeJson = function(req, res) { 
  var id = req.params.id;
  var recipe = data.recipes[id];
  res.json(recipe);
}

//render the json
exports.allJson = function(req, res) { 
  var recipe = data.recipes;
  res.json(recipe);
}