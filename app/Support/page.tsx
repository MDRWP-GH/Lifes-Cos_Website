import Navbar from "../../components/Navbar";
import FeatureSection from "../../components/FeatureSection";
import Footer from "../../components/Footer";
import Link from "next/link";

export default function Support() {
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
            Support
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
      <img src="/US/DAF09919.JPG" className="w-full md:w-1/2 rounded-xl shadow-lg" />
      <div className="md:w-1/2 text-white p-6">
        <h2 className="text-2xl font-bold mb-2">Markalov DoomRody</h2>
        <p className="mb-1"><strong>CN :</strong></p>
        <p className="mb-1"><strong>Photo by :</strong></p>
        <p className="text-sm text-gray-400">Image</p>

          <FeatureSection
            title="𝗘𝘃𝗮𝗹𝗶𝗮 - 𝗔𝗹𝗴𝗼𝗿𝗵𝘆𝘁𝗵𝗺 𝗣𝗿𝗼𝗷𝗲𝗰𝘁"
            cn="Alis ʚìɞ"
            photographer="Lifes’Cos"
            imageUrl="/images/406.png" // ใช้ path ของรูปใหม่
            reversed={true} // เพื่อสลับตำแหน่งรูปกับข้อความ
          />
        </div>
      </div>
      </main>
      <Footer />
    </>
  );
}
