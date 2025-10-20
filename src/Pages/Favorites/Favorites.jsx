import React from "react";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { useContext } from "react";
import { ShopContext } from "../../Context/ShopContext";


export default function Favorites() {
  const { favorites, addToCart, removeFromFavorites } = useContext(ShopContext);

  return (
    <>
     <div className="container">
  <div className="card m-5 p-4">
    {favorites.length === 0 ? (
      <p className="text-center text-muted">No favorites yet</p>
    ) : (
      <table className="table">
        <thead>
          <tr style={{ color: "#666" }}>
            <th>Product</th>
            <th>Price</th>
            <th>Add to Cart</th>
            <th>Remove</th>
          </tr>
        </thead>
        <tbody>
          {favorites.map((item) => (
            <tr key={item.id}>
              <td>
                <div className="d-flex align-items-center">
                  <img
                    src={item.image}
                    alt={item.title}
                    style={{ width: "50px", height: "50px", marginRight: "10px" }}
                  />
                  <span>{item.title}</span>
                </div>
              </td>
              <td>${item.price}</td>
              <td>
                <button
                  className="btn btn-success"
                  onClick={() => addToCart(item)}
                >
                  Add to Cart
                </button>
              </td>
              <td>
                <button
                  className="btn btn-outline-danger"
                  onClick={() => removeFromFavorites(item.id)}
                >
                  Remove
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    )}
  </div>
</div>

    </>
  );
}
