import Product from "./product";
import formatAmount from "./formatAmount";

const Products = ({ products }) => {
  return (
    <ul>
      {products.map((product) => {
        return (
          <Product
            key={product.id}
            image={product.images[0]}
            name={product.name}
            description={product.description}
            price={formatAmount(product.prices[0].unit_amount)}
          />
        );
      })}
    </ul>
  );
};

export default Products;
