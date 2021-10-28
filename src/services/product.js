const Product = ({ image, name, description, price }) => {
  return (
    <li>
      <img src={image} alt={name} />
      <h3>{name}</h3>
      <p>{description}</p>
      <p>{price}</p>
      <button>Buy Now</button>
    </li>
  );
};

export default Product;
