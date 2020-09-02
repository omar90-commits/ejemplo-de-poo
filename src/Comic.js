import { Book } from './Book';

const _private = new WeakMap();

export class Comic extends Book {
	constructor(title, author, price, ilustrators) {
		super(title, author, price);
		
		const properties = {
			_ilustrators: ilustrators,
		}

		_private.set(this, {properties});
	}

	get ilustrators() {
		return _private.get(this).properties['_ilustrators'];
	}

	set ilustratorsSet(newIlustrators) {
		const copyArr = [..._private.get(this).properties['_ilustrators'], newIlustrators];

		return _private.get(this).properties['_ilustrators'] = copyArr;
	}

	getAllData() {
		super.getAllData();
		console.log(`Ilustrador: ${this.ilustrators}`);
	}
}