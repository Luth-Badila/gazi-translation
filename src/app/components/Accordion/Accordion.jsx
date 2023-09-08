"use client";
// components/Accordion.js

import { useState } from "react";

export default function Accordion({ title, content }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="border border-gray-300 rounded mb-4">
      <div className="flex items-center justify-between px-4 py-2 cursor-pointer" onClick={toggleAccordion}>
        <h2 className="text-lg font-semibold">{title}</h2>
        <span className={`transform ${isOpen ? "rotate-90" : "rotate-0"} transition-transform`}>&#x25B6;</span>
      </div>
      {isOpen && (
        <div className="p-4 border-t border-gray-300">
          <p>{content}</p>
        </div>
      )}
    </div>
  );
}
