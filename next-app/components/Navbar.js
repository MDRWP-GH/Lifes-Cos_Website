"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Link from "/your-path-to-uicons/css/uicons-rounded-solid.css";

export default function Navbar() {
  const [visible, setVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (typeof window === "undefined") return;

      const currentScrollY = window.scrollY;

      if (currentScrollY < lastScrollY || currentScrollY <= 50) {
        setVisible(true); // Scroll up or near top
      } else {
        setVisible(false); // Scroll down
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <nav
      className={`fixed top-0 left-0 w-full bg-black shadow-md transition-transform duration-300 z-50 ${
        visible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      
      <div className="max-w-6xl mx-auto p-6 flex justify-between items-center">
        <Link href="/" className="flex items-center space-x-2">
          <Image src="/Lifes’s Cos White.png" alt="Life'Cos Logo" width={175} height={175}/>
        </Link>

        <div className="hidden md:flex space-x-4">
          <Link href="#about" className="text-white">About</Link>
          <Link href="/signin" className="text-white">
            <image src="/uicons/rounded-solid/user.svg" alt="User Icon" width={24} height={24} className="inline-block mr-1" />
          </Link>

        </div>
      </div>
    </nav>
  );
}
