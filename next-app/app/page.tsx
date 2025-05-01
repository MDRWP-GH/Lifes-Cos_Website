import Image from "next/image";
import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="flex items-center justify-between p-4 bg-gray-800 text-white mt-16">
        <Image
          src="/Lifes%E2%80%99s Cos White.png"
          alt="Logo"
          width={50}
          height={50}
          className="rounded-full"
        />
        <h1 className="text-2xl font-bold">Life&apos;Cos</h1>
      </div>
      
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <h1 className="text-4xl font-bold">Welcome to Life&apos;Cos</h1>
      </main>
    </>
  );
}
