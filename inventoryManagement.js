// Write your code here
const products = ["Laptop", "Phone", "Headphones", "Monitor"];

const logFirstProduct = () => {
  console.log(products[0]);
}
const addProduct = (Earphones) => {
  products.push(Earphones);
}
const updateProductName = (index, Smartphone) => {
  if (index >= 0 && index < products.length) {
    products[index] = Smartphone;
  }
}
const removeLastProduct = (Monitor) => {
  products.pop(Monitor);
}




// Export the necessary parts for testing
module.exports = {
  logFirstProduct: typeof logFirstProduct !== 'undefined' ? logFirstProduct : undefined,
  addProduct: typeof addProduct !== 'undefined' ? addProduct : undefined,
  updateProductName: typeof updateProductName !== 'undefined' ? updateProductName : undefined,
  removeLastProduct: typeof removeLastProduct !== 'undefined' ? removeLastProduct : undefined,
  products
};
