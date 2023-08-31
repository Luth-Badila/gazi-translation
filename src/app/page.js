import Logo from "../../public/logo.png";
import Image from "next/image";
export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="h-screen bg-hero">
        <nav className="container flex justify-between">
          <Image src={Logo} alt="Logo" width={200} />
          <div className="flex py-10 gap-4 text-xl text-[#DAA520]">
            <p>Home</p>
            <p>About</p>
            <p>Contact</p>
          </div>
        </nav>
        <div className="mx-auto text-center container text-[#DAA520]">
          <h1 className="text-[8rem]">Gazi Translation</h1>
          <p className="capitalize text-[2rem]">
            solusi bagi anda yang membutuhkan
            <br /> translation, proofread dan editing
          </p>
        </div>
      </section>
    </>
  );
}
