"use client";
import React, { useState } from "react";
import { ArrowLeft, Search, MoreVertical, Send, Paperclip } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const ChatPage: React.FC = () => {
  const [messages, setMessages] = useState([
    { id: 1, text: "Lorem ipsum dolor sit.", type: "received" },
    { id: 2, text: "Lorem ipsum dolor sit amet.", type: "sent" },
    { id: 3, text: "Lorem ipsum dolor sit.", type: "received" },
    { id: 4, text: "Lorem ipsum dolor sit amet.", type: "sent" },
  ]);
  const [newMessage, setNewMessage] = useState("");

  const handleSendMessage = () => {
    if (newMessage.trim() !== "") {
      setMessages([...messages, { id: messages.length + 1, text: newMessage, type: "sent" }]);
      setNewMessage("");
    }
  };

  return (
    <div className="flex flex-col md:flex-row h-screen bg-gray-100 pt-[12vh]">
      <div className="w-full md:w-1/3 p-4 bg-white border-r">
        <Link href="/account" className="flex items-center text-gray-600 mb-4">
          <ArrowLeft className="mr-2" /> Back
        </Link>
        <div className="p-3 bg-gray-200 rounded-lg">
          <h3 className="font-semibold text-blue-500">Trent Apartments</h3>
          <p className="text-gray-700">Trent Carie: <span className="text-gray-500">Cool!</span></p>
        </div>
      </div>
      
      <div className="w-full md:w-2/3 flex flex-col">
        <div className="flex items-center justify-between p-4 bg-white border-b">
          <div className="flex items-center space-x-2">
            <Image src="/homehero.png" alt="User" width={32} height={32} className="rounded-full" />
            <span className="font-semibold">Trent Carie</span>
          </div>
          <div className="flex space-x-2">
            <Search className="text-gray-500 cursor-pointer" />
            <MoreVertical className="text-gray-500 cursor-pointer" />
          </div>
        </div>

        <div className="flex-1 p-4 overflow-y-auto space-y-3">
          {messages.map((msg) => (
            <div
              key={msg.id}
              className={`max-w-xs px-4 py-2 rounded-lg text-sm ${
                msg.type === "received"
                  ? "bg-blue-200 text-blue-800 self-start"
                  : "bg-blue-500 text-white self-end"
              }`}
            >
              {msg.text}
            </div>
          ))}
        </div>

        <div className="p-4 bg-white border-t flex items-center">
          <Paperclip className="text-gray-500 cursor-pointer" />
          <input
            type="text"
            placeholder="Write a message..."
            className="flex-1 mx-2 px-4 py-2 border rounded-lg"
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
          />
          <button onClick={handleSendMessage} className="bg-blue-500 text-white p-2 rounded-lg">
            <Send />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChatPage;