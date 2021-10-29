const filterByCategory = (products, filterBy) => {
  if (filterBy === "all") {
    return products;
  }
  console.log("filtered");
  return products.filter((product) => filterBy === product.metadata.category);
};

export default filterByCategory;
