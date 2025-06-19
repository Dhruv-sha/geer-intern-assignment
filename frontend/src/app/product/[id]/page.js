"use client";
import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import axios from "axios";
import { API_URL } from "../../../../server";

const Product = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    if (id) {
      axios
        .get(`${API_URL}/products/get-product/${id}`)
        .then((res) => setProduct(res.data))
        .catch((err) => console.error("Error fetching product:", err));
    }
  }, [id]);

  if (!product) return <div className="pt-20 text-center">Loading...</div>;

  return (
    <div className="pt-20 px-4 md:px-16 flex flex-col lg:flex-row gap-10 items-start">
      <div className="w-full lg:w-1/2 flex flex-col items-center">
        <div className="w-full h-[400px] border rounded overflow-hidden flex justify-center items-center">
          <img
            src={product.Image1}
            alt="Product Main"
            className="object-contain max-h-full"
          />
        </div>
        <div className="mt-4 flex gap-4">
          <img
            src={product.Image1}
            alt="Image1"
            className="w-20 h-20 border rounded object-cover"
          />
          <img
            src={product.Image2}
            alt="Image2"
            className="w-20 h-20 border rounded object-cover"
          />
        </div>
      </div>

      <div className="w-full lg:w-1/2">
        <h2 className="text-2xl font-semibold mb-2">{product.productname}</h2>
        <div className="flex gap-3 items-center mb-2">
          <span className="line-through text-gray-500">
            ₹{(parseFloat(product.price) * 1.1).toFixed(0)}
          </span>
          <span className="text-xl font-bold">₹{product.price}</span>
          <span className="text-sm bg-gray-800 text-white px-2 py-1 rounded">
            SAVE ₹{(parseFloat(product.price) * 0.1).toFixed(0)}
          </span>
        </div>

        <div className="mb-4">
          <p className="font-medium">Metal Quality:</p>
          <div className="flex gap-2 mt-1">
            <button className="border px-3 py-1 rounded bg-black text-white cursor-pointer">
              18K
            </button>
            <button className="border px-3 py-1 rounded cursor-pointer">14K</button>
          </div>
        </div>

        <div className="mb-4">
          <p className="font-medium">Metal Color:</p>
          <div className="flex gap-2 mt-1">
            <div className="w-6 h-6 rounded-full border bg-yellow-400"></div>
            <div className="w-6 h-6 rounded-full border bg-gray-300"></div>
            <div className="w-6 h-6 rounded-full border bg-white"></div>
          </div>
        </div>

        <div className="mb-4">
          <p className="font-medium">Diamond Quality & Tone:</p>
          <div className="flex gap-2 mt-1 flex-wrap">
            <button className="border px-3 py-1 rounded bg-black text-white cursor-pointer">
              VVS-EF
            </button>
            <button className="border px-3 py-1 rounded cursor-pointer">VS-EF</button>
            <button className="border px-3 py-1 rounded cursor-pointer">VVS-GH</button>
            <button className="border px-3 py-1 rounded cursor-pointer">VS-GH</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
