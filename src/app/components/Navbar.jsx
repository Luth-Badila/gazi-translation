import Image from "next/image";
import Logo from "../../../public/logo.png";

export default function Navbar() {
  return (
    <nav className="flex p-2 items-center gap-2 container bg-transparent">
      <Image src={Logo} alt="Logo" width={100} />
    </nav>
  );
}
