import HeroSection from '@/components/sections/HeroSection'
import ServiceIntro from '@/components/sections/ServiceIntro'
import CustomServices from '@/components/sections/CustomServices'
import Advantages from '@/components/sections/Advantages'
import ProcessFlow from '@/components/sections/ProcessFlow'
import CTASection from '@/components/sections/CTASection'

export default function Home() {
  return (
    <>
      <HeroSection />
      <ServiceIntro />
      <Advantages />
      <ProcessFlow />
      <CustomServices />
      <CTASection />
    </>
  )
}