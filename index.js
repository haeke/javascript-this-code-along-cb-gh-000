const app = "I don't do much."

var pbj = {
  bread: 'white',
  ingredients: ['peanut butter', 'jelly'],
  name: 'PB&J',
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
    var customers = Array.prototype.slice.call(arguments);
    last = customers.pop();
    console.log(this.name + ' for ' + customers.join(', ') + ' and ' + last + '. Enjoy!');
  } else {
    console.log(this.name + '. order up');
  }
}

//no arguments
serve.call(blt);
serve.apply(blt, ['Fred', 'Led', 'Yed']);

var describeSalad = pbj.describe.bind(salad);





