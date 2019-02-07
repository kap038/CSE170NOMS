exports.view = function(req, res){

  var name = req.params.name; 
  console.log("The recipe name is: " + name);
  res.render('recipe', {
    'recipeName': name
  });
};
