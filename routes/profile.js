/*
 * GET profile.
 */

exports.view = function(req, res){
  var version = req.params.v;
  var viewAlt = false;
  if(version == "B"){
    viewAlt = true;
  }
  res.render('profile', {'viewAlt': viewAlt});

};