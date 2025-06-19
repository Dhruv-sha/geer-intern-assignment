"use client";
import React, { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import { API_URL } from "../../../server";

const AddProducts = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    productname: "",
    price: "",
    Image1: "",
    Image2: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await axios.post(`${API_URL}/products/add-products`, formData);
      router.push("/");
    } catch (err) {
      console.error("Error adding product:", err.response?.data || err.message);
      alert("Failed to add product");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-start pt-24 px-4">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md bg-white p-6 shadow-md rounded-md"
      >
        <h2 className="text-2xl font-bold mb-6">Add New Product</h2>

        <label className="block mb-2">Product Name</label>
        <input
          type="text"
          name="productname"
          value={formData.productname}
          onChange={handleChange}
          required
          className="w-full border p-2 rounded mb-4"
        />

        <label className="block mb-2">Price</label>
        <input
          type="text"
          name="price"
          value={formData.price}
          onChange={handleChange}
          required
          className="w-full border p-2 rounded mb-4"
        />

        <label className="block mb-2">Image URL 1</label>
        <input
          type="text"
          name="Image1"
          value={formData.Image1}
          onChange={handleChange}
          required
          className="w-full border p-2 rounded mb-4"
        />

        <label className="block mb-2">Image URL 2</label>
        <input
          type="text"
          name="Image2"
          value={formData.Image2}
          onChange={handleChange}
          required
          className="w-full border p-2 rounded mb-6"
        />

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-black text-white py-2 rounded hover:bg-gray-800 transition cursor-pointer"
        >
          {loading ? "Adding..." : "Add Product"}
        </button>
      </form>
    </div>
  );
};

export default AddProducts;
