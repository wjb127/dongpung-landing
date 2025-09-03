"use client"

import { motion } from "framer-motion"
import { 
  FileText, 
  Calculator, 
  CheckSquare, 
  Package, 
  Home,
  ArrowRight
} from "lucide-react"

const processSteps = [
  {
    step: "Step 1",
    title: "구매/배송 신청",
    description: "원하는 상품 링크나 정보를 전달하면 즉시 견적을 받아보실 수 있습니다",
    icon: FileText,
    color: "from-blue-500 to-cyan-500",
  },
  {
    step: "Step 2",
    title: "견적/수수료 확인",
    description: "투명한 가격 정책으로 상품가, 배송비, 수수료를 명확하게 안내드립니다",
    icon: Calculator,
    color: "from-purple-500 to-pink-500",
  },
  {
    step: "Step 3",
    title: "검수/포장 작업",
    description: "웨이하이 창고에서 꼼꼼한 검수와 안전한 포장 작업을 진행합니다",
    icon: CheckSquare,
    color: "from-orange-500 to-red-500",
  },
  {
    step: "Step 4",
    title: "특송/해운 발송",
    description: "고객님의 요구에 맞춰 특송 또는 해운으로 신속하게 발송합니다",
    icon: Package,
    color: "from-green-500 to-teal-500",
  },
  {
    step: "Step 5",
    title: "통관 및 국내 배송",
    description: "정식 통관 후 안전하게 고객님께 배송 완료됩니다",
    icon: Home,
    color: "from-indigo-500 to-purple-500",
  },
]

export default function ProcessFlow() {
  return (
    <section id="process" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-dark mb-4">
            간단한 이용 방법
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            복잡한 절차 없이 5단계로 완료되는 간편한 프로세스
          </p>
        </motion.div>

        <div className="relative">
          <div className="hidden md:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-primary via-accent to-primary transform -translate-y-1/2 z-0"></div>
          
          <div className="relative z-10 grid md:grid-cols-5 gap-4 md:gap-2">
            {processSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative"
              >
                <div className="bg-white rounded-xl p-4 hover:shadow-xl transition-all duration-300">
                  <div className="flex flex-col items-center text-center">
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 360 }}
                      transition={{ duration: 0.5 }}
                      className={`w-20 h-20 bg-gradient-to-br ${step.color} rounded-2xl flex items-center justify-center mb-4 shadow-lg`}
                    >
                      <step.icon className="h-10 w-10 text-white" />
                    </motion.div>
                    
                    <div className="px-2 py-1 bg-gray-100 rounded-full text-xs font-medium text-gray-600 mb-3">
                      {step.step}
                    </div>
                    
                    <h3 className="text-lg font-semibold text-dark mb-2">
                      {step.title}
                    </h3>
                    
                    <p className="text-sm text-gray-600">
                      {step.description}
                    </p>
                  </div>
                </div>
                
                {index < processSteps.length - 1 && (
                  <div className="hidden md:flex absolute top-1/2 -right-4 transform -translate-y-1/2 z-20">
                    <ArrowRight className="h-6 w-6 text-primary" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-16 grid md:grid-cols-3 gap-6"
        >
          <div className="bg-gradient-to-br from-blue-50 to-white rounded-2xl p-6 border border-blue-100">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                <span className="text-2xl">📱</span>
              </div>
              <h4 className="text-lg font-semibold text-dark">실시간 추적</h4>
            </div>
            <p className="text-gray-600">
              주문부터 배송까지 모든 과정을 실시간으로 확인할 수 있습니다
            </p>
          </div>

          <div className="bg-gradient-to-br from-orange-50 to-white rounded-2xl p-6 border border-orange-100">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center">
                <span className="text-2xl">💬</span>
              </div>
              <h4 className="text-lg font-semibold text-dark">24시간 상담</h4>
            </div>
            <p className="text-gray-600">
              카카오톡, 전화 등 다양한 채널로 언제든 문의 가능합니다
            </p>
          </div>

          <div className="bg-gradient-to-br from-green-50 to-white rounded-2xl p-6 border border-green-100">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                <span className="text-2xl">✅</span>
              </div>
              <h4 className="text-lg font-semibold text-dark">안전 보장</h4>
            </div>
            <p className="text-gray-600">
              파손, 분실 시 100% 보상으로 안심하고 이용하실 수 있습니다
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}