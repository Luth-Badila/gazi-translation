"use client";
import { useState } from "react";

const TabMenu = ({ tabs }) => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  return (
    <div className="w-full">
      <div className="flex border-b border-gray-300">
        {tabs.map((tab, index) => (
          <button key={index} onClick={() => handleTabClick(index)} className={`px-4 py-2 ${activeTab === index ? "bg-blue-500 text-white" : "text-gray-500 hover:bg-gray-100"}`}>
            {tab.label}
          </button>
        ))}
      </div>
      <div className="mt-4">{tabs[activeTab].content}</div>
    </div>
  );
};

export default TabMenu;
