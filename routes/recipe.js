var data = require('../data.json');

exports.view = function(req, res){

  var name = req.params.name; 
  console.log("The recipe name is: " + name);
  console.log(data.recipes[0])
  res.render('recipe', {
    'recipeName': name,
    'recipe': data.recipes[0]
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
