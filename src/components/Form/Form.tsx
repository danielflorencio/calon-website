'use client'
import { useState } from 'react'
import styles from './styles.module.css'
export default function Form(){

    const [email, setEmail] = useState<string>();
    const [name, setName] = useState<string>();
    const [phone, setPhone] = useState<string>();
    const [message, setMessage] = useState<string>();

    return(
        <form className={styles.form}>
            <input type='text' placeholder='Email' value={email} onChange={e => setEmail(e.target.value)}></input>
            <input type='text' placeholder='Nome completo' value={name} onChange={e => setName(e.target.value)}></input>
            <input type='text' placeholder='Telefone' value={phone} onChange={e => setPhone(e.target.value)}></input>
            <input type='text' placeholder='Mensagem' value={message} onChange={e => setMessage(e.target.value)}></input>
        </form>
    )
}