import HeroSection from '@/sectionLayouts/HeroSection/HeroSection'
import styles from './page.module.css'

export default function Home() {
  return (
    <main className={styles.main}>
      <HeroSection/>
    </main>
  )
}
