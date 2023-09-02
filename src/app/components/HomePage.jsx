import Link from "next/link";
export default function HomePage() {
  return (
    <div id="home" className="flex flex-col lg:h-[70vh] h-[50vh] justify-center items-center text-[#DAA520]">
      <h1 className="lg:text-[8rem] text-[3rem] text-center">Gazi Translation</h1>
      <p className="capitalize lg:text-[2rem] text-[1rem] text-center">
        solusi bagi anda yang membutuhkan
        <br /> translation, proofread dan editing
      </p>
      <button className="mt-3 rounded-lg text-xl bg-white text-[#DAA520] p-4">
        <Link href="">Hubungi Kami</Link>
      </button>
    </div>
  );
}
