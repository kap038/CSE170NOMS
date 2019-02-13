var data = require('../data.json');

exports.view = function(req, res){

  var name = req.params.name; 
  console.log("The recipe name is: " + name);

  //loop thru and find the recipe matching this name
  index = 0;
  for(i = 0; i < data.recipes.length; i++){
  	if(data.recipes[i].name == name){
  		index = i;
  		break
  	}
  }
  //index = recipe number
  stringed = JSON.stringify(data.recipes[index].normalingredients);
  console.log("Stringed: "+stringed);
  res.render('recipe', {
    'recipeName': name,
    'recipe': data.recipes[index],
    'ingredients-string-reg': stringed,
    'normalingredients': data.recipes[index].normalingredients, //list of normal ingredients
    'glutenfreeingredients': data.recipes[index].glutenfreeingredients, //list of gluten free ingredients
    'veganingredients': data.recipes[index].veganingredients, //list of normal ingredients
    'nutfreeingredients': data.recipes[index].nutfreeingredients, //list of gluten free ingredients
    'instructions':data.recipes[index].instructions  //list of instructions
  });
};

/*
// Check browser support
if (typeof(Storage) !== "undefined") {
  // Store
  localStorage.setItem("lastname", "Smith");
  // Retrieve
  document.getElementById("result").innerHTML = localStorage.getItem("lastname");
} else {
  document.getElementById("result").innerHTML = "Sorry, your browser does not support Web Storage...";
}*/
