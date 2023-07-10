import { ReactElement } from 'react'
import styles from './styles.module.css'

type Props = {
    icon: ReactElement,
    title: string, 
    description: string
}

export default function IconDescriptionTitleComponent({icon, title, description}: Props){
    return(
        <div className={styles.benefitBlock}>                
            <div className={styles.benefitIconContainer}>
                {icon} 
            </div>
            <div className={styles.titleAndTextContainer}>
                <h3 className={styles.benefitBlockTitle}>{title}</h3>
                <p className={styles.benefitBlockDescription}>{description}</p>
            </div>    
        </div>
      )
}