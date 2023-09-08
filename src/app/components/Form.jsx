"use client";
import { useState } from "react";

export default function Form() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    nomorWA: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(formData);
  };
  return (
    <div className="p-5 flex flex-col gap-3 border rounded-md border-[#daa520]">
      <h1 className="text-3xl text-center">Form Pemesanan</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-3">
        <div className=" flex flex-col gap-1">
          <label htmlFor="name" className="text-md text-gray-100">
            Nama
          </label>
          <input type="text" name="name" id="name" value={formData.name} onChange={handleChange} className="py-2 px-0 w-full text-md text-white bg-black border-b-2 border-[#daa520] outline-none" required />
        </div>
        <div className=" group">
          <label htmlFor="email" className="text-md text-gray-100">
            Email
          </label>
          <input type="email" name="email" id="email" value={formData.email} onChange={handleChange} className="py-2 px-0 w-full text-md text-white bg-black border-b-2 border-[#daa520] outline-none" required />
        </div>
        <div className="group">
          <label htmlFor="nomorWA" className="text-md text-gray-100">
            Nomor WA
          </label>
          <input
            type="tel"
            name="nomorWA"
            id="nomorWA"
            value={formData.nomorWA}
            onChange={handleChange}
            pattern="[0-9]{4}-[0-9]{4}-[0-9]{4}"
            maxLength="15"
            className="py-2 px-0 w-full text-md text-white bg-black border-b-2 border-[#daa520] outline-none"
            required
          />
          <small className="text-white">Format: 1234-5678-9101</small>
        </div>

        {/* <div className="grid md:grid-cols-2 md:gap-6">
          <div className="relative z-0 w-full mb-6 group">
            <input
              type="email"
              name="floating_email"
              id="floating_email"
              className="py-2.5 px-0 w-full text-md text-white bg-transparent border-0 border-b-2 border-[#daa520] peer"
              placeholder=" "
              required
              onChange={handleChange}
            />
            <label
              for="floating_email"
              className="peer-focus:font-medium absolute text-md text-gray-100 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-gray-200 peer-focus:dark:text-gray-300 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Nomor WA
            </label>
          </div>
          <div className="relative z-0 w-full mb-6 group">
            <input
              type="email"
              name="floating_email"
              id="floating_email"
              className="py-2.5 px-0 w-full text-md text-white bg-transparent border-0 border-b-2 border-[#daa520] peer"
              placeholder=" "
              required
              onChange={handleChange}
            />
            <label
              for="floating_email"
              className="peer-focus:font-medium absolute text-md text-gray-100 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-gray-200 peer-focus:dark:text-gray-300 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Asal Instansi
            </label>
          </div>
        </div>
        <div className="grid md:grid-cols-2 md:gap-6">
          <div className="relative z-0 w-full mb-6 group">
            <input
              type="email"
              name="floating_email"
              id="floating_email"
              className="py-2.5 px-0 w-full text-md text-white bg-transparent border-0 border-b-2 border-[#daa520] peer"
              placeholder=" "
              required
              onChange={handleChange}
            />
            <label
              for="floating_email"
              className="peer-focus:font-medium absolute text-md text-gray-100 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-gray-200 peer-focus:dark:text-gray-300 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Asal Instansi
            </label>
          </div>
          <div className="relative z-0 w-full mb-6 group">
            <input
              type="email"
              name="floating_email"
              id="floating_email"
              className="py-2.5 px-0 w-full text-md text-white bg-transparent border-0 border-b-2 border-[#daa520] peer"
              placeholder=" "
              required
              onChange={handleChange}
            />
            <label
              for="floating_email"
              className="peer-focus:font-medium absolute text-md text-gray-100 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-gray-200 peer-focus:dark:text-gray-300 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Asal Instansi
            </label>
          </div>
        </div> */}

        <button type="submit" className=" text-white bg-[#daa520] hover:bg-[#ffc6unded-lg text-md w-[100px] px-5 py-2.5 text-center">
          Submit
        </button>
      </form>
    </div>
  );
}
