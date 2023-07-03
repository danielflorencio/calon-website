import ServiceCard from '@/components/ServiceCard/ServiceCard'
import './styles.css'
import {BiMoney} from 'react-icons/bi';
import IconDescriptionTitleComponent from '@/components/IconDescriptionTitle.tsx/IconDescriptionTitleComponent';
export default function(){
    return(
        <section className='new-services-section'>
            {/* <ServiceCard/> */}
            <h2 className='new-services-section-title'>Título da seção.</h2>
            <div className='benefits-container'>
            <IconDescriptionTitleComponent icon={<BiMoney color='#f51767' size={38}/>} title='Teste' description='Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste'/>
            <IconDescriptionTitleComponent icon={<BiMoney color='#f51767' size={38}/>} title='Teste' description='Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste'/>
            <IconDescriptionTitleComponent icon={<BiMoney color='#f51767' size={38}/>} title='Teste' description='Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste'/>
            <IconDescriptionTitleComponent icon={<BiMoney color='#f51767' size={38}/>} title='Teste' description='Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste'/>
            <IconDescriptionTitleComponent icon={<BiMoney color='#f51767' size={38}/>} title='Teste' description='Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste'/>
            <IconDescriptionTitleComponent icon={<BiMoney color='#f51767' size={38}/>} title='Teste' description='Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste'/>
            <IconDescriptionTitleComponent icon={<BiMoney color='#f51767' size={38}/>} title='Teste' description='Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste'/>
            <IconDescriptionTitleComponent icon={<BiMoney color='#f51767' size={38}/>} title='Teste' description='Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste'/>
            </div>
        </section>
    )
}