'use client';

import Link from 'next/link';
import React from 'react';

const AccountDetails: React.FC = () => {
    return (
        <div className="flex min-h-screen items-center justify-center bg-gray-100 p-4 mt-10 pt-10">
            <div className="w-full max-w-4xl space-y-4">
                <div className="flex items-center justify-between text-lg font-semibold text-gray-800">
                    <span>Lift Apartments ___<span className="text-gray-600">August 21, 2023</span></span>
                    
                    <div className="flex items-center space-x-4">
                        
                        <button className="rounded-full border px-4 py-2 text-sm text-gray-700 shadow-md transition hover:bg-gray-200">Chat</button>
                    </div>
                </div>

                <div className="rounded-lg bg-white p-6 shadow-lg">
                    <h2 className="mb-2 w-fit rounded-lg bg-blue-500 px-3 py-1 text-sm text-white">Account Details</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-700">
                        <div>
                            <p><strong>Name:</strong> Trent Carie</p>
                            <p><strong>Account Number:</strong> fvb5214</p>
                            <p><strong>Apt #:</strong> 20</p>
                        </div>
                        <div>
                            <p><strong>Status:</strong> <span className="text-green-600">Active Tenant</span></p>
                            <p><strong>Monthly Amount:</strong> <span className="text-green-600">$800.00</span></p>
                        </div>
                    </div>
                    <button className="mt-4 w-full rounded-lg bg-blue-500 px-4 py-2 text-white transition cursor-pointer hover:bg-blue-600"><Link href="/lease">View Lease →</Link></button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="rounded-lg bg-white p-6 shadow-md">
                        <h3 className="mb-2 w-fit rounded-lg bg-blue-400 px-3 py-1 text-sm text-white">Last Payment</h3>
                        <p><strong>Due:</strong> $1,500.00</p>
                        <p><strong>Due Date:</strong> 2/23/24</p>
                        <p><strong>Bill Cycle:</strong> 1/22 - 2/22</p>
                        <p><strong>Status:</strong> <span className="text-green-600">Paid</span></p>
                    </div>
                    <div className="rounded-lg bg-white p-6 shadow-md">
                        <h3 className="mb-2 w-fit rounded-lg bg-blue-400 px-3 py-1 text-sm text-white">Account Summary</h3>
                        <p><strong>Due:</strong> $1,500.00</p>
                        <p><strong>Due Date:</strong> 2/23/24</p>
                        <p><strong>Bill Cycle:</strong> 1/22 - 2/22</p>
                        <p><strong>Next Payment:</strong> 2/24/24</p>
                        <button className="mt-4 w-full rounded-lg bg-blue-500 px-4 py-2 text-white transition hover:bg-blue-600">Make a payment →</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AccountDetails;