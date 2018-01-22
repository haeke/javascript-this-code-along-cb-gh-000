const app = "I don't do much."

var pbj = {
  bread: 'white',
  ingredients: ['peanut butter', 'jelly'],
  cut: 'triangles',
  serve: function() {
    console.log('here is your ' + this.name + ', enjoy');
  },
};

function Sandwich(bread, ingredients, cut) {
  this.bread = bread;
  this.ingredients = ingredients;
  this.cut = cut;
  this.serve = function () {
    console.log('here is your ' + this.name + ', enjoy');
  };
}

function serve(customer) {
  consol.log('hey ' + customer + ', here is your ', this.name + ', enjoy!');
}

var blt = new Sandwich('white', ['bacon', 'lettuce', 'tomato'], 'half');
blt.name = "BLT"
blt.serve();

var reuben = new Sandwich('rye', ['corned beef', 'sauerkraut', 'russian dressing'], 'diagonal');



