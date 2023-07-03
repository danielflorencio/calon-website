'use client'
import './styles.css'

export default function Navbar(){

    return(
        <nav className='nav'>
            <ul>
                <li><a>Benefícios</a></li>
                <li><a>Serviços</a></li>
                <li><a>Perguntas frequentes</a></li>
            </ul>
            <button>Agende uma reunião</button>
        </nav>
    )
}