"use client";
import React, { useState } from "react";
import { ArrowLeft, Search, Upload, Send, MoreVertical } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const ChatPage: React.FC = () => {
  const [messages, setMessages] = useState([
    { id: 1, text: "Hey! How's it going?", type: "received" },
    { id: 2, text: "I’m good! How about you?", type: "sent" },
    { id: 3, text: "Doing well, thanks for asking!", type: "received" },
  ]);
  const [newMessage, setNewMessage] = useState("");

  const handleSendMessage = () => {
    if (newMessage.trim() !== "") {
      setMessages([...messages, { id: messages.length + 1, text: newMessage, type: "sent" }]);
      setNewMessage("");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      {/* Navbar */}
      <div className="fixed top-0 left-0 w-full bg-white shadow-md flex items-center p-4 z-10">
        <Link href="/account" className="flex items-center text-gray-600 hover:text-gray-900">
          <ArrowLeft className="mr-2" /> Back
        </Link>
        <h2 className="text-lg font-semibold mx-auto">Chat &mdash; August 21, 2023</h2>
      </div>

      {/* Chat Container */}
      <div className="flex flex-1 pt-16 px-4">
        {/* Chat List */}
        <div className="hidden md:block w-1/4 bg-white rounded-lg shadow p-4">
          <div className="p-2 bg-gray-100 rounded-lg flex items-center justify-between">
            <span className="text-sm font-semibold text-blue-600">Trent Apartments</span>
          </div>
          <div className="mt-2 flex justify-between text-sm text-gray-700">
            <span>Trent Carie:</span>
            <span className="text-gray-500">Cool!</span>
          </div>
        </div>

        {/* Chat Window */}
        <div className="flex flex-col w-full md:w-3/4 bg-white rounded-lg shadow p-4">
          {/* Chat Header */}
          <div className="flex items-center justify-between p-2 border-b">
            <div className="flex items-center space-x-2">
              <Image src="/profile.jpg" alt="User" width={32} height={32} className="rounded-full" />
              <span className="font-semibold">Trent Carie</span>
            </div>
            <div className="flex items-center space-x-3">
              <Search className="text-gray-500" />
              <MoreVertical className="text-gray-500" />
            </div>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-2">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`max-w-xs p-2 rounded-lg text-sm ${
                  message.type === "received" ? "bg-gray-300 text-gray-900 self-start" : "bg-blue-500 text-white self-end"
                }`}
              >
                {message.text}
              </div>
            ))}
          </div>

          {/* Message Input */}
          <div className="flex items-center p-2 bg-blue-100 rounded-lg">
            <label htmlFor="file-upload" className="p-2 cursor-pointer">
              <Upload className="text-gray-500" />
            </label>
            <input id="file-upload" type="file" className="hidden" />
            <input
              type="text"
              placeholder="Write a message..."
              className="flex-1 px-4 py-2 bg-transparent focus:outline-none"
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
            />
            <button onClick={handleSendMessage} className="p-2 bg-blue-500 rounded-lg text-white">
              <Send />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatPage;