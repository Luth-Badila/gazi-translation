import Image from "next/image";
import Link from "next/link";
import Logo from "../../../public/logo3.png";

export default function Navbar() {
  return (
    <nav className="flex p-7 justify-between">
      <Image src={Logo} alt="Logo" className="w-[80px] h-[50px]" />
      <div className="flex gap-4 text-xl text-[#DAA520]">
        <Link href="#home">
          <p>Home</p>
        </Link>
        <Link href="#about">
          <p>About</p>
        </Link>
        <p>Contact</p>
      </div>
    </nav>
  );
}
