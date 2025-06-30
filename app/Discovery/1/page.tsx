import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";
import FeatureSection from "../../../components/FeatureSection";
import AnimatedButton from "@/components/AnimatedButtonNextBack";
import Image from "next/image";

export default function Discovery() {
  return (
    <>
      <Navbar />

      <div className="relative w-full h-[500px] mt-30">
        {/* รูปภาพพื้นหลัง */}
        <Image
          src="/Lifes'Cos-5332.JPG"
          alt="Background"
          width={1346}
          height={500}
          className="absolute inset-0 w-full h-full object-cover opacity-40"
        />

        {/* เนื้อหาด้านบน */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
          <h1 className="text-white text-4xl md:text-5xl font-bold drop-shadow-lg">
            Discovery #1
          </h1>
          <p className="text-white text-lg mt-4 drop-shadow-md">
            A Photo Cosplay
          </p>
        </div>
      </div>

      <div className="relative w-full h-[500px]">
        {/* รูปภาพพื้นหลัง */}
        <Image
          src="/Lifes'Cos-4595.JPG"
          alt="Background"
          width={1346}
          height={500}
          className="absolute inset-0 w-full h-full object-cover opacity-40"
        />

        {/* เนื้อหาด้านบน */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
          <h1 className="text-white text-4xl md:text-5xl font-bold drop-shadow-lg">
            My Album
          </h1>
          <p className="text-white text-lg mt-4 drop-shadow-md">
            in my journey
          </p>
        </div>
      </div>

      <main className="flex flex-col items-center justify-center min-h-screen px-4 py-12 bg-[#1f1f1f]"
        style={{ backgroundImage: "url('/1534541.jpg')" }}
      >

        <FeatureSection
          title="𝗧𝗵𝗲 𝗛𝗲𝗿𝘁𝗮 - 𝗛𝗼𝗻𝗸𝗮𝗶 𝗦𝘁𝗮𝗿 𝗥𝗮𝗶𝗹"
          cn="แก้มมี่แบร์ ฯ."
          photographer="Lifes’Cos"
          imageUrl="/IMG_9984.png" // ใช้ path ของรูปใหม่
          link="https://www.facebook.com/share/p/165KxU74JV/"
        />

        <FeatureSection
          title="Hatsune Miku"
          cn="Mi Mo Ri"
          photographer="Lifes’Cos"
          imageUrl="/IMG_9992.png" // ใช้ path ของรูปใหม่
          link="/Discovery/1"
          reversed={true} // เพื่อสลับตำแหน่งรูปกับข้อความ
        />

        <FeatureSection
          title="Frieren - Sousou no Frieren"
          cn="Boom Bii"
          photographer="Lifes’Cos"
          imageUrl="/IMG_9855.jpg"
          link="https://www.facebook.com/share/p/1BFGq57ZKu/"
        />

        <FeatureSection
          title="𝗘𝘃𝗮𝗹𝗶𝗮 - 𝗔𝗹𝗴𝗼𝗿𝗵𝘆𝘁𝗵𝗺 𝗣𝗿𝗼𝗷𝗲𝗰𝘁"
          cn="Alis ʚìɞ"
          photographer="Lifes’Cos"
          imageUrl="/406.jpg" // ใช้ path ของรูปใหม่
          link="https://www.facebook.com/share/p/1AeZpxWWnB/"
          reversed={true} // เพื่อสลับตำแหน่งรูปกับข้อความ
        />

        <FeatureSection
          title="Miyabi - Zenless Zone Zero"
          cn="Alis ʚìɞ"
          photographer="Lifes’Cos"
          imageUrl="/MEITU_20250411_192734214.jpg"
          link="https://www.facebook.com/share/p/16mERqTKnP/"
        />

        <FeatureSection
          title="Jett - Valorant"
          cn="เจ้าหนู ฟุคุรอนจังง"
          photographer="Lifes’Cos"
          imageUrl="/MEITU_20250406_015144812.jpg" // ใช้ path ของรูปใหม่
          link="https://www.facebook.com/share/p/14Ld61KhWC5/"
          reversed={true} // เพื่อสลับตำแหน่งรูปกับข้อความ
        />

        <FeatureSection
          title="Barbara - Genshin Impact"
          cn="Khun Hun"
          photographer="Lifes’Cos"
          imageUrl="/LifesCos-4438.jpg"
          link="https://www.facebook.com/share/p/19BmjkXH6H/"
        />

        <div className="mt-10 flex justify-center space-x-4">
          <AnimatedButton href="/Discovery/2">
            Next Page →
          </AnimatedButton>
        </div>

      </main>

      <Footer />
    </>
  );
}
