import { FaFacebookF, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#1f1f1f] text-white py-10 px-4">
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 text-md">
        {/* Social Icons + Copyright */}
        <div className="flex flex-col gap-4">
          <div className="flex gap-4 text-4xl">
            <a href="https://www.facebook.com/profile.php?id=61564649259527" target="_blank" rel="noopener noreferrer">
              <FaFacebookF />
            </a>
            <a href="https://www.instagram.com/doom_rody/?__pwa=1" target="_blank" rel="noopener noreferrer">
              <FaInstagram />
            </a>
          </div>
          <p className="text-x text-gray-400">© 2025, Lifes‘Cos</p>
        </div>

        {/* Help & Support */}
        <div>
          <h4 className="font-semibold mb-2">Help & Support</h4>
          <ul className="space-y-2">
            <li><a href="#">Terms and Conditions</a></li>
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">ส่งข้อความมาหาเรา</a></li>
          </ul>
        </div>

        {/* About */}
        <div>
          <h4 className="font-semibold mb-2">Lifes‘Cos</h4>
          <p>เกี่ยวกับ Lifes‘Cos</p>
        </div>

        {/* Description */}
        <div>
          <p className="font-semibold text-sm text-gray-400 mb-2">
            Lifes‘Cos ขายรูปถ่ายและรับงานถ่าย<br />
            Cosplay, Portrait และ Event<br />
            สามารถติดต่อสอบถามทางเพจ<br />
            Facebook และ Instagram
          </p>
        </div>
      </div>
    </footer>
  );
}
