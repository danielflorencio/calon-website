import CardComponent from '@/components/CardComponent/CardComponent'
import './styles.css'

const Cards = [
    {
        icon: 'Icon',
        cardTitle: 'Gestão de tráfego e geração de Leads.',
        cardText: 'Card Text Card Text Card Text Card Text Card Text Card Text ',
    }, 
    {
        icon: 'Icon',
        cardTitle: 'Desenvolvimento de páginas e websites atrativos.',
        cardText: 'Card Text Card Text Card Text Card Text Card Text Card Text ',
    },
    {
        icon: 'Icon',
        cardTitle: 'Copywriting e escrita persuasiva.',
        cardText: 'Card Text Card Text Card Text Card Text Card Text Card Text ',
    },
    {
        icon: 'Icon',
        cardTitle: 'Design gráfico e mídias sociais.',
        cardText: 'Card Text Card Text Card Text Card Text Card Text Card Text ',
    },
]

export default function ServicesSection(){
    return(
        <section className='services-section'>
            <h2 className='services-section-title'>Conheça os nossos serviços e como eles podem te ajudar.</h2>
            <h3 className=''>São eles que irão te levar para o próximo patamar</h3>
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