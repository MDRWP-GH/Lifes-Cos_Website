import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FeatureSection from "@/components/FeatureSection";
import Pagination from "@/components/Pagination";
import Link from "next/link";

export default function DiscoveryPage2() {
  return (
    <>
      <Navbar />

      <div className="relative w-full h-[500px]">
  {/* รูปภาพพื้นหลัง */}
  <img
    src="/Lifes'Cos-5332.jpg"
    alt="Background"
    className="absolute inset-0 w-full h-full object-cover opacity-40"
  />

  {/* เนื้อหาด้านบน */}
  <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
    <h1 className="text-white text-4xl md:text-5xl font-bold drop-shadow-lg">
      Discovery #2
    </h1>
    <p className="text-white text-lg mt-4 drop-shadow-md">
      A Photo Cosplay
    </p>
  </div>
      </div>

      <div className="relative w-full h-[500px]">
  {/* รูปภาพพื้นหลัง */}
  <img
    src="/Lifes'Cos-4595.JPG"
    alt="Background"
    className="absolute inset-0 w-full h-full object-cover opacity-40"
  />

  {/* เนื้อหาด้านบน */}
  <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
    <h1 className="text-white text-4xl md:text-5xl font-bold drop-shadow-lg">
      My Album
    </h1>
    <p className="text-white text-lg mt-4 drop-shadow-md">
      A Photo Cosplay
    </p>
  </div>
      </div>

      <main className="flex flex-col items-center justify-center min-h-screen px-4 py-12 bg-[#1f1f1f]"
          style={{ backgroundImage: "url('/1534541.jpg')" }}
          >
                  <FeatureSection
                                title="Frieren - Sousou no Frieren"
                                cn="Boom Bii"
                                photographer="Lifes’Cos"
                                imageUrl="/images/IMG_9855.png"
                              />
                      
                              <FeatureSection
                                title="𝗘𝘃𝗮𝗹𝗶𝗮 - 𝗔𝗹𝗴𝗼𝗿𝗵𝘆𝘁𝗵𝗺 𝗣𝗿𝗼𝗷𝗲𝗰𝘁"
                                cn="Alis ʚìɞ"
                                photographer="Lifes’Cos"
                                imageUrl="/images/406.png" // ใช้ path ของรูปใหม่
                                reversed={true} // เพื่อสลับตำแหน่งรูปกับข้อความ
                              />

<div className="mt-10 flex justify-center space-x-4">
  <Link href="/Discovery/1">
    <button className="px-6 py-2 bg-gray-500 text-white rounded-full hover:bg-gray-700 transition">
      ← Back Page
    </button>
  </Link>
  <Link href="/Discovery/3">
    <button className="px-6 py-2 bg-gray-500 text-white rounded-full hover:bg-gray-700 transition">
      Next Page →
    </button>
  </Link>
</div>

      </main>
      <Footer />
    </>
  );
}