"use client"

import { motion } from "framer-motion"
import { 
  Package2, 
  Scissors, 
  Sticker, 
  Gift, 
  Wrench, 
  Factory,
  Sparkles,
  Boxes
} from "lucide-react"

const customServices = [
  {
    icon: Package2,
    title: "포장 갈이/보강",
    description: "상품 특성에 맞는 안전한 재포장 서비스",
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    icon: Sticker,
    title: "스티커 작업",
    description: "브랜드 로고, 라벨 부착 서비스",
    gradient: "from-purple-500 to-pink-500",
  },
  {
    icon: Gift,
    title: "소포장/선물포장",
    description: "고급스러운 선물 포장 서비스",
    gradient: "from-orange-500 to-red-500",
  },
  {
    icon: Scissors,
    title: "의류 미싱작업",
    description: "태그 교체, 라벨 부착 등 의류 작업",
    gradient: "from-green-500 to-teal-500",
  },
  {
    icon: Wrench,
    title: "상품 조립",
    description: "부품 조립 및 완제품 제작",
    gradient: "from-indigo-500 to-purple-500",
  },
  {
    icon: Factory,
    title: "OEM/ODM 제작",
    description: "맞춤형 제품 생산 대행",
    gradient: "from-pink-500 to-rose-500",
  },
]

export default function CustomServices() {
  return (
    <section id="custom-services" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 rounded-full mb-4">
            <Sparkles className="h-5 w-5 text-accent" />
            <span className="text-accent font-medium">Premium Service</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-dark mb-4">
            맞춤형 3PL 서비스
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            단순 배송을 넘어 고객님의 비즈니스 성장을 돕는 토탈 솔루션을 제공합니다
          </p>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6">
          {customServices.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="group"
            >
              <div className="relative h-full p-4 md:p-6 bg-white rounded-xl md:rounded-2xl border-2 border-gray-100 hover:border-primary/30 transition-all duration-300 overflow-hidden">
                <div className="absolute top-0 right-0 w-24 md:w-32 h-24 md:h-32 opacity-10">
                  <div className={`w-full h-full bg-gradient-to-br ${service.gradient} rounded-full blur-2xl`}></div>
                </div>
                
                <div className="relative z-10">
                  <div className={`inline-flex p-2.5 md:p-3 rounded-xl bg-gradient-to-br ${service.gradient} mb-3 md:mb-4`}>
                    <service.icon className="h-5 w-5 md:h-6 md:w-6 text-white" />
                  </div>
                  
                  <h3 className="text-base md:text-xl font-semibold text-dark mb-1.5 md:mb-2">
                    {service.title}
                  </h3>
                  
                  <p className="text-sm md:text-base text-gray-600">
                    {service.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-16"
        >
          <div className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-3xl p-8 md:p-12 text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 opacity-20">
              <Boxes className="w-full h-full" />
            </div>
            
            <div className="relative z-10 grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl md:text-3xl font-bold mb-4">
                  왜 동풍직구의 3PL 서비스인가?
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-accent rounded-full"></div>
                    <span>현지 전문 인력의 꼼꼼한 작업</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-accent rounded-full"></div>
                    <span>대량 작업도 빠르게 처리</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-accent rounded-full"></div>
                    <span>합리적인 가격으로 비용 절감</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-accent rounded-full"></div>
                    <span>실시간 작업 현황 공유</span>
                  </li>
                </ul>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center">
                  <div className="text-3xl font-bold text-accent mb-1">1,000+</div>
                  <div className="text-sm text-white/80">일일 처리량</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center">
                  <div className="text-3xl font-bold text-accent mb-1">99%</div>
                  <div className="text-sm text-white/80">작업 정확도</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center">
                  <div className="text-3xl font-bold text-accent mb-1">24H</div>
                  <div className="text-sm text-white/80">작업 완료</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center">
                  <div className="text-3xl font-bold text-accent mb-1">50%</div>
                  <div className="text-sm text-white/80">비용 절감</div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}