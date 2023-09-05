"use client";

import React from "react";
import { Icon } from "@iconify/react";

export default function Card({ title, icon, caption }) {
  return (
    <>
      <div className="group">
        <div className="grid w-full h-[55vh] flex-col items-center justify-center rounded-xl px-2 border-white border shadow-lg">
          <div className="flex flex-col gap-4 justify-center items-center">
            <Icon icon={icon} width="120" height="80" color="#DAA520" />
            <h2 className="mb-6 block font-sans text-xl font-medium leading-[1.5] antialiased">{title}</h2>
            <p className="text-center">{caption}</p>
          </div>
        </div>
      </div>
    </>
  );
}
