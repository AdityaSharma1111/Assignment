import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Buy = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    street: "",
    apt: "",
    state: "",
    zip: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [orderConfirmed, setOrderConfirmed] = useState(false);
  const [orderReceipt, setOrderReceipt] = useState(null);

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    // Prepare dummy cartItems and totalAmount for backend, adapt as needed
    const cartItems = [{ id: 1, name: "Silhouette No. 1 – Vermilion", price: 7999, qty: 1 }];
    const totalAmount = 8199;

    const orderData = {
      address: formData,
      cartItems,
      totalAmount,
    };

    try {
      const res = await fetch("https://assignment-eclypse.onrender.com", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(orderData),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.message || "Something went wrong");
      } else {
        setOrderConfirmed(true);
        setOrderReceipt({
          orderId: data.orderId || "123456",  // fallback dummy
          items: cartItems,
          total: totalAmount,
          address: formData,
        });
      }
    } catch (err) {
      setError("Network error: " + err.message);
    }

    setLoading(false);
  };

  const handleCancel = () => {
    setFormData({
      firstName: "",
      lastName: "",
      street: "",
      apt: "",
      state: "",
      zip: "",
    });
    setError("");
  };

  if (orderConfirmed && orderReceipt) {
    return (
      <div className="min-h-screen mt-24 p-6 md:p-12 flex flex-col items-center justify-center">
        <h2 className="text-2xl font-bold mb-6">Thank you for your order!</h2>

        <div className="bg-white rounded-xl shadow-md p-8 w-full max-w-md">
          <p className="mb-4">Order ID: <span className="font-mono">{orderReceipt.orderId}</span></p>

          <h3 className="font-semibold mb-2">Items:</h3>
          <ul className="mb-4 space-y-2">
            {orderReceipt.items.map((item, i) => (
              <li key={i} className="flex justify-between">
                <span>{item.name} x{item.qty}</span>
                <span>₹{item.price * item.qty}</span>
              </li>
            ))}
          </ul>

          <p className="font-semibold mb-4">Total: ₹{orderReceipt.total}</p>

          <h3 className="font-semibold mb-2">Shipping to:</h3>
          <address className="not-italic text-sm space-y-1">
            <div>{orderReceipt.address.firstName} {orderReceipt.address.lastName}</div>
            <div>{orderReceipt.address.street}</div>
            {orderReceipt.address.apt && <div>Apt {orderReceipt.address.apt}</div>}
            <div>{orderReceipt.address.state}, {orderReceipt.address.zip}</div>
          </address>
        </div>
        <div>
          <button
            className="mt-6 bg-black text-white p-3 rounded text-sm font-medium hover:bg-red-600 transition cursor-pointer"
            onClick={() => navigate("/")}
          >
            Continue Shopping
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen mt-24 bg-white p-6 md:p-12 grid grid-cols-1 md:grid-cols-3 gap-10">
      {/* Left: Address Form */}
      <div className="md:col-span-2 border rounded-xl p-8 shadow-md">
        <h2 className="text-xl font-semibold mb-6 flex items-center gap-2">
          <span className="border-4 border-red-500 rounded-full" /> Add New Address
        </h2>

        {error && (
          <div className="mb-4 p-3 bg-red-100 text-red-700 rounded">{error}</div>
        )}

        <div className="space-y-6">
  <div className="flex gap-4">
    <input
      type="text"
      name="firstName"
      placeholder="First Name"
      value={formData.firstName}
      onChange={handleChange}
      className="w-full border p-2 rounded"
      required
    />
    <input
      type="text"
      name="lastName"
      placeholder="Last Name"
      value={formData.lastName}
      onChange={handleChange}
      className="w-full border p-2 rounded"
      required
    />
  </div>

  <input
    type="text"
    name="street"
    placeholder="Street Address"
    value={formData.street}
    onChange={handleChange}
    className="w-full border p-2 rounded"
    required
  />

  <div className="flex gap-4">
    <input
      type="text"
      name="apt"
      placeholder="Apt Number"
      value={formData.apt}
      onChange={handleChange}
      className="w-full border p-2 rounded"
      required
    />
    <input
      type="text"
      name="state"
      placeholder="State"
      value={formData.state}
      onChange={handleChange}
      className="w-full border p-2 rounded"
      required
    />
    <input
      type="text"
      name="zip"
      placeholder="Zip"
      value={formData.zip}
      onChange={handleChange}
      className="w-full border p-2 rounded"
      required
    />
  </div>

  <div className="flex gap-4 mt-6">
    <button
      type="button"
      onClick={handleCancel}
      disabled={loading}
      className="w-full border border-gray-400 p-3 rounded hover:bg-gray-200"
    >
      Cancel
    </button>
    <button
      type="button"
      className="w-full bg-black text-white p-3 rounded cursor-pointer hover:bg-red-600 transition"
    >
      Save This Address
    </button>
  </div>
</div>

      </div>

      {/* Right: Order Summary */}
      <div className="bg-gray-100 rounded-xl p-8 shadow-md">
        <p className="text-sm text-gray-500 mb-4">
          By placing your order, you agree to our company{" "}
          <span className="underline cursor-pointer">Privacy policy</span> and{" "}
          <span className="underline cursor-pointer">Conditions of use</span>.
        </p>

        <h3 className="text-lg font-semibold mb-4">Order Summary</h3>
        <div className="text-sm space-y-2">
          <div className="flex justify-between">
            <span>Items – Silhouette No. 1 – Vermilion</span>
            <span>₹7,999</span>
          </div>
          <div className="flex justify-between">
            <span>Shipping and handling:</span>
            <span>₹200</span>
          </div>
          <div className="flex justify-between">
            <span>Before tax:</span>
            <span>₹6,599</span>
          </div>
          <div className="flex justify-between">
            <span>Tax Collected:</span>
            <span>₹1,400</span>
          </div>
        </div>

        <hr className="my-4" />

        <div className="flex justify-between font-semibold text-lg">
          <span>Order Total:</span>
          <span>₹8,199</span>
        </div>

        <button
          className="mt-6 w-full bg-black text-white p-3 rounded text-sm font-medium hover:bg-red-600 transition cursor-pointer"
          onClick={handleSubmit}
          disabled={loading}
        >
          {loading ? "Placing Order..." : "Place Order"}
        </button>

      </div>
    </div>
  );
};

export default Buy;