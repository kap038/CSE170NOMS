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
  var alternatives = [];
  //generate available dietary alternatives
  for(i = 0; i < data.recipes[index].ingredients.length; i++){
    alternatives.push(data.recipes[index].ingredients[i].name);
  }

  console.log(alternatives)


  res.render('recipe', {
    'recipeName': data.recipes[index].name,
    'recipe': data.recipes[index],
    'instructions':data.recipes[index].instructions,
    'ingredients': data.recipes[index].ingredients,
    'alternatives': alternatives,
    'defaultIngredients': data.recipes[index].ingredients[0].ingredients //change this index based on user given pref

  });
};

//render the json
exports.recipeJson = function(req, res) { 
  var id = req.params.id;
  var i;
  var recipe;
  for(i = 0; i < data.recipes.length; i++){
    if(data.recipes[i].id === id) {
      recipe = data.recipes[i];
    }
  }
  res.json(recipe);
}

//render the json
exports.allJson = function(req, res) { 
  var recipe = data.recipes;
  res.json(recipe);
}