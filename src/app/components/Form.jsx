"use client";

function Form() {
  return (
    <div className="p-3">
      <form className="flex flex-col gap-4">
        <label>Nama</label>
        <input type="text" placeholder="nama" className="text-black p-3" />
        <label>Email</label>
        <input type="email" placeholder="email" className="text-black p-3" />
        <label>No WA</label>
        <input type="telp" placeholder="Nomor WA" className="text-black p-3" />
        <label>Asal Institusi</label>
        <input type="text" placeholder="Asal Intitusi" className="text-black p-3" />
        <label>Dapat info Gazi dari mana ?</label>
        <input type="text" placeholder="Dapat info Gazi dari mana ?" className="text-black p-3" />
        <label>Pilihan Jasa :</label>
        <select name="pilihanJasa" id="pilihanJasa" className="text-black p-3">
          <option value="abstrak">Abstrak (max 250kata) Instan 40.000</option>
          <option value="saab">Artikel kuliah dari skripsi instan(24jam) 45.000</option>
          <option value="jurnalLokal">Jurnal Lokal Instan 24jam 55.000(std dosen)</option>
          <option value="audi">Audi</option>
        </select>
      </form>
    </div>
  );
}

export default Form;
