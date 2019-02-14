var data = require('../data.json');
exports.view = function(req, res){
  var step = parseInt(req.params.step);
  var id = req.params.id;

  //loop thru and find the recipe matching this name
  index = 0;
  for(i = 0; i < data.recipes.length; i++){
  	if(data.recipes[i].id == id){
  		index = i;
  		break
  	}
  }

  var recipe = data.recipes[index];
  var prevUrl = "/recipe/"+recipe.id+"/"+(step-1);
  var nextUrl = "/recipe/"+recipe.id+"/"+(step+1);

  //if prevUrl would go out of bounds, take back to overview page
  if(step <= 1) {
     prevUrl = "/recipe/"+recipe.id;
  }
  //after recipe completion take user to overview page
  if(step+1 > recipe.instructions.length) {
     nextUrl = "/recipe/"+recipe.id;
  }

  console.log(prevUrl);
  res.render('recipe_steps', {
    'recipeName': recipe.name,
    'step': step,
    'prevStep': step-1,
    'nextStep': 1+step,
    'prevUrl': prevUrl,
    'nextUrl': nextUrl,
    'recipe': recipe,
    'ingredients': recipe.ingredients,  //list of ingredients
    'instruction':recipe.instructions[step-1].instruction  //list of instructions
  });
};
