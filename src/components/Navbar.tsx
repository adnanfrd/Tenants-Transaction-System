"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react"; 


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md fixed top-0 left-0 w-full z-50">
      <div className="container mx-auto px-4 md:px-8 flex items-center justify-between h-16">
        <Link href="/" className="flex items-center space-x-2">
          <Image src={'/homehero.png'} alt="TentLoom" width={40} height={40} />
          <span className="text-lg font-semibold text-gray-800">TentLoom</span>
        </Link>

        <div className="hidden md:flex space-x-6">
          <Link href="#" className="text-gray-700 hover:text-blue-500">Features</Link>
          <Link href="#" className="text-gray-700 hover:text-blue-500">Pricing</Link>
          <Link href="#" className="text-gray-700 hover:text-blue-500">Contact</Link>
        </div>

        <Link
          href="/login"
          className="hidden md:inline-block px-4 py-2 border rounded-full text-gray-800 border-gray-300 hover:bg-gray-100"
        >
          Log In
        </Link>

        <button className="md:hidden text-gray-800" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white shadow-md py-4">
          <div className="flex flex-col items-center space-y-4">
            <Link href="#" className="text-gray-700 hover:text-blue-500" onClick={() => setIsOpen(false)}>Features</Link>
            <Link href="#" className="text-gray-700 hover:text-blue-500" onClick={() => setIsOpen(false)}>Pricing</Link>
            <Link href="#" className="text-gray-700 hover:text-blue-500" onClick={() => setIsOpen(false)}>Contact</Link>
            <Link
              href="/login"
              className="px-4 py-2 border rounded-full text-gray-800 border-gray-300 hover:bg-gray-100"
              onClick={() => setIsOpen(false)}
            >
              Log In
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
