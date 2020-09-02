const _private = new WeakMap();

export class Book {
	constructor(title, author, price) {
		const properties = {
			_title: title,
			_author: author,
			_price: price,
		}

		_private.set(this, {properties});
	}

	get title() {
		return _private.get(this).properties['_title'];
	}

	get author() {
		return _private.get(this).properties['_author'];
	}

	get price() {
		return _private.get(this).properties['_price'];
	}

	set titleSet(newTitle) {
		return _private.get(this).properties['_title'] = newTitle;
	}

	set authorSet(newAuthor) {
		return _private.get(this).properties['_author'] = newAuthor;
	}

	set priceSet(newPrice) {
		return _private.get(this).properties['_price'] = newPrice;
	}

	getAllData() {
		console.log(`Titutlo: ${this.title}; Author: ${this.author}; price: ${this.price}`);
	}
}