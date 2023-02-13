const {faker } = require('@faker-js/faker');

const createProducts = (numberOfProducts) => {
  const products = [];
  for (let i = 0; i < numberOfProducts; i ++) {
    const name = faker.name.fullName();
    const product = {
      brandName: faker.helpers.arrayElement(['Google', 'Apple', ]),
      image: faker.image.abstract(32, 32, true),
      title: name,
      description: faker.lorem.paragraph(),
      price: faker.finance.amount(100, 3000, 2, '$'),
      beforePrice: faker.finance.amount(100, 3000, 2, '$'),
      isFreeShipping: faker.datatype.boolean(),
      isFreeGift: faker.datatype.boolean()
    };
    console.log('product', product)
    products.push(product);
  }
  
  return products;
};

console.log(JSON.stringify(createProducts(100)));
