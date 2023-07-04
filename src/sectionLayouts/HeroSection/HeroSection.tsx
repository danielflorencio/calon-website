import { barlow } from '@/app/fonts'
import styles from './styles.module.css'
export default function HeroSection(){
    return(
        <section className={styles.sectionContainer}>
            <h1 className={styles.sectionTitle}>Salus Mídia & Marketing</h1> 
            <h2 className={styles.sectionSubtitle}>A única agência com todas as suas necessidades de marketing em um só lugar.</h2>
            <button>Aperte e agende uma reunião agora.</button>
        </section>
    )
}