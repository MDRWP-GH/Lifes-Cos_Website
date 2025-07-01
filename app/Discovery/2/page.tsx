import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FeatureSection from "@/components/FeatureSection";
import AnimatedButton from "@/components/AnimatedButtonNextBack";
import Image from "next/image";

export default function DiscoveryPage2() {
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
            Discovery #2
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
            A Photo Cosplay
          </p>
        </div>
      </div>

      <main className="flex flex-col items-center justify-center min-h-screen px-4 py-12 bg-[#1f1f1f]"
        style={{ backgroundImage: "url('/1534541.jpg')" }}
      >
        <FeatureSection
          title="𝗡𝗮𝗵𝗶𝗱𝗮 - 𝗚𝗲𝗻𝘀𝗵𝗶𝗻 𝗜𝗺𝗽𝗮𝗰𝘁"
          cn="Sora SerVamp"
          photographer="Lifes’Cos"
          imageUrl="/Lifes'Cos-5204.png"
          link="https://facebook.com/share/p/16Ywbb2K1F/"
        />

        <FeatureSection
          title="𝗦𝘂𝗻𝗱𝗮𝘆 - 𝗛𝗼𝗻𝗸𝗮𝗶 𝗦𝘁𝗮𝗿 𝗥𝗮𝗶𝗹"
          cn="Yuukie Chuu"
          photographer="Lifes’Cos"
          imageUrl="/IMG_9163.png"
          link="https://facebook.com/share/p/1AjLukP31B/"
          reversed={true} 
        />

        <FeatureSection
          title="𝗙𝘂𝗿𝗶𝗻𝗮 - 𝗚𝗲𝗻𝘀𝗵𝗶𝗻 𝗜𝗺𝗽𝗮𝗰𝘁"
          cn="Maiko You"
          photographer="Lifes’Cos"
          imageUrl="/Lifes'Cos-4811.jpg"
          link="https://facebook.com/photo?fbid=122130323912488308&set=pb.61564649259527.-2207520000"
        />

        <FeatureSection
          title="𝗙𝘂𝗿𝗶𝗻𝗮 - 𝗚𝗲𝗻𝘀𝗵𝗶𝗻 𝗜𝗺𝗽𝗮𝗰𝘁"
          cn="Kanthida Poolthong"
          photographer="Lifes’Cos"
          imageUrl="/Lifes'Cos-5702.PNG"
          link="https://facebook.com/ANNZEMIZ/posts/pfbid02M5DoT5ZnHZCNjFv2Y1QkJnXrLD1b3Y3eVAD4jxsBcH7pW2aRc2QBoiGm1mFWGzoxl"
          reversed={true} 
        />

        <div className="mt-10 flex justify-center space-x-4">
          <AnimatedButton href="/Discovery/1">
            ← Back Page
          </AnimatedButton>

          {/* <AnimatedButton href="/Discovery/3">
            Next Page →
          </AnimatedButton> */}

        </div>

      </main>
      <Footer />
    </>
  );
}