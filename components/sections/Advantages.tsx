"use client"

import { motion } from "framer-motion"
import { 
  MapPin, 
  Warehouse, 
  Users, 
  TrendingUp,
  Shield,
  Clock,
  DollarSign,
  Award
} from "lucide-react"

const advantages = [
  {
    icon: MapPin,
    title: "웨이하이 항만 기반",
    description: "한국과 가장 가까운 중국 항구, 최단거리 운송으로 시간과 비용 절감",
    highlight: "최단거리",
  },
  {
    icon: Warehouse,
    title: "창고 보관 무료",
    description: "넓은 자체 창고 보유, 장기 보관도 추가 비용 없이 안전하게",
    highlight: "무료보관",
  },
  {
    icon: Users,
    title: "1:1 전담 관리팀",
    description: "전문 담당자가 처음부터 끝까지 책임지고 관리",
    highlight: "전담관리",
  },
  {
    icon: TrendingUp,
    title: "소량~대량 유연한 지원",
    description: "개인 구매부터 대량 B2B까지 모든 규모 대응 가능",
    highlight: "맞춤지원",
  },
]

const statistics = [
  { icon: Shield, value: "100%", label: "안전 배송률" },
  { icon: Clock, value: "3-5일", label: "평균 배송기간" },
  { icon: DollarSign, value: "30%", label: "비용 절감" },
  { icon: Award, value: "10년+", label: "운영 경력" },
]

export default function Advantages() {
  return (
    <section id="advantages" className="py-20 gradient-bg">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-dark mb-4">
            동풍직구만의 강점
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            10년 이상의 노하우와 인프라로 최고의 서비스를 제공합니다
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {advantages.map((advantage, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div className="bg-white rounded-2xl p-6 hover:shadow-xl transition-all duration-300 h-full">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-14 h-14 bg-gradient-to-br from-primary to-blue-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                      <advantage.icon className="h-7 w-7 text-white" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <h3 className="text-xl font-semibold text-dark">
                        {advantage.title}
                      </h3>
                      <span className="px-2 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full">
                        {advantage.highlight}
                      </span>
                    </div>
                    <p className="text-gray-600">
                      {advantage.description}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="bg-white rounded-3xl shadow-xl p-8 md:p-12"
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-dark mb-2">
              숫자로 보는 동풍직구
            </h3>
            <p className="text-gray-600">
              검증된 실적과 신뢰할 수 있는 서비스
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {statistics.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ 
                  duration: 0.5, 
                  delay: 0.6 + index * 0.1,
                  type: "spring",
                  stiffness: 200 
                }}
                className="text-center"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-primary/10 to-blue-100 rounded-2xl mb-3">
                  <stat.icon className="h-8 w-8 text-primary" />
                </div>
                <div className="text-3xl font-bold text-dark mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-600">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="mt-12 text-center"
        >
          <div className="inline-flex flex-col md:flex-row gap-4 md:gap-8 items-center bg-accent/10 rounded-2xl px-8 py-6">
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 bg-accent rounded-full animate-pulse"></div>
              <span className="text-lg font-medium text-dark">
                실시간 견적 가능
              </span>
            </div>
            <div className="hidden md:block w-px h-8 bg-gray-300"></div>
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 bg-accent rounded-full animate-pulse"></div>
              <span className="text-lg font-medium text-dark">
                즉시 상담 가능
              </span>
            </div>
            <div className="hidden md:block w-px h-8 bg-gray-300"></div>
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 bg-accent rounded-full animate-pulse"></div>
              <span className="text-lg font-medium text-dark">
                당일 처리 가능
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}