"use client";
import React, { useState } from "react";
import { ArrowLeft, Search, Upload, Send } from "lucide-react";
import Image from "next/image";

const ChatPage: React.FC = () => {
  const [messages, setMessages] = useState([
    { id: 1, text: "Hi there!", type: "received" },
    { id: 2, text: "Hello! How can I help you?", type: "sent" },
    { id: 3, text: "I need some information.", type: "received" },
    { id: 4, text: "Sure! What do you need?", type: "sent" },
  ]);
  const [newMessage, setNewMessage] = useState("");

  const handleSendMessage = () => {
    if (newMessage.trim() !== "") {
      setMessages([...messages, { id: messages.length + 1, text: newMessage, type: "sent" }]);
      setNewMessage("");
    }
  };

  return (
    <div className="flex flex-col h-screen bg-gray-100 relative top-15">
      {/* Header */}
      <div className="fixed top-0 left-0 w-full flex items-center justify-between p-4 bg-white border-b shadow-md z-10">
        <button>
          <ArrowLeft className="text-gray-500" />
        </button>
        <h2 className="font-bold">Chat — August 21, 2023</h2>
        <button>
          <Search className="text-gray-500" />
        </button>
      </div>

      {/* Chat Messages */}
      <div className="flex-1 overflow-y-auto pt-16 p-4 space-y-3">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`max-w-xs px-4 py-2 rounded-lg ${
              message.type === "received"
                ? "bg-gray-300 text-black self-start"
                : "bg-blue-500 text-white self-end"
            }`}
          >
            {message.text}
          </div>
        ))}
      </div>

      {/* Message Input */}
      <div className="absolute bottom-0 left-0 w-full flex items-center p-4 bg-white border-t shadow-md">
        <input
          type="text"
          placeholder="Write a message..."
          className="flex-1 px-4 py-2 border rounded-lg"
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
        />
        <label htmlFor="file-upload" className="ml-2 p-2 cursor-pointer bg-gray-200 rounded-lg">
          <Upload className="text-gray-500" />
        </label>
        <input id="file-upload" type="file" className="hidden" />
        <button
          className="ml-2 p-2 bg-blue-500 text-white rounded-lg"
          onClick={handleSendMessage}
        >
          <Send />
        </button>
      </div>
    </div>
  );
};

export default ChatPage;