import Form from '@/components/Form/Form'
import styles from './styles.module.css'
export default function FormSection(){
    return(
        <section className={styles.section}>
            <h2 className={styles.title}>Fale com um dos nossos especialistas e descubra como podemos fazer a sua empresa crescer.</h2>
            <h3 className={styles.subtitle}>Preencha o formulário abaixo para que possamos entrar em contato.</h3>
            <Form/>
        </section>
    )
}