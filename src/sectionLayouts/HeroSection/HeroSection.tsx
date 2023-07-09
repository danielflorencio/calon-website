import styles from './styles.module.css'
import { barlow } from '@/app/fonts'
export default function HeroSection(){
    return(
        <section className={styles.sectionContainer}>
            <h1 className={`${styles.sectionTitle}`}>Calon Marketing & Tráfego</h1> 
            <h2 className={styles.sectionSubtitle}>A única agência com todas as suas necessidades de marketing em um só lugar.</h2>
            <button>APERTE E AGENDE UMA REUNIÃO AGORA.</button>
        </section>
    )
}