import ServiceCard from '@/components/ServiceCard/ServiceCard'
import styles from './styles.module.css'
import {BiMoney} from 'react-icons/bi';
import { AiFillStar } from 'react-icons/ai';
import {FaTicketAlt} from 'react-icons/fa';
import {AiOutlineCreditCard} from 'react-icons/ai';
import {AiOutlineCalendar} from 'react-icons/ai';
import {BiHappyBeaming} from 'react-icons/bi';
import {MdOutlineHealthAndSafety} from 'react-icons/md';
import {BsFillBarChartLineFill} from 'react-icons/bs'
import IconDescriptionTitleComponent from '@/components/IconDescriptionTitle/IconDescriptionTitleComponent';
export default function BenefitsSection(){
    return(
        <section id='benefits' className={styles.sectionContainer}>
            <h2 className={styles.sectionTitle}>Um Marketing bem-feito pode te trazer todos esses benefícios.</h2>
            <h3 className={styles.sectionSubtitle}>Agende uma reunião e descubra como podemos te ajudar a consegui-los.</h3>
            <div className={styles.benefitsContainer}>
            <IconDescriptionTitleComponent icon={<FaTicketAlt color='#ff410d' size={38}/>} title='Maior Ticket Médio' description='Com mais clientes chegando, aumentar o seu preço e também o faturamento é questão de tempo.'/>
            <IconDescriptionTitleComponent icon={<AiOutlineCreditCard color='#ff410d' size={38}/>} title='Mais dinheiro, menos trabalho.' description='Aumentando o seu preço, você dará adeus à necessidade de atender clientes que não valem o tempo.'/>
            <IconDescriptionTitleComponent icon={<BiHappyBeaming color='#ff410d' size={38}/>} title='Mais qualidade de vida' description='Pare de se preocupar com o comercial da sua empresa. Foque no que você é bom, e o comercial é conosco.'/>
            <IconDescriptionTitleComponent icon={<AiOutlineCalendar color='#ff410d' size={38}/>} title='Mais tempo livre' description='Com menos trabalho para fazer o seu marketing, e mais faturamento, você terá mais tempo para si e sua família. '/>
            <IconDescriptionTitleComponent icon={<BsFillBarChartLineFill color='#ff410d' size={38}/>} title='Sua empresa crescendo' description='Com mais lucro no caixa, você poderá até contratar mais colaboradores, alavancando ainda mais sua empresa.'/>

            {/* <IconDescriptionTitleComponent icon={<MdOutlineHealthAndSafety color='#ff410d' size={38}/>} title='Reconhecimento médico' description='Tendo cada vez mais pacientes, você será cada vez mais recomendado e se tornará uma autoridade ainda maior..'/> */}
            {/* <IconDescriptionTitleComponent icon={<BiMoney color='#ff410d' size={38}/>} title='Economia futura' description='Ao fechar contrato conosco agora, você garante descontos exclusivos (e talvez acesso gratuito) a futuros produtos da Salus.'/> */}
            {/* <IconDescriptionTitleComponent icon={<AiFillStar color='#ff410d' size={38}/>} title='6x Mais barato' description='Contratar os nossos serviços é 6x mais barato do que montar equipe própria. Feche contrato antes que o valor aumente.'/> */}
            </div>
        </section>
    )
}