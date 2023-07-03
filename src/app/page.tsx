import HeroSection from '@/sectionLayouts/HeroSection/HeroSection'
import styles from './page.module.css'
import Navbar from '@/components/Navbar/Navbar'
import ServicesSection from '@/sectionLayouts/ServicesSection/ServicesSection'

export default function Home() {
  return (
    <main className={styles.main}>
      <Navbar/>
      <HeroSection/>
      <ServicesSection/>
    </main>
  )
}
