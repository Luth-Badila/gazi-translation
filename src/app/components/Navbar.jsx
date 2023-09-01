import Image from "next/image";
import Logo from "../../../public/logo.png";

export default function Navbar() {
  return (
    <nav className="container flex justify-between">
      <Image src={Logo} alt="Logo" width={200} />
      <div className="flex py-10 gap-4 text-xl text-[#DAA520]">
        <p>Home</p>
        <p>About</p>
        <p>Contact</p>
      </div>
    </nav>
  );
}
