import React from 'react';
import thumb1 from '../assets/images/thumb1.jpg';
import thumb2 from '../assets/images/thumb2.jpg';
import thumb3 from '../assets/images/thumb3.jpg';
import ps_video from '../assets/ps_vid.mp4';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useCart } from '../context/CartContext.jsx';
import { toast } from 'react-hot-toast';

const ProductSection = () => {
  const navigate = useNavigate();
  const [selectedSize, setSelectedSize] = useState('');

  const handleSizeSelect = (size) => {
    setSelectedSize(size);
  };

  const { addToCart } = useCart();

  const handleAddToCart = () => {
    if (!selectedSize) {
      alert('Please select a size!');
      return;
    }
    addToCart({ id: 'product-id', name: 'Wool Jacket', price: 7999, size: selectedSize });
    toast.success('Item added to cart!');
  };

  return (
    <div className="bg-neutral-900 text-white py-12 px-4 md:px-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-start">

        {/* Left: Main video with max height */}
        <div>
          <video
            src={ps_video}
            autoPlay
            loop
            muted
            playsInline
            className="w-full max-h-[450px] object-cover rounded-lg"
          />
        </div>

        {/* Right: Details */}
        <div className="bg-white text-black rounded-lg p-6 shadow-lg flex flex-col">
          {/* Description */}
          <p className="text-sm mb-4">
            A tailored composition in motion. Cut from structured wool with a sculpted shoulder and softened hem, this piece captures presence without force. Worn here in the stillness of a city in motion.
          </p>

          {/* Thumbnails */}
          <div className="flex gap-3 overflow-x-auto mb-6">
            {[thumb1, thumb2, thumb3].map((src, i) => (
              <img
                key={i}
                src={src}
                alt={`thumb-${i}`}
                className="w-20 h-28 object-cover rounded-md"
              />
            ))}
          </div>

          {/* Price */}
          <div className="text-2xl font-semibold mb-2">₹ 7,999</div>
          <p className="text-xs text-gray-500 mb-4">MRP incl. of all taxes</p>

          {/* Size Selector */}
          <div className="mb-4">
            <div className="flex justify-between items-center mb-2">
              <span>Please select a size</span>
            </div>
            <div className="grid grid-cols-3 gap-2 sm:grid-cols-6">
              {['XS', 'S', 'M', 'L', 'XL'].map((size, i) => (
                <button
                  key={i}
                  onClick={() => handleSizeSelect(size)}
                  className={`border border-gray-300 rounded-md py-2 hover:bg-gray-200 ${
                    selectedSize === size ? 'bg-red-600 text-white' : ''
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* Buttons */}
          <div className="flex gap-4 mt-6">
            <button onClick={handleAddToCart} className="w-full border border-black text-black py-2 rounded-md hover:bg-gray-100">
              Add to Cart
            </button>
            <button onClick={() => navigate('/buy')} className="w-full bg-black text-white py-2 rounded-md hover:bg-gray-800">
              Buy
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};

export default ProductSection;
