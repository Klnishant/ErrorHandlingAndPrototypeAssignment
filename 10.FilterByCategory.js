function filterByCategory(products) {
  return function(category) {
    return products.filter(product => product.category === category);
  };
}

// Test the filterByCategory function
const productsArray = [
  { name: "Laptop", category: "Electronics" },
  { name: "T-shirt", category: "Clothing" },
  { name: "Headphones", category: "Electronics" },
  { name: "Jeans", category: "Clothing" },
  { name: "Mobile Phone", category: "Electronics" }
];

const filterProductsByCategory = filterByCategory(productsArray);

const electronicsProducts = filterProductsByCategory("Electronics");
console.log("Electronics products:", electronicsProducts);

const clothingProducts = filterProductsByCategory("Clothing");
console.log("Clothing products:", clothingProducts);
