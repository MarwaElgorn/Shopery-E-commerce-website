import React, { useContext } from "react";
import { ShopContext } from "../../Context/ShopContext";

export default function Cart() {
  const { cart, removeFromCart, updateQuantity } = useContext(ShopContext);

  const total = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div className="container my-5">
      {cart.length === 0 ? (
        <p className="text-center text-muted fs-5">Your cart is empty</p>
      ) : (
        <div className="row">
          {/* جدول المنتجات */}
          <div className="col-md-8">
            <div className="card p-4 shadow-sm">
              <h5 className="mb-3">Shopping Cart</h5>
              <table className="table align-middle">
                <thead>
                  <tr style={{ color: "#666" }}>
                    <th>Product</th>
                    <th>Price</th>
                    <th>Quantity</th>
                    <th>Subtotal</th>
                    <th>Remove</th>
                  </tr>
                </thead>
                <tbody>
                  {cart.map((item) => (
                    <tr key={item.id}>
                      <td>
                        <div className="d-flex align-items-center">
                          <img
                            src={item.image}
                            alt={item.title}
                            style={{
                              width: "60px",
                              height: "60px",
                              marginRight: "10px",
                            }}
                          />
                          <span>{item.title}</span>
                        </div>
                      </td>
                      <td>${item.price}</td>

                      {/*counter*/}
                      <td>
                        <div className="d-flex align-items-center">
                          <button
                            className="btn btn-light"
                            onClick={() =>
                              updateQuantity(item.id, item.quantity - 1)
                            }
                          >
                            -
                          </button>
                          <input
                            type="text"
                            value={item.quantity}
                            readOnly
                            className="form-control text-center mx-2"
                            style={{ width: "50px" }}
                          />
                          <button
                            className="btn btn-light"
                            onClick={() =>
                              updateQuantity(item.id, item.quantity + 1)
                            }
                          >
                            +
                          </button>
                        </div>
                      </td>

                      <td>${(item.price * item.quantity).toFixed(2)}</td>

                      <td>
                        <button
                          className="btn btn-outline-danger btn-sm"
                          onClick={() => removeFromCart(item.id)}
                        >
                          Remove
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* side cart*/}
          <div className="col-md-4">
            <div
              className="card p-4 shadow-sm"
              style={{
                position: "sticky",
                top: "20px",
                border: "1px solid #e0e0e0",
              }}
            >
              <h5 className="mb-4">Cart Summary</h5>

              <div className="d-flex justify-content-between mb-3">
                <span>Total Items</span>
                <span>{cart.length}</span>
              </div>

              <div className="d-flex justify-content-between mb-4 fw-bold">
                <span>Total</span>
                <span>${total.toFixed(2)}</span>
              </div>

              <button
                className="btn w-100"
                style={{
                  backgroundColor: "#00B207",
                  color: "#fff",
                  fontWeight: "bold",
                }}
              >
                Checkout
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
