"use client"

import { motion } from "framer-motion"

const advantages = [
  {
    emoji: "✅",
    title: "웨이하이 항만 기반, 최단거리+최신 루트",
  },
  {
    emoji: "✅",
    title: "창고 보관 무료 + 매일 출고/재고/견적 파일 공유",
  },
  {
    emoji: "✅",
    title: "고객 맞춤형 1:1 전담 관리팀 운영 (포장·검수·스티커 작업)",
  },
  {
    emoji: "✅",
    title: "소량 샘플부터 대량 수입까지 유연한 지원",
  },
]

export default function Advantages() {
  return (
    <section id="advantages" className="py-20 gradient-bg relative">
      <div 
        className="absolute inset-0 opacity-20 z-0"
        style={{
          backgroundImage: "url('/images/advantages-bg.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat"
        }}
      />
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-dark mb-4">
            강점
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Why 동풍직구?
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="grid gap-4">
            {advantages.map((advantage, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group"
              >
                <div className="bg-white rounded-2xl p-6 hover:shadow-xl transition-all duration-300">
                  <div className="flex items-start gap-4">
                    <span className="text-2xl md:text-3xl flex-shrink-0">{advantage.emoji}</span>
                    <p className="text-base md:text-lg text-dark leading-relaxed flex-1">
                      {advantage.title}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}