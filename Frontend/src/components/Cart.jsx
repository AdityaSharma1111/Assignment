import { useCart } from '../context/CartContext';
import { useNavigate } from 'react-router-dom';

const Cart = () => {
  const Navigate = useNavigate();
  const { cart, removeFromCart } = useCart();
  return (
    <div className="min-h-screen bg-neutral-100 py-10 px-4 md:px-20 m-40">
      <h2 className="text-3xl font-bold mb-8 text-center">Your Cart</h2>

      {cart.length === 0 ? (
        <p className="text-center text-gray-500">Your cart is currently empty.</p>
      ) : (
        <div className="space-y-4 max-w-2xl mx-auto">
          {cart.map((item, index) => (
            <div
              key={index}
              className="flex justify-between items-center bg-white p-4 rounded-lg shadow-md"
            >
              <div>
                <h3 className="text-lg font-medium">{item.name}</h3>
                <p className="text-sm text-gray-600">Size: {item.size}</p>
              </div>
              <div className="text-lg font-semibold text-red-600">₹{item.price}</div>
              <button
                onClick={() => {
                  // Logic to remove item from cart can be added here
                  removeFromCart(index);
                }}
                className="text-red-500 hover:text-white hover:bg-red-600 transition border border-red-500 px-3 py-1 rounded"
              >
                Remove
              </button>
            </div>
          ))}

          <div>
            <button onClick={() => {Navigate('/buy')}} className="w-full text-center mt-6">
              <span className="text-lg font-semibold text-white bg-blue-600 px-4 py-2 rounded hover:bg-blue-700 transition">
                Proceed to Checkout
              </span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
