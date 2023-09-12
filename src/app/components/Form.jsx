"use client";
import React, { useState } from "react";
import { supabase } from "../config/supabase";

export default function Form() {
  const [name, setNama] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [institution, setInstitution] = useState("");
  const [information, setInformation] = useState("");
  const [service, setService] = useState("");
  const [terms, setTerms] = useState("");
  const [formError, setFormError] = useState(null);
  const [success, setSuccess] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name || !email || !phone || !institution || !service || !information) {
      setFormError("Please fill in all the field correctly");
      return;
    }

    const { data } = await supabase.from("form").insert([{ name, email, phone, institution, information, service }]);

    if (!data == !name || !email || !phone || !institution || !service || !information) {
      setFormError("Isien lur");
      setSuccess(null);
      return;
    } else {
      setFormError(null);
      setNama("");
      setEmail("");
      setPhone("");
      setInstitution("");
      setInformation("");
      setService("");
      setSuccess("Berhasil dikirim!!!");
    }
  };

  return (
    <div className="p-5 border border-[#daa520]">
      <form onSubmit={handleSubmit} className="bg-transparent text-white p-[20px] my-0 mx-auto rounded-md flex flex-col gap-3">
        <label htmlFor="nama">Nama:</label>
        <input type="text" id="nama" value={name} onChange={(e) => setNama(e.target.value)} className="py-2 px-0 w-full text-md text-white bg-black border-b-2 border-[#daa520] outline-none" required />

        <label htmlFor="email">Email:</label>
        <input type="text" id="email" value={email} onChange={(e) => setEmail(e.target.value)} className="py-2 px-0 w-full text-md text-white bg-black border-b-2 border-[#daa520] outline-none" required />

        <label htmlFor="phone">Nomor WA:</label>
        <input
          type="tel"
          id="phone"
          name="phone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          pattern="[0-9]{4}-[0-9]{4}-[0-9]{4}"
          className="py-2 px-0 w-full text-md text-white bg-black border-b-2 border-[#daa520] outline-none"
          required
        ></input>
        <p>Format: 1234-5678-9999</p>

        <label htmlFor="institution">Asal institusi:</label>
        <input type="text" id="institution" value={institution} onChange={(e) => setInstitution(e.target.value)} className="py-2 px-0 w-full text-md text-white bg-black border-b-2 border-[#daa520] outline-none" required />

        <label htmlFor="information">Dapat informasi Gazi dari mana ?:</label>
        <input type="text" id="information" value={information} onChange={(e) => setInformation(e.target.value)} className="py-2 px-0 w-full text-md text-white bg-black border-b-2 border-[#daa520] outline-none" required />

        <label htmlFor="service">Pilihan Jasa:</label>
        <input type="text" id="service" value={service} onChange={(e) => setService(e.target.value)} className="py-2 px-0 w-full text-md text-white bg-black border-b-2 border-[#daa520] outline-none" required />

        <button className="bg-[#daa520] text-white border-0 py-[6px] px-[4px] rounded-lg cursor-pointer w-[130px]">Kirim</button>

        {formError && <p className="text-[#ff0000]">{formError}</p>}
        {success && <p className="text-green-500">{success}</p>}
      </form>
    </div>
  );
}
