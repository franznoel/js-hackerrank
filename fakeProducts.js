const {faker } = require('@faker-js/faker');

const createProducts = (numberOfProducts) => {
  const products = [];
  for (let i = 0; i < numberOfProducts; i ++) {

    const hasBeforePrice = faker.datatype.boolean();
    const product = {
      id: i + 1,
      brandName: faker.helpers.arrayElement(['Google', 'Apple', 'GIGABYTE', 'Microsoft']),
      image: faker.image.abstract(100, 100, true),
      title: faker.lorem.words(10),
      description: faker.lorem.paragraph(),
      price: faker.finance.amount(100, 3000, 2, '$'),
      beforePrice: hasBeforePrice ? faker.finance.amount(100, 3000, 2, '$') : undefined,
      isFreeShipping: faker.datatype.boolean(),
      isFreeGift: faker.datatype.boolean()
    };
    products.push(product);
  }
  
  return products;
};

console.log(JSON.stringify(createProducts(100)));
