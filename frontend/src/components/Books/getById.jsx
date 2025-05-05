import React, { useState } from 'react'

const GetById = () => {
const [products,setProducts] = useState('');
    const fetchProduct = async () => {
          try {
            
            const response = await axios.get('https://mern-eval.onrender.com/');
            setProducts(response.data.data);
          } catch (err) {
            console.error('Failed to fetch products:', err);
          }
        };
  return (
    <div>
        <div>
            <h1>
                book
            </h1>
            {products}
        </div>
    </div>
  )
}

export default GetById