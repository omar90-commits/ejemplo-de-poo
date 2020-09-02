import { Book } from './Book';
import { Comic } from './Comic';
import { ShoppingCart } from './ShoppingCart';

(function() {
	const book1 = new Book('1984', 'G.O', 350);
	const comic1 = new Comic('The killing Joker', 'A.M', 150, ['O', 'V', 'J', 'H']);

	const cart = new ShoppingCart();

	cart.addProduct(2, comic1.price);
	cart.showProducts();

	cart.addProduct(1, book1.price);
	cart.showProducts();

	cart.calcTotal();
	cart.showCalcTotal();

	book1.getAllData();
	comic1.getAllData();
}());