import { Link } from "react-router-dom";
import "./Productcard.css";

export default function ProductCard({
  id,
  name,
  image,
  price,
  desc,
}) {

  // IMAGE URL
  const imageUrl = `http://127.0.0.1:8000/images/${image}`;

  return (
    <div className="product-card">

      <div className="card-inner">

        {/* IMAGE */}
        <img
          src={imageUrl}
          alt={name}
          className="product-img"
          onError={(e) => {
            e.target.src =
              "https://via.placeholder.com/300x220?text=No+Image";
          }}
        />

        {/* TITLE */}
        <h4 className="product-title">
          {name}
        </h4>

        {/* DESCRIPTION */}
        <p className="product-desc">
          {desc}
        </p>

        {/* PRICE */}
        <h5 className="product-price">
          ${price}
        </h5>

        {/* BUTTON */}
        <Link
          to={`/product/${id}`}
          className="product-btn"
        >
          Details
        </Link>

      </div>

    </div>
  );
}