"use client"

import { motion } from "framer-motion"
import { Button } from "../ui/button"
import { ArrowRight, Package, Globe, Truck } from "lucide-react"

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center pt-16 gradient-bg overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center px-4 py-2 bg-primary/10 rounded-full"
            >
              <span className="text-primary text-sm font-medium">
                🚀 웨이하이-한국 직항 특송 서비스
              </span>
            </motion.div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-dark leading-tight">
              중국에서 한국까지
              <span className="text-gradient block mt-2">
                모든 직구와 수입을
              </span>
              한 번에
            </h1>

            <p className="text-lg text-gray-600 leading-relaxed">
              구매대행부터 배송, 통관까지 원스톱 솔루션!
              웨이하이 현지 창고와 전문 팀이 여러분의 비즈니스를 지원합니다.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" variant="accent" className="group" asChild>
                <a href="#contact">
                  견적 요청하기
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href="#services">
                  서비스 둘러보기
                </a>
              </Button>
            </div>

            <div className="grid grid-cols-3 gap-4 pt-8">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">75,000원</div>
                <div className="text-sm text-gray-600">CBM 특송요금</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">3-5일</div>
                <div className="text-sm text-gray-600">배송 소요시간</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">24시간</div>
                <div className="text-sm text-gray-600">실시간 대응</div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="relative"
          >
            <div className="grid grid-cols-2 gap-4">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="bg-white rounded-2xl shadow-xl p-6 space-y-4"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Package className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold text-lg">구매대행</h3>
                <p className="text-sm text-gray-600">
                  타오바오, 1688 등 중국 전 사이트 구매 대행
                </p>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                className="bg-white rounded-2xl shadow-xl p-6 space-y-4 mt-8"
              >
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
                  <Truck className="h-6 w-6 text-accent" />
                </div>
                <h3 className="font-semibold text-lg">배송대행</h3>
                <p className="text-sm text-gray-600">
                  검수, 재포장, 라벨링 등 전문 서비스
                </p>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                className="bg-white rounded-2xl shadow-xl p-6 space-y-4"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Globe className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold text-lg">통관대행</h3>
                <p className="text-sm text-gray-600">
                  빠르고 안전한 정식 통관 처리
                </p>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                className="bg-gradient-to-br from-primary to-blue-600 text-white rounded-2xl shadow-xl p-6 space-y-4 mt-8"
              >
                <h3 className="font-semibold text-lg">맞춤형 3PL</h3>
                <p className="text-sm">
                  OEM/ODM, 조립, 포장 등 맞춤 서비스
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}