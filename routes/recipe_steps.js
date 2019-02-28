var data = require('../data.json');

exports.view = function(req, res){
  var step = parseInt(req.params.step);
  var id = req.params.id;
  var type = req.params.type;

  //get version for A/B testing
  var version = req.params.v;
  var viewAlt = false;
  if(version == "B"){
    viewAlt = true;
  } 

  //loop thru and find the recipe matching this name
  index = 0;
  for(i = 0; i < data.recipes.length; i++){
  	if(data.recipes[i].id == id){
  		index = i;
  		break
  	}
  }

  var recipe = data.recipes[index];
  var prevUrl = "/"+version+"/recipe/"+recipe.id+"/"+type+"/"+(step-1);
  var nextUrl = "/"+version+"/recipe/"+recipe.id+"/"+type+"/"+(step+1);

  //if prevUrl would go out of bounds, take back to overview page
  if(step <= 1) {
     prevUrl = "/"+version+"/recipe/"+recipe.id;
  }
  //after recipe completion take user to overview page
  else if(step >= recipe.instructions.length) {
     nextUrl = "/"+version+"/recipe/"+recipe.id+"/"+type+"/complete";
  } 

  //don't render out of bounds instructions
  if(step <= recipe.instructions.length) {

    //find correct instructions from given diet type
    var instruction;
    //find an alternative instruction matching mode
    var alt = (recipe.instructions[step-1].alt) || '[]'
    //search alts for thing to add
    var j;
    var found = false;
    for(j = 0; j < alt.length; j++){
      if(alt[j].name === type){
        instruction = (alt[j].instruction)
        found = true;
      }
    }
    if(!found){
       instruction = (recipe.instructions[step-1].instruction)
    }
  }
    


  res.render('recipe_steps', {
    'recipeName': recipe.name,
    'step': step,
    'prevStep': step-1,
    'nextStep': 1+step,
    'prevUrl': prevUrl,
    'nextUrl': nextUrl,
    'recipe': recipe,
    'ingredients': recipe.ingredients,  //list of ingredients
    'instruction': instruction,  //list of instructions
    'total-steps': recipe.instructions.length,
    'viewAlt': viewAlt,
    'version': version
  });
};


exports.complete = function(req, res){
  var id = req.params.id;
  var type = req.params.type;
  var version = req.params.v;
  if(version == "B"){
    viewAlt = true;
  } 

  //loop thru and find the recipe matching this name
  index = 0;
  for(i = 0; i < data.recipes.length; i++){
    if(data.recipes[i].id == id){
      index = i;
      break
    }
  }

  var recipe = data.recipes[index];
  var step = recipe.instructions.length;
  var prevUrl = "/"+version+"/recipe/"+recipe.id+"/"+type+"/"+(step);
  
  res.render('complete', {
    'recipe': recipe, 
    'prevUrl': prevUrl,
    'viewAlt': viewAlt
  });

};