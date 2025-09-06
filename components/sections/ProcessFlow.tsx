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
    step: "1",
    title: "구매/배송 신청",
    description: "링크·파일 업로드",
    icon: FileText,
    color: "from-blue-500 to-cyan-500",
  },
  {
    step: "2",
    title: "견적·수수료 확인",
    description: "투명한 비용 안내",
    icon: Calculator,
    color: "from-purple-500 to-pink-500",
  },
  {
    step: "3",
    title: "검수·포장 작업",
    description: "맞춤형 서비스 진행",
    icon: CheckSquare,
    color: "from-orange-500 to-red-500",
  },
  {
    step: "4",
    title: "특송·해운 발송",
    description: "LCL/FCL 정기 루트 활용",
    icon: Package,
    color: "from-green-500 to-teal-500",
  },
  {
    step: "5",
    title: "통관 및 국내 배송",
    description: "관세/부가세 처리 후 택배 연결",
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
            이용 방법
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            How it Works
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
                      whileHover={{ scale: 1.15 }}
                      transition={{ duration: 0.3, type: "spring", stiffness: 300 }}
                      className={`w-20 h-20 bg-gradient-to-br ${step.color} rounded-2xl flex items-center justify-center mb-4 shadow-lg`}
                    >
                      <step.icon className="h-10 w-10 text-white" />
                    </motion.div>
                    
                    <div className="px-3 py-1 bg-primary/10 rounded-full text-sm font-bold text-primary mb-3">
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
      </div>
    </section>
  )
}