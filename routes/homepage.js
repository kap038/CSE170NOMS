
/*
 * GET home page.
 */
var data = require('../data.json');

exports.view_A = function(req, res){
  // console.log(data);
  data["type"] = req.query.type; //if user came from elsewhere
  data["viewAlt"] = false;
  console.log(data)
  res.render('homepage', data);
};

exports.view_B = function(req, res){
  // console.log(data);
  data["type"] = req.query.type; //if user came from elsewhere
  data["viewAlt"] = true
  console.log(data)
  res.render('homepage', data);
};
