// Object property shorthand
const name = 'Andrew';
const userAge = 27;

const user = {
	name,
	age: userAge,
	location: 'New York'
};

console.log(user);

// Object destructuring
const product = {
	label: 'Red notebook',
	price: 3,
	stock: 201,
	salePrice: undefined
};
const { label: productLabel, price, stock, rating = 5 } = product;
console.log(productLabel, price, rating);

const transaction = (type, { label }) => {
	console.log(label);
};
transaction('order', product);
