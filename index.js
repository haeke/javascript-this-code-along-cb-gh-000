const app = "I don't do much."

var pbj = {
  bread: 'white',
  ingredients: ['peanut butter', 'jelly'],
  cut: 'triangles',
  serve: function() {
    console.log('here is your ' + this.name + ', enjoy');
  },
};

function Sandwich(bread, ingredients, name) {
  this.bread = bread;
  this.ingredients = ingredients;
  this.name = name
}

var blt = new Sandwich('white', ['bacon', 'lettuce', 'tomato'], 'BLT');

var reuben = new Sandwich('rye', ['corned beef', 'sauerkraut', 'russian dressing'], 'Reuben');

function serve(customer) {
  console.log('hey ' + customer + ', here is your ', this.name + ', enjoy!');
}
//needs an object and string
serve.call(reuben, 'Jesse');
//needs and object and an array
serve.apply(reuben, ['Jesse']);

function deliverFood(customer, table) {
  console.log('delivering ' + this.name + ' to ' + customer + ' at table ' + table);
}

deliver.call(blt, "Terry", "6");

function serve() {
  if (arguments.length > 0) {
    var customers = 
  }
}





