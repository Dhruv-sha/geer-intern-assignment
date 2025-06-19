"use client"
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { API_URL } from '../../server';
import Link from 'next/link';

const HomePage = () => {
  const [products, setProducts] = useState([]);
  const [sortType, setSortType] = useState('default');

  useEffect(() => {
    axios.get(`${API_URL}/products/get-products`)
      .then(res => {
        setProducts(res.data);
      })
      .catch(err => {
        console.error('Error fetching products:', err);
      });
  }, []);

  const sortProducts = (type) => {
    let sorted = [...products];

    switch (type) {
      case 'a-z':
        sorted.sort((a, b) => a.productname.localeCompare(b.productname));
        break;
      case 'z-a':
        sorted.sort((a, b) => b.productname.localeCompare(a.productname));
        break;
      case 'low-high':
        sorted.sort((a, b) => parseFloat(a.price) - parseFloat(b.price));
        break;
      case 'high-low':
        sorted.sort((a, b) => parseFloat(b.price) - parseFloat(a.price));
        break;
      default:
        break;
    }

    setSortType(type);
    setProducts(sorted);
  };

  return (
    <div>
      <img className='pt-16' src="https://geer.in/cdn/shop/files/Classic.png?v=1741270429&width=2000" alt="" />
      <div className="pt-16 flex flex-col md:flex-row p-4 gap-4">
        {/* Filters */}
        <div className="w-full md:w-1/4 border rounded p-4">
          <h2 className="font-bold text-lg mb-4">Sort By</h2>
          <div className="flex flex-col gap-2">
            <button onClick={() => sortProducts('a-z')} className="border p-2 rounded cursor-pointer">Alphabetical (A-Z)</button>
            <button onClick={() => sortProducts('z-a')} className="border p-2 rounded cursor-pointer">Alphabetical (Z-A)</button>
            <button onClick={() => sortProducts('low-high')} className="border p-2 rounded cursor-pointer">Price: Low to High</button>
            <button onClick={() => sortProducts('high-low')} className="border p-2 rounded cursor-pointer">Price: High to Low</button>
          </div>
        </div>

        {/* Products */}
        <div className="w-full md:w-3/4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {products.map((product, idx) => (
            <Link href={`/product/${product._id}`} key={product._id}>
              <div
                className="group border rounded-lg p-4 shadow hover:shadow-lg transition duration-300 transform hover:scale-105 cursor-pointer"
              >
                <div className="relative w-full h-48 overflow-hidden rounded">
                  <img
                    src={product.Image1}
                    alt={`${product.productname}-image1`}
                    className="absolute inset-0 w-full h-full object-cover transition-opacity duration-300 group-hover:opacity-0"
                  />
                  <img
                    src={product.Image2}
                    alt={`${product.productname}-image2`}
                    className="absolute inset-0 w-full h-full object-cover transition-opacity duration-300 opacity-0 group-hover:opacity-100"
                  />
                  <div className="absolute top-2 left-2 bg-black text-white text-xs px-2 py-1 rounded">
                    Best Seller
                  </div>
                </div>

                <h3 className="text-lg font-semibold mt-2">{product.productname}</h3>
                <p className="text-gray-600 line-through text-sm">
                  ₹{(parseFloat(product.price) * 1.1).toFixed(0)}
                </p>
                <p className="text-lg font-bold text-black">₹{product.price}</p>
                <p className="text-green-600 text-sm">
                  SAVE ₹{(parseFloat(product.price) * 0.1).toFixed(0)}
                </p>
              </div></Link>


          ))}
        </div>

      </div>
    </div>

  );
};

export default HomePage;
