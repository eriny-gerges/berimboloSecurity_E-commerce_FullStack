import { useEffect, useState } from "react";
import axios from "axios";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import ProductCard from "./ProductCard";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "./products.css";

// ================= FETCH PRODUCTS =================
export async function fetchAllProducts(setData, setLoading) {
  try {
    setLoading(true);

    const res = await axios.get(
      "http://127.0.0.1:8000/api/products"
    );

    console.log("API RESPONSE:", res.data);

    setData(res.data.data || []);
  } catch (error) {
    console.error("Error fetching products:", error);
    setData([]);
  } finally {
    setLoading(false);
  }
}

function Products() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  // ================= USE EFFECT =================
  useEffect(() => {
    fetchAllProducts(setData, setLoading);
  }, []);

  console.log("ALL PRODUCTS:", data);

  // ================= RENDER CATEGORY SWIPER =================
  const renderSlider = (categoryId) => {
    const filtered = data.filter(
      (item) =>
        String(item.category_id) === String(categoryId)
    );

    console.log("CATEGORY:", categoryId);
    console.log("FILTERED:", filtered);

    if (!filtered.length) {
      return (
        <p className="text-center fs-5">
          No products found
        </p>
      );
    }

    return (
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={20}
        slidesPerView={3}
        navigation
        pagination={{ clickable: true }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        loop={true}
        breakpoints={{
          0: {
            slidesPerView: 1,
          },

          768: {
            slidesPerView: 2,
          },

          992: {
            slidesPerView: 3,
          },
        }}
      >
        {filtered.map((item) => (
          <SwiperSlide key={item.id}>
            <ProductCard {...item} />
          </SwiperSlide>
        ))}
      </Swiper>
    );
  };

  // ================= LOADING =================
  if (loading) {
    return (
      <div className="text-center p-5 fs-3">
        Loading...
      </div>
    );
  }

  // ================= JSX =================
  return (
    <div className="container py-5">

      {/* TITLE */}
      <h1 className="text-center py-5 mb-5">
        Products
      </h1>

      {/* NAVIGATION */}
      <div className="row color-2 rounded p-3 mb-5 text-center shadow">

        <div className="col-4">
          <a
            href="#CCTV"
            style={{
              textDecoration: "none",
              fontWeight: "bold",
            }}
          >
            CCTV Cameras
          </a>
        </div>

        <div className="col-4">
          <a
            href="#Alarms"
            style={{
              textDecoration: "none",
              fontWeight: "bold",
            }}
          >
            Alarms
          </a>
        </div>

        <div className="col-4">
          <a
            href="#Bells"
            style={{
              textDecoration: "none",
              fontWeight: "bold",
            }}
          >
            Bells
          </a>
        </div>

      </div>

      {/* CCTV */}
      <section id="CCTV" className="mb-5">
        <h2 className="text-center mb-4">
          CCTV Cameras
        </h2>

        {renderSlider(1)}
      </section>

      {/* ALARMS */}
      <section id="Alarms" className="mb-5">
        <h2 className="text-center mb-4">
          Alarms
        </h2>

        {renderSlider(2)}
      </section>

      {/* BELLS */}
      <section id="Bells" className="mb-5">
        <h2 className="text-center mb-4">
          Bells
        </h2>

        {renderSlider(3)}
      </section>

    </div>
  );
}

export default Products;