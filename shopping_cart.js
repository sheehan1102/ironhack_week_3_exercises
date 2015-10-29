var ShoppingCart = function () {
	this.items = [];
};

ShoppingCart.prototype.addItem = function (item) {
	this.items.push(item);
	console.log("Adding " + item.name + " to the cart at the price of " + item.price);
}

ShoppingCart.prototype.total = function () {
	var total = this.items.reduce(function (a, b) {
		return a + b.price;
	}, 0);

	var apples = this.specificItems('apple');
	var oranges = this.specificItems('orange');

	if (apples > 1) {
		var appleDiscount = Math.floor(apples / 2) * apple.price;
		total -= appleDiscount;
	}

	if (oranges > 5) {
		oranges = oranges - 5;
		var orangesDiscount = oranges * .5;
		total -= orangesDiscount;
	}

	if (this.items.length > 5) {
		total = total * .9;
	}
	
	console.log("Cart total: " + total);
}

ShoppingCart.prototype.specificItems = function (itemName) {
	var group = this.items.filter(function (item) {
		return item.name === itemName;
	});
	return group.length;
};

ShoppingCart.prototype.removeItems = function (name, quantity) {
	var positions = [];
	this.items.forEach(function (item, index) {
		if (item.name === name) {
			positions.push(index);
		}
	});
	if (quantity > positions.length) {
		quantity = positions.length;
	}
	for (var i = 0; i < quantity; i++) {
		this.items.splice(i, 1);
	}
};

var Item = function (name, price) {
	this.name = name;
	this.price = price;
};

var apple = new Item('apple', 10);
var orange = new Item('orange', 5);
var cart = new ShoppingCart;
cart.addItem(apple);
cart.addItem(apple);
cart.addItem(apple);
cart.addItem(orange);
cart.addItem(orange);
cart.addItem(orange);
cart.addItem(orange);
cart.addItem(orange);
cart.addItem(orange);
cart.total();
cart.removeItems('apple', 2);
console.log(cart.items);




