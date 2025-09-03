import Image from "next/image"
import { MapPin, Phone, Mail, Clock } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <Image
              src="/logo.png"
              alt="동풍직구"
              width={140}
              height={50}
              className="h-12 w-auto brightness-0 invert"
            />
            <p className="text-gray-400 text-sm">
              중국에서 한국까지,<br />
              모든 직구와 수입을 한 번에
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold">서비스</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  해외구매대행
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  배송대행
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  특송서비스
                </a>
              </li>
              <li>
                <a href="#custom-services" className="hover:text-white transition-colors">
                  맞춤형 3PL
                </a>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold">연락처</h3>
            <ul className="space-y-2 text-gray-400">
              <li className="flex items-start gap-2">
                <Phone className="h-4 w-4 mt-1" />
                <span>1234-5678</span>
              </li>
              <li className="flex items-start gap-2">
                <Mail className="h-4 w-4 mt-1" />
                <span>contact@dongpung.com</span>
              </li>
              <li className="flex items-start gap-2">
                <Clock className="h-4 w-4 mt-1" />
                <span>평일 09:00 - 18:00</span>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold">주소</h3>
            <div className="flex items-start gap-2 text-gray-400">
              <MapPin className="h-4 w-4 mt-1" />
              <div>
                <p>웨이하이 창고</p>
                <p className="text-sm">중국 산둥성 웨이하이시</p>
                <p className="text-sm mt-2">서울 사무소</p>
                <p className="text-sm">서울특별시 강남구</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2024 동풍직구. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                이용약관
              </a>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                개인정보처리방침
              </a>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                사업자정보
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}