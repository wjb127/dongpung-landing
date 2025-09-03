"use client"

import { motion } from "framer-motion"

const customServices = [
  {
    emoji: "📦",
    title: "포장 갈이/보강",
    description: "파손 방지, 새 박스 제작, 합포장",
  },
  {
    emoji: "🏷️",
    title: "스티커 작업",
    description: "바코드, 로고, 라벨링, 전문 스티커 제작 협력",
  },
  {
    emoji: "🎁",
    title: "소포장·선물포장",
    description: "판매급 퀄리티 포장, 지퍼백·OPP 맞춤 제작",
  },
  {
    emoji: "👕",
    title: "의류 미싱작업",
    description: "Made in China 라벨, 성분표, 세탁 주의사항 라벨 부착",
  },
  {
    emoji: "🔧",
    title: "상품 조립",
    description: "소형 제품 조립·설명서 합포장 지원",
  },
  {
    emoji: "🏭",
    title: "OEM/ODM 제작",
    description: "금속, 의류, 캠핑, 헬스 등 중국 현지 공장 네트워크 활용",
  },
]

export default function CustomServices() {
  return (
    <section id="custom-services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-dark mb-4">
            맞춤형 3PL & 부가 서비스
          </h2>
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
              <div className="h-full p-4 md:p-6 bg-white rounded-xl md:rounded-2xl border border-gray-200 hover:shadow-lg transition-all duration-300">
                <div className="flex items-start gap-3">
                  <span className="text-2xl md:text-3xl">{service.emoji}</span>
                  <div className="flex-1">
                    <h3 className="text-base md:text-lg font-semibold text-dark mb-1.5">
                      {service.title}
                    </h3>
                    <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}