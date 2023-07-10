import styles from './styles.module.css'
import {BiSolidCheckCircle} from 'react-icons/bi'
import {MdOutlineCancel} from 'react-icons/md'
export default function WhoIsFor(){
    return(
        <section className={styles.sectionContainer}>
            <h2 className={styles.sectionTitle}><strong>Para Quem São Os Serviços da Calon?</strong></h2>
            <div className={styles.cardsContainer}>
                <div className={styles.comparingCardContainer}>
                    <h3 className={`${styles.comparingCardTitle} ${styles.comparingCardIsForTitle}`}><strong>Nosso serviços SÃO para você se:</strong></h3>
                    <div>
                        <ul>
                            <li>
                                <div className={styles.checkIconContainer}><BiSolidCheckCircle color='#ff410d' size={28}/></div>
                                <p>Se você está cansado de quebrar a cabeça com o marketing e quer deixar essa responsabilidade nas mãos de verdadeiros profissionais;</p>
                            </li>
                            <li>
                                <div className={styles.checkIconContainer}><BiSolidCheckCircle color='#ff410d' size={28}/></div>
                                <p>Se você tem um negócio digital ou físico, e quer dar os primeiros passos para começar a crescê-lo através das mídias e redes sociais;</p>  
                            </li>
                            <li>
                                <div className={styles.checkIconContainer}><BiSolidCheckCircle color='#ff410d' size={28}/></div>
                                <p>Se o seu negócio já tem resultados, e você sabe que um bom marketing é essencial para alavancá-lo para resultados ainda maiores;</p>
                            </li>
                            <li>
                                <div className={styles.checkIconContainer}><BiSolidCheckCircle color='#ff410d' size={28}/></div>
                                <p>Se você é um empresário com fome de sucesso, e deseja aumentar ainda mais o faturamento do seu negócio;</p>
                            </li>   
                        </ul>
                    </div>
                </div>
                <div className={styles.comparingCardContainer}>
                    <h3 className={`${styles.comparingCardTitle} ${styles.comparingCardIsForTitle}`}><strong>Nossos serviços NÃO são para você se:</strong></h3>
                    <div>
                        <ul>
                            <li>
                                <div className={styles.checkIconContainer}><MdOutlineCancel color='gray' size={28}/></div>
                                <p>Você está MUITO feliz com os seus resultados atuais, e não se vê ganhando mais no futuro;</p>    
                            </li>
                            <li>
                                <div className={styles.checkIconContainer}><MdOutlineCancel color='gray' size={28}/></div>
                                <p>Você acha que não vai precisar fazer literalmente <i>nada</i>, e simplesmente sentar a bunda na cadeira;</p>
                            </li>
                            <li>
                                <div className={styles.checkIconContainer}><MdOutlineCancel color='gray' size={28}/></div>
                                <p>Você não está disposto a ouvir a voz de profissionais experientes e com resultados <strong>comprovados</strong> no marketing;</p>
                            </li>
                            <li>
                                <div className={styles.checkIconContainer}><MdOutlineCancel color='gray' size={28}/></div>
                                <p>Você acha que não tem dinheiro o suficiente para investir na publicidade do seu negócio.</p>
                            </li>   
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}