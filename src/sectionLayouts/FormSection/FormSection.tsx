import Form from '@/components/Form/Form'
import styles from './styles.module.css'
export default function FormSection(){
    return(
        <section className={styles.section}>
            <h2 className={styles.title}>Title</h2>
            <h3 className={styles.subtitle}>Subtitle</h3>
            <Form/>
        </section>
    )
}