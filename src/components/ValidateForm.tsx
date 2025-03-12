'use client';

import Link from "next/link";
import { useState } from "react";

export default function ValidateForm() {
    const [fullName, setFullName] = useState<string>("");
    const [activationNumber, setActivationNumber] = useState<string>("");

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log("Full Name:", fullName);
        console.log("Activation Number:", activationNumber);
    };

    return (
        <div className="flex min-h-screen items-center justify-center bg-gray-100 p-4">
            <div className="w-full max-w-md rounded-lg bg-white p-6 shadow-lg">
                <h2 className="mb-4 text-center text-lg font-semibold text-gray-700">
                    Please enter the confirmation details the owner provided you
                </h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-600">
                            Enter Full Name
                        </label>
                        <input
                            type="text"
                            className="mt-1 w-full rounded-lg border px-3 py-2 text-gray-700 shadow-sm focus:border-blue-500 focus:outline-none focus:ring"
                            placeholder="Your full name"
                            value={fullName}
                            onChange={(e) => setFullName(e.target.value)}
                            required
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-600">
                            Activation Number
                        </label>
                        <input
                            type="text"
                            className="mt-1 w-full rounded-lg border px-3 py-2 text-gray-700 shadow-sm focus:border-blue-500 focus:outline-none focus:ring"
                            placeholder="Activation Number"
                            value={activationNumber}
                            onChange={(e) => setActivationNumber(e.target.value)}
                            required
                        />
                    </div>
                    <button
                        className="w-full rounded-lg bg-blue-500 px-4 py-2 text-white transition hover:bg-blue-600 focus:outline-none cursor-pointer focus:ring focus:ring-blue-300"
                    >
                        <Link href="/account">Validate →</Link>
                    </button>
                </form>
            </div>
        </div>
    );
}