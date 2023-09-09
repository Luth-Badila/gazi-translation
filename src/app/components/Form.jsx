"use client";
import React, { useState } from "react";

import { supabase } from "../config/supabase";

export default function Create() {
  const [nama, setNama] = useState("");
  const [email, setEmail] = useState("");
  const [formError, setFormError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!nama || !email) {
      setFormError("Please fill in all the field correctly");
      return;
    }

    const { data } = await supabase.from("form").insert([{ nama, email }]);

    if (!data == !nama || !email) {
      setFormError("Isien lur");
      return;
    } else {
      setFormError(null);
      setNama("");
      setEmail("");
      // router.push("/");
    }
  };

  return (
    <div className="mt-[60px] flex justify-center items-center h-screen lg:mx-0 mx-5 text-black">
      <form onSubmit={handleSubmit} className="bg-white p-[20px] my-0 mx-auto w-[700px] rounded-md flex flex-col gap-3">
        <label htmlFor="nama">nama:</label>
        <input type="text" id="nama" value={nama} onChange={(e) => setNama(e.target.value)} className="block w-[100%] border-solid border-grey p-[6px]" />

        <label htmlFor="email">email:</label>
        <textarea type="text" id="email" value={email} onChange={(e) => setEmail(e.target.value)} className="block w-[100%] border-solid border-grey p-[6px]" />

        <button className="bg-black ml-[260px] text-white border-0 py-[6px] px-[4px] rounded-lg cursor-pointer w-[130px]">Create Newpost</button>

        {formError && <p className="text-black">{formError}</p>}
      </form>
    </div>
  );
}
