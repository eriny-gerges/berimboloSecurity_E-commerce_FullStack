/* eslint-disable react/prop-types */
import{ useEffect, useState} from "react";
import axios from "axios";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, FreeMode } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/free-mode";
import ProductCard from "./ProductCard";
import "./products.css";


const SkeletonCard = () => (
  <div className="skeleton-card">
    <div className="skeleton-card__img skeleton-shimmer" />
    <div className="skeleton-card__body">
      <div className="skeleton-card__badge skeleton-shimmer" />
      <div className="skeleton-card__title skeleton-shimmer" />
      <div className="skeleton-card__text skeleton-shimmer" />
      <div className="skeleton-card__text skeleton-shimmer" style={{ width: "60%" }} />
      <div className="skeleton-card__footer">
        <div className="skeleton-card__price skeleton-shimmer" />
        <div className="skeleton-card__btn skeleton-shimmer" />
      </div>
    </div>
  </div>
);


const CategoryIcon = ({ name }) => {
  const n = (name || "").toLowerCase();
  if (n.includes("camera") || n.includes("cctv"))
    return (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M23 7l-7 5 7 5V7z" />
        <rect x="1" y="5" width="15" height="14" rx="2" ry="2" />
      </svg>
    );
  if (n.includes("alarm") || n.includes("sensor"))
    return (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M18 8A6 6 0 006 8c0 7-3 9-3 9h18s-3-2-3-9M13.73 21a2 2 0 01-3.46 0" />
      </svg>
    );
  if (n.includes("lock") || n.includes("access"))
    return (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
        <path d="M7 11V7a5 5 0 0110 0v4" />
      </svg>
    );
  if (n.includes("network") || n.includes("router"))
    return (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <rect x="2" y="2" width="20" height="8" rx="2" ry="2" />
        <rect x="2" y="14" width="20" height="8" rx="2" ry="2" />
        <line x1="6" y1="6" x2="6.01" y2="6" />
        <line x1="6" y1="18" x2="6.01" y2="18" />
      </svg>
    );
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    </svg>
  );
};

/* ══════════════════════════════════════════════════════════════
   Products  —  Main Listing Page
   ══════════════════════════════════════════════════════════════ */
const Products = () => {
  const [products, setProducts]       = useState([]);
  const [activeCategory, setActiveCategory] = useState(null);
  const [loading, setLoading]         = useState(true);
  const [error, setError]             = useState(null);
  const categories = [
  { id: 1, name: "CCTV Cameras" },
  { id: 2, name: "Alarms" },
  { id: 3, name: "Bells" },
];

 
  useEffect(() => {
    setLoading(true);
    setError(null);

    axios
  .get("http://127.0.0.1:8000/api/products")
      .then((res) => {
       
        const data = res.data?.data ?? res.data;
        const allProducts = Array.isArray(data) ? data : [];

if (activeCategory) {
  setProducts(
    allProducts.filter(
      (item) =>
        Number(item.category_id) ===
        Number(activeCategory)
    )
  );
} else {
  setProducts(allProducts);
}
      })
      .catch(() => setError("Failed to load products. Please try again."))
      .finally(() => setLoading(false));
  }, [activeCategory]);

 
  const activeLabel = activeCategory
    ? categories.find((c) => c.id === activeCategory)?.name || "Products"
    : "All Products";

 
  return (
    <section className="products-section" id="products">
      
      <div className="products-header container">
        <div className="products-header__label">
          <span className="products-header__dot" aria-hidden="true" />
          Security Catalog
        </div>
        <h1 className="products-header__title">
          {activeLabel}
          {!loading && (
            <span className="products-header__count">
              {products.length} items
            </span>
          )}
        </h1>
        <p className="products-header__sub">
          Professional-grade security solutions for homes, businesses &amp; enterprises.
        </p>
      </div>

      
      <div className="products-categories">
        <div className="container">
          <div className="products-categories__inner">
            
            <button
              className={`cat-pill${activeCategory === null ? " cat-pill--active" : ""}`}
              onClick={() => setActiveCategory(null)}
              aria-pressed={activeCategory === null}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="3" y="3" width="7" height="7" rx="1" />
                <rect x="14" y="3" width="7" height="7" rx="1" />
                <rect x="3" y="14" width="7" height="7" rx="1" />
                <rect x="14" y="14" width="7" height="7" rx="1" />
              </svg>
              All Products
            </button>

            
            {categories.length > 0 && (
              <Swiper
                modules={[Navigation, FreeMode, Autoplay]}
                slidesPerView="auto"
                spaceBetween={10}
                freeMode
                navigation
                className="categories-swiper"
                breakpoints={{
                  0:   { slidesPerView: "auto" },
                  768: { slidesPerView: "auto" },
                }}
              >
                {categories.map((cat) => (
                  <SwiperSlide key={cat.id} className="categories-swiper__slide">
                    <button
                      className={`cat-pill${
                        activeCategory === cat.id ? " cat-pill--active" : ""
                      }`}
                      onClick={() => setActiveCategory(cat.id)}
                      aria-pressed={activeCategory === cat.id}
                    >
                      <CategoryIcon name={cat.name} />
                      {cat.name}
                      {cat.products_count !== undefined && (
                        <span className="cat-pill__count">{cat.products_count}</span>
                      )}
                    </button>
                  </SwiperSlide>
                ))}
              </Swiper>
            )}

          </div>
        </div>
      </div>

      
      <div className="products-divider" aria-hidden="true">
        <div className="products-divider__line" />
        <span className="products-divider__icon">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
          </svg>
        </span>
        <div className="products-divider__line" />
      </div>

      
      <div className="products-grid-wrap container">
        
        {loading && (
          <div className="products-grid" aria-label="Loading products">
            {Array.from({ length: 8 }).map((_, i) => (
              <SkeletonCard key={i} />
            ))}
          </div>
        )}

        
        {!loading && error && (
          <div className="products-empty">
            <div className="products-empty__icon products-empty__icon--error">
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
                <circle cx="12" cy="12" r="10" />
                <line x1="12" y1="8" x2="12" y2="12" />
                <line x1="12" y1="16" x2="12.01" y2="16" />
              </svg>
            </div>
            <h3 className="products-empty__title">Connection Error</h3>
            <p className="products-empty__sub">{error}</p>
            <button
              className="products-empty__btn"
              onClick={() => setActiveCategory(activeCategory)}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polyline points="1 4 1 10 7 10" />
                <path d="M3.51 15a9 9 0 102.13-9.36L1 10" />
              </svg>
              Retry
            </button>
          </div>
        )}

        
        {!loading && !error && products.length === 0 && (
          <div className="products-empty">
            <div className="products-empty__icon">
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                <line x1="8" y1="11" x2="16" y2="11" />
              </svg>
            </div>
            <h3 className="products-empty__title">No Products Found</h3>
            <p className="products-empty__sub">
              No products available in this category yet.
            </p>
            <button
              className="products-empty__btn"
              onClick={() => setActiveCategory(null)}
            >
              View All Products
            </button>
          </div>
        )}

        
        {!loading && !error && products.length > 0 && (
          <div className="products-grid" aria-label="Product listing">
            {products.map((product, idx) => (
              <div
                key={product.id}
                className="products-grid__item"
                style={{ animationDelay: `${Math.min(idx * 60, 480)}ms` }}
              >
                <ProductCard {...product} />
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Products;