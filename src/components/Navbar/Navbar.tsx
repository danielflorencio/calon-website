'use client'
import styles from './styles.module.css'
import Image from 'next/image'
export default function Navbar(){

    return(
        <div className={styles.nav}>
            <Image src="/logo-orange-svg.svg" alt='logo' width={240} height={120} style={{marginTop: -35, marginBottom: -35, marginLeft: '-5%'}} priority/>
            <div className={styles.rightAlignContainer}>
            <ul className={styles.ul}>
                <li className={styles.li}><a href='#benefits'>Benefícios</a></li>
                <li className={styles.li}><a href='#services'>Serviços</a></li>
                <li className={styles.li}><a>Perguntas frequentes</a></li>
            </ul>
            <button className={styles.button}>Agende uma reunião</button>
            </div>
        </div>
    )
}