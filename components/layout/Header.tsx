"use client"

import Image from "next/image"
import Link from "next/link"
import { Phone, MessageCircle, Menu, X } from "lucide-react"
import { Button } from "../ui/button"
import { useState } from "react"

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <header className="fixed w-full top-0 z-50 bg-white/95 backdrop-blur-sm border-b">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center space-x-2">
            <Image
              src="/logo.png"
              alt="동풍직구"
              width={120}
              height={40}
              className="h-10 w-auto"
              priority
            />
          </Link>

          <nav className="hidden md:flex items-center space-x-8">
            <a href="#services" className="text-gray-700 hover:text-primary transition-colors">
              서비스
            </a>
            <a href="#advantages" className="text-gray-700 hover:text-primary transition-colors">
              강점
            </a>
            <a href="#process" className="text-gray-700 hover:text-primary transition-colors">
              이용방법
            </a>
            <a href="#custom-services" className="text-gray-700 hover:text-primary transition-colors">
              맞춤서비스
            </a>
          </nav>

          <div className="hidden md:flex items-center space-x-3">
            <Button variant="ghost" size="sm" asChild>
              <a href="tel:1234-5678">
                <Phone className="h-4 w-4" />
                문의전화
              </a>
            </Button>
            <Button variant="accent" size="sm" asChild>
              <a href="#contact">
                <MessageCircle className="h-4 w-4" />
                카카오톡 상담
              </a>
            </Button>
          </div>

          <button
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6 text-gray-700" />
            ) : (
              <Menu className="h-6 w-6 text-gray-700" />
            )}
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden border-t bg-white">
          <nav className="flex flex-col space-y-4 p-4">
            <a
              href="#services"
              className="text-gray-700 hover:text-primary transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              서비스
            </a>
            <a
              href="#advantages"
              className="text-gray-700 hover:text-primary transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              강점
            </a>
            <a
              href="#process"
              className="text-gray-700 hover:text-primary transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              이용방법
            </a>
            <a
              href="#custom-services"
              className="text-gray-700 hover:text-primary transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              맞춤서비스
            </a>
            <div className="flex flex-col space-y-2 pt-4 border-t">
              <Button variant="outline" size="sm" asChild>
                <a href="tel:1234-5678">
                  <Phone className="h-4 w-4" />
                  문의전화
                </a>
              </Button>
              <Button variant="accent" size="sm" asChild>
                <a href="#contact">
                  <MessageCircle className="h-4 w-4" />
                  카카오톡 상담
                </a>
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}