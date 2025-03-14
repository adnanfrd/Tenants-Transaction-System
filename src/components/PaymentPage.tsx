"use client";
import Link from "next/link";
import React, { useState } from "react";

const PaymentPage: React.FC = () => {
  const [paymentAmount, setPaymentAmount] = useState("");

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 pt-[12vh] relative">
     <div>
       <Link href="/account">
        <button className="  px-4 py-2 bg-gray-400 text-white rounded cursor-pointer hover:bg-gray-600 transition-all">&larr; Back to home</button>
      </Link>
      <h2 className="text-gray-900 font-semibold text-lg mb-4">Payment Method &mdash; <span className="text-gray-600">August 21, 2023</span></h2>
     </div>
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-sm">
        <h3 className="bg-blue-500 text-white text-center py-2 rounded-md font-semibold">Payment Summary</h3>
        <div className="mt-4 text-gray-700 space-y-2">
          <p className="flex justify-between"><span>Amount Due:</span> <span className="text-green-600">$1,500.00</span></p>
          <p className="flex justify-between items-center">
            <span>Confirm Payment:</span>
            <input 
              type="text" 
              value={paymentAmount} 
              onChange={(e) => setPaymentAmount(e.target.value)} 
              className="ml-2 px-2 py-1 border rounded w-24 text-right" 
              placeholder="$0.00"
            />
          </p>
          <p className="flex justify-between"><span>Payment Date:</span> <span className="text-green-600">2/23/24</span></p>
          <p className="flex justify-between"><span>Payment Method:</span> <span className="text-green-600">CashApp</span></p>
        </div>
        <button className="mt-4 w-full py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-all">Pay &rarr;</button>
      </div>
    </div>
  );
};

export default PaymentPage;
