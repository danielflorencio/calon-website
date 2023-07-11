import Image from 'next/image'
import styles from './styles.module.css'
// import { StaticImageData } from 'next/image'

type Props = {
    img: string,
    alt: string, 
    title: string,
    paragraphs: string[],
    style: 'left-right' | 'right-left'
}

export default function ImgTitleDescriptionLayout({img, alt, title, style, paragraphs}: Props){
    return(
        <div className={`${styles.greaterContainer} ${style === 'left-right' ? (styles.leftRightPositioning) : (styles.rightLeftPositioning)}`}>
            <div className={styles.imgContainer}>
               <Image src={img} alt={alt} className={styles.img} width="300" height="300"/>
            </div>
            <div className={styles.textContainer}>
                <h3>{title}</h3>
                {paragraphs.map((paragraph, index) => <p key={index}>{paragraph}</p>)}
                {/* <p>Primeiro nós iremos começar do básico: uma reunião gratuita onde iremos analisar o seu negócio e o que você precisa para fazê-lo crescer.</p> */}
                {/* <p>Aqui nós iremos decidir se será melhor realizar um contrato recorrente de prestação de serviços, ou se um serviço específico será suficiente para você.</p> */}
                {/* <p><i><strong>P.S.:</strong> Muitos clientes acabam recebendo praticamente uma consultoria gratuita nesta etapa.</i></p> */}
            </div>
        </div>
    )
}