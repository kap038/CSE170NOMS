var data = require('../data.json');

exports.view = function(req, res){

  // res.render('search');
  res.render('search', data);

};
