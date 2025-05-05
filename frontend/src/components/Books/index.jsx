// Product.jsx
import axios from 'axios';
import React, { useEffect, useState } from 'react';

const Product = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        
        const response = await axios.get('https://mern-eval.onrender.com/');
        setProducts(response.data.data);
      } catch (err) {
        console.error('Failed to fetch products:', err);
      }
    };

    fetchProduct();
  }, []);

  const handleAddToCart = (product) => {
    setCart((prevCart) => [...prevCart, product]);
    alert(`${product.name} added to cart.`);
  };

  const handleBuyNow = (product) => {
    alert(`Proceeding to buy ${product.name}.`);
  };

  return (
    <div className="flex flex-col items-center">
      <h1 className="text-7xl mb-4">Products</h1>
      <ul className="w-full max-w-4xl">
        {products.map((ele, index) => (
          <li key={index} className="mb-4 border p-4 rounded shadow-md">
            <div className="text-xl font-semibold">{ele.name}</div>
            <div className="text-lg text-gray-700">${ele.price}</div>
            <div className="my-2">
              <img
                src={ele.image}
                alt={ele.name}
                className="w-32 h-32 object-cover"
              />
            </div>
            <div className="flex gap-4">
              <button
                onClick={() => handleAddToCart(ele)}
                className="bg-blue-500 text-white px-4 py-2 rounded"
              >
                Add to Cart
              </button>
              <button
                onClick={() => handleBuyNow(ele)}
                className="bg-green-500 text-white px-4 py-2 rounded"
              >
                Buy Now
              </button>
            </div>
          </li>
        ))}
      </ul>

      <div className="mt-10 w-full max-w-4xl">
        <h2 className="text-4xl mb-4">Your Cart</h2>
        {cart.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <ul>
            {cart.map((item, idx) => (
              <li key={idx} className="border-b py-2">
                <span className="font-medium">{item.name}</span> - ${item.price}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Product;
