import "./globals.css";
import Navbar from "./components/Navbar";
import { Jost } from "next/font/google";

const jost = Jost({ subsets: ["latin"] });

export const metadata = {
  title: "Gazi Translation",
  description: "Gazi translation landing page",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={jost.className}>{children}</body>
    </html>
  );
}
