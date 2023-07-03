import CardComponent from '@/components/CardComponent/CardComponent'
import './styles.css'

const Cards = [
    {
        icon: 'Icon',
        cardTitle: 'Card Title',
        cardText: 'Card Text Card Text Card Text Card Text Card Text Card Text ',
    }, 
    {
        icon: 'Icon',
        cardTitle: 'Card Title',
        cardText: 'Card Text Card Text Card Text Card Text Card Text Card Text ',
    },
    {
        icon: 'Icon',
        cardTitle: 'Card Title',
        cardText: 'Card Text Card Text Card Text Card Text Card Text Card Text ',
    },
    {
        icon: 'Icon',
        cardTitle: 'Card Title',
        cardText: 'Card Text Card Text Card Text Card Text Card Text Card Text ',
    },
    {
        icon: 'Icon',
        cardTitle: 'Card Title',
        cardText: 'Card Text Card Text Card Text Card Text Card Text Card Text ',
    }
]

export default function ServicesSection(){
    return(
        <section className='services-section'>
            <h2 className='services-section-title'>Section 2 title.</h2>
            <div className='cards-container'>
                {Cards.map(card => (<CardComponent icon={card.icon} cardText={card.cardText} cardTitle={card.cardTitle}/>))}
            </div>
        </section>
    )
}
/*

LISTA DE SERVIÇOS:

    - Gestão de tráfego (entre 1200 e 1500 reais);
    - Desenvolvimento de Copies (a depender da demanda);
    - Desenvolvimento de Landing pages (Next.Js & Wordpress){
        - Entre 600 reais e 1000 reais para landing pages;
        - Entre 1500 reais e 3000 reais para websites mais complexos e com múltiplas páginas;
    }
    - Design & Social media (Packs de posts e criativos); 
    - Desenvolvimento de Chatbot (Falar com o Pedro no whatsapp para entender mais sobre essa parte);

*/