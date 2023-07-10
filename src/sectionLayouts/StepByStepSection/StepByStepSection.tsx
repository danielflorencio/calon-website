import ImgTitleDescriptionLayout from '@/components/ImgTitleDescriptionLayout/ImgTitleDescriptionLayout'
import Image from 'next/image'
import img1 from '../../../public/img1.png'
import img2 from '../../../public/img2.png'
import img3 from '../../../public/img3.png'
import styles from './styles.module.css'
export default function StepByStepSection(){
    return(
        <section className={styles.stepByStepSection}>
            <h2 className={styles.sectionTitle}>O passo-a-passo da evolução do seu negócio está aqui.</h2>
            <h3 className={styles.sectionSubtitle}>É isso o que irá acontecer a partir de agora.</h3>
            <div className={styles.containerPositioner}>
            <ImgTitleDescriptionLayout 
            alt='' 
            img={img1} 
            title='Passo 1 - Consultoria gratuita.' 
            style='left-right' 
            paragraphs={
                ['Primeiro nós iremos começar do básico: uma reunião gratuita onde iremos analisar o seu negócio e o que você precisa para fazê-lo crescer.',
                 'Aqui nós iremos decidir se será melhor realizar um contrato recorrente de prestação de serviços, ou se um serviço específico será suficiente para você.',
                 'P.S.: Muitos clientes acabam recebendo praticamente uma consultoria gratuita nesta etapa.']}/>

            <ImgTitleDescriptionLayout 
            alt='' 
            img={img2} 
            title='Passo 2 - Execução e faturamento.' 
            style='right-left' 
            paragraphs={
                ['Se fechado o contrato, aqui é onde colocaremos a sua empresa para finalmente receber mais clientes.', 
                'Coletaremos os dados para criar o seu site persuasivo, fazer funcionar as campanhas de anúncios, e aumentar o seu faturamento.']}/>

            <ImgTitleDescriptionLayout 
            alt='' 
            img={img3} 
            title='Passo 3 - Análise e escala.' 
            style='left-right' 
            paragraphs={
                ['Aqui é onde a felicidade mora, o nosso passo favorito.', 
                'Após coletarmos os dados e aprimorarmos as primeiras campanhas, poderemos saber exatamente o que fazer para multiplicar ainda mais o seu lucro e chegada de pacientes particulares.']}/>
            </div>
        </section>
    )
}