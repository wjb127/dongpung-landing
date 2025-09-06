"use client"

import { useState, useEffect } from "react"
import { supabase, ContactFormData } from "@/lib/supabase"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Trash2, RefreshCw, LogOut, Mail, Phone, Building, Calendar, FileText } from "lucide-react"
import { motion } from "framer-motion"

export default function AdminDashboard() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [password, setPassword] = useState("")
  const [inquiries, setInquiries] = useState<ContactFormData[]>([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")

  const adminPassword = process.env.NEXT_PUBLIC_ADMIN_PASSWORD || "admin123!@#"

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()
    if (password === adminPassword) {
      setIsAuthenticated(true)
      setError("")
      localStorage.setItem("admin_authenticated", "true")
      fetchInquiries()
    } else {
      setError("비밀번호가 올바르지 않습니다.")
    }
  }

  const handleLogout = () => {
    setIsAuthenticated(false)
    localStorage.removeItem("admin_authenticated")
    setPassword("")
    setInquiries([])
  }

  const fetchInquiries = async () => {
    setLoading(true)
    try {
      const { data, error } = await supabase
        .from("contact_inquiries")
        .select("*")
        .order("created_at", { ascending: false })

      if (error) throw error
      setInquiries(data || [])
    } catch (error) {
      console.error("Error fetching inquiries:", error)
      setError("데이터를 불러오는 중 오류가 발생했습니다.")
    } finally {
      setLoading(false)
    }
  }

  const deleteInquiry = async (id: number) => {
    if (!confirm("정말 삭제하시겠습니까?")) return

    try {
      const { error } = await supabase
        .from("contact_inquiries")
        .delete()
        .eq("id", id)

      if (error) throw error
      fetchInquiries()
    } catch (error) {
      console.error("Error deleting inquiry:", error)
      setError("삭제 중 오류가 발생했습니다.")
    }
  }

  useEffect(() => {
    const isAuth = localStorage.getItem("admin_authenticated")
    if (isAuth === "true") {
      setIsAuthenticated(true)
      fetchInquiries()
    }
  }, [])

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
        <Card className="w-full max-w-md">
          <CardHeader>
            <CardTitle className="text-2xl text-center">관리자 로그인</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleLogin} className="space-y-4">
              <div>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="비밀번호를 입력하세요"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  autoFocus
                />
              </div>
              {error && (
                <div className="text-red-500 text-sm text-center">{error}</div>
              )}
              <Button type="submit" className="w-full">
                로그인
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <div className="container mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-dark">문의 관리 대시보드</h1>
          <div className="flex gap-2">
            <Button 
              onClick={fetchInquiries} 
              variant="outline"
              disabled={loading}
            >
              <RefreshCw className={`h-4 w-4 mr-2 ${loading ? 'animate-spin' : ''}`} />
              새로고침
            </Button>
            <Button onClick={handleLogout} variant="outline">
              <LogOut className="h-4 w-4 mr-2" />
              로그아웃
            </Button>
          </div>
        </div>

        {error && (
          <div className="bg-red-100 text-red-700 p-4 rounded-lg mb-4">
            {error}
          </div>
        )}

        <div className="grid gap-4">
          {loading ? (
            <div className="text-center py-8">
              <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
              <p className="mt-2 text-gray-600">데이터를 불러오는 중...</p>
            </div>
          ) : inquiries.length === 0 ? (
            <Card>
              <CardContent className="text-center py-8">
                <p className="text-gray-600">아직 접수된 문의가 없습니다.</p>
              </CardContent>
            </Card>
          ) : (
            inquiries.map((inquiry, index) => (
              <motion.div
                key={inquiry.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
              >
                <Card className="hover:shadow-lg transition-shadow">
                  <CardHeader className="pb-3">
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle className="text-lg flex items-center gap-2">
                          <Building className="h-4 w-4 text-primary" />
                          {inquiry.company_name}
                        </CardTitle>
                        <p className="text-sm text-gray-600 mt-1">
                          담당자: {inquiry.contact_person}
                        </p>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-xs text-gray-500">
                          {new Date(inquiry.created_at!).toLocaleString('ko-KR')}
                        </span>
                        <Button
                          size="sm"
                          variant="ghost"
                          onClick={() => deleteInquiry(inquiry.id!)}
                          className="text-red-500 hover:text-red-700"
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="grid md:grid-cols-2 gap-3">
                      <div className="flex items-center gap-2">
                        <Phone className="h-4 w-4 text-gray-500" />
                        <span className="text-sm">{inquiry.contact_number}</span>
                      </div>
                      {inquiry.email && (
                        <div className="flex items-center gap-2">
                          <Mail className="h-4 w-4 text-gray-500" />
                          <span className="text-sm">{inquiry.email}</span>
                        </div>
                      )}
                    </div>
                    
                    {inquiry.consultation_time && (
                      <div className="flex items-center gap-2">
                        <Calendar className="h-4 w-4 text-gray-500" />
                        <span className="text-sm">상담 가능 시간: {inquiry.consultation_time}</span>
                      </div>
                    )}
                    
                    <div className="bg-gray-50 rounded-lg p-3">
                      <div className="flex items-start gap-2">
                        <FileText className="h-4 w-4 text-gray-500 mt-0.5" />
                        <div className="flex-1">
                          <p className="text-sm font-medium mb-1">문의 내용:</p>
                          <p className="text-sm text-gray-700 whitespace-pre-wrap">
                            {inquiry.inquiry_details}
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center gap-2">
                      <span className={`text-xs px-2 py-1 rounded-full ${
                        inquiry.agreement 
                          ? 'bg-green-100 text-green-700' 
                          : 'bg-red-100 text-red-700'
                      }`}>
                        개인정보 동의: {inquiry.agreement ? '동의함' : '미동의'}
                      </span>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))
          )}
        </div>
      </div>
    </div>
  )
}