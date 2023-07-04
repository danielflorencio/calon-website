import ServiceCard from '@/components/ServiceCard/ServiceCard'
import './styles.css'
import {BiMoney} from 'react-icons/bi';
import { AiFillStar } from 'react-icons/ai';
import {FaTicketAlt} from 'react-icons/fa';
import {AiOutlineCreditCard} from 'react-icons/ai';
import {AiOutlineCalendar} from 'react-icons/ai';
import {BiHappyBeaming} from 'react-icons/bi';
import {MdOutlineHealthAndSafety} from 'react-icons/md';
import {BsFillBarChartLineFill} from 'react-icons/bs'
import IconDescriptionTitleComponent from '@/components/IconDescriptionTitle.tsx/IconDescriptionTitleComponent';
export default function(){
    return(
        <section className='new-services-section'>
            {/* <ServiceCard/> */}
            <h2 className='title'>UM MARKETING BEM-FEITO PODE TE TRAZER TODOS ESSES BENEFÍCIOS.</h2>
            <h3 className='subtitle'>Agende uma reunião e descubra como podemos te ajudar a consegui-los.</h3>
            <div className='benefits-container'>
            <IconDescriptionTitleComponent icon={<FaTicketAlt color='#f51767' size={38}/>} title='Maior Ticket Médio' description='Com mais pacientes chegando, aumentar o seu preço e também o faturamento é questão de tempo.'/>
            <IconDescriptionTitleComponent icon={<AiOutlineCreditCard color='#f51767' size={38}/>} title='Adeus aos convênios' description='Aumentando o seu preço, você dará um adeus a necessidade de atender pacientes de convênios.'/>
            <IconDescriptionTitleComponent icon={<AiOutlineCalendar color='#f51767' size={38}/>} title='Mais tempo livre' description='Com menos atendimentos de convênios, e mais faturamento, você poderá ter mais tempo para si e sua família. '/>
            <IconDescriptionTitleComponent icon={<BiHappyBeaming color='#f51767' size={38}/>} title='Mais qualidade de vida' description='Pare de se preocupar com o comercial da sua empresa. Foque na medicina, e o comercial é conosco.'/>
            <IconDescriptionTitleComponent icon={<MdOutlineHealthAndSafety color='#f51767' size={38}/>} title='Reconhecimento médico' description='Tendo cada vez mais pacientes, você será cada vez mais recomendado e se tornará uma autoridade ainda maior..'/>
            <IconDescriptionTitleComponent icon={<BsFillBarChartLineFill color='#f51767' size={38}/>} title='Sua empresa crescendo' description='Com mais lucro no caixa, você poderá contratar mais colaboradores, e até outros médicos para atender no seu lugar.'/>
            <IconDescriptionTitleComponent icon={<BiMoney color='#f51767' size={38}/>} title='Economia futura' description='Ao fechar contrato conosco agora, você garante descontos exclusivos (e talvez acesso gratuito) a futuros produtos da Salus.'/>
            <IconDescriptionTitleComponent icon={<AiFillStar color='#f51767' size={38}/>} title='6x Mais barato' description='Contratar os nossos serviços é 6x mais barato do que montar equipe própria. Feche contrato antes que o valor aumente.'/>
            </div>
        </section>
    )
}