import Link from "next/link";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import FeatureSection from "../../components/FeatureSection";

export default function ShopPage() {
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
      Discovery
    </h1>
    <p className="text-white text-lg mt-4 drop-shadow-md">
      A Photo Cosplay
    </p>
  </div>
      </div>

    <main className="flex flex-col items-center justify-center min-h-screen px-4 py-12 bg-[#1f1f1f]">
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

              <FeatureSection
              title="Miyabi - Zenless Zone Zero"
              cn="Alis ʚìɞ"
              photographer="Lifes’Cos"
              imageUrl="/images/MEITU_20250411_192734214.jpg"
            />

              <FeatureSection
              title="Jett - Valorant"
              cn="เจ้าหนู ฟุคุรอนจังง"
              photographer="Lifes’Cos"
              imageUrl="/images/MEITU_20250406_015144812.jpg" // ใช้ path ของรูปใหม่
              reversed={true} // เพื่อสลับตำแหน่งรูปกับข้อความ
            />

              <FeatureSection
              title="Barbara - Genshin Impact"
              cn="Khun Hun"
              photographer="Lifes’Cos"
              imageUrl="/images/Lifes'Cos-4438.jpg"
            />
          </main>
    <Footer />
    </>
  );
}
