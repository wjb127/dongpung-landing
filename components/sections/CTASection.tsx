"use client"

import { motion } from "framer-motion"
import { Button } from "../ui/button"
import { 
  MessageCircle, 
  ArrowRight
} from "lucide-react"

export default function CTASection() {
  return (
    <section id="contact" className="py-20 relative overflow-hidden">
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: "url('/images/cta-bg.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat"
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-primary/90 via-blue-600/85 to-primary/90"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            사업자부터 개인까지, 직구는 동풍직구와 함께
          </h2>
          
          <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto mb-12">
            구매·포장·배송·통관을 원스톱으로 경험하세요
          </p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col md:flex-row gap-4 justify-center"
          >
            <Button 
              size="xl" 
              variant="accent"
              className="group text-lg px-10 py-6 shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-300"
            >
              지금 견적 요청하기
              <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>

            <Button 
              size="xl" 
              variant="outline"
              className="text-lg px-10 py-6 bg-white/90 hover:bg-white text-primary border-0 shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-300"
            >
              <MessageCircle className="mr-3 h-5 w-5" />
              카카오톡 문의하기
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}