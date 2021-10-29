import { useEffect, useState } from "react";
import "./App.css";
import Product from "./services/product";
import formatAmount from "./services/formatAmount";
import Header from "./services/header";
import logo from "./img/placeholder-logo.png";
import FilterBy from "./services/filterBy";
import SortBy from "./services/sortBy";
import filterByCategory from "./services/filterByCategory";
import sortProducts from "./services/sortProducts";

// The function that makes the fetch request to the Products API
import { getProducts } from "./services/getProducts";

function App() {
  // use the products variable to read all of your products
  // and display them on your page
  const [products, setProducts] = useState([]);
  const [filterBy, setFilterBy] = useState("all");
  const [sortBy, setSortBy] = useState("latest");
  const [filteredProducts, setFilteredProducts] = useState(getProducts());

  useEffect(() => {
    const loadData = async () => {
      const products = await getProducts();
      setProducts(products);
    };

    loadData();
  }, []);

  useEffect(() => {
    const filtered = filterByCategory(products, filterBy);
    const sorted = sortProducts(filtered, sortBy);
    setFilteredProducts([...sorted]);
  }, [filterBy, sortBy, products]);

  return (
    <div className="container">
      <Header image={logo} />
      <FilterBy setFilterBy={setFilterBy} />
      <SortBy setSortBy={setSortBy} />
      <ul className="products-container">
        {products.map((product) => {
          return (
            <Product
              key={product.id}
              image={product.images[0]}
              name={product.name}
              description={product.description}
              price={formatAmount(product.prices[0].unit_amount)}
              category={product.metadata.category}
              daysSincePosted={product.metadata.daysSincePosted}
              location={product.metadata.location}
              requestedBy={product.metadata.requestedBy}
              priceId={product.prices[0].id}
              products={filteredProducts}
            />
          );
        })}
      </ul>
    </div>
  );
}

export default App;
