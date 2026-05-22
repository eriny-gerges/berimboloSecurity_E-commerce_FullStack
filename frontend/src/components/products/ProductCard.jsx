/* eslint-disable react/prop-types */
import{ useState } from "react";
import { Link } from "react-router-dom";
import "./Productcard.css";

const ProductCard = ({
  id,
  name,
  image,
  price,
  desc,
}) => {
  const [imgError, setImgError] = useState(false);

 
  const formatPrice = (price) =>
    new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 2,
    }).format(price);

 
  return (
    <div className="product-card">
      
      <div className="product-card__glow" aria-hidden="true" />

      
      <span className="product-card__corner product-card__corner--tl" aria-hidden="true" />
      <span className="product-card__corner product-card__corner--br" aria-hidden="true" />

      
      <Link
        to={`/product/${id}`}
        className="product-card__image-link"
        aria-label={`View ${name}`}
      >
        <div className="product-card__image-wrap">
          
          <div className="product-card__scanline" aria-hidden="true" />

          {!imgError && image ? (
            <img
              src={`http://127.0.0.1:8000/images/${image}`}
              alt={name}
              className="product-card__img"
              onError={() => setImgError(true)}
              loading="lazy"
            />
          ) : (
            <div className="product-card__img-fallback" aria-hidden="true">
              <svg
                width="56"
                height="56"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1"
              >
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                <circle cx="12" cy="12" r="3" />
              </svg>
              <span>No Image</span>
            </div>
          )}

          
          <div className="product-card__overlay" aria-hidden="true">
            <span className="product-card__overlay-icon">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                <circle cx="12" cy="12" r="3" />
              </svg>
              Quick View
            </span>
          </div>
        </div>
      </Link>

      
      <div className="product-card__body">

        
        <Link to={`/product/${id}`} className="product-card__name-link">
          <h3 className="product-card__name">{name}</h3>
        </Link>

        
        {desc && (
          <p className="product-card__desc">
            {desc}
          </p>
        )}

        
<div className="product-card__footer">

  
  <div className="product-card__pricing">
    <span className="product-card__price">
      {formatPrice(price)}
    </span>
  </div>

  <div className="product-card__actions">

    
    <Link
      to={`/product/${id}`}
      className="product-card__btn product-card__btn--ghost"
      aria-label="View details"
    >
      <svg
        width="15"
        height="15"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path d="M5 12h14M12 5l7 7-7 7" />
      </svg>
    </Link>

    
    <button
      className="product-card__btn product-card__btn--primary"
      onClick={() => {}}
      aria-label="Add to cart"
    >
      <svg
        width="15"
        height="15"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z" />
        <line x1="3" y1="6" x2="21" y2="6" />
      </svg>

      <span>Add</span>
    </button>

  </div>
</div>
      </div>
    </div>
  );
};

export default ProductCard;