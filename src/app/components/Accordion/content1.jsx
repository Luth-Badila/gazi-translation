"use client";

export default function content1() {
  return (
    <div className="flex flex-col gap-3">
      <div className="flex lg:flex-row flex-col gap-5">
        <div>
          <h1 className="font-bold text-md">Abstrak max(250 kata)</h1>
          <p>Instan 24 jam - 40.000</p>
        </div>
        <div>
          <h1 className="font-bold text-md">Artikel Kuliah (dari skripsi)</h1>
          <p>Instan 24 jam - 45.000</p>
          <p>Reguler 3 hari - 40.000</p>
          <p>Standart 7 hari - 35.000</p>
        </div>
        <div>
          <h1 className="font-bold text-md">Jurnal Lokal</h1>
          <p>Instan 24 jam - 55.000 (standar dosen)</p>
          <p>Reguler 3 hari - 45.000</p>
        </div>
        <div>
          <h1 className="font-bold text-md">Jurnal Internasional</h1>
          <p>Instan (24 jam) - 65.000</p>
          <p>Reguler 3 hari - 55.000</p>
        </div>
        <div>
          <h1 className="font-bold text-md">Proofread </h1>
          <p>Reguler 3 hari - 30.000/lembar</p>
        </div>
      </div>
      <div className="text-md">
        <h1>Format penulisan: A4. Margin Normal. Font size 12. Max 500 kata per halaman.</h1>
        <h1>NB: Semua Harga Bisa Berubah tergantung Tingkat Kesulitan.</h1>
      </div>
    </div>
  );
}
