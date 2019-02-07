
/*
 * GET home page.
 */

exports.view = function(req, res){
  res.render('index', {
    'recipe-list': [
      { 'name': 'Egg',
        // 'image': 'lorempixel.people.1.jpeg',
        'id': 'recipe1'
      },
      { 'name': 'Saffron Rice Cake',
        'id': 'recipe2'
      },
      { 'name': 'Coconut Cream Pie',
        'id': 'recipe3'
      },
      { 'name': 'Grilled Salmon with Lemon Sauce',
        'id': 'recipe4'
      },
      { 'name': 'Sourdough Bread',
        'id': 'recipe5'
      },
      { 'name': 'Pasta al Limone',
        'id': 'recipe6'
      },
      { 'name': 'Salted Caramel Chocolate Tart',
        'id': 'recipe7'
      },
      { 'name': 'Rigatoni with Vodka Sauce',
        'id': 'recipe8'
      },
      { 'name': 'Soup Dumplings',
        'id': 'recipe9'
      },
      { 'name': 'Buffalo Wings',
        'id': 'recipe10'
      },
    ]
  });


};
