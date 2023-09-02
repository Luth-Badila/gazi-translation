"use client";

import React from "react";
import { Icon } from "@iconify/react";

export default function Card({ caption, title, icon }) {
  return (
    <>
      <div className="group">
        <div className="relative grid w-full lg:h-[20vh] h-[25vh] flex-col items-start justify-start overflow-hidden rounded-xl bg-white px-2">
          <div className="absolute inset-0 m-0 h-full full overflow-hidden rounded-none  shadow-none">
            <div className="flex flex-col justify-center items-center lg:mt-0 mt-[30px]">
              <Icon icon={icon} width="120" height="80" color="#DAA520" />
              <h2 className="mb-6 block font-sans text-xl font-medium leading-[1.5] antialiased">{title}</h2>
            </div>
            <div className="to-bg-black-10 absolute group-hover:top-0 transition-all duration-300 top-full h-full w-full bg-gradient-to-b from-[#F1F9FCFF] via-[#F0F8FBFF]"></div>
          </div>
          <div className="relative top-full group-hover:top-0 transition-all duration-300 ">
            <p className="text-md block font-sans font-medium leading-[1.5] antialiased">{caption}</p>
          </div>
        </div>
      </div>
    </>
  );
}
