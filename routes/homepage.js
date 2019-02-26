
/*
 * GET home page.
 */
var data = require('../data.json');

exports.view = function(req, res){
  // console.log(data);
  data["type"] = req.query.type; //if user came from elsewhere
  console.log(data)
  res.render('homepage', data);
};

exports.view_B = function(req, res){
  // console.log(data);
  data["type"] = req.query.type; //if user came from elsewhere
  console.log(data)
  res.render('homepage_B', data);
};
