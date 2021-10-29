import Product from "./product";
import formatAmount from "./formatAmount";

const Products = ({ products }) => {
  console.log(products);

  return (
    <ul className="products-container">
      {products.length > 0 &&
        products.map((product) => {
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
            />
          );
        })}
    </ul>
  );
};

export default Products;
