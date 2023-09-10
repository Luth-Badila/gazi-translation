"use client";
import React, { useState } from "react";

import { supabase } from "../config/supabase";

export default function Create() {
  const [nama, setNama] = useState("");
  const [email, setEmail] = useState("");
  const [formError, setFormError] = useState(null);
  const [success, setSuccess] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!nama || !email) {
      setFormError("Please fill in all the field correctly");
      return;
    }

    const { data } = await supabase.from("form").insert([{ nama, email }]);

    if (!data == !nama || !email) {
      setFormError("Isien lur");
      setSuccess(null);
      return;
    } else {
      setFormError(null);
      setSuccess("Berhasil dikirim!!!");
      setNama("");
      setEmail("");
      // router.push("/");
    }
  };

  return (
    <div className="p-5 flex flex-col gap-3 border rounded-md border-[#daa520]">
      <form onSubmit={handleSubmit} className="bg-transparentp-[20px] my-0 mx-auto w-[700px] rounded-md flex flex-col gap-3">
        <label htmlFor="nama">nama:</label>
        <input type="text" id="nama" value={nama} onChange={(e) => setNama(e.target.value)} className="py-2 px-0 w-full text-md text-white bg-black border-b-2 border-[#daa520] outline-none" required />

        <label htmlFor="email">email:</label>
        <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} className="py-2 px-0 w-full text-md text-white bg-black border-b-2 border-[#daa520] outline-none" required />

        <button className="bg-[#daa520] ml-[260px] text-white border-0 py-[6px] px-[4px] rounded-lg cursor-pointer w-[130px]">Create Newpost</button>

        {formError && <p className="text-[#FF0000]">{formError}</p>}
        {success && <p className="text-green-500">{success}</p>}
      </form>
    </div>
  );
}
