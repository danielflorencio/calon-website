import './styles.css'
import {BiSolidCheckCircle} from 'react-icons/bi'
import {MdOutlineCancel} from 'react-icons/md'
export default function WhoIsFor(){
    return(
        <section className='who-is-for-section'>
            <h2 className='who-is-for-title'><strong>Para Quem São Os Serviços da Salus?</strong></h2>
            <div className='cards-container'>
                <div className='comparing-card-container'>
                    <h3 className='comparing-card-title comparing-card-is-for-title'><strong>Nosso serviços SÃO para você se:</strong></h3>
                    <div>
                        <ul>
                            <li>
                                <div className='check-icon-container'><BiSolidCheckCircle color='#f51767' size={28}/></div>
                                <p>Se você está cansado de quebrar a cabeça com o marketing e quer deixar essa responsabilidade nas mãos de verdadeiros profissionais;</p>
                            </li>
                            <li>
                                <div className='check-icon-container'><BiSolidCheckCircle color='#f51767' size={28}/></div>
                                <p>Se você tem um negócio digital ou físico, e quer dar os primeiros passos para começar a crescê-lo através das mídias e redes sociais;</p>  
                            </li>
                            <li>
                                <div className='check-icon-container'><BiSolidCheckCircle color='#f51767' size={28}/></div>
                                <p>Se o seu negócio já tem resultados, e você sabe que um bom marketing é essencial para alavancá-lo para resultados ainda maiores;</p>
                            </li>
                            <li>
                                <div className='check-icon-container'><BiSolidCheckCircle color='#f51767' size={28}/></div>
                                <p>Se você é um empresário com fome de sucesso, e deseja aumentar ainda mais o faturamento do seu negócio;</p>
                            </li>   
                        </ul>
                    </div>
                </div>
                <div className='comparing-card-container'>
                    <h3 className='comparing-card-title comparing-card-is-not-title'><strong>Nossos serviços NÃO são para você se:</strong></h3>
                    <div>
                        <ul>
                            <li>
                                <div className='check-icon-container'><MdOutlineCancel color='gray' size={28}/></div>
                                <p>Você está MUITO feliz com os seus resultados atuais, e não se vê ganhando mais no futuro;</p>    
                            </li>
                            <li>
                                <div className='check-icon-container'><MdOutlineCancel color='gray' size={28}/></div>
                                <p>Você acha que não vai precisar fazer literalmente <i>nada</i>, e simplesmente sentar a bunda na cadeira;</p>
                            </li>
                            <li>
                                <div className='check-icon-container'><MdOutlineCancel color='gray' size={28}/></div>
                                <p>Você não está disposto a ouvir a voz de profissionais experientes e com resultados <strong>comprovados</strong> no marketing;</p>
                            </li>
                            <li>
                                <div className='check-icon-container'><MdOutlineCancel color='gray' size={28}/></div>
                                <p>Você acha que não tem dinheiro o suficiente para investir na publicidade do seu negócio.</p>
                            </li>   
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}