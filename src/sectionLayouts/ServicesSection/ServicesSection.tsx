import {ReactElement} from 'react'
import CardComponent from '@/components/CardComponent/CardComponent'
import {MdComputer} from 'react-icons/md'
import {BsPen} from 'react-icons/bs'
import {BiBrain} from 'react-icons/bi'
import {AiOutlineInstagram} from 'react-icons/ai'
import styles from './styles.module.css'

type CardsType = {
    icon: ReactElement,
    cardTitle: string,
    cardText: string
}

const Cards: CardsType[] = [
    {
        icon: <BiBrain size={28}/>,
        cardTitle: 'Gestão de tráfego e geração de Leads.',
        cardText: 'Com o Tráfego Pago e a veiculação de anúncios online, você terá tudo o que precisa para atrair centenas e até milhares de clientes para os seus produtos todos os dias.',
    }, 
    {
        icon: <MdComputer size={28}/>,
        cardTitle: 'Desenvolvimento de páginas e websites atrativos.',
        cardText: 'Seu site é a vitrine do seu negócio. Com um site bem-feito, você passa seriedade e gera muito mais confiança nos seus clientes para que eles comprem de você.  ',
    },
    {
        icon: <BsPen size={28}/>,
        cardTitle: 'Copywriting e escrita persuasiva.',
        cardText: 'Não adianta produtos bonitos, se você não convencer seus clientes de que eles são úteis. Na Calon, nós usamos o poder da escrita persuasiva para multiplicar suas vendas.',
    },
    {
        icon: <AiOutlineInstagram size={28}/>,
        cardTitle: 'Design gráfico e mídias sociais.',
        cardText: 'Todas as empresas precisam de materiais publicitários para fazer seu marketing e mostrar o que tem a oferecer Aqui, nós também suprimos essa necessidade.',
    },
]

export default function ServicesSection(){
    return(
        <section id='services' className={styles.sectionContainer}>
            <h2 className={styles.sectionTitle}>Conheça os nossos serviços e como eles podem te ajudar.</h2>
            <h3 className={styles.sectionSubtitle}>São eles que irão te levar para o próximo patamar</h3>
            <div className={styles.cardsContainer}>
                {Cards.map((card, index) => (<CardComponent key={index} icon={card.icon} cardText={card.cardText} cardTitle={card.cardTitle}/>))}
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