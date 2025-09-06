"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "../ui/button"
import { Send } from "lucide-react"

export default function ContactForm() {
  const [formData, setFormData] = useState({
    companyName: "",
    companyOrDepartment: "",
    contactPerson: "",
    contactNumber1: "",
    contactNumber2: "",
    contactNumber3: "",
    email: "",
    productLink: "",
    inquiryDetails: "",
    agreement: false
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target
    if (type === "checkbox") {
      setFormData(prev => ({
        ...prev,
        [name]: (e.target as HTMLInputElement).checked
      }))
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value
      }))
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log(formData)
  }

  return (
    <section id="contact-form" className="py-20 bg-slate-900 relative overflow-hidden">
      <div 
        className="absolute inset-0 opacity-50 z-0"
        style={{
          backgroundImage: "url('/midjourney/u8164484915_modern_abstract_shipping_and_logistics_background_bc139c5d-a175-4dbb-a3a1-146622dc733e_2.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          filter: "blur(2px)"
        }}
      />
      <div className="absolute inset-0 bg-slate-900/50 z-0" />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              무료 상담 신청
            </h2>
            <p className="text-lg text-white/90">
              전문 상담사가 빠르게 연락드리겠습니다
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6 bg-white/5 backdrop-blur-md rounded-2xl p-8 border border-white/10">
            <div className="space-y-4">
              <div>
                <label className="block text-white mb-2 font-medium">
                  업체명 <span className="text-accent">*</span>
                </label>
                <input
                  type="text"
                  name="companyName"
                  value={formData.companyName}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-lg bg-white/90 text-dark placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-accent"
                  placeholder="업체명을 입력해주세요"
                  required
                />
              </div>

              <div>
                <label className="block text-white mb-2 font-medium">
                  담당자/직함 <span className="text-accent">*</span>
                </label>
                <input
                  type="text"
                  name="companyOrDepartment"
                  value={formData.companyOrDepartment}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-lg bg-white/90 text-dark placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-accent"
                  placeholder="담당자명과 직함을 입력해주세요"
                  required
                />
              </div>

              <div>
                <label className="block text-white mb-2 font-medium">
                  연락처 <span className="text-accent">*</span>
                </label>
                <div className="grid grid-cols-3 gap-2">
                  <input
                    type="text"
                    name="contactNumber1"
                    value={formData.contactNumber1}
                    onChange={handleInputChange}
                    className="px-4 py-3 rounded-lg bg-white/90 text-dark placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-accent"
                    placeholder="010"
                    maxLength={3}
                    required
                  />
                  <input
                    type="text"
                    name="contactNumber2"
                    value={formData.contactNumber2}
                    onChange={handleInputChange}
                    className="px-4 py-3 rounded-lg bg-white/90 text-dark placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-accent"
                    placeholder="0000"
                    maxLength={4}
                    required
                  />
                  <input
                    type="text"
                    name="contactNumber3"
                    value={formData.contactNumber3}
                    onChange={handleInputChange}
                    className="px-4 py-3 rounded-lg bg-white/90 text-dark placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-accent"
                    placeholder="0000"
                    maxLength={4}
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-white mb-2 font-medium">
                  이메일
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-lg bg-white/90 text-dark placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-accent"
                  placeholder="이메일 주소를 입력해주세요"
                />
              </div>

              <div>
                <label className="block text-white mb-2 font-medium">
                  상담 가능 시간
                </label>
                <input
                  type="text"
                  name="productLink"
                  value={formData.productLink}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-lg bg-white/90 text-dark placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-accent"
                  placeholder="예: 평일 오전 10시~12시"
                />
              </div>

              <div>
                <label className="block text-white mb-2 font-medium">
                  문의사항 <span className="text-accent">*</span>
                </label>
                <textarea
                  name="inquiryDetails"
                  value={formData.inquiryDetails}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-lg bg-white/90 text-dark placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-accent min-h-[120px]"
                  placeholder="문의하실 내용을 자세히 입력해주세요"
                  required
                />
              </div>

              <div>
                <label className="block text-white mb-2 font-medium">
                  개인정보 수집 및 이용 동의 <span className="text-accent">*</span>
                </label>
                <div className="bg-white/10 rounded-lg p-4 mb-3">
                  <p className="text-white/80 text-sm leading-relaxed">
                    원활한 상담 진행을 위해 아래와 같이 개인정보를 수집·이용하고자 합니다. 내용을 자세히 읽으신 후 동의 여부를 결정하여 주십시오.
                    <br /><br />
                    [필수] 개인정보 수집·이용 내역
                    <br />
                    • 수집항목: 업체명, 담당자명, 연락처, 이메일
                    <br />
                    • 수집목적: 서비스 상담 및 안내
                    <br />
                    • 보유기간: 상담 완료 후 1년 또는 고객 요청 시 즉시 삭제
                  </p>
                </div>
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="agreement"
                    name="agreement"
                    checked={formData.agreement}
                    onChange={handleInputChange}
                    className="w-5 h-5 text-accent bg-white rounded focus:ring-accent focus:ring-2"
                    required
                  />
                  <label htmlFor="agreement" className="ml-3 text-white">
                    개인정보 수집 및 이용에 동의합니다
                  </label>
                </div>
              </div>
            </div>

            <Button
              type="submit"
              size="lg"
              className="w-full bg-accent hover:bg-accent/90 text-white font-bold py-4 text-lg group"
            >
              무료 상담 신청하기
              <Send className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </form>
        </motion.div>
      </div>
    </section>
  )
}