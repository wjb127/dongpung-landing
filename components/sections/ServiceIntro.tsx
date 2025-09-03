"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card"
import { ShoppingCart, Package, Plane, CheckCircle } from "lucide-react"

const services = [
  {
    icon: ShoppingCart,
    title: "해외구매대행",
    features: [
      "• 해외 상품 구매→결제→현지 발송까지 전담",
      "• 전문 수수료 체계, 파일 기반 신청으로 투명 관리",
    ],
    color: "text-primary",
    bgColor: "bg-primary/10",
  },
  {
    icon: Package,
    title: "배송대행",
    features: [
      "• DF-FORWARDER 전용 창고 입고 후 검수·재포장",
      "• 파손·불량·수량 불일치 시 사진/보고서 제공",
      "• OPP, 지퍼백, 박스, 스티커 등 맞춤형 포장 서비스 지원",
    ],
    color: "text-accent",
    bgColor: "bg-accent/10",
  },
  {
    icon: Plane,
    title: "특송서비스",
    features: [
      "• 웨이하이→인천/평택/군산 직항 루트",
      "• 월·수·금 정기 출항: 75,000원/CBM (0.5 CBM 가능)",
      "• FCL(전용 컨테이너) & LCL(혼적) 모두 지원",
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
            서비스 소개
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            What We Do
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
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-2">
                        <span className="text-xl font-bold text-primary mt-[-2px]">•</span>
                        <p className="text-gray-700 leading-relaxed flex-1">
                          {feature.replace('• ', '')}
                        </p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}