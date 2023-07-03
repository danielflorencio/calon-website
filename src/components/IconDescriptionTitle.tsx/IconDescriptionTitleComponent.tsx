import { ReactElement } from 'react'
import './styles.css'

type Props = {
    icon: ReactElement,
    title: string, 
    description: string
}

export default function({icon, title, description}: Props){
    return(
        <div className="benefit-block">                
            <div className='benefit-icon-container'>
                {icon} 
            </div>
            <div className='title-and-text-container'>
                <h3 className='benefit-block-title'>{title}</h3>
                <p className='benefit-block-description'>{description}</p>
            </div>    
        </div>
      )
}