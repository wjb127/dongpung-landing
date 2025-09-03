"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card"
import { ShoppingCart, Package, Plane, CheckCircle } from "lucide-react"

const services = [
  {
    icon: ShoppingCart,
    title: "해외구매대행",
    description: "구매→결제→발송 원스톱 서비스",
    features: [
      "타오바오, 1688, 알리바바 전문",
      "현지 직접 구매로 최저가 보장",
      "전문 바이어 상품 검증",
      "실시간 구매 진행상황 안내",
    ],
    color: "text-primary",
    bgColor: "bg-primary/10",
  },
  {
    icon: Package,
    title: "배송대행",
    description: "DF-FORWARDER 창고 검수/재포장",
    features: [
      "무료 창고 보관 서비스",
      "철저한 검수 시스템",
      "안전한 재포장 작업",
      "실시간 배송 추적",
    ],
    color: "text-accent",
    bgColor: "bg-accent/10",
  },
  {
    icon: Plane,
    title: "특송서비스",
    description: "웨이하이→한국 직항 루트",
    features: [
      "75,000원/CBM 특가",
      "3-5일 초스피드 배송",
      "정식 통관 처리",
      "도어투도어 서비스",
    ],
    color: "text-blue-600",
    bgColor: "bg-blue-100",
  },
]

export default function ServiceIntro() {
  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-dark mb-4">
            동풍직구 핵심 서비스
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            중국 현지 전문팀과 함께하는 안전하고 빠른 직구 서비스
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full hover:shadow-2xl transition-all duration-300 border-0">
                <CardHeader>
                  <div
                    className={`w-16 h-16 ${service.bgColor} rounded-xl flex items-center justify-center mb-4`}
                  >
                    <service.icon className={`h-8 w-8 ${service.color}`} />
                  </div>
                  <CardTitle className="text-2xl">{service.title}</CardTitle>
                  <CardDescription className="text-base">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-12 bg-gradient-to-r from-primary to-blue-600 rounded-2xl p-8 text-white text-center"
        >
          <h3 className="text-2xl font-bold mb-4">
            왜 동풍직구를 선택해야 할까요?
          </h3>
          <div className="grid md:grid-cols-4 gap-6 mt-8">
            <div>
              <div className="text-3xl font-bold mb-2">10년+</div>
              <div className="text-white/90">중국 무역 경험</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">5,000+</div>
              <div className="text-white/90">누적 고객수</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">99.8%</div>
              <div className="text-white/90">고객 만족도</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">24/7</div>
              <div className="text-white/90">실시간 지원</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}