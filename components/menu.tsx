import React from 'react';
import Link from 'next/link';

const Menu: React.FC = () => {
  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto flex justify-between items-center py-4">
        <div className="text-2xl font-bold">
          <Link href="/">BrandName</Link>
        </div>
        <ul className="flex space-x-8">
          <li>
            <Link href="/" className="text-gray-700 hover:text-gray-900">Home</Link>
          </li>
          <li>
            <Link href="/about" className="text-gray-700 hover:text-gray-900">About</Link>
          </li>
          <li>
            <Link href="/services" className="text-gray-700 hover:text-gray-900">Services</Link>
          </li>
          <li>
            <Link href="/contact" className="text-gray-700 hover:text-gray-900">Contact</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Menu;
