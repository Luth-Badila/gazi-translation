import Link from "next/link";
import React from "react";
import { AiOutlineScissor } from "react-icons/ai";

export default function Card({ image, name, instagramUrl, title }) {
  return (
    <>
      <div className="group">
        <div className="relative grid w-full h-[100vw] sm:h-96 md:h-[40vw] flex-col items-end justify-center overflow-hidden rounded-xl bg-white bg-clip-border text-center">
          <div className="absolute inset-0 m-0 h-full  w-full overflow-hidden rounded-none bg-transparent  bg-cover bg-clip-border bg-center  shadow-none">
            <p>{title}</p>
            <div className="to-bg-black-10 absolute group-hover:top-0 transition-all duration-300 top-full h-full w-full bg-gradient-to-t from-black/80 via-black/50"></div>
          </div>
          <div className="relative p-6 py-14 px-6 md:px-12 top-full group-hover:top-0 transition-all duration-300 ">
            <h2 className="mb-6 block font-sans text-4xl font-medium leading-[1.5]   antialiased">{name}</h2>

            <Link href={instagramUrl} className="inline-block h-16 w-full rounded-full overflow-hidden bg-gradient-to-r from-blue-500 via-purple-500 to-red-500">
              <div className="w-full h-full flex justify-around  items-center ">
                <h1 className="text-2xl text-white mr-5">@{name}</h1>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
