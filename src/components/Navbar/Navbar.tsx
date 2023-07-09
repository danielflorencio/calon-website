'use client'
import styles from './styles.module.css'
import Image from 'next/image'
import logo from '../../../public/bg-branco.png'
export default function Navbar(){

    return(
        <nav className={styles.nav}>
            <Image src={logo.src} alt='logo' width={110} height={30}/>
            <div className={styles.rightAlignContainer}>
            <ul className={styles.ul}>
                <li className={styles.li}><a href='#benefits'>Benefícios</a></li>
                <li className={styles.li}><a href='#services'>Serviços</a></li>
                <li className={styles.li}><a>Perguntas frequentes</a></li>
            </ul>
            <button className={styles.button}>Agende uma reunião</button>
            </div>
        </nav>
    )
}