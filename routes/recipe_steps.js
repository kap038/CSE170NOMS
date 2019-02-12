var data = require('../data.json');
exports.view = function(req, res){
  var step = parseInt(req.params.step);
  var name = req.params.name;
  console.log(step);
  console.log(name);
  
  //loop thru and find the recipe matching this name
  index = 0;
  for(i = 0; i < data.recipes.length; i++){
  	if(data.recipes[i].name == name){
  		index = i;
  		break
  	}
  }
  //index = recipe number

  console.log(data.recipes[index]);
  res.render('recipe_steps', {
    'recipeName': name,
    'step': step,
    'nextStep': 1+step,
    'recipe': data.recipes[index],
    'ingredients': data.recipes[index].ingredients,  //list of ingredients
    'instruction':data.recipes[index].instructions[step-1].instruction  //list of instructions
  });
};

