"use client";
import Link from "next/link";
import React from "react";
import { Icon } from "@iconify/react";

export default function Card({ image, name, instagramUrl, title, icon }) {
  return (
    <>
      <div className="group">
        <div className="relative grid w-full lg:h-[20vh] h-[25vh] flex-col items-end justify-center overflow-hidden rounded-xl bg-white">
          <div className="absolute inset-0 m-0 h-full full overflow-hidden rounded-none  shadow-none">
            <div className="flex flex-col justify-center items-center lg:mt-0 mt-[30px]">
              <Icon icon={icon} width="120" height="80" />
            </div>
            <div className="to-bg-black-10 absolute group-hover:top-0 transition-all duration-300 top-full h-full w-full bg-gradient-to-t from-black/80 via-black/50"></div>
          </div>
          <div className="relative top-full group-hover:top-0 transition-all duration-300 ">
            <h2 className="mb-6 block font-sans text-xl font-medium leading-[1.5] antialiased">{title}</h2>
          </div>
        </div>
      </div>
    </>
  );
}
