import { useEffect, useState } from "react";
import "./App.css";
import Header from "./services/header";
import Footer from "./services/footer"
import FilterBy from "./services/filterBy";
import SortBy from "./services/sortBy";
import filterByCategory from "./services/filterByCategory";
import sortProducts from "./services/sortProducts";
import Products from "./services/products";
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
      <Header />
      <div className="selections">
        <FilterBy setFilterBy={setFilterBy} />
        <SortBy setSortBy={setSortBy} />
      </div>
      <Products products={filteredProducts} />
      <Footer />
    </div>
  );
}

export default App;
