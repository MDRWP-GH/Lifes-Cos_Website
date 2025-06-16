import { FaFacebookF, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#1f1f1f] text-white py-10 px-4">
  <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-md justify-items-center text-center md:text-left">
    {/* Social Icons */}
    <div className="flex flex-col gap-4 items-center md:items-start">
      <div className="flex gap-4 text-4xl">
        <a href="https://www.facebook.com/profile.php?id=61564649259527" target="_blank" rel="noopener noreferrer">
          <FaFacebookF />
        </a>
        <a href="https://www.instagram.com/doom_rody/?__pwa=1" target="_blank" rel="noopener noreferrer">
          <FaInstagram />
        </a>
      </div>
      <p className="text-sm text-gray-400">© 2025, Lifes‘Cos</p>
    </div>

    {/* About */}
    <div>
      <h4 className="font-semibold mb-2">Lifes‘Cos</h4>
      <p>เกี่ยวกับ Lifes‘Cos</p>
    </div>

    {/* Description */}
    <div>
      <p className="font-semibold text-sm text-gray-400">
        Lifes‘Cos รับงานถ่ายภาพ<br />
        Cosplay, Portrait และ Event<br />
        สามารถติดต่อสอบถามทางเพจ<br />
        Facebook และ Instagram
      </p>
    </div>
  </div>
</footer>
  );
}
