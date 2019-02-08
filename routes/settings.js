/*
 * GET settings.
 */

exports.view = function(req, res){
  res.render('settings', {
  	'setting-list': [
  	{ 'setting': 'Allergies',
  	  'id': 'set1'
  	},
  	{ 'setting': 'Dietary Restrictions',
  	  'id': 'set2'
  	},
  	{ 'setting': 'Spice Preference',
  	  'id': 'set3'
  	},
  	{ 'setting': 'Nutrition',
  	  'id': 'set4'
  	},
  	]
  });
};