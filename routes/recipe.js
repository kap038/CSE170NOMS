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

  console.log(data.recipes[index])
  res.render('recipe', {
    'recipeName': name,
    'recipe': data.recipes[index]
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
