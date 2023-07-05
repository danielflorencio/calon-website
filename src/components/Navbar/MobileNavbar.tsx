import styles from './styles.module.css'
import Image from 'next/image'
import logo from '../../../public/salus-black-logo.png'
import {FaBars} from 'react-icons/fa'
import {AiOutlineArrowUp} from 'react-icons/ai'
import { useState } from 'react';
export default function MobileNavbar(){
    const [isClosed, setIsClosed] = useState<boolean>(true);

    const handleNavbarAction = () => {
        if(isClosed){
            setIsClosed(false);
        } else{
            setIsClosed(true)
        }
    }

    return(
        <nav className={styles.navMobile}>
            <div className={styles.mobileNavHeader}>
                <Image src={logo.src} alt='logo' width={80} height={40}/>
                {isClosed ? (<FaBars onClick={handleNavbarAction} className={styles.navIcon}/>) : <AiOutlineArrowUp onClick={handleNavbarAction} className={styles.navIcon}/>}
            </div>
            {isClosed ? (<></>) : (
                <ul className={styles.mobileUl}>
                    <li className={styles.mobileLi}>Benefícios</li>
                    <li className={styles.mobileLi}>Serviços</li>
                    <li className={styles.mobileLi}>Perguntas Frequentes</li>
                </ul>
            )}
        </nav>
    )
}