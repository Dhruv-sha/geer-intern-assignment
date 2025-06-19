import Link from 'next/link';
import React from 'react';

const Navbar = () => {
  return (
    <nav className="w-full h-16 bg-white shadow flex items-center justify-between px-4 md:px-8 fixed top-0 left-0 z-50">
      {/* Logo */}
      <div className="flex items-center gap-2">
        <img
          src="https://geer.in/cdn/shop/files/logo.png?v=1740073087&width=600" // Update this to your actual logo path
          alt="Logo"
          className="h-10 w-auto object-contain"
        />
      </div>

      {/* Add Product Button */}
      <button
        className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800 transition cursor-pointer"
      >
        <Link href="/add-product">Add Products</Link>
      </button>
    </nav>
  );
};

export default Navbar;
