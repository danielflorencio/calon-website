import HeroSection from '@/sectionLayouts/HeroSection/HeroSection'
import styles from './page.module.css'
import ServicesSection from '@/sectionLayouts/ServicesSection/ServicesSection'
import NavbarContainer from '@/components/Navbar/NavbarContainer'
import WhoIsFor from '@/sectionLayouts/WhoIsFor/WhoIsFor'
import StepByStepSection from '@/sectionLayouts/StepByStepSection/StepByStepSection'
import BenefitsSection from '@/sectionLayouts/BenefitsSection/BenefitsSection'
import FormSection from '@/sectionLayouts/FormSection/FormSection'

// New Collor Palette 
// #EDD70C 
// #F7C30C
// #E09200 
// #FA7F05 

import dynamic from 'next/dynamic'

const ClientSideRenderedNavbar = dynamic(() => import('../components/Navbar/NavbarContainer'), { ssr: false })

export default function Home() {
  return (
    <main className={styles.main}>
      {/* <NavbarContainer/> */}
      <ClientSideRenderedNavbar/>
      <HeroSection/>
      <BenefitsSection/>
      <WhoIsFor/>
      <ServicesSection/>
      <StepByStepSection/>
      <FormSection/>
    </main>
  )
}