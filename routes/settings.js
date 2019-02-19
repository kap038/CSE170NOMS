/*
 * GET settings.
 */

exports.view = function(req, res){
  res.render('settings', {
  	'setting-list': [
  	{ 'setting': 'Allergies',
      'id':'allergy',
  	  'options': [
        {'option': 'peanut'},
        {'option': 'nut'},
        {'option': 'shrimp'},
        {'option': 'seafood'}
      ]
  	},
  	{ 'setting': 'Dietary Restrictions',
  	  'id': 'dietary',
      'options': [
        {'option': 'normal'},
        {'option': 'vegan'},
        {'option': 'nutfree'},
        {'option': 'glutenfree'}
      ]
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
