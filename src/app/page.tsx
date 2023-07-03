import HeroSection from '@/sectionLayouts/HeroSection/HeroSection'
import styles from './page.module.css'
import Navbar from '@/components/Navbar/Navbar'
import ServicesSection from '@/sectionLayouts/ServicesSection/ServicesSection'
import NavbarContainer from '@/components/Navbar/NavbarContainer'
import WhoIsFor from '@/sectionLayouts/WhoIsFor/WhoIsFor'

export default function Home() {
  return (
    <main className={styles.main}>
      <NavbarContainer/>
      {/* <Navbar/> */}
      <HeroSection/>
      <ServicesSection/>
      <WhoIsFor/>
    </main>
  )
}