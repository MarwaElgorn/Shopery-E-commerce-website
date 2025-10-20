import React, { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import { FaStar, FaRegHeart } from "react-icons/fa";
import { BsMinecartLoaded } from "react-icons/bs";
import { getCategories, getProducts } from "../../Api/fetchapi";
import { ShopContext } from "../../Context/ShopContext";

export default function CategoryProducts() {
  const { id } = useParams();
  const [category, setCategory] = useState({});
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

      const categoryData = categoriesRes.data.find(
        (cat) => String(cat.id) === String(id)
      );
      setCategory(categoryData || {});
   setProducts([...productsRes.data, ...productsRes.data,...productsRes.data]);

    }

    loadData();
  }, [id]);

  const toggleFavorite = (product) => {
    addToFavorites(product);
    setAddedToFav((prev) =>
      prev.includes(product.id)
        ? prev.filter((pid) => pid !== product.id)
        : [...prev, product.id]
    );
  };

  const incrementCart = (product) => {
    setCartCounts((prev) => ({
      ...prev,
      [product.id]: (prev[product.id] || 0) + 1,
    }));
    addToCart(product);
  };

  const decrementCart = (id) => {
    setCartCounts((prev) => {
      const count = prev[id] - 1;
      return { ...prev, [id]: count > 0 ? count : 0 };
    });
  };

  return (
    <section className="products py-5">
      <h2 className="text-center m-5 fw-bolder">
        {category.name ? `${category.name} Products` : "Category Products"}
      </h2>

      <div
    className="products-grid"
  style={{
    display: "grid",
    gridTemplateColumns: "repeat(6, 220px)", // 6 منتجات في الصف
    justifyContent: "center",
    gap: "25px",
    margin: "0 auto",
    width: "100%",
    maxWidth: "1400px",
  }}
      >
        {products.map(({ id, title, image, price, oldPrice, rating }) => (
          <div
            key={id}
    className="card position-relative"
      style={{
        width: "220px",
        padding: "15px",
        textAlign: "center",
        backgroundColor: "#fff",
        borderRadius: "12px",
        boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
        transition: "transform 0.3s ease, box-shadow 0.3s ease",
        border: "1px solid #f0f0f0",
      }}
          >
            {oldPrice && (
              <div
                className="position-absolute top-0 start-0 px-2 py-1 text-white fw-semibold"
                style={{
                  backgroundColor: "#ff4d4f",
                  fontSize: "13px",
                  borderRadius: "0",
                }}
              >
                {Math.round(((oldPrice - price) / oldPrice) * 100)}% OFF
              </div>
            )}

            <button
              className="btn position-absolute top-0 end-0 m-2"
              style={{
                backgroundColor: addedToFav.includes(id) ? "#00B207" : "#fff",
                color: addedToFav.includes(id) ? "#fff" : "#222",
                border: addedToFav.includes(id)
                  ? "1px solid #00B207"
                  : "1px solid #ccc",
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
              style={{
                width: "120px",
                height: "120px",
                objectFit: "contain",
                margin: "0 auto",
              }}
            />
            <p className="fw-semibold mb-1" style={{ fontSize: "15px" }}>
              {title}
            </p>

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
              <span className="fw-bold" style={{ color: "#28a745" }}>
                ${price}
              </span>
              {oldPrice && (
                <span
                  style={{
                    textDecoration: "line-through",
                    color: "#888",
                    fontSize: "14px",
                  }}
                >
                  ${oldPrice}
                </span>
              )}
            </div>

            <div
              className="position-absolute"
              style={{
                bottom: "10px",
                right: "10px",
                display: "flex",
                alignItems: "center",
                gap: "4px",
              }}
            >
              {cartCounts[id] ? (
                <div
                  className="d-flex align-items-center rounded shadow-sm"
                  style={{
                    backgroundColor: "#00B207",
                    color: "#fff",
                    padding: "2px 6px",
                    border: "1px solid #00B207",
                    fontWeight: "bold",
                    fontSize: "12px",
                  }}
                >
                  <button
                    className="btn btn-sm text-white fw-bold"
                    style={{
                      background: "transparent",
                      border: "none",
                      fontSize: "14px",
                      lineHeight: "1",
                      padding: "0 4px",
                    }}
                    onClick={() => decrementCart(id)}
                  >
                    −
                  </button>
                  <span style={{ padding: "0 4px" }}>{cartCounts[id]}</span>
                  <button
                    className="btn btn-sm text-white fw-bold"
                    style={{
                      background: "transparent",
                      border: "none",
                      fontSize: "14px",
                      lineHeight: "1",
                      padding: "0 4px",
                    }}
                    onClick={() => incrementCart({ id, title, image, price })}
                  >
                    +
                  </button>
                </div>
              ) : (
                <button
                  className="btn rounded-circle shadow-sm"
                  style={{
                    backgroundColor: "#f6f6f6",
                    color: "#222",
                    width: "40px",
                    height: "40px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    border: "1px solid #e0e0e0",
                    transition: "all 0.3s ease",
                  }}
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
  );
}
