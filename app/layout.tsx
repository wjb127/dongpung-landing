import type { Metadata } from 'next'
import './globals.css'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'

export const metadata: Metadata = {
  title: '동풍직구 - 중국 직구 & 수입 대행 전문',
  description: '중국에서 한국까지, 모든 직구와 수입을 한 번에! 웨이하이 직항 특송, 구매대행, 배송대행, 맞춤형 3PL 서비스',
  keywords: '중국직구, 타오바오직구, 배송대행, 구매대행, 웨이하이, 특송서비스, 3PL, OEM, ODM',
  openGraph: {
    title: '동풍직구 - 중국 직구 & 수입 대행 전문',
    description: '중국에서 한국까지, 모든 직구와 수입을 한 번에!',
    images: ['/logo.png'],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: '동풍직구 - 중국 직구 & 수입 대행 전문',
    description: '중국에서 한국까지, 모든 직구와 수입을 한 번에!',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ko" className="scroll-smooth">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}