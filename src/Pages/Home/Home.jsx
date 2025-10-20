import React, { useState, useEffect, useContext } from "react";
import { getCategories, getProducts } from "../../Api/fetchapi";
import { ShopContext } from "../../Context/ShopContext";
import { Link } from "react-router-dom";
import { FaStar, FaRegHeart } from "react-icons/fa";
import { BsMinecartLoaded } from "react-icons/bs";
import Banner from "../../Components/Banner/Banner";
import Features from "../../Components/Features/Features";
import Deals from "../../Components/Deals/Deals";
import Vector from "./../../Components/Vector/Vector";
import Instgram from "../../Components/Instgram/Instgram";

export default function Home() {
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const { addToCart, addToFavorites } = useContext(ShopContext);
  const [addedToFav, setAddedToFav] = useState([]);
  const [cartCounts, setCartCounts] = useState({});

  useEffect(() => {
    async function loadData() {
      const [categoriesRes, productsRes] = await Promise.all([
        getCategories(),
        getProducts(),
      ]);
      setCategories(categoriesRes.data);
      setProducts(productsRes.data);
    }
    loadData();
  }, []);

  const toggleFavorite = (product) => {
    addToFavorites(product);
    setAddedToFav((prev) =>
      prev.includes(product.id)
        ? prev.filter((id) => id !== product.id)
        : [...prev, product.id]
    );
  };

  const incrementCart = (product) => {
    setCartCounts((prev) => ({ ...prev, [product.id]: (prev[product.id] || 0) + 1 }));
    addToCart(product);
  };

  const decrementCart = (id) => {
    setCartCounts((prev) => {
      const count = prev[id] - 1;
      return { ...prev, [id]: count > 0 ? count : 0 };
    });
  };

  return (
    <div className="container home">
      <Banner />
      <Features />

      <section className="categories py-5">
        <h2 className="text-center mb-5 fw-bold" style={{ color: "#222" }}>
          Popular Categories
        </h2>
        <div className="row justify-content-center g-4">
          {categories.map(({ id, name, image }) => (
            <div
              key={id}
              className="col-6 col-sm-4 col-md-3 col-lg-2 d-flex justify-content-center"
            >
              <Link
                to={`/CategoryProducts/${id}`}
                style={{ textDecoration: "none", color: "inherit", width: "100%", maxWidth: "180px" }}
              >
                <div
                  className="card text-center"
                  style={{
                    boxShadow: "0 6px 15px rgba(0,0,0,0.1)",
                    borderRadius: "14px",
                    padding: "20px",
                    minHeight: "200px",
                    backgroundColor: "#fff",
                    border: "1px solid #f0f0f0",
                    transition: "all 0.3s ease",
                    cursor: "pointer",
                  }}
                  onMouseOver={(e) => {
                    e.currentTarget.style.transform = "translateY(-5px)";
                    e.currentTarget.style.boxShadow = "0 10px 25px rgba(0,0,0,0.15)";
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.boxShadow = "0 6px 15px rgba(0,0,0,0.1)";
                  }}
                >
                  <img
                    src={image}
                    alt={name}
                    style={{ width: "100%", height: "100%", objectFit: "cover", marginBottom: "12px" }}
                  />
                  <p className="fw-semibold" style={{ fontSize: "15px", color: "#333", margin: 0 }}>
                    {name}
                  </p>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </section>

      <section className="products py-5">
        <h2 className="text-center m-5 fw-bolder">Popular Products</h2>
        <div className="d-flex flex-wrap justify-content-center" style={{ gap: "0", margin: "0", padding: "0" }}>
          {products.map(({ id, title, image, price, oldPrice, rating }) => (
            <div
              key={id}
              className="card position-relative"
              style={{
                width: "220px",
                padding: "15px",
                textAlign: "center",
                backgroundColor: "#fff",
                boxShadow: "0 4px 10px rgba(0,0,0,0.05)",
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
                overflow: "hidden",
                borderRadius: "0",
                margin: "0",
                border: "none",
              }}
            >
              {oldPrice && (
                <div
                  className="position-absolute top-0 start-0 px-2 py-1 text-white fw-semibold"
                  style={{ backgroundColor: "#ff4d4f", fontSize: "13px", borderRadius: "0" }}
                >
                  {Math.round(((oldPrice - price) / oldPrice) * 100)}% OFF
                </div>
              )}
              <button
                className="btn position-absolute top-0 end-0 m-2"
                style={{
                  backgroundColor: addedToFav.includes(id) ? "#00B207" : "#fff",
                  color: addedToFav.includes(id) ? "#fff" : "#222",
                  border: addedToFav.includes(id) ? "1px solid #00B207" : "1px solid #ccc",
                  transition: "all 0.3s ease",
                }}
                onClick={() => toggleFavorite({ id, title, image, price })}
              >
                <FaRegHeart />
              </button>

              <img
                src={image}
                alt={title}
                className="mb-2"
                style={{ width: "120px", height: "120px", objectFit: "contain", margin: "0 auto" }}
              />
              <p className="fw-semibold mb-1" style={{ fontSize: "15px" }}>{title}</p>

              <div className="mb-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <FaStar
                    key={i}
                    color={i < rating ? "#ffb400" : "#e4e5e9"}
                    size={14}
                    style={{ marginRight: "2px" }}
                  />
                ))}
              </div>

              <div className="d-flex justify-content-center align-items-center gap-2 mb-4">
                <span className="fw-bold" style={{ color: "#28a745" }}>${price}</span>
                {oldPrice && (
                  <span style={{ textDecoration: "line-through", color: "#888", fontSize: "14px" }}>
                    ${oldPrice}
                  </span>
                )}
              </div>

              <div className="position-absolute" style={{ bottom: "10px", right: "10px", display: "flex", alignItems: "center", gap: "4px" }}>
                {cartCounts[id] ? (
                  <div className="d-flex align-items-center rounded shadow-sm" style={{ backgroundColor: "#00B207", color: "#fff", padding: "2px 6px", border: "1px solid #00B207", fontWeight: "bold", fontSize: "12px" }}>
                    <button
                      className="btn btn-sm text-white fw-bold"
                      style={{ background: "transparent", border: "none", fontSize: "14px", lineHeight: "1", padding: "0 4px" }}
                      onClick={() => decrementCart(id)}
                    >
                      −
                    </button>
                    <span style={{ padding: "0 4px" }}>{cartCounts[id]}</span>
                    <button
                      className="btn btn-sm text-white fw-bold"
                      style={{ background: "transparent", border: "none", fontSize: "14px", lineHeight: "1", padding: "0 4px" }}
                      onClick={() => incrementCart({ id, title, image, price })}
                    >
                      +
                    </button>
                  </div>
                ) : (
                  <button
                    className="btn rounded-circle shadow-sm"
                    style={{ backgroundColor: "#f6f6f6", color: "#222", width: "40px", height: "40px", display: "flex", alignItems: "center", justifyContent: "center", border: "1px solid #e0e0e0", transition: "all 0.3s ease" }}
                    onClick={() => incrementCart({ id, title, image, price })}
                  >
                    <BsMinecartLoaded size={32} />
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      <Deals />
      <section className="py-5">
        <Vector />
        <Instgram />
      </section>
    </div>
  );
}
