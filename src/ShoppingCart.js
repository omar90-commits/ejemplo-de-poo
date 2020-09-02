export class ShoppingCart {
	constructor() {
		this.products = [];
	}

	addProduct(amount, price) {
		this.products.push( ...Array(amount).fill(price) );
	}

	showProducts() {
		console.log(this.products)
	}

	calcTotal() {
		return this.total = this.products.reduce((acum, el) => acum += el, 0);
	}

	showCalcTotal() {
		console.log('Total a pagar: ' + this.calcTotal());
	}
}