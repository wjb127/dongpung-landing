"use client"

import { motion } from "framer-motion"
import { Button } from "../ui/button"
import { ArrowRight, Package, Globe, Truck, Plane } from "lucide-react"

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center pt-16 overflow-hidden">
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: "url('/images/hero-bg.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat"
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70"></div>
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
              className="inline-flex items-center px-4 py-2 bg-accent/20 backdrop-blur-sm rounded-full"
            >
              <span className="text-accent text-sm font-medium">
                🚀 웨이하이-한국 직항 특송 서비스
              </span>
            </motion.div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
              중국에서 한국까지
              <span className="text-accent block mt-2">
                모든 직구와 수입을
              </span>
              한 번에
            </h1>

            <p className="text-lg text-gray-200 leading-relaxed">
              해외구매대행 · 맞춤형 배송대행 · 특송서비스 · 쿠팡 풀필먼트까지 원스톱으로
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" variant="accent" className="group" asChild>
                <a href="#contact-form">
                  견적 요청하기
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href="#services">
                  서비스 시작하기
                </a>
              </Button>
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
                className="bg-white rounded-2xl shadow-xl p-6 space-y-3 h-[160px]"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Globe className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold text-lg">해외구매대행</h3>
                <p className="text-sm text-gray-600">
                  타오바오, 1688 등 중국 전 사이트 구매 대행
                </p>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                className="bg-white rounded-2xl shadow-xl p-6 space-y-3 h-[160px]"
              >
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
                  <Package className="h-6 w-6 text-accent" />
                </div>
                <h3 className="font-semibold text-lg">맞춤형 배송대행</h3>
                <p className="text-sm text-gray-600">
                  검수·재포장·OPP/박스 맞춤 포장
                </p>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                className="bg-white rounded-2xl shadow-xl p-6 space-y-3 h-[160px]"
              >
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                  <Plane className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="font-semibold text-lg">특송서비스</h3>
                <p className="text-sm text-gray-600">
                  웨이하이-한국 직항 3-5일 초스피드 배송
                </p>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                className="bg-white rounded-2xl shadow-xl p-6 space-y-3 h-[160px]"
              >
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                  <Truck className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="font-semibold text-lg">쿠팡 밀크런/로켓그로스</h3>
                <p className="text-sm text-gray-600">
                  쿠팡 풀필먼트 및 로켓배송 연동
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}