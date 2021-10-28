const Product = ({ image, name, description, price, requestedBy, daysSincePosted, location, category }) => {
  return (
    <li className="product">
      <h3>{name}</h3>
      <div className="product-grid">
        <div>
          <img src={image} alt={name} className="product-image" />
          <p className="price">{price}</p>
        </div>
        <div className="product-details">
          <ul>
            <li className="details-item">
              <h4>goes to</h4>
              <p>{requestedBy}</p>
            </li>
            <li className="details-item">
              <h4>Requested</h4>
              <p>{daysSincePosted} day(s) ago</p>
            </li>
            <li className="details-item">
              <h4>Category</h4>
              <p>{category}</p>
            </li>
            <li className="details-item">
              <h4>Location</h4>
              <p>{location}</p>
            </li>
            <li className="details-item">
              <h4>Share</h4>
            </li>
          </ul>
          <button>Buy Now</button>
        </div>
      </div>
      <p>{description}</p>
    </li>
  );
};

export default Product;
