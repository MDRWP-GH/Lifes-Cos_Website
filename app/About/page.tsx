import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Link from "next/link";

export default function AboutUs() {
  return (
    <>
      <Navbar />

      <div className="relative w-full h-[500px]">
        {/* รูปภาพพื้นหลัง */}
        <img
          src="/US/DSC_2868.jpg"
          alt="Background"
          className="absolute inset-0 w-full h-full object-cover opacity-40"
        />

        {/* เนื้อหาด้านบน */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
          <h1 className="text-white text-4xl md:text-5xl font-bold drop-shadow-lg">
            Lifes&apos;Cos
          </h1>
          <p className="text-white text-lg mt-4 drop-shadow-md">
            Lifes To Take A Photo Cosplay
          </p>
          <Link href="/">
            <button className="mt-6 px-6 py-3 bg-white text-black font-semibold rounded-full shadow hover:bg-gray-200 transition">
              Home →
            </button>
          </Link>
        </div>
      </div>

      <div className="relative w-full h-[500px]">
        {/* รูปภาพพื้นหลัง */}
        <img
          src="/US/9d4d84a9-3cb1-4923-ad71-62f62ab23dea.jpg"
          alt="Background"
          className="absolute inset-0 w-full h-full object-cover opacity-40"
        />

        {/* เนื้อหาด้านบน */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
          <h1 className="text-white text-4xl md:text-5xl font-bold drop-shadow-lg">
            Lifes&apos;Cos
          </h1>
          <p className="text-white text-lg mt-4 drop-shadow-md">
            Lifes To Take A Photo Cosplay
          </p>
          <Link href="/">
            <button className="mt-6 px-6 py-3 bg-white text-black font-semibold rounded-full shadow hover:bg-gray-200 transition">
              Home →
            </button>
          </Link>
        </div>
      </div>

      <main
        className="flex flex-col items-center justify-center min-h-screen px-4 py-12 bg-[#1f1f1f]"
        style={{ backgroundImage: "url('/1534541.jpg')" }}
      >
        <div className={`flex flex-col md:flex-row items-center my-12`}>
          <div className="md:w-1/2 text-white p-6">
            <div className="w-full md:w-1/2 text-white text-center md:text-left">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Test</h2>
              <p className="text-lg mb-1">Test :</p>
              <p className="text-lg mb-1">Test :</p>
              <p className="text-sm text-gray-400 mb-6">
                Image © By Lifes’Cos All rights reserved
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
