import Navbar from "../components/Navbar";
import ImageSlider from "../components/ImageSlider";
import FeatureSection from "../components/FeatureSection";
import Footer from "../components/Footer";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Navbar />
      <ImageSlider />

      <div className="relative w-full h-[500px]">
        {/* รูปภาพพื้นหลัง */}
        <img
          src="/Lifes'Cos-8953.JPG"
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
          <Link href="/Discovery/1">
            <button className="mt-6 px-6 py-3 bg-white text-black font-semibold rounded-full shadow hover:bg-gray-200 transition">
              Discovery →
            </button>
          </Link>
        </div>
      </div>

      <main
        className="flex flex-col items-center justify-center min-h-screen px-4 py-12 bg-[#1f1f1f]"
        style={{ backgroundImage: "url('/1534541.jpg')" }}
      >
        <FeatureSection
          title="Frieren - Sousou no Frieren"
          cn="Boom Bii"
          photographer="Lifes’Cos"
          imageUrl="/IMG_9855.png"
          link="/details/frieren"
        />

        <FeatureSection
          title="𝗘𝘃𝗮𝗹𝗶𝗮 - 𝗔𝗹𝗴𝗼𝗿𝗵𝘆𝘁𝗵𝗺 𝗣𝗿𝗼𝗷𝗲𝗰𝘁"
          cn="Alis ʚìɞ"
          photographer="Lifes’Cos"
          imageUrl="/406.png" // ใช้ path ของรูปใหม่
          link="/Discovery/1"
          reversed={true} // เพื่อสลับตำแหน่งรูปกับข้อความ
        />
      </main>
      <Footer />
    </>
  );
}
