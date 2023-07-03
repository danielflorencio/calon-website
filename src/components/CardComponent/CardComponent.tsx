import './styles.css'
type CardComponentProps = {
    icon: string,
    cardTitle: string, 
    cardText: string,
}
export default function CardComponent({icon, cardTitle, cardText}: CardComponentProps){
    return(
        <div className='card-container'>
            <div className='icon-container'>{icon}</div>
            <h3 className='card-title'>{cardTitle}</h3>
            <p className='card-text'>{cardText}</p>
        </div>
    )
}