import {ReactElement } from 'react'
import { IconType } from 'react-icons'
import styles from './styles.module.css'
type CardComponentProps = {
    icon: ReactElement,
    cardTitle: string,
    cardText: string,
}
export default function CardComponent({icon, cardTitle, cardText}: CardComponentProps){
    return(
        <div className={styles.cardContainer}>
            <div className={styles.iconContainer}>{icon}</div>
            <h3 className={styles.cardTitle}>{cardTitle}</h3>
            <p className={styles.cardText}>{cardText}</p>
        </div>
    )
}