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

var blt = new Sandwich('white', ['bacon', 'lettuce', 'tomato'], 'half');
blt.name = "BLT"
blt.serve();

var reuben = new Sandwich('rye', ['corned beef', 'sauerkraut', 'russian dressing'], 'diagonal');

function SandwichTwo(bread, ingredients, name) {
  this.bread = bread;
  this.ingredients = ingredients;
  this.name = name;
}

function servetwo() {
  console.log('here\'s your ' + this.name + ', enjoy!');
}

var gc = new SandwichTwo('white', ['cheese'], "grilled cheese");

var ham = new SandwichTwo('white', ['ham', 'cheese'], 'ham & cheese');


