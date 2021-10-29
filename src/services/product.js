import { checkout } from "../services/checkout";
// Social icons adapted from npm react module:
// https://www.npmjs.com/package/react-social-icons
import { SocialIcon } from "react-social-icons";

const Product = ({
  image,
  name,
  description,
  price,
  requestedBy,
  daysSincePosted,
  location,
  category,
  priceId,
}) => {
  return (
    <li className="product">
      <h3 className="product-title">{name}</h3>
      <div className="product-grid">
        <div className="image-price">
          <div className="image-container">
            <img src={image} alt={name} className="product-image" />
          </div>
          <p className="price">{price}</p>
        </div>
        <div className="product-details">
          <ul>
            <li className="details-item">
              <h4>Goes to:</h4>
              <p>{requestedBy}</p>
            </li>
            <li className="details-item">
              <h4>Requested:</h4>
              <p>{daysSincePosted} day(s) ago</p>
            </li>
            <li className="details-item">
              <h4>Category:</h4>
              <p>{category}</p>
            </li>
            <li className="details-item">
              <h4>Location:</h4>
              <p>{location}</p>
            </li>
            <li className="details-item">
              <h4>Share</h4>
              <div className="social">
                <SocialIcon
                  url="https://twitter.com/"
                  className="icon"
                  style={{ width: "2rem", height: "2rem" }}
                />
                <SocialIcon
                  url="https://facebook.com/"
                  className="icon"
                  style={{ width: "2rem", height: "2rem" }}
                />
                <SocialIcon
                  url="https://instagram.com/"
                  className="icon"
                  style={{ width: "2rem", height: "2rem" }}
                />
                <SocialIcon
                  url="https://tiktok.com/"
                  className="icon"
                  style={{ width: "2rem", height: "2rem" }}
                />
              </div>
            </li>
          </ul>
          <button
            onClick={() => {
              checkout(priceId);
            }}
            className="buy-now"
          >
            Buy Now
          </button>
        </div>
      </div>
      <p>{description}</p>
    </li>
  );
};

export default Product;
