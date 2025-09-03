"use client"

import { motion } from "framer-motion"
import { Button } from "../ui/button"
import { 
  MessageCircle, 
  Phone, 
  Mail, 
  ArrowRight,
  Star,
  Zap
} from "lucide-react"
import { useState } from "react"

export default function CTASection() {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-primary via-blue-600 to-primary relative overflow-hidden">
      <div className="absolute inset-0 bg-black/10"></div>
      
      <motion.div
        className="absolute -top-20 -right-20 w-96 h-96 bg-white/10 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
        }}
      />
      
      <motion.div
        className="absolute -bottom-20 -left-20 w-96 h-96 bg-accent/20 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
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
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
            <Zap className="h-5 w-5 text-accent" />
            <span className="text-white font-medium">지금 바로 시작하세요!</span>
          </div>
          
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            동풍직구와 함께
            <br />
            <span className="text-accent">성공적인 비즈니스</span>를 시작하세요
          </h2>
          
          <p className="text-lg text-white/90 max-w-2xl mx-auto mb-8">
            전문 상담원이 친절하게 안내해드립니다.
            부담 없이 문의하세요!
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            whileHover={{ scale: 1.05 }}
            className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center hover:bg-white/20 transition-all"
          >
            <div className="w-14 h-14 bg-accent rounded-xl flex items-center justify-center mx-auto mb-4">
              <MessageCircle className="h-7 w-7 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">카카오톡 상담</h3>
            <p className="text-white/80 text-sm mb-4">
              실시간 채팅 상담
              <br />
              빠른 견적 확인
            </p>
            <Button variant="outline" className="w-full bg-white/90 hover:bg-white text-primary border-0">
              카톡 상담하기
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            whileHover={{ scale: 1.05 }}
            className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center hover:bg-white/20 transition-all"
          >
            <div className="w-14 h-14 bg-accent rounded-xl flex items-center justify-center mx-auto mb-4">
              <Phone className="h-7 w-7 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">전화 상담</h3>
            <p className="text-white/80 text-sm mb-4">
              평일 09:00-18:00
              <br />
              1234-5678
            </p>
            <Button variant="outline" className="w-full bg-white/90 hover:bg-white text-primary border-0">
              전화 상담하기
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            whileHover={{ scale: 1.05 }}
            className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center hover:bg-white/20 transition-all"
          >
            <div className="w-14 h-14 bg-accent rounded-xl flex items-center justify-center mx-auto mb-4">
              <Mail className="h-7 w-7 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">이메일 문의</h3>
            <p className="text-white/80 text-sm mb-4">
              24시간 접수 가능
              <br />
              상세한 답변 제공
            </p>
            <Button variant="outline" className="w-full bg-white/90 hover:bg-white text-primary border-0">
              이메일 문의하기
            </Button>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center"
        >
          <div 
            className="inline-block"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <Button 
              size="xl" 
              variant="accent"
              className="group text-lg px-10 py-6 shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-300"
            >
              지금 바로 견적 요청하기
              <motion.div
                animate={{ x: isHovered ? 5 : 0 }}
                transition={{ duration: 0.2 }}
              >
                <ArrowRight className="ml-3 h-5 w-5" />
              </motion.div>
            </Button>
          </div>
          
          <div className="flex items-center justify-center gap-6 mt-8">
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-5 w-5 text-accent fill-accent" />
              ))}
            </div>
            <p className="text-white/90">
              <span className="font-semibold">5,000+</span> 고객이 만족한 서비스
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-16 grid md:grid-cols-4 gap-4 max-w-3xl mx-auto"
        >
          <div className="text-center">
            <div className="text-3xl font-bold text-accent mb-1">무료</div>
            <div className="text-sm text-white/80">견적 상담</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-accent mb-1">30분</div>
            <div className="text-sm text-white/80">견적 회신</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-accent mb-1">1:1</div>
            <div className="text-sm text-white/80">전담 관리</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-accent mb-1">100%</div>
            <div className="text-sm text-white/80">안전 보장</div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}