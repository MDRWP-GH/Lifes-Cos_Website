"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  const [visible, setVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (typeof window === "undefined") return;

      const currentScrollY = window.scrollY;

      if (currentScrollY < lastScrollY || currentScrollY <= 50) {
        setVisible(true);
      } else {
        setVisible(false);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <nav
      className={`fixed top-0 left-0 w-full bg-[#171717] shadow-md transition-transform duration-300 z-50 ${
        visible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      {/* แถวบน */}
      <div className="max-w-6xl mx-auto px-6 py-4 flex flex-wrap md:flex-nowrap items-center justify-between gap-4">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2 shrink-0">
          <Image
            src="/Lifes’s Cos White.png"
            alt="Life'Cos Logo"
            width={175}
            height={175}
          />
        </Link>

        {/* Search Bar */}
        <div className="relative w-full max-w-md flex-grow">
          <input
            type="text"
            placeholder="Search"
            className="w-full pl-10 pr-4 py-2 border border-gray-600 rounded-full bg-transparent text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white"
          />
          <svg
            className="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 103.5 3.5a7.5 7.5 0 0013.15 13.15z"
            />
          </svg>
        </div>

        {/* Icons */}
        <div className="flex space-x-4 shrink-0">
          <Link href="/cart" className="text-white">
            <Image
              src="/bags-shopping.png"
              alt="Cart Icon"
              width={25}
              height={25}
              className="inline-block mr-1 dark:invert"
            />
          </Link>
          <Link href="/signin" className="text-white">
            <Image
              src="/user.png"
              alt="User Icon"
              width={25}
              height={25}
              className="inline-block mr-1 dark:invert"
            />
          </Link>
        </div>
      </div>

      {/* แถวล่าง: เมนูหลัก */}
      <div className="max-w-6xl mx-auto px-6 pb-4">
        <ul className="flex justify-left space-x-10 text-white text-lg md:text-base font-bold">
          <li><Link href="/product">Product</Link></li>
          <li><Link href="/about">About us</Link></li>
          <li><Link href="/support">Support</Link></li>
        </ul>
      </div>
    </nav>
  );
}
