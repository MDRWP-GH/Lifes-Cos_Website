import Image from "next/image";
import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      
      <main className="flex min-h-screen flex-col items-center justify-between p-40">
        <h1 className="text-4xl font-bold">Welcome to Life&apos;Cos</h1>
        
      </main>
    </>
  );
}
