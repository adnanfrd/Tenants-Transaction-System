"use client";
import Image from "next/image";
import Link from "next/link";
const HomeHero = () => {
  return (
    <section className="flex flex-col items-center justify-center min-h-screen h-screen bg-gray-100 px-4 text-center">
      <h1 className="text-xl md:text-2xl font-semibold text-gray-800">TentLoom</h1>
      <div className="relative w-32 h-32 md:w-48 md:h-48 my-6">
        <Image 
          src={"/homehero.png"} 
          alt="TentLoom Logo" 
          layout="fill" 
          objectFit="contain"
        />
      </div>

      <p className="text-gray-600 text-sm md:text-base">
        Seamless Living, Simplified Payments
      </p>

      <button className="mt-6 px-6 py-3 bg-blue-500 text-white rounded-full text-sm md:text-base shadow-md transition hover:bg-blue-600 cursor-pointer">
       <Link href= "/signup">
       Get started →
       </Link>
      </button>
    </section>
  );
};

export default HomeHero;
